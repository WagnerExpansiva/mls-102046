/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace approveChangeOrder; one contract file per workspace, all bffCalls).

// bffCall qryLocateChangeOrder (query) — Output kind=array; route buildFlowFsm.approveChangeOrder.qryLocateChangeOrder.
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
export const qryLocateChangeOrderRoute = 'buildFlowFsm.approveChangeOrder.qryLocateChangeOrder' as const;

// bffCall cmdApproveChangeOrderDecision (command) — Output kind=object; route buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision.
export interface CmdApproveChangeOrderDecisionInput {
  changeOrderChangeOrderId: string;
  clientClientId: string;
  projectProjectId: string;
  status: string;
}
export interface CmdApproveChangeOrderDecisionOutput {
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
export const cmdApproveChangeOrderDecisionRoute = 'buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision' as const;

// bffCall cmdHandoffApprovedChangeOrderToBilling (command) — Output kind=object; route buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.
export interface CmdHandoffApprovedChangeOrderToBillingInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdHandoffApprovedChangeOrderToBillingOutput {
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
export const cmdHandoffApprovedChangeOrderToBillingRoute = 'buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling' as const;

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.approveChangeOrder.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.approveChangeOrder.qryClientPicker' as const;
