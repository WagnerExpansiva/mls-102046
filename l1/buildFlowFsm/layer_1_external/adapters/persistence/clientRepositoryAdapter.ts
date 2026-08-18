/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
ClientFilter,
IClientRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { Client } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';
interface ClientRow {
client_id: string;
details: string | null;
}
interface ClientDetails {
clientName: string;
contactEmail: string | null;
contactPhone: string | null;
}
function toRow(client: Client): ClientRow {
const details: ClientDetails = {
clientName: client.clientName,
contactEmail: client.contactEmail,
contactPhone: client.contactPhone,
};
return {
client_id: client.clientId,
details: JSON.stringify(details),
};
}
function detailsDefaults(): ClientDetails {
return {
clientName: '',
contactEmail: null,
contactPhone: null,
};
}
function parseDetails(row: ClientRow): ClientDetails {
let parsed: Partial<ClientDetails> = {};
try {
const value: unknown = JSON.parse(row.details ?? '{}');
parsed = (value ?? {}) as Partial<ClientDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: ClientRow): Client {
const details = parseDetails(row);
return {
clientId: row.client_id,
clientName: details.clientName,
contactEmail: details.contactEmail,
contactPhone: details.contactPhone,
};
}
function isLookupInputError(error: unknown): boolean {
if (!(error instanceof Error)) return false;
const message = error.message.toLowerCase();
return (
message.includes('invalid input') ||
message.includes('invalid uuid') ||
message.includes('invalid format') ||
message.includes('malformed uuid') ||
message.includes('invalid key') ||
message.includes('invalid parameter')
);
}
export function createClientRepositoryAdapter(ctx: RequestContext): IClientRepository {
const getTable = () => ctx.data.moduleData.getTable<ClientRow>('client');
return {
async getById(id) {
let row: ClientRow | null;
try {
row = await (await getTable()).findOne({ where: { client_id: id } });
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `Client ${id} not found`, 404, { clientId: id });
}
throw error;
}
return row ? toDomain(row) : null;
},
async list(filter: ClientFilter) {
const where: Partial<ClientRow> = {};
if (filter.clientId) where.client_id = filter.clientId;
const rows = await (await getTable()).findMany({ where });
return rows
.map(toDomain)
.filter((client: Client) => !filter.clientName || client.clientName === filter.clientName);
},
async save(aggregate) {
const repo = await getTable();
const existing = await repo.findOne({ where: { client_id: aggregate.clientId } });
if (existing) {
await repo.update({
where: { client_id: aggregate.clientId },
patch: toRow(aggregate),
});
} else {
await repo.insert({ record: toRow(aggregate) });
}
},
async findByName(name) {
const rows = await (await getTable()).findMany();
const client = rows.map(toDomain).find((candidate: Client) => candidate.clientName === name);
return client ?? null;
},
};
}
