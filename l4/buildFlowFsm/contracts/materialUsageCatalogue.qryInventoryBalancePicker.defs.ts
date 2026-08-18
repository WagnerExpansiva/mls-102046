/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/materialUsageCatalogue.qryInventoryBalancePicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInventoryBalancePicker (query); Output kind=list; route buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker.

export interface QryInventoryBalancePickerInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryInventoryBalancePickerOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export const qryInventoryBalancePickerRoute = 'buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker' as const;
