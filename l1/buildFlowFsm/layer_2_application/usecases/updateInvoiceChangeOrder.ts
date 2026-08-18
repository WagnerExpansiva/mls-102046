/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { InvoiceChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';
import { isValidInvoiceChangeOrderBilledAmount } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';

export interface UpdateInvoiceChangeOrderInput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export interface UpdateInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export async function updateInvoiceChangeOrder(
  ctx: RequestContext,
  input: UpdateInvoiceChangeOrderInput,
): Promise<UpdateInvoiceChangeOrderOutput> {
  const invoiceChangeOrders = resolveRepository<IInvoiceChangeOrderRepository>(
    ctx,
    'InvoiceChangeOrder',
  );
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  return ctx.data.runInTransaction(async () => {
    const existing = await invoiceChangeOrders.getById(input.invoiceChangeOrderId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `InvoiceChangeOrder not found: ${input.invoiceChangeOrderId}`,
        404,
        { invoiceChangeOrderId: input.invoiceChangeOrderId },
      );
    }

    if (
      existing.invoiceId !== input.invoiceId ||
      existing.changeOrderId !== input.changeOrderId
    ) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The selected invoice change order does not match the supplied invoice and change order.',
        400,
        {
          invoiceChangeOrderId: input.invoiceChangeOrderId,
          expectedInvoiceId: existing.invoiceId,
          expectedChangeOrderId: existing.changeOrderId,
          invoiceId: input.invoiceId,
          changeOrderId: input.changeOrderId,
        },
      );
    }

    const invoice = await invoices.getById(input.invoiceId);
    if (!invoice) {
      throw new AppError(
        'NOT_FOUND',
        `Invoice not found: ${input.invoiceId}`,
        404,
        { invoiceId: input.invoiceId },
      );
    }

    const changeOrder = await changeOrders.getById(input.changeOrderId);
    if (!changeOrder) {
      throw new AppError(
        'NOT_FOUND',
        `ChangeOrder not found: ${input.changeOrderId}`,
        404,
        { changeOrderId: input.changeOrderId },
      );
    }

    // rule: invoiceIncludesApprovedChangeOrdersOnly
    if (changeOrder.status !== 'approved') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Only approved change orders can be included in an invoice.',
        400,
        { ruleId: 'invoiceIncludesApprovedChangeOrdersOnly', changeOrderId: changeOrder.changeOrderId },
      );
    }

    if (!isValidInvoiceChangeOrderBilledAmount(input.billedAmount)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'billedAmount must be a finite, non-negative monetary value.',
        400,
        { field: 'billedAmount' },
      );
    }

    const updated: InvoiceChangeOrder = {
      ...existing,
      billedAmount: input.billedAmount,
    };
    await invoiceChangeOrders.save(updated);

    return {
      invoiceChangeOrderId: updated.invoiceChangeOrderId,
      invoiceId: updated.invoiceId,
      changeOrderId: updated.changeOrderId,
      billedAmount: updated.billedAmount,
    };
  });
}
