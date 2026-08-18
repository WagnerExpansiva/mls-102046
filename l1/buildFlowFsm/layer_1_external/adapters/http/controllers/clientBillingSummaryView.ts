/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingSummaryView.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { inspectClientBillingSummary, type InspectClientBillingSummaryInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.js';

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

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value);
}

export const clientBillingSummaryViewQryClientBillingSummaryViewHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;

  const params = (request.params ?? {}) as { clientId?: unknown; clientBillingSummaryClientId?: unknown };
  const clientId = params.clientBillingSummaryClientId ?? params.clientId;
  if (!isValidIdentifier(clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId must be a valid identifier', 400, { field: 'clientId' });
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
  {
    key: 'buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView',
    handler: clientBillingSummaryViewQryClientBillingSummaryViewHandler,
  },
];
