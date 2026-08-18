/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/timeLogCatalogue.qryWorkTaskPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/timeLogCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryWorkTaskPicker (query); Output kind=list; route buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker.

export interface QryWorkTaskPickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryWorkTaskPickerOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate?: string;
}

export const qryWorkTaskPickerRoute = 'buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker' as const;
