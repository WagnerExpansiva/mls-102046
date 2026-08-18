/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { InvoiceChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';
import { isValidInvoiceChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';

export interface CreateInvoiceChangeOrderInput {
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export interface CreateInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export async function createInvoiceChangeOrder(
  ctx: RequestContext,
  input: CreateInvoiceChangeOrderInput,
): Promise<CreateInvoiceChangeOrderOutput> {
  const invoiceChangeOrders = resolveRepository<IInvoiceChangeOrderRepository>(
    ctx,
    'InvoiceChangeOrder',
  );
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  const invoiceChangeOrder = await ctx.data.runInTransaction(async () => {
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

    if (changeOrder.status !== 'approved') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Only approved change orders can be included in an invoice.',
        400,
        { ruleId: 'invoiceIncludesApprovedChangeOrdersOnly' },
      );
    }

    const aggregate: InvoiceChangeOrder = {
      invoiceChangeOrderId: ctx.idGenerator.newId(),
      invoiceId: invoice.invoiceId,
      changeOrderId: changeOrder.changeOrderId,
      billedAmount: input.billedAmount,
    };

    if (!isValidInvoiceChangeOrder(aggregate)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Invoice change order contains invalid values.',
        400,
      );
    }

    await invoiceChangeOrders.save(aggregate);
    return aggregate;
  });

  return {
    invoiceChangeOrderId: invoiceChangeOrder.invoiceChangeOrderId,
    invoiceId: invoiceChangeOrder.invoiceId,
    changeOrderId: invoiceChangeOrder.changeOrderId,
    billedAmount: invoiceChangeOrder.billedAmount,
  };
}
