/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdUpdateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateChangeOrder (command); Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdUpdateChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder' as const;
