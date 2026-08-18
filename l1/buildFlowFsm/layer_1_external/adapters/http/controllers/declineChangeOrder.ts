/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/declineChangeOrder.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateChangeOrder, type LocateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.js';
import { declineChangeOrderDecision, type DeclineChangeOrderDecisionInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/declineChangeOrderDecision.js';
import { handoffDeclinedChangeOrderToFieldCoordinator, type HandoffDeclinedChangeOrderToFieldCoordinatorInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffDeclinedChangeOrderToFieldCoordinator.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';

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

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value);
}

function requireIdentifier(value: unknown, field: string): string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const declineChangeOrderQryLocateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.declineChangeOrder.qryLocateChangeOrder');
  if (denial) return denial;
  const input: LocateChangeOrderInput = {};
  const result = await locateChangeOrder(ctx, input);
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

export const declineChangeOrderCmdDeclineChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<{
    changeOrderChangeOrderId: unknown;
    clientClientId: unknown;
    projectProjectId: unknown;
    status: unknown;
  }>;
  const input: DeclineChangeOrderDecisionInput = {
    changeOrderId: requireIdentifier(params.changeOrderChangeOrderId, 'changeOrderId'),
    clientId: requireIdentifier(params.clientClientId, 'clientId'),
    projectId: requireIdentifier(params.projectProjectId, 'projectId'),
    status: requireString(params.status, 'status'),
  };
  const result = await declineChangeOrderDecision(ctx, input);
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

export const declineChangeOrderCmdHandoffDeclinedChangeOrderToFieldCoordinatorHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<{
    changeOrderChangeOrderId: unknown;
    description: unknown;
    scopeImpact: unknown;
    scheduleImpact: unknown;
    changeAmount: unknown;
  }>;
  if (typeof params.changeAmount !== 'number' || !Number.isFinite(params.changeAmount)) {
    throw new AppError('VALIDATION_ERROR', 'changeAmount is required', 400, { field: 'changeAmount' });
  }
  const input: HandoffDeclinedChangeOrderToFieldCoordinatorInput = {
    changeOrderId: requireIdentifier(params.changeOrderChangeOrderId, 'changeOrderId'),
    description: requireString(params.description, 'description'),
    scopeImpact: requireString(params.scopeImpact, 'scopeImpact'),
    scheduleImpact: requireString(params.scheduleImpact, 'scheduleImpact'),
    changeAmount: params.changeAmount,
  };
  const result = await handoffDeclinedChangeOrderToFieldCoordinator(ctx, input);
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

export const declineChangeOrderQryClientPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.declineChangeOrder.qryClientPicker');
  if (denial) return denial;
  const input: ListClientInput = {};
  const result = await listClient(ctx, input);
  const items = result.map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  }));
  return ok(items);
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.declineChangeOrder.qryLocateChangeOrder', handler: declineChangeOrderQryLocateChangeOrderHandler },
  { key: 'buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision', handler: declineChangeOrderCmdDeclineChangeOrderDecisionHandler },
  { key: 'buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator', handler: declineChangeOrderCmdHandoffDeclinedChangeOrderToFieldCoordinatorHandler },
  { key: 'buildFlowFsm.declineChangeOrder.qryClientPicker', handler: declineChangeOrderQryClientPickerHandler },
];
