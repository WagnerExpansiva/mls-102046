/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdCreateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateChangeOrder (command); Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder.

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

export const cmdCreateChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder' as const;
