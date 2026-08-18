/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryListWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListWorkTask (query); Output kind=list; route buildFlowFsm.projectHub.qryListWorkTask.

export interface QryListWorkTaskInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const qryListWorkTaskRoute = 'buildFlowFsm.projectHub.qryListWorkTask' as const;
