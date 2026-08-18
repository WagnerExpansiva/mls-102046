/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdCreateTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateTimeLog (command); Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog.

export interface CmdCreateTimeLogInput {
  workTaskWorkTaskId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface CmdCreateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const cmdCreateTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog' as const;
