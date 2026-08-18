/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import { canMakeInvoiceAvailableToClient, canTransitionInvoice, invoiceAmountIsValid } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface HandoffInvoiceToClientInput {
  invoiceId: string;
  commercialReference: string;
  amount: number;
}

export interface HandoffInvoiceToClientOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export async function handoffInvoiceToClient(
  ctx: RequestContext,
  input: HandoffInvoiceToClientInput,
): Promise<HandoffInvoiceToClientOutput> {
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  return ctx.data.runInTransaction(async () => {
    const invoice = await invoices.getById(input.invoiceId);
    if (!invoice) {
      throw new AppError(
        'NOT_FOUND',
        `Invoice not found: ${input.invoiceId}`,
        404,
        { ruleId: 'clientVisibleInvoice', invoiceId: input.invoiceId },
      );
    }

    const commercialReference = input.commercialReference.trim();
    if (commercialReference.length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'commercialReference must be non-empty.',
        400,
        { ruleId: 'clientVisibleInvoice', field: 'commercialReference' },
      );
    }

    if (!Number.isFinite(input.amount) || input.amount < 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'amount must be a valid non-negative monetary value.',
        400,
        { ruleId: 'clientVisibleInvoice', field: 'amount' },
      );
    }

    const updatedInvoice: Invoice = {
      ...invoice,
      commercialReference,
      amount: input.amount,
    };

    if (updatedInvoice.status === 'cancelled') {
      throw new AppError(
        'CONFLICT',
        'A cancelled invoice cannot be handed off to the client.',
        409,
        { ruleId: 'clientVisibleInvoice', invoiceId: updatedInvoice.invoiceId },
      );
    }

    if (!invoiceAmountIsValid(updatedInvoice)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'amount must be greater than zero for a client-visible invoice.',
        400,
        { ruleId: 'clientVisibleInvoice', field: 'amount' },
      );
    }

    if (updatedInvoice.status === 'issued') {
      if (!canMakeInvoiceAvailableToClient(updatedInvoice)) {
        throw new AppError(
          'VALIDATION_ERROR',
          'The invoice cannot be made available to the client.',
          400,
          { ruleId: 'clientVisibleInvoice', invoiceId: updatedInvoice.invoiceId },
        );
      }
      if (!canTransitionInvoice(updatedInvoice.status, 'availableToClient')) {
        throw new AppError(
          'CONFLICT',
          'The invoice cannot transition to availableToClient.',
          409,
          { ruleId: 'clientVisibleInvoice', invoiceId: updatedInvoice.invoiceId },
        );
      }
      // rule: clientVisibleInvoice — an issued invoice becomes available to the client.
      updatedInvoice.status = 'availableToClient';
    } else if (updatedInvoice.status === 'availableToClient') {
      // rule: clientVisibleInvoice — an already available invoice remains idempotently available.
      updatedInvoice.status = 'availableToClient';
    }

    await invoices.save(updatedInvoice);

    return {
      invoiceId: updatedInvoice.invoiceId,
      clientId: updatedInvoice.clientId,
      projectId: updatedInvoice.projectId,
      commercialReference: updatedInvoice.commercialReference,
      amount: updatedInvoice.amount,
      status: updatedInvoice.status,
    };
  });
}
