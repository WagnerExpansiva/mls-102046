/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientPortalAccessCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listClientPortalAccess, type ListClientPortalAccessInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.js';
import { createClientPortalAccess, type CreateClientPortalAccessInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.js';
import { updateClientPortalAccess, type UpdateClientPortalAccessInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.js';
import { deleteClientPortalAccess, type DeleteClientPortalAccessInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';

const ALLOWED: readonly string[] = ['internal', 'internal', 'internal', 'internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((value) => allowed.includes(value))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requireIdentifier(value: unknown, field: string): string {
  if (!isValidIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required and must be a valid identifier`, 400, { field });
  }
  return value;
}

export const clientPortalAccessCatalogueQryListClientPortalAccessHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess');
  if (denial) return denial;
  const input: ListClientPortalAccessInput = {};
  const result = await listClientPortalAccess(ctx, input);
  return ok((result.items ?? []).map((row) => ({
    clientPortalAccessId: row.clientPortalAccessId,
    clientId: row.clientId,
    platformUserId: row.platformUserId,
    status: row.status,
  })));
};

export const clientPortalAccessCatalogueCmdCreateClientPortalAccessHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientId?: unknown };
  const input: CreateClientPortalAccessInput = {
    clientId: requireIdentifier(params.clientId, 'clientId'),
  };
  const result = await createClientPortalAccess(ctx, input);
  return ok(result);
};

export const clientPortalAccessCatalogueCmdUpdateClientPortalAccessHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientPortalAccessId?: unknown; clientId?: unknown };
  const input: UpdateClientPortalAccessInput = {
    clientPortalAccessId: requireIdentifier(params.clientPortalAccessId, 'clientPortalAccessId'),
    clientId: requireIdentifier(params.clientId, 'clientId'),
  };
  const result = await updateClientPortalAccess(ctx, input);
  return ok(result);
};

export const clientPortalAccessCatalogueCmdDeleteClientPortalAccessHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientPortalAccessId?: unknown };
  const input: DeleteClientPortalAccessInput = {
    clientPortalAccessId: requireIdentifier(params.clientPortalAccessId, 'clientPortalAccessId'),
  };
  const result = await deleteClientPortalAccess(ctx, input);
  return ok(result);
};

export const clientPortalAccessCatalogueQryClientPickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker');
  if (denial) return denial;
  const input: ListClientInput = {};
  const result = await listClient(ctx, input);
  return ok(result.map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  })));
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess', handler: clientPortalAccessCatalogueQryListClientPortalAccessHandler },
  { key: 'buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess', handler: clientPortalAccessCatalogueCmdCreateClientPortalAccessHandler },
  { key: 'buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess', handler: clientPortalAccessCatalogueCmdUpdateClientPortalAccessHandler },
  { key: 'buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess', handler: clientPortalAccessCatalogueCmdDeleteClientPortalAccessHandler },
  { key: 'buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker', handler: clientPortalAccessCatalogueQryClientPickerHandler },
];
