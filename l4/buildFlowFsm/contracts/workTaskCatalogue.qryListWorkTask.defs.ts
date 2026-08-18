/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/workTaskCatalogue.qryListWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/workTaskCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListWorkTask (query); Output kind=list; route buildFlowFsm.workTaskCatalogue.qryListWorkTask.

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

export const qryListWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.qryListWorkTask' as const;
