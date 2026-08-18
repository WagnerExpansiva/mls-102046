/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IMaterialUsageRepository,
  MaterialUsageFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

interface MaterialUsageRow {
  material_usage_id: string;
  status: string;
  project_id: string;
  inventory_item_id: string;
  inventory_balance_id: string;
  details: string | null;
}

interface MaterialUsageDetails {
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}

function toRow(usage: MaterialUsage): MaterialUsageRow {
  const details: MaterialUsageDetails = {
    quantity: usage.quantity,
    usageDescription: usage.usageDescription,
    consumedOn: usage.consumedOn,
    unitCostBasis: usage.unitCostBasis,
  };
  return {
    material_usage_id: usage.materialUsageId,
    status: usage.status,
    project_id: usage.projectId,
    inventory_item_id: usage.inventoryItemId,
    inventory_balance_id: usage.inventoryBalanceId,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): MaterialUsageDetails {
  return {
    quantity: 0,
    usageDescription: '',
    consumedOn: '',
    unitCostBasis: 0,
  };
}

function parseDetails(row: MaterialUsageRow): MaterialUsageDetails {
  let parsed: Partial<MaterialUsageDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<MaterialUsageDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: MaterialUsageRow): MaterialUsage {
  const details = parseDetails(row);
  return {
    materialUsageId: row.material_usage_id,
    status: row.status as MaterialUsage['status'],
    projectId: row.project_id,
    inventoryItemId: row.inventory_item_id,
    inventoryBalanceId: row.inventory_balance_id,
    quantity: details.quantity,
    usageDescription: details.usageDescription,
    consumedOn: details.consumedOn,
    unitCostBasis: details.unitCostBasis,
  };
}

function isLookupInputError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const candidate = error as { code?: unknown; message?: unknown };
  const code = String(candidate.code ?? '').toLowerCase();
  const message = String(candidate.message ?? '').toLowerCase();
  return (
    code.includes('invalid') ||
    code.includes('format') ||
    code.includes('malformed') ||
    /invalid|malformed|format|uuid|syntax/.test(message)
  );
}

export function createMaterialUsageRepositoryAdapter(
  ctx: RequestContext,
): IMaterialUsageRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<MaterialUsageRow>('material_usage');

  return {
    async getById(id) {
      let row: MaterialUsageRow | null;
      try {
        row = await (await getTable()).findOne({
          where: { material_usage_id: id },
        });
      } catch (error) {
        if (isLookupInputError(error)) {
          throw new AppError('NOT_FOUND', `MaterialUsage ${id} not found`, 404, {
            materialUsageId: id,
          });
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: MaterialUsageFilter) {
      const where: Partial<MaterialUsageRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.inventoryItemId) where.inventory_item_id = filter.inventoryItemId;
      if (filter.inventoryBalanceId) where.inventory_balance_id = filter.inventoryBalanceId;
      if (filter.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({ where });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { material_usage_id: aggregate.materialUsageId },
      });
      if (existing) {
        await repo.update({
          where: { material_usage_id: aggregate.materialUsageId },
          patch: toRow(aggregate),
        });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async listByProjectId(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
      });
      return rows.map(toDomain);
    },
  };
}
