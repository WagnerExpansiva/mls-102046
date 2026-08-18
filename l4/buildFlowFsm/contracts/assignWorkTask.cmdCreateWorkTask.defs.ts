/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/assignWorkTask.cmdCreateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/assignWorkTask.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateWorkTask (command); Output kind=object; route buildFlowFsm.assignWorkTask.cmdCreateWorkTask.

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

export const cmdCreateWorkTaskRoute = 'buildFlowFsm.assignWorkTask.cmdCreateWorkTask' as const;
