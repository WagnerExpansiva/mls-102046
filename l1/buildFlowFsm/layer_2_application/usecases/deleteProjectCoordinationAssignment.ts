/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectCoordinationAssignmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';

export interface DeleteProjectCoordinationAssignmentInput {
  projectCoordinationAssignmentId: string;
}

export interface DeleteProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export async function deleteProjectCoordinationAssignment(
  ctx: RequestContext,
  input: DeleteProjectCoordinationAssignmentInput,
): Promise<DeleteProjectCoordinationAssignmentOutput> {
  const assignments = resolveRepository<IProjectCoordinationAssignmentRepository>(
    ctx,
    'ProjectCoordinationAssignment',
  );

  return ctx.data.runInTransaction(async () => {
    const assignment = await assignments.getById(input.projectCoordinationAssignmentId);
    if (!assignment) {
      throw new AppError(
        'NOT_FOUND',
        `ProjectCoordinationAssignment not found: ${input.projectCoordinationAssignmentId}`,
        404,
        { projectCoordinationAssignmentId: input.projectCoordinationAssignmentId },
      );
    }

    const output: DeleteProjectCoordinationAssignmentOutput = {
      projectCoordinationAssignmentId: assignment.projectCoordinationAssignmentId,
      projectId: assignment.projectId,
      fieldCoordinatorId: assignment.fieldCoordinatorId,
      status: assignment.status,
    };

    // Modeling gap: the declared repository port omits the delete operation required by this usecase.
    const repositoryWithDelete = assignments as unknown as {
      delete(id: string): Promise<void>;
    };
    if (typeof repositoryWithDelete.delete !== 'function') {
      throw new AppError(
        'CONFLICT',
        'ProjectCoordinationAssignment repository does not support deletion.',
        409,
      );
    }
    await repositoryWithDelete.delete(assignment.projectCoordinationAssignmentId);

    return output;
  });
}
