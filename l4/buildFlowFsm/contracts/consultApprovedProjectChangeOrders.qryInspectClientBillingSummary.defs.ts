/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/consultApprovedProjectChangeOrders.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectClientBillingSummary (query); Output kind=object; route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.

export interface QryInspectClientBillingSummaryInput {
  clientBillingSummaryClientId: string;
}

export interface QryInspectClientBillingSummaryOutput {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences?: string;
  invoiceReferences?: string;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}

export const qryInspectClientBillingSummaryRoute = 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary' as const;
