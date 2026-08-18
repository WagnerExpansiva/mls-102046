/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/forwardChangeOrderForClientApproval.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateChangeOrder, type LocateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.js';
import { handoffChangeOrderToClient, type HandoffChangeOrderToClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToClient.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((item) => allowed.includes(item))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const forwardChangeOrderForClientApprovalQryLocateChangeOrderHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder',
  );
  if (denial) return denial;

  const input: LocateChangeOrderInput = {};
  const result = await locateChangeOrder(ctx, input);
  const items = (result ?? []).map((row) => ({
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

export const forwardChangeOrderForClientApprovalCmdHandoffChangeOrderToClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient',
  );
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    changeOrderChangeOrderId?: unknown;
    description?: unknown;
    scopeImpact?: unknown;
    scheduleImpact?: unknown;
    changeAmount?: unknown;
  };

  if (!isIdentifier(params.changeOrderChangeOrderId)) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderChangeOrderId is required and must be a valid identifier', 400, { field: 'changeOrderChangeOrderId' });
  }
  if (typeof params.description !== 'string' || params.description.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (typeof params.scopeImpact !== 'string' || params.scopeImpact.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'scopeImpact is required', 400, { field: 'scopeImpact' });
  }
  if (typeof params.scheduleImpact !== 'string' || params.scheduleImpact.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'scheduleImpact is required', 400, { field: 'scheduleImpact' });
  }
  if (typeof params.changeAmount !== 'number' || !Number.isFinite(params.changeAmount)) {
    throw new AppError('VALIDATION_ERROR', 'changeAmount is required', 400, { field: 'changeAmount' });
  }

  const input: HandoffChangeOrderToClientInput = {
    changeOrderId: params.changeOrderChangeOrderId,
    description: params.description,
    scopeImpact: params.scopeImpact,
    scheduleImpact: params.scheduleImpact,
    changeAmount: params.changeAmount,
  };
  const result = await handoffChangeOrderToClient(ctx, input);
  return ok({
    changeOrderId: result.changeOrderId,
    clientRef: result.clientRef,
    projectRef: result.projectRef,
    description: result.description,
    scopeImpact: result.scopeImpact,
    scheduleImpact: result.scheduleImpact,
    changeAmount: result.changeAmount,
    submittedAt: result.submittedAt,
    forwardedForClientApprovalAt: result.forwardedForClientApprovalAt,
    status: result.status,
  });
};

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder',
    handler: forwardChangeOrderForClientApprovalQryLocateChangeOrderHandler,
  },
  {
    key: 'buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient',
    handler: forwardChangeOrderForClientApprovalCmdHandoffChangeOrderToClientHandler,
  },
];
