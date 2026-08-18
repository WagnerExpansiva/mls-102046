/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdUpdateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/workTaskCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateWorkTask (command); Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask.

export interface CmdUpdateWorkTaskInput {
  projectProjectId: string;
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}

export interface CmdUpdateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const cmdUpdateWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask' as const;
