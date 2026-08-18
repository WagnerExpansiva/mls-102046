/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/submitChangeOrder.cmdCreateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/submitChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateChangeOrder (command); Output kind=object; route buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdCreateChangeOrderRoute = 'buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder' as const;
