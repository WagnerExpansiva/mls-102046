/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdUpdateInvoice.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateInvoice (command); Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice.

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
