/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientBillingSummaryView.qryClientBillingSummaryView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientBillingSummaryView.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryClientBillingSummaryView (query); Output kind=object; route buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView.

export interface QryClientBillingSummaryViewInput {
  clientBillingSummaryClientId: string;
}

export interface QryClientBillingSummaryViewOutput {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences?: string;
  invoiceReferences?: string;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}

export const qryClientBillingSummaryViewRoute = 'buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView' as const;
