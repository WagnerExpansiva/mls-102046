/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryItemCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listInventoryItem, type ListInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.js';
import { createInventoryItem, type CreateInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.js';
import { updateInventoryItem, type UpdateInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryItem.js';
import { deleteInventoryItem, type DeleteInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.js';

const ALLOWED: readonly string[] = ['internal'];

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

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requiredString(params: Record<string, unknown>, field: string): string {
  const value = params[field];
  if (typeof value !== 'string' || value.length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requiredNumber(params: Record<string, unknown>, field: string): number {
  const value = params[field];
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const inventoryItemCatalogueQryListInventoryItemHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem');
  if (denial) return denial;
  const input: ListInventoryItemInput = {};
  const result = await listInventoryItem(ctx, input);
  return ok(result.map((row) => ({
    inventoryItemId: row.inventoryItemId,
    name: row.name,
    ...(row.description === undefined ? {} : { description: row.description }),
    unitOfMeasure: row.unitOfMeasure,
    referenceUnitCost: row.referenceUnitCost,
    status: row.status,
  })));
};

export const inventoryItemCatalogueCmdCreateInventoryItemHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const description = params.description;
  if (description !== undefined && typeof description !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'description must be a string', 400, { field: 'description' });
  }
  const input: CreateInventoryItemInput = {
    name: requiredString(params, 'name'),
    ...(description === undefined ? {} : { description }),
    unitOfMeasure: requiredString(params, 'unitOfMeasure'),
    referenceUnitCost: requiredNumber(params, 'referenceUnitCost'),
  };
  const result = await createInventoryItem(ctx, input);
  return ok({
    inventoryItemId: result.inventoryItemId,
    name: result.name,
    ...(result.description === undefined ? {} : { description: result.description }),
    unitOfMeasure: result.unitOfMeasure,
    referenceUnitCost: result.referenceUnitCost,
    status: result.status,
  });
};

export const inventoryItemCatalogueCmdUpdateInventoryItemHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const inventoryItemId = params.inventoryItemId;
  if (!isIdentifier(inventoryItemId)) {
    throw new AppError('VALIDATION_ERROR', 'inventoryItemId is required and must be a valid identifier', 400, { field: 'inventoryItemId' });
  }
  const description = params.description;
  if (description !== undefined && typeof description !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'description must be a string', 400, { field: 'description' });
  }
  const input: UpdateInventoryItemInput = {
    inventoryItemId,
    name: requiredString(params, 'name'),
    ...(description === undefined ? {} : { description }),
    unitOfMeasure: requiredString(params, 'unitOfMeasure'),
    referenceUnitCost: requiredNumber(params, 'referenceUnitCost'),
  };
  const result = await updateInventoryItem(ctx, input);
  return ok({
    inventoryItemId: result.inventoryItemId,
    name: result.name,
    ...(result.description === undefined ? {} : { description: result.description }),
    unitOfMeasure: result.unitOfMeasure,
    referenceUnitCost: result.referenceUnitCost,
    status: result.status,
  });
};

export const inventoryItemCatalogueCmdDeleteInventoryItemHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const inventoryItemId = params.inventoryItemId;
  if (!isIdentifier(inventoryItemId)) {
    throw new AppError('VALIDATION_ERROR', 'inventoryItemId is required and must be a valid identifier', 400, { field: 'inventoryItemId' });
  }
  const input: DeleteInventoryItemInput = { inventoryItemId };
  const result = await deleteInventoryItem(ctx, input);
  return ok({
    inventoryItemId: result.inventoryItemId,
    name: result.name,
    description: result.description,
    unitOfMeasure: result.unitOfMeasure,
    referenceUnitCost: result.referenceUnitCost,
    status: result.status,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem', handler: inventoryItemCatalogueQryListInventoryItemHandler },
  { key: 'buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem', handler: inventoryItemCatalogueCmdCreateInventoryItemHandler },
  { key: 'buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem', handler: inventoryItemCatalogueCmdUpdateInventoryItemHandler },
  { key: 'buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem', handler: inventoryItemCatalogueCmdDeleteInventoryItemHandler },
];
