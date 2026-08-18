/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffStatusReportToClient (command); Output kind=object; route buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.

export interface CmdHandoffStatusReportToClientInput {
  statusReportStatusReportId: string;
  title: string;
  content: string;
  communicatedRisks?: string;
  generatedByUserId: string;
  publishedByUserId?: string;
}

export interface CmdHandoffStatusReportToClientOutput {
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

export const cmdHandoffStatusReportToClientRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient' as const;
