/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListInvoiceChangeOrder (query); Output kind=list; route buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.

export interface QryListInvoiceChangeOrderInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListInvoiceChangeOrderOutput {
  invoiceChangeOrderId: string;
  invoiceId: string;
  changeOrderId: string;
  billedAmount: number;
}

export const qryListInvoiceChangeOrderRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder' as const;
