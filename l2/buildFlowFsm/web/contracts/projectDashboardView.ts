/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectDashboardView; one contract file per workspace, all bffCalls).

// bffCall qryProjectDashboardView (query) — Output kind=object; route buildFlowFsm.projectDashboardView.qryProjectDashboardView.
export interface QryProjectDashboardViewInput {}
export interface QryProjectDashboardViewOutput {
  activeProjects: string;
  activeProjectCount: number;
  totalBudget: number;
  totalActualCost: number;
  budgetVariance: number;
  costAttentionProjects: string;
  upcomingTasks: string;
}
export const qryProjectDashboardViewRoute = 'buildFlowFsm.projectDashboardView.qryProjectDashboardView' as const;
