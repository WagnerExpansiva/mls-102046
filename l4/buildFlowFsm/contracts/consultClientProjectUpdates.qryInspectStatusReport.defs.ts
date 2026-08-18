/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/consultClientProjectUpdates.qryInspectStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/consultClientProjectUpdates.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryInspectStatusReport (query); Output kind=object; route buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport.

export interface QryInspectStatusReportInput {
  statusReportStatusReportId: string;
}

export interface QryInspectStatusReportOutput {
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

export const qryInspectStatusReportRoute = 'buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport' as const;
