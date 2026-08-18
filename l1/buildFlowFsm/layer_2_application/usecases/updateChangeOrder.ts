/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.ts" enhancement="blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import {
validateChangeOrder,
canTransitionChangeOrderWithInvariants,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
export interface UpdateChangeOrderInput {
changeOrderId: string;
clientRef: string;
projectRef: string;
description: string;
scopeImpact: string;
scheduleImpact: string;
changeAmount: number;
}
export interface UpdateChangeOrderOutput {
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
export async function updateChangeOrder(
ctx: RequestContext,
input: UpdateChangeOrderInput,
): Promise<UpdateChangeOrderOutput> {
const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
const clients = resolveRepository<IClientRepository>(ctx, 'Client');
const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
let result: ChangeOrder | null = null;
await ctx.data.runInTransaction(async () => {
const existing = await changeOrders.getById(input.changeOrderId);
if (!existing) {
throw new AppError(
'NOT_FOUND',
`ChangeOrder not found: ${input.changeOrderId}`,
404,
{ changeOrderId: input.changeOrderId },
);
}
if (input.changeOrderId.trim().length === 0 || input.clientRef.trim().length === 0 || input.projectRef.trim().length === 0) {
throw new AppError(
'VALIDATION_ERROR',
'A change order must reference a client and a project.',
400,
{ ruleId: 'changeOrderRequiresClientAndProject' },
);
}
const client = await clients.getById(input.clientRef);
const project = await projects.getById(input.projectRef);
if (!client || !project || project.clientId !== input.clientRef) {
throw new AppError(
'VALIDATION_ERROR',
'The referenced client and project must exist and belong together.',
400,
{ ruleId: 'changeOrderRequiresClientAndProject' },
);
}
// rule: managerActionableChangeOrder
// rule: clientApprovableChangeOrder
// rule: approvedBillableChangeOrder
// rule: clientVisibleApprovedChangeOrder
// This operation has no requested status field; it preserves the persisted workflow state.
const updated: ChangeOrder = {
...existing,
clientRef: input.clientRef,
projectRef: input.projectRef,
description: input.description,
scopeImpact: input.scopeImpact,
scheduleImpact: input.scheduleImpact,
changeAmount: input.changeAmount,
submittedAt: existing.submittedAt,
forwardedForClientApprovalAt: existing.forwardedForClientApprovalAt,
status: existing.status,
};
const invariantErrors = validateChangeOrder(
updated,
(projectRef, clientRef) => projectRef === project.projectId && clientRef === client.clientId,
);
if (invariantErrors.length > 0) {
throw new AppError(
'VALIDATION_ERROR',
invariantErrors.join('; '),
400,
{ ruleId: 'changeOrderRequiresClientAndProject', errors: invariantErrors },
);
}
if (
(updated.status === 'pendingClientApproval' || updated.status === 'approved' || updated.status === 'declined') &&
!canTransitionChangeOrderWithInvariants(
{ ...updated, status: 'submitted', forwardedForClientApprovalAt: updated.forwardedForClientApprovalAt },
'pendingClientApproval',
) &&
updated.forwardedForClientApprovalAt === null
) {
throw new AppError(
'VALIDATION_ERROR',
'A client-facing change order must have been forwarded for approval.',
400,
{ ruleId: 'clientApprovableChangeOrder' },
);
}
await changeOrders.save(updated);
result = updated;
});
const finalResult = result as ChangeOrder | null;
if (!finalResult) {
throw new AppError('CONFLICT', 'ChangeOrder update did not produce a result.', 409);
}
return {
changeOrderId: finalResult.changeOrderId,
clientRef: finalResult.clientRef,
projectRef: finalResult.projectRef,
description: finalResult.description,
scopeImpact: finalResult.scopeImpact,
scheduleImpact: finalResult.scheduleImpact,
changeAmount: finalResult.changeAmount,
submittedAt: finalResult.submittedAt,
forwardedForClientApprovalAt: finalResult.forwardedForClientApprovalAt,
status: finalResult.status,
};
}
