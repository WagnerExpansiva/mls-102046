/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientPortalAccessCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateClientPortalAccess (command); Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.

export interface CmdUpdateClientPortalAccessInput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export interface CmdUpdateClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export const cmdUpdateClientPortalAccessRoute = 'buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess' as const;
