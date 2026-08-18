/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListClient (query) — Output kind=array; route buildFlowFsm.clientCatalogue.qryListClient.
export interface QryListClientInput {}
export interface QryListClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryListClientRoute = 'buildFlowFsm.clientCatalogue.qryListClient' as const;

// bffCall cmdCreateClient (command) — Output kind=object; route buildFlowFsm.clientCatalogue.cmdCreateClient.
export interface CmdCreateClientInput {
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}
export interface CmdCreateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const cmdCreateClientRoute = 'buildFlowFsm.clientCatalogue.cmdCreateClient' as const;

// bffCall cmdUpdateClient (command) — Output kind=object; route buildFlowFsm.clientCatalogue.cmdUpdateClient.
export interface CmdUpdateClientInput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}
export interface CmdUpdateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const cmdUpdateClientRoute = 'buildFlowFsm.clientCatalogue.cmdUpdateClient' as const;

// bffCall cmdDeleteClient (command) — Output kind=object; route buildFlowFsm.clientCatalogue.cmdDeleteClient.
export interface CmdDeleteClientInput {
  clientId: string;
}
export interface CmdDeleteClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const cmdDeleteClientRoute = 'buildFlowFsm.clientCatalogue.cmdDeleteClient' as const;
