/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceChangeOrderCatalogue.ts" enhancement="_blank"/>
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
  listInvoiceChangeOrder,
  type ListInvoiceChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.js';
import {
  createInvoiceChangeOrder,
  type CreateInvoiceChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.js';
import {
  updateInvoiceChangeOrder,
  type UpdateInvoiceChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.js';
import {
  deleteInvoiceChangeOrder,
  type DeleteInvoiceChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.js';
import {
  listInvoice,
  type ListInvoiceInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.js';
import {
  listChangeOrder,
  type ListChangeOrderInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.js';

const ALLOWED: readonly string[] = ['internal', 'internal', 'internal', 'internal'];

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

function requireIdentifier(value: unknown, field: string): string {
  if (typeof value !== 'string' || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} must be a valid identifier`, 400, { field });
  }
  return value;
}

function requireNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

export const invoiceChangeOrderCatalogueQryListInvoiceChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder');
  if (denial) return denial;
  const input: ListInvoiceChangeOrderInput = {};
  const result = await listInvoiceChangeOrder(ctx, input);
  return ok(result.map((row) => ({
    invoiceChangeOrderId: row.invoiceChangeOrderId,
    invoiceId: row.invoiceId,
    changeOrderId: row.changeOrderId,
    billedAmount: row.billedAmount,
  })));
};

export const invoiceChangeOrderCatalogueCmdCreateInvoiceChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateInvoiceChangeOrderInput = {
    invoiceId: requireIdentifier(params.invoiceId, 'invoiceId'),
    changeOrderId: requireIdentifier(params.changeOrderId, 'changeOrderId'),
    billedAmount: requireNumber(params.billedAmount, 'billedAmount'),
  };
  const result = await createInvoiceChangeOrder(ctx, input);
  return ok(result);
};

export const invoiceChangeOrderCatalogueCmdUpdateInvoiceChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateInvoiceChangeOrderInput = {
    invoiceChangeOrderId: requireIdentifier(params.invoiceChangeOrderId, 'invoiceChangeOrderId'),
    invoiceId: requireIdentifier(params.invoiceId, 'invoiceId'),
    changeOrderId: requireIdentifier(params.changeOrderId, 'changeOrderId'),
    billedAmount: requireNumber(params.billedAmount, 'billedAmount'),
  };
  const result = await updateInvoiceChangeOrder(ctx, input);
  return ok(result);
};

export const invoiceChangeOrderCatalogueCmdDeleteInvoiceChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteInvoiceChangeOrderInput = {
    invoiceChangeOrderId: requireIdentifier(params.invoiceChangeOrderId, 'invoiceChangeOrderId'),
  };
  const result = await deleteInvoiceChangeOrder(ctx, input);
  return ok(result);
};

export const invoiceChangeOrderCatalogueQryInvoicePickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker');
  if (denial) return denial;
  const input: ListInvoiceInput = {};
  const result = await listInvoice(ctx, input);
  return ok(result.map((row) => ({
    invoiceId: row.invoiceId,
    clientId: row.clientId,
    projectId: row.projectId,
    commercialReference: row.commercialReference,
    amount: row.amount,
    status: row.status,
  })));
};

export const invoiceChangeOrderCatalogueQryChangeOrderPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker');
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

export const routes: ControllerRoute[] = [
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder',
    handler: invoiceChangeOrderCatalogueQryListInvoiceChangeOrderHandler,
  },
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder',
    handler: invoiceChangeOrderCatalogueCmdCreateInvoiceChangeOrderHandler,
  },
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder',
    handler: invoiceChangeOrderCatalogueCmdUpdateInvoiceChangeOrderHandler,
  },
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder',
    handler: invoiceChangeOrderCatalogueCmdDeleteInvoiceChangeOrderHandler,
  },
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker',
    handler: invoiceChangeOrderCatalogueQryInvoicePickerHandler,
  },
  {
    key: 'buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker',
    handler: invoiceChangeOrderCatalogueQryChangeOrderPickerHandler,
  },
];
