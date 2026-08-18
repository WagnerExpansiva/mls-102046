/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.cmdCreateMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordProjectMaterialUsage.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateMaterialUsage (command); Output kind=object; route buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage.

export interface CmdCreateMaterialUsageInput {
  inventoryBalanceInventoryBalanceId: string;
  inventoryItemInventoryItemId: string;
  projectProjectId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface CmdCreateMaterialUsageOutput {
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

export const cmdCreateMaterialUsageRoute = 'buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage' as const;
