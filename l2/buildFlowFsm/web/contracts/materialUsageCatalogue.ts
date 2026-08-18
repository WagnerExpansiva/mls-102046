/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace materialUsageCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListMaterialUsage (query) — Output kind=array; route buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage.
export interface QryListMaterialUsageInput {}
export interface QryListMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export const qryListMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage' as const;

// bffCall cmdCreateMaterialUsage (command) — Output kind=object; route buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage.
export interface CmdCreateMaterialUsageInput {
  inventoryBalanceInventoryBalanceId: string;
  inventoryItemInventoryItemId: string;
  projectProjectId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export interface CmdCreateMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export const cmdCreateMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage' as const;

// bffCall cmdUpdateMaterialUsage (command) — Output kind=object; route buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage.
export interface CmdUpdateMaterialUsageInput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export interface CmdUpdateMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export const cmdUpdateMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage' as const;

// bffCall cmdDeleteMaterialUsage (command) — Output kind=object; route buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage.
export interface CmdDeleteMaterialUsageInput {
  materialUsageId: string;
}
export interface CmdDeleteMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export const cmdDeleteMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage' as const;

// bffCall qryInventoryBalancePicker (query) — Output kind=array; route buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker.
export interface QryInventoryBalancePickerInput {}
export interface QryInventoryBalancePickerOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const qryInventoryBalancePickerRoute = 'buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker' as const;

// bffCall qryInventoryItemPicker (query) — Output kind=array; route buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker.
export interface QryInventoryItemPickerInput {}
export interface QryInventoryItemPickerOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const qryInventoryItemPickerRoute = 'buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker' as const;

// bffCall qryProjectPicker (query) — Output kind=array; route buildFlowFsm.materialUsageCatalogue.qryProjectPicker.
export interface QryProjectPickerInput {}
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
