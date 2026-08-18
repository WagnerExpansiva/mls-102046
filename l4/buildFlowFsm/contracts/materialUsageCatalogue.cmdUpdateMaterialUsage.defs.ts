/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/materialUsageCatalogue.cmdUpdateMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateMaterialUsage (command); Output kind=object; route buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage.

export interface CmdUpdateMaterialUsageInput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface CmdUpdateMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export const cmdUpdateMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage' as const;
