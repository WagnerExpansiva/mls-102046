/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordProjectMaterialUsage.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { locateInventoryItem, type LocateInventoryItemInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.js';
import { createMaterialUsage, type CreateMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.js';
import { handoffMaterialUsageToFieldCoordinator, type HandoffMaterialUsageToFieldCoordinatorInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.js';
import { listInventoryBalance, type ListInventoryBalanceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.js';

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

function requiredString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requiredId(value: unknown, field: string): string {
  const result = requiredString(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(result)) {
    throw new AppError('VALIDATION_ERROR', field + ' is malformed', 400, { field });
  }
  return result;
}

function requiredNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const recordProjectMaterialUsageQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordProjectMaterialUsage.qryLocateProject');
  if (denial) return denial;
  const input: LocateProjectInput = {};
  const result = await locateProject(ctx, input);
  const items = result.map((row) => ({
    projectId: row.projectId,
    clientId: row.clientId,
    name: row.name,
    address: row.address,
    status: row.status,
    authorizedBudget: row.authorizedBudget,
    plannedStartDate: row.plannedStartDate,
    plannedEndDate: row.plannedEndDate,
  }));
  return ok(items);
};

export const recordProjectMaterialUsageQryLocateInventoryItemHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem');
  if (denial) return denial;
  const input: LocateInventoryItemInput = {};
  const result = await locateInventoryItem(ctx, input);
  const items = result.map((row) => ({
    inventoryItemId: row.inventoryItemId,
    name: row.name,
    description: row.description,
    unitOfMeasure: row.unitOfMeasure,
    referenceUnitCost: row.referenceUnitCost,
    status: row.status,
  }));
  return ok(items);
};

export const recordProjectMaterialUsageCmdCreateMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateMaterialUsageInput = {
    inventoryBalanceId: requiredId(params.inventoryBalanceInventoryBalanceId, 'inventoryBalanceInventoryBalanceId'),
    inventoryItemId: requiredId(params.inventoryItemInventoryItemId, 'inventoryItemInventoryItemId'),
    projectId: requiredId(params.projectProjectId, 'projectProjectId'),
    quantity: requiredNumber(params.quantity, 'quantity'),
    usageDescription: requiredString(params.usageDescription, 'usageDescription'),
    consumedOn: requiredString(params.consumedOn, 'consumedOn'),
    unitCostBasis: requiredNumber(params.unitCostBasis, 'unitCostBasis'),
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

export const recordProjectMaterialUsageCmdHandoffMaterialUsageToFieldCoordinatorHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: HandoffMaterialUsageToFieldCoordinatorInput = {
    materialUsageId: requiredId(params.materialUsageMaterialUsageId, 'materialUsageMaterialUsageId'),
    quantity: requiredNumber(params.quantity, 'quantity'),
    usageDescription: requiredString(params.usageDescription, 'usageDescription'),
    consumedOn: requiredString(params.consumedOn, 'consumedOn'),
    unitCostBasis: requiredNumber(params.unitCostBasis, 'unitCostBasis'),
  };
  const result = await handoffMaterialUsageToFieldCoordinator(ctx, input);
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

export const recordProjectMaterialUsageQryInventoryBalancePickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker');
  if (denial) return denial;
  const input: ListInventoryBalanceInput = {};
  const result = await listInventoryBalance(ctx, input);
  const items = result.map((row) => ({
    inventoryBalanceId: row.inventoryBalanceId,
    inventoryItemId: row.inventoryItemId,
    physicalQuantity: row.physicalQuantity,
    applicableUnitCost: row.applicableUnitCost,
    status: row.status,
  }));
  return ok(items);
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.recordProjectMaterialUsage.qryLocateProject', handler: recordProjectMaterialUsageQryLocateProjectHandler },
  { key: 'buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem', handler: recordProjectMaterialUsageQryLocateInventoryItemHandler },
  { key: 'buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage', handler: recordProjectMaterialUsageCmdCreateMaterialUsageHandler },
  { key: 'buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator', handler: recordProjectMaterialUsageCmdHandoffMaterialUsageToFieldCoordinatorHandler },
  { key: 'buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker', handler: recordProjectMaterialUsageQryInventoryBalancePickerHandler },
];
