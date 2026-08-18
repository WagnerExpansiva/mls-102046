/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/issueProjectInvoice.cmdHandoffInvoiceToClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/issueProjectInvoice.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffInvoiceToClient (command); Output kind=object; route buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient.

export interface CmdHandoffInvoiceToClientInput {
  invoiceInvoiceId: string;
  commercialReference: string;
  amount: number;
}

export interface CmdHandoffInvoiceToClientOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}

export const cmdHandoffInvoiceToClientRoute = 'buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient' as const;
