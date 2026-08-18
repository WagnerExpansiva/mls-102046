/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.qryListChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListChangeOrderDecision (query); Output kind=list; route buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision.

export interface QryListChangeOrderDecisionInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export const qryListChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision' as const;
