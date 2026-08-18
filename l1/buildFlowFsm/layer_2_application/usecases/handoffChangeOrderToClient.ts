/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffChangeOrderToClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import {
canTransitionChangeOrderWithInvariants,
hasChangeOrderText,
isNonNegativeChangeAmount,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
export interface HandoffChangeOrderToClientInput {
changeOrderId: string;
description: string;
scopeImpact: string;
scheduleImpact: string;
changeAmount: number;
}
export interface HandoffChangeOrderToClientOutput {
changeOrderId: string;
clientRef: string;
projectRef: string;
description: string;
scopeImpact: string;
scheduleImpact: string;
changeAmount: number;
submittedAt: string;
forwardedForClientApprovalAt?: string;
status: string;
}
export async function handoffChangeOrderToClient(
ctx: RequestContext,
input: HandoffChangeOrderToClientInput,
): Promise<HandoffChangeOrderToClientOutput> {
const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
const changeOrder = await changeOrders.getById(input.changeOrderId);
if (!changeOrder) {
throw new AppError(
'NOT_FOUND',
`ChangeOrder not found: ${input.changeOrderId}`,
404,
{ ruleId: 'managerActionableChangeOrder' },
);
}
if (changeOrder.status !== 'submitted') {
throw new AppError(
'CONFLICT',
'The change order must be in submitted state before handoff to the client.',
409,
{ ruleId: 'managerActionableChangeOrder', status: changeOrder.status },
);
}
if (!hasChangeOrderText(input.description)) {
throw new AppError('VALIDATION_ERROR', 'description must not be blank.', 400);
}
if (!hasChangeOrderText(input.scopeImpact)) {
throw new AppError('VALIDATION_ERROR', 'scopeImpact must not be blank.', 400);
}
if (!hasChangeOrderText(input.scheduleImpact)) {
throw new AppError('VALIDATION_ERROR', 'scheduleImpact must not be blank.', 400);
}
if (!isNonNegativeChangeAmount(input.changeAmount)) {
throw new AppError('VALIDATION_ERROR', 'changeAmount must be monetary and non-negative.', 400);
}
const forwardedAt = ctx.clock.nowIso();
const updatedChangeOrder: ChangeOrder = {
...changeOrder,
description: input.description,
scopeImpact: input.scopeImpact,
scheduleImpact: input.scheduleImpact,
changeAmount: input.changeAmount,
forwardedForClientApprovalAt: forwardedAt,
status: 'pendingClientApproval',
};
if (!canTransitionChangeOrderWithInvariants(updatedChangeOrder, 'pendingClientApproval')) {
throw new AppError(
'CONFLICT',
'The change order cannot be transitioned to pending client approval.',
409,
{ ruleId: 'managerActionableChangeOrder' },
);
}
await ctx.data.runInTransaction(async () => {
await changeOrders.save(updatedChangeOrder);
});
return {
changeOrderId: updatedChangeOrder.changeOrderId,
clientRef: updatedChangeOrder.clientRef,
projectRef: updatedChangeOrder.projectRef,
description: updatedChangeOrder.description,
scopeImpact: updatedChangeOrder.scopeImpact,
scheduleImpact: updatedChangeOrder.scheduleImpact,
changeAmount: updatedChangeOrder.changeAmount,
submittedAt: updatedChangeOrder.submittedAt,
forwardedForClientApprovalAt: updatedChangeOrder.forwardedForClientApprovalAt ?? undefined,
status: updatedChangeOrder.status,
};
}
