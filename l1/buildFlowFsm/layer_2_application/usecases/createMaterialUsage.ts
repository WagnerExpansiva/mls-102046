/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.ts" enhancement="_blank"/>
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
import {
  canSatisfyInventoryConsumption,
  consumeInventoryBalance,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';
import { canBeSelectedForConsumption } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

export interface CreateMaterialUsageInput {
  inventoryBalanceId: string;
  inventoryItemId: string;
  projectId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

export interface CreateMaterialUsageOutput {
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

const RULE_ID = 'materialUsageRequiresActiveProjectAndAvailableInventory';

function rejectRule(message: string): never {
  throw new AppError('VALIDATION_ERROR', message, 400, { ruleId: RULE_ID });
}

export async function createMaterialUsage(
  ctx: RequestContext,
  input: CreateMaterialUsageInput,
): Promise<CreateMaterialUsageOutput> {
  if (
    !input ||
    typeof input.inventoryBalanceId !== 'string' || input.inventoryBalanceId.trim().length === 0 ||
    typeof input.inventoryItemId !== 'string' || input.inventoryItemId.trim().length === 0 ||
    typeof input.projectId !== 'string' || input.projectId.trim().length === 0 ||
    typeof input.usageDescription !== 'string' || input.usageDescription.trim().length === 0 ||
    typeof input.consumedOn !== 'string' || input.consumedOn.trim().length === 0 ||
    typeof input.quantity !== 'number' || !Number.isFinite(input.quantity) ||
    typeof input.unitCostBasis !== 'number' || !Number.isFinite(input.unitCostBasis)
  ) {
    throw new AppError('VALIDATION_ERROR', 'Os campos obrigatórios do consumo de material são inválidos.', 400);
  }

  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const inventoryBalances = resolveRepository<IInventoryBalanceRepository>(ctx, 'InventoryBalance');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  return ctx.data.runInTransaction(async () => {
    const project = await projects.getById(input.projectId);
    if (!project) {
      rejectRule(`Projeto não encontrado: ${input.projectId}.`);
    }
    if (project.status !== 'active') {
      rejectRule(`O projeto ${input.projectId} não está ativo.`);
    }

    const inventoryItem = await inventoryItems.getById(input.inventoryItemId);
    if (!inventoryItem) {
      rejectRule(`Item de estoque não encontrado: ${input.inventoryItemId}.`);
    }
    if (!canBeSelectedForConsumption(inventoryItem)) {
      rejectRule(`O item de estoque ${input.inventoryItemId} não está ativo.`);
    }

    const balance = await inventoryBalances.getById(input.inventoryBalanceId);
    if (!balance) {
      rejectRule(`Saldo de estoque não encontrado: ${input.inventoryBalanceId}.`);
    }
    if (balance.inventoryItemId !== input.inventoryItemId) {
      rejectRule('O saldo de estoque não pertence ao item informado.');
    }
    if (!hasPositiveMaterialUsageQuantity({ quantity: input.quantity })) {
      throw new AppError('VALIDATION_ERROR', 'A quantidade consumida deve ser maior que zero.', 400);
    }
    if (!hasNonNegativeMaterialUsageUnitCost({ unitCostBasis: input.unitCostBasis })) {
      throw new AppError('VALIDATION_ERROR', 'O custo unitário deve ser não negativo.', 400);
    }
    if (!canSatisfyInventoryConsumption(balance, input.quantity)) {
      rejectRule('O saldo de estoque não está disponível ou não possui quantidade física suficiente.');
    }

    const consumedBalance = consumeInventoryBalance(balance, input.quantity);
    if (!consumedBalance) {
      rejectRule('O saldo de estoque não pode satisfazer o consumo informado.');
    }

    const materialUsage: MaterialUsage = {
      materialUsageId: ctx.idGenerator.newId(),
      status: 'recorded',
      projectId: input.projectId,
      inventoryItemId: input.inventoryItemId,
      inventoryBalanceId: input.inventoryBalanceId,
      quantity: input.quantity,
      usageDescription: input.usageDescription,
      consumedOn: input.consumedOn,
      unitCostBasis: input.unitCostBasis,
    };

    await inventoryBalances.save({
      ...balance,
      physicalQuantity: consumedBalance.physicalQuantity,
      status: consumedBalance.status,
    });
    await materialUsages.save(materialUsage);

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
  });
}
