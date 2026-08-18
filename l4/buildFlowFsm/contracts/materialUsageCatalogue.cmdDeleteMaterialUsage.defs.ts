/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/materialUsageCatalogue.cmdDeleteMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/materialUsageCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteMaterialUsage (command); Output kind=object; route buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage.

export interface CmdDeleteMaterialUsageInput {
  materialUsageId: string;
}

export interface CmdDeleteMaterialUsageOutput {
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

export const cmdDeleteMaterialUsageRoute = 'buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage' as const;
