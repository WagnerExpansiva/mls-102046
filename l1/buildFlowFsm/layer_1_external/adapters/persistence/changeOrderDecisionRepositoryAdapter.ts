/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecisionRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
ChangeOrderDecisionFilter,
IChangeOrderDecisionRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.js';
import type {
ChangeOrderDecision,
ChangeOrderDecisionValue,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';
interface ChangeOrderDecisionRow {
change_order_decision_id: string;
decision: string;
details: string | null;
}
interface ChangeOrderDecisionDetails {
changeOrder: string;
madeByPlatformUser: string;
decidedAt: string;
}
function toRow(decision: ChangeOrderDecision): ChangeOrderDecisionRow {
const details: ChangeOrderDecisionDetails = {
changeOrder: decision.changeOrder,
madeByPlatformUser: decision.madeByPlatformUser,
decidedAt: decision.decidedAt,
};
return {
change_order_decision_id: decision.changeOrderDecisionId,
decision: decision.decision,
details: JSON.stringify(details),
};
}
function detailsDefaults(): ChangeOrderDecisionDetails {
return {
changeOrder: '',
madeByPlatformUser: '',
decidedAt: '',
};
}
function parseDetails(row: ChangeOrderDecisionRow): ChangeOrderDecisionDetails {
let parsed: Partial<ChangeOrderDecisionDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ChangeOrderDecisionDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: ChangeOrderDecisionRow): ChangeOrderDecision {
const details = parseDetails(row);
return {
changeOrderDecisionId: row.change_order_decision_id,
changeOrder: details.changeOrder,
madeByPlatformUser: details.madeByPlatformUser,
decision: row.decision as ChangeOrderDecisionValue,
decidedAt: details.decidedAt,
};
}
function isLookupInputError(error: unknown): boolean {
if (!error || typeof error !== 'object') return false;
const candidate = error as { code?: unknown; name?: unknown; message?: unknown };
const code = String(candidate.code ?? '').toLowerCase();
const name = String(candidate.name ?? '').toLowerCase();
const message = String(candidate.message ?? '').toLowerCase();
return code.includes('invalid')
|| code.includes('format')
|| name.includes('invalid')
|| name.includes('format')
|| message.includes('invalid uuid')
|| message.includes('invalid input syntax')
|| message.includes('malformed uuid')
|| message.includes('invalid format');
}
export function createChangeOrderDecisionRepositoryAdapter(
ctx: RequestContext,
): IChangeOrderDecisionRepository {
const getTable = () =>
ctx.data.moduleData.getTable<ChangeOrderDecisionRow>('change_order_decision');
return {
async getById(id) {
try {
const row = await (await getTable()).findOne({
where: { change_order_decision_id: id },
});
return row ? toDomain(row) : null;
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError(
'NOT_FOUND',
`ChangeOrderDecision ${id} not found`,
404,
{ id },
);
}
throw error;
}
},
async list(filter: ChangeOrderDecisionFilter) {
const where: Partial<ChangeOrderDecisionRow> = {};
if (filter.changeOrder || filter.madeByPlatformUser) {
const rows = await (await getTable()).findMany({
where,
orderBy: { field: 'change_order_decision_id', direction: 'asc' },
});
return rows
.map(toDomain)
.filter((decision: ChangeOrderDecision) =>
(!filter.changeOrder || decision.changeOrder === filter.changeOrder)
&& (!filter.madeByPlatformUser
|| decision.madeByPlatformUser === filter.madeByPlatformUser)
&& (!filter.decision || decision.decision === filter.decision),
);
}
if (filter.decision) where.decision = filter.decision;
const rows = await (await getTable()).findMany({
where,
orderBy: { field: 'change_order_decision_id', direction: 'asc' },
});
return rows.map(toDomain);
},
async save(aggregate) {
const repository = await getTable();
const existing = await repository.findOne({
where: { change_order_decision_id: aggregate.changeOrderDecisionId },
});
if (existing) {
await repository.update({
where: { change_order_decision_id: aggregate.changeOrderDecisionId },
patch: toRow(aggregate),
});
} else {
await repository.insert({ record: toRow(aggregate) });
}
},
async listByChangeOrderId(changeOrderId) {
const rows = await (await getTable()).findMany({
orderBy: { field: 'change_order_decision_id', direction: 'asc' },
});
return rows
.map(toDomain)
.filter((decision: ChangeOrderDecision) => decision.changeOrder === changeOrderId);
},
};
}
