/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateInventoryItem.ts" enhancement="_blank"/>
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import type { InventoryItem } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';
import { canBeSelectedForConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export interface LocateInventoryItemInput {}

export interface LocateInventoryItemOutputItem {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export type LocateInventoryItemOutput = LocateInventoryItemOutputItem[];

export async function locateInventoryItem(
  ctx: RequestContext,
  _input: LocateInventoryItemInput,
): Promise<LocateInventoryItemOutput> {
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const items = await inventoryItems.list({});

  const selectableItems = items.filter((item: InventoryItem) => {
    // rule: selectableInventoryItem
    return canBeSelectedForConsumption(item);
  });

  return selectableItems.map((item) => ({
    inventoryItemId: item.inventoryItemId,
    name: item.name,
    ...(item.description === null ? {} : { description: item.description }),
    unitOfMeasure: item.unitOfMeasure,
    referenceUnitCost: item.referenceUnitCost,
    status: item.status,
  }));
}
