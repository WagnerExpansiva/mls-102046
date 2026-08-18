/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInventoryBalance.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryBalanceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import {
  canTransitionInventoryBalance,
  isInventoryBalanceValid,
  type InventoryBalance,
  type InventoryBalanceStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';
import { canBeSelectedForConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export interface UpdateInventoryBalanceInput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
}

export interface UpdateInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export async function updateInventoryBalance(
  ctx: RequestContext,
  input: UpdateInventoryBalanceInput,
): Promise<UpdateInventoryBalanceOutput> {
  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');

  if (
    typeof input.inventoryBalanceId !== 'string'
    || input.inventoryBalanceId.trim().length === 0
    || typeof input.inventoryItemId !== 'string'
    || input.inventoryItemId.trim().length === 0
    || !Number.isFinite(input.physicalQuantity)
    || input.physicalQuantity < 0
    || !Number.isFinite(input.applicableUnitCost)
    || input.applicableUnitCost < 0
  ) {
    // rule: availableInventoryBalance
    throw new AppError(
      'VALIDATION_ERROR',
      'inventoryBalanceId e inventoryItemId são obrigatórios; physicalQuantity e applicableUnitCost não podem ser negativos.',
      400,
      { ruleId: 'availableInventoryBalance' },
    );
  }

  return ctx.data.runInTransaction(async () => {
    const balance = await inventoryBalances.getById(input.inventoryBalanceId);
    if (!balance) {
      throw new AppError(
        'NOT_FOUND',
        `InventoryBalance não encontrado: ${input.inventoryBalanceId}`,
        404,
        { inventoryBalanceId: input.inventoryBalanceId },
      );
    }

    if (balance.inventoryItemId !== input.inventoryItemId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'O inventoryItemId informado não corresponde ao saldo de estoque.',
        400,
        { ruleId: 'availableInventoryBalance' },
      );
    }

    const item = await inventoryItems.getById(input.inventoryItemId);
    if (!item) {
      throw new AppError(
        'NOT_FOUND',
        `InventoryItem não encontrado: ${input.inventoryItemId}`,
        404,
        { inventoryItemId: input.inventoryItemId },
      );
    }
    if (!canBeSelectedForConsumption(item)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'O InventoryItem está aposentado e não pode ser usado para atualizar o saldo.',
        400,
        { ruleId: 'availableInventoryBalance', inventoryItemId: input.inventoryItemId },
      );
    }

    const nextStatus: InventoryBalanceStatus = balance.status === 'retired'
      ? 'retired'
      : input.physicalQuantity > 0 ? 'available' : 'depleted';
    const updated: InventoryBalance = {
      ...balance,
      inventoryItemId: input.inventoryItemId,
      physicalQuantity: input.physicalQuantity,
      applicableUnitCost: input.applicableUnitCost,
      status: nextStatus,
    };

    if (balance.status !== nextStatus && !canTransitionInventoryBalance(balance.status, nextStatus)) {
      throw new AppError(
        'CONFLICT',
        `A transição de status ${balance.status} para ${nextStatus} não é permitida.`,
        409,
        { ruleId: 'availableInventoryBalance', inventoryBalanceId: balance.inventoryBalanceId },
      );
    }
    if (!isInventoryBalanceValid(updated)) {
      // rule: availableInventoryBalance
      throw new AppError(
        'VALIDATION_ERROR',
        'O saldo de estoque informado é inválido.',
        400,
        { ruleId: 'availableInventoryBalance' },
      );
    }

    await inventoryBalances.save(updated);
    return {
      inventoryBalanceId: updated.inventoryBalanceId,
      inventoryItemId: updated.inventoryItemId,
      physicalQuantity: updated.physicalQuantity,
      applicableUnitCost: updated.applicableUnitCost,
      status: updated.status,
    };
  });
}
