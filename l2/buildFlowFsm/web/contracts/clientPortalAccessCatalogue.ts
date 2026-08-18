/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientPortalAccessCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListClientPortalAccess (query) — Output kind=array; route buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess.
export interface QryListClientPortalAccessInput {}
export interface QryListClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}
export const qryListClientPortalAccessRoute = 'buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess' as const;

// bffCall cmdCreateClientPortalAccess (command) — Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.
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

// bffCall cmdUpdateClientPortalAccess (command) — Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.
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

// bffCall cmdDeleteClientPortalAccess (command) — Output kind=object; route buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.
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

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker' as const;
