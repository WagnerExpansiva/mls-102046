/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffMaterialUsageToFieldCoordinator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface HandoffMaterialUsageToFieldCoordinatorInput {
  materialUsageId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface HandoffMaterialUsageToFieldCoordinatorOutput {
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

export async function handoffMaterialUsageToFieldCoordinator(
  ctx: RequestContext,
  input: HandoffMaterialUsageToFieldCoordinatorInput,
): Promise<HandoffMaterialUsageToFieldCoordinatorOutput> {
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const materialUsage = await materialUsages.getById(input.materialUsageId);

  if (!materialUsage) {
    throw new AppError(
      'NOT_FOUND',
      `MaterialUsage not found: ${input.materialUsageId}`,
      404,
      { materialUsageId: input.materialUsageId },
    );
  }

  if (materialUsage.status !== 'recorded') {
    throw new AppError(
      'CONFLICT',
      'Only recorded material usage can be handed off to the field coordinator.',
      409,
      { materialUsageId: materialUsage.materialUsageId, status: materialUsage.status },
    );
  }

  const updatedMaterialUsage: MaterialUsage = {
    ...materialUsage,
    quantity: input.quantity,
    usageDescription: input.usageDescription,
    consumedOn: input.consumedOn,
    unitCostBasis: input.unitCostBasis,
  };

  await ctx.data.runInTransaction(async () => {
    await materialUsages.save(updatedMaterialUsage);
  });

  return {
    materialUsageId: updatedMaterialUsage.materialUsageId,
    status: updatedMaterialUsage.status,
    projectId: updatedMaterialUsage.projectId,
    inventoryItemId: updatedMaterialUsage.inventoryItemId,
    inventoryBalanceId: updatedMaterialUsage.inventoryBalanceId,
    quantity: updatedMaterialUsage.quantity,
    usageDescription: updatedMaterialUsage.usageDescription,
    consumedOn: updatedMaterialUsage.consumedOn,
    unitCostBasis: updatedMaterialUsage.unitCostBasis,
  };
}
