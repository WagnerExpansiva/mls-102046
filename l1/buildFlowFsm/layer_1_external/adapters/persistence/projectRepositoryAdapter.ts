/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IProjectRepository,
  ProjectFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type {
  Project,
  ProjectStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

interface ProjectRow {
  project_id: string;
  client_id: string;
  status: string;
  details: string | null;
}

interface ProjectDetails {
  name: string;
  address: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

function toRow(project: Project): ProjectRow {
  const details: ProjectDetails = {
    name: project.name,
    address: project.address,
    authorizedBudget: project.authorizedBudget,
    plannedStartDate: project.plannedStartDate,
    plannedEndDate: project.plannedEndDate,
  };
  return {
    project_id: project.projectId,
    client_id: project.clientId,
    status: project.status,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): ProjectDetails {
  return {
    name: '',
    address: '',
    authorizedBudget: 0,
    plannedStartDate: '',
    plannedEndDate: '',
  };
}

function parseDetails(row: ProjectRow): ProjectDetails {
  let parsed: Partial<ProjectDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ProjectDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: ProjectRow): Project {
  const details = parseDetails(row);
  return {
    projectId: row.project_id,
    clientId: row.client_id,
    name: details.name,
    address: details.address,
    status: row.status as ProjectStatus,
    authorizedBudget: details.authorizedBudget,
    plannedStartDate: details.plannedStartDate,
    plannedEndDate: details.plannedEndDate,
  };
}

function isInputFormatError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const record = error as { code?: unknown; message?: unknown };
  const code = String(record.code ?? '');
  if (code === '22P02' || code === 'INVALID_INPUT' || code === 'INPUT_FORMAT') {
    return true;
  }
  const message = String(record.message ?? '').toLowerCase();
  return /invalid (input|uuid)|malformed uuid|invalid .*format|cannot cast|cast .*uuid/.test(message);
}

export function createProjectRepositoryAdapter(ctx: RequestContext): IProjectRepository {
  const getTable = () => ctx.data.moduleData.getTable<ProjectRow>('project');

  async function findByProjectId(projectId: string): Promise<ProjectRow | null> {
    try {
      return await (await getTable()).findOne({ where: { project_id: projectId } });
    } catch (error: unknown) {
      if (isInputFormatError(error)) {
        throw new AppError('NOT_FOUND', `Project ${projectId} not found`, 404, { projectId });
      }
      throw error;
    }
  }

  return {
    async getById(id) {
      const row = await findByProjectId(id);
      return row ? toDomain(row) : null;
    },

    async list(filter: ProjectFilter) {
      const where: Partial<ProjectRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.clientId) where.client_id = filter.clientId;
      if (filter.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'project_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const table = await getTable();
      const existing = await table.findOne({ where: { project_id: aggregate.projectId } });
      const record = toRow(aggregate);
      if (existing) {
        await table.update({ where: { project_id: aggregate.projectId }, patch: record });
      } else {
        await table.insert({ record });
      }
    },

    async listByClientId(clientId) {
      const rows = await (await getTable()).findMany({
        where: { client_id: clientId },
        orderBy: { field: 'project_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
