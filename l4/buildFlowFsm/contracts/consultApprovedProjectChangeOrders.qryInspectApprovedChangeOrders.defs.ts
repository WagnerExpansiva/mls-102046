/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/consultApprovedProjectChangeOrders.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectApprovedChangeOrders (query); Output kind=object; route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.

export interface QryInspectApprovedChangeOrdersInput {
  changeOrderChangeOrderId: string;
}

export interface QryInspectApprovedChangeOrdersOutput {
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

export const qryInspectApprovedChangeOrdersRoute = 'buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders' as const;
