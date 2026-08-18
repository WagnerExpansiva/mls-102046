/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderCatalogue.qryListChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListChangeOrder (query); Output kind=list; route buildFlowFsm.changeOrderCatalogue.qryListChangeOrder.

export interface QryListChangeOrderInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListChangeOrderOutput {
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

export const qryListChangeOrderRoute = 'buildFlowFsm.changeOrderCatalogue.qryListChangeOrder' as const;
