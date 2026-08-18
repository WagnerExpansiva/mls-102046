/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectProjectExecutionOverview (query); Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.

export interface QryInspectProjectExecutionOverviewInput {
  projectExecutionOverviewProjectId: string;
}

export interface QryInspectProjectExecutionOverviewOutput {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds?: string;
  taskSummary: string;
  upcomingCommitments: string;
  timeLogIds?: string;
  totalLoggedHours: number;
  materialUsageIds?: string;
  materialUsageSummary: string;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds?: string;
  changeOrderImpactSummary: string;
  calculatedAt: string;
}

export const qryInspectProjectExecutionOverviewRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview' as const;
