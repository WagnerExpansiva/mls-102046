/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IFieldWorkerRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';
import {
canTransitionWorkTask,
isWorkTaskDueDateValid,
isWorkTaskProgressValid,
type WorkTask,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
export interface HandoffWorkTaskToFieldWorkerInput {
workTaskId: string;
description: string;
dueDate: string;
progressUpdate?: string;
}
export interface HandoffWorkTaskToFieldWorkerOutput {
workTaskId: string;
projectId: string;
assignedFieldWorkerId: string;
description: string;
dueDate: string;
status: string;
progressUpdate?: string;
}
export async function handoffWorkTaskToFieldWorker(
ctx: RequestContext,
input: HandoffWorkTaskToFieldWorkerInput,
): Promise<HandoffWorkTaskToFieldWorkerOutput> {
const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
const fieldWorkers = resolveRepository<IFieldWorkerRepository>(ctx, 'FieldWorker');
let persistedTask: WorkTask | null = null;
await ctx.data.runInTransaction(async () => {
const workTask = await workTasks.getById(input.workTaskId);
if (!workTask) {
throw new AppError(
'NOT_FOUND',
`WorkTask not found: ${input.workTaskId}`,
404,
{ workTaskId: input.workTaskId },
);
}
if (!workTask.assignedFieldWorkerId || !input.dueDate) {
throw new AppError(
'VALIDATION_ERROR',
'A tarefa deve possuir um trabalhador atribuído e uma data prevista.',
400,
{ ruleId: 'workTaskRequiresAssigneeAndDueDate' },
);
}
const fieldWorker = await fieldWorkers.getById(workTask.assignedFieldWorkerId);
if (!fieldWorker) {
throw new AppError(
'NOT_FOUND',
`FieldWorker not found: ${workTask.assignedFieldWorkerId}`,
404,
{ fieldWorkerId: workTask.assignedFieldWorkerId },
);
}
if (!canTransitionWorkTask(workTask.status, 'inProgress')) {
throw new AppError(
'CONFLICT',
`WorkTask cannot be handed off from status ${workTask.status}.`,
409,
{ workTaskId: workTask.workTaskId, status: workTask.status },
);
}
const now = ctx.clock.nowIso();
const updatedTask: WorkTask = {
...workTask,
description: input.description,
dueDate: input.dueDate,
progressUpdate: input.progressUpdate !== undefined
? input.progressUpdate
: workTask.progressUpdate,
status: 'inProgress',
updatedAt: now,
};
if (!isWorkTaskDueDateValid(updatedTask)) {
throw new AppError(
'VALIDATION_ERROR',
'A data prevista não pode ser anterior à data de criação da tarefa.',
400,
{ workTaskId: updatedTask.workTaskId },
);
}
if (!isWorkTaskProgressValid(updatedTask)) {
throw new AppError(
'VALIDATION_ERROR',
'Uma tarefa em andamento deve possuir uma atualização de progresso.',
400,
{ workTaskId: updatedTask.workTaskId },
);
}
await workTasks.save(updatedTask);
persistedTask = updatedTask;
void fieldWorker;
});
const completedTask = persistedTask as WorkTask | null;
if (!completedTask) {
throw new AppError('CONFLICT', 'WorkTask handoff did not produce a persisted task.', 409);
}
return {
workTaskId: completedTask.workTaskId,
projectId: completedTask.projectId,
assignedFieldWorkerId: completedTask.assignedFieldWorkerId,
description: completedTask.description,
dueDate: completedTask.dueDate,
status: completedTask.status,
...(completedTask.progressUpdate !== null
? { progressUpdate: completedTask.progressUpdate }
: {}),
};
}
