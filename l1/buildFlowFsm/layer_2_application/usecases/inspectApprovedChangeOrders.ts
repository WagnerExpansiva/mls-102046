/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectApprovedChangeOrders.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';

export interface InspectApprovedChangeOrderInput {
  changeOrderId: string;
}

export interface InspectApprovedChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt?: string | null;
  status: string;
}

export async function inspectApprovedChangeOrders(
  ctx: RequestContext,
  input: InspectApprovedChangeOrderInput,
): Promise<InspectApprovedChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const changeOrder = await changeOrders.getById(input.changeOrderId);

  if (!changeOrder) {
    throw new AppError(
      'NOT_FOUND',
      `ChangeOrder not found: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  // rule: clientVisibleApprovedChangeOrder
  if (changeOrder.status !== 'approved') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only approved change orders are visible to the client.',
      400,
      { ruleId: 'clientVisibleApprovedChangeOrder', changeOrderId: input.changeOrderId },
    );
  }

  return {
    changeOrderId: changeOrder.changeOrderId,
    clientRef: changeOrder.clientRef,
    projectRef: changeOrder.projectRef,
    description: changeOrder.description,
    scopeImpact: changeOrder.scopeImpact,
    scheduleImpact: changeOrder.scheduleImpact,
    changeAmount: changeOrder.changeAmount,
    submittedAt: changeOrder.submittedAt,
    forwardedForClientApprovalAt: changeOrder.forwardedForClientApprovalAt,
    status: changeOrder.status,
  };
}
