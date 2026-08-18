/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { WorkTask } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
export interface HandoffWorkTaskProgressToFieldCoordinatorInput {
workTaskId: string;
description: string;
dueDate: string;
progressUpdate?: string;
}
export interface HandoffWorkTaskProgressToFieldCoordinatorOutput {
workTaskId: string;
projectId: string;
assignedFieldWorkerId: string;
description: string;
dueDate: string;
status: string;
progressUpdate?: string;
}
export async function handoffWorkTaskProgressToFieldCoordinator(
ctx: RequestContext,
input: HandoffWorkTaskProgressToFieldCoordinatorInput,
): Promise<HandoffWorkTaskProgressToFieldCoordinatorOutput> {
let savedTask: WorkTask | null = null;
await ctx.data.runInTransaction(async () => {
const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
const workTask = await workTasks.getById(input.workTaskId);
if (!workTask) {
throw new AppError(
'NOT_FOUND',
`WorkTask not found: ${input.workTaskId}`,
404,
{ workTaskId: input.workTaskId },
);
}
const now = ctx.clock.nowIso();
const updatedTask: WorkTask = {
...workTask,
description: input.description,
dueDate: input.dueDate,
progressUpdate:
input.progressUpdate === undefined
? workTask.progressUpdate
: input.progressUpdate,
updatedAt: now,
};
await workTasks.save(updatedTask);
savedTask = updatedTask;
});
if (!savedTask) {
throw new AppError(
'NOT_FOUND',
`WorkTask not found: ${input.workTaskId}`,
404,
{ workTaskId: input.workTaskId },
);
}
const taskToReturn = savedTask as WorkTask;
return {
workTaskId: taskToReturn.workTaskId,
projectId: taskToReturn.projectId,
assignedFieldWorkerId: taskToReturn.assignedFieldWorkerId,
description: taskToReturn.description,
dueDate: taskToReturn.dueDate,
status: taskToReturn.status,
...(taskToReturn.progressUpdate === null
? {}
: { progressUpdate: taskToReturn.progressUpdate }),
};
}
