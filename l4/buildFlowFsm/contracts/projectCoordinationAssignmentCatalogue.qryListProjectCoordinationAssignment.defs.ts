/// <mls fileReference="_{project}_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from l4/buildFlowFsm/workspaces/projectCoordinationAssignmentCatalogue.defs.ts — DO NOT EDIT.
// Contract of record: bffCall qryListProjectCoordinationAssignment (query); Output kind=list; route buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.

export interface QryListProjectCoordinationAssignmentInput {
  // sem inputs públicos (resolvidos por contexto)
}

export interface QryListProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}

export const qryListProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment' as const;
