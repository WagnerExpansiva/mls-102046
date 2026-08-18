/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectTimelineView.ts" enhancement="_blank"/>
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
  inspectProjectTimeline,
  type InspectProjectTimelineInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.js';

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
  if (scope.some((value) => allowed.includes(value))) return null;
  return fail(
    new AppError(
      'FORBIDDEN_ACTOR',
      'actor scope not permitted for ' + route,
      403,
      { route },
    ),
  );
}

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && /^[A-Za-z0-9_-]+$/.test(value);
}

export const projectTimelineViewQryProjectTimelineViewHandler: BffHandler = async ({
  request,
  ctx,
}) => {
  const route = 'buildFlowFsm.projectTimelineView.qryProjectTimelineView';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;

  const params = (request.params ?? {}) as { projectTimelineProjectId?: unknown };
  const projectId = params.projectTimelineProjectId;
  if (!isValidIdentifier(projectId)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'projectTimelineProjectId is required and must be a valid identifier',
      400,
      { field: 'projectTimelineProjectId' },
    );
  }

  const input: InspectProjectTimelineInput = { projectId };
  const result = await inspectProjectTimeline(ctx, input);
  return ok({
    projectId: result.projectId,
    workTasks: result.workTasks,
    scheduleEntries: result.scheduleEntries,
  });
};

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.projectTimelineView.qryProjectTimelineView',
    handler: projectTimelineViewQryProjectTimelineViewHandler,
  },
];
