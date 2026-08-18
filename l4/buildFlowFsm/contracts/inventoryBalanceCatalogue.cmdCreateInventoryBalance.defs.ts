/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdCreateInventoryBalance.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryBalanceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateInventoryBalance (command); Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance.

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
