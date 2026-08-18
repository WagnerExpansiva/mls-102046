/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.ts" enhancement="_blank"/>
export type InventoryItemStatus = 'active' | 'retired';

export interface InventoryItem {
  inventoryItemId: string;
  name: string;
  description: string | null;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: InventoryItemStatus;
}

export const INVENTORY_ITEM_STATUS_TRANSITIONS: Record<InventoryItemStatus, InventoryItemStatus[]> = {
  active: ['retired'],
  retired: [],
};

export function canTransitionInventoryItem(
  from: InventoryItemStatus,
  to: InventoryItemStatus,
): boolean {
  return INVENTORY_ITEM_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isValidInventoryItemName(name: string): boolean {
  return name.trim().length > 0;
}

export function isValidInventoryItemUnitOfMeasure(unitOfMeasure: string): boolean {
  return unitOfMeasure.trim().length > 0;
}

export function isValidInventoryItemReferenceUnitCost(referenceUnitCost: number): boolean {
  return referenceUnitCost >= 0;
}

export function canBeSelectedForConsumption(
  item: Pick<InventoryItem, 'status'>,
): boolean {
  return item.status === 'active';
}
