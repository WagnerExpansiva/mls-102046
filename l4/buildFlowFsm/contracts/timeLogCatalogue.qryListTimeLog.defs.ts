/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/timeLogCatalogue.qryListTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListTimeLog (query); Output kind=list; route buildFlowFsm.timeLogCatalogue.qryListTimeLog.

export interface QryListTimeLogInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const qryListTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.qryListTimeLog' as const;
