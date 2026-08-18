/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/scheduleRiskAssessmentView.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryScheduleRiskAssessmentView (query); Output kind=object; route buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.

export interface QryScheduleRiskAssessmentViewInput {
  scheduleRiskAssessmentProjectId: string;
}

export interface QryScheduleRiskAssessmentViewOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent?: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}

export const qryScheduleRiskAssessmentViewRoute = 'buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView' as const;
