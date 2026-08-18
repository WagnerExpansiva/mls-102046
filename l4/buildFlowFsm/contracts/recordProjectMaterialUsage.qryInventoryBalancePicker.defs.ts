/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.qryInventoryBalancePicker.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordProjectMaterialUsage.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInventoryBalancePicker (query); Output kind=list; route buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker.

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

export const qryInventoryBalancePickerRoute = 'buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker' as const;
