/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IInventoryItemRepository,
  InventoryItemFilter,
  InventoryItemSku,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryItemRepository.js';
import type { InventoryItem } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryItem.js';

interface InventoryItemRow {
  inventory_item_id: string;
  status: string;
  details: string | null;
}

interface InventoryItemDetails {
  name: string;
  description: string | null;
  unitOfMeasure: string;
  referenceUnitCost: number;
}

function toRow(item: InventoryItem): InventoryItemRow {
  const details: InventoryItemDetails = {
    name: item.name,
    description: item.description,
    unitOfMeasure: item.unitOfMeasure,
    referenceUnitCost: item.referenceUnitCost,
  };
  return {
    inventory_item_id: item.inventoryItemId,
    status: item.status,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): InventoryItemDetails {
  return {
    name: '',
    description: null,
    unitOfMeasure: '',
    referenceUnitCost: 0,
  };
}

function parseDetails(row: InventoryItemRow): InventoryItemDetails {
  let parsed: Partial<InventoryItemDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<InventoryItemDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: InventoryItemRow): InventoryItem {
  const details = parseDetails(row);
  return {
    inventoryItemId: row.inventory_item_id,
    name: details.name,
    description: details.description,
    unitOfMeasure: details.unitOfMeasure,
    referenceUnitCost: details.referenceUnitCost,
    status: row.status as InventoryItem['status'],
  };
}

function isLookupInputError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) return false;
  const candidate = error as { code?: unknown; message?: unknown };
  const code = String(candidate.code ?? '').toLowerCase();
  const message = String(candidate.message ?? '').toLowerCase();
  return (
    code === '22p02' ||
    code === 'invalid_input' ||
    code === 'invalid_format' ||
    code === 'validation_error' ||
    message.includes('invalid input syntax') ||
    message.includes('invalid uuid') ||
    message.includes('invalid format')
  );
}

export function createInventoryItemRepositoryAdapter(
  ctx: RequestContext,
): IInventoryItemRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<InventoryItemRow>('inventory_item');

  return {
    async getById(id) {
      let row: InventoryItemRow | null;
      try {
        row = await (await getTable()).findOne({
          where: { inventory_item_id: id },
        });
      } catch (error) {
        if (isLookupInputError(error)) {
          throw new AppError('NOT_FOUND', `Inventory item ${id} not found`, 404, {
            inventoryItemId: id,
          });
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: InventoryItemFilter) {
      const where: Partial<InventoryItemRow> = {};
      if (filter.inventoryItemId) {
        where.inventory_item_id = filter.inventoryItemId;
      }
      if (filter.status) {
        where.status = filter.status;
      }
      const rows = await (
        await getTable()
      ).findMany({
        where,
        orderBy: { field: 'inventory_item_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repository = await getTable();
      const existing = await repository.findOne({
        where: { inventory_item_id: aggregate.inventoryItemId },
      });
      if (existing) {
        await repository.update({
          where: { inventory_item_id: aggregate.inventoryItemId },
          patch: toRow(aggregate),
        });
      } else {
        await repository.insert({ record: toRow(aggregate) });
      }
    },

    async findBySku(sku: InventoryItemSku) {
      // InventoryItem has no SKU field and the table definition declares no SKU
      // column. The port is retained for compatibility, but no SKU can match.
      void sku;
      return null;
    },
  };
}
