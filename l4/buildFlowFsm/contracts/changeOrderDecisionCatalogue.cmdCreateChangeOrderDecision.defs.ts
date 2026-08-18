/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateChangeOrderDecision (command); Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.

export interface CmdCreateChangeOrderDecisionInput {
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export interface CmdCreateChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export const cmdCreateChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision' as const;
