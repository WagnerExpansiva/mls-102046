/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientPortalAccessCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteClientPortalAccess (command); Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.

export interface CmdDeleteClientPortalAccessInput {
  clientPortalAccessId: string;
}

export interface CmdDeleteClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export const cmdDeleteClientPortalAccessRoute = 'buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess' as const;
