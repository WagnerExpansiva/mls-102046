/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface DeleteChangeOrderInput {
  changeOrderId: string;
}

export interface DeleteChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt?: string | null;
  status: string;
}

interface DeletableChangeOrderRepository extends IChangeOrderRepository {
  delete(aggregate: ChangeOrder): Promise<void>;
}

export async function deleteChangeOrder(
  ctx: RequestContext,
  input: DeleteChangeOrderInput,
): Promise<DeleteChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const changeOrder = await changeOrders.getById(input.changeOrderId);
  if (!changeOrder) {
    throw new AppError(
      'NOT_FOUND',
      `ChangeOrder not found: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  const deletedProjection: DeleteChangeOrderOutput = {
    changeOrderId: changeOrder.changeOrderId,
    clientRef: changeOrder.clientRef,
    projectRef: changeOrder.projectRef,
    description: changeOrder.description,
    scopeImpact: changeOrder.scopeImpact,
    scheduleImpact: changeOrder.scheduleImpact,
    changeAmount: changeOrder.changeAmount,
    submittedAt: changeOrder.submittedAt,
    forwardedForClientApprovalAt: changeOrder.forwardedForClientApprovalAt,
    status: changeOrder.status,
  };

  await ctx.data.runInTransaction(async () => {
    const deletableChangeOrders = changeOrders as unknown as DeletableChangeOrderRepository;
    await deletableChangeOrders.delete(changeOrder);
  });

  return deletedProjection;
}
