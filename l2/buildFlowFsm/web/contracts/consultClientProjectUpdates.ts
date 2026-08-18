/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/consultClientProjectUpdates.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace consultClientProjectUpdates; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.consultClientProjectUpdates.qryLocateProject.
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
export const qryLocateProjectRoute = 'buildFlowFsm.consultClientProjectUpdates.qryLocateProject' as const;

// bffCall qryInspectStatusReport (query) — Output kind=object; route buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport.
export interface QryInspectStatusReportInput {
  statusReportStatusReportId: string;
}
export interface QryInspectStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const qryInspectStatusReportRoute = 'buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport' as const;

// bffCall qryInspectClientBillingSummary (query) — Output kind=object; route buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary.
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
export const qryInspectClientBillingSummaryRoute = 'buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary' as const;
