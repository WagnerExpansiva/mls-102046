/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectHub.qryListProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectHub.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListProject (query); Output kind=list; route buildFlowFsm.projectHub.qryListProject.

export interface QryListProjectInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const qryListProjectRoute = 'buildFlowFsm.projectHub.qryListProject' as const;
