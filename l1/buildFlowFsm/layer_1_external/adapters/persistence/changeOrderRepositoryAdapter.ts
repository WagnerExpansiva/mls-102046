/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.ts" enhancement="blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
ChangeOrder,
ChangeOrderStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type {
ChangeOrderFilter,
IChangeOrderRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
interface ChangeOrderRow {
change_order_id: string;
status: string;
details: string | null;
}
interface ChangeOrderDetails {
clientRef: string;
projectRef: string;
description: string;
scopeImpact: string;
scheduleImpact: string;
changeAmount: number;
submittedAt: string;
forwardedForClientApprovalAt: string | null;
}
function toRow(order: ChangeOrder): ChangeOrderRow {
const details: ChangeOrderDetails = {
clientRef: order.clientRef,
projectRef: order.projectRef,
description: order.description,
scopeImpact: order.scopeImpact,
scheduleImpact: order.scheduleImpact,
changeAmount: order.changeAmount,
submittedAt: order.submittedAt,
forwardedForClientApprovalAt: order.forwardedForClientApprovalAt,
};
return {
change_order_id: order.changeOrderId,
status: order.status,
details: JSON.stringify(details),
};
}
function detailsDefaults(): ChangeOrderDetails {
return {
clientRef: '',
projectRef: '',
description: '',
scopeImpact: '',
scheduleImpact: '',
changeAmount: 0,
submittedAt: '',
forwardedForClientApprovalAt: null,
};
}
function parseDetails(row: ChangeOrderRow): ChangeOrderDetails {
let parsed: Partial<ChangeOrderDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ChangeOrderDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: ChangeOrderRow): ChangeOrder {
const details = parseDetails(row);
return {
changeOrderId: row.change_order_id,
clientRef: details.clientRef,
projectRef: details.projectRef,
description: details.description,
scopeImpact: details.scopeImpact,
scheduleImpact: details.scheduleImpact,
changeAmount: details.changeAmount,
submittedAt: details.submittedAt,
forwardedForClientApprovalAt: details.forwardedForClientApprovalAt,
status: row.status as ChangeOrderStatus,
};
}
function isLookupInputError(error: unknown): boolean {
if (!(error instanceof Error)) return false;
return /invalid|input|format|uuid|malformed|cast/i.test(error.message);
}
export function createChangeOrderRepositoryAdapter(
ctx: RequestContext,
): IChangeOrderRepository {
const getTable = () =>
ctx.data.moduleData.getTable<ChangeOrderRow>('change_order');
return {
async getById(id) {
let row: ChangeOrderRow | null;
try {
row = await (await getTable()).findOne({
where: { change_order_id: id },
});
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `ChangeOrder ${id} not found`, 404, {
changeOrderId: id,
});
}
throw error;
}
return row ? toDomain(row) : null;
},
async list(filter: ChangeOrderFilter) {
const where: Partial<ChangeOrderRow> = {};
if (filter.status) where.status = filter.status;
if (filter.changeOrderId) where.change_order_id = filter.changeOrderId;
const rows = await (await getTable()).findMany({
where,
orderBy: { field: 'change_order_id', direction: 'asc' },
});
return rows
.map(toDomain)
.filter((order: ChangeOrder) =>
filter.clientRef === undefined || order.clientRef === filter.clientRef,
)
.filter((order: ChangeOrder) =>
filter.projectRef === undefined || order.projectRef === filter.projectRef,
);
},
async save(aggregate) {
const repo = await getTable();
const row = toRow(aggregate);
const existing = await repo.findOne({
where: { change_order_id: aggregate.changeOrderId },
});
if (existing) {
await repo.update({
where: { change_order_id: aggregate.changeOrderId },
patch: row,
});
} else {
await repo.insert({ record: row });
}
},
async listByProjectId(projectId) {
const rows = await (await getTable()).findMany({
orderBy: { field: 'change_order_id', direction: 'asc' },
});
return rows.map(toDomain).filter((order: ChangeOrder) => order.projectRef === projectId);
},
};
}
