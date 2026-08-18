/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateInvoiceChangeOrder (command); Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.

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
