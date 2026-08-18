/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace forwardChangeOrderForClientApproval; one contract file per workspace, all bffCalls).

// bffCall qryLocateChangeOrder (query) — Output kind=array; route buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder.
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
export const qryLocateChangeOrderRoute = 'buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder' as const;

// bffCall cmdHandoffChangeOrderToClient (command) — Output kind=object; route buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.
export interface CmdHandoffChangeOrderToClientInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdHandoffChangeOrderToClientOutput {
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
export const cmdHandoffChangeOrderToClientRoute = 'buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient' as const;
