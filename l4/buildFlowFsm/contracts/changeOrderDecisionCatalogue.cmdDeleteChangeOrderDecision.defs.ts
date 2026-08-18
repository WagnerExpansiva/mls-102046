/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteChangeOrderDecision (command); Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.

export interface CmdDeleteChangeOrderDecisionInput {
  changeOrderDecisionId: string;
}

export interface CmdDeleteChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export const cmdDeleteChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision' as const;
