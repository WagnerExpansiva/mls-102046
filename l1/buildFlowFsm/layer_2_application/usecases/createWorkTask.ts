/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IFieldWorkerRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { WorkTask } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export interface CreateWorkTaskInput {
  projectProjectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}

export interface CreateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export async function createWorkTask(
  ctx: RequestContext,
  input: CreateWorkTaskInput,
): Promise<CreateWorkTaskOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const fieldWorkers = resolveRepository<IFieldWorkerRepository>(ctx, 'FieldWorker');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  if (!input.projectProjectId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'A project is required to create a work task.',
      400,
      { ruleId: 'workTaskRequiresActiveProject' },
    );
  }
  if (!input.assignedFieldWorkerId || !input.dueDate) {
    throw new AppError(
      'VALIDATION_ERROR',
      'An assignee and due date are required to create a work task.',
      400,
      { ruleId: 'workTaskRequiresAssigneeAndDueDate' },
    );
  }
  if (!input.description) {
    throw new AppError(
      'VALIDATION_ERROR',
      'A description is required to create a work task.',
      400,
      { field: 'description' },
    );
  }

  const project = await projects.getById(input.projectProjectId);
  if (!project || project.status !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Work tasks can only be created for an active project.',
      400,
      { ruleId: 'workTaskRequiresActiveProject', projectId: input.projectProjectId },
    );
  }

  const fieldWorker = await fieldWorkers.getById(input.assignedFieldWorkerId);
  if (!fieldWorker) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The assigned field worker does not exist.',
      400,
      { ruleId: 'workTaskRequiresAssigneeAndDueDate', fieldWorkerId: input.assignedFieldWorkerId },
    );
  }

  const now = ctx.clock.nowIso();
  const workTask: WorkTask = {
    workTaskId: ctx.idGenerator.newId(),
    projectId: project.projectId,
    assignedFieldWorkerId: fieldWorker.fieldWorkerId,
    description: input.description,
    dueDate: input.dueDate,
    status: 'planned',
    progressUpdate: input.progressUpdate ?? null,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await workTasks.save(workTask);
  });

  return {
    workTaskId: workTask.workTaskId,
    projectId: workTask.projectId,
    assignedFieldWorkerId: workTask.assignedFieldWorkerId,
    description: workTask.description,
    dueDate: workTask.dueDate,
    status: workTask.status,
    ...(workTask.progressUpdate === null ? {} : { progressUpdate: workTask.progressUpdate }),
  };
}
