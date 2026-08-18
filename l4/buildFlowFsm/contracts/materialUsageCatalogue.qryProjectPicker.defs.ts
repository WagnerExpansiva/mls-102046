/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryProjectPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryProjectPicker (query); Output kind=list; route buildFlowFsm.materialUsageCatalogue.qryProjectPicker.

export interface QryProjectPickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryProjectPickerOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const qryProjectPickerRoute = 'buildFlowFsm.materialUsageCatalogue.qryProjectPicker' as const;
