/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffProjectToFieldCoordinator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IProjectCoordinationAssignmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';
import {
  canTransitionProject,
  validateProject,
  type Project,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface HandoffProjectToFieldCoordinatorInput {
  projectProjectId: string;
  clientId: string;
  name: string;
  address: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export interface HandoffProjectToFieldCoordinatorOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export async function handoffProjectToFieldCoordinator(
  ctx: RequestContext,
  input: HandoffProjectToFieldCoordinatorInput,
): Promise<HandoffProjectToFieldCoordinatorOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const coordinationAssignments = resolveRepository<IProjectCoordinationAssignmentRepository>(
    ctx,
    'ProjectCoordinationAssignment',
  );

  let output: HandoffProjectToFieldCoordinatorOutput | undefined;
  await ctx.data.runInTransaction(async () => {
    const project = await projects.getById(input.projectProjectId);
    if (!project) {
      throw new AppError(
        'NOT_FOUND',
        `Project not found: ${input.projectProjectId}`,
        404,
        { projectId: input.projectProjectId },
      );
    }

    if (project.status !== 'planned' || !canTransitionProject(project.status, 'active')) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The project is not eligible for handoff.',
        400,
        { ruleId: 'ongoingProject', projectId: project.projectId },
      );
    }

    const assignments = await coordinationAssignments.listByProjectId(project.projectId);
    const hasActiveCoordination = assignments.some((assignment) => assignment.status === 'active');
    if (!hasActiveCoordination) {
      throw new AppError(
        'VALIDATION_ERROR',
        'An active project coordination assignment is required for handoff.',
        400,
        { ruleId: 'activeProjectCoordination', projectId: project.projectId },
      );
    }

    const updatedProject: Project = {
      ...project,
      clientId: input.clientId,
      name: input.name,
      address: input.address,
      authorizedBudget: input.authorizedBudget,
      plannedStartDate: input.plannedStartDate,
      plannedEndDate: input.plannedEndDate,
      status: 'active',
    };

    if (!validateProject(updatedProject)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The project fields are invalid.',
        400,
        { projectId: project.projectId },
      );
    }

    await projects.save(updatedProject);
    output = {
      projectId: updatedProject.projectId,
      clientId: updatedProject.clientId,
      name: updatedProject.name,
      address: updatedProject.address,
      status: updatedProject.status,
      authorizedBudget: updatedProject.authorizedBudget,
      plannedStartDate: updatedProject.plannedStartDate,
      plannedEndDate: updatedProject.plannedEndDate,
    };
  });

  if (!output) {
    throw new AppError('VALIDATION_ERROR', 'Project handoff did not complete.', 400);
  }
  return output;
}
