/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdDeleteChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteChangeOrder (command); Output kind=object; route buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder.

export interface CmdDeleteChangeOrderInput {
  changeOrderId: string;
}

export interface CmdDeleteChangeOrderOutput {
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

export const cmdDeleteChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder' as const;
