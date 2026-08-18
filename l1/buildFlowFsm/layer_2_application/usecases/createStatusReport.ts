/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IProjectExecutionOverviewRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.js';
import type { IScheduleRiskAssessmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.js';
import type { StatusReport } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import { isProjectExecutionOverviewConsistent } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';
import { isScheduleRiskAssessmentValid } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.js';

export interface CreateStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}

export interface CreateStatusReportOutput {
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

function validationFailure(message: string): never {
  throw new AppError('VALIDATION_ERROR', message, 400, {
    ruleId: 'statusReportUsesProjectExecutionData',
  });
}

export async function createStatusReport(
  ctx: RequestContext,
  input: CreateStatusReportInput,
): Promise<CreateStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const executionOverviews = resolveRepository<IProjectExecutionOverviewRepository>(ctx, 'ProjectExecutionOverview');
  const riskAssessments = resolveRepository<IScheduleRiskAssessmentRepository>(ctx, 'ScheduleRiskAssessment');

  const project = await projects.getById(input.projectProjectId);
  if (!project) {
    throw new AppError('NOT_FOUND', `Project not found: ${input.projectProjectId}`, 404, {
      projectId: input.projectProjectId,
    });
  }

  const overview = await executionOverviews.getById(input.projectExecutionOverviewProjectId);
  if (!overview || overview.projectId !== project.projectId) {
    validationFailure('Project execution overview is missing or belongs to another project.');
  }

  const risks = await riskAssessments.listByProjectId(project.projectId);
  if (!isProjectExecutionOverviewConsistent({ overview, includedRecords: risks })) {
    validationFailure('Project execution data is inconsistent or unavailable.');
  }
  if (risks.some((assessment) => !isScheduleRiskAssessmentValid(assessment))) {
    validationFailure('Schedule risk assessment data is inconsistent or unavailable.');
  }

  // rule: statusReportUsesProjectExecutionData
  const riskSummary = risks.length > 0
    ? risks.map((assessment) => {
        const indicators = Object.entries(assessment.riskIndicators)
          .map(([key, value]) => `${key}: ${String(value)}`)
          .join(', ');
        return `${assessment.workTaskId} (${assessment.taskStatus}): ${indicators} — ${assessment.riskExplanation}`;
      }).join('; ')
    : null;

  const generatedAt = ctx.clock.nowIso();
  const report: StatusReport = {
    statusReportId: ctx.idGenerator.newId(),
    projectId: project.projectId,
    status: 'draft',
    title: input.title,
    content: input.content,
    communicatedRisks: input.communicatedRisks ?? riskSummary,
    generatedAt,
    generatedByUserId: input.generatedByUserId,
    publishedAt: null,
    publishedByUserId: input.publishedByUserId ?? null,
    withdrawnAt: null,
  };

  if (report.publishedByUserId !== null) {
    validationFailure('A draft status report cannot have a publisher.');
  }

  await ctx.data.runInTransaction(async () => {
    await statusReports.save(report);
  });

  return {
    statusReportId: report.statusReportId,
    projectId: report.projectId,
    status: report.status,
    title: report.title,
    content: report.content,
    ...(report.communicatedRisks === null ? {} : { communicatedRisks: String(report.communicatedRisks) }),
    generatedAt: report.generatedAt,
    generatedByUserId: report.generatedByUserId,
    ...(report.publishedAt === null ? {} : { publishedAt: report.publishedAt }),
    ...(report.publishedByUserId === null ? {} : { publishedByUserId: report.publishedByUserId }),
    ...(report.withdrawnAt === null ? {} : { withdrawnAt: report.withdrawnAt }),
  };
}
