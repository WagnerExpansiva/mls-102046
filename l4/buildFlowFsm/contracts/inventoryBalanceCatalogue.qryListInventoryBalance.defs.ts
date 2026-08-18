/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.qryListInventoryBalance.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryBalanceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListInventoryBalance (query); Output kind=list; route buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance.

export interface QryListInventoryBalanceInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export const qryListInventoryBalanceRoute = 'buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance' as const;
