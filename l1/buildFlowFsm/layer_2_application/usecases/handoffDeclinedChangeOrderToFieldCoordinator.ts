/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffDeclinedChangeOrderToFieldCoordinator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import {
  canTransitionChangeOrderWithInvariants,
  hasChangeOrderText,
  isNonNegativeChangeAmount,
  validateChangeOrder,
  type ChangeOrder,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface HandoffDeclinedChangeOrderToFieldCoordinatorInput {
  changeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}

export interface HandoffDeclinedChangeOrderToFieldCoordinatorOutput {
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

export async function handoffDeclinedChangeOrderToFieldCoordinator(
  ctx: RequestContext,
  input: HandoffDeclinedChangeOrderToFieldCoordinatorInput,
): Promise<HandoffDeclinedChangeOrderToFieldCoordinatorOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const order = await changeOrders.getById(input.changeOrderId);

  if (!order) {
    throw new AppError(
      'NOT_FOUND',
      `ChangeOrder not found: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  const inputErrors: string[] = [];
  if (!hasChangeOrderText(input.description)) inputErrors.push('description must not be blank');
  if (!hasChangeOrderText(input.scopeImpact)) inputErrors.push('scopeImpact must not be blank');
  if (!hasChangeOrderText(input.scheduleImpact)) inputErrors.push('scheduleImpact must not be blank');
  if (!isNonNegativeChangeAmount(input.changeAmount)) {
    inputErrors.push('changeAmount must be monetary and non-negative');
  }
  if (inputErrors.length > 0) {
    throw new AppError('VALIDATION_ERROR', inputErrors.join('; '), 400, { fields: inputErrors });
  }

  const updatedOrder: ChangeOrder = {
    ...order,
    description: input.description,
    scopeImpact: input.scopeImpact,
    scheduleImpact: input.scheduleImpact,
    changeAmount: input.changeAmount,
    status: 'declined',
  };

  if (!canTransitionChangeOrderWithInvariants(order, 'declined')) {
    throw new AppError(
      'CONFLICT',
      `ChangeOrder cannot transition from ${order.status} to declined`,
      409,
      { changeOrderId: order.changeOrderId, from: order.status, to: 'declined' },
    );
  }

  const validationErrors = validateChangeOrder(updatedOrder);
  if (validationErrors.length > 0) {
    throw new AppError('VALIDATION_ERROR', validationErrors.join('; '), 400, {
      changeOrderId: updatedOrder.changeOrderId,
      errors: validationErrors,
    });
  }

  await ctx.data.runInTransaction(async () => {
    await changeOrders.save(updatedOrder);
  });

  return {
    changeOrderId: updatedOrder.changeOrderId,
    clientRef: updatedOrder.clientRef,
    projectRef: updatedOrder.projectRef,
    description: updatedOrder.description,
    scopeImpact: updatedOrder.scopeImpact,
    scheduleImpact: updatedOrder.scheduleImpact,
    changeAmount: updatedOrder.changeAmount,
    submittedAt: updatedOrder.submittedAt,
    ...(updatedOrder.forwardedForClientApprovalAt === null
      ? {}
      : { forwardedForClientApprovalAt: updatedOrder.forwardedForClientApprovalAt }),
    status: updatedOrder.status,
  };
}
