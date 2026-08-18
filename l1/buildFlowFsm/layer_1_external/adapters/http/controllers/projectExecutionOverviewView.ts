/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectExecutionOverviewView.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { inspectProjectExecutionOverview, type InspectProjectExecutionOverviewInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((entry) => allowed.includes(entry))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isIdentifier(value: string): boolean {
  return value.trim().length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const projectExecutionOverviewViewQryProjectExecutionOverviewViewHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;

  const params = (request.params ?? {}) as { projectId?: unknown };
  if (typeof params.projectId !== 'string' || params.projectId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isIdentifier(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId must be a valid identifier', 400, { field: 'projectId' });
  }

  const input: InspectProjectExecutionOverviewInput = {
    projectId: params.projectId,
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

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView',
    handler: projectExecutionOverviewViewQryProjectExecutionOverviewViewHandler,
  },
];
