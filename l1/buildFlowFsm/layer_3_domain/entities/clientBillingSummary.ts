/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.ts" enhancement="_blank"/>
export interface ClientBillingSummaryReference {
  id: string;
  projectId: string;
  amount: number;
}

export interface ClientBillingSummary {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences: ClientBillingSummaryReference[] | null;
  invoiceReferences: ClientBillingSummaryReference[] | null;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}

export function sumClientBillingSummaryReferences(
  references: readonly ClientBillingSummaryReference[] | null,
): number {
  return (references ?? []).reduce((total, reference) => total + reference.amount, 0);
}

export function hasUniqueClientBillingSummaryReferences(
  references: readonly ClientBillingSummaryReference[] | null,
): boolean {
  const ids = new Set<string>();
  for (const reference of references ?? []) {
    if (ids.has(reference.id)) return false;
    ids.add(reference.id);
  }
  return true;
}

export function clientBillingSummaryReferencesBelongToProject(
  projectId: string,
  references: readonly ClientBillingSummaryReference[] | null,
): boolean {
  return (references ?? []).every((reference) => reference.projectId === projectId);
}

export function clientBillingSummaryHasNonNegativeAmounts(
  summary: Pick<
    ClientBillingSummary,
    | 'approvedChangeOrderAmount'
    | 'billableAmount'
    | 'invoicedAmount'
    | 'clientAvailableAmount'
  >,
): boolean {
  return (
    summary.approvedChangeOrderAmount >= 0 &&
    summary.billableAmount >= 0 &&
    summary.invoicedAmount >= 0 &&
    summary.clientAvailableAmount >= 0
  );
}

export function clientBillingSummaryAmountsAreConsistent(
  summary: Pick<
    ClientBillingSummary,
    | 'clientId'
    | 'projectId'
    | 'approvedChangeOrderReferences'
    | 'invoiceReferences'
    | 'approvedChangeOrderAmount'
    | 'billableAmount'
    | 'invoicedAmount'
    | 'clientAvailableAmount'
  >,
): boolean {
  if (!summary.clientId || !summary.projectId) return false;
  if (!clientBillingSummaryHasNonNegativeAmounts(summary)) return false;
  if (!hasUniqueClientBillingSummaryReferences(summary.approvedChangeOrderReferences)) return false;
  if (!hasUniqueClientBillingSummaryReferences(summary.invoiceReferences)) return false;
  if (!clientBillingSummaryReferencesBelongToProject(summary.projectId, summary.approvedChangeOrderReferences)) {
    return false;
  }
  if (!clientBillingSummaryReferencesBelongToProject(summary.projectId, summary.invoiceReferences)) {
    return false;
  }
  if (summary.approvedChangeOrderAmount !== sumClientBillingSummaryReferences(summary.approvedChangeOrderReferences)) {
    return false;
  }
  if (summary.invoicedAmount !== sumClientBillingSummaryReferences(summary.invoiceReferences)) {
    return false;
  }
  if (summary.billableAmount < summary.approvedChangeOrderAmount) return false;
  if (summary.invoicedAmount > summary.billableAmount) return false;
  if (summary.clientAvailableAmount > summary.invoicedAmount) return false;
  return true;
}

export function recalculateClientBillingSummaryAmounts(
  summary: Pick<
    ClientBillingSummary,
    'approvedChangeOrderReferences' | 'invoiceReferences'
  >,
): Pick<ClientBillingSummary, 'approvedChangeOrderAmount' | 'invoicedAmount'> {
  return {
    approvedChangeOrderAmount: sumClientBillingSummaryReferences(summary.approvedChangeOrderReferences),
    invoicedAmount: sumClientBillingSummaryReferences(summary.invoiceReferences),
  };
}
