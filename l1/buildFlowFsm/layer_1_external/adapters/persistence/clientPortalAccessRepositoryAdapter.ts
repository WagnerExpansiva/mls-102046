/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccessRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  ClientPortalAccessFilter,
  IClientPortalAccessRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.js';
import type { ClientPortalAccess } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.js';

interface ClientPortalAccessRow {
  client_portal_access_id: string;
  client_id: string;
  platform_user_id: string;
  status: string;
  details: string | null;
}

function toRow(access: ClientPortalAccess): ClientPortalAccessRow {
  return {
    client_portal_access_id: access.clientPortalAccessId,
    client_id: access.clientId,
    platform_user_id: access.platformUserId,
    status: access.status,
    details: null,
  };
}

function toDomain(row: ClientPortalAccessRow): ClientPortalAccess {
  return {
    clientPortalAccessId: row.client_portal_access_id,
    clientId: row.client_id,
    platformUserId: row.platform_user_id,
    status: row.status as ClientPortalAccess['status'],
  };
}

function isLookupInputRejection(error: unknown): boolean {
  if (error instanceof AppError) return false;
  if (!error || typeof error !== 'object') return false;
  const candidate = error as { code?: unknown; message?: unknown };
  const code = String(candidate.code ?? '').toLowerCase();
  const message = String(candidate.message ?? '').toLowerCase();
  return (
    code.includes('invalid') ||
    code.includes('format') ||
    code.includes('malformed') ||
    code.includes('cast') ||
    message.includes('invalid input syntax') ||
    message.includes('invalid uuid') ||
    message.includes('malformed') ||
    message.includes('cast')
  );
}

export function createClientPortalAccessRepositoryAdapter(
  ctx: RequestContext,
): IClientPortalAccessRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ClientPortalAccessRow>('client_portal_access');

  return {
    async getById(id) {
      let row: ClientPortalAccessRow | null;
      try {
        row = await (await getTable()).findOne({
          where: { client_portal_access_id: id },
        });
      } catch (error) {
        if (isLookupInputRejection(error)) {
          throw new AppError(
            'NOT_FOUND',
            `ClientPortalAccess ${id} not found`,
            404,
            { id },
          );
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: ClientPortalAccessFilter) {
      const where: Partial<ClientPortalAccessRow> = {};
      if (filter.clientId) where.client_id = filter.clientId;
      if (filter.platformUserId) where.platform_user_id = filter.platformUserId;
      if (filter.status) where.status = filter.status;
      const rows = await (
        await getTable()
      ).findMany({ where, orderBy: { field: 'client_portal_access_id', direction: 'asc' } });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const record = toRow(aggregate);
      const existing = await repo.findOne({
        where: { client_portal_access_id: aggregate.clientPortalAccessId },
      });
      if (existing) {
        await repo.update({
          where: { client_portal_access_id: aggregate.clientPortalAccessId },
          patch: record,
        });
      } else {
        await repo.insert({ record });
      }
    },

    async getByClientId(clientId) {
      const row = await (
        await getTable()
      ).findOne({ where: { client_id: clientId } });
      return row ? toDomain(row) : null;
    },
  };
}
