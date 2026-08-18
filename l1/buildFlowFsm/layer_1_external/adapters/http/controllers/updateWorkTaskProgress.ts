/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/updateWorkTaskProgress.ts" enhancement="_blank"/>
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
  locateWorkTask,
  type LocateWorkTaskInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.js';
import {
  updateWorkTask,
  type UpdateWorkTaskInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.js';
import {
  handoffWorkTaskProgressToFieldCoordinator,
  type HandoffWorkTaskProgressToFieldCoordinatorInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.js';

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
  return fail(
    new AppError(
      'FORBIDDEN_ACTOR',
      'actor scope not permitted for ' + route,
      403,
      { route },
    ),
  );
}

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9_-]+$/.test(value);
}

export const updateWorkTaskProgressQryLocateWorkTaskHandler: BffHandler = async ({
  ctx,
}) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask',
  );
  if (denial) return denial;

  const input: LocateWorkTaskInput = {};
  const result = await locateWorkTask(ctx, input);
  const items = [result].map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    assignedFieldWorkerId: row.assignedFieldWorkerId,
    description: row.description,
    dueDate: row.dueDate,
    status: row.status,
    progressUpdate: row.progressUpdate,
  }));
  return ok(items);
};

export const updateWorkTaskProgressCmdUpdateWorkTaskHandler: BffHandler = async ({
  request,
  ctx,
}) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask',
  );
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectProjectId?: unknown;
    workTaskWorkTaskId?: unknown;
    description?: unknown;
    dueDate?: unknown;
    progressUpdate?: unknown;
  };
  if (!isValidIdentifier(params.projectProjectId)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'projectProjectId is required and must be a valid identifier',
      400,
      { field: 'projectProjectId' },
    );
  }
  if (!isValidIdentifier(params.workTaskWorkTaskId)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'workTaskWorkTaskId is required and must be a valid identifier',
      400,
      { field: 'workTaskWorkTaskId' },
    );
  }
  if (typeof params.description !== 'string' || params.description.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, {
      field: 'description',
    });
  }
  if (typeof params.dueDate !== 'string' || params.dueDate.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'dueDate is required', 400, {
      field: 'dueDate',
    });
  }
  if (
    params.progressUpdate !== undefined &&
    typeof params.progressUpdate !== 'string'
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'progressUpdate must be a string',
      400,
      { field: 'progressUpdate' },
    );
  }

  const input: UpdateWorkTaskInput = {
    projectId: params.projectProjectId,
    workTaskId: params.workTaskWorkTaskId,
    description: params.description,
    dueDate: params.dueDate,
    ...(params.progressUpdate === undefined
      ? {}
      : { progressUpdate: params.progressUpdate }),
  };
  const result = await updateWorkTask(ctx, input);
  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    assignedFieldWorkerId: result.assignedFieldWorkerId,
    description: result.description,
    dueDate: result.dueDate,
    status: result.status,
    progressUpdate: result.progressUpdate,
  });
};

export const updateWorkTaskProgressCmdHandoffWorkTaskProgressToFieldCoordinatorHandler: BffHandler = async ({
  request,
  ctx,
}) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator',
  );
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    workTaskWorkTaskId?: unknown;
    description?: unknown;
    dueDate?: unknown;
    progressUpdate?: unknown;
  };
  if (!isValidIdentifier(params.workTaskWorkTaskId)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'workTaskWorkTaskId is required and must be a valid identifier',
      400,
      { field: 'workTaskWorkTaskId' },
    );
  }
  if (typeof params.description !== 'string' || params.description.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, {
      field: 'description',
    });
  }
  if (typeof params.dueDate !== 'string' || params.dueDate.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'dueDate is required', 400, {
      field: 'dueDate',
    });
  }
  if (
    params.progressUpdate !== undefined &&
    typeof params.progressUpdate !== 'string'
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'progressUpdate must be a string',
      400,
      { field: 'progressUpdate' },
    );
  }

  const input: HandoffWorkTaskProgressToFieldCoordinatorInput = {
    workTaskId: params.workTaskWorkTaskId,
    description: params.description,
    dueDate: params.dueDate,
    ...(params.progressUpdate === undefined
      ? {}
      : { progressUpdate: params.progressUpdate }),
  };
  const result = await handoffWorkTaskProgressToFieldCoordinator(ctx, input);
  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    assignedFieldWorkerId: result.assignedFieldWorkerId,
    description: result.description,
    dueDate: result.dueDate,
    status: result.status,
    progressUpdate: result.progressUpdate,
  });
};

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask',
    handler: updateWorkTaskProgressQryLocateWorkTaskHandler,
  },
  {
    key: 'buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask',
    handler: updateWorkTaskProgressCmdUpdateWorkTaskHandler,
  },
  {
    key: 'buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator',
    handler:
      updateWorkTaskProgressCmdHandoffWorkTaskProgressToFieldCoordinatorHandler,
  },
];
