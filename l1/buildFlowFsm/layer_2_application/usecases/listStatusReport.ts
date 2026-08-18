/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';

export interface ListStatusReportInput {}

export interface ListStatusReportItem {
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

export type ListStatusReportOutput = ListStatusReportItem[];

export async function listStatusReport(
  ctx: RequestContext,
  _input: ListStatusReportInput,
): Promise<ListStatusReportOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const records = await statusReports.list({});

  return records.map((record) => {
    const communicatedRisks =
      record.communicatedRisks === null || record.communicatedRisks === undefined
        ? undefined
        : typeof record.communicatedRisks === 'string'
          ? record.communicatedRisks
          : JSON.stringify(record.communicatedRisks);

    return {
      statusReportId: record.statusReportId,
      projectId: record.projectId,
      status: record.status,
      title: record.title,
      content: record.content,
      ...(communicatedRisks === undefined ? {} : { communicatedRisks }),
      generatedAt: record.generatedAt,
      generatedByUserId: record.generatedByUserId,
      ...(record.publishedAt === null ? {} : { publishedAt: record.publishedAt }),
      ...(record.publishedByUserId === null ? {} : { publishedByUserId: record.publishedByUserId }),
      ...(record.withdrawnAt === null ? {} : { withdrawnAt: record.withdrawnAt }),
    };
  });
}
