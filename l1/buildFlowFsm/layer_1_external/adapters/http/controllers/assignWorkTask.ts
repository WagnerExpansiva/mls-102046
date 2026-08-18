/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/assignWorkTask.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectProjectTimeline, type InspectProjectTimelineInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.js';
import { locateFieldWorker, type LocateFieldWorkerInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.js';
import { createWorkTask, type CreateWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.js';
import { handoffWorkTaskToFieldWorker, type HandoffWorkTaskToFieldWorkerInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.js';

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

function requireIdentifier(value: unknown, field: string): string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

export const assignWorkTaskQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.assignWorkTask.qryLocateProject');
  if (denial) return denial;
  const result = await locateProject(ctx, {} as LocateProjectInput);
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

export const assignWorkTaskQryInspectProjectTimelineHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.assignWorkTask.qryInspectProjectTimeline');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<InspectProjectTimelineInput> & { projectTimelineProjectId?: string };
  const projectId = requireIdentifier(params.projectTimelineProjectId, 'projectTimelineProjectId');
  const input: InspectProjectTimelineInput = { projectId };
  const result = await inspectProjectTimeline(ctx, input);
  return ok({
    projectId: result.projectId,
    workTasks: result.workTasks,
    scheduleEntries: result.scheduleEntries,
  });
};

export const assignWorkTaskQryLocateFieldWorkerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.assignWorkTask.qryLocateFieldWorker');
  if (denial) return denial;
  const result = await locateFieldWorker(ctx, {} as LocateFieldWorkerInput);
  return ok(result.map((row) => ({ platformUserId: row.platformUserId })));
};

export const assignWorkTaskCmdCreateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.assignWorkTask.cmdCreateWorkTask');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<CreateWorkTaskInput> & { projectProjectId?: string; assignedFieldWorkerId?: string };
  const projectProjectId = requireIdentifier(params.projectProjectId, 'projectProjectId');
  if (!params.description) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.dueDate) {
    throw new AppError('VALIDATION_ERROR', 'dueDate is required', 400, { field: 'dueDate' });
  }
  const assignedFieldWorkerId = requireIdentifier(params.assignedFieldWorkerId, 'assignedFieldWorkerId');
  const input: CreateWorkTaskInput = {
    projectProjectId,
    assignedFieldWorkerId,
    description: params.description,
    dueDate: params.dueDate,
    ...(params.progressUpdate !== undefined ? { progressUpdate: params.progressUpdate } : {}),
  };
  const result = await createWorkTask(ctx, input);
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

export const assignWorkTaskCmdHandoffWorkTaskToFieldWorkerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<HandoffWorkTaskToFieldWorkerInput> & { workTaskWorkTaskId?: string };
  const workTaskId = requireIdentifier(params.workTaskWorkTaskId, 'workTaskWorkTaskId');
  if (!params.description) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.dueDate) {
    throw new AppError('VALIDATION_ERROR', 'dueDate is required', 400, { field: 'dueDate' });
  }
  const input: HandoffWorkTaskToFieldWorkerInput = {
    workTaskId,
    description: params.description,
    dueDate: params.dueDate,
    ...(params.progressUpdate !== undefined ? { progressUpdate: params.progressUpdate } : {}),
  };
  const result = await handoffWorkTaskToFieldWorker(ctx, input);
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
  { key: 'buildFlowFsm.assignWorkTask.qryLocateProject', handler: assignWorkTaskQryLocateProjectHandler },
  { key: 'buildFlowFsm.assignWorkTask.qryInspectProjectTimeline', handler: assignWorkTaskQryInspectProjectTimelineHandler },
  { key: 'buildFlowFsm.assignWorkTask.qryLocateFieldWorker', handler: assignWorkTaskQryLocateFieldWorkerHandler },
  { key: 'buildFlowFsm.assignWorkTask.cmdCreateWorkTask', handler: assignWorkTaskCmdCreateWorkTaskHandler },
  { key: 'buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker', handler: assignWorkTaskCmdHandoffWorkTaskToFieldWorkerHandler },
];