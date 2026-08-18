/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.ts" enhancement="_blank"/>
export type InventoryBalanceStatus = 'available' | 'depleted' | 'retired';

export interface InventoryBalance {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: InventoryBalanceStatus;
}

export const INVENTORY_BALANCE_STATUS_TRANSITIONS: Record<InventoryBalanceStatus, InventoryBalanceStatus[]> = {
  available: ['depleted', 'retired'],
  depleted: ['retired'],
  retired: [],
};

export function canTransitionInventoryBalance(
  from: InventoryBalanceStatus,
  to: InventoryBalanceStatus,
): boolean {
  return INVENTORY_BALANCE_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isInventoryBalanceValid(balance: Pick<InventoryBalance, 'physicalQuantity' | 'applicableUnitCost' | 'status'>): boolean {
  if (balance.physicalQuantity < 0 || balance.applicableUnitCost < 0) {
    return false;
  }
  if (balance.status === 'available' && balance.physicalQuantity <= 0) {
    return false;
  }
  if (balance.physicalQuantity === 0 && balance.status !== 'depleted' && balance.status !== 'retired') {
    return false;
  }
  if (balance.status === 'depleted' && balance.physicalQuantity !== 0) {
    return false;
  }
  return true;
}

export function canSatisfyInventoryConsumption(
  balance: Pick<InventoryBalance, 'physicalQuantity' | 'status'>,
  quantity: number,
): boolean {
  return quantity >= 0
    && balance.status === 'available'
    && quantity <= balance.physicalQuantity;
}

export function consumeInventoryBalance(
  balance: Pick<InventoryBalance, 'physicalQuantity' | 'status'>,
  quantity: number,
): { physicalQuantity: number; status: InventoryBalanceStatus } | null {
  if (!canSatisfyInventoryConsumption(balance, quantity)) {
    return null;
  }
  const physicalQuantity = balance.physicalQuantity - quantity;
  return {
    physicalQuantity,
    status: physicalQuantity === 0 ? 'depleted' : balance.status,
  };
}
