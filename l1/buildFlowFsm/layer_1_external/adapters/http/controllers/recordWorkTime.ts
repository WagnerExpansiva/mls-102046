/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/recordWorkTime.ts" enhancement="_blank"/>
import {
  ok,
  fail,
  AppError,
  type BffHandler,
  type BffResponse,
  type ControllerRoute,
  type RequestContext,
} from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  locateFieldWorker,
  type LocateFieldWorkerInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.js';
import {
  locateWorkTask,
  type LocateWorkTaskInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.js';
import {
  createTimeLog,
  type CreateTimeLogInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.js';
import {
  handoffTimeLogToFieldCoordinator,
  type HandoffTimeLogToFieldCoordinatorInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(
  ctx: RequestContext,
  allowed: readonly string[],
  route: string,
): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((value) => allowed.includes(value))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function paramsOf(requestParams: unknown): Record<string, unknown> {
  return (requestParams && typeof requestParams === 'object'
    ? requestParams
    : {}) as Record<string, unknown>;
}

function requiredString(params: Record<string, unknown>, field: string): string {
  const value = params[field];
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

function requiredId(params: Record<string, unknown>, field: string): string {
  const value = requiredString(params, field);
  if (!/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} must be a valid identifier`, 400, { field });
  }
  return value;
}

function requiredNumber(params: Record<string, unknown>, field: string): number {
  const value = params[field];
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

export const recordWorkTimeQryLocateFieldWorkerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordWorkTime.qryLocateFieldWorker');
  if (denial) return denial;
  const input: LocateFieldWorkerInput = {};
  const result = await locateFieldWorker(ctx, input);
  return ok(result.map((row) => ({ platformUserId: row.platformUserId })));
};

export const recordWorkTimeQryLocateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordWorkTime.qryLocateWorkTask');
  if (denial) return denial;
  const input: LocateWorkTaskInput = {};
  const result = await locateWorkTask(ctx, input);
  return ok([
    {
      workTaskId: result.workTaskId,
      projectId: result.projectId,
      assignedFieldWorkerId: result.assignedFieldWorkerId,
      description: result.description,
      dueDate: result.dueDate,
      status: result.status,
      progressUpdate: result.progressUpdate,
    },
  ]);
};

export const recordWorkTimeCmdCreateTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordWorkTime.cmdCreateTimeLog');
  if (denial) return denial;
  const params = paramsOf(request.params);
  const input: CreateTimeLogInput = {
    workTaskWorkTaskId: requiredId(params, 'workTaskWorkTaskId'),
    workDate: requiredString(params, 'workDate'),
    hoursWorked: requiredNumber(params, 'hoursWorked'),
    hourlyLaborCost: requiredNumber(params, 'hourlyLaborCost'),
  };
  const result = await createTimeLog(ctx, input);
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

export const recordWorkTimeCmdHandoffTimeLogToFieldCoordinatorHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator');
  if (denial) return denial;
  const params = paramsOf(request.params);
  const input: HandoffTimeLogToFieldCoordinatorInput = {
    timeLogTimeLogId: requiredId(params, 'timeLogTimeLogId'),
    workDate: requiredString(params, 'workDate'),
    hoursWorked: requiredNumber(params, 'hoursWorked'),
    hourlyLaborCost: requiredNumber(params, 'hourlyLaborCost'),
  };
  const result = await handoffTimeLogToFieldCoordinator(ctx, input);
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

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.recordWorkTime.qryLocateFieldWorker',
    handler: recordWorkTimeQryLocateFieldWorkerHandler,
  },
  {
    key: 'buildFlowFsm.recordWorkTime.qryLocateWorkTask',
    handler: recordWorkTimeQryLocateWorkTaskHandler,
  },
  {
    key: 'buildFlowFsm.recordWorkTime.cmdCreateTimeLog',
    handler: recordWorkTimeCmdCreateTimeLogHandler,
  },
  {
    key: 'buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator',
    handler: recordWorkTimeCmdHandoffTimeLogToFieldCoordinatorHandler,
  },
];
