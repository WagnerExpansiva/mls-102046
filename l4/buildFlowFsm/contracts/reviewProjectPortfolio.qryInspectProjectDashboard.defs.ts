/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.qryInspectProjectDashboard.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/reviewProjectPortfolio.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectProjectDashboard (query); Output kind=object; route buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard.

export interface QryInspectProjectDashboardInput {
  // sem inputs públicos (resolvidos por contexto)
}

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
