/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientCatalogue.cmdDeleteClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteClient (command); Output kind=object; route buildFlowFsm.clientCatalogue.cmdDeleteClient.

export interface CmdDeleteClientInput {
  clientId: string;
}

export interface CmdDeleteClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const cmdDeleteClientRoute = 'buildFlowFsm.clientCatalogue.cmdDeleteClient' as const;
