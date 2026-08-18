/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/monitorDailyProjectRecords.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectProjectTimeLogs, type InspectProjectTimeLogsInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.js';
import { inspectProjectMaterialUsages, type InspectProjectMaterialUsagesInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.js';
import { inspectProjectExecutionOverview, type InspectProjectExecutionOverviewInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.js';

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

function requireIdentifier(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length === 0 || /\s/.test(value) || !/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

export const monitorDailyProjectRecordsQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.monitorDailyProjectRecords.qryLocateProject');
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

export const monitorDailyProjectRecordsQryInspectProjectTimeLogsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs');
  if (denial) return denial;
  const params = (request.params ?? {}) as { timeLogId?: unknown };
  const input: InspectProjectTimeLogsInput = {
    timeLogId: requireIdentifier(params.timeLogId, 'timeLogId'),
  };
  const result = await inspectProjectTimeLogs(ctx, input);
  return ok({
    timeLogId: result.timeLogId,
    status: result.status,
    workTaskId: result.workTaskId,
    fieldWorkerId: result.fieldWorkerId,
    workDate: result.workDate,
    hoursWorked: result.hoursWorked,
    hourlyLaborCost: result.hourlyLaborCost,
  });
};

export const monitorDailyProjectRecordsQryInspectProjectMaterialUsagesHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages');
  if (denial) return denial;
  const params = (request.params ?? {}) as { materialUsageId?: unknown };
  const input: InspectProjectMaterialUsagesInput = {
    materialUsageId: requireIdentifier(params.materialUsageId, 'materialUsageId'),
  };
  const result = await inspectProjectMaterialUsages(ctx, input);
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

export const monitorDailyProjectRecordsQryInspectProjectExecutionOverviewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: unknown };
  const input: InspectProjectExecutionOverviewInput = {
    projectId: requireIdentifier(params.projectId, 'projectId'),
  };
  const result = await inspectProjectExecutionOverview(ctx, input);
  return ok({
    projectId: result.projectId,
    projectName: result.projectName,
    projectStatus: result.projectStatus,
    workTaskIds: result.workTaskIds,
    taskSummary: result.taskSummary,
    upcomingCommitments: result.upcomingCommitments,
    timeLogIds: result.timeLogIds,
    totalLoggedHours: result.totalLoggedHours,
    materialUsageIds: result.materialUsageIds,
    materialUsageSummary: result.materialUsageSummary,
    actualLaborCost: result.actualLaborCost,
    actualMaterialCost: result.actualMaterialCost,
    actualCost: result.actualCost,
    budgetAmount: result.budgetAmount,
    costVariance: result.costVariance,
    changeOrderIds: result.changeOrderIds,
    changeOrderImpactSummary: result.changeOrderImpactSummary,
    calculatedAt: result.calculatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.monitorDailyProjectRecords.qryLocateProject', handler: monitorDailyProjectRecordsQryLocateProjectHandler },
  { key: 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs', handler: monitorDailyProjectRecordsQryInspectProjectTimeLogsHandler },
  { key: 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages', handler: monitorDailyProjectRecordsQryInspectProjectMaterialUsagesHandler },
  { key: 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview', handler: monitorDailyProjectRecordsQryInspectProjectExecutionOverviewHandler },
];