/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/consultClientProjectUpdates.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectStatusReport, type InspectStatusReportInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.js';
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

export const consultClientProjectUpdatesQryLocateProjectHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultClientProjectUpdates.qryLocateProject');
  if (denial) return denial;
  const input: LocateProjectInput = {};
  const result = await locateProject(ctx, input);
  const items = (result ?? []).map((row) => ({
    projectId: row.projectId,
    clientId: row.clientId,
    name: row.name,
    address: row.address,
    status: row.status,
    authorizedBudget: row.authorizedBudget,
    plannedStartDate: row.plannedStartDate,
    plannedEndDate: row.plannedEndDate,
  }));
  return ok(items);
};

export const consultClientProjectUpdatesQryInspectStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport');
  if (denial) return denial;
  const params = (request.params ?? {}) as { statusReportId?: unknown };
  if (!params.statusReportId) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  }
  if (!isValidIdentifier(params.statusReportId)) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId must be a valid identifier', 400, { field: 'statusReportId' });
  }
  const input: InspectStatusReportInput = { statusReportId: params.statusReportId };
  const result = await inspectStatusReport(ctx, input);
  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    title: result.title,
    content: result.content,
    communicatedRisks: result.communicatedRisks,
    generatedAt: result.generatedAt,
    generatedByUserId: result.generatedByUserId,
    publishedAt: result.publishedAt,
    publishedByUserId: result.publishedByUserId,
    withdrawnAt: result.withdrawnAt,
  });
};

export const consultClientProjectUpdatesQryInspectClientBillingSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary');
  if (denial) return denial;
  const params = (request.params ?? {}) as { clientId?: unknown };
  if (!params.clientId) {
    throw new AppError('VALIDATION_ERROR', 'clientId is required', 400, { field: 'clientId' });
  }
  if (!isValidIdentifier(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId must be a valid identifier', 400, { field: 'clientId' });
  }
  const input: InspectClientBillingSummaryInput = { clientId: params.clientId };
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
  { key: 'buildFlowFsm.consultClientProjectUpdates.qryLocateProject', handler: consultClientProjectUpdatesQryLocateProjectHandler },
  { key: 'buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport', handler: consultClientProjectUpdatesQryInspectStatusReportHandler },
  { key: 'buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary', handler: consultClientProjectUpdatesQryInspectClientBillingSummaryHandler },
];
