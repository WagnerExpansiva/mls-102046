/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryInvoicePicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInvoicePicker (query); Output kind=list; route buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker.

export interface QryInvoicePickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryInvoicePickerOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export const qryInvoicePickerRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker' as const;
