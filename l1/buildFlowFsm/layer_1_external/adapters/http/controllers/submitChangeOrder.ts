/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/submitChangeOrder.ts" enhancement="_blank"/>
import {
  ok,
  fail,
  AppError,
  type BffHandler,
  type BffResponse,
  type ControllerRoute,
  type RequestContext,
} from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateClient, type LocateClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { createChangeOrder, type CreateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.js';
import {
  handoffChangeOrderToProjectManager,
  type HandoffChangeOrderToProjectManagerInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToProjectManager.js';

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

function requireId(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length === 0 || /\s/.test(value) || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required and must be a valid identifier`, 400, { field });
  }
  return value;
}

function requireText(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

function requireNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

export const submitChangeOrderQryLocateClientHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.submitChangeOrder.qryLocateClient');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<LocateClientInput>;
  const input: LocateClientInput = {};
  void params;
  const result = await locateClient(ctx, input);
  return ok(result.map((row) => ({
    clientId: row.clientId,
    clientName: row.clientName,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
  })));
};

export const submitChangeOrderQryLocateProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.submitChangeOrder.qryLocateProject');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<LocateProjectInput>;
  const input: LocateProjectInput = {};
  void params;
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

export const submitChangeOrderCmdCreateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    clientClientId?: unknown;
    projectProjectId?: unknown;
    description?: unknown;
    scopeImpact?: unknown;
    scheduleImpact?: unknown;
    changeAmount?: unknown;
  };
  const input: CreateChangeOrderInput = {
    clientClientId: requireId(params.clientClientId, 'clientClientId'),
    projectProjectId: requireId(params.projectProjectId, 'projectProjectId'),
    description: requireText(params.description, 'description'),
    scopeImpact: requireText(params.scopeImpact, 'scopeImpact'),
    scheduleImpact: requireText(params.scheduleImpact, 'scheduleImpact'),
    changeAmount: requireNumber(params.changeAmount, 'changeAmount'),
  };
  const result = await createChangeOrder(ctx, input);
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

export const submitChangeOrderCmdHandoffChangeOrderToProjectManagerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    changeOrderChangeOrderId?: unknown;
    description?: unknown;
    scopeImpact?: unknown;
    scheduleImpact?: unknown;
    changeAmount?: unknown;
  };
  const input: HandoffChangeOrderToProjectManagerInput = {
    changeOrderId: requireId(params.changeOrderChangeOrderId, 'changeOrderChangeOrderId'),
    description: requireText(params.description, 'description'),
    scopeImpact: requireText(params.scopeImpact, 'scopeImpact'),
    scheduleImpact: requireText(params.scheduleImpact, 'scheduleImpact'),
    changeAmount: requireNumber(params.changeAmount, 'changeAmount'),
  };
  const result = await handoffChangeOrderToProjectManager(ctx, input);
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
  { key: 'buildFlowFsm.submitChangeOrder.qryLocateClient', handler: submitChangeOrderQryLocateClientHandler },
  { key: 'buildFlowFsm.submitChangeOrder.qryLocateProject', handler: submitChangeOrderQryLocateProjectHandler },
  { key: 'buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder', handler: submitChangeOrderCmdCreateChangeOrderHandler },
  { key: 'buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager', handler: submitChangeOrderCmdHandoffChangeOrderToProjectManagerHandler },
];
