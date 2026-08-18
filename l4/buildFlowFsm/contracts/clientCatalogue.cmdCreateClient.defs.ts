/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientCatalogue.cmdCreateClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateClient (command); Output kind=object; route buildFlowFsm.clientCatalogue.cmdCreateClient.

export interface CmdCreateClientInput {
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface CmdCreateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const cmdCreateClientRoute = 'buildFlowFsm.clientCatalogue.cmdCreateClient' as const;
