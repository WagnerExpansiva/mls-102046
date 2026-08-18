/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientPortalAccessCatalogue.cmdCreateClientPortalAccess.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientPortalAccessCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateClientPortalAccess (command); Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.

export interface CmdCreateClientPortalAccessInput {
  clientId: string;
  platformUserId: string;
  status: string;
}

export interface CmdCreateClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export const cmdCreateClientPortalAccessRoute = 'buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess' as const;
