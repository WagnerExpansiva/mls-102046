/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectExecutionOverviewView.qryProjectExecutionOverviewView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectExecutionOverviewView.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryProjectExecutionOverviewView (query); Output kind=object; route buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView.

export interface QryProjectExecutionOverviewViewInput {
  projectExecutionOverviewProjectId: string;
}

export interface QryProjectExecutionOverviewViewOutput {
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

export const qryProjectExecutionOverviewViewRoute = 'buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView' as const;
