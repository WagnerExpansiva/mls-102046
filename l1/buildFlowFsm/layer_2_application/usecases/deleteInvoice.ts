/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface DeleteInvoiceInput {
  invoiceId: string;
}

export interface DeleteInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

type DeletableInvoiceRepository = IInvoiceRepository & {
  delete(id: string): Promise<void>;
};

export async function deleteInvoice(
  ctx: RequestContext,
  input: DeleteInvoiceInput,
): Promise<DeleteInvoiceOutput> {
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  return ctx.data.runInTransaction(async () => {
    const invoice: Invoice | null = await invoices.getById(input.invoiceId);
    if (!invoice) {
      throw new AppError(
        'NOT_FOUND',
        `Invoice not found: ${input.invoiceId}`,
        404,
        { invoiceId: input.invoiceId },
      );
    }

    const output: DeleteInvoiceOutput = {
      invoiceId: invoice.invoiceId,
      clientId: invoice.clientId,
      projectId: invoice.projectId,
      commercialReference: invoice.commercialReference,
      amount: invoice.amount,
      status: invoice.status,
    };

    const deletableInvoices = invoices as unknown as DeletableInvoiceRepository;
    await deletableInvoices.delete(invoice.invoiceId);

    return output;
  });
}
