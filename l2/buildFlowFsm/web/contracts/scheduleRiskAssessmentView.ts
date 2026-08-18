/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace scheduleRiskAssessmentView; one contract file per workspace, all bffCalls).

// bffCall qryScheduleRiskAssessmentView (query) — Output kind=object; route buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.
export interface QryScheduleRiskAssessmentViewInput {
  scheduleRiskAssessmentProjectId: string;
}
export interface QryScheduleRiskAssessmentViewOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}
export const qryScheduleRiskAssessmentViewRoute = 'buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView' as const;
