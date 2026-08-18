/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCatalogue.cmdUpdateProject.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateProject (command); Output kind=object; route buildFlowFsm.projectCatalogue.cmdUpdateProject.

export interface CmdUpdateProjectInput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export interface CmdUpdateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const cmdUpdateProjectRoute = 'buildFlowFsm.projectCatalogue.cmdUpdateProject' as const;
