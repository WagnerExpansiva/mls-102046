/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/statusReportCatalogue.qryListStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/statusReportCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListStatusReport (query); Output kind=list; route buildFlowFsm.statusReportCatalogue.qryListStatusReport.

export interface QryListStatusReportInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListStatusReportOutput {
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

export const qryListStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.qryListStatusReport' as const;
