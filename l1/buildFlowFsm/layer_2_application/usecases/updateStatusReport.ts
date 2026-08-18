/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IProjectExecutionOverviewRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.js';
import type { StatusReport } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import {
  canTransitionStatusReport,
  statusReportSatisfiesLifecycleInvariants,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import { isProjectExecutionOverviewConsistent } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';

export interface UpdateStatusReportInput {
  statusReportId: string;
  projectId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}

export interface UpdateStatusReportOutput {
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

export async function updateStatusReport(
  ctx: RequestContext,
  input: UpdateStatusReportInput,
): Promise<UpdateStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const executionOverviews = resolveRepository<IProjectExecutionOverviewRepository>(
    ctx,
    'ProjectExecutionOverview',
  );

  const report = await statusReports.getById(input.statusReportId);
  if (!report) {
    throw new AppError('NOT_FOUND', `Status report not found: ${input.statusReportId}`, 404, {
      statusReportId: input.statusReportId,
    });
  }
  if (report.projectId !== input.projectId) {
    throw new AppError('VALIDATION_ERROR', 'The status report does not belong to the selected project.', 400, {
      ruleId: 'clientSeesOnlyOwnProjectInformation',
    });
  }

  const project = await projects.getById(input.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', `Project not found: ${input.projectId}`, 404, {
      projectId: input.projectId,
    });
  }
  const overview = await executionOverviews.getByProjectId(input.projectId);
  if (!overview) {
    throw new AppError('NOT_FOUND', `Project execution overview not found: ${input.projectId}`, 404, {
      projectId: input.projectId,
    });
  }
  if (overview.projectId !== project.projectId) {
    throw new AppError('VALIDATION_ERROR', 'The execution overview does not belong to the project.', 400, {
      ruleId: 'statusReportUsesProjectExecutionData',
    });
  }
  // rule: clientSeesOnlyOwnProjectInformation — the available model exposes project.clientId,
  // but RequestContext has no client identity or client scope to compare with it.
  // rule: clientVisibleStatusReport — visibility is limited to the loaded project/report scope;
  // no additional client-scope field exists in the application context.

  if (input.title.trim().length === 0 || input.content.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'Status report title and content are required.', 400, {
      ruleId: 'statusReportUsesProjectExecutionData',
    });
  }
  if (!isProjectExecutionOverviewConsistent({ overview })) {
    throw new AppError('VALIDATION_ERROR', 'The project execution overview is inconsistent.', 400, {
      ruleId: 'statusReportUsesProjectExecutionData',
    });
  }

  const actorId = ctx.sessionContext.actorId;
  const now = ctx.clock.nowIso();
  const shouldPublish = input.publishedByUserId !== undefined && input.publishedByUserId !== null;
  if (shouldPublish) {
    if (!actorId || input.publishedByUserId !== actorId) {
      throw new AppError('VALIDATION_ERROR', 'Only the project manager may publish this status report.', 400, {
        ruleId: 'onlyProjectManagerPublishesStatusReport',
      });
    }
    if (report.status !== 'draft' && report.publishedByUserId !== input.publishedByUserId) {
      throw new AppError('CONFLICT', 'The status report publication identity cannot be changed.', 409, {
        ruleId: 'onlyProjectManagerPublishesStatusReport',
      });
    }
  }

  const nextStatus = shouldPublish && report.status === 'draft' ? 'published' : report.status;
  if (nextStatus !== report.status && !canTransitionStatusReport(report.status, nextStatus)) {
    throw new AppError('CONFLICT', `Invalid status report transition: ${report.status} to ${nextStatus}`, 409);
  }
  if (report.status === 'withdrawn') {
    throw new AppError('CONFLICT', 'A withdrawn status report cannot be updated.', 409);
  }

  const updated: StatusReport = {
    ...report,
    projectId: project.projectId,
    title: input.title,
    content: input.content,
    communicatedRisks: input.communicatedRisks ?? report.communicatedRisks,
    generatedByUserId: input.generatedByUserId,
    generatedAt: report.status === 'draft' ? now : report.generatedAt,
    status: nextStatus,
    publishedAt:
      nextStatus === 'published' ? (report.publishedAt ?? now) : report.publishedAt,
    publishedByUserId:
      nextStatus === 'published'
        ? (report.publishedByUserId ?? input.publishedByUserId ?? null)
        : report.publishedByUserId,
  };

  if (!statusReportSatisfiesLifecycleInvariants(updated)) {
    throw new AppError('VALIDATION_ERROR', 'The updated status report violates lifecycle invariants.', 400);
  }

  await ctx.data.runInTransaction(async () => {
    await statusReports.save(updated);
  });

  const output: UpdateStatusReportOutput = {
    statusReportId: updated.statusReportId,
    projectId: updated.projectId,
    status: updated.status,
    title: updated.title,
    content: updated.content,
    generatedAt: updated.generatedAt,
    generatedByUserId: updated.generatedByUserId,
  };
  if (typeof updated.communicatedRisks === 'string') output.communicatedRisks = updated.communicatedRisks;
  if (updated.publishedAt !== null) output.publishedAt = updated.publishedAt;
  if (updated.publishedByUserId !== null) output.publishedByUserId = updated.publishedByUserId;
  if (updated.withdrawnAt !== null) output.withdrawnAt = updated.withdrawnAt;
  return output;
}
