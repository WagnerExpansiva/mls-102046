/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/issueProjectInvoice.qryLocateClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/issueProjectInvoice.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateClient (query); Output kind=list; route buildFlowFsm.issueProjectInvoice.qryLocateClient.

export interface QryLocateClientInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const qryLocateClientRoute = 'buildFlowFsm.issueProjectInvoice.qryLocateClient' as const;
