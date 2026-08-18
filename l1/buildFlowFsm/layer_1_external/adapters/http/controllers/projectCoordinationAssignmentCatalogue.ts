/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCoordinationAssignmentCatalogue.ts" enhancement="_blank"/>
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
  listProjectCoordinationAssignment,
  type ListProjectCoordinationAssignmentInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.js';
import {
  createProjectCoordinationAssignment,
  type CreateProjectCoordinationAssignmentInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.js';
import {
  updateProjectCoordinationAssignment,
  type UpdateProjectCoordinationAssignmentInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.js';
import {
  deleteProjectCoordinationAssignment,
  type DeleteProjectCoordinationAssignmentInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.js';
import {
  listProject,
  type ListProjectInput,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';

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
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidIdentifier(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

function requireIdentifier(value: unknown, field: string): string {
  if (!isValidIdentifier(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required and must be a valid identifier', 400, { field });
  }
  return value;
}

export const projectCoordinationAssignmentCatalogueQryListProjectCoordinationAssignmentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment',
  );
  if (denial) return denial;
  const input: ListProjectCoordinationAssignmentInput = {};
  const result = await listProjectCoordinationAssignment(ctx, input);
  return ok(result.map((row) => ({
    projectCoordinationAssignmentId: row.projectCoordinationAssignmentId,
    projectId: row.projectId,
    fieldCoordinatorId: row.fieldCoordinatorId,
    status: row.status,
  })));
};

export const projectCoordinationAssignmentCatalogueCmdCreateProjectCoordinationAssignmentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment',
  );
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: unknown };
  const input: CreateProjectCoordinationAssignmentInput = {
    projectId: requireIdentifier(params.projectId, 'projectId'),
  };
  const result = await createProjectCoordinationAssignment(ctx, input);
  return ok(result);
};

export const projectCoordinationAssignmentCatalogueCmdUpdateProjectCoordinationAssignmentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment',
  );
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectCoordinationAssignmentId?: unknown; projectId?: unknown };
  const input: UpdateProjectCoordinationAssignmentInput = {
    projectCoordinationAssignmentId: requireIdentifier(
      params.projectCoordinationAssignmentId,
      'projectCoordinationAssignmentId',
    ),
    projectId: requireIdentifier(params.projectId, 'projectId'),
  };
  const result = await updateProjectCoordinationAssignment(ctx, input);
  return ok(result);
};

export const projectCoordinationAssignmentCatalogueCmdDeleteProjectCoordinationAssignmentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment',
  );
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectCoordinationAssignmentId?: unknown };
  const input: DeleteProjectCoordinationAssignmentInput = {
    projectCoordinationAssignmentId: requireIdentifier(
      params.projectCoordinationAssignmentId,
      'projectCoordinationAssignmentId',
    ),
  };
  const result = await deleteProjectCoordinationAssignment(ctx, input);
  return ok(result);
};

export const projectCoordinationAssignmentCatalogueQryProjectPickerHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(
    ctx,
    ALLOWED,
    'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker',
  );
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
  {
    key: 'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment',
    handler: projectCoordinationAssignmentCatalogueQryListProjectCoordinationAssignmentHandler,
  },
  {
    key: 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment',
    handler: projectCoordinationAssignmentCatalogueCmdCreateProjectCoordinationAssignmentHandler,
  },
  {
    key: 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment',
    handler: projectCoordinationAssignmentCatalogueCmdUpdateProjectCoordinationAssignmentHandler,
  },
  {
    key: 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment',
    handler: projectCoordinationAssignmentCatalogueCmdDeleteProjectCoordinationAssignmentHandler,
  },
  {
    key: 'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker',
    handler: projectCoordinationAssignmentCatalogueQryProjectPickerHandler,
  },
];
