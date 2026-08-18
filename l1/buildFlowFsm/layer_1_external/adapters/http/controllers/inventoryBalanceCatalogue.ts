/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/inventoryBalanceCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listInventoryBalance, type ListInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.js';
import { createInventoryBalance, type CreateInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.js';
import { updateInventoryBalance, type UpdateInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.js';
import { deleteInventoryBalance, type DeleteInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.js';
import { listInventoryItem, type ListInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.js';

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

function requiredId(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length === 0 || /\s/.test(value) || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function requiredNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required and must be a number', 400, { field });
  }
  return value;
}

export const inventoryBalanceCatalogueQryListInventoryBalanceHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListInventoryBalanceInput = {};
  const result = await listInventoryBalance(ctx, input);
  const items = result.map((row) => ({
    inventoryBalanceId: row.inventoryBalanceId,
    inventoryItemId: row.inventoryItemId,
    physicalQuantity: row.physicalQuantity,
    applicableUnitCost: row.applicableUnitCost,
    status: row.status,
  }));
  void params;
  return ok(items);
};

export const inventoryBalanceCatalogueCmdCreateInventoryBalanceHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateInventoryBalanceInput = {
    inventoryItemId: requiredId(params.inventoryItemId, 'inventoryItemId'),
    physicalQuantity: requiredNumber(params.physicalQuantity, 'physicalQuantity'),
    applicableUnitCost: requiredNumber(params.applicableUnitCost, 'applicableUnitCost'),
  };
  const result = await createInventoryBalance(ctx, input);
  return ok({
    inventoryBalanceId: result.inventoryBalanceId,
    inventoryItemId: result.inventoryItemId,
    physicalQuantity: result.physicalQuantity,
    applicableUnitCost: result.applicableUnitCost,
    status: result.status,
  });
};

export const inventoryBalanceCatalogueCmdUpdateInventoryBalanceHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateInventoryBalanceInput = {
    inventoryBalanceId: requiredId(params.inventoryBalanceId, 'inventoryBalanceId'),
    inventoryItemId: requiredId(params.inventoryItemId, 'inventoryItemId'),
    physicalQuantity: requiredNumber(params.physicalQuantity, 'physicalQuantity'),
    applicableUnitCost: requiredNumber(params.applicableUnitCost, 'applicableUnitCost'),
  };
  const result = await updateInventoryBalance(ctx, input);
  return ok({
    inventoryBalanceId: result.inventoryBalanceId,
    inventoryItemId: result.inventoryItemId,
    physicalQuantity: result.physicalQuantity,
    applicableUnitCost: result.applicableUnitCost,
    status: result.status,
  });
};

export const inventoryBalanceCatalogueCmdDeleteInventoryBalanceHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteInventoryBalanceInput = {
    inventoryBalanceId: requiredId(params.inventoryBalanceId, 'inventoryBalanceId'),
  };
  const result = await deleteInventoryBalance(ctx, input);
  return ok({
    inventoryBalanceId: result.inventoryBalanceId,
    inventoryItemId: result.inventoryItemId,
    physicalQuantity: result.physicalQuantity,
    applicableUnitCost: result.applicableUnitCost,
    status: result.status,
  });
};

export const inventoryBalanceCatalogueQryInventoryItemPickerHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListInventoryItemInput = {};
  const result = await listInventoryItem(ctx, input);
  const items = result.map((row) => ({
    inventoryItemId: row.inventoryItemId,
    name: row.name,
    ...(row.description === undefined ? {} : { description: row.description }),
    unitOfMeasure: row.unitOfMeasure,
    referenceUnitCost: row.referenceUnitCost,
    status: row.status,
  }));
  void params;
  return ok(items);
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance', handler: inventoryBalanceCatalogueQryListInventoryBalanceHandler },
  { key: 'buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance', handler: inventoryBalanceCatalogueCmdCreateInventoryBalanceHandler },
  { key: 'buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance', handler: inventoryBalanceCatalogueCmdUpdateInventoryBalanceHandler },
  { key: 'buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance', handler: inventoryBalanceCatalogueCmdDeleteInventoryBalanceHandler },
  { key: 'buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker', handler: inventoryBalanceCatalogueQryInventoryItemPickerHandler },
];