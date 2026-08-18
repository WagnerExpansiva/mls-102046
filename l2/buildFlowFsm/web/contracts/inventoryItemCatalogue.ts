/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace inventoryItemCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListInventoryItem (query) — Output kind=array; route buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem.
export interface QryListInventoryItemInput {}
export interface QryListInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const qryListInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem' as const;

// bffCall cmdCreateInventoryItem (command) — Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem.
export interface CmdCreateInventoryItemInput {
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export interface CmdCreateInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const cmdCreateInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem' as const;

// bffCall cmdUpdateInventoryItem (command) — Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem.
export interface CmdUpdateInventoryItemInput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export interface CmdUpdateInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const cmdUpdateInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem' as const;

// bffCall cmdDeleteInventoryItem (command) — Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem.
export interface CmdDeleteInventoryItemInput {
  inventoryItemId: string;
}
export interface CmdDeleteInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const cmdDeleteInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem' as const;
