/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/declineChangeOrderDecision.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IChangeOrderDecisionRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type { ChangeOrderDecision } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';

export interface DeclineChangeOrderDecisionInput {
  changeOrderId: string;
  clientId: string;
  projectId: string;
  status: string;
}

export interface DeclineChangeOrderDecisionOutput {
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

function toOutput(order: ChangeOrder): DeclineChangeOrderDecisionOutput {
  const output: DeclineChangeOrderDecisionOutput = {
    changeOrderId: order.changeOrderId,
    clientRef: order.clientRef,
    projectRef: order.projectRef,
    description: order.description,
    scopeImpact: order.scopeImpact,
    scheduleImpact: order.scheduleImpact,
    changeAmount: order.changeAmount,
    submittedAt: order.submittedAt,
    status: order.status,
  };
  if (order.forwardedForClientApprovalAt !== null) {
    output.forwardedForClientApprovalAt = order.forwardedForClientApprovalAt;
  }
  return output;
}

export async function declineChangeOrderDecision(
  ctx: RequestContext,
  input: DeclineChangeOrderDecisionInput,
): Promise<DeclineChangeOrderDecisionOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const decisions = resolveRepository<IChangeOrderDecisionRepository>(ctx, 'ChangeOrderDecision');

  if (input.status !== 'declined') {
    throw new AppError(
      'VALIDATION_ERROR',
      'A decisão da ordem de mudança deve ser declined.',
      400,
      { ruleId: 'managerActionableChangeOrder' },
    );
  }

  const actorId = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
  const actorScope = ctx.sessionContext.actorSession.scope ?? ctx.sessionContext.actorScope ?? [];
  const isManager = actorScope.some((scope) => scope.toLowerCase() === 'manager');
  if (!actorId || !isManager) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Apenas um gerente autorizado pode recusar a ordem de mudança.',
      400,
      { ruleId: 'managerActionableChangeOrder' },
    );
  }

  const order = await changeOrders.getById(input.changeOrderId);
  if (!order) {
    throw new AppError(
      'NOT_FOUND',
      `Ordem de mudança não encontrada: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  if (order.clientRef !== input.clientId || order.projectRef !== input.projectId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'As referências de cliente e obra não correspondem à ordem de mudança.',
      400,
      { ruleId: 'managerActionableChangeOrder' },
    );
  }

  if (order.status !== 'submitted' && order.status !== 'pendingClientApproval') {
    throw new AppError(
      'CONFLICT',
      'A ordem de mudança não está acionável para recusa pelo gerente.',
      409,
      { ruleId: 'managerActionableChangeOrder', currentStatus: order.status },
    );
  }

  const declinedOrder: ChangeOrder = { ...order, status: 'declined' };
  const now = ctx.clock.nowIso();
  const decision: ChangeOrderDecision = {
    changeOrderDecisionId: ctx.idGenerator.newId(),
    changeOrder: order.changeOrderId,
    madeByPlatformUser: actorId,
    decision: 'declined',
    decidedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    // rule: managerActionableChangeOrder
    await changeOrders.save(declinedOrder);
    await decisions.save(decision);
  });

  return toOutput(declinedOrder);
}
