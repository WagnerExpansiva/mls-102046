/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectTimelineView.qryProjectTimelineView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectTimelineView.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryProjectTimelineView (query); Output kind=object; route buildFlowFsm.projectTimelineView.qryProjectTimelineView.

export interface QryProjectTimelineViewInput {
  projectTimelineProjectId: string;
}

export interface QryProjectTimelineViewOutput {
  projectId: string;
  workTasks?: string;
  scheduleEntries?: string;
}

export const qryProjectTimelineViewRoute = 'buildFlowFsm.projectTimelineView.qryProjectTimelineView' as const;
