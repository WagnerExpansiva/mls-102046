/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceCatalogue.qryListInvoice.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListInvoice (query); Output kind=list; route buildFlowFsm.invoiceCatalogue.qryListInvoice.

export interface QryListInvoiceInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export const qryListInvoiceRoute = 'buildFlowFsm.invoiceCatalogue.qryListInvoice' as const;
