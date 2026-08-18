/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdCreateStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/statusReportCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateStatusReport (command); Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport.

export interface CmdCreateStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}

export interface CmdCreateStatusReportOutput {
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

export const cmdCreateStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport' as const;
