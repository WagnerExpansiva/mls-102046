/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Invoice } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import {
  canMakeInvoiceAvailableToClient,
  canTransitionInvoice,
  invoiceAmountIsValid,
  type InvoiceStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import type { Client } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';
import type { Project } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface UpdateInvoiceInput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
}

export interface UpdateInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

function requireValidReferences(client: Client | null, project: Project | null, clientId: string, projectId: string): asserts client is Client {
  if (!client) {
    throw new AppError('NOT_FOUND', `Client not found: ${clientId}`, 404, { ruleId: 'invoiceRequiresClientAndProject' });
  }
  if (!project) {
    throw new AppError('NOT_FOUND', `Project not found: ${projectId}`, 404, { ruleId: 'invoiceRequiresClientAndProject' });
  }
  if (project.clientId !== clientId) {
    throw new AppError('VALIDATION_ERROR', 'The project does not belong to the informed client.', 400, { ruleId: 'invoiceRequiresClientAndProject' });
  }
}

export async function updateInvoice(ctx: RequestContext, input: UpdateInvoiceInput): Promise<UpdateInvoiceOutput> {
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  return ctx.data.runInTransaction(async () => {
    const invoice = await invoices.getById(input.invoiceId);
    if (!invoice) {
      throw new AppError('NOT_FOUND', `Invoice not found: ${input.invoiceId}`, 404, { ruleId: 'invoiceRequiresClientAndProject' });
    }

    const [client, project] = await Promise.all([
      clients.getById(input.clientId),
      projects.getById(input.projectId),
    ]);
    requireValidReferences(client, project, input.clientId, input.projectId);

    if (input.commercialReference.trim().length === 0) {
      throw new AppError('VALIDATION_ERROR', 'Commercial reference is required.', 400, { ruleId: 'invoiceRequiresClientAndProject' });
    }

    const candidate: Invoice = {
      invoiceId: invoice.invoiceId,
      clientId: input.clientId,
      projectId: input.projectId,
      commercialReference: input.commercialReference,
      amount: input.amount,
      status: invoice.status,
    };
    if (!invoiceAmountIsValid(candidate)) {
      throw new AppError('VALIDATION_ERROR', 'Invoice amount must be greater than zero.', 400, { ruleId: 'invoiceIncludesApprovedChangeOrdersOnly' });
    }

    // rule: invoiceIncludesApprovedChangeOrdersOnly — change orders are not declared in the ontology, so no nonexistent collection is invented.
    let resolvedStatus: InvoiceStatus = invoice.status;
    if (invoice.status === 'issued' && canMakeInvoiceAvailableToClient(candidate)) {
      resolvedStatus = 'availableToClient';
    }
    if (!canTransitionInvoice(invoice.status, resolvedStatus) && resolvedStatus !== invoice.status) {
      throw new AppError('CONFLICT', `Invoice cannot transition from ${invoice.status} to ${resolvedStatus}.`, 409, { ruleId: 'clientVisibleInvoice' });
    }

    const updated: Invoice = { ...candidate, status: resolvedStatus };
    await invoices.save(updated);
    // rule: clientVisibleInvoice — only invoices apt for external consultation receive the client-visible status.
    return {
      invoiceId: updated.invoiceId,
      clientId: updated.clientId,
      projectId: updated.projectId,
      commercialReference: updated.commercialReference,
      amount: updated.amount,
      status: updated.status,
    };
  });
}
