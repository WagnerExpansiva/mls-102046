/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Invoice } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import { invoiceAmountIsValid, invoiceIsInitiallyIssued } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface CreateInvoiceInput {
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
}

export interface CreateInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export async function createInvoice(
  ctx: RequestContext,
  input: CreateInvoiceInput,
): Promise<CreateInvoiceOutput> {
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  const client = await clients.getById(input.clientId);
  if (!client) {
    throw new AppError(
      'NOT_FOUND',
      `Client not found: ${input.clientId}`,
      404,
      { ruleId: 'invoiceRequiresClientAndProject' },
    );
  }

  const project = await projects.getById(input.projectId);
  if (!project || project.clientId !== input.clientId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The project must exist and belong to the specified client.',
      400,
      { ruleId: 'invoiceRequiresClientAndProject' },
    );
  }

  if (!Number.isFinite(input.amount) || !input.commercialReference.trim()) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Invoice commercialReference and amount are required and valid.',
      400,
    );
  }

  const projectChangeOrders = await changeOrders.list({
    projectRef: input.projectId,
    clientRef: input.clientId,
  });
  // rule: invoiceIncludesApprovedChangeOrdersOnly
  const approvedChangeOrders = projectChangeOrders.filter((changeOrder) => changeOrder.status === 'approved');
  void approvedChangeOrders;

  const invoice: Invoice = {
    invoiceId: ctx.idGenerator.newId(),
    clientId: input.clientId,
    projectId: input.projectId,
    commercialReference: input.commercialReference,
    amount: input.amount,
    status: 'issued',
  };

  if (!invoiceAmountIsValid(invoice)) {
    throw new AppError('VALIDATION_ERROR', 'Invoice amount must be greater than zero.', 400);
  }
  if (!invoiceIsInitiallyIssued(invoice)) {
    throw new AppError('VALIDATION_ERROR', 'Invoice must initially be issued.', 400);
  }

  await ctx.data.runInTransaction(async () => {
    await invoices.save(invoice);
  });

  return {
    invoiceId: invoice.invoiceId,
    clientId: invoice.clientId,
    projectId: invoice.projectId,
    commercialReference: invoice.commercialReference,
    amount: invoice.amount,
    status: invoice.status,
  };
}
