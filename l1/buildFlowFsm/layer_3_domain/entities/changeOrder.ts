/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.ts" enhancement="_blank"/>
export type ChangeOrderStatus =
  | 'submitted'
  | 'pendingClientApproval'
  | 'approved'
  | 'declined';

export interface ChangeOrder {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string | null;
  status: ChangeOrderStatus;
}

export const CHANGE_ORDER_STATUS_TRANSITIONS: Record<
  ChangeOrderStatus,
  ChangeOrderStatus[]
> = {
  submitted: ['pendingClientApproval'],
  pendingClientApproval: ['approved', 'declined'],
  approved: [],
  declined: [],
};

export function canTransitionChangeOrder(
  from: ChangeOrderStatus,
  to: ChangeOrderStatus,
): boolean {
  return CHANGE_ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isNonNegativeChangeAmount(changeAmount: number): boolean {
  return Number.isFinite(changeAmount) && changeAmount >= 0;
}

export function hasChangeOrderText(value: string): boolean {
  return value.trim().length > 0;
}

export function isSubmittedBeforeOrAtForwarding(
  submittedAt: string,
  forwardedForClientApprovalAt: string | null,
): boolean {
  if (forwardedForClientApprovalAt === null) return true;
  const submitted = Date.parse(submittedAt);
  const forwarded = Date.parse(forwardedForClientApprovalAt);
  return (
    Number.isFinite(submitted) &&
    Number.isFinite(forwarded) &&
    submitted <= forwarded
  );
}

export function canTransitionChangeOrderWithInvariants(
  order: ChangeOrder,
  to: ChangeOrderStatus,
): boolean {
  if (!canTransitionChangeOrder(order.status, to)) return false;
  if (to === 'pendingClientApproval') {
    return (
      order.forwardedForClientApprovalAt !== null &&
      isSubmittedBeforeOrAtForwarding(
        order.submittedAt,
        order.forwardedForClientApprovalAt,
      )
    );
  }
  if (to === 'approved' || to === 'declined') {
    return order.forwardedForClientApprovalAt !== null;
  }
  return true;
}

export function validateChangeOrder(
  order: ChangeOrder,
  projectBelongsToClient?: (projectRef: string, clientRef: string) => boolean,
): string[] {
  const errors: string[] = [];

  if (order.changeOrderId.trim().length === 0) {
    errors.push('changeOrderId must be present and immutable once assigned');
  }
  if (order.clientRef.trim().length === 0) {
    errors.push('clientRef must be present');
  }
  if (order.projectRef.trim().length === 0) {
    errors.push('projectRef must be present');
  }
  if (
    projectBelongsToClient &&
    !projectBelongsToClient(order.projectRef, order.clientRef)
  ) {
    errors.push('projectRef must identify a project belonging to clientRef');
  }
  if (!hasChangeOrderText(order.description)) {
    errors.push('description must not be blank');
  }
  if (!hasChangeOrderText(order.scopeImpact)) {
    errors.push('scopeImpact must not be blank');
  }
  if (!hasChangeOrderText(order.scheduleImpact)) {
    errors.push('scheduleImpact must not be blank');
  }
  if (!isNonNegativeChangeAmount(order.changeAmount)) {
    errors.push('changeAmount must be monetary and non-negative');
  }
  if (!Number.isFinite(Date.parse(order.submittedAt))) {
    errors.push('submittedAt must be a valid datetime');
  }
  if (
    !isSubmittedBeforeOrAtForwarding(
      order.submittedAt,
      order.forwardedForClientApprovalAt,
    )
  ) {
    errors.push(
      'submittedAt must be before or equal to forwardedForClientApprovalAt',
    );
  }
  if (order.status === 'submitted' && order.forwardedForClientApprovalAt !== null) {
    errors.push(
      'forwardedForClientApprovalAt may only be set when forwarded for client approval',
    );
  }
  if (
    (order.status === 'approved' || order.status === 'declined') &&
    order.forwardedForClientApprovalAt === null
  ) {
    errors.push(
      'approved or declined orders must have been forwarded for client approval',
    );
  }
  return errors;
}
