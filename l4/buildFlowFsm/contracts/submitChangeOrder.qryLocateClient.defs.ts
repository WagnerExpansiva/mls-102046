/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/submitChangeOrder.qryLocateClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/submitChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateClient (query); Output kind=list; route buildFlowFsm.submitChangeOrder.qryLocateClient.

export interface QryLocateClientInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const qryLocateClientRoute = 'buildFlowFsm.submitChangeOrder.qryLocateClient' as const;
