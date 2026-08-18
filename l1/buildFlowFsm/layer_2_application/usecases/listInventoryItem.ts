/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryItem.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';

export interface ListInventoryItemOutputItem {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export type ListInventoryItemOutput = ListInventoryItemOutputItem[];

export interface ListInventoryItemInput {}

export async function listInventoryItem(
  ctx: RequestContext,
  input: ListInventoryItemInput,
): Promise<ListInventoryItemOutput> {
  void input;
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const records = await inventoryItems.list({});
  return records.map((item) => ({
    inventoryItemId: item.inventoryItemId,
    name: item.name,
    ...(item.description === null ? {} : { description: item.description }),
    unitOfMeasure: item.unitOfMeasure,
    referenceUnitCost: item.referenceUnitCost,
    status: item.status,
  }));
}
