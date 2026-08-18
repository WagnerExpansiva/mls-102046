/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectMaterialUsages.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';

export interface InspectProjectMaterialUsagesInput {
  materialUsageId: string;
}

export interface InspectProjectMaterialUsagesOutput {
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

export async function inspectProjectMaterialUsages(
  ctx: RequestContext,
  input: InspectProjectMaterialUsagesInput,
): Promise<InspectProjectMaterialUsagesOutput> {
  if (!input || typeof input.materialUsageId !== 'string' || input.materialUsageId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'materialUsageId is required.', 400);
  }

  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  resolveRepository<IProjectRepository>(ctx, 'Project');

  const materialUsage = await materialUsages.getById(input.materialUsageId);
  if (!materialUsage) {
    throw new AppError(
      'NOT_FOUND',
      `MaterialUsage not found: ${input.materialUsageId}`,
      404,
      { materialUsageId: input.materialUsageId },
    );
  }

  return {
    materialUsageId: materialUsage.materialUsageId,
    status: materialUsage.status,
    projectId: materialUsage.projectId,
    inventoryItemId: materialUsage.inventoryItemId,
    inventoryBalanceId: materialUsage.inventoryBalanceId,
    quantity: materialUsage.quantity,
    usageDescription: materialUsage.usageDescription,
    consumedOn: materialUsage.consumedOn,
    unitCostBasis: materialUsage.unitCostBasis,
  };
}
