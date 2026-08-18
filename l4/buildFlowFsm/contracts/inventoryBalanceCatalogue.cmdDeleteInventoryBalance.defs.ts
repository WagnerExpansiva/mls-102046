/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdDeleteInventoryBalance.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryBalanceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteInventoryBalance (command); Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.

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
