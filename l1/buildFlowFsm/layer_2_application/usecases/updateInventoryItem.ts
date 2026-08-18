/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import type { InventoryItem } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';
import {
  canBeSelectedForConsumption,
  isValidInventoryItemName,
  isValidInventoryItemReferenceUnitCost,
  isValidInventoryItemUnitOfMeasure,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export interface UpdateInventoryItemInput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
}

export interface UpdateInventoryItemOutput {
  inventoryItemId: string;
  name: string;
  description?: string;
  unitOfMeasure: string;
  referenceUnitCost: number;
  status: string;
}

export async function updateInventoryItem(
  ctx: RequestContext,
  input: UpdateInventoryItemInput,
): Promise<UpdateInventoryItemOutput> {
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');

  return ctx.data.runInTransaction(async () => {
    const existing = await inventoryItems.getById(input.inventoryItemId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `InventoryItem not found: ${input.inventoryItemId}`,
        404,
        { inventoryItemId: input.inventoryItemId },
      );
    }

    if (!canBeSelectedForConsumption(existing)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'InventoryItem must be active and selectable for consumption.',
        400,
        { ruleId: 'selectableInventoryItem', inventoryItemId: existing.inventoryItemId },
      );
    }

    if (!isValidInventoryItemName(input.name)) {
      throw new AppError('VALIDATION_ERROR', 'InventoryItem name must not be empty.', 400, {
        field: 'name',
      });
    }
    if (!isValidInventoryItemUnitOfMeasure(input.unitOfMeasure)) {
      throw new AppError('VALIDATION_ERROR', 'InventoryItem unitOfMeasure must not be empty.', 400, {
        field: 'unitOfMeasure',
      });
    }
    if (!isValidInventoryItemReferenceUnitCost(input.referenceUnitCost)) {
      throw new AppError('VALIDATION_ERROR', 'InventoryItem referenceUnitCost must be non-negative.', 400, {
        field: 'referenceUnitCost',
      });
    }

    const updated: InventoryItem = {
      inventoryItemId: existing.inventoryItemId,
      name: input.name,
      description: input.description ?? null,
      unitOfMeasure: input.unitOfMeasure,
      referenceUnitCost: input.referenceUnitCost,
      status: existing.status,
    };
    await inventoryItems.save(updated);

    return {
      inventoryItemId: updated.inventoryItemId,
      name: updated.name,
      description: updated.description ?? undefined,
      unitOfMeasure: updated.unitOfMeasure,
      referenceUnitCost: updated.referenceUnitCost,
      status: updated.status,
    };
  });
}
