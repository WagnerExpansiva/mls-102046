/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/approveChangeOrder.qryClientPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/approveChangeOrder.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryClientPicker (query); Output kind=list; route buildFlowFsm.approveChangeOrder.qryClientPicker.

export interface QryClientPickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const qryClientPickerRoute = 'buildFlowFsm.approveChangeOrder.qryClientPicker' as const;
