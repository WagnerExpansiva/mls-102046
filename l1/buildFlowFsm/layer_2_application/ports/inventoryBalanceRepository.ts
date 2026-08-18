/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.ts" enhancement="_blank"/>
import type { InventoryBalance } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';

export type InventoryBalanceId = string;
export type InventoryItemId = string;

export interface InventoryBalanceFilter {
  inventoryBalanceId?: InventoryBalanceId;
  inventoryItemId?: InventoryItemId;
  status?: InventoryBalance['status'];
}

export interface IInventoryBalanceRepository {
  getById(id: InventoryBalanceId): Promise<InventoryBalance | null>;
  list(filter: InventoryBalanceFilter): Promise<InventoryBalance[]>;
  save(aggregate: InventoryBalance): Promise<void>;
  getByItemId(inventoryItemId: InventoryItemId): Promise<InventoryBalance | null>;
}
