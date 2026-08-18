/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace reviewProjectPortfolio; one contract file per workspace, all bffCalls).

// bffCall qryInspectProjectDashboard (query) — Output kind=object; route buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard.
export interface QryInspectProjectDashboardInput {}
export interface QryInspectProjectDashboardOutput {
  activeProjects: string;
  activeProjectCount: number;
  totalBudget: number;
  totalActualCost: number;
  budgetVariance: number;
  costAttentionProjects: string;
  upcomingTasks: string;
}
export const qryInspectProjectDashboardRoute = 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard' as const;

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.reviewProjectPortfolio.qryLocateProject.
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
export const qryLocateProjectRoute = 'buildFlowFsm.reviewProjectPortfolio.qryLocateProject' as const;

// bffCall qryInspectProjectExecutionOverview (query) — Output kind=object; route buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview.
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
export const qryInspectProjectExecutionOverviewRoute = 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview' as const;

// bffCall cmdHandoffProjectToFieldCoordinator (command) — Output kind=object; route buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.
export interface CmdHandoffProjectToFieldCoordinatorInput {
  projectProjectId: string;
  clientId: string;
  name: string;
  address: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export interface CmdHandoffProjectToFieldCoordinatorOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const cmdHandoffProjectToFieldCoordinatorRoute = 'buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator' as const;
