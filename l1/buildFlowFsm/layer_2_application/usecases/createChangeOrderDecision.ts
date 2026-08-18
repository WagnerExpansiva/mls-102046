/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IPlatformUserRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.js';
import {
  canRegisterChangeOrderDecision,
  hasUniqueChangeOrderDecisionId,
  hasValidChangeOrderDecisionReferences,
  isChangeOrderDecisionValue,
  isValidChangeOrderDecision,
  type ChangeOrderDecision,
  type ChangeOrderDecisionValue,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';
import { canTransitionChangeOrderWithInvariants } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { validatePlatformUser } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.js';

export interface CreateChangeOrderDecisionInput {
  changeOrder: string;
  decision: string;
}

export interface CreateChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export async function createChangeOrderDecision(
  ctx: RequestContext,
  input: CreateChangeOrderDecisionInput,
): Promise<CreateChangeOrderDecisionOutput> {
  const decisions = resolveRepository<IChangeOrderDecisionRepository>(ctx, 'ChangeOrderDecision');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const platformUsers = resolveRepository<IPlatformUserRepository>(ctx, 'PlatformUser');

  if (!input.changeOrder.trim()) {
    throw new AppError('VALIDATION_ERROR', 'changeOrder must be present.', 400);
  }
  if (!isChangeOrderDecisionValue(input.decision)) {
    throw new AppError('VALIDATION_ERROR', 'decision must be approved or declined.', 400);
  }

  const actorId = ctx.sessionContext.actorId;
  if (!actorId || !actorId.trim()) {
    throw new AppError('VALIDATION_ERROR', 'An acting platform user is required.', 400);
  }

  const order = await changeOrders.getById(input.changeOrder);
  if (!order) {
    throw new AppError('NOT_FOUND', `ChangeOrder not found: ${input.changeOrder}`, 404, {
      changeOrder: input.changeOrder,
    });
  }
  if (!canTransitionChangeOrderWithInvariants(order, input.decision === 'approved' ? 'approved' : 'declined')) {
    throw new AppError(
      'CONFLICT',
      'The change order is not in a decision-eligible state.',
      409,
      { changeOrder: order.changeOrderId, status: order.status },
    );
  }

  const actor = await platformUsers.getById(actorId);
  if (!actor) {
    throw new AppError('NOT_FOUND', `PlatformUser not found: ${actorId}`, 404, {
      platformUserId: actorId,
    });
  }
  if (!validatePlatformUser(actor)) {
    throw new AppError('VALIDATION_ERROR', 'The acting platform user is invalid.', 400, {
      platformUserId: actor.platformUserId,
    });
  }

  // The declared model exposes only ChangeOrder.clientRef/projectRef and PlatformUser.platformUserId;
  // it does not establish either role association, so the authorization rules must block safely.
  if (input.decision === 'approved') {
    // rule: onlyClientApprovesOwnChangeOrder
    throw new AppError(
      'VALIDATION_ERROR',
      'The model cannot establish that the acting user is the client associated with this change order.',
      400,
      { ruleId: 'onlyClientApprovesOwnChangeOrder' },
    );
  }
  if (input.decision === 'declined') {
    // rule: onlyProjectManagerDeclinesChangeOrder
    throw new AppError(
      'VALIDATION_ERROR',
      'The model cannot establish that the acting user is the project manager for this change order.',
      400,
      { ruleId: 'onlyProjectManagerDeclinesChangeOrder' },
    );
  }

  const now = ctx.clock.nowIso();
  const decisionValue: ChangeOrderDecisionValue = input.decision;
  return ctx.data.runInTransaction(async () => {
    const existing = await decisions.listByChangeOrderId(order.changeOrderId);
    if (!canRegisterChangeOrderDecision(
      { changeOrder: order.changeOrderId, decision: decisionValue },
      existing,
    )) {
      throw new AppError('CONFLICT', 'A different decision already exists for this change order.', 409, {
        changeOrder: order.changeOrderId,
      });
    }

    const decision: ChangeOrderDecision = {
      changeOrderDecisionId: ctx.idGenerator.newId(),
      changeOrder: order.changeOrderId,
      madeByPlatformUser: actor.platformUserId,
      decision: decisionValue,
      decidedAt: now,
    };
    const existingIds = existing.map((item) => item.changeOrderDecisionId);
    if (!hasValidChangeOrderDecisionReferences(decision)
      || !hasUniqueChangeOrderDecisionId(decision, existingIds)
      || !isValidChangeOrderDecision(decision, now, existingIds)) {
      throw new AppError('VALIDATION_ERROR', 'The change order decision is invalid.', 400, {
        changeOrderDecisionId: decision.changeOrderDecisionId,
      });
    }

    await decisions.save(decision);
    order.status = decisionValue === 'approved' ? 'approved' : 'declined';
    await changeOrders.save(order);

    return {
      changeOrderDecisionId: decision.changeOrderDecisionId,
      changeOrder: decision.changeOrder,
      madeByPlatformUser: decision.madeByPlatformUser,
      decision: decision.decision,
      decidedAt: decision.decidedAt,
    };
  });
}
