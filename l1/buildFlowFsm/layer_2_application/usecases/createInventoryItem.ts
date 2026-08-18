/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInventoryItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryItemRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import {
isValidInventoryItemName,
isValidInventoryItemReferenceUnitCost,
isValidInventoryItemUnitOfMeasure,
type InventoryItem,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';
export interface CreateInventoryItemInput {
name: string;
description?: string;
unitOfMeasure: string;
referenceUnitCost: number;
}
export interface CreateInventoryItemOutput {
inventoryItemId: string;
name: string;
description?: string;
unitOfMeasure: string;
referenceUnitCost: number;
status: string;
}
export async function createInventoryItem(
ctx: RequestContext,
input: CreateInventoryItemInput,
): Promise<CreateInventoryItemOutput> {
if (!isValidInventoryItemName(input.name)) {
throw new AppError(
'VALIDATION_ERROR',
'O nome do item de estoque não pode estar em branco.',
400,
{ ruleId: 'selectableInventoryItem', field: 'name' },
);
}
if (!isValidInventoryItemUnitOfMeasure(input.unitOfMeasure)) {
throw new AppError(
'VALIDATION_ERROR',
'A unidade de medida não pode estar em branco.',
400,
{ ruleId: 'selectableInventoryItem', field: 'unitOfMeasure' },
);
}
if (!isValidInventoryItemReferenceUnitCost(input.referenceUnitCost)) {
throw new AppError(
'VALIDATION_ERROR',
'O custo unitário de referência deve ser não negativo.',
400,
{ ruleId: 'selectableInventoryItem', field: 'referenceUnitCost' },
);
}
const inventoryItem: InventoryItem = {
inventoryItemId: ctx.idGenerator.newId(),
name: input.name,
description: input.description ?? null,
unitOfMeasure: input.unitOfMeasure,
referenceUnitCost: input.referenceUnitCost,
status: 'active', // rule: selectableInventoryItem
};
await ctx.data.runInTransaction(async (tx: any) => {
const txContext: RequestContext = { ...ctx, data: tx };
const inventoryItems = resolveRepository<IInventoryItemRepository>(txContext, 'InventoryItem');
await inventoryItems.save(inventoryItem);
});
return {
inventoryItemId: inventoryItem.inventoryItemId,
name: inventoryItem.name,
...(inventoryItem.description === null ? {} : { description: inventoryItem.description }),
unitOfMeasure: inventoryItem.unitOfMeasure,
referenceUnitCost: inventoryItem.referenceUnitCost,
status: inventoryItem.status,
};
}
