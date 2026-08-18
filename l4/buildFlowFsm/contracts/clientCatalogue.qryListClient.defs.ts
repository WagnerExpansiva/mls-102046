/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientCatalogue.qryListClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListClient (query); Output kind=list; route buildFlowFsm.clientCatalogue.qryListClient.

export interface QryListClientInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const qryListClientRoute = 'buildFlowFsm.clientCatalogue.qryListClient' as const;
