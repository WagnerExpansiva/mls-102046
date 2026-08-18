/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryProjectTimelineView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryProjectTimelineView (query); Output kind=object; route buildFlowFsm.projectHub.qryProjectTimelineView.

export interface QryProjectTimelineViewInput {
  projectTimelineProjectId: string;
}

export interface QryProjectTimelineViewOutput {
  projectId: string;
  workTasks?: string;
  scheduleEntries?: string;
}

export const qryProjectTimelineViewRoute = 'buildFlowFsm.projectHub.qryProjectTimelineView' as const;
