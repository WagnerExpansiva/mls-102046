/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace issueProjectInvoice; one contract file per workspace, all bffCalls).

// bffCall qryLocateClient (query) — Output kind=array; route buildFlowFsm.issueProjectInvoice.qryLocateClient.
export interface QryLocateClientInput {}
export interface QryLocateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryLocateClientRoute = 'buildFlowFsm.issueProjectInvoice.qryLocateClient' as const;

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.issueProjectInvoice.qryLocateProject.
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
export const qryLocateProjectRoute = 'buildFlowFsm.issueProjectInvoice.qryLocateProject' as const;

// bffCall qryInspectClientBillingSummary (query) — Output kind=object; route buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary.
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
export const qryInspectClientBillingSummaryRoute = 'buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary' as const;

// bffCall cmdCreateInvoice (command) — Output kind=object; route buildFlowFsm.issueProjectInvoice.cmdCreateInvoice.
export interface CmdCreateInvoiceInput {
  clientClientId: string;
  projectProjectId: string;
  commercialReference: string;
  amount: number;
}
export interface CmdCreateInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const cmdCreateInvoiceRoute = 'buildFlowFsm.issueProjectInvoice.cmdCreateInvoice' as const;

// bffCall cmdHandoffInvoiceToClient (command) — Output kind=object; route buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient.
export interface CmdHandoffInvoiceToClientInput {
  invoiceInvoiceId: string;
  commercialReference: string;
  amount: number;
}
export interface CmdHandoffInvoiceToClientOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const cmdHandoffInvoiceToClientRoute = 'buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient' as const;
