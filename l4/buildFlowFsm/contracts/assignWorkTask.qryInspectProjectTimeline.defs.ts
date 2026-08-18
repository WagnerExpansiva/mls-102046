/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/assignWorkTask.qryInspectProjectTimeline.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/assignWorkTask.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectProjectTimeline (query); Output kind=object; route buildFlowFsm.assignWorkTask.qryInspectProjectTimeline.

export interface QryInspectProjectTimelineInput {
  projectTimelineProjectId: string;
}

export interface QryInspectProjectTimelineOutput {
  projectId: string;
  workTasks?: string;
  scheduleEntries?: string;
}

export const qryInspectProjectTimelineRoute = 'buildFlowFsm.assignWorkTask.qryInspectProjectTimeline' as const;
