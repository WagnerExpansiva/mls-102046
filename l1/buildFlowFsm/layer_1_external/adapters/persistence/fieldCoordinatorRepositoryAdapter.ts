/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinatorRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
FieldCoordinatorFilter,
IFieldCoordinatorRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.js';
import type { FieldCoordinator } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.js';
interface FieldCoordinatorRow {
details: string | null;
}
interface FieldCoordinatorDetails {
fieldCoordinatorId: string;
platformUserRef: string;
createdAt: string;
updatedAt: string;
}
function toRow(aggregate: FieldCoordinator): FieldCoordinatorRow {
const details: FieldCoordinatorDetails = {
fieldCoordinatorId: aggregate.fieldCoordinatorId,
platformUserRef: aggregate.platformUserRef,
createdAt: aggregate.createdAt,
updatedAt: aggregate.updatedAt,
};
return { details: JSON.stringify(details) };
}
function detailsDefaults(): FieldCoordinatorDetails {
return {
fieldCoordinatorId: '',
platformUserRef: '',
createdAt: '',
updatedAt: '',
};
}
function parseDetails(row: FieldCoordinatorRow): FieldCoordinatorDetails {
let parsed: Partial<FieldCoordinatorDetails> = {};
try {
const value: unknown = JSON.parse(row.details ?? '{}');
parsed = (value ?? {}) as Partial<FieldCoordinatorDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: FieldCoordinatorRow): FieldCoordinator {
const details = parseDetails(row);
return {
fieldCoordinatorId: details.fieldCoordinatorId,
platformUserRef: details.platformUserRef,
createdAt: details.createdAt,
updatedAt: details.updatedAt,
};
}
export function createFieldCoordinatorRepositoryAdapter(
ctx: RequestContext,
): IFieldCoordinatorRepository {
const getTable = () =>
ctx.data.moduleData.getTable<FieldCoordinatorRow>('field_coordinator');
return {
async getById(id) {
const rows = await (await getTable()).findMany();
const row = rows.find((candidate: FieldCoordinatorRow) => parseDetails(candidate).fieldCoordinatorId === id);
return row ? toDomain(row) : null;
},
async list(filter: FieldCoordinatorFilter) {
const rows = await (await getTable()).findMany();
return rows
.map(toDomain)
.filter(
(aggregate: FieldCoordinator) =>
!filter.platformUserRef || aggregate.platformUserRef === filter.platformUserRef,
);
},
async save(aggregate: FieldCoordinator) {
const table = await getTable();
const rows = await table.findMany();
const existing = rows.find(
(candidate: FieldCoordinatorRow) => parseDetails(candidate).fieldCoordinatorId === aggregate.fieldCoordinatorId,
);
const record = toRow(aggregate);
if (existing) {
await table.update({ where: { details: existing.details }, patch: record });
} else {
await table.insert({ record });
}
},
async getByPlatformUserId(platformUserId) {
const rows = await (await getTable()).findMany();
const row = rows.find(
(candidate: FieldCoordinatorRow) => parseDetails(candidate).platformUserRef === platformUserId,
);
return row ? toDomain(row) : null;
},
};
}
