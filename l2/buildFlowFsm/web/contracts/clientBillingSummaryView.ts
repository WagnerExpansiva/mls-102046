/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientBillingSummaryView; one contract file per workspace, all bffCalls).

// bffCall qryClientBillingSummaryView (query) — Output kind=object; route buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView.
export interface QryClientBillingSummaryViewInput {
  clientBillingSummaryClientId: string;
}
export interface QryClientBillingSummaryViewOutput {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences: string;
  invoiceReferences: string;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}
export const qryClientBillingSummaryViewRoute = 'buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView' as const;
