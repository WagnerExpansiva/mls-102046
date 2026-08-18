/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listChangeOrder, type ListChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.js';
import { createChangeOrder, type CreateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.js';
import { updateChangeOrder, type UpdateChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.js';
import { deleteChangeOrder, type DeleteChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrder.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';
import { listProject, type ListProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';

const ALLOWED: readonly string[] = ['external', 'internal', 'internal'];

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
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requiredString(value: unknown, field: string): asserts value is string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
}

function requiredIdentifier(value: unknown, field: string): asserts value is string {
  if (!isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required and must be a valid identifier`, 400, { field });
  }
}

export const changeOrderCatalogueQryListChangeOrderHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.qryListChangeOrder');
  if (denial) return denial;
  const input: ListChangeOrderInput = {};
  const result = await listChangeOrder(ctx, input);
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

export const changeOrderCatalogueCmdCreateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<CreateChangeOrderInput>;
  requiredIdentifier(params.clientClientId, 'clientClientId');
  requiredIdentifier(params.projectProjectId, 'projectProjectId');
  requiredString(params.description, 'description');
  requiredString(params.scopeImpact, 'scopeImpact');
  requiredString(params.scheduleImpact, 'scheduleImpact');
  if (typeof params.changeAmount !== 'number' || !Number.isFinite(params.changeAmount)) {
    throw new AppError('VALIDATION_ERROR', 'changeAmount is required', 400, { field: 'changeAmount' });
  }
  const input: CreateChangeOrderInput = {
    clientClientId: params.clientClientId,
    projectProjectId: params.projectProjectId,
    description: params.description,
    scopeImpact: params.scopeImpact,
    scheduleImpact: params.scheduleImpact,
    changeAmount: params.changeAmount,
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

export const changeOrderCatalogueCmdUpdateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<UpdateChangeOrderInput>;
  requiredIdentifier(params.changeOrderId, 'changeOrderId');
  requiredIdentifier(params.clientRef, 'clientRef');
  requiredIdentifier(params.projectRef, 'projectRef');
  requiredString(params.description, 'description');
  requiredString(params.scopeImpact, 'scopeImpact');
  requiredString(params.scheduleImpact, 'scheduleImpact');
  if (typeof params.changeAmount !== 'number' || !Number.isFinite(params.changeAmount)) {
    throw new AppError('VALIDATION_ERROR', 'changeAmount is required', 400, { field: 'changeAmount' });
  }
  const input: UpdateChangeOrderInput = {
    changeOrderId: params.changeOrderId,
    clientRef: params.clientRef,
    projectRef: params.projectRef,
    description: params.description,
    scopeImpact: params.scopeImpact,
    scheduleImpact: params.scheduleImpact,
    changeAmount: params.changeAmount,
  };
  const result = await updateChangeOrder(ctx, input);
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

export const changeOrderCatalogueCmdDeleteChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<DeleteChangeOrderInput>;
  requiredIdentifier(params.changeOrderId, 'changeOrderId');
  const input: DeleteChangeOrderInput = { changeOrderId: params.changeOrderId };
  const result = await deleteChangeOrder(ctx, input);
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

export const changeOrderCatalogueQryClientPickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.qryClientPicker');
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

export const changeOrderCatalogueQryProjectPickerHandler: BffHandler = async ({ ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderCatalogue.qryProjectPicker');
  if (denial) return denial;
  const input: ListProjectInput = {};
  const result = await listProject(ctx, input);
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

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.changeOrderCatalogue.qryListChangeOrder', handler: changeOrderCatalogueQryListChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder', handler: changeOrderCatalogueCmdCreateChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder', handler: changeOrderCatalogueCmdUpdateChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder', handler: changeOrderCatalogueCmdDeleteChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderCatalogue.qryClientPicker', handler: changeOrderCatalogueQryClientPickerHandler },
  { key: 'buildFlowFsm.changeOrderCatalogue.qryProjectPicker', handler: changeOrderCatalogueQryProjectPickerHandler },
];
