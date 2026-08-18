/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace changeOrderDecisionCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListChangeOrderDecision (query) — Output kind=array; route buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision.
export interface QryListChangeOrderDecisionInput {}
export interface QryListChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export const qryListChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision' as const;

// bffCall cmdCreateChangeOrderDecision (command) — Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.
export interface CmdCreateChangeOrderDecisionInput {
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export interface CmdCreateChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export const cmdCreateChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision' as const;

// bffCall cmdUpdateChangeOrderDecision (command) — Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.
export interface CmdUpdateChangeOrderDecisionInput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export interface CmdUpdateChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export const cmdUpdateChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision' as const;

// bffCall cmdDeleteChangeOrderDecision (command) — Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.
export interface CmdDeleteChangeOrderDecisionInput {
  changeOrderDecisionId: string;
}
export interface CmdDeleteChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}
export const cmdDeleteChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision' as const;

// bffCall qryChangeOrderPicker (query) — Output kind=array; route buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker.
export interface QryChangeOrderPickerInput {}
export interface QryChangeOrderPickerOutput {
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
export const qryChangeOrderPickerRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker' as const;
