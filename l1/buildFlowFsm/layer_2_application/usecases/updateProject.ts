/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { Project } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import { isTerminalProjectStatus, validateProject } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
export interface UpdateProjectInput {
projectId: string;
clientId: string;
name: string;
address: string;
authorizedBudget: number;
plannedStartDate: string;
plannedEndDate: string;
}
export interface UpdateProjectOutput {
projectId: string;
clientId: string;
name: string;
address: string;
status: string;
authorizedBudget: number;
plannedStartDate: string;
plannedEndDate: string;
}
export async function updateProject(
ctx: RequestContext,
input: UpdateProjectInput,
): Promise<UpdateProjectOutput> {
const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
const clients = resolveRepository<IClientRepository>(ctx, 'Client');
let updatedProject: Project | null = null;
await ctx.data.runInTransaction(async () => {
const project = await projects.getById(input.projectId);
if (!project) {
throw new AppError(
'NOT_FOUND',
`Project not found: ${input.projectId}`,
404,
{ projectId: input.projectId },
);
}
// rule: activeProject
if (isTerminalProjectStatus(project.status)) {
throw new AppError(
'VALIDATION_ERROR',
'A completed or cancelled Project cannot be updated.',
400,
{ ruleId: 'activeProject', projectId: input.projectId },
);
}
const client = await clients.getById(input.clientId);
if (!client) {
throw new AppError(
'NOT_FOUND',
`Client not found: ${input.clientId}`,
404,
{ clientId: input.clientId },
);
}
if (input.authorizedBudget < 0 || input.plannedEndDate < input.plannedStartDate) {
throw new AppError(
'VALIDATION_ERROR',
'The authorized budget must be non-negative and the planned end date must not precede the planned start date.',
400,
{ ruleId: 'ongoingProject', projectId: input.projectId },
);
}
const candidate: Project = {
projectId: project.projectId,
clientId: input.clientId,
name: input.name,
address: input.address,
status: project.status,
authorizedBudget: input.authorizedBudget,
plannedStartDate: input.plannedStartDate,
plannedEndDate: input.plannedEndDate,
};
if (!validateProject(candidate)) {
throw new AppError(
'VALIDATION_ERROR',
'Project name and address must not be empty.',
400,
{ projectId: input.projectId },
);
}
await projects.save(candidate);
updatedProject = candidate;
});
if (!updatedProject) {
throw new AppError('NOT_FOUND', `Project not found: ${input.projectId}`, 404, {
projectId: input.projectId,
});
}
const projectToReturn = updatedProject as Project;
return {
projectId: projectToReturn.projectId,
clientId: projectToReturn.clientId,
name: projectToReturn.name,
address: projectToReturn.address,
status: projectToReturn.status,
authorizedBudget: projectToReturn.authorizedBudget,
plannedStartDate: projectToReturn.plannedStartDate,
plannedEndDate: projectToReturn.plannedEndDate,
};
}
