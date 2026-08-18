/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUserRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IPlatformUserRepository,
  PlatformUserFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.js';
import type { PlatformUser } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.js';

interface PlatformUserRow {
  platform_user_id: string;
  details: string | null;
}

interface PlatformUserDetails {}

function toRow(platformUser: PlatformUser): PlatformUserRow {
  return {
    platform_user_id: platformUser.platformUserId,
    details: JSON.stringify({}),
  };
}

function detailsDefaults(): PlatformUserDetails {
  return {};
}

function parseDetails(row: PlatformUserRow): PlatformUserDetails {
  let parsed: Partial<PlatformUserDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<PlatformUserDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: PlatformUserRow): PlatformUser {
  parseDetails(row);
  return {
    platformUserId: row.platform_user_id,
  };
}

function isInvalidIdentifierError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return (
    message.includes('invalid input syntax') ||
    message.includes('invalid uuid') ||
    message.includes('uuid') && message.includes('invalid') ||
    message.includes('format') && message.includes('id')
  );
}

export function createPlatformUserRepositoryAdapter(ctx: RequestContext): IPlatformUserRepository {
  const getTable = () => ctx.data.moduleData.getTable<PlatformUserRow>('platform_user');

  return {
    async getById(id) {
      if (!isUuid(id)) {
        throw new AppError('NOT_FOUND', `PlatformUser ${id} not found`, 404, { platformUserId: id });
      }
      let row: PlatformUserRow | null;
      try {
        row = await (await getTable()).findOne({ where: { platform_user_id: id } });
      } catch (error) {
        if (isInvalidIdentifierError(error)) {
          throw new AppError('NOT_FOUND', `PlatformUser ${id} not found`, 404, { platformUserId: id });
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: PlatformUserFilter) {
      const where: Partial<PlatformUserRow> = {};
      if (filter.platformUserId) {
        if (!isUuid(filter.platformUserId)) return [];
        where.platform_user_id = filter.platformUserId;
      }
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'platform_user_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { platform_user_id: aggregate.platformUserId },
      });
      if (existing) {
        await repo.update({
          where: { platform_user_id: aggregate.platformUserId },
          patch: toRow(aggregate),
        });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByEmail(_email) {
      return null;
    },
  };
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
