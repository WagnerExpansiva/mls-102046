/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverviewRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
IProjectExecutionOverviewRepository,
ProjectExecutionOverviewFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.js';
import type {
ProjectExecutionOverview,
ProjectExecutionOverviewJson,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';
interface ProjectExecutionOverviewRow {
project_id: string;
details: string | null;
}
interface ProjectExecutionOverviewDetails {
projectName: string;
projectStatus: string;
workTaskIds: string[] | null;
taskSummary: ProjectExecutionOverviewJson;
upcomingCommitments: ProjectExecutionOverviewJson;
timeLogIds: string[] | null;
totalLoggedHours: number;
materialUsageIds: string[] | null;
materialUsageSummary: ProjectExecutionOverviewJson;
actualLaborCost: number;
actualMaterialCost: number;
actualCost: number;
budgetAmount: number;
costVariance: number;
changeOrderIds: string[] | null;
changeOrderImpactSummary: ProjectExecutionOverviewJson;
calculatedAt: string;
}
function toRow(overview: ProjectExecutionOverview): ProjectExecutionOverviewRow {
const details: ProjectExecutionOverviewDetails = {
projectName: overview.projectName,
projectStatus: overview.projectStatus,
workTaskIds: overview.workTaskIds,
taskSummary: overview.taskSummary,
upcomingCommitments: overview.upcomingCommitments,
timeLogIds: overview.timeLogIds,
totalLoggedHours: overview.totalLoggedHours,
materialUsageIds: overview.materialUsageIds,
materialUsageSummary: overview.materialUsageSummary,
actualLaborCost: overview.actualLaborCost,
actualMaterialCost: overview.actualMaterialCost,
actualCost: overview.actualCost,
budgetAmount: overview.budgetAmount,
costVariance: overview.costVariance,
changeOrderIds: overview.changeOrderIds,
changeOrderImpactSummary: overview.changeOrderImpactSummary,
calculatedAt: overview.calculatedAt,
};
return {
project_id: overview.projectId,
details: JSON.stringify(details),
};
}
function detailsDefaults(row: ProjectExecutionOverviewRow): ProjectExecutionOverviewDetails {
return {
projectName: '',
projectStatus: '',
workTaskIds: null,
taskSummary: null,
upcomingCommitments: null,
timeLogIds: null,
totalLoggedHours: 0,
materialUsageIds: null,
materialUsageSummary: null,
actualLaborCost: 0,
actualMaterialCost: 0,
actualCost: 0,
budgetAmount: 0,
costVariance: 0,
changeOrderIds: null,
changeOrderImpactSummary: null,
calculatedAt: '',
};
}
function parseDetails(row: ProjectExecutionOverviewRow): ProjectExecutionOverviewDetails {
let parsed: Partial<ProjectExecutionOverviewDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ProjectExecutionOverviewDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(row), ...parsed };
}
function toDomain(row: ProjectExecutionOverviewRow): ProjectExecutionOverview {
const details = parseDetails(row);
return {
projectId: row.project_id,
projectName: details.projectName,
projectStatus: details.projectStatus,
workTaskIds: details.workTaskIds,
taskSummary: details.taskSummary,
upcomingCommitments: details.upcomingCommitments,
timeLogIds: details.timeLogIds,
totalLoggedHours: details.totalLoggedHours,
materialUsageIds: details.materialUsageIds,
materialUsageSummary: details.materialUsageSummary,
actualLaborCost: details.actualLaborCost,
actualMaterialCost: details.actualMaterialCost,
actualCost: details.actualCost,
budgetAmount: details.budgetAmount,
costVariance: details.costVariance,
changeOrderIds: details.changeOrderIds,
changeOrderImpactSummary: details.changeOrderImpactSummary,
calculatedAt: details.calculatedAt,
};
}
function isLookupInputError(error: unknown): boolean {
if (!error || typeof error !== 'object') return false;
const candidate = error as { code?: unknown; name?: unknown; message?: unknown };
const text = `${String(candidate.code ?? '')} ${String(candidate.name ?? '')} ${String(candidate.message ?? '')}`.toLowerCase();
return /invalid|malformed|format|cast|syntax|uuid|type.*(input|error)|input.*(error|invalid)/.test(text);
}
export function createProjectExecutionOverviewRepositoryAdapter(
ctx: RequestContext,
): IProjectExecutionOverviewRepository {
const getTable = () =>
ctx.data.moduleData.getTable<ProjectExecutionOverviewRow>('project_execution_overview');
return {
async getById(id) {
let row: ProjectExecutionOverviewRow | null;
try {
row = await (await getTable()).findOne({ where: { project_id: id } });
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `Project execution overview ${id} not found`, 404, { id });
}
throw error;
}
return row ? toDomain(row) : null;
},
async list(filter: ProjectExecutionOverviewFilter) {
const where: Partial<ProjectExecutionOverviewRow> = {};
if (filter.projectId) where.project_id = filter.projectId;
const rows = await (await getTable()).findMany({ where });
const overviews = rows.map(toDomain);
return filter.projectStatus
? overviews.filter((overview: ProjectExecutionOverview) => overview.projectStatus === filter.projectStatus)
: overviews;
},
async save(aggregate) {
const repo = await getTable();
const existing = await repo.findOne({ where: { project_id: aggregate.projectId } });
if (existing) {
await repo.update({
where: { project_id: aggregate.projectId },
patch: toRow(aggregate),
});
} else {
await repo.insert({ record: toRow(aggregate) });
}
},
async getByProjectId(projectId) {
let row: ProjectExecutionOverviewRow | null;
try {
row = await (await getTable()).findOne({ where: { project_id: projectId } });
} catch (error) {
if (isLookupInputError(error)) {
throw new AppError('NOT_FOUND', `Project execution overview ${projectId} not found`, 404, {
projectId,
});
}
throw error;
}
return row ? toDomain(row) : null;
},
};
}
