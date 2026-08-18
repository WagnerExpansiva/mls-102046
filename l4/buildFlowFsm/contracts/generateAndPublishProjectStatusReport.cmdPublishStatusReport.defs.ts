/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.cmdPublishStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdPublishStatusReport (command); Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport.

export interface CmdPublishStatusReportInput {
  projectProjectId: string;
  projectExecutionOverviewProjectId: string;
  statusReportStatusReportId: string;
  status: string;
}

export interface CmdPublishStatusReportOutput {
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

export const cmdPublishStatusReportRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport' as const;
