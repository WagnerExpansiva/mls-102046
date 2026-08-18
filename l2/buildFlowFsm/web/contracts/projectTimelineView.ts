/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectTimelineView; one contract file per workspace, all bffCalls).

// bffCall qryProjectTimelineView (query) — Output kind=object; route buildFlowFsm.projectTimelineView.qryProjectTimelineView.
export interface QryProjectTimelineViewInput {
  projectTimelineProjectId: string;
}
export interface QryProjectTimelineViewOutput {
  projectId: string;
  workTasks: string;
  scheduleEntries: string;
}
export const qryProjectTimelineViewRoute = 'buildFlowFsm.projectTimelineView.qryProjectTimelineView' as const;
