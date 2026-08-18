/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/reviewProjectPortfolio.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdHandoffProjectToFieldCoordinator (command); Output kind=object; route buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.

export interface CmdHandoffProjectToFieldCoordinatorInput {
  projectProjectId: string;
  clientId: string;
  name: string;
  address: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export interface CmdHandoffProjectToFieldCoordinatorOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const cmdHandoffProjectToFieldCoordinatorRoute = 'buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator' as const;
