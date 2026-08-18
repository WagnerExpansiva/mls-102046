/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/recordProjectMaterialUsage.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffMaterialUsageToFieldCoordinator (command); Output kind=object; route buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.

export interface CmdHandoffMaterialUsageToFieldCoordinatorInput {
  materialUsageMaterialUsageId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface CmdHandoffMaterialUsageToFieldCoordinatorOutput {
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

export const cmdHandoffMaterialUsageToFieldCoordinatorRoute = 'buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator' as const;
