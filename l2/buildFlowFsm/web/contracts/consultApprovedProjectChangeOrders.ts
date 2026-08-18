/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace consultApprovedProjectChangeOrders; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject.
export interface QryLocateProjectInput {}
export interface QryLocateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryLocateProjectRoute = 'buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject' as const;

// bffCall qryInspectApprovedChangeOrders (query) — Output kind=object; route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.
export interface QryInspectApprovedChangeOrdersInput {
  changeOrderChangeOrderId: string;
}
export interface QryInspectApprovedChangeOrdersOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const qryInspectApprovedChangeOrdersRoute = 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders' as const;

// bffCall qryInspectClientBillingSummary (query) — Output kind=object; route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.
export interface QryInspectClientBillingSummaryInput {
  clientBillingSummaryClientId: string;
}
export interface QryInspectClientBillingSummaryOutput {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences: string;
  invoiceReferences: string;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}
export const qryInspectClientBillingSummaryRoute = 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary' as const;
