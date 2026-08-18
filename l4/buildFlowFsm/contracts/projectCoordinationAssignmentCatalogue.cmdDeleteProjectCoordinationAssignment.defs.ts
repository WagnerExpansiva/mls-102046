/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCoordinationAssignmentCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdDeleteProjectCoordinationAssignment (command); Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.

export interface CmdDeleteProjectCoordinationAssignmentInput {
  projectCoordinationAssignmentId: string;
}

export interface CmdDeleteProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export const cmdDeleteProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment' as const;
