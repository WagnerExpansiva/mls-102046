/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import {
  canTransitionChangeOrderWithInvariants,
  hasChangeOrderText,
  isNonNegativeChangeAmount,
  type ChangeOrder,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface HandoffChangeOrderToProjectManagerInput {
  changeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}

export interface HandoffChangeOrderToProjectManagerOutput {
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

function toOutput(order: ChangeOrder): HandoffChangeOrderToProjectManagerOutput {
  return {
    changeOrderId: order.changeOrderId,
    clientRef: order.clientRef,
    projectRef: order.projectRef,
    description: order.description,
    scopeImpact: order.scopeImpact,
    scheduleImpact: order.scheduleImpact,
    changeAmount: order.changeAmount,
    submittedAt: order.submittedAt,
    ...(order.forwardedForClientApprovalAt === null
      ? {}
      : { forwardedForClientApprovalAt: order.forwardedForClientApprovalAt }),
    status: order.status,
  };
}

export async function handoffChangeOrderToProjectManager(
  ctx: RequestContext,
  input: HandoffChangeOrderToProjectManagerInput,
): Promise<HandoffChangeOrderToProjectManagerOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');

  return ctx.data.runInTransaction(async () => {
    const order = await changeOrders.getById(input.changeOrderId);
    if (!order) {
      throw new AppError(
        'NOT_FOUND',
        `ChangeOrder not found: ${input.changeOrderId}`,
        404,
        { changeOrderId: input.changeOrderId },
      );
    }

    const validationErrors: string[] = [];
    if (order.status !== 'submitted') {
      validationErrors.push('change order must be in submitted status');
    }
    if (!hasChangeOrderText(input.description)) {
      validationErrors.push('description must not be blank');
    }
    if (!hasChangeOrderText(input.scopeImpact)) {
      validationErrors.push('scopeImpact must not be blank');
    }
    if (!hasChangeOrderText(input.scheduleImpact)) {
      validationErrors.push('scheduleImpact must not be blank');
    }
    if (!isNonNegativeChangeAmount(input.changeAmount)) {
      validationErrors.push('changeAmount must be monetary and non-negative');
    }
    if (validationErrors.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'ChangeOrder is not actionable for handoff to the project manager.',
        400,
        { ruleId: 'managerActionableChangeOrder', errors: validationErrors },
      );
    }

    const now = ctx.clock.nowIso();
    const mutated: ChangeOrder = {
      ...order,
      description: input.description,
      scopeImpact: input.scopeImpact,
      scheduleImpact: input.scheduleImpact,
      changeAmount: input.changeAmount,
      forwardedForClientApprovalAt: now,
      status: 'pendingClientApproval',
    };

    if (!canTransitionChangeOrderWithInvariants(order, mutated.status)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'ChangeOrder cannot transition to pendingClientApproval.',
        400,
        { ruleId: 'managerActionableChangeOrder', from: order.status, to: mutated.status },
      );
    }

    await changeOrders.save(mutated);
    return toOutput(mutated);
  });
}
