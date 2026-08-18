/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectDashboardView.qryProjectDashboardView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectDashboardView.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryProjectDashboardView (query); Output kind=object; route buildFlowFsm.projectDashboardView.qryProjectDashboardView.

export interface QryProjectDashboardViewInput {
  // sem inputs públicos (resolvidos por contexto)
}

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
