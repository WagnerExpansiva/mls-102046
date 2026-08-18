/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalanceRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IInventoryBalanceRepository,
  InventoryBalanceFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/inventoryBalanceRepository.js';
import type { InventoryBalance } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/inventoryBalance.js';

interface InventoryBalanceRow {
  inventory_balance_id: string;
  inventory_item_id: string;
  status: string;
  details: string | null;
}

interface InventoryBalanceDetails {
  physicalQuantity: number;
  applicableUnitCost: number;
}

function toRow(balance: InventoryBalance): InventoryBalanceRow {
  const details: InventoryBalanceDetails = {
    physicalQuantity: balance.physicalQuantity,
    applicableUnitCost: balance.applicableUnitCost,
  };
  return {
    inventory_balance_id: balance.inventoryBalanceId,
    inventory_item_id: balance.inventoryItemId,
    status: balance.status,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): InventoryBalanceDetails {
  return {
    physicalQuantity: 0,
    applicableUnitCost: 0,
  };
}

function parseDetails(row: InventoryBalanceRow): InventoryBalanceDetails {
  let parsed: Partial<InventoryBalanceDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<InventoryBalanceDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: InventoryBalanceRow): InventoryBalance {
  const details = parseDetails(row);
  return {
    inventoryBalanceId: row.inventory_balance_id,
    inventoryItemId: row.inventory_item_id,
    physicalQuantity: details.physicalQuantity,
    applicableUnitCost: details.applicableUnitCost,
    status: row.status as InventoryBalance['status'],
  };
}

function isInputFormatError(error: unknown): boolean {
  if (error instanceof AppError) return false;
  const record = error as { code?: unknown; name?: unknown; message?: unknown };
  const code = String(record.code ?? '').toLowerCase();
  const name = String(record.name ?? '').toLowerCase();
  const message = String(record.message ?? '').toLowerCase();
  return code.includes('invalid')
    || code.includes('format')
    || name.includes('invalid')
    || name.includes('format')
    || message.includes('invalid uuid')
    || message.includes('invalid input syntax')
    || message.includes('malformed uuid')
    || message.includes('invalid key');
}

export function createInventoryBalanceRepositoryAdapter(
  ctx: RequestContext,
): IInventoryBalanceRepository {
  const getTable = () => ctx.data.moduleData.getTable<InventoryBalanceRow>('inventory_balance');

  const findById = async (inventoryBalanceId: string): Promise<InventoryBalanceRow | null> => {
    try {
      return await (await getTable()).findOne({ where: { inventory_balance_id: inventoryBalanceId } });
    } catch (error) {
      if (isInputFormatError(error)) {
        throw new AppError(
          'NOT_FOUND',
          `InventoryBalance ${inventoryBalanceId} not found`,
          404,
          { inventoryBalanceId },
        );
      }
      throw error;
    }
  };

  return {
    async getById(id) {
      const row = await findById(id);
      return row ? toDomain(row) : null;
    },

    async list(filter: InventoryBalanceFilter) {
      const where: Partial<InventoryBalanceRow> = {};
      if (filter.inventoryBalanceId) where.inventory_balance_id = filter.inventoryBalanceId;
      if (filter.inventoryItemId) where.inventory_item_id = filter.inventoryItemId;
      if (filter.status) where.status = filter.status;
      try {
        const rows = await (await getTable()).findMany({
          where,
          orderBy: { field: 'inventory_balance_id', direction: 'asc' },
        });
        return rows.map(toDomain);
      } catch (error) {
        if (isInputFormatError(error) && filter.inventoryBalanceId) {
          throw new AppError(
            'NOT_FOUND',
            `InventoryBalance ${filter.inventoryBalanceId} not found`,
            404,
            { inventoryBalanceId: filter.inventoryBalanceId },
          );
        }
        throw error;
      }
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { inventory_balance_id: aggregate.inventoryBalanceId },
      });
      if (existing) {
        await repo.update({
          where: { inventory_balance_id: aggregate.inventoryBalanceId },
          patch: toRow(aggregate),
        });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async getByItemId(inventoryItemId) {
      try {
        const row = await (await getTable()).findOne({
          where: { inventory_item_id: inventoryItemId },
        });
        return row ? toDomain(row) : null;
      } catch (error) {
        if (isInputFormatError(error)) {
          throw new AppError(
            'NOT_FOUND',
            `InventoryBalance for item ${inventoryItemId} not found`,
            404,
            { inventoryItemId },
          );
        }
        throw error;
      }
    },
  };
}
