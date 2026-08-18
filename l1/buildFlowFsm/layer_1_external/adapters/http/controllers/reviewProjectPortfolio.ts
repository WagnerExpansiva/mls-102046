/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/reviewProjectPortfolio.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { inspectProjectDashboard, type InspectProjectDashboardInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectProjectExecutionOverview, type InspectProjectExecutionOverviewInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.js';
import { handoffProjectToFieldCoordinator, type HandoffProjectToFieldCoordinatorInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((value) => allowed.includes(value))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function requireText(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

function requireId(value: unknown, field: string): string {
  const result = requireText(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(result)) {
    throw new AppError('VALIDATION_ERROR', `${field} has an invalid identifier`, 400, { field });
  }
  return result;
}

export const reviewProjectPortfolioQryInspectProjectDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard');
  if (denial) return denial;
  const input: InspectProjectDashboardInput = {};
  const result = await inspectProjectDashboard(ctx, input);
  return ok({
    activeProjects: result.activeProjects,
    activeProjectCount: result.activeProjectCount,
    totalBudget: result.totalBudget,
    totalActualCost: result.totalActualCost,
    budgetVariance: result.budgetVariance,
    costAttentionProjects: result.costAttentionProjects,
    upcomingTasks: result.upcomingTasks,
  });
};

export const reviewProjectPortfolioQryLocateProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.reviewProjectPortfolio.qryLocateProject');
  if (denial) return denial;
  const input: LocateProjectInput = {};
  const result = await locateProject(ctx, input);
  return ok(result.map((row) => ({
    projectId: row.projectId,
    clientId: row.clientId,
    name: row.name,
    address: row.address,
    status: row.status,
    authorizedBudget: row.authorizedBudget,
    plannedStartDate: row.plannedStartDate,
    plannedEndDate: row.plannedEndDate,
  })));
};

export const reviewProjectPortfolioQryInspectProjectExecutionOverviewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectExecutionOverviewProjectId?: unknown };
  const input: InspectProjectExecutionOverviewInput = {
    projectId: requireId(params.projectExecutionOverviewProjectId, 'projectExecutionOverviewProjectId'),
  };
  const result = await inspectProjectExecutionOverview(ctx, input);
  return ok({
    projectId: result.projectId,
    projectName: result.projectName,
    projectStatus: result.projectStatus,
    workTaskIds: result.workTaskIds,
    taskSummary: result.taskSummary,
    upcomingCommitments: result.upcomingCommitments,
    timeLogIds: result.timeLogIds,
    totalLoggedHours: result.totalLoggedHours,
    materialUsageIds: result.materialUsageIds,
    materialUsageSummary: result.materialUsageSummary,
    actualLaborCost: result.actualLaborCost,
    actualMaterialCost: result.actualMaterialCost,
    actualCost: result.actualCost,
    budgetAmount: result.budgetAmount,
    costVariance: result.costVariance,
    changeOrderIds: result.changeOrderIds,
    changeOrderImpactSummary: result.changeOrderImpactSummary,
    calculatedAt: result.calculatedAt,
  });
};

export const reviewProjectPortfolioCmdHandoffProjectToFieldCoordinatorHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    projectProjectId?: unknown;
    clientId?: unknown;
    name?: unknown;
    address?: unknown;
    authorizedBudget?: unknown;
    plannedStartDate?: unknown;
    plannedEndDate?: unknown;
  };
  if (typeof params.authorizedBudget !== 'number' || !Number.isFinite(params.authorizedBudget)) {
    throw new AppError('VALIDATION_ERROR', 'authorizedBudget is required', 400, { field: 'authorizedBudget' });
  }
  const input: HandoffProjectToFieldCoordinatorInput = {
    projectProjectId: requireId(params.projectProjectId, 'projectProjectId'),
    clientId: requireId(params.clientId, 'clientId'),
    name: requireText(params.name, 'name'),
    address: requireText(params.address, 'address'),
    authorizedBudget: params.authorizedBudget,
    plannedStartDate: requireText(params.plannedStartDate, 'plannedStartDate'),
    plannedEndDate: requireText(params.plannedEndDate, 'plannedEndDate'),
  };
  const result = await handoffProjectToFieldCoordinator(ctx, input);
  return ok({
    projectId: result.projectId,
    clientId: result.clientId,
    name: result.name,
    address: result.address,
    status: result.status,
    authorizedBudget: result.authorizedBudget,
    plannedStartDate: result.plannedStartDate,
    plannedEndDate: result.plannedEndDate,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard', handler: reviewProjectPortfolioQryInspectProjectDashboardHandler },
  { key: 'buildFlowFsm.reviewProjectPortfolio.qryLocateProject', handler: reviewProjectPortfolioQryLocateProjectHandler },
  { key: 'buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview', handler: reviewProjectPortfolioQryInspectProjectExecutionOverviewHandler },
  { key: 'buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator', handler: reviewProjectPortfolioCmdHandoffProjectToFieldCoordinatorHandler },
];
