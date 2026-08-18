/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdUpdateStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/statusReportCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateStatusReport (command); Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport.

export interface CmdUpdateStatusReportInput {
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

export interface CmdUpdateStatusReportOutput {
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

export const cmdUpdateStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport' as const;
