/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryItemCatalogue.qryListInventoryItem.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryItemCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListInventoryItem (query); Output kind=list; route buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem.

export interface QryListInventoryItemInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const qryListInventoryItemRoute = 'buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem' as const;
