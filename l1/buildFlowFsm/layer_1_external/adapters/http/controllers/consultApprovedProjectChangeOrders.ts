/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultApprovedProjectChangeOrders.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectApprovedChangeOrders, type InspectApprovedChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectApprovedChangeOrders.js';
import { inspectClientBillingSummary, type InspectClientBillingSummaryInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.js';

const ALLOWED: readonly string[] = ['external'];

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

export const consultApprovedProjectChangeOrdersQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject');
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

export const consultApprovedProjectChangeOrdersQryInspectApprovedChangeOrdersHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders');
  if (denial) return denial;
  const params = (request.params ?? {}) as { changeOrderChangeOrderId?: unknown };
  const changeOrderId = params.changeOrderChangeOrderId;
  if (!isValidIdentifier(changeOrderId)) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderChangeOrderId is required and must be a valid identifier', 400, { field: 'changeOrderChangeOrderId' });
  }
  const input: InspectApprovedChangeOrderInput = { changeOrderId };
  const result = await inspectApprovedChangeOrders(ctx, input);
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

export const consultApprovedProjectChangeOrdersQryInspectClientBillingSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientBillingSummaryClientId?: unknown };
  const clientId = params.clientBillingSummaryClientId;
  if (!isValidIdentifier(clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientBillingSummaryClientId is required and must be a valid identifier', 400, { field: 'clientBillingSummaryClientId' });
  }
  const input: InspectClientBillingSummaryInput = { clientId };
  const result = await inspectClientBillingSummary(ctx, input);
  return ok({
    clientId: result.clientId,
    projectId: result.projectId,
    approvedChangeOrderReferences: result.approvedChangeOrderReferences,
    invoiceReferences: result.invoiceReferences,
    approvedChangeOrderAmount: result.approvedChangeOrderAmount,
    billableAmount: result.billableAmount,
    invoicedAmount: result.invoicedAmount,
    clientAvailableAmount: result.clientAvailableAmount,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject', handler: consultApprovedProjectChangeOrdersQryLocateProjectHandler },
  { key: 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders', handler: consultApprovedProjectChangeOrdersQryInspectApprovedChangeOrdersHandler },
  { key: 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary', handler: consultApprovedProjectChangeOrdersQryInspectClientBillingSummaryHandler },
];
