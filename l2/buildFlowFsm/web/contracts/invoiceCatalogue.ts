/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace invoiceCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListInvoice (query) — Output kind=array; route buildFlowFsm.invoiceCatalogue.qryListInvoice.
export interface QryListInvoiceInput {}
export interface QryListInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const qryListInvoiceRoute = 'buildFlowFsm.invoiceCatalogue.qryListInvoice' as const;

// bffCall cmdCreateInvoice (command) — Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdCreateInvoice.
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
export const cmdCreateInvoiceRoute = 'buildFlowFsm.invoiceCatalogue.cmdCreateInvoice' as const;

// bffCall cmdUpdateInvoice (command) — Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice.
export interface CmdUpdateInvoiceInput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export interface CmdUpdateInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const cmdUpdateInvoiceRoute = 'buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice' as const;

// bffCall cmdDeleteInvoice (command) — Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice.
export interface CmdDeleteInvoiceInput {
  invoiceId: string;
}
export interface CmdDeleteInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const cmdDeleteInvoiceRoute = 'buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice' as const;

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.invoiceCatalogue.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.invoiceCatalogue.qryClientPicker' as const;

// bffCall qryProjectPicker (query) — Output kind=array; route buildFlowFsm.invoiceCatalogue.qryProjectPicker.
export interface QryProjectPickerInput {}
export interface QryProjectPickerOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryProjectPickerRoute = 'buildFlowFsm.invoiceCatalogue.qryProjectPicker' as const;
