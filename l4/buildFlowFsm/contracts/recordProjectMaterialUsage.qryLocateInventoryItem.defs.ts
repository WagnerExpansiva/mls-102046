/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.qryLocateInventoryItem.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordProjectMaterialUsage.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateInventoryItem (query); Output kind=list; route buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem.

export interface QryLocateInventoryItemInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export const qryLocateInventoryItemRoute = 'buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem' as const;
