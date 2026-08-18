/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.qryListClientPortalAccess.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientPortalAccessCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListClientPortalAccess (query); Output kind=list; route buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess.

export interface QryListClientPortalAccessInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export const qryListClientPortalAccessRoute = 'buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess' as const;
