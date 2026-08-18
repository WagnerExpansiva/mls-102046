/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/submitChangeOrder.cmdHandoffChangeOrderToProjectManager.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/submitChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffChangeOrderToProjectManager (command); Output kind=object; route buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.

export interface CmdHandoffChangeOrderToProjectManagerInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}

export interface CmdHandoffChangeOrderToProjectManagerOutput {
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

export const cmdHandoffChangeOrderToProjectManagerRoute = 'buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager' as const;
