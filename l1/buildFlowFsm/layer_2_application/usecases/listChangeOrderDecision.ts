/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';

export interface ListChangeOrderDecisionInput {}

export interface ListChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export async function listChangeOrderDecision(
  ctx: RequestContext,
  _input: ListChangeOrderDecisionInput,
): Promise<ListChangeOrderDecisionOutput[]> {
  const changeOrderDecisions = resolveRepository<IChangeOrderDecisionRepository>(
    ctx,
    'ChangeOrderDecision',
  );
  const records = await changeOrderDecisions.list({});
  return records.map((record) => ({
    changeOrderDecisionId: record.changeOrderDecisionId,
    changeOrder: record.changeOrder,
    madeByPlatformUser: record.madeByPlatformUser,
    decision: record.decision,
    decidedAt: record.decidedAt,
  }));
}
