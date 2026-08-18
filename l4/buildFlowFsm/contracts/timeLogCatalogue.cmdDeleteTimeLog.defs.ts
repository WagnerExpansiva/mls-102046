/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdDeleteTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteTimeLog (command); Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog.

export interface CmdDeleteTimeLogInput {
  timeLogId: string;
}

export interface CmdDeleteTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const cmdDeleteTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog' as const;
