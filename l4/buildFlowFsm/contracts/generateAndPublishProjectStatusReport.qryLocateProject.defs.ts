/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/generateAndPublishProjectStatusReport.qryLocateProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/generateAndPublishProjectStatusReport.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryLocateProject (query); Output kind=list; route buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject.

export interface QryLocateProjectInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryLocateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const qryLocateProjectRoute = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject' as const;
