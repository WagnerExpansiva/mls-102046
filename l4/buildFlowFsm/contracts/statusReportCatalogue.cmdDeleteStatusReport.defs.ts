/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdDeleteStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/statusReportCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteStatusReport (command); Output kind=object; route buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport.

export interface CmdDeleteStatusReportInput {
  statusReportId: string;
}

export interface CmdDeleteStatusReportOutput {
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

export const cmdDeleteStatusReportRoute = 'buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport' as const;
