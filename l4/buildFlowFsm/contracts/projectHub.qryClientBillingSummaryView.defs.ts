/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryClientBillingSummaryView.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryClientBillingSummaryView (query); Output kind=object; route buildFlowFsm.projectHub.qryClientBillingSummaryView.

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

export const qryClientBillingSummaryViewRoute = 'buildFlowFsm.projectHub.qryClientBillingSummaryView' as const;
