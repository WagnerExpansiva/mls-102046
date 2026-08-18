/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace invoiceChangeOrderCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListInvoiceChangeOrder (query) — Output kind=array; route buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.
export interface QryListInvoiceChangeOrderInput {}
export interface QryListInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export const qryListInvoiceChangeOrderRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder' as const;

// bffCall cmdCreateInvoiceChangeOrder (command) — Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.
export interface CmdCreateInvoiceChangeOrderInput {
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export interface CmdCreateInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export const cmdCreateInvoiceChangeOrderRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder' as const;

// bffCall cmdUpdateInvoiceChangeOrder (command) — Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.
export interface CmdUpdateInvoiceChangeOrderInput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export interface CmdUpdateInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export const cmdUpdateInvoiceChangeOrderRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder' as const;

// bffCall cmdDeleteInvoiceChangeOrder (command) — Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.
export interface CmdDeleteInvoiceChangeOrderInput {
  invoiceChangeOrderId: string;
}
export interface CmdDeleteInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}
export const cmdDeleteInvoiceChangeOrderRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder' as const;

// bffCall qryInvoicePicker (query) — Output kind=array; route buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker.
export interface QryInvoicePickerInput {}
export interface QryInvoicePickerOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const qryInvoicePickerRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker' as const;

// bffCall qryChangeOrderPicker (query) — Output kind=array; route buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker.
export interface QryChangeOrderPickerInput {}
export interface QryChangeOrderPickerOutput {
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
export const qryChangeOrderPickerRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker' as const;
