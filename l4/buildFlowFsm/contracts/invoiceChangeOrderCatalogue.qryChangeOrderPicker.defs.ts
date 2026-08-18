/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryChangeOrderPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/invoiceChangeOrderCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryChangeOrderPicker (query); Output kind=list; route buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker.

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

export const qryChangeOrderPickerRoute = 'buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker' as const;
