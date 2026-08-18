/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.ts" enhancement="_blank"/>
import type { InventoryItem } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export type InventoryItemId = string;
export type InventoryItemSku = string;

export interface InventoryItemFilter {
  inventoryItemId?: InventoryItemId;
  status?: InventoryItem['status'];
}

export interface IInventoryItemRepository {
  getById(id: InventoryItemId): Promise<InventoryItem | null>;
  list(filter: InventoryItemFilter): Promise<InventoryItem[]>;
  save(aggregate: InventoryItem): Promise<void>;
  findBySku(sku: InventoryItemSku): Promise<InventoryItem | null>;
}
