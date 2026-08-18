/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteInvoiceChangeOrder (command); Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.

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
