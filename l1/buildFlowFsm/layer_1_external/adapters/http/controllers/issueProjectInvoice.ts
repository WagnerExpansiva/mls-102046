/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/issueProjectInvoice.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateClient, type LocateClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectClientBillingSummary, type InspectClientBillingSummaryInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.js';
import { createInvoice, type CreateInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.js';
import { handoffInvoiceToClient, type HandoffInvoiceToClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((entry) => allowed.includes(entry))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function requireIdentifier(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length === 0 || /\s/.test(value) || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required and must be a valid identifier', 400, { field });
  }
  return value;
}

function requireText(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requireAmount(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', 'amount is required and must be a valid number', 400, { field: 'amount' });
  }
  return value;
}

export const issueProjectInvoiceQryLocateClientHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.issueProjectInvoice.qryLocateClient');
  if (denial) return denial;
  const input: LocateClientInput = {};
  const result = await locateClient(ctx, input);
  return ok(result.map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  })));
};

export const issueProjectInvoiceQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.issueProjectInvoice.qryLocateProject');
  if (denial) return denial;
  const input: LocateProjectInput = {};
  const result = await locateProject(ctx, input);
  return ok(result.map((row) => ({
    projectId: row.projectId,
    clientId: row.clientId,
    name: row.name,
    address: row.address,
    status: row.status,
    authorizedBudget: row.authorizedBudget,
    plannedStartDate: row.plannedStartDate,
    plannedEndDate: row.plannedEndDate,
  })));
};

export const issueProjectInvoiceQryInspectClientBillingSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: InspectClientBillingSummaryInput = {
    clientId: requireIdentifier(params.clientBillingSummaryClientId, 'clientBillingSummaryClientId'),
  };
  const result = await inspectClientBillingSummary(ctx, input);
  return ok({
    clientId: result.clientId,
    projectId: result.projectId,
    approvedChangeOrderReferences: result.approvedChangeOrderReferences,
    invoiceReferences: result.invoiceReferences,
    approvedChangeOrderAmount: result.approvedChangeOrderAmount,
    billableAmount: result.billableAmount,
    invoicedAmount: result.invoicedAmount,
    clientAvailableAmount: result.clientAvailableAmount,
  });
};

export const issueProjectInvoiceCmdCreateInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.issueProjectInvoice.cmdCreateInvoice');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateInvoiceInput = {
    clientId: requireIdentifier(params.clientClientId, 'clientClientId'),
    projectId: requireIdentifier(params.projectProjectId, 'projectProjectId'),
    commercialReference: requireText(params.commercialReference, 'commercialReference'),
    amount: requireAmount(params.amount),
  };
  const result = await createInvoice(ctx, input);
  return ok({
    invoiceId: result.invoiceId,
    clientId: result.clientId,
    projectId: result.projectId,
    commercialReference: result.commercialReference,
    amount: result.amount,
    status: result.status,
  });
};

export const issueProjectInvoiceCmdHandoffInvoiceToClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: HandoffInvoiceToClientInput = {
    invoiceId: requireIdentifier(params.invoiceInvoiceId, 'invoiceInvoiceId'),
    commercialReference: requireText(params.commercialReference, 'commercialReference'),
    amount: requireAmount(params.amount),
  };
  const result = await handoffInvoiceToClient(ctx, input);
  return ok({
    invoiceId: result.invoiceId,
    clientId: result.clientId,
    projectId: result.projectId,
    commercialReference: result.commercialReference,
    amount: result.amount,
    status: result.status,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.issueProjectInvoice.qryLocateClient', handler: issueProjectInvoiceQryLocateClientHandler },
  { key: 'buildFlowFsm.issueProjectInvoice.qryLocateProject', handler: issueProjectInvoiceQryLocateProjectHandler },
  { key: 'buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary', handler: issueProjectInvoiceQryInspectClientBillingSummaryHandler },
  { key: 'buildFlowFsm.issueProjectInvoice.cmdCreateInvoice', handler: issueProjectInvoiceCmdCreateInvoiceHandler },
  { key: 'buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient', handler: issueProjectInvoiceCmdHandoffInvoiceToClientHandler },
];
