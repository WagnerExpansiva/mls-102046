/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';

export interface DeleteInventoryItemInput {
  inventoryItemId: string;
}

export interface DeleteInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description?: string | null;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

interface InventoryItemDeletionRepository extends IInventoryItemRepository {
  delete(id: string): Promise<void>;
}

export async function deleteInventoryItem(
  ctx: RequestContext,
  input: DeleteInventoryItemInput,
): Promise<DeleteInventoryItemOutput> {
  const inventoryItems = resolveRepository<InventoryItemDeletionRepository>(ctx, 'InventoryItem');

  return ctx.data.runInTransaction(async () => {
    const inventoryItem = await inventoryItems.getById(input.inventoryItemId);
    if (!inventoryItem) {
      throw new AppError(
        'NOT_FOUND',
        `InventoryItem not found: ${input.inventoryItemId}`,
        404,
        { inventoryItemId: input.inventoryItemId },
      );
    }

    const output: DeleteInventoryItemOutput = {
      inventoryItemId: inventoryItem.inventoryItemId,
      name: inventoryItem.name,
      description: inventoryItem.description,
      unitOfMeasure: inventoryItem.unitOfMeasure,
      referenceUnitCost: inventoryItem.referenceUnitCost,
      status: inventoryItem.status,
    };

    await inventoryItems.delete(input.inventoryItemId);
    return output;
  });
}
