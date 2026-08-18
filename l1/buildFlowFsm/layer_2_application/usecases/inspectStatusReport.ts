/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface InspectStatusReportInput {
  statusReportId: string;
}

export interface InspectStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt?: string;
  publishedByUserId?: string;
  withdrawnAt?: string;
}

function toCommunicatedRisks(value: StatusReport['communicatedRisks']): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

export async function inspectStatusReport(
  ctx: RequestContext,
  input: InspectStatusReportInput,
): Promise<InspectStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const report = await statusReports.getById(input.statusReportId);

  if (!report) {
    throw new AppError(
      'NOT_FOUND',
      `Status report not found: ${input.statusReportId}`,
      404,
      { statusReportId: input.statusReportId },
    );
  }

  // rule: clientVisibleStatusReport
  if (report.status !== 'published') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only published status reports are client-visible.',
      400,
      { ruleId: 'clientVisibleStatusReport', status: report.status },
    );
  }

  return {
    statusReportId: report.statusReportId,
    projectId: report.projectId,
    status: report.status,
    title: report.title,
    content: report.content,
    communicatedRisks: toCommunicatedRisks(report.communicatedRisks),
    generatedAt: report.generatedAt,
    generatedByUserId: report.generatedByUserId,
    publishedAt: report.publishedAt ?? undefined,
    publishedByUserId: report.publishedByUserId ?? undefined,
    withdrawnAt: report.withdrawnAt ?? undefined,
  };
}
