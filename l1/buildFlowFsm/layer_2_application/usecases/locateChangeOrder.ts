/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';

export interface LocateChangeOrderInput {}

export interface LocateChangeOrderItem {
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

export type LocateChangeOrderOutput = LocateChangeOrderItem[];

export async function locateChangeOrder(
  ctx: RequestContext,
  _input: LocateChangeOrderInput,
): Promise<LocateChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const orders = await changeOrders.list({ status: 'submitted' });

  return orders.map((order) => ({
    changeOrderId: order.changeOrderId,
    clientRef: order.clientRef,
    projectRef: order.projectRef,
    description: order.description,
    scopeImpact: order.scopeImpact,
    scheduleImpact: order.scheduleImpact,
    changeAmount: order.changeAmount,
    submittedAt: order.submittedAt,
    ...(order.forwardedForClientApprovalAt !== null
      ? { forwardedForClientApprovalAt: order.forwardedForClientApprovalAt }
      : {}),
    status: order.status,
  }));
}
