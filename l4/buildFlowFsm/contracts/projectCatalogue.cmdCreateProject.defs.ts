/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCatalogue.cmdCreateProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateProject (command); Output kind=object; route buildFlowFsm.projectCatalogue.cmdCreateProject.

export interface CmdCreateProjectInput {
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export interface CmdCreateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const cmdCreateProjectRoute = 'buildFlowFsm.projectCatalogue.cmdCreateProject' as const;
