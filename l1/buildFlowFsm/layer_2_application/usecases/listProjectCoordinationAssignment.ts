/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectCoordinationAssignmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';

export interface ListProjectCoordinationAssignmentInput {}

export type ListProjectCoordinationAssignmentOutput = Array<{
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}>;

export async function listProjectCoordinationAssignment(
  ctx: RequestContext,
  _input: ListProjectCoordinationAssignmentInput,
): Promise<ListProjectCoordinationAssignmentOutput> {
  const projectCoordinationAssignments = resolveRepository<IProjectCoordinationAssignmentRepository>(
    ctx,
    'ProjectCoordinationAssignment',
  );
  const assignments = await projectCoordinationAssignments.list({});
  return assignments.map((assignment) => ({
    projectCoordinationAssignmentId: assignment.projectCoordinationAssignmentId,
    projectId: assignment.projectId,
    fieldCoordinatorId: assignment.fieldCoordinatorId,
    status: assignment.status,
  }));
}
