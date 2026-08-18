/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { Project } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import { validateProject } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface CreateProjectInput {
  clientId: string;
  name: string;
  address: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export interface CreateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export async function createProject(
  ctx: RequestContext,
  input: CreateProjectInput,
): Promise<CreateProjectOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');

  return ctx.data.runInTransaction(async () => {
    const client = await clients.getById(input.clientId);
    if (!client) {
      throw new AppError(
        'NOT_FOUND',
        `Client not found: ${input.clientId}`,
        404,
        { clientId: input.clientId },
      );
    }

    const projectsForClient = await projects.listByClientId(input.clientId);
    const hasActiveProject = projectsForClient.some((project) => project.status === 'active');
    if (hasActiveProject) {
      throw new AppError(
        'CONFLICT',
        'The client already has an active project.',
        409,
        { ruleId: 'activeProject', clientId: input.clientId },
      );
    }

    if (input.plannedEndDate < input.plannedStartDate) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The planned end date cannot be earlier than the planned start date.',
        400,
        { ruleId: 'ongoingProject' },
      );
    }

    if (!Number.isFinite(input.authorizedBudget) || !validateProject(input)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Invalid project data.',
        400,
        { ruleId: 'ongoingProject' },
      );
    }

    const project: Project = {
      projectId: ctx.idGenerator.newId(),
      clientId: input.clientId,
      name: input.name,
      address: input.address,
      status: 'planned',
      authorizedBudget: input.authorizedBudget,
      plannedStartDate: input.plannedStartDate,
      plannedEndDate: input.plannedEndDate,
    };

    await projects.save(project);

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
  });
}
