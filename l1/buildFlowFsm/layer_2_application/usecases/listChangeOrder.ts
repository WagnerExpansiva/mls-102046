/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';

export interface ListChangeOrderInput {}

export interface ListChangeOrderOutputItem {
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

export type ListChangeOrderOutput = ListChangeOrderOutputItem[];

export async function listChangeOrder(
  ctx: RequestContext,
  input: ListChangeOrderInput,
): Promise<ListChangeOrderOutput> {
  void input;
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const records = await changeOrders.list({});

  return records.map((record) => ({
    changeOrderId: record.changeOrderId,
    clientRef: record.clientRef,
    projectRef: record.projectRef,
    description: record.description,
    scopeImpact: record.scopeImpact,
    scheduleImpact: record.scheduleImpact,
    changeAmount: record.changeAmount,
    submittedAt: record.submittedAt,
    forwardedForClientApprovalAt: record.forwardedForClientApprovalAt,
    status: record.status,
  }));
}
