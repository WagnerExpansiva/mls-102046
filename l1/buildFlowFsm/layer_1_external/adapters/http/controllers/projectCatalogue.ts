/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCatalogue.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listProject, type ListProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';
import { createProject, type CreateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.js';
import { updateProject, type UpdateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.js';
import { deleteProject, type DeleteProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.js';
import { listClient, type ListClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.js';

const ALLOWED: readonly string[] = ['internal', 'external'];

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

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

function requireIdentifier(value: unknown, field: string): string {
  const identifier = requireString(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(identifier)) {
    throw new AppError('VALIDATION_ERROR', `${field} must be a valid identifier`, 400, { field });
  }
  return identifier;
}

function requireFiniteNumber(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

export const projectCatalogueQryListProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectCatalogue.qryListProject');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<ListProjectInput>;
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

export const projectCatalogueCmdCreateProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectCatalogue.cmdCreateProject');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<CreateProjectInput>;
  const clientId = requireIdentifier(params.clientId, 'clientId');
  const name = requireString(params.name, 'name');
  const address = requireString(params.address, 'address');
  const authorizedBudget = requireFiniteNumber(params.authorizedBudget, 'authorizedBudget');
  const plannedStartDate = requireString(params.plannedStartDate, 'plannedStartDate');
  const plannedEndDate = requireString(params.plannedEndDate, 'plannedEndDate');
  const input: CreateProjectInput = {
    clientId,
    name,
    address,
    authorizedBudget,
    plannedStartDate,
    plannedEndDate,
  };
  const result = await createProject(ctx, input);
  return ok({
    projectId: result.projectId,
    clientId: result.clientId,
    name: result.name,
    address: result.address,
    status: result.status,
    authorizedBudget: result.authorizedBudget,
    plannedStartDate: result.plannedStartDate,
    plannedEndDate: result.plannedEndDate,
  });
};

export const projectCatalogueCmdUpdateProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectCatalogue.cmdUpdateProject');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<UpdateProjectInput>;
  const projectId = requireIdentifier(params.projectId, 'projectId');
  const clientId = requireIdentifier(params.clientId, 'clientId');
  const name = requireString(params.name, 'name');
  const address = requireString(params.address, 'address');
  const authorizedBudget = requireFiniteNumber(params.authorizedBudget, 'authorizedBudget');
  const plannedStartDate = requireString(params.plannedStartDate, 'plannedStartDate');
  const plannedEndDate = requireString(params.plannedEndDate, 'plannedEndDate');
  const input: UpdateProjectInput = {
    projectId,
    clientId,
    name,
    address,
    authorizedBudget,
    plannedStartDate,
    plannedEndDate,
  };
  const result = await updateProject(ctx, input);
  return ok({
    projectId: result.projectId,
    clientId: result.clientId,
    name: result.name,
    address: result.address,
    status: result.status,
    authorizedBudget: result.authorizedBudget,
    plannedStartDate: result.plannedStartDate,
    plannedEndDate: result.plannedEndDate,
  });
};

export const projectCatalogueCmdDeleteProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectCatalogue.cmdDeleteProject');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<DeleteProjectInput>;
  const projectId = requireIdentifier(params.projectId, 'projectId');
  const input: DeleteProjectInput = { projectId };
  const result = await deleteProject(ctx, input);
  return ok({
    projectId: result.projectId,
    clientId: result.clientId,
    name: result.name,
    address: result.address,
    status: result.status,
    authorizedBudget: result.authorizedBudget,
    plannedStartDate: result.plannedStartDate,
    plannedEndDate: result.plannedEndDate,
  });
};

export const projectCatalogueQryClientPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectCatalogue.qryClientPicker');
  if (denial) return denial;
  const params = (request.params ?? {}) as Partial<ListClientInput>;
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
  { key: 'buildFlowFsm.projectCatalogue.qryListProject', handler: projectCatalogueQryListProjectHandler },
  { key: 'buildFlowFsm.projectCatalogue.cmdCreateProject', handler: projectCatalogueCmdCreateProjectHandler },
  { key: 'buildFlowFsm.projectCatalogue.cmdUpdateProject', handler: projectCatalogueCmdUpdateProjectHandler },
  { key: 'buildFlowFsm.projectCatalogue.cmdDeleteProject', handler: projectCatalogueCmdDeleteProjectHandler },
  { key: 'buildFlowFsm.projectCatalogue.qryClientPicker', handler: projectCatalogueQryClientPickerHandler },
];
