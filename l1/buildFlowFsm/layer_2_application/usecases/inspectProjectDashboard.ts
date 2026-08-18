/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectDashboardRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import {
  calculateProjectDashboardBudgetVariance,
  sumActiveProjectActualCosts,
  sumActiveProjectBudgets,
  type ActiveProject,
  type CostAttentionProject,
  type ProjectDashboard,
  type UpcomingTask,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.js';

export interface InspectProjectDashboardInput {}

export interface InspectProjectDashboardOutput {
  activeProjects: string;
  activeProjectCount: number;
  totalBudget: number;
  totalActualCost: number;
  budgetVariance: number;
  costAttentionProjects: string;
  upcomingTasks: string;
}

export async function inspectProjectDashboard(
  ctx: RequestContext,
  _input: InspectProjectDashboardInput,
): Promise<InspectProjectDashboardOutput> {
  const dashboardRepository = resolveRepository<IProjectDashboardRepository>(ctx, 'ProjectDashboard');
  const projectRepository = resolveRepository<IProjectRepository>(ctx, 'Project');

  // The definition has no dashboard identity input and its keyField is malformed;
  // use the singleton projection as the modeling-gap fallback.
  const dashboardResult = await dashboardRepository.list({});
  const dashboard: ProjectDashboard | null = dashboardResult[0] ?? null;
  const activeProjectsFromModel = await projectRepository.list({ status: 'active' });
  const activeProjectIds = new Set(activeProjectsFromModel.map((project) => project.projectId));

  const sourceActiveProjects: ActiveProject[] = dashboard?.activeProjects ?? [];
  const activeProjects = sourceActiveProjects.filter((project) => activeProjectIds.has(project.projectId));

  // rule: activeProjectCostVisibility
  // Cost visibility is derived from the active project set; no client-supplied visibility input exists.
  const visibleCostAttentionProjects: CostAttentionProject[] = (dashboard?.costAttentionProjects ?? []).filter(
    (project) => activeProjectIds.has(project.projectId),
  );
  const upcomingTasks: UpcomingTask[] = (dashboard?.upcomingTasks ?? []).filter(
    (task) => activeProjectIds.has(task.projectId),
  );

  const totalBudget = sumActiveProjectBudgets(activeProjects);
  const totalActualCost = sumActiveProjectActualCosts(activeProjects);

  return {
    activeProjects: JSON.stringify(activeProjects),
    activeProjectCount: activeProjects.length,
    totalBudget,
    totalActualCost,
    budgetVariance: calculateProjectDashboardBudgetVariance(totalBudget, totalActualCost),
    costAttentionProjects: JSON.stringify(visibleCostAttentionProjects),
    upcomingTasks: JSON.stringify(upcomingTasks),
  };
}
