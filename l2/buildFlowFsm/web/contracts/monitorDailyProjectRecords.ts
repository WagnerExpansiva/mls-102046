/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace monitorDailyProjectRecords; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.monitorDailyProjectRecords.qryLocateProject.
export interface QryLocateProjectInput {}
export interface QryLocateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryLocateProjectRoute = 'buildFlowFsm.monitorDailyProjectRecords.qryLocateProject' as const;

// bffCall qryInspectProjectTimeLogs (query) — Output kind=object; route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs.
export interface QryInspectProjectTimeLogsInput {
  timeLogTimeLogId: string;
}
export interface QryInspectProjectTimeLogsOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const qryInspectProjectTimeLogsRoute = 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs' as const;

// bffCall qryInspectProjectMaterialUsages (query) — Output kind=object; route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.
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

// bffCall qryInspectProjectExecutionOverview (query) — Output kind=object; route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.
export interface QryInspectProjectExecutionOverviewInput {
  projectExecutionOverviewProjectId: string;
}
export interface QryInspectProjectExecutionOverviewOutput {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds: string;
  taskSummary: string;
  upcomingCommitments: string;
  timeLogIds: string;
  totalLoggedHours: number;
  materialUsageIds: string;
  materialUsageSummary: string;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds: string;
  changeOrderImpactSummary: string;
  calculatedAt: string;
}
export const qryInspectProjectExecutionOverviewRoute = 'buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview' as const;
