/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/workTaskCatalogue.cmdCreateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/workTaskCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateWorkTask (command); Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask.

export interface CmdCreateWorkTaskInput {
  projectProjectId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}

export interface CmdCreateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const cmdCreateWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask' as const;
