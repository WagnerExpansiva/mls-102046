/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateInvoiceChangeOrder (command); Output kind=object; route buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.

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
