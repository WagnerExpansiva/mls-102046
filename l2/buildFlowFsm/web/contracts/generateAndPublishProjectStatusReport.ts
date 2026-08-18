/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace generateAndPublishProjectStatusReport; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject.
export interface QryLocateProjectInput {}
export interface QryLocateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryLocateProjectRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject' as const;

// bffCall qryInspectProjectExecutionOverview (query) — Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.
export interface QryInspectProjectExecutionOverviewInput {
  projectExecutionOverviewProjectId: string;
}
export interface QryInspectProjectExecutionOverviewOutput {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds: string;
  taskSummary: string;
  upcomingCommitments: string;
  timeLogIds: string;
  totalLoggedHours: number;
  materialUsageIds: string;
  materialUsageSummary: string;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds: string;
  changeOrderImpactSummary: string;
  calculatedAt: string;
}
export const qryInspectProjectExecutionOverviewRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview' as const;

// bffCall qryInspectScheduleRiskAssessment (query) — Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.
export interface QryInspectScheduleRiskAssessmentInput {
  scheduleRiskAssessmentProjectId: string;
}
export interface QryInspectScheduleRiskAssessmentOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}
export const qryInspectScheduleRiskAssessmentRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment' as const;

// bffCall cmdCreateStatusReport (command) — Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport.
export interface CmdCreateStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}
export interface CmdCreateStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdCreateStatusReportRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport' as const;

// bffCall cmdPublishStatusReport (command) — Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport.
export interface CmdPublishStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  statusReportStatusReportId: string;
  status: string;
}
export interface CmdPublishStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdPublishStatusReportRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport' as const;

// bffCall cmdHandoffStatusReportToClient (command) — Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.
export interface CmdHandoffStatusReportToClientInput {
  statusReportStatusReportId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}
export interface CmdHandoffStatusReportToClientOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const cmdHandoffStatusReportToClientRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient' as const;
