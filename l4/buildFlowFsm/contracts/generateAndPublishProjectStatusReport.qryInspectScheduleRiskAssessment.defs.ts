/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectScheduleRiskAssessment (query); Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.

export interface QryInspectScheduleRiskAssessmentInput {
  scheduleRiskAssessmentProjectId: string;
}

export interface QryInspectScheduleRiskAssessmentOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent?: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}

export const qryInspectScheduleRiskAssessmentRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment' as const;
