/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.ts" enhancement="_blank"/>
import type { TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export type TimeLogId = string;
export type FieldWorkerId = string;

export interface TimeLogFilter {
  timeLogId?: TimeLogId;
  workTaskId?: string;
  fieldWorkerId?: FieldWorkerId;
  workDate?: string;
  status?: TimeLog['status'];
}

export interface ITimeLogRepository {
  getById(id: TimeLogId): Promise<TimeLog | null>;
  list(filter: TimeLogFilter): Promise<TimeLog[]>;
  save(aggregate: TimeLog): Promise<void>;
  listByFieldWorkerId(fieldWorkerId: FieldWorkerId): Promise<TimeLog[]>;
}
