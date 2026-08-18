/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IStatusReportRepository,
  StatusReportFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

interface StatusReportRow {
  status_report_id: string;
  project_id: string;
  status: string;
  generated_by_user_id: string;
  published_by_user_id: string | null;
  details: string | null;
}

interface StatusReportDetails {
  title: string;
  content: string;
  communicatedRisks: unknown | null;
  generatedAt: string;
  publishedAt: string | null;
  withdrawnAt: string | null;
}

function toRow(report: StatusReport): StatusReportRow {
  const details: StatusReportDetails = {
    title: report.title,
    content: report.content,
    communicatedRisks: report.communicatedRisks,
    generatedAt: report.generatedAt,
    publishedAt: report.publishedAt,
    withdrawnAt: report.withdrawnAt,
  };
  return {
    status_report_id: report.statusReportId,
    project_id: report.projectId,
    status: report.status,
    generated_by_user_id: report.generatedByUserId,
    published_by_user_id: report.publishedByUserId,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: StatusReportRow): StatusReportDetails {
  return {
    title: '',
    content: '',
    communicatedRisks: null,
    generatedAt: '',
    publishedAt: null,
    withdrawnAt: null,
  };
}

function parseDetails(row: StatusReportRow): StatusReportDetails {
  let parsed: Partial<StatusReportDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<StatusReportDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: StatusReportRow): StatusReport {
  const details = parseDetails(row);
  return {
    statusReportId: row.status_report_id,
    projectId: row.project_id,
    status: row.status as StatusReport['status'],
    title: details.title,
    content: details.content,
    communicatedRisks: details.communicatedRisks,
    generatedAt: details.generatedAt,
    generatedByUserId: row.generated_by_user_id,
    publishedAt: details.publishedAt,
    publishedByUserId: row.published_by_user_id,
    withdrawnAt: details.withdrawnAt,
  };
}

function isDriverInputError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return (
    message.includes('invalid input syntax') ||
    message.includes('invalid uuid') ||
    message.includes('invalid identifier') ||
    message.includes('invalid id') ||
    message.includes('malformed uuid')
  );
}

export function createStatusReportRepositoryAdapter(ctx: RequestContext): IStatusReportRepository {
  const getTable = () => ctx.data.moduleData.getTable<StatusReportRow>('status_report');

  return {
    async getById(id) {
      try {
        const row = await (await getTable()).findOne({ where: { status_report_id: id } });
        return row ? toDomain(row) : null;
      } catch (error) {
        if (isDriverInputError(error)) {
          throw new AppError('NOT_FOUND', `StatusReport ${id} not found`, 404, { statusReportId: id });
        }
        throw error;
      }
    },

    async list(filter: StatusReportFilter) {
      const where: Partial<StatusReportRow> = {};
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'details', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { status_report_id: aggregate.statusReportId } });
      const record = toRow(aggregate);
      if (existing) {
        await repo.update({ where: { status_report_id: aggregate.statusReportId }, patch: record });
      } else {
        await repo.insert({ record });
      }
    },

    async listByProjectId(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
        orderBy: { field: 'details', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
