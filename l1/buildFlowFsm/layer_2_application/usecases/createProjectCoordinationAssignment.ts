/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectCoordinationAssignmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';
import type { IFieldCoordinatorRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ProjectCoordinationAssignment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.js';
import { projectCoordinationAssignmentStartsActive } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.js';

export interface CreateProjectCoordinationAssignmentInput {
  projectId: string;
}

export interface CreateProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export async function createProjectCoordinationAssignment(
  ctx: RequestContext,
  input: CreateProjectCoordinationAssignmentInput,
): Promise<CreateProjectCoordinationAssignmentOutput> {
  const assignments = resolveRepository<IProjectCoordinationAssignmentRepository>(
    ctx,
    'ProjectCoordinationAssignment',
  );
  const fieldCoordinators = resolveRepository<IFieldCoordinatorRepository>(ctx, 'FieldCoordinator');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  if (!input.projectId || input.projectId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'projectId é obrigatório.', 400);
  }

  const actorId = ctx.sessionContext.actorSession.actorId;
  if (!actorId) {
    throw new AppError('VALIDATION_ERROR', 'O usuário da sessão é obrigatório.', 400);
  }

  const result = await ctx.data.runInTransaction(async () => {
    const project = await projects.getById(input.projectId);
    if (!project) {
      throw new AppError('NOT_FOUND', `Projeto não encontrado: ${input.projectId}`, 404, {
        projectId: input.projectId,
      });
    }

    // rule: activeProjectCoordination — somente obras ativas podem receber uma atribuição.
    if (project.status !== 'active') {
      throw new AppError(
        'VALIDATION_ERROR',
        'A obra precisa estar ativa para receber uma atribuição de coordenação de campo.',
        400,
        { ruleId: 'activeProjectCoordination', projectId: input.projectId },
      );
    }

    const coordinator = await fieldCoordinators.getByPlatformUserId(actorId);
    if (!coordinator) {
      throw new AppError(
        'NOT_FOUND',
        `Coordenador de campo não encontrado para o usuário da sessão: ${actorId}`,
        404,
        { platformUserRef: actorId },
      );
    }

    const existingAssignments = await assignments.listByProjectId(input.projectId);
    // rule: activeProjectCoordination — uma obra não pode ter outra atribuição ativa.
    if (existingAssignments.some((assignment) => assignment.status === 'active')) {
      throw new AppError(
        'VALIDATION_ERROR',
        'A obra já possui uma atribuição de coordenação de campo ativa.',
        400,
        { ruleId: 'activeProjectCoordination', projectId: input.projectId },
      );
    }

    const nowStatus = projectCoordinationAssignmentStartsActive() ? 'active' : 'closed';
    const assignment: ProjectCoordinationAssignment = {
      projectCoordinationAssignmentId: ctx.idGenerator.newId(),
      projectId: input.projectId,
      fieldCoordinatorId: coordinator.fieldCoordinatorId,
      status: nowStatus,
    };
    await assignments.save(assignment);

    return {
      projectCoordinationAssignmentId: assignment.projectCoordinationAssignmentId,
      projectId: assignment.projectId,
      fieldCoordinatorId: assignment.fieldCoordinatorId,
      status: assignment.status,
    };
  });

  return result;
}
