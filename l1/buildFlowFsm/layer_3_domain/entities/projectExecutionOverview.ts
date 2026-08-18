/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.ts" enhancement="_blank"/>

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type ProjectExecutionOverviewJson = JsonValue;

export interface ProjectExecutionOverview {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds: string[] | null;
  taskSummary: ProjectExecutionOverviewJson;
  upcomingCommitments: ProjectExecutionOverviewJson;
  timeLogIds: string[] | null;
  totalLoggedHours: number;
  materialUsageIds: string[] | null;
  materialUsageSummary: ProjectExecutionOverviewJson;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds: string[] | null;
  changeOrderImpactSummary: ProjectExecutionOverviewJson;
  calculatedAt: string;
}

export interface ProjectExecutionOverviewOperationalRecord {
  projectId: string;
  timestamp?: string | null;
}

export interface ProjectExecutionOverviewValidationInput {
  overview: ProjectExecutionOverview;
  includedRecords?: readonly ProjectExecutionOverviewOperationalRecord[];
  operationalTimestamps?: readonly string[];
}

export function sumLoggedHours(hours: readonly number[]): number {
  return hours.reduce((total, value) => total + value, 0);
}

export function calculateActualCost(
  actualLaborCost: number,
  actualMaterialCost: number,
): number {
  return actualLaborCost + actualMaterialCost;
}

export function calculateCostVariance(
  budgetAmount: number,
  actualCost: number,
): number {
  return budgetAmount - actualCost;
}

export function hasUniqueIdentifiers(
  identifiers: readonly string[] | null,
): boolean {
  if (identifiers === null) return true;
  return new Set(identifiers).size === identifiers.length;
}

export function isCalculatedAtOrAfter(
  calculatedAt: string,
  timestamps: readonly string[],
): boolean {
  const calculatedTime = Date.parse(calculatedAt);
  if (Number.isNaN(calculatedTime)) return false;
  return timestamps.every((timestamp) => {
    const operationalTime = Date.parse(timestamp);
    return !Number.isNaN(operationalTime) && calculatedTime >= operationalTime;
  });
}

export function belongsToProject(
  projectId: string,
  records: readonly ProjectExecutionOverviewOperationalRecord[],
): boolean {
  return records.every((record) => record.projectId === projectId);
}

export function isProjectExecutionOverviewConsistent(
  input: ProjectExecutionOverviewValidationInput,
): boolean {
  const { overview, includedRecords = [], operationalTimestamps = [] } = input;

  if (overview.projectId.length === 0 || overview.projectName.length === 0) {
    return false;
  }
  if (!belongsToProject(overview.projectId, includedRecords)) return false;
  if (!hasUniqueIdentifiers(overview.workTaskIds)) return false;
  if (!hasUniqueIdentifiers(overview.timeLogIds)) return false;
  if (!hasUniqueIdentifiers(overview.materialUsageIds)) return false;
  if (!hasUniqueIdentifiers(overview.changeOrderIds)) return false;
  if (overview.totalLoggedHours < 0) return false;
  if (overview.actualLaborCost < 0 || overview.actualMaterialCost < 0) {
    return false;
  }
  if (overview.budgetAmount < 0) return false;
  if (
    overview.actualCost !==
    calculateActualCost(overview.actualLaborCost, overview.actualMaterialCost)
  ) {
    return false;
  }
  if (
    overview.costVariance !==
    calculateCostVariance(overview.budgetAmount, overview.actualCost)
  ) {
    return false;
  }
  return isCalculatedAtOrAfter(overview.calculatedAt, operationalTimestamps);
}

export function hasConsistentLoggedHours(
  totalLoggedHours: number,
  includedLoggedHours: readonly number[],
): boolean {
  return totalLoggedHours >= 0 &&
    totalLoggedHours === sumLoggedHours(includedLoggedHours);
}
