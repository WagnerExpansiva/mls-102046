/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryListMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListMaterialUsage (query); Output kind=list; route buildFlowFsm.projectHub.qryListMaterialUsage.

export interface QryListMaterialUsageInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListMaterialUsageOutput {
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

export const qryListMaterialUsageRoute = 'buildFlowFsm.projectHub.qryListMaterialUsage' as const;
