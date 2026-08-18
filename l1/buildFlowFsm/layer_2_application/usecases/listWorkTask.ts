/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';

export interface ListWorkTaskInput {}

export interface ListWorkTaskOutputItem {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export type ListWorkTaskOutput = ListWorkTaskOutputItem[];

export async function listWorkTask(
  ctx: RequestContext,
  _input: ListWorkTaskInput,
): Promise<ListWorkTaskOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const records = await workTasks.list({});

  return records.map((workTask) => ({
    workTaskId: workTask.workTaskId,
    projectId: workTask.projectId,
    assignedFieldWorkerId: workTask.assignedFieldWorkerId,
    description: workTask.description,
    dueDate: workTask.dueDate,
    status: workTask.status,
    ...(workTask.progressUpdate === null
      ? {}
      : { progressUpdate: workTask.progressUpdate }),
  }));
}
