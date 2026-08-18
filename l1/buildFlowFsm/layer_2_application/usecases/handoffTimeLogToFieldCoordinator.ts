/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffTimeLogToFieldCoordinator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import { hasValidHourlyLaborCost, hasValidTimeLogHours } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface HandoffTimeLogToFieldCoordinatorInput {
  timeLogTimeLogId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface HandoffTimeLogToFieldCoordinatorOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export async function handoffTimeLogToFieldCoordinator(
  ctx: RequestContext,
  input: HandoffTimeLogToFieldCoordinatorInput,
): Promise<HandoffTimeLogToFieldCoordinatorOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  if (input.timeLogTimeLogId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'timeLogTimeLogId is required.',
      400,
      { field: 'timeLogTimeLogId' },
    );
  }
  if (input.workDate.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'workDate is required.', 400, { field: 'workDate' });
  }
  if (!hasValidTimeLogHours({ hoursWorked: input.hoursWorked })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'hoursWorked must be a finite number greater than zero.',
      400,
      { field: 'hoursWorked' },
    );
  }
  if (!hasValidHourlyLaborCost({ hourlyLaborCost: input.hourlyLaborCost })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'hourlyLaborCost must be a finite number greater than or equal to zero.',
      400,
      { field: 'hourlyLaborCost' },
    );
  }

  const updated = await ctx.data.runInTransaction(async () => {
    const timeLog = await timeLogs.getById(input.timeLogTimeLogId);
    if (!timeLog) {
      throw new AppError(
        'NOT_FOUND',
        `TimeLog not found: ${input.timeLogTimeLogId}`,
        404,
        { timeLogId: input.timeLogTimeLogId },
      );
    }

    const updatedTimeLog: TimeLog = {
      ...timeLog,
      workDate: input.workDate,
      hoursWorked: input.hoursWorked,
      hourlyLaborCost: input.hourlyLaborCost,
    };
    await timeLogs.save(updatedTimeLog);
    return updatedTimeLog;
  });

  return {
    timeLogId: updated.timeLogId,
    status: updated.status,
    workTaskId: updated.workTaskId,
    fieldWorkerId: updated.fieldWorkerId,
    workDate: updated.workDate,
    hoursWorked: updated.hoursWorked,
    hourlyLaborCost: updated.hourlyLaborCost,
  };
}
