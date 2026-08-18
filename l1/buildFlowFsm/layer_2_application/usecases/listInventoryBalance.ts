/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInventoryBalance.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryBalanceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';

export interface ListInventoryBalanceInput {}

export interface ListInventoryBalanceOutput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  physicalQuantity: number;
  applicableUnitCost: number;
  status: string;
}

export async function listInventoryBalance(
  ctx: RequestContext,
  _input: ListInventoryBalanceInput,
): Promise<ListInventoryBalanceOutput[]> {
  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  const records = await inventoryBalances.list({});
  return records.map((record) => ({
    inventoryBalanceId: record.inventoryBalanceId,
    inventoryItemId: record.inventoryItemId,
    physicalQuantity: record.physicalQuantity,
    applicableUnitCost: record.applicableUnitCost,
    status: record.status,
  }));
}
