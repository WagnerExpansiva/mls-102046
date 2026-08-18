/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/forwardChangeOrderForClientApproval.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffChangeOrderToClient (command); Output kind=object; route buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.

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
  forwardedForClientApprovalAt?: string;
  status: string;
}

export const cmdHandoffChangeOrderToClientRoute = 'buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient' as const;
