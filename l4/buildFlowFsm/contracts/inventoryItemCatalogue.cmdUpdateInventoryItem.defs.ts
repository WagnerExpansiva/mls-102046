/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdUpdateInventoryItem.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryItemCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateInventoryItem (command); Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem.

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
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const cmdUpdateInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem' as const;
