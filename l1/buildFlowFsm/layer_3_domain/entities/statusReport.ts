/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.ts" enhancement="_blank"/>

export type StatusReportStatus = 'draft' | 'published' | 'withdrawn';

export interface StatusReport {
  statusReportId: string;
  projectId: string;
  status: StatusReportStatus;
  title: string;
  content: string;
  communicatedRisks: unknown | null;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string | null;
  publishedByUserId: string | null;
  withdrawnAt: string | null;
}

export const STATUS_REPORT_STATUS_TRANSITIONS: Record<StatusReportStatus, StatusReportStatus[]> = {
  draft: ['published'],
  published: ['withdrawn'],
  withdrawn: [],
};

export function canTransitionStatusReport(
  from: StatusReportStatus,
  to: StatusReportStatus,
): boolean {
  return STATUS_REPORT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function statusReportHasConsistentPublicationData(
  report: Pick<StatusReport, 'publishedAt' | 'publishedByUserId'>,
): boolean {
  return (report.publishedAt === null) === (report.publishedByUserId === null);
}

export function statusReportSatisfiesLifecycleInvariants(
  report: Pick<
    StatusReport,
    'status' | 'generatedAt' | 'publishedAt' | 'publishedByUserId' | 'withdrawnAt'
  >,
): boolean {
  if (!statusReportHasConsistentPublicationData(report)) {
    return false;
  }

  if (report.status === 'draft') {
    return report.publishedAt === null && report.publishedByUserId === null && report.withdrawnAt === null;
  }

  if (report.status === 'published') {
    return (
      report.publishedAt !== null &&
      report.publishedByUserId !== null &&
      report.withdrawnAt === null &&
      report.generatedAt <= report.publishedAt
    );
  }

  return (
    report.publishedAt !== null &&
    report.publishedByUserId !== null &&
    report.withdrawnAt !== null &&
    report.generatedAt <= report.publishedAt &&
    report.generatedAt <= report.withdrawnAt &&
    report.publishedAt <= report.withdrawnAt
  );
}