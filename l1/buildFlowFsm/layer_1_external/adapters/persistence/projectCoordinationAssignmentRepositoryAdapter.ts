/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignmentRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IProjectCoordinationAssignmentRepository,
  ProjectCoordinationAssignmentFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.js';
import type { ProjectCoordinationAssignment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.js';

interface ProjectCoordinationAssignmentRow {
  project_coordination_assignment_id: string;
  project_id: string;
  field_coordinator_id: string;
  status: string;
  details: string | null;
}

function toRow(
  aggregate: ProjectCoordinationAssignment,
): ProjectCoordinationAssignmentRow {
  return {
    project_coordination_assignment_id: aggregate.projectCoordinationAssignmentId,
    project_id: aggregate.projectId,
    field_coordinator_id: aggregate.fieldCoordinatorId,
    status: aggregate.status,
    details: null,
  };
}

function toDomain(
  row: ProjectCoordinationAssignmentRow,
): ProjectCoordinationAssignment {
  return {
    projectCoordinationAssignmentId: row.project_coordination_assignment_id,
    projectId: row.project_id,
    fieldCoordinatorId: row.field_coordinator_id,
    status: row.status as ProjectCoordinationAssignment['status'],
  };
}

function isDriverInputFormatError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return /invalid|malformed|format|uuid|syntax|cast|parse/i.test(error.message);
}

async function findById(
  table: {
    findOne(input: {
      where: Partial<ProjectCoordinationAssignmentRow>;
    }): Promise<ProjectCoordinationAssignmentRow | null>;
  },
  id: string,
): Promise<ProjectCoordinationAssignmentRow | null> {
  try {
    return await table.findOne({
      where: { project_coordination_assignment_id: id },
    });
  } catch (error) {
    if (isDriverInputFormatError(error)) {
      throw new AppError(
        'NOT_FOUND',
        `ProjectCoordinationAssignment ${id} not found`,
        404,
        { projectCoordinationAssignmentId: id },
      );
    }
    throw error;
  }
}

export function createProjectCoordinationAssignmentRepositoryAdapter(
  ctx: RequestContext,
): IProjectCoordinationAssignmentRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ProjectCoordinationAssignmentRow>(
      'project_coordination_assignment',
    );

  return {
    async getById(id) {
      const row = await findById(await getTable(), id);
      return row ? toDomain(row) : null;
    },

    async list(filter: ProjectCoordinationAssignmentFilter) {
      const where: Partial<ProjectCoordinationAssignmentRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.fieldCoordinatorId) {
        where.field_coordinator_id = filter.fieldCoordinatorId;
      }
      if (filter.status) where.status = filter.status;
      const rows = await (
        await getTable()
      ).findMany({
        where,
        orderBy: {
          field: 'project_coordination_assignment_id',
          direction: 'asc',
        },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const table = await getTable();
      const existing = await table.findOne({
        where: {
          project_coordination_assignment_id:
            aggregate.projectCoordinationAssignmentId,
        },
      });
      const record = toRow(aggregate);
      if (existing) {
        await table.update({
          where: {
            project_coordination_assignment_id:
              aggregate.projectCoordinationAssignmentId,
          },
          patch: record,
        });
      } else {
        await table.insert({ record });
      }
    },

    async listByProjectId(projectId) {
      const rows = await (
        await getTable()
      ).findMany({
        where: { project_id: projectId },
        orderBy: {
          field: 'project_coordination_assignment_id',
          direction: 'asc',
        },
      });
      return rows.map(toDomain);
    },
  };
}
