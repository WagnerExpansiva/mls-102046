/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdDeleteInvoice.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteInvoice (command); Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice.

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
