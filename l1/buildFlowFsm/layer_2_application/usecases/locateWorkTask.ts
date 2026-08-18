/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';

export interface LocateWorkTaskInput {}

export interface LocateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export async function locateWorkTask(
  ctx: RequestContext,
  _input: LocateWorkTaskInput,
): Promise<LocateWorkTaskOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const tasks = await workTasks.list({});
  const task = tasks[0];

  if (!task) {
    throw new AppError('NOT_FOUND', 'Work task not found.', 404);
  }

  return {
    workTaskId: task.workTaskId,
    projectId: task.projectId,
    assignedFieldWorkerId: task.assignedFieldWorkerId,
    description: task.description,
    dueDate: task.dueDate,
    status: task.status,
    ...(task.progressUpdate === null ? {} : { progressUpdate: task.progressUpdate }),
  };
}
