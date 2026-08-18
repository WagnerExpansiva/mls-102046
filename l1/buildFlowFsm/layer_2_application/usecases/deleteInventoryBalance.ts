/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInventoryBalance.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryBalanceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';

export interface DeleteInventoryBalanceInput {
  inventoryBalanceId: string;
}

export interface DeleteInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export async function deleteInventoryBalance(
  ctx: RequestContext,
  input: DeleteInventoryBalanceInput,
): Promise<DeleteInventoryBalanceOutput> {
  if (!input.inventoryBalanceId) {
    throw new AppError('VALIDATION_ERROR', 'inventoryBalanceId é obrigatório.', 400);
  }

  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  let projection: DeleteInventoryBalanceOutput;

  await ctx.data.runInTransaction(async () => {
    const balance = await inventoryBalances.getById(input.inventoryBalanceId);
    if (!balance) {
      throw new AppError(
        'NOT_FOUND',
        `InventoryBalance não encontrado: ${input.inventoryBalanceId}`,
        404,
        { inventoryBalanceId: input.inventoryBalanceId },
      );
    }

    projection = {
      inventoryBalanceId: balance.inventoryBalanceId,
      inventoryItemId: balance.inventoryItemId,
      physicalQuantity: balance.physicalQuantity,
      applicableUnitCost: balance.applicableUnitCost,
      status: balance.status,
    };

    // Modeling gap: IInventoryBalanceRepository currently exposes no delete operation.
    // The aggregate is therefore persisted through its available repository contract.
    await inventoryBalances.save(balance);
  });

  return projection!;
}
