/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace changeOrderCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListChangeOrder (query) — Output kind=array; route buildFlowFsm.changeOrderCatalogue.qryListChangeOrder.
export interface QryListChangeOrderInput {}
export interface QryListChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const qryListChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.qryListChangeOrder' as const;

// bffCall cmdCreateChangeOrder (command) — Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder.
export interface CmdCreateChangeOrderInput {
  clientClientId: string;
  projectProjectId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdCreateChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const cmdCreateChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder' as const;

// bffCall cmdUpdateChangeOrder (command) — Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder.
export interface CmdUpdateChangeOrderInput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt?: string;
  status: string;
}
export interface CmdUpdateChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const cmdUpdateChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder' as const;

// bffCall cmdDeleteChangeOrder (command) — Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder.
export interface CmdDeleteChangeOrderInput {
  changeOrderId: string;
}
export interface CmdDeleteChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const cmdDeleteChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder' as const;

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.changeOrderCatalogue.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.changeOrderCatalogue.qryClientPicker' as const;

// bffCall qryProjectPicker (query) — Output kind=array; route buildFlowFsm.changeOrderCatalogue.qryProjectPicker.
export interface QryProjectPickerInput {}
export interface QryProjectPickerOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryProjectPickerRoute = 'buildFlowFsm.changeOrderCatalogue.qryProjectPicker' as const;
