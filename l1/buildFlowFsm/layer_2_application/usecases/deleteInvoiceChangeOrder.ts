/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.js';

export interface DeleteInvoiceChangeOrderInput {
  invoiceChangeOrderId: string;
}

export interface DeleteInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export async function deleteInvoiceChangeOrder(
  ctx: RequestContext,
  input: DeleteInvoiceChangeOrderInput,
): Promise<DeleteInvoiceChangeOrderOutput> {
  if (!input.invoiceChangeOrderId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'invoiceChangeOrderId is required.',
      400,
      { field: 'invoiceChangeOrderId' },
    );
  }

  const invoiceChangeOrders = resolveRepository<IInvoiceChangeOrderRepository>(
    ctx,
    'InvoiceChangeOrder',
  );

  return ctx.data.runInTransaction(async () => {
    const invoiceChangeOrder = await invoiceChangeOrders.getById(input.invoiceChangeOrderId);
    if (!invoiceChangeOrder) {
      throw new AppError(
        'NOT_FOUND',
        `InvoiceChangeOrder not found: ${input.invoiceChangeOrderId}`,
        404,
        { invoiceChangeOrderId: input.invoiceChangeOrderId },
      );
    }

    const output: DeleteInvoiceChangeOrderOutput = {
      invoiceChangeOrderId: invoiceChangeOrder.invoiceChangeOrderId,
      invoiceId: invoiceChangeOrder.invoiceId,
      changeOrderId: invoiceChangeOrder.changeOrderId,
      billedAmount: invoiceChangeOrder.billedAmount,
    };

    await invoiceChangeOrders.save(invoiceChangeOrder);
    return output;
  });
}
