/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import {
  canTransitionStatusReport,
  statusReportSatisfiesLifecycleInvariants,
  type StatusReport,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface HandoffStatusReportToClientInput {
  statusReportId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}

export interface HandoffStatusReportToClientOutput {
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

export async function handoffStatusReportToClient(
  ctx: RequestContext,
  input: HandoffStatusReportToClientInput,
): Promise<HandoffStatusReportToClientOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');

  if (!input.title.trim() || !input.content.trim()) {
    throw new AppError(
      'VALIDATION_ERROR',
      'O relatório precisa de título profissional e conteúdo revisado.',
      400,
      { ruleId: 'clientVisibleStatusReport' },
    );
  }

  const publishedByUserId = input.publishedByUserId ?? input.generatedByUserId;
  if (!publishedByUserId.trim()) {
    throw new AppError(
      'VALIDATION_ERROR',
      'O relatório precisa identificar o gerente responsável pela publicação.',
      400,
      { ruleId: 'clientVisibleStatusReport' },
    );
  }

  const saved = await ctx.data.runInTransaction(async () => {
    const report = await statusReports.getById(input.statusReportId);
    if (!report) {
      throw new AppError('NOT_FOUND', `StatusReport não encontrado: ${input.statusReportId}`, 404, {
        statusReportId: input.statusReportId,
      });
    }

    if (!canTransitionStatusReport(report.status, 'published')) {
      throw new AppError(
        'VALIDATION_ERROR',
        'O relatório não pode ser publicado a partir do estado atual.',
        400,
        { ruleId: 'clientVisibleStatusReport', status: report.status },
      );
    }

    const now = ctx.clock.nowIso();
    const updated: StatusReport = {
      ...report,
      title: input.title,
      content: input.content,
      communicatedRisks: input.communicatedRisks ?? null,
      generatedByUserId: input.generatedByUserId,
      status: 'published',
      publishedAt: now,
      publishedByUserId,
      withdrawnAt: null,
    };

    if (!statusReportSatisfiesLifecycleInvariants(updated)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Os dados de publicação do relatório são inconsistentes.',
        400,
        { ruleId: 'clientVisibleStatusReport' },
      );
    }

    await statusReports.save(updated);
    return updated;
  });

  return {
    statusReportId: saved.statusReportId,
    projectId: saved.projectId,
    status: saved.status,
    title: saved.title,
    content: saved.content,
    ...(saved.communicatedRisks === null ? {} : { communicatedRisks: String(saved.communicatedRisks) }),
    generatedAt: saved.generatedAt,
    generatedByUserId: saved.generatedByUserId,
    ...(saved.publishedAt === null ? {} : { publishedAt: saved.publishedAt }),
    ...(saved.publishedByUserId === null ? {} : { publishedByUserId: saved.publishedByUserId }),
    ...(saved.withdrawnAt === null ? {} : { withdrawnAt: saved.withdrawnAt }),
  };
}
