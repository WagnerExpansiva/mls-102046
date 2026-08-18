/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
ITimeLogRepository,
TimeLogFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
interface TimeLogRow {
time_log_id: string;
status: string;
work_task_id: string;
field_worker_id: string;
details: string | null;
}
interface TimeLogDetails {
workDate: string;
hoursWorked: number;
hourlyLaborCost: number;
}
function toRow(timeLog: TimeLog): TimeLogRow {
const details: TimeLogDetails = {
workDate: timeLog.workDate,
hoursWorked: timeLog.hoursWorked,
hourlyLaborCost: timeLog.hourlyLaborCost,
};
return {
time_log_id: timeLog.timeLogId,
status: timeLog.status,
work_task_id: timeLog.workTaskId,
field_worker_id: timeLog.fieldWorkerId,
details: JSON.stringify(details),
};
}
function detailsDefaults(): TimeLogDetails {
return {
workDate: '',
hoursWorked: 0,
hourlyLaborCost: 0,
};
}
function parseDetails(row: TimeLogRow): TimeLogDetails {
let parsed: Partial<TimeLogDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as unknown as Partial<TimeLogDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: TimeLogRow): TimeLog {
const details = parseDetails(row);
return {
timeLogId: row.time_log_id,
status: row.status as TimeLog['status'],
workTaskId: row.work_task_id,
fieldWorkerId: row.field_worker_id,
workDate: details.workDate,
hoursWorked: details.hoursWorked,
hourlyLaborCost: details.hourlyLaborCost,
};
}
function isLookupInputError(error: unknown): boolean {
if (!(error instanceof Error)) return false;
const message = error.message.toLowerCase();
return (
message.includes('invalid uuid') ||
message.includes('invalid input syntax') ||
message.includes('malformed uuid') ||
message.includes('invalid key') ||
message.includes('invalid identifier')
);
}
export function createTimeLogRepositoryAdapter(ctx: RequestContext): ITimeLogRepository {
const getTable = () => ctx.data.moduleData.getTable<TimeLogRow>('time_log');
return {
async getById(id) {
let row: TimeLogRow | null;
try {
row = await (await getTable()).findOne({ where: { time_log_id: id } });
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `TimeLog ${id} not found`, 404, { timeLogId: id });
}
throw error;
}
return row ? toDomain(row) : null;
},
async list(filter: TimeLogFilter) {
const where: Partial<TimeLogRow> = {};
if (filter.timeLogId) where.time_log_id = filter.timeLogId;
if (filter.workTaskId) where.work_task_id = filter.workTaskId;
if (filter.fieldWorkerId) where.field_worker_id = filter.fieldWorkerId;
if (filter.status) where.status = filter.status;
const rows = await (await getTable()).findMany({ where });
const timeLogs = rows.map(toDomain);
return filter.workDate === undefined
? timeLogs
: timeLogs.filter((timeLog: TimeLog) => timeLog.workDate === filter.workDate);
},
async save(aggregate) {
const repository = await getTable();
const existing = await repository.findOne({
where: { time_log_id: aggregate.timeLogId },
});
if (existing) {
await repository.update({
where: { time_log_id: aggregate.timeLogId },
patch: toRow(aggregate),
});
} else {
await repository.insert({ record: toRow(aggregate) });
}
},
async listByFieldWorkerId(fieldWorkerId) {
const rows = await (
await getTable()
).findMany({ where: { field_worker_id: fieldWorkerId } });
return rows.map(toDomain);
},
};
}
