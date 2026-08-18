/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.ts" enhancement="_blank"/>

export interface ActiveProject {
  projectId: string;
  budget: number;
  actualCost: number;
  [key: string]: unknown;
}

export interface CostAttentionProject {
  projectId: string;
  [key: string]: unknown;
}

export interface UpcomingTask {
  taskId: string;
  projectId: string;
  dueDate: string;
  [key: string]: unknown;
}

export interface ProjectDashboard {
  activeProjects: ActiveProject[];
  activeProjectCount: number;
  totalBudget: number;
  totalActualCost: number;
  budgetVariance: number;
  costAttentionProjects: CostAttentionProject[];
  upcomingTasks: UpcomingTask[];
}

export function projectDashboardHasConsistentCounts(
  dashboard: Pick<ProjectDashboard, 'activeProjects' | 'activeProjectCount'>,
): boolean {
  return dashboard.activeProjectCount >= 0 && dashboard.activeProjectCount === dashboard.activeProjects.length;
}

export function sumActiveProjectBudgets(activeProjects: ActiveProject[]): number {
  return activeProjects.reduce((sum, project) => sum + project.budget, 0);
}

export function sumActiveProjectActualCosts(activeProjects: ActiveProject[]): number {
  return activeProjects.reduce((sum, project) => sum + project.actualCost, 0);
}

export function calculateProjectDashboardBudgetVariance(totalBudget: number, totalActualCost: number): number {
  return totalBudget - totalActualCost;
}

export function projectDashboardHasConsistentTotals(
  dashboard: Pick<ProjectDashboard, 'activeProjects' | 'totalBudget' | 'totalActualCost' | 'budgetVariance'>,
): boolean {
  return (
    dashboard.totalBudget === sumActiveProjectBudgets(dashboard.activeProjects) &&
    dashboard.totalActualCost === sumActiveProjectActualCosts(dashboard.activeProjects) &&
    dashboard.budgetVariance === calculateProjectDashboardBudgetVariance(
      dashboard.totalBudget,
      dashboard.totalActualCost,
    )
  );
}

export function projectDashboardHasNonNegativeAmounts(
  dashboard: Pick<ProjectDashboard, 'activeProjects' | 'totalBudget' | 'totalActualCost'>,
): boolean {
  return (
    dashboard.totalBudget >= 0 &&
    dashboard.totalActualCost >= 0 &&
    dashboard.activeProjects.every((project) => project.budget >= 0 && project.actualCost >= 0)
  );
}

export function projectDashboardHasUniqueCostAttentionProjects(
  dashboard: Pick<ProjectDashboard, 'activeProjects' | 'costAttentionProjects'>,
): boolean {
  const activeProjectIds = new Set(dashboard.activeProjects.map((project) => project.projectId));
  const attentionProjectIds = dashboard.costAttentionProjects.map((project) => project.projectId);
  return (
    new Set(attentionProjectIds).size === attentionProjectIds.length &&
    attentionProjectIds.every((projectId) => activeProjectIds.has(projectId))
  );
}

export function projectDashboardTasksAreUpcomingAndOrdered(
  dashboard: Pick<ProjectDashboard, 'activeProjects' | 'upcomingTasks'>,
  nowIso?: string,
): boolean {
  const activeProjectIds = new Set(dashboard.activeProjects.map((project) => project.projectId));
  const minimumDueDate = nowIso === undefined ? undefined : Date.parse(nowIso);
  for (let index = 0; index < dashboard.upcomingTasks.length; index += 1) {
    const task = dashboard.upcomingTasks[index];
    if (!activeProjectIds.has(task.projectId)) return false;
    const dueTime = Date.parse(task.dueDate);
    if (Number.isNaN(dueTime)) return false;
    if (minimumDueDate !== undefined && dueTime < minimumDueDate) return false;
    if (index > 0 && dueTime < Date.parse(dashboard.upcomingTasks[index - 1].dueDate)) return false;
  }
  return true;
}

export function isProjectDashboardConsistent(
  dashboard: ProjectDashboard,
  nowIso?: string,
): boolean {
  return (
    projectDashboardHasConsistentCounts(dashboard) &&
    projectDashboardHasConsistentTotals(dashboard) &&
    projectDashboardHasNonNegativeAmounts(dashboard) &&
    projectDashboardHasUniqueCostAttentionProjects(dashboard) &&
    projectDashboardTasksAreUpcomingAndOrdered(dashboard, nowIso)
  );
}
