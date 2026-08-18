/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderDecisionCatalogue.ts" enhancement="_blank"/>
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
  listChangeOrderDecision,
  type ListChangeOrderDecisionInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.js';
import {
  createChangeOrderDecision,
  type CreateChangeOrderDecisionInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.js';
import {
  updateChangeOrderDecision,
  type UpdateChangeOrderDecisionInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.js';
import {
  deleteChangeOrderDecision,
  type DeleteChangeOrderDecisionInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.js';
import {
  listChangeOrder,
  type ListChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.js';

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
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value) && !/\s/.test(value);
}

function requireIdentifier(value: unknown, field: string): string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function requireText(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const changeOrderDecisionCatalogueQryListChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListChangeOrderDecisionInput = {};
  void params;
  const result = await listChangeOrderDecision(ctx, input);
  const items = result.map((row) => ({
    changeOrderDecisionId: row.changeOrderDecisionId,
    changeOrder: row.changeOrder,
    madeByPlatformUser: row.madeByPlatformUser,
    decision: row.decision,
    decidedAt: row.decidedAt,
  }));
  return ok(items);
};

export const changeOrderDecisionCatalogueCmdCreateChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateChangeOrderDecisionInput = {
    changeOrder: requireIdentifier(params.changeOrder, 'changeOrder'),
    decision: requireText(params.decision, 'decision'),
  };
  const result = await createChangeOrderDecision(ctx, input);
  return ok({
    changeOrderDecisionId: result.changeOrderDecisionId,
    changeOrder: result.changeOrder,
    madeByPlatformUser: result.madeByPlatformUser,
    decision: result.decision,
    decidedAt: result.decidedAt,
  });
};

export const changeOrderDecisionCatalogueCmdUpdateChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateChangeOrderDecisionInput = {
    changeOrderDecisionId: requireIdentifier(params.changeOrderDecisionId, 'changeOrderDecisionId'),
    changeOrder: requireIdentifier(params.changeOrder, 'changeOrder'),
    decision: requireText(params.decision, 'decision'),
  };
  const result = await updateChangeOrderDecision(ctx, input);
  return ok({
    changeOrderDecisionId: result.changeOrderDecisionId,
    changeOrder: result.changeOrder,
    madeByPlatformUser: result.madeByPlatformUser,
    decision: result.decision,
    decidedAt: result.decidedAt,
  });
};

export const changeOrderDecisionCatalogueCmdDeleteChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteChangeOrderDecisionInput = {
    changeOrderDecisionId: requireIdentifier(params.changeOrderDecisionId, 'changeOrderDecisionId'),
  };
  const result = await deleteChangeOrderDecision(ctx, input);
  return ok({
    changeOrderDecisionId: result.changeOrderDecisionId,
    changeOrder: result.changeOrder,
    madeByPlatformUser: result.madeByPlatformUser,
    decision: result.decision,
    decidedAt: result.decidedAt,
  });
};

export const changeOrderDecisionCatalogueQryChangeOrderPickerHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ListChangeOrderInput = {};
  void params;
  const result = await listChangeOrder(ctx, input);
  const items = result.map((row) => ({
    changeOrderId: row.changeOrderId,
    clientRef: row.clientRef,
    projectRef: row.projectRef,
    description: row.description,
    scopeImpact: row.scopeImpact,
    scheduleImpact: row.scheduleImpact,
    changeAmount: row.changeAmount,
    submittedAt: row.submittedAt,
    forwardedForClientApprovalAt: row.forwardedForClientApprovalAt,
    status: row.status,
  }));
  return ok(items);
};

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision',
    handler: changeOrderDecisionCatalogueQryListChangeOrderDecisionHandler,
  },
  {
    key: 'buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision',
    handler: changeOrderDecisionCatalogueCmdCreateChangeOrderDecisionHandler,
  },
  {
    key: 'buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision',
    handler: changeOrderDecisionCatalogueCmdUpdateChangeOrderDecisionHandler,
  },
  {
    key: 'buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision',
    handler: changeOrderDecisionCatalogueCmdDeleteChangeOrderDecisionHandler,
  },
  {
    key: 'buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker',
    handler: changeOrderDecisionCatalogueQryChangeOrderPickerHandler,
  },
];
