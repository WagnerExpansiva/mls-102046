/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/assignWorkTask.cmdHandoffWorkTaskToFieldWorker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/assignWorkTask.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffWorkTaskToFieldWorker (command); Output kind=object; route buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.

export interface CmdHandoffWorkTaskToFieldWorkerInput {
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}

export interface CmdHandoffWorkTaskToFieldWorkerOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const cmdHandoffWorkTaskToFieldWorkerRoute = 'buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker' as const;
