/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/declineChangeOrder.cmdDeclineChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/declineChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeclineChangeOrderDecision (command); Output kind=object; route buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdDeclineChangeOrderDecisionRoute = 'buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision' as const;
