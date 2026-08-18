/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdCreateInventoryItem.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryItemCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateInventoryItem (command); Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem.

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
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const cmdCreateInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem' as const;
