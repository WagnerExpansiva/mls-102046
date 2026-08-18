/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectExecutionOverviewView; one contract file per workspace, all bffCalls).

// bffCall qryProjectExecutionOverviewView (query) — Output kind=object; route buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView.
export interface QryProjectExecutionOverviewViewInput {
  projectExecutionOverviewProjectId: string;
}
export interface QryProjectExecutionOverviewViewOutput {
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
export const qryProjectExecutionOverviewViewRoute = 'buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView' as const;
