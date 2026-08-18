/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.ts" enhancement="_blank"/>
export interface InvoiceChangeOrder {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

/**
 * Returns whether the billed amount is a valid non-negative monetary value.
 * A zero amount is allowed when no amount has yet been incorporated.
 */
export function isValidInvoiceChangeOrderBilledAmount(billedAmount: number): boolean {
  return Number.isFinite(billedAmount) && billedAmount >= 0;
}

/**
 * Returns whether the billed amount represents value incorporated into the invoice.
 */
export function hasInvoiceChangeOrderBilledAmount(
  invoiceChangeOrder: Pick<InvoiceChangeOrder, 'billedAmount'>,
): boolean {
  return invoiceChangeOrder.billedAmount > 0;
}

/**
 * Ensures that an invoice change order links exactly one invoice to exactly one
 * change order and carries a valid billed amount.
 */
export function isValidInvoiceChangeOrder(
  invoiceChangeOrder: InvoiceChangeOrder,
): boolean {
  return (
    invoiceChangeOrder.invoiceChangeOrderId.length > 0 &&
    invoiceChangeOrder.invoiceId.length > 0 &&
    invoiceChangeOrder.changeOrderId.length > 0 &&
    isValidInvoiceChangeOrderBilledAmount(invoiceChangeOrder.billedAmount)
  );
}

/**
 * Determines whether the same change order can be incorporated into an invoice
 * without duplicating an existing application.
 */
export function canApplyInvoiceChangeOrder(
  invoiceId: string,
  changeOrderId: string,
  existingApplications: ReadonlyArray<
    Pick<InvoiceChangeOrder, 'invoiceId' | 'changeOrderId'>
  >,
): boolean {
  return !existingApplications.some(
    (application) =>
      application.invoiceId === invoiceId && application.changeOrderId === changeOrderId,
  );
}

/**
 * Determines whether a billed amount stays within the approved amount that
 * remains available for billing.
 */
export function isWithinUnbilledApprovedAmount(
  billedAmount: number,
  approvedUnbilledAmount: number,
): boolean {
  return (
    isValidInvoiceChangeOrderBilledAmount(billedAmount) &&
    Number.isFinite(approvedUnbilledAmount) &&
    approvedUnbilledAmount >= 0 &&
    billedAmount <= approvedUnbilledAmount
  );
}
