/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type { ChangeOrderDecision } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';

export interface DeleteChangeOrderDecisionInput {
  changeOrderDecisionId: string;
}

export interface DeleteChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

interface ChangeOrderDecisionDeletionRepository extends IChangeOrderDecisionRepository {
  delete(id: string): Promise<void>;
}

function toOutput(decision: ChangeOrderDecision): DeleteChangeOrderDecisionOutput {
  return {
    changeOrderDecisionId: decision.changeOrderDecisionId,
    changeOrder: decision.changeOrder,
    madeByPlatformUser: decision.madeByPlatformUser,
    decision: decision.decision,
    decidedAt: decision.decidedAt,
  };
}

export async function deleteChangeOrderDecision(
  ctx: RequestContext,
  input: DeleteChangeOrderDecisionInput,
): Promise<DeleteChangeOrderDecisionOutput> {
  const decisions = resolveRepository<IChangeOrderDecisionRepository>(ctx, 'ChangeOrderDecision');
  const decision = await decisions.getById(input.changeOrderDecisionId);

  if (!decision) {
    throw new AppError(
      'NOT_FOUND',
      `ChangeOrderDecision not found: ${input.changeOrderDecisionId}`,
      404,
      { changeOrderDecisionId: input.changeOrderDecisionId },
    );
  }

  const deletedDecision = toOutput(decision);

  await ctx.data.runInTransaction(async () => {
    // The port declaration exposes persistence for the aggregate but omits its delete operation.
    const deletionRepository = decisions as unknown as ChangeOrderDecisionDeletionRepository;
    await deletionRepository.delete(input.changeOrderDecisionId);
  });

  return deletedDecision;
}
