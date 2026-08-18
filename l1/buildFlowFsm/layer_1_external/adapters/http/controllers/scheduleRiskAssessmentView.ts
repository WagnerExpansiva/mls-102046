/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/scheduleRiskAssessmentView.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { inspectScheduleRiskAssessment, type InspectScheduleRiskAssessmentInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.js';

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

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const scheduleRiskAssessmentViewQryScheduleRiskAssessmentViewHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;

  const params = (request.params ?? {}) as { scheduleRiskAssessmentProjectId?: unknown };
  if (!isValidIdentifier(params.scheduleRiskAssessmentProjectId)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'scheduleRiskAssessmentProjectId must be a valid identifier',
      400,
      { field: 'scheduleRiskAssessmentProjectId' },
    );
  }

  const input: InspectScheduleRiskAssessmentInput = {
    projectId: params.scheduleRiskAssessmentProjectId,
  };
  const result = await inspectScheduleRiskAssessment(ctx, input);
  return ok({
    projectId: result.projectId,
    workTaskId: result.workTaskId,
    taskStatus: result.taskStatus,
    dueDate: result.dueDate,
    progressPercent: result.progressPercent,
    riskIndicators: result.riskIndicators,
    riskExplanation: result.riskExplanation,
    assessedAt: result.assessedAt,
  });
};

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView',
    handler: scheduleRiskAssessmentViewQryScheduleRiskAssessmentViewHandler,
  },
];
