/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.qryChangeOrderPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/changeOrderDecisionCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryChangeOrderPicker (query); Output kind=list; route buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker.

export interface QryChangeOrderPickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryChangeOrderPickerOutput {
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

export const qryChangeOrderPickerRoute = 'buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker' as const;
