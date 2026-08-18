/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface DeleteStatusReportInput {
  statusReportId: string;
}

export interface DeleteStatusReportOutput {
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

function toDeletedStatusReportOutput(report: StatusReport): DeleteStatusReportOutput {
  const output: DeleteStatusReportOutput = {
    statusReportId: report.statusReportId,
    projectId: report.projectId,
    status: report.status,
    title: report.title,
    content: report.content,
    generatedAt: report.generatedAt,
    generatedByUserId: report.generatedByUserId,
  };

  if (typeof report.communicatedRisks === 'string') {
    output.communicatedRisks = report.communicatedRisks;
  }
  if (report.publishedAt !== null) {
    output.publishedAt = report.publishedAt;
  }
  if (report.publishedByUserId !== null) {
    output.publishedByUserId = report.publishedByUserId;
  }
  if (report.withdrawnAt !== null) {
    output.withdrawnAt = report.withdrawnAt;
  }

  return output;
}

export async function deleteStatusReport(
  ctx: RequestContext,
  input: DeleteStatusReportInput,
): Promise<DeleteStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const report = await statusReports.getById(input.statusReportId);

  if (!report) {
    throw new AppError(
      'NOT_FOUND',
      `StatusReport not found: ${input.statusReportId}`,
      404,
      { statusReportId: input.statusReportId },
    );
  }

  const deletedReport = toDeletedStatusReportOutput(report);
  await ctx.data.runInTransaction(async () => {
    await (
      statusReports as unknown as {
        delete(id: string): Promise<void>;
      }
    ).delete(input.statusReportId);
  });

  return deletedReport;
}
