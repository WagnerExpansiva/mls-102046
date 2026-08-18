/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateChangeOrderDecision (command); Output kind=object; route buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.

export interface CmdUpdateChangeOrderDecisionInput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export interface CmdUpdateChangeOrderDecisionOutput {
  changeOrderDecisionId: string;
  changeOrder: string;
  madeByPlatformUser: string;
  decision: string;
  decidedAt: string;
}

export const cmdUpdateChangeOrderDecisionRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision' as const;
