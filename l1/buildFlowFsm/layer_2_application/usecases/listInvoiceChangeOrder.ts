/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.js';

export interface ListInvoiceChangeOrderInput {}

export interface ListInvoiceChangeOrderItem {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export type ListInvoiceChangeOrderOutput = ListInvoiceChangeOrderItem[];

export async function listInvoiceChangeOrder(
  ctx: RequestContext,
  input: ListInvoiceChangeOrderInput,
): Promise<ListInvoiceChangeOrderOutput> {
  void input;
  const invoiceChangeOrders = resolveRepository<IInvoiceChangeOrderRepository>(ctx, 'InvoiceChangeOrder');
  const records = await invoiceChangeOrders.list({});
  return records.map((record) => ({
    invoiceChangeOrderId: record.invoiceChangeOrderId,
    invoiceId: record.invoiceId,
    changeOrderId: record.changeOrderId,
    billedAmount: record.billedAmount,
  }));
}
