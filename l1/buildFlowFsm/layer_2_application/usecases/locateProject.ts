/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';

export interface LocateProjectInput {}

export interface LocateProjectProjection {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export type LocateProjectOutput = LocateProjectProjection[];

export async function locateProject(
  ctx: RequestContext,
  _input: LocateProjectInput,
): Promise<LocateProjectOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const records = await projects.list({});

  return records.map((project) => ({
    projectId: project.projectId,
    clientId: project.clientId,
    name: project.name,
    address: project.address,
    status: project.status,
    authorizedBudget: project.authorizedBudget,
    plannedStartDate: project.plannedStartDate,
    plannedEndDate: project.plannedEndDate,
  }));
}
