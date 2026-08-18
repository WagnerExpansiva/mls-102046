/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace recordProjectMaterialUsage; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.recordProjectMaterialUsage.qryLocateProject.
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
export const qryLocateProjectRoute = 'buildFlowFsm.recordProjectMaterialUsage.qryLocateProject' as const;

// bffCall qryLocateInventoryItem (query) — Output kind=array; route buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem.
export interface QryLocateInventoryItemInput {}
export interface QryLocateInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}
export const qryLocateInventoryItemRoute = 'buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem' as const;

// bffCall cmdCreateMaterialUsage (command) — Output kind=object; route buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage.
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

// bffCall cmdHandoffMaterialUsageToFieldCoordinator (command) — Output kind=object; route buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.
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

// bffCall qryInventoryBalancePicker (query) — Output kind=array; route buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker.
export interface QryInventoryBalancePickerInput {}
export interface QryInventoryBalancePickerOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}
export const qryInventoryBalancePickerRoute = 'buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker' as const;
