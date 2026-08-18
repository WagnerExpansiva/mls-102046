/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryScheduleRiskAssessmentView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryScheduleRiskAssessmentView (query); Output kind=object; route buildFlowFsm.projectHub.qryScheduleRiskAssessmentView.

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

export const qryScheduleRiskAssessmentViewRoute = 'buildFlowFsm.projectHub.qryScheduleRiskAssessmentView' as const;
