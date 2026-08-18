/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorkerRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
FieldWorkerFilter,
IFieldWorkerRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';
import type { FieldWorker } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.js';
interface FieldWorkerRow {
platform_user_id: string;
details: string | null;
}
interface FieldWorkerDetails {
fieldWorkerId: string;
createdAt: string;
updatedAt: string;
}
function toRow(fieldWorker: FieldWorker): FieldWorkerRow {
const details: FieldWorkerDetails = {
fieldWorkerId: fieldWorker.fieldWorkerId,
createdAt: fieldWorker.createdAt,
updatedAt: fieldWorker.updatedAt,
};
return {
platform_user_id: fieldWorker.platformUserId,
details: JSON.stringify(details),
};
}
function detailsDefaults(row: FieldWorkerRow): FieldWorkerDetails {
return {
fieldWorkerId: row.platform_user_id,
createdAt: '',
updatedAt: '',
};
}
function parseDetails(row: FieldWorkerRow): FieldWorkerDetails {
let parsed: Partial<FieldWorkerDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<FieldWorkerDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(row), ...parsed };
}
function toDomain(row: FieldWorkerRow): FieldWorker {
const details = parseDetails(row);
return {
fieldWorkerId: details.fieldWorkerId,
platformUserId: row.platform_user_id,
createdAt: details.createdAt,
updatedAt: details.updatedAt,
};
}
function isLookupInputError(error: unknown): boolean {
if (!(error instanceof Error)) return false;
const message = error.message.toLowerCase();
return (
message.includes('invalid') ||
message.includes('malformed') ||
message.includes('format') ||
message.includes('uuid') ||
message.includes('cast')
);
}
export function createFieldWorkerRepositoryAdapter(ctx: RequestContext): IFieldWorkerRepository {
const getTable = () =>
ctx.data.moduleData.getTable<FieldWorkerRow>('field_worker');
return {
async getById(id) {
let row: FieldWorkerRow | null;
try {
row = await (await getTable()).findOne({
where: { platform_user_id: id },
});
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `FieldWorker ${id} not found`, 404, {
fieldWorkerId: id,
});
}
throw error;
}
if (!row) return null;
const fieldWorker = toDomain(row);
return fieldWorker.fieldWorkerId === id || row.platform_user_id === id
? fieldWorker
: null;
},
async list(filter: FieldWorkerFilter) {
const where: Partial<FieldWorkerRow> = {};
if (filter.platformUserId) {
where.platform_user_id = filter.platformUserId;
}
const rows = await (await getTable()).findMany({ where });
return rows
.map(toDomain)
.filter((fieldWorker: FieldWorker) =>
filter.fieldWorkerId ? fieldWorker.fieldWorkerId === filter.fieldWorkerId : true,
);
},
async save(aggregate) {
const repository = await getTable();
const existing = await repository.findOne({
where: { platform_user_id: aggregate.platformUserId },
});
const record = toRow(aggregate);
if (existing) {
await repository.update({
where: { platform_user_id: aggregate.platformUserId },
patch: record,
});
} else {
await repository.insert({ record });
}
},
async getByPlatformUserId(platformUserId) {
let row: FieldWorkerRow | null;
try {
row = await (await getTable()).findOne({
where: { platform_user_id: platformUserId },
});
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError(
'NOT_FOUND',
`FieldWorker for platform user ${platformUserId} not found`,
404,
{ platformUserId },
);
}
throw error;
}
return row ? toDomain(row) : null;
},
};
}
