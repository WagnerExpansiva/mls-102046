/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type { ChangeOrder, ChangeOrderStatus } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { canTransitionChangeOrderWithInvariants } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type { ChangeOrderDecisionValue } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';
import { isChangeOrderDecisionValue } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';

export interface ApproveChangeOrderDecisionInput {
  changeOrderId: string;
  clientId: string;
  projectId: string;
  status: string;
}

export interface ApproveChangeOrderDecisionOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt?: string;
  status: string;
}

function toOutput(order: ChangeOrder): ApproveChangeOrderDecisionOutput {
  const output: ApproveChangeOrderDecisionOutput = {
    changeOrderId: order.changeOrderId,
    clientRef: order.clientRef,
    projectRef: order.projectRef,
    description: order.description,
    scopeImpact: order.scopeImpact,
    scheduleImpact: order.scheduleImpact,
    changeAmount: order.changeAmount,
    submittedAt: order.submittedAt,
    status: order.status,
  };
  if (order.forwardedForClientApprovalAt !== null) {
    output.forwardedForClientApprovalAt = order.forwardedForClientApprovalAt;
  }
  return output;
}

export async function approveChangeOrderDecision(
  ctx: RequestContext,
  input: ApproveChangeOrderDecisionInput,
): Promise<ApproveChangeOrderDecisionOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const decisions = resolveRepository<IChangeOrderDecisionRepository>(ctx, 'ChangeOrderDecision');
  const order = await changeOrders.getById(input.changeOrderId);

  if (!order) {
    throw new AppError('NOT_FOUND', `Change order not found: ${input.changeOrderId}`, 404, {
      changeOrderId: input.changeOrderId,
    });
  }
  if (order.clientRef !== input.clientId || order.projectRef !== input.projectId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The selected client and project do not match the change order.',
      400,
      { changeOrderId: input.changeOrderId },
    );
  }
  if (!isChangeOrderDecisionValue(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The decision status must be approved or declined.',
      400,
      { ruleId: 'clientApprovableChangeOrder' },
    );
  }

  const decision = input.status as ChangeOrderDecisionValue;
  // rule: clientApprovableChangeOrder — client decisions are only accepted from the pending state.
  if (
    order.status !== 'pendingClientApproval'
    || !canTransitionChangeOrderWithInvariants(order, decision)
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The change order is not approvable by the client in its current state.',
      400,
      { ruleId: 'clientApprovableChangeOrder', status: order.status, requestedStatus: input.status },
    );
  }

  const actorId = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
  if (!actorId || actorId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'An authenticated platform user is required.', 400);
  }

  const updatedOrder: ChangeOrder = { ...order, status: decision };
  const now = ctx.clock.nowIso();
  await ctx.data.runInTransaction(async () => {
    await changeOrders.save(updatedOrder);
    await decisions.save({
      changeOrderDecisionId: ctx.idGenerator.newId(),
      changeOrder: updatedOrder.changeOrderId,
      madeByPlatformUser: actorId,
      decision,
      decidedAt: now,
    });
  });

  return toOutput(updatedOrder);
}
