/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdDeleteWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/workTaskCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteWorkTask (command); Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask.

export interface CmdDeleteWorkTaskInput {
  workTaskId: string;
}

export interface CmdDeleteWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const cmdDeleteWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask' as const;
