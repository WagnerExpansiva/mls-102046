/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace declineChangeOrder; one contract file per workspace, all bffCalls).

// bffCall qryLocateChangeOrder (query) — Output kind=array; route buildFlowFsm.declineChangeOrder.qryLocateChangeOrder.
export interface QryLocateChangeOrderInput {}
export interface QryLocateChangeOrderOutput {
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
export const qryLocateChangeOrderRoute = 'buildFlowFsm.declineChangeOrder.qryLocateChangeOrder' as const;

// bffCall cmdDeclineChangeOrderDecision (command) — Output kind=object; route buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision.
export interface CmdDeclineChangeOrderDecisionInput {
  changeOrderChangeOrderId: string;
  clientClientId: string;
  projectProjectId: string;
  status: string;
}
export interface CmdDeclineChangeOrderDecisionOutput {
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
export const cmdDeclineChangeOrderDecisionRoute = 'buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision' as const;

// bffCall cmdHandoffDeclinedChangeOrderToFieldCoordinator (command) — Output kind=object; route buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.
export interface CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput {
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
export const cmdHandoffDeclinedChangeOrderToFieldCoordinatorRoute = 'buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator' as const;

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.declineChangeOrder.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.declineChangeOrder.qryClientPicker' as const;
