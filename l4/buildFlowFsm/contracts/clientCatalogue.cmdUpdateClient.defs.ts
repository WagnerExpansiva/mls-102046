/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/clientCatalogue.cmdUpdateClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/clientCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateClient (command); Output kind=object; route buildFlowFsm.clientCatalogue.cmdUpdateClient.

export interface CmdUpdateClientInput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface CmdUpdateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const cmdUpdateClientRoute = 'buildFlowFsm.clientCatalogue.cmdUpdateClient' as const;
