/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.ts" enhancement="_blank"/>
export type ChangeOrderDecisionValue = 'approved' | 'declined';

export interface ChangeOrderDecision {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: ChangeOrderDecisionValue;
  decidedAt: string;
}

export function isChangeOrderDecisionValue(value: string): value is ChangeOrderDecisionValue {
  return value === 'approved' || value === 'declined';
}

export function hasValidChangeOrderDecisionReferences(
  decision: Pick<ChangeOrderDecision, 'changeOrder' | 'madeByPlatformUser'>,
): boolean {
  return decision.changeOrder.trim().length > 0 && decision.madeByPlatformUser.trim().length > 0;
}

export function isValidChangeOrderDecisionDate(
  decidedAt: string,
  now: string,
): boolean {
  const decidedAtTime = Date.parse(decidedAt);
  const nowTime = Date.parse(now);
  return Number.isFinite(decidedAtTime) && Number.isFinite(nowTime) && decidedAtTime <= nowTime;
}

export function hasUniqueChangeOrderDecisionId(
  decision: Pick<ChangeOrderDecision, 'changeOrderDecisionId'>,
  existingDecisionIds: readonly string[],
): boolean {
  const id = decision.changeOrderDecisionId.trim();
  return id.length > 0 && !existingDecisionIds.includes(id);
}

export function canRegisterChangeOrderDecision(
  decision: Pick<ChangeOrderDecision, 'changeOrder' | 'decision'>,
  existingDecisions: readonly Pick<ChangeOrderDecision, 'changeOrder' | 'decision'>[],
  allowRedecision = false,
): boolean {
  if (!isChangeOrderDecisionValue(decision.decision) || decision.changeOrder.trim().length === 0) {
    return false;
  }

  const priorDecision = existingDecisions.find(
    (existing) => existing.changeOrder === decision.changeOrder,
  );

  return priorDecision === undefined
    || allowRedecision
    || priorDecision.decision === decision.decision;
}

export function isValidChangeOrderDecision(
  decision: ChangeOrderDecision,
  now: string,
  existingDecisionIds: readonly string[] = [],
): boolean {
  return isChangeOrderDecisionValue(decision.decision)
    && hasValidChangeOrderDecisionReferences(decision)
    && isValidChangeOrderDecisionDate(decision.decidedAt, now)
    && hasUniqueChangeOrderDecisionId(decision, existingDecisionIds);
}
