/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/workTaskCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listWorkTask, type ListWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.js';
import { createWorkTask, type CreateWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.js';
import { updateWorkTask, type UpdateWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.js';
import { deleteWorkTask, type DeleteWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.js';

const ALLOWED: readonly string[] = ['internal', 'internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((item) => allowed.includes(item))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function requiredString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requiredId(value: unknown, field: string): string {
  const id = requiredString(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(id)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return id;
}

export const workTaskCatalogueQryListWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.workTaskCatalogue.qryListWorkTask');
  if (denial) return denial;
  const input: ListWorkTaskInput = {};
  const result = await listWorkTask(ctx, input);
  return ok(result.map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    assignedFieldWorkerId: row.assignedFieldWorkerId,
    description: row.description,
    dueDate: row.dueDate,
    status: row.status,
    progressUpdate: row.progressUpdate,
  })));
};

export const workTaskCatalogueCmdCreateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    projectProjectId?: string;
    description?: string;
    dueDate?: string;
    progressUpdate?: string;
  };
  const input: CreateWorkTaskInput = {
    projectProjectId: requiredId(params.projectProjectId, 'projectProjectId'),
    assignedFieldWorkerId: ctx.sessionContext.actorId ?? '',
    description: requiredString(params.description, 'description'),
    dueDate: requiredString(params.dueDate, 'dueDate'),
    ...(params.progressUpdate === undefined ? {} : { progressUpdate: params.progressUpdate }),
  };
  const result = await createWorkTask(ctx, input);
  return ok(result);
};

export const workTaskCatalogueCmdUpdateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    projectProjectId?: string;
    workTaskWorkTaskId?: string;
    description?: string;
    dueDate?: string;
    progressUpdate?: string;
  };
  const input: UpdateWorkTaskInput = {
    projectId: requiredId(params.projectProjectId, 'projectProjectId'),
    workTaskId: requiredId(params.workTaskWorkTaskId, 'workTaskWorkTaskId'),
    description: requiredString(params.description, 'description'),
    dueDate: requiredString(params.dueDate, 'dueDate'),
    ...(params.progressUpdate === undefined ? {} : { progressUpdate: params.progressUpdate }),
  };
  const result = await updateWorkTask(ctx, input);
  return ok(result);
};

export const workTaskCatalogueCmdDeleteWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask');
  if (denial) return denial;
  const params = (request.params ?? {}) as { workTaskId?: string };
  const input: DeleteWorkTaskInput = {
    workTaskId: requiredId(params.workTaskId, 'workTaskId'),
  };
  const result = await deleteWorkTask(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.workTaskCatalogue.qryListWorkTask', handler: workTaskCatalogueQryListWorkTaskHandler },
  { key: 'buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask', handler: workTaskCatalogueCmdCreateWorkTaskHandler },
  { key: 'buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask', handler: workTaskCatalogueCmdUpdateWorkTaskHandler },
  { key: 'buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask', handler: workTaskCatalogueCmdDeleteWorkTaskHandler },
];
