/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDashboardView.ts" enhancement="_blank"/>
import {
  ok,
  fail,
  AppError,
  type BffHandler,
  type BffResponse,
  type ControllerRoute,
  type RequestContext,
} from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  inspectProjectDashboard,
  type InspectProjectDashboardInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(
  ctx: RequestContext,
  allowed: readonly string[],
  route: string,
): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((entry) => allowed.includes(entry))) return null;
  return fail(
    new AppError(
      'FORBIDDEN_ACTOR',
      'actor scope not permitted for ' + route,
      403,
      { route },
    ),
  );
}

export const projectDashboardViewQryProjectDashboardViewHandler: BffHandler = async ({ ctx }) => {
  const route = 'buildFlowFsm.projectDashboardView.qryProjectDashboardView';
  const denial = enforceActors(ctx, ALLOWED, route);
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

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.projectDashboardView.qryProjectDashboardView',
    handler: projectDashboardViewQryProjectDashboardViewHandler,
  },
];
