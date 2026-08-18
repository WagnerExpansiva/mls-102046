/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.ts" enhancement="_blank"/>
export type TimeLogStatus = 'recorded' | 'voided';

export interface TimeLog {
  timeLogId: string;
  status: TimeLogStatus;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const TIME_LOG_STATUS_TRANSITIONS: Record<TimeLogStatus, TimeLogStatus[]> = {
  recorded: ['voided'],
  voided: [],
};

export function canTransitionTimeLog(from: TimeLogStatus, to: TimeLogStatus): boolean {
  return TIME_LOG_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isValidTimeLogStatus(status: string): status is TimeLogStatus {
  return status === 'recorded' || status === 'voided';
}

export function hasValidTimeLogHours(timeLog: Pick<TimeLog, 'hoursWorked'>): boolean {
  return Number.isFinite(timeLog.hoursWorked) && timeLog.hoursWorked > 0;
}

export function hasValidHourlyLaborCost(timeLog: Pick<TimeLog, 'hourlyLaborCost'>): boolean {
  return Number.isFinite(timeLog.hourlyLaborCost) && timeLog.hourlyLaborCost >= 0;
}

export function calculateRealizedLaborCost(
  timeLog: Pick<TimeLog, 'hoursWorked' | 'hourlyLaborCost'>,
): number {
  return timeLog.hoursWorked * timeLog.hourlyLaborCost;
}
