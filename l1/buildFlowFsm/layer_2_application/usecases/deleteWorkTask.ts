/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { WorkTask } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export interface DeleteWorkTaskInput {
  workTaskId: string;
}

export interface DeleteWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

interface DeletableWorkTaskRepository extends IWorkTaskRepository {
  delete(id: string): Promise<void>;
}

export async function deleteWorkTask(
  ctx: RequestContext,
  input: DeleteWorkTaskInput,
): Promise<DeleteWorkTaskOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  return ctx.data.runInTransaction(async () => {
    const workTask = await workTasks.getById(input.workTaskId);
    if (!workTask) {
      throw new AppError(
        'NOT_FOUND',
        `WorkTask not found: ${input.workTaskId}`,
        404,
        { workTaskId: input.workTaskId },
      );
    }

    const deletedWorkTask = workTask as WorkTask;
    await (workTasks as unknown as DeletableWorkTaskRepository).delete(
      deletedWorkTask.workTaskId,
    );

    return {
      workTaskId: deletedWorkTask.workTaskId,
      projectId: deletedWorkTask.projectId,
      assignedFieldWorkerId: deletedWorkTask.assignedFieldWorkerId,
      description: deletedWorkTask.description,
      dueDate: deletedWorkTask.dueDate,
      status: deletedWorkTask.status,
      ...(deletedWorkTask.progressUpdate === null
        ? {}
        : { progressUpdate: deletedWorkTask.progressUpdate }),
    };
  });
}
