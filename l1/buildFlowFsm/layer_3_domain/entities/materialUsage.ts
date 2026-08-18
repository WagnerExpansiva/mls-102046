/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.ts" enhancement="_blank"/>
export type MaterialUsageStatus = 'recorded' | 'voided';

export interface MaterialUsage {
  materialUsageId: string;
  status: MaterialUsageStatus;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export const MATERIAL_USAGE_STATUS_TRANSITIONS: Record<
  MaterialUsageStatus,
  MaterialUsageStatus[]
> = {
  recorded: ['voided'],
  voided: [],
};

export function canTransitionMaterialUsage(
  from: MaterialUsageStatus,
  to: MaterialUsageStatus,
): boolean {
  return MATERIAL_USAGE_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function hasPositiveMaterialUsageQuantity(
  usage: Pick<MaterialUsage, 'quantity'>,
): boolean {
  return usage.quantity > 0;
}

export function hasNonNegativeMaterialUsageUnitCost(
  usage: Pick<MaterialUsage, 'unitCostBasis'>,
): boolean {
  return usage.unitCostBasis >= 0;
}

export function calculateMaterialUsageTotalCost(
  usage: Pick<MaterialUsage, 'quantity' | 'unitCostBasis'>,
): number {
  return usage.quantity * usage.unitCostBasis;
}

export function hasNonNegativeMaterialUsageTotalCost(
  usage: Pick<MaterialUsage, 'quantity' | 'unitCostBasis'>,
): boolean {
  return calculateMaterialUsageTotalCost(usage) >= 0;
}

export function consumedOnIsNotLaterThanRegistration(
  consumedOn: string,
  registeredAt?: string | null,
): boolean {
  if (!registeredAt) {
    return true;
  }
  return consumedOn <= registeredAt;
}

export function isEligibleForRealizedCost(
  usage: Pick<MaterialUsage, 'status'>,
): boolean {
  return usage.status === 'recorded';
}

export function isEligibleForConsolidatedExecution(
  usage: Pick<MaterialUsage, 'status'>,
): boolean {
  return usage.status === 'recorded';
}
