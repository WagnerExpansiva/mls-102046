/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCoordinationAssignmentCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateProjectCoordinationAssignment (command); Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.

export interface CmdCreateProjectCoordinationAssignmentInput {
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export interface CmdCreateProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export const cmdCreateProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment' as const;
