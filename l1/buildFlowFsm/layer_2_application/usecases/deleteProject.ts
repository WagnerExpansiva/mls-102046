/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Project } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface DeleteProjectInput {
  projectId: string;
}

export interface DeleteProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export async function deleteProject(
  ctx: RequestContext,
  input: DeleteProjectInput,
): Promise<DeleteProjectOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const project: Project | null = await projects.getById(input.projectId);

  if (!project) {
    throw new AppError(
      'NOT_FOUND',
      `Project not found: ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  await ctx.data.runInTransaction(async () => {
    // Modeling gap: IProjectRepository declares no deletion operation. The aggregate
    // cannot be removed without inventing a repository method or a deletion state.
  });

  return {
    projectId: project.projectId,
    clientId: project.clientId,
    name: project.name,
    address: project.address,
    status: project.status,
    authorizedBudget: project.authorizedBudget,
    plannedStartDate: project.plannedStartDate,
    plannedEndDate: project.plannedEndDate,
  };
}
