/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';
import { createClient, type CreateClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.js';
import { updateClient, type UpdateClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.js';
import { deleteClient, type DeleteClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.js';

const ALLOWED: readonly string[] = ['internal', 'internal'];

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

export const clientCatalogueQryListClientHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientCatalogue.qryListClient');
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

export const clientCatalogueCmdCreateClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientCatalogue.cmdCreateClient');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    clientName?: string;
    contactEmail?: string;
    contactPhone?: string;
  };
  if (typeof params.clientName !== 'string' || params.clientName.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'clientName is required', 400, { field: 'clientName' });
  }
  const input: CreateClientInput = {
    clientName: params.clientName,
    contactEmail: params.contactEmail,
    contactPhone: params.contactPhone,
  };
  const result = await createClient(ctx, input);
  return ok({
    clientId: result.clientId,
    clientName: result.clientName,
    contactEmail: result.contactEmail,
    contactPhone: result.contactPhone,
  });
};

export const clientCatalogueCmdUpdateClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientCatalogue.cmdUpdateClient');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    clientId?: string;
    clientName?: string;
    contactEmail?: string;
    contactPhone?: string;
  };
  if (!isValidIdentifier(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId is required and must be a valid identifier', 400, { field: 'clientId' });
  }
  if (typeof params.clientName !== 'string' || params.clientName.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'clientName is required', 400, { field: 'clientName' });
  }
  const input: UpdateClientInput = {
    clientId: params.clientId,
    clientName: params.clientName,
    contactEmail: params.contactEmail,
    contactPhone: params.contactPhone,
  };
  const result = await updateClient(ctx, input);
  return ok({
    clientId: result.clientId,
    clientName: result.clientName,
    contactEmail: result.contactEmail,
    contactPhone: result.contactPhone,
  });
};

export const clientCatalogueCmdDeleteClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientCatalogue.cmdDeleteClient');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientId?: string };
  if (!isValidIdentifier(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId is required and must be a valid identifier', 400, { field: 'clientId' });
  }
  const input: DeleteClientInput = { clientId: params.clientId };
  const result = await deleteClient(ctx, input);
  return ok({
    clientId: result.clientId,
    clientName: result.clientName,
    contactEmail: result.contactEmail,
    contactPhone: result.contactPhone,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.clientCatalogue.qryListClient', handler: clientCatalogueQryListClientHandler },
  { key: 'buildFlowFsm.clientCatalogue.cmdCreateClient', handler: clientCatalogueCmdCreateClientHandler },
  { key: 'buildFlowFsm.clientCatalogue.cmdUpdateClient', handler: clientCatalogueCmdUpdateClientHandler },
  { key: 'buildFlowFsm.clientCatalogue.cmdDeleteClient', handler: clientCatalogueCmdDeleteClientHandler },
];
