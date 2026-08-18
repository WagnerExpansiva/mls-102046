/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCatalogue.qryListProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListProject (query); Output kind=list; route buildFlowFsm.projectCatalogue.qryListProject.

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

export const qryListProjectRoute = 'buildFlowFsm.projectCatalogue.qryListProject' as const;
