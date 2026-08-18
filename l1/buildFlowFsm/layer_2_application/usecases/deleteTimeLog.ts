/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteTimeLog.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import { canTransitionTimeLog, type TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface DeleteTimeLogInput {
  timeLogId: string;
}

export interface DeleteTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export async function deleteTimeLog(
  ctx: RequestContext,
  input: DeleteTimeLogInput,
): Promise<DeleteTimeLogOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  return ctx.data.runInTransaction(async () => {
    const timeLog = await timeLogs.getById(input.timeLogId);
    if (!timeLog) {
      throw new AppError(
        'NOT_FOUND',
        `TimeLog not found: ${input.timeLogId}`,
        404,
        { timeLogId: input.timeLogId },
      );
    }

    const captured: DeleteTimeLogOutput = {
      timeLogId: timeLog.timeLogId,
      status: timeLog.status,
      workTaskId: timeLog.workTaskId,
      fieldWorkerId: timeLog.fieldWorkerId,
      workDate: timeLog.workDate,
      hoursWorked: timeLog.hoursWorked,
      hourlyLaborCost: timeLog.hourlyLaborCost,
    };

    if (!canTransitionTimeLog(timeLog.status, 'voided')) {
      throw new AppError(
        'CONFLICT',
        `TimeLog cannot be deleted from status: ${timeLog.status}`,
        409,
        { timeLogId: timeLog.timeLogId, status: timeLog.status },
      );
    }

    const voidedTimeLog: TimeLog = {
      ...timeLog,
      status: 'voided',
    };
    await timeLogs.save(voidedTimeLog);

    return captured;
  });
}
