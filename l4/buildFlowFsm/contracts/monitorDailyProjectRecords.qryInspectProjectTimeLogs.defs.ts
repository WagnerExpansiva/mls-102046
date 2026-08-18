/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryInspectProjectTimeLogs.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/monitorDailyProjectRecords.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectProjectTimeLogs (query); Output kind=object; route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs.

export interface QryInspectProjectTimeLogsInput {
  timeLogTimeLogId: string;
}

export interface QryInspectProjectTimeLogsOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const qryInspectProjectTimeLogsRoute = 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs' as const;
