/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryBalance.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryBalanceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import type { InventoryBalance } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';
import { isInventoryBalanceValid } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';
import { canBeSelectedForConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export interface CreateInventoryBalanceInput {
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
}

export interface CreateInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export async function createInventoryBalance(
  ctx: RequestContext,
  input: CreateInventoryBalanceInput,
): Promise<CreateInventoryBalanceOutput> {
  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');

  const inventoryItem = await inventoryItems.getById(input.inventoryItemId);
  if (!inventoryItem) {
    throw new AppError(
      'NOT_FOUND',
      `Inventory item not found: ${input.inventoryItemId}`,
      404,
      { inventoryItemId: input.inventoryItemId },
    );
  }
  if (!canBeSelectedForConsumption(inventoryItem)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Inventory item is retired: ${input.inventoryItemId}`,
      400,
      { inventoryItemId: input.inventoryItemId },
    );
  }

  // rule: availableInventoryBalance
  if (!Number.isFinite(input.physicalQuantity) || input.physicalQuantity < 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'physicalQuantity must be greater than or equal to zero.',
      400,
      { ruleId: 'availableInventoryBalance' },
    );
  }
  // rule: availableInventoryBalance
  if (!Number.isFinite(input.applicableUnitCost) || input.applicableUnitCost < 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'applicableUnitCost must be greater than or equal to zero.',
      400,
      { ruleId: 'availableInventoryBalance' },
    );
  }

  const status: InventoryBalance['status'] = input.physicalQuantity > 0 ? 'available' : 'depleted';
  const inventoryBalance: InventoryBalance = {
    inventoryBalanceId: ctx.idGenerator.newId(),
    inventoryItemId: input.inventoryItemId,
    physicalQuantity: input.physicalQuantity,
    applicableUnitCost: input.applicableUnitCost,
    status,
  };

  // rule: availableInventoryBalance
  if (!isInventoryBalanceValid(inventoryBalance)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'The inventory balance does not satisfy the available inventory balance rule.',
      400,
      { ruleId: 'availableInventoryBalance' },
    );
  }

  await ctx.data.runInTransaction(async () => {
    await inventoryBalances.save(inventoryBalance);
  });

  return {
    inventoryBalanceId: inventoryBalance.inventoryBalanceId,
    inventoryItemId: inventoryBalance.inventoryItemId,
    physicalQuantity: inventoryBalance.physicalQuantity,
    applicableUnitCost: inventoryBalance.applicableUnitCost,
    status: inventoryBalance.status,
  };
}
