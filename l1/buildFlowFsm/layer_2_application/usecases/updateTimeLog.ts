/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateTimeLog.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IFieldWorkerRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import {
  canTransitionTimeLog,
  hasValidHourlyLaborCost,
  hasValidTimeLogHours,
  isValidTimeLogStatus,
  type TimeLog,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface UpdateTimeLogInput {
  timeLogId: string;
  workTaskId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface UpdateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export async function updateTimeLog(
  ctx: RequestContext,
  input: UpdateTimeLogInput,
): Promise<UpdateTimeLogOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const fieldWorkers = resolveRepository<IFieldWorkerRepository>(ctx, 'FieldWorker');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  return ctx.data.runInTransaction(async () => {
    const existing = await timeLogs.getById(input.timeLogId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `TimeLog not found: ${input.timeLogId}`,
        404,
        { timeLogId: input.timeLogId },
      );
    }

    const actorId = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
    if (!actorId) {
      throw new AppError('VALIDATION_ERROR', 'An authenticated platform user is required.', 400);
    }

    const worker = await fieldWorkers.getByPlatformUserId(actorId);
    if (!worker) {
      throw new AppError(
        'NOT_FOUND',
        `FieldWorker not found for platform user: ${actorId}`,
        404,
        { platformUserId: actorId },
      );
    }

    const task = await workTasks.getById(input.workTaskId);
    if (!task || !worker.fieldWorkerId || !task.assignedFieldWorkerId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'A valid work task and field worker are required for the time log.',
        400,
        { ruleId: 'timeLogRequiresWorkerTaskAndPositiveHours' },
      );
    }
    if (task.assignedFieldWorkerId !== worker.fieldWorkerId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The selected work task is not assigned to the resolved field worker.',
        400,
        { ruleId: 'timeLogRequiresWorkerTaskAndPositiveHours' },
      );
    }

    const resulting: TimeLog = {
      timeLogId: existing.timeLogId,
      status: 'recorded',
      workTaskId: input.workTaskId,
      fieldWorkerId: worker.fieldWorkerId,
      workDate: input.workDate,
      hoursWorked: input.hoursWorked,
      hourlyLaborCost: input.hourlyLaborCost,
    };

    if (!hasValidTimeLogHours(resulting)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'A time log must contain positive hours worked.',
        400,
        { ruleId: 'timeLogRequiresWorkerTaskAndPositiveHours' },
      );
    }
    if (!hasValidHourlyLaborCost(resulting)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Hourly labor cost must be non-negative.',
        400,
        { ruleId: 'costEligibleTimeLog' },
      );
    }
    if (!isValidTimeLogStatus(existing.status)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The existing time log has an invalid status.',
        400,
        { ruleId: 'costEligibleTimeLog' },
      );
    }
    if (existing.status !== resulting.status && !canTransitionTimeLog(existing.status, resulting.status)) {
      throw new AppError(
        'CONFLICT',
        `TimeLog cannot transition from ${existing.status} to ${resulting.status}.`,
        409,
        { ruleId: 'costEligibleTimeLog' },
      );
    }

    await timeLogs.save(resulting);
    return {
      timeLogId: resulting.timeLogId,
      status: resulting.status,
      workTaskId: resulting.workTaskId,
      fieldWorkerId: resulting.fieldWorkerId,
      workDate: resulting.workDate,
      hoursWorked: resulting.hoursWorked,
      hourlyLaborCost: resulting.hourlyLaborCost,
    };
  });
}
