/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectCoordinationAssignmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';
import type { IFieldCoordinatorRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import {
canTransitionProjectCoordinationAssignment,
type ProjectCoordinationAssignment,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.js';
export interface UpdateProjectCoordinationAssignmentInput {
projectCoordinationAssignmentId: string;
projectId: string;
}
export interface UpdateProjectCoordinationAssignmentOutput {
projectCoordinationAssignmentId: string;
projectId: string;
fieldCoordinatorId: string;
status: string;
}
export async function updateProjectCoordinationAssignment(
ctx: RequestContext,
input: UpdateProjectCoordinationAssignmentInput,
): Promise<UpdateProjectCoordinationAssignmentOutput> {
const assignments = resolveRepository<IProjectCoordinationAssignmentRepository>(
ctx,
'ProjectCoordinationAssignment',
);
const fieldCoordinators = resolveRepository<IFieldCoordinatorRepository>(ctx, 'FieldCoordinator');
const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
const actorId = ctx.sessionContext.actorSession.actorId;
if (!actorId) {
throw new AppError(
'VALIDATION_ERROR',
'O ator da sessão é necessário para resolver o coordenador de campo.',
400,
);
}
let result: ProjectCoordinationAssignment | null = null as ProjectCoordinationAssignment | null;
await ctx.data.runInTransaction(async () => {
const assignment = await assignments.getById(input.projectCoordinationAssignmentId);
if (!assignment) {
throw new AppError(
'NOT_FOUND',
`A atribuição de coordenação não foi encontrada: ${input.projectCoordinationAssignmentId}`,
404,
{ projectCoordinationAssignmentId: input.projectCoordinationAssignmentId },
);
}
if (assignment.projectId !== input.projectId) {
throw new AppError(
'VALIDATION_ERROR',
'A atribuição de coordenação não pertence à obra informada.',
400,
{ projectCoordinationAssignmentId: input.projectCoordinationAssignmentId, projectId: input.projectId },
);
}
const project = await projects.getById(input.projectId);
if (!project) {
throw new AppError(
'NOT_FOUND',
`A obra não foi encontrada: ${input.projectId}`,
404,
{ projectId: input.projectId },
);
}
if (project.status !== 'active') {
throw new AppError(
'VALIDATION_ERROR',
'A atribuição só pode ser atualizada enquanto a obra estiver ativa.',
400,
{ ruleId: 'activeProjectCoordination', projectId: input.projectId, status: project.status },
);
}
const fieldCoordinator = await fieldCoordinators.getByPlatformUserId(actorId);
if (!fieldCoordinator) {
throw new AppError(
'NOT_FOUND',
`Nenhum coordenador de campo foi encontrado para o ator da sessão: ${actorId}`,
404,
{ platformUserRef: actorId },
);
}
if (
assignment.status !== 'active' &&
!canTransitionProjectCoordinationAssignment(assignment.status, 'active')
) {
throw new AppError(
'CONFLICT',
'A atribuição de coordenação não pode retornar ao estado ativo a partir do estado atual.',
409,
{ projectCoordinationAssignmentId: assignment.projectCoordinationAssignmentId, status: assignment.status },
);
}
const updated: ProjectCoordinationAssignment = {
...assignment,
fieldCoordinatorId: fieldCoordinator.fieldCoordinatorId,
status: 'active',
};
await assignments.save(updated);
result = updated;
});
if (!result) {
throw new AppError('CONFLICT', 'A atribuição de coordenação não foi atualizada.', 409);
}
return {
projectCoordinationAssignmentId: result.projectCoordinationAssignmentId,
projectId: result.projectId,
fieldCoordinatorId: result.fieldCoordinatorId,
status: result.status,
};
}
