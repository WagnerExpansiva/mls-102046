/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessmentRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
IScheduleRiskAssessmentRepository,
ScheduleRiskAssessmentFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.js';
import type { ScheduleRiskAssessment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.js';
interface ScheduleRiskAssessmentRow {
project_id: string;
work_task_id: string;
details: string | null;
}
interface ScheduleRiskAssessmentDetails {
taskStatus: string;
dueDate: string;
progressPercent: number | null;
riskIndicators: Record<string, unknown>;
riskExplanation: string;
assessedAt: string;
}
function toRow(assessment: ScheduleRiskAssessment): ScheduleRiskAssessmentRow {
const details: ScheduleRiskAssessmentDetails = {
taskStatus: assessment.taskStatus,
dueDate: assessment.dueDate,
progressPercent: assessment.progressPercent,
riskIndicators: assessment.riskIndicators,
riskExplanation: assessment.riskExplanation,
assessedAt: assessment.assessedAt,
};
return {
project_id: assessment.projectId,
work_task_id: assessment.workTaskId,
details: JSON.stringify(details),
};
}
function detailsDefaults(): ScheduleRiskAssessmentDetails {
return {
taskStatus: '',
dueDate: '',
progressPercent: null,
riskIndicators: {},
riskExplanation: '',
assessedAt: '',
};
}
function parseDetails(row: ScheduleRiskAssessmentRow): ScheduleRiskAssessmentDetails {
let parsed: Partial<ScheduleRiskAssessmentDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ScheduleRiskAssessmentDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: ScheduleRiskAssessmentRow): ScheduleRiskAssessment {
const details = parseDetails(row);
return {
projectId: row.project_id,
workTaskId: row.work_task_id,
taskStatus: details.taskStatus,
dueDate: details.dueDate,
progressPercent: details.progressPercent,
riskIndicators: details.riskIndicators,
riskExplanation: details.riskExplanation,
assessedAt: details.assessedAt,
};
}
function isInputFormatError(error: unknown): boolean {
if (!error || typeof error !== 'object') return false;
const candidate = error as { code?: unknown; name?: unknown; message?: unknown };
const code = String(candidate.code ?? '').toLowerCase();
const name = String(candidate.name ?? '').toLowerCase();
const message = String(candidate.message ?? '').toLowerCase();
return (
code.includes('invalid') ||
code.includes('format') ||
code.includes('uuid') ||
name.includes('invalid') ||
name.includes('format') ||
message.includes('invalid input syntax') ||
message.includes('invalid uuid') ||
message.includes('invalid format')
);
}
export function createScheduleRiskAssessmentRepositoryAdapter(
ctx: RequestContext,
): IScheduleRiskAssessmentRepository {
const getTable = () =>
ctx.data.moduleData.getTable<ScheduleRiskAssessmentRow>('schedule_risk_assessment');
return {
async getById(id) {
let row: ScheduleRiskAssessmentRow | null;
try {
row = await (await getTable()).findOne({ where: { work_task_id: id } });
} catch (error) {
if (isInputFormatError(error)) {
throw new AppError('NOT_FOUND', `Schedule risk assessment ${id} not found`, 404, {
id,
});
}
throw error;
}
return row ? toDomain(row) : null;
},
async list(filter: ScheduleRiskAssessmentFilter) {
const where: Partial<ScheduleRiskAssessmentRow> = {};
if (filter.projectId) where.project_id = filter.projectId;
if (filter.workTaskId) where.work_task_id = filter.workTaskId;
const rows = await (await getTable()).findMany({ where });
return rows
.map(toDomain)
.filter((assessment: ScheduleRiskAssessment) =>
(!filter.taskStatus || assessment.taskStatus === filter.taskStatus) &&
(!filter.dueDate || assessment.dueDate === filter.dueDate) &&
(!filter.assessedAt || assessment.assessedAt === filter.assessedAt),
);
},
async save(aggregate) {
const repo = await getTable();
const row = toRow(aggregate);
const existing = await repo.findOne({
where: {
project_id: aggregate.projectId,
work_task_id: aggregate.workTaskId,
},
});
if (existing) {
await repo.update({
where: {
project_id: aggregate.projectId,
work_task_id: aggregate.workTaskId,
},
patch: row,
});
} else {
await repo.insert({ record: row });
}
},
async listByProjectId(projectId) {
return this.list({ projectId });
},
};
}
