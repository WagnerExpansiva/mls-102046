/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IProjectExecutionOverviewRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.js';
import type { StatusReport, StatusReportStatus } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import {
  canTransitionStatusReport,
  statusReportSatisfiesLifecycleInvariants,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import {
  isProjectExecutionOverviewConsistent,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';

export interface PublishStatusReportInput {
  projectId: string;
  projectExecutionOverviewProjectId: string;
  statusReportId: string;
  status: string;
}

export interface PublishStatusReportOutput {
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

export async function publishStatusReport(
  ctx: RequestContext,
  input: PublishStatusReportInput,
): Promise<PublishStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const executionOverviews = resolveRepository<IProjectExecutionOverviewRepository>(
    ctx,
    'ProjectExecutionOverview',
  );

  return ctx.data.runInTransaction(async () => {
    const [project, overview, report] = await Promise.all([
      projects.getById(input.projectId),
      executionOverviews.getByProjectId(input.projectExecutionOverviewProjectId),
      statusReports.getById(input.statusReportId),
    ]);

    if (!project) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Project not found: ${input.projectId}`,
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }
    if (!overview) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Project execution overview not found: ${input.projectExecutionOverviewProjectId}`,
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }
    if (!report) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Status report not found: ${input.statusReportId}`,
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }

    if (
      project.projectId !== input.projectId ||
      overview.projectId !== input.projectId ||
      report.projectId !== input.projectId
    ) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Project, execution overview, and status report must belong to the same project.',
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }

    const allowedStatuses: readonly StatusReportStatus[] = ['draft', 'published', 'withdrawn'];
    if (!allowedStatuses.includes(input.status as StatusReportStatus) || input.status !== 'published') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Publishing a status report requires the published status.',
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }
    if (!canTransitionStatusReport(report.status, 'published')) {
      throw new AppError(
        'CONFLICT',
        `Status report cannot transition from ${report.status} to published.`,
        409,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }

    // rule: statusReportUsesProjectExecutionData
    if (!isProjectExecutionOverviewConsistent({ overview })) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The execution overview is not a consistent current execution view for the project.',
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }

    const publishedAt = ctx.clock.nowIso();
    const publishedByUserId =
      ctx.sessionContext.actorId ?? ctx.sessionContext.actorSession.actorId;
    if (!publishedByUserId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'An authenticated session user is required to publish a status report.',
        400,
      );
    }

    const updatedReport: StatusReport = {
      ...report,
      status: 'published',
      publishedAt,
      publishedByUserId,
    };
    if (!statusReportSatisfiesLifecycleInvariants(updatedReport)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The published status report violates its lifecycle invariants.',
        400,
        { ruleId: 'statusReportUsesProjectExecutionData' },
      );
    }

    await statusReports.save(updatedReport);
    return {
      statusReportId: updatedReport.statusReportId,
      projectId: updatedReport.projectId,
      status: updatedReport.status,
      title: updatedReport.title,
      content: updatedReport.content,
      communicatedRisks:
        typeof updatedReport.communicatedRisks === 'string'
          ? updatedReport.communicatedRisks
          : undefined,
      generatedAt: updatedReport.generatedAt,
      generatedByUserId: updatedReport.generatedByUserId,
      publishedAt: updatedReport.publishedAt ?? undefined,
      publishedByUserId: updatedReport.publishedByUserId ?? undefined,
      withdrawnAt: updatedReport.withdrawnAt ?? undefined,
    };
  });
}
