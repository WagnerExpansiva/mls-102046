/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/timeLogCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listTimeLog, type ListTimeLogInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.js';
import { createTimeLog, type CreateTimeLogInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.js';
import { updateTimeLog, type UpdateTimeLogInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.js';
import { deleteTimeLog, type DeleteTimeLogInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.js';
import { listWorkTask, type ListWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.js';

const ALLOWED: readonly string[] = ['internal', 'internal'];

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

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requireIdentifier(value: unknown, field: string): asserts value is string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
}

function requireValue(value: unknown, field: string): void {
  if (value === undefined || value === null || value === '') {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
}

export const timeLogCatalogueQryListTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.timeLogCatalogue.qryListTimeLog');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListTimeLogInput = {};
  const result = await listTimeLog(ctx, input);
  return ok((result ?? []).map((row) => ({
    timeLogId: row.timeLogId,
    status: row.status,
    workTaskId: row.workTaskId,
    fieldWorkerId: row.fieldWorkerId,
    workDate: row.workDate,
    hoursWorked: row.hoursWorked,
    hourlyLaborCost: row.hourlyLaborCost,
  })));
};

export const timeLogCatalogueCmdCreateTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  requireIdentifier(params.workTaskWorkTaskId, 'workTaskWorkTaskId');
  requireValue(params.workDate, 'workDate');
  requireValue(params.hoursWorked, 'hoursWorked');
  requireValue(params.hourlyLaborCost, 'hourlyLaborCost');
  const input: CreateTimeLogInput = {
    workTaskWorkTaskId: params.workTaskWorkTaskId,
    workDate: params.workDate as string,
    hoursWorked: params.hoursWorked as number,
    hourlyLaborCost: params.hourlyLaborCost as number,
  };
  const result = await createTimeLog(ctx, input);
  return ok(result);
};

export const timeLogCatalogueCmdUpdateTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  requireIdentifier(params.timeLogId, 'timeLogId');
  requireIdentifier(params.workTaskId, 'workTaskId');
  requireValue(params.workDate, 'workDate');
  requireValue(params.hoursWorked, 'hoursWorked');
  requireValue(params.hourlyLaborCost, 'hourlyLaborCost');
  const input: UpdateTimeLogInput = {
    timeLogId: params.timeLogId,
    workTaskId: params.workTaskId,
    workDate: params.workDate as string,
    hoursWorked: params.hoursWorked as number,
    hourlyLaborCost: params.hourlyLaborCost as number,
  };
  const result = await updateTimeLog(ctx, input);
  return ok(result);
};

export const timeLogCatalogueCmdDeleteTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  requireIdentifier(params.timeLogId, 'timeLogId');
  const input: DeleteTimeLogInput = { timeLogId: params.timeLogId };
  const result = await deleteTimeLog(ctx, input);
  return ok(result);
};

export const timeLogCatalogueQryWorkTaskPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListWorkTaskInput = {};
  const result = await listWorkTask(ctx, input);
  return ok((result ?? []).map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    assignedFieldWorkerId: row.assignedFieldWorkerId,
    description: row.description,
    dueDate: row.dueDate,
    status: row.status,
    ...(row.progressUpdate === undefined ? {} : { progressUpdate: row.progressUpdate }),
  })));
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.timeLogCatalogue.qryListTimeLog', handler: timeLogCatalogueQryListTimeLogHandler },
  { key: 'buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog', handler: timeLogCatalogueCmdCreateTimeLogHandler },
  { key: 'buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog', handler: timeLogCatalogueCmdUpdateTimeLogHandler },
  { key: 'buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog', handler: timeLogCatalogueCmdDeleteTimeLogHandler },
  { key: 'buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker', handler: timeLogCatalogueQryWorkTaskPickerHandler },
];