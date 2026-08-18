/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace inventoryBalanceCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListInventoryBalance (query) — Output kind=array; route buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance.
export interface QryListInventoryBalanceInput {}
export interface QryListInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const qryListInventoryBalanceRoute = 'buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance' as const;

// bffCall cmdCreateInventoryBalance (command) — Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance.
export interface CmdCreateInventoryBalanceInput {
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export interface CmdCreateInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const cmdCreateInventoryBalanceRoute = 'buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance' as const;

// bffCall cmdUpdateInventoryBalance (command) — Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.
export interface CmdUpdateInventoryBalanceInput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export interface CmdUpdateInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const cmdUpdateInventoryBalanceRoute = 'buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance' as const;

// bffCall cmdDeleteInventoryBalance (command) — Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.
export interface CmdDeleteInventoryBalanceInput {
  inventoryBalanceId: string;
}
export interface CmdDeleteInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const cmdDeleteInventoryBalanceRoute = 'buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance' as const;

// bffCall qryInventoryItemPicker (query) — Output kind=array; route buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker.
export interface QryInventoryItemPickerInput {}
export interface QryInventoryItemPickerOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const qryInventoryItemPickerRoute = 'buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker' as const;
