/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryInventoryItemPicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInventoryItemPicker (query); Output kind=list; route buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker.

export interface QryInventoryItemPickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryInventoryItemPickerOutput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const qryInventoryItemPickerRoute = 'buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker' as const;
