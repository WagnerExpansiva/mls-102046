/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/declineChangeOrder.qryLocateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/declineChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateChangeOrder (query); Output kind=list; route buildFlowFsm.declineChangeOrder.qryLocateChangeOrder.

export interface QryLocateChangeOrderInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateChangeOrderOutput {
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

export const qryLocateChangeOrderRoute = 'buildFlowFsm.declineChangeOrder.qryLocateChangeOrder' as const;
