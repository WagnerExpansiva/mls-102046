/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCatalogue.cmdDeleteProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteProject (command); Output kind=object; route buildFlowFsm.projectCatalogue.cmdDeleteProject.

export interface CmdDeleteProjectInput {
  projectId: string;
}

export interface CmdDeleteProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const cmdDeleteProjectRoute = 'buildFlowFsm.projectCatalogue.cmdDeleteProject' as const;
