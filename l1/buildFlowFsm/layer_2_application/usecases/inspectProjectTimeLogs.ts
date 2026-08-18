/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeLogs.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';

export interface InspectProjectTimeLogsInput {
  timeLogId: string;
}

export interface InspectProjectTimeLogsOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export async function inspectProjectTimeLogs(
  ctx: RequestContext,
  input: InspectProjectTimeLogsInput,
): Promise<InspectProjectTimeLogsOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const timeLog = await timeLogs.getById(input.timeLogId);

  if (!timeLog) {
    throw new AppError(
      'NOT_FOUND',
      `TimeLog not found: ${input.timeLogId}`,
      404,
      { timeLogId: input.timeLogId },
    );
  }

  return {
    timeLogId: timeLog.timeLogId,
    status: timeLog.status,
    workTaskId: timeLog.workTaskId,
    fieldWorkerId: timeLog.fieldWorkerId,
    workDate: timeLog.workDate,
    hoursWorked: timeLog.hoursWorked,
    hourlyLaborCost: timeLog.hourlyLaborCost,
  };
}
