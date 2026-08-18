/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IFieldWorkerRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import { hasValidHourlyLaborCost, hasValidTimeLogHours } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface CreateTimeLogInput {
  workTaskWorkTaskId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface CreateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export async function createTimeLog(
  ctx: RequestContext,
  input: CreateTimeLogInput,
): Promise<CreateTimeLogOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const fieldWorkers = resolveRepository<IFieldWorkerRepository>(ctx, 'FieldWorker');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  const workTask = await workTasks.getById(input.workTaskWorkTaskId);
  if (workTask === null || workTask.status !== 'inProgress') {
    throw new AppError(
      'VALIDATION_ERROR',
      'A tarefa de trabalho deve existir e estar ativa para receber apontamentos.',
      400,
      { ruleId: 'activeWorkTask' },
    );
  }

  const fieldWorker = await fieldWorkers.getById(workTask.assignedFieldWorkerId);
  if (fieldWorker === null) {
    throw new AppError(
      'VALIDATION_ERROR',
      'A tarefa de trabalho deve possuir um trabalhador de campo atribuído.',
      400,
      { ruleId: 'timeLogRequiresWorkerTaskAndPositiveHours' },
    );
  }

  const candidate: TimeLog = {
    timeLogId: ctx.idGenerator.newId(),
    status: 'recorded',
    workTaskId: workTask.workTaskId,
    fieldWorkerId: fieldWorker.fieldWorkerId,
    workDate: input.workDate,
    hoursWorked: input.hoursWorked,
    hourlyLaborCost: input.hourlyLaborCost,
  };

  if (!hasValidTimeLogHours(candidate)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'O apontamento deve informar uma quantidade de horas maior que zero.',
      400,
      { ruleId: 'timeLogRequiresWorkerTaskAndPositiveHours' },
    );
  }

  if (!hasValidHourlyLaborCost(candidate)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'O custo de mão de obra por hora deve ser um número não negativo.',
      400,
      { field: 'hourlyLaborCost' },
    );
  }

  await ctx.data.runInTransaction(async () => {
    await timeLogs.save(candidate);
  });

  return {
    timeLogId: candidate.timeLogId,
    status: candidate.status,
    workTaskId: candidate.workTaskId,
    fieldWorkerId: candidate.fieldWorkerId,
    workDate: candidate.workDate,
    hoursWorked: candidate.hoursWorked,
    hourlyLaborCost: candidate.hourlyLaborCost,
  };
}
