/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCoordinationAssignmentCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateProjectCoordinationAssignment (command); Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.

export interface CmdUpdateProjectCoordinationAssignmentInput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export interface CmdUpdateProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export const cmdUpdateProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment' as const;
