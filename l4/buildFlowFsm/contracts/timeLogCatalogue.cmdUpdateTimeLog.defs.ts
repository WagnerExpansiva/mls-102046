/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/timeLogCatalogue.cmdUpdateTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateTimeLog (command); Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog.

export interface CmdUpdateTimeLogInput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface CmdUpdateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const cmdUpdateTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog' as const;
