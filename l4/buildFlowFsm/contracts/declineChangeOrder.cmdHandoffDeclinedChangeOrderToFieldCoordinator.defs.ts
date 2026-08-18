/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/declineChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffDeclinedChangeOrderToFieldCoordinator (command); Output kind=object; route buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.

export interface CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}

export interface CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput {
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

export const cmdHandoffDeclinedChangeOrderToFieldCoordinatorRoute = 'buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator' as const;
