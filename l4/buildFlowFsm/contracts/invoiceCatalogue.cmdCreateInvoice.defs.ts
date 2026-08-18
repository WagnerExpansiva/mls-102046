/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdCreateInvoice.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateInvoice (command); Output kind=object; route buildFlowFsm.invoiceCatalogue.cmdCreateInvoice.

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
