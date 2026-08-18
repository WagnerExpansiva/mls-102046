/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordWorkTime.qryLocateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordWorkTime.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateWorkTask (query); Output kind=list; route buildFlowFsm.recordWorkTime.qryLocateWorkTask.

export interface QryLocateWorkTaskInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const qryLocateWorkTaskRoute = 'buildFlowFsm.recordWorkTime.qryLocateWorkTask' as const;
