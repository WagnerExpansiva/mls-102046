/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.cmdDeleteInventoryItem.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryItemCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteInventoryItem (command); Output kind=object; route buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem.

export interface CmdDeleteInventoryItemInput {
  inventoryItemId: string;
}

export interface CmdDeleteInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const cmdDeleteInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem' as const;
