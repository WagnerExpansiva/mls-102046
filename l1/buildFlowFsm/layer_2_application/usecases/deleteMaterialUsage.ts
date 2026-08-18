/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteMaterialUsage.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
import { canTransitionMaterialUsage } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
export interface DeleteMaterialUsageInput {
materialUsageId: string;
}
export interface DeleteMaterialUsageOutput {
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
export async function deleteMaterialUsage(
ctx: RequestContext,
input: DeleteMaterialUsageInput,
): Promise<DeleteMaterialUsageOutput> {
const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
let captured: MaterialUsage | null = null;
await ctx.data.runInTransaction(async () => {
const usage = await materialUsages.getById(input.materialUsageId);
if (!usage) {
throw new AppError(
'NOT_FOUND',
`MaterialUsage not found: ${input.materialUsageId}`,
404,
{ materialUsageId: input.materialUsageId },
);
}
captured = usage;
if (usage.status === 'recorded') {
if (!canTransitionMaterialUsage(usage.status, 'voided')) {
throw new AppError(
'CONFLICT',
`MaterialUsage cannot be deleted from status ${usage.status}.`,
409,
{ materialUsageId: usage.materialUsageId, status: usage.status },
);
}
await materialUsages.save({ ...usage, status: 'voided' });
}
});
if (!captured) {
throw new AppError(
'NOT_FOUND',
`MaterialUsage not found: ${input.materialUsageId}`,
404,
{ materialUsageId: input.materialUsageId },
);
}
const result = captured as MaterialUsage;
return {
materialUsageId: result.materialUsageId,
status: result.status,
projectId: result.projectId,
inventoryItemId: result.inventoryItemId,
inventoryBalanceId: result.inventoryBalanceId,
quantity: result.quantity,
usageDescription: result.usageDescription,
consumedOn: result.consumedOn,
unitCostBasis: result.unitCostBasis,
};
}
