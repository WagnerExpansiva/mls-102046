/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface ListInvoiceInput {}

export interface ListInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export async function listInvoice(
  ctx: RequestContext,
  input: ListInvoiceInput,
): Promise<ListInvoiceOutput[]> {
  void input;
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
  const records: Invoice[] = await invoices.list({});
  return records.map((invoice) => ({
    invoiceId: invoice.invoiceId,
    clientId: invoice.clientId,
    projectId: invoice.projectId,
    commercialReference: invoice.commercialReference,
    amount: invoice.amount,
    status: invoice.status,
  }));
}
