/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/approveChangeOrder.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateChangeOrder, type LocateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateChangeOrder.js';
import { approveChangeOrderDecision, type ApproveChangeOrderDecisionInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/approveChangeOrderDecision.js';
import { handoffApprovedChangeOrderToBilling, type HandoffApprovedChangeOrderToBillingInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';

const ALLOWED: readonly string[] = ['external'];

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

function requiredString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

function requiredId(value: unknown, field: string): string {
  const id = requiredString(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(id)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return id;
}

export const approveChangeOrderQryLocateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.approveChangeOrder.qryLocateChangeOrder');
  if (denial) return denial;
  const input: LocateChangeOrderInput = {};
  const result = await locateChangeOrder(ctx, input);
  return ok(result.map((row) => ({
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
  })));
};

export const approveChangeOrderCmdApproveChangeOrderDecisionHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: ApproveChangeOrderDecisionInput = {
    changeOrderId: requiredId(params.changeOrderChangeOrderId, 'changeOrderChangeOrderId'),
    clientId: requiredId(params.clientClientId, 'clientClientId'),
    projectId: requiredId(params.projectProjectId, 'projectProjectId'),
    status: requiredString(params.status, 'status'),
  };
  const result = await approveChangeOrderDecision(ctx, input);
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

export const approveChangeOrderCmdHandoffApprovedChangeOrderToBillingHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  if (typeof params.changeAmount !== 'number' || !Number.isFinite(params.changeAmount)) {
    throw new AppError('VALIDATION_ERROR', 'changeAmount is required', 400, { field: 'changeAmount' });
  }
  const input: HandoffApprovedChangeOrderToBillingInput = {
    changeOrderChangeOrderId: requiredId(params.changeOrderChangeOrderId, 'changeOrderChangeOrderId'),
    description: requiredString(params.description, 'description'),
    scopeImpact: requiredString(params.scopeImpact, 'scopeImpact'),
    scheduleImpact: requiredString(params.scheduleImpact, 'scheduleImpact'),
    changeAmount: params.changeAmount,
  };
  const result = await handoffApprovedChangeOrderToBilling(ctx, input);
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

export const approveChangeOrderQryClientPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.approveChangeOrder.qryClientPicker');
  if (denial) return denial;
  const input: ListClientInput = {};
  const result = await listClient(ctx, input);
  return ok(result.map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  })));
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.approveChangeOrder.qryLocateChangeOrder', handler: approveChangeOrderQryLocateChangeOrderHandler },
  { key: 'buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision', handler: approveChangeOrderCmdApproveChangeOrderDecisionHandler },
  { key: 'buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling', handler: approveChangeOrderCmdHandoffApprovedChangeOrderToBillingHandler },
  { key: 'buildFlowFsm.approveChangeOrder.qryClientPicker', handler: approveChangeOrderQryClientPickerHandler },
];