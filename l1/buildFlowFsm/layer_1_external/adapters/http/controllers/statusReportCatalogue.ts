/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportCatalogue.ts" enhancement="_blank"/>
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
  listStatusReport,
  type ListStatusReportInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.js';
import {
  createStatusReport,
  type CreateStatusReportInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.js';
import {
  updateStatusReport,
  type UpdateStatusReportInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.js';
import {
  deleteStatusReport,
  type DeleteStatusReportInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.js';
import {
  listProject,
  type ListProjectInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';

const ALLOWED: readonly string[] = ['external', 'internal'];

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
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requiredString(params: Record<string, unknown>, field: string): string {
  const value = params[field];
  if (typeof value !== 'string' || value.length === 0) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  if (field.endsWith('Id') && !isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

function optionalString(params: Record<string, unknown>, field: string): string | undefined {
  const value = params[field];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string') {
    throw new AppError('VALIDATION_ERROR', field + ' must be a string', 400, { field });
  }
  if (field.endsWith('Id') && !isIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' must be a valid identifier', 400, { field });
  }
  return value;
}

export const statusReportCatalogueQryListStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportCatalogue.qryListStatusReport');
  if (denial) return denial;
  const input: ListStatusReportInput = {};
  const result = await listStatusReport(ctx, input);
  return ok((result ?? []).map((row) => ({
    statusReportId: row.statusReportId,
    projectId: row.projectId,
    status: row.status,
    title: row.title,
    content: row.content,
    communicatedRisks: row.communicatedRisks,
    generatedAt: row.generatedAt,
    generatedByUserId: row.generatedByUserId,
    publishedAt: row.publishedAt,
    publishedByUserId: row.publishedByUserId,
    withdrawnAt: row.withdrawnAt,
  })));
};

export const statusReportCatalogueCmdCreateStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: CreateStatusReportInput = {
    projectProjectId: requiredString(params, 'projectProjectId'),
    projectExecutionOverviewProjectId: requiredString(params, 'projectExecutionOverviewProjectId'),
    title: requiredString(params, 'title'),
    content: requiredString(params, 'content'),
    communicatedRisks: optionalString(params, 'communicatedRisks'),
    generatedByUserId: requiredString(params, 'generatedByUserId'),
    publishedByUserId: optionalString(params, 'publishedByUserId'),
  };
  const result = await createStatusReport(ctx, input);
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

export const statusReportCatalogueCmdUpdateStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: UpdateStatusReportInput = {
    statusReportId: requiredString(params, 'statusReportId'),
    projectId: requiredString(params, 'projectId'),
    title: requiredString(params, 'title'),
    content: requiredString(params, 'content'),
    communicatedRisks: optionalString(params, 'communicatedRisks'),
    generatedByUserId: requiredString(params, 'generatedByUserId'),
    publishedByUserId: optionalString(params, 'publishedByUserId'),
  };
  const result = await updateStatusReport(ctx, input);
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

export const statusReportCatalogueCmdDeleteStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: DeleteStatusReportInput = {
    statusReportId: requiredString(params, 'statusReportId'),
  };
  const result = await deleteStatusReport(ctx, input);
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

export const statusReportCatalogueQryProjectPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportCatalogue.qryProjectPicker');
  if (denial) return denial;
  const input: ListProjectInput = {};
  const result = await listProject(ctx, input);
  return ok((result ?? []).map((row) => ({
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
  { key: 'buildFlowFsm.statusReportCatalogue.qryListStatusReport', handler: statusReportCatalogueQryListStatusReportHandler },
  { key: 'buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport', handler: statusReportCatalogueCmdCreateStatusReportHandler },
  { key: 'buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport', handler: statusReportCatalogueCmdUpdateStatusReportHandler },
  { key: 'buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport', handler: statusReportCatalogueCmdDeleteStatusReportHandler },
  { key: 'buildFlowFsm.statusReportCatalogue.qryProjectPicker', handler: statusReportCatalogueQryProjectPickerHandler },
];
