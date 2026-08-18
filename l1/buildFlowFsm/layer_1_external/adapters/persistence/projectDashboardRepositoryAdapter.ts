/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboardRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
IProjectDashboardRepository,
ProjectDashboardFilter,
ProjectDashboardId,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.js';
import type {
ActiveProject,
CostAttentionProject,
ProjectDashboard,
UpcomingTask,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.js';
interface ProjectDashboardRow {
details: string | null;
}
interface ProjectDashboardDetails {
activeProjects: ActiveProject[];
activeProjectCount: number;
totalBudget: number;
totalActualCost: number;
budgetVariance: number;
costAttentionProjects: CostAttentionProject[];
upcomingTasks: UpcomingTask[];
}
function toRow(dashboard: ProjectDashboard): ProjectDashboardRow {
const details: ProjectDashboardDetails = {
activeProjects: dashboard.activeProjects,
activeProjectCount: dashboard.activeProjectCount,
totalBudget: dashboard.totalBudget,
totalActualCost: dashboard.totalActualCost,
budgetVariance: dashboard.budgetVariance,
costAttentionProjects: dashboard.costAttentionProjects,
upcomingTasks: dashboard.upcomingTasks,
};
return { details: JSON.stringify(details) };
}
function detailsDefaults(): ProjectDashboardDetails {
return {
activeProjects: [],
activeProjectCount: 0,
totalBudget: 0,
totalActualCost: 0,
budgetVariance: 0,
costAttentionProjects: [],
upcomingTasks: [],
};
}
function parseDetails(row: ProjectDashboardRow): ProjectDashboardDetails {
let parsed: Partial<ProjectDashboardDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ProjectDashboardDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(), ...parsed };
}
function toDomain(row: ProjectDashboardRow): ProjectDashboard {
const details = parseDetails(row);
return {
activeProjects: details.activeProjects ?? [],
activeProjectCount: details.activeProjectCount ?? 0,
totalBudget: details.totalBudget ?? 0,
totalActualCost: details.totalActualCost ?? 0,
budgetVariance: details.budgetVariance ?? 0,
costAttentionProjects: details.costAttentionProjects ?? [],
upcomingTasks: details.upcomingTasks ?? [],
};
}
function includesProject(dashboard: ProjectDashboard, projectId: string): boolean {
return dashboard.activeProjects.some((project) => project.projectId === projectId);
}
export function createProjectDashboardRepositoryAdapter(
ctx: RequestContext,
): IProjectDashboardRepository {
const getTable = () =>
ctx.data.moduleData.getTable<ProjectDashboardRow>('project_dashboard');
return {
async getById(_id: ProjectDashboardId): Promise<ProjectDashboard | null> {
const row = await (await getTable()).findOne({ where: {} });
return row ? toDomain(row) : null;
},
async list(filter: ProjectDashboardFilter): Promise<ProjectDashboard[]> {
const rows = await (await getTable()).findMany();
const dashboards = rows.map(toDomain);
if (!filter.projectId) return dashboards;
return dashboards.filter((dashboard: ProjectDashboard) => includesProject(dashboard, filter.projectId as string));
},
async save(aggregate: ProjectDashboard): Promise<void> {
const repository = await getTable();
const existing = await repository.findOne({ where: {} });
if (existing) {
await repository.update({ where: {}, patch: toRow(aggregate) });
} else {
await repository.insert({ record: toRow(aggregate) });
}
},
async getByProjectId(projectId: string): Promise<ProjectDashboard | null> {
const rows = await (await getTable()).findMany();
for (const row of rows) {
const dashboard = toDomain(row);
if (includesProject(dashboard, projectId)) return dashboard;
}
return null;
},
};
}
