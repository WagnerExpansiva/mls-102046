/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordWorkTime.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffTimeLogToFieldCoordinator (command); Output kind=object; route buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.

export interface CmdHandoffTimeLogToFieldCoordinatorInput {
  timeLogTimeLogId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export interface CmdHandoffTimeLogToFieldCoordinatorOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}

export const cmdHandoffTimeLogToFieldCoordinatorRoute = 'buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator' as const;
