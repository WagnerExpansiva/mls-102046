/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listInvoice, type ListInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.js';
import { createInvoice, type CreateInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.js';
import { updateInvoice, type UpdateInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoice.js';
import { deleteInvoice, type DeleteInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';
import { listProject, type ListProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';

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
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function requireText(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requireAmount(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required and must be a number', 400, { field });
  }
  return value;
}

export const invoiceCatalogueQryListInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.qryListInvoice');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListInvoiceInput = {};
  const result = await listInvoice(ctx, input);
  return ok((result ?? []).map((row) => ({
    invoiceId: row.invoiceId,
    clientId: row.clientId,
    projectId: row.projectId,
    commercialReference: row.commercialReference,
    amount: row.amount,
    status: row.status,
  })));
};

export const invoiceCatalogueCmdCreateInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.cmdCreateInvoice');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateInvoiceInput = {
    clientId: requireIdentifier(params.clientClientId, 'clientClientId'),
    projectId: requireIdentifier(params.projectProjectId, 'projectProjectId'),
    commercialReference: requireText(params.commercialReference, 'commercialReference'),
    amount: requireAmount(params.amount, 'amount'),
  };
  const result = await createInvoice(ctx, input);
  return ok(result);
};

export const invoiceCatalogueCmdUpdateInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateInvoiceInput = {
    invoiceId: requireIdentifier(params.invoiceId, 'invoiceId'),
    clientId: requireIdentifier(params.clientId, 'clientId'),
    projectId: requireIdentifier(params.projectId, 'projectId'),
    commercialReference: requireText(params.commercialReference, 'commercialReference'),
    amount: requireAmount(params.amount, 'amount'),
  };
  const result = await updateInvoice(ctx, input);
  return ok(result);
};

export const invoiceCatalogueCmdDeleteInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteInvoiceInput = {
    invoiceId: requireIdentifier(params.invoiceId, 'invoiceId'),
  };
  const result = await deleteInvoice(ctx, input);
  return ok(result);
};

export const invoiceCatalogueQryClientPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.qryClientPicker');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListClientInput = {};
  const result = await listClient(ctx, input);
  return ok((result ?? []).map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  })));
};

export const invoiceCatalogueQryProjectPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceCatalogue.qryProjectPicker');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListProjectInput = {};
  const result = await listProject(ctx, input);
  return ok((result ?? []).map((row) => ({
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

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.invoiceCatalogue.qryListInvoice', handler: invoiceCatalogueQryListInvoiceHandler },
  { key: 'buildFlowFsm.invoiceCatalogue.cmdCreateInvoice', handler: invoiceCatalogueCmdCreateInvoiceHandler },
  { key: 'buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice', handler: invoiceCatalogueCmdUpdateInvoiceHandler },
  { key: 'buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice', handler: invoiceCatalogueCmdDeleteInvoiceHandler },
  { key: 'buildFlowFsm.invoiceCatalogue.qryClientPicker', handler: invoiceCatalogueQryClientPickerHandler },
  { key: 'buildFlowFsm.invoiceCatalogue.qryProjectPicker', handler: invoiceCatalogueQryProjectPickerHandler },
];