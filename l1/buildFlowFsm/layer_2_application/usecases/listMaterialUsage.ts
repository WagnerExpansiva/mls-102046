/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';

export interface ListMaterialUsageInput {}

export interface MaterialUsageListItem {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export type ListMaterialUsageOutput = MaterialUsageListItem[];

export async function listMaterialUsage(
  ctx: RequestContext,
  input: ListMaterialUsageInput,
): Promise<ListMaterialUsageOutput> {
  void input;
  const materialUsage = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const records = await materialUsage.list({});
  return records.map((record) => ({
    materialUsageId: record.materialUsageId,
    status: record.status,
    projectId: record.projectId,
    inventoryItemId: record.inventoryItemId,
    inventoryBalanceId: record.inventoryBalanceId,
    quantity: record.quantity,
    usageDescription: record.usageDescription,
    consumedOn: record.consumedOn,
    unitCostBasis: record.unitCostBasis,
  }));
}
