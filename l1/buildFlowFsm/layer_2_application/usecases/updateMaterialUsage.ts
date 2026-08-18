/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateMaterialUsage.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { IInventoryBalanceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { MaterialUsage } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
import {
  hasNonNegativeMaterialUsageUnitCost,
  hasPositiveMaterialUsageQuantity,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
import { canBeSelectedForConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';
import { canSatisfyInventoryConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';

export interface UpdateMaterialUsageInput {
  materialUsageId: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface UpdateMaterialUsageOutput {
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

export async function updateMaterialUsage(
  ctx: RequestContext,
  input: UpdateMaterialUsageInput,
): Promise<UpdateMaterialUsageOutput> {
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  return ctx.data.runInTransaction(async () => {
    const current = await materialUsages.getById(input.materialUsageId);
    if (!current) {
      throw new AppError('NOT_FOUND', `MaterialUsage not found: ${input.materialUsageId}`, 404, {
        materialUsageId: input.materialUsageId,
      });
    }

    const project = await projects.getById(input.projectId);
    if (!project) {
      throw new AppError('NOT_FOUND', `Project not found: ${input.projectId}`, 404, {
        ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory',
      });
    }
    if (project.status !== 'active') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Material usage requires an active project.',
        400,
        { ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory' },
      );
    }

    const inventoryItem = await inventoryItems.getById(input.inventoryItemId);
    if (!inventoryItem) {
      throw new AppError('NOT_FOUND', `InventoryItem not found: ${input.inventoryItemId}`, 404, {
        ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory',
      });
    }
    if (!canBeSelectedForConsumption(inventoryItem)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Material usage requires an active inventory item.',
        400,
        { ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory' },
      );
    }

    const balance = await inventoryBalances.getById(input.inventoryBalanceId);
    if (!balance) {
      throw new AppError('NOT_FOUND', `InventoryBalance not found: ${input.inventoryBalanceId}`, 404, {
        ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory',
      });
    }
    if (balance.inventoryItemId !== input.inventoryItemId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The inventory balance does not belong to the selected inventory item.',
        400,
        { ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory' },
      );
    }
    if (!hasPositiveMaterialUsageQuantity({ quantity: input.quantity })) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Material usage quantity must be positive.',
        400,
        { ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory' },
      );
    }
    if (!canSatisfyInventoryConsumption(balance, input.quantity)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The inventory balance is unavailable or has insufficient physical quantity.',
        400,
        { ruleId: 'materialUsageRequiresActiveProjectAndAvailableInventory' },
      );
    }

    const updated: MaterialUsage = {
      materialUsageId: current.materialUsageId,
      status: current.status,
      projectId: input.projectId,
      inventoryItemId: input.inventoryItemId,
      inventoryBalanceId: input.inventoryBalanceId,
      quantity: input.quantity,
      usageDescription: input.usageDescription,
      consumedOn: input.consumedOn,
      unitCostBasis: input.unitCostBasis,
    };

    if (!hasNonNegativeMaterialUsageUnitCost(updated)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Material usage unit cost basis must be non-negative.',
        400,
        { ruleId: 'costEligibleMaterialUsage' },
      );
    }
    // rule: costEligibleMaterialUsage — preserve the supplied cost basis for realized costing.
    await materialUsages.save(updated);

    return {
      materialUsageId: updated.materialUsageId,
      status: updated.status,
      projectId: updated.projectId,
      inventoryItemId: updated.inventoryItemId,
      inventoryBalanceId: updated.inventoryBalanceId,
      quantity: updated.quantity,
      usageDescription: updated.usageDescription,
      consumedOn: updated.consumedOn,
      unitCostBasis: updated.unitCostBasis,
    };
  });
}
