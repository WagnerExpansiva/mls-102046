/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/approveChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffApprovedChangeOrderToBilling (command); Output kind=object; route buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdHandoffApprovedChangeOrderToBillingRoute = 'buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling' as const;
