/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/monitorDailyProjectRecords.qryInspectProjectMaterialUsages.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/monitorDailyProjectRecords.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectProjectMaterialUsages (query); Output kind=object; route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.

export interface QryInspectProjectMaterialUsagesInput {
  materialUsageMaterialUsageId: string;
}

export interface QryInspectProjectMaterialUsagesOutput {
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

export const qryInspectProjectMaterialUsagesRoute = 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages' as const;
