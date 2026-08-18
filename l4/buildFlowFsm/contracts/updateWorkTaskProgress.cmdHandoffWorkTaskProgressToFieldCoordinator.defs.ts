/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/updateWorkTaskProgress.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffWorkTaskProgressToFieldCoordinator (command); Output kind=object; route buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.

export interface CmdHandoffWorkTaskProgressToFieldCoordinatorInput {
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}

export interface CmdHandoffWorkTaskProgressToFieldCoordinatorOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const cmdHandoffWorkTaskProgressToFieldCoordinatorRoute = 'buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator' as const;
