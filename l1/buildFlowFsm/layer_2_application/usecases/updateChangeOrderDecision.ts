/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IPlatformUserRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.js';
import type {
ChangeOrderDecision,
ChangeOrderDecisionValue,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';
import {
hasValidChangeOrderDecisionReferences,
isChangeOrderDecisionValue,
isValidChangeOrderDecisionDate,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';
import { validatePlatformUser } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.js';
export interface UpdateChangeOrderDecisionInput {
changeOrderDecisionId: string;
changeOrder: string;
decision: string;
}
export interface UpdateChangeOrderDecisionOutput {
changeOrderDecisionId: string;
changeOrder: string;
madeByPlatformUser: string;
decision: string;
decidedAt: string;
}
export async function updateChangeOrderDecision(
ctx: RequestContext,
input: UpdateChangeOrderDecisionInput,
): Promise<UpdateChangeOrderDecisionOutput> {
const decisions = resolveRepository<IChangeOrderDecisionRepository>(ctx, 'ChangeOrderDecision');
const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
const platformUsers = resolveRepository<IPlatformUserRepository>(ctx, 'PlatformUser');
if (input.changeOrderDecisionId.trim().length === 0) {
throw new AppError('VALIDATION_ERROR', 'changeOrderDecisionId must be present.', 400);
}
if (input.changeOrder.trim().length === 0) {
throw new AppError('VALIDATION_ERROR', 'changeOrder must be present.', 400);
}
if (!isChangeOrderDecisionValue(input.decision)) {
throw new AppError(
'VALIDATION_ERROR',
'decision must be approved or declined.',
400,
{ allowedValues: ['approved', 'declined'] },
);
}
const actorId = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
if (!actorId || actorId.trim().length === 0) {
throw new AppError('VALIDATION_ERROR', 'Authenticated platform user is required.', 400);
}
const actor = await platformUsers.getById(actorId);
if (!actor || !validatePlatformUser(actor)) {
throw new AppError('NOT_FOUND', `PlatformUser not found: ${actorId}`, 404, { platformUserId: actorId });
}
const actorPlatformUserId = actor.platformUserId;
const existingDecision = await decisions.getById(input.changeOrderDecisionId);
if (!existingDecision) {
throw new AppError(
'NOT_FOUND',
`ChangeOrderDecision not found: ${input.changeOrderDecisionId}`,
404,
{ changeOrderDecisionId: input.changeOrderDecisionId },
);
}
if (existingDecision.changeOrder !== input.changeOrder) {
throw new AppError(
'VALIDATION_ERROR',
'The submitted changeOrder does not match the decision association.',
400,
{ changeOrderDecisionId: input.changeOrderDecisionId },
);
}
const changeOrder = await changeOrders.getById(input.changeOrder);
if (!changeOrder) {
throw new AppError('NOT_FOUND', `ChangeOrder not found: ${input.changeOrder}`, 404, {
changeOrderId: input.changeOrder,
});
}
const decision: ChangeOrderDecisionValue = input.decision;
if (decision === 'approved') {
// rule: onlyClientApprovesOwnChangeOrder
throw new AppError(
'CONFLICT',
'Cannot establish that the authenticated platform user is the client authorized to approve this ChangeOrder; the required client identity or role mapping is not modeled.',
409,
{
ruleId: 'onlyClientApprovesOwnChangeOrder',
changeOrderId: changeOrder.changeOrderId,
clientRef: changeOrder.clientRef,
modelingGap: 'PlatformUser-to-client identity or role mapping is not exposed by the current ontology.',
},
);
}
// rule: onlyProjectManagerDeclinesChangeOrder
throw new AppError(
'CONFLICT',
'Cannot establish that the authenticated platform user is a project manager for this ChangeOrder; the required role or project-membership fields are not modeled.',
409,
{
ruleId: 'onlyProjectManagerDeclinesChangeOrder',
changeOrderId: changeOrder.changeOrderId,
projectRef: changeOrder.projectRef,
modelingGap: 'PlatformUser role or project-membership fields are not exposed by the current ontology.',
},
);
// The authorization rules above fail closed until the ontology exposes the required mappings.
const now = ctx.clock.nowIso();
const updatedDecision: ChangeOrderDecision = {
...existingDecision,
changeOrderDecisionId: input.changeOrderDecisionId,
changeOrder: input.changeOrder,
madeByPlatformUser: actorPlatformUserId,
decision,
decidedAt: now,
};
if (!hasValidChangeOrderDecisionReferences(updatedDecision)) {
throw new AppError('VALIDATION_ERROR', 'ChangeOrderDecision references must be present.', 400);
}
if (!isValidChangeOrderDecisionDate(updatedDecision.decidedAt, now)) {
throw new AppError('VALIDATION_ERROR', 'decidedAt must be a valid current datetime.', 400);
}
await ctx.data.runInTransaction(async () => {
await decisions.save(updatedDecision);
});
return {
changeOrderDecisionId: updatedDecision.changeOrderDecisionId,
changeOrder: updatedDecision.changeOrder,
madeByPlatformUser: updatedDecision.madeByPlatformUser,
decision: updatedDecision.decision,
decidedAt: updatedDecision.decidedAt,
};
}
