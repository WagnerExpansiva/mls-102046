/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/inventoryBalanceCatalogue.cmdUpdateInventoryBalance.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/inventoryBalanceCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateInventoryBalance (command); Output kind=object; route buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.

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
