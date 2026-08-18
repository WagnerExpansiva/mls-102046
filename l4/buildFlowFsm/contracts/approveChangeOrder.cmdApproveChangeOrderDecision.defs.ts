/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/approveChangeOrder.cmdApproveChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/approveChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdApproveChangeOrderDecision (command); Output kind=object; route buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdApproveChangeOrderDecisionRoute = 'buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision' as const;
