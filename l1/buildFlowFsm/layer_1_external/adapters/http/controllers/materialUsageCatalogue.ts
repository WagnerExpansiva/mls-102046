/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/materialUsageCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listMaterialUsage, type ListMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.js';
import { createMaterialUsage, type CreateMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.js';
import { updateMaterialUsage, type UpdateMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateMaterialUsage.js';
import { deleteMaterialUsage, type DeleteMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.js';
import { listInventoryBalance, type ListInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.js';
import { listInventoryItem, type ListInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.js';
import { listProject, type ListProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';

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

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value) && !/\s/.test(value);
}

function requireIdentifier(value: unknown, field: string): string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requireNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const materialUsageCatalogueQryListMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage');
  if (denial) return denial;
  const input: ListMaterialUsageInput = {};
  const result = await listMaterialUsage(ctx, input);
  return ok(result.map((row) => ({
    materialUsageId: row.materialUsageId,
    status: row.status,
    projectId: row.projectId,
    inventoryItemId: row.inventoryItemId,
    inventoryBalanceId: row.inventoryBalanceId,
    quantity: row.quantity,
    usageDescription: row.usageDescription,
    consumedOn: row.consumedOn,
    unitCostBasis: row.unitCostBasis,
  })));
};

export const materialUsageCatalogueCmdCreateMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateMaterialUsageInput = {
    inventoryBalanceId: requireIdentifier(params.inventoryBalanceInventoryBalanceId, 'inventoryBalanceInventoryBalanceId'),
    inventoryItemId: requireIdentifier(params.inventoryItemInventoryItemId, 'inventoryItemInventoryItemId'),
    projectId: requireIdentifier(params.projectProjectId, 'projectProjectId'),
    quantity: requireNumber(params.quantity, 'quantity'),
    usageDescription: requireString(params.usageDescription, 'usageDescription'),
    consumedOn: requireString(params.consumedOn, 'consumedOn'),
    unitCostBasis: requireNumber(params.unitCostBasis, 'unitCostBasis'),
  };
  const result = await createMaterialUsage(ctx, input);
  return ok({
    materialUsageId: result.materialUsageId,
    status: result.status,
    projectId: result.projectId,
    inventoryItemId: result.inventoryItemId,
    inventoryBalanceId: result.inventoryBalanceId,
    quantity: result.quantity,
    usageDescription: result.usageDescription,
    consumedOn: result.consumedOn,
    unitCostBasis: result.unitCostBasis,
  });
};

export const materialUsageCatalogueCmdUpdateMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateMaterialUsageInput = {
    materialUsageId: requireIdentifier(params.materialUsageId, 'materialUsageId'),
    projectId: requireIdentifier(params.projectId, 'projectId'),
    inventoryItemId: requireIdentifier(params.inventoryItemId, 'inventoryItemId'),
    inventoryBalanceId: requireIdentifier(params.inventoryBalanceId, 'inventoryBalanceId'),
    quantity: requireNumber(params.quantity, 'quantity'),
    usageDescription: requireString(params.usageDescription, 'usageDescription'),
    consumedOn: requireString(params.consumedOn, 'consumedOn'),
    unitCostBasis: requireNumber(params.unitCostBasis, 'unitCostBasis'),
  };
  const result = await updateMaterialUsage(ctx, input);
  return ok({
    materialUsageId: result.materialUsageId,
    status: result.status,
    projectId: result.projectId,
    inventoryItemId: result.inventoryItemId,
    inventoryBalanceId: result.inventoryBalanceId,
    quantity: result.quantity,
    usageDescription: result.usageDescription,
    consumedOn: result.consumedOn,
    unitCostBasis: result.unitCostBasis,
  });
};

export const materialUsageCatalogueCmdDeleteMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteMaterialUsageInput = {
    materialUsageId: requireIdentifier(params.materialUsageId, 'materialUsageId'),
  };
  const result = await deleteMaterialUsage(ctx, input);
  return ok({
    materialUsageId: result.materialUsageId,
    status: result.status,
    projectId: result.projectId,
    inventoryItemId: result.inventoryItemId,
    inventoryBalanceId: result.inventoryBalanceId,
    quantity: result.quantity,
    usageDescription: result.usageDescription,
    consumedOn: result.consumedOn,
    unitCostBasis: result.unitCostBasis,
  });
};

export const materialUsageCatalogueQryInventoryBalancePickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker');
  if (denial) return denial;
  const result = await listInventoryBalance(ctx, {} as ListInventoryBalanceInput);
  return ok(result.map((row) => ({
    inventoryBalanceId: row.inventoryBalanceId,
    inventoryItemId: row.inventoryItemId,
    physicalQuantity: row.physicalQuantity,
    applicableUnitCost: row.applicableUnitCost,
    status: row.status,
  })));
};

export const materialUsageCatalogueQryInventoryItemPickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker');
  if (denial) return denial;
  const result = await listInventoryItem(ctx, {} as ListInventoryItemInput);
  return ok(result.map((row) => ({
    inventoryItemId: row.inventoryItemId,
    name: row.name,
    description: row.description,
    unitOfMeasure: row.unitOfMeasure,
    referenceUnitCost: row.referenceUnitCost,
    status: row.status,
  })));
};

export const materialUsageCatalogueQryProjectPickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.materialUsageCatalogue.qryProjectPicker');
  if (denial) return denial;
  const result = await listProject(ctx, {} as ListProjectInput);
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

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage', handler: materialUsageCatalogueQryListMaterialUsageHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage', handler: materialUsageCatalogueCmdCreateMaterialUsageHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage', handler: materialUsageCatalogueCmdUpdateMaterialUsageHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage', handler: materialUsageCatalogueCmdDeleteMaterialUsageHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker', handler: materialUsageCatalogueQryInventoryBalancePickerHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker', handler: materialUsageCatalogueQryInventoryItemPickerHandler },
  { key: 'buildFlowFsm.materialUsageCatalogue.qryProjectPicker', handler: materialUsageCatalogueQryProjectPickerHandler },
];
