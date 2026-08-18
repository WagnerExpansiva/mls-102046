/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listTimeLog.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface ListTimeLogInput {}

export interface ListTimeLogItem {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export type ListTimeLogOutput = ListTimeLogItem[];

export async function listTimeLog(
  ctx: RequestContext,
  input: ListTimeLogInput,
): Promise<ListTimeLogOutput> {
  void input;
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const records: TimeLog[] = await timeLogs.list({});

  return records.map((timeLog) => ({
    timeLogId: timeLog.timeLogId,
    status: timeLog.status,
    workTaskId: timeLog.workTaskId,
    fieldWorkerId: timeLog.fieldWorkerId,
    workDate: timeLog.workDate,
    hoursWorked: timeLog.hoursWorked,
    hourlyLaborCost: timeLog.hourlyLaborCost,
  }));
}
