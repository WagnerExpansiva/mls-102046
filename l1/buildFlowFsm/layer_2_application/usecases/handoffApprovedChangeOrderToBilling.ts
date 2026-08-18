/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffApprovedChangeOrderToBilling.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { hasChangeOrderText } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
export interface HandoffApprovedChangeOrderToBillingInput {
changeOrderChangeOrderId: string;
description: string;
scopeImpact: string;
scheduleImpact: string;
changeAmount: number;
}
export interface HandoffApprovedChangeOrderToBillingOutput {
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
export async function handoffApprovedChangeOrderToBilling(
ctx: RequestContext,
input: HandoffApprovedChangeOrderToBillingInput,
): Promise<HandoffApprovedChangeOrderToBillingOutput> {
const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
const changeOrder = await changeOrders.getById(input.changeOrderChangeOrderId);
if (!changeOrder) {
throw new AppError(
'NOT_FOUND',
`ChangeOrder not found: ${input.changeOrderChangeOrderId}`,
404,
{ changeOrderId: input.changeOrderChangeOrderId },
);
}
// rule: approvedBillableChangeOrder
if (changeOrder.status !== 'approved' || !Number.isFinite(input.changeAmount) || input.changeAmount <= 0) {
throw new AppError(
'VALIDATION_ERROR',
'A change order must be approved and have a billable changeAmount greater than zero.',
400,
{ ruleId: 'approvedBillableChangeOrder' },
);
}
if (
!hasChangeOrderText(input.description) ||
!hasChangeOrderText(input.scopeImpact) ||
!hasChangeOrderText(input.scheduleImpact)
) {
throw new AppError(
'VALIDATION_ERROR',
'description, scopeImpact, and scheduleImpact must not be blank.',
400,
);
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
