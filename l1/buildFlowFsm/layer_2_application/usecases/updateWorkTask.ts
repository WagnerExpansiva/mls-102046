/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { WorkTask } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import { isWorkTaskDueDateValid, isWorkTaskProgressValid } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
export interface UpdateWorkTaskInput {
projectId: string;
workTaskId: string;
description: string;
dueDate: string;
progressUpdate?: string;
}
export interface UpdateWorkTaskOutput {
workTaskId: string;
projectId: string;
assignedFieldWorkerId: string;
description: string;
dueDate: string;
status: string;
progressUpdate?: string;
}
export async function updateWorkTask(
ctx: RequestContext,
input: UpdateWorkTaskInput,
): Promise<UpdateWorkTaskOutput> {
const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
return ctx.data.runInTransaction(async (_tx: unknown) => {
const project = await projects.getById(input.projectId);
if (!project) {
throw new AppError('NOT_FOUND', `Project not found: ${input.projectId}`, 404, {
projectId: input.projectId,
});
}
const existing = await workTasks.getById(input.workTaskId);
if (!existing) {
throw new AppError('NOT_FOUND', `Work task not found: ${input.workTaskId}`, 404, {
workTaskId: input.workTaskId,
});
}
if (existing.projectId !== input.projectId) {
throw new AppError(
'NOT_FOUND',
`Work task does not belong to project: ${input.projectId}`,
404,
{ workTaskId: input.workTaskId, projectId: input.projectId },
);
}
if (input.progressUpdate !== undefined) {
const actorId = ctx.sessionContext.actorId;
if (!actorId || actorId !== existing.assignedFieldWorkerId) {
throw new AppError(
'VALIDATION_ERROR',
'Only the assigned field worker can report task progress.',
400,
{ ruleId: 'onlyAssignedWorkerReportsTaskProgress' },
);
}
}
if (input.description.trim().length === 0) {
throw new AppError('VALIDATION_ERROR', 'Work task description is required.', 400);
}
const updated: WorkTask = {
...existing,
description: input.description,
dueDate: input.dueDate,
progressUpdate: input.progressUpdate ?? existing.progressUpdate,
updatedAt: ctx.clock.nowIso(),
};
if (!isWorkTaskDueDateValid(updated)) {
throw new AppError('VALIDATION_ERROR', 'Work task due date is invalid.', 400);
}
if (!isWorkTaskProgressValid(updated)) {
throw new AppError('VALIDATION_ERROR', 'Work task progress update is required.', 400);
}
await workTasks.save(updated);
return {
workTaskId: updated.workTaskId,
projectId: updated.projectId,
assignedFieldWorkerId: updated.assignedFieldWorkerId,
description: updated.description,
dueDate: updated.dueDate,
status: updated.status,
progressUpdate: updated.progressUpdate ?? undefined,
};
});
}
