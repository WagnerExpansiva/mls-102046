/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimelineRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IProjectTimelineRepository,
  ProjectTimelineFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.js';
import type {
  ProjectTimeline,
  ProjectTimelineScheduleEntry,
  ProjectTimelineTask,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.js';

interface ProjectTimelineRow {
  project_id: string;
  details: string | null;
}

interface ProjectTimelineDetails {
  workTasks: ProjectTimelineTask[] | null;
  scheduleEntries: ProjectTimelineScheduleEntry[] | null;
}

function toRow(timeline: ProjectTimeline): ProjectTimelineRow {
  const details: ProjectTimelineDetails = {
    workTasks: timeline.workTasks,
    scheduleEntries: timeline.scheduleEntries,
  };
  return {
    project_id: timeline.projectId,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): ProjectTimelineDetails {
  return {
    workTasks: null,
    scheduleEntries: null,
  };
}

function parseDetails(row: ProjectTimelineRow): ProjectTimelineDetails {
  let parsed: Partial<ProjectTimelineDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ProjectTimelineDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: ProjectTimelineRow): ProjectTimeline {
  const details = parseDetails(row);
  return {
    projectId: row.project_id,
    workTasks: details.workTasks,
    scheduleEntries: details.scheduleEntries,
  };
}

function isInputFormatError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return /invalid|malformed|format|uuid|syntax|cast/i.test(error.message);
}

function notFound(projectId: string): AppError {
  return new AppError(
    'NOT_FOUND',
    `Project timeline ${projectId} not found`,
    404,
    { projectId },
  );
}

export function createProjectTimelineRepositoryAdapter(
  ctx: RequestContext,
): IProjectTimelineRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ProjectTimelineRow>('project_timeline');

  const findByProjectId = async (
    projectId: string,
  ): Promise<ProjectTimelineRow | null> => {
    try {
      return await (await getTable()).findOne({ where: { project_id: projectId } });
    } catch (error) {
      if (isInputFormatError(error)) throw notFound(projectId);
      throw error;
    }
  };

  return {
    async getById(id) {
      const row = await findByProjectId(id);
      return row ? toDomain(row) : null;
    },

    async list(filter: ProjectTimelineFilter) {
      const where: Partial<ProjectTimelineRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      const rows = await (
        await getTable()
      ).findMany({ where, orderBy: { field: 'project_id', direction: 'asc' } });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await findByProjectId(aggregate.projectId);
      const record = toRow(aggregate);
      if (existing) {
        await repo.update({
          where: { project_id: aggregate.projectId },
          patch: record,
        });
      } else {
        await repo.insert({ record });
      }
    },

    async getByProjectId(projectId) {
      const row = await findByProjectId(projectId);
      return row ? toDomain(row) : null;
    },
  };
}
