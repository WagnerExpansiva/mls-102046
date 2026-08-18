/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IWorkTaskRepository,
  WorkTaskFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type {
  WorkTask,
  WorkTaskStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

interface WorkTaskRow {
  work_task_id: string;
  project_id: string;
  assigned_field_worker_id: string | null;
  status: string;
  details: string | null;
}

interface WorkTaskDetails {
  description: string;
  dueDate: string;
  progressUpdate: string | null;
  createdAt: string;
  updatedAt: string;
}

function toRow(task: WorkTask): WorkTaskRow {
  const details: WorkTaskDetails = {
    description: task.description,
    dueDate: task.dueDate,
    progressUpdate: task.progressUpdate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
  return {
    work_task_id: task.workTaskId,
    project_id: task.projectId,
    assigned_field_worker_id: task.assignedFieldWorkerId,
    status: task.status,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): WorkTaskDetails {
  return {
    description: '',
    dueDate: '',
    progressUpdate: null,
    createdAt: '',
    updatedAt: '',
  };
}

function parseDetails(row: WorkTaskRow): WorkTaskDetails {
  let parsed: Partial<WorkTaskDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<WorkTaskDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: WorkTaskRow): WorkTask {
  const details = parseDetails(row);
  return {
    workTaskId: row.work_task_id,
    projectId: row.project_id,
    assignedFieldWorkerId: row.assigned_field_worker_id ?? '',
    description: details.description,
    dueDate: details.dueDate,
    status: row.status as WorkTaskStatus,
    progressUpdate: details.progressUpdate,
    createdAt: details.createdAt,
    updatedAt: details.updatedAt,
  };
}

function isLookupInputError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const candidate = error as Error & { code?: string; statusCode?: number };
  const message = error.message.toLowerCase();
  return (
    candidate.code === 'INVALID_INPUT' ||
    candidate.code === 'INVALID_UUID' ||
    candidate.statusCode === 400 ||
    message.includes('invalid uuid') ||
    message.includes('invalid input syntax') ||
    message.includes('invalid key') ||
    message.includes('malformed uuid')
  );
}

export function createWorkTaskRepositoryAdapter(ctx: RequestContext): IWorkTaskRepository {
  const getTable = () => ctx.data.moduleData.getTable<WorkTaskRow>('work_task');

  return {
    async getById(id) {
      let row: WorkTaskRow | null;
      try {
        row = await (await getTable()).findOne({ where: { work_task_id: id } });
      } catch (error) {
        if (isLookupInputError(error)) {
          throw new AppError('NOT_FOUND', `WorkTask ${id} not found`, 404, { id });
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: WorkTaskFilter) {
      const where: Partial<WorkTaskRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.assignedFieldWorkerId) {
        where.assigned_field_worker_id = filter.assignedFieldWorkerId;
      }
      if (filter.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'work_task_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const row = toRow(aggregate);
      const existing = await repo.findOne({ where: { work_task_id: aggregate.workTaskId } });
      if (existing) {
        await repo.update({
          where: { work_task_id: aggregate.workTaskId },
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
