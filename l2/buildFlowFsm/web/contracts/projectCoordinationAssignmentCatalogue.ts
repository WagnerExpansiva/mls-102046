/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectCoordinationAssignmentCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListProjectCoordinationAssignment (query) — Output kind=array; route buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.
export interface QryListProjectCoordinationAssignmentInput {}
export interface QryListProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}
export const qryListProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment' as const;

// bffCall cmdCreateProjectCoordinationAssignment (command) — Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.
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

// bffCall cmdUpdateProjectCoordinationAssignment (command) — Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.
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

// bffCall cmdDeleteProjectCoordinationAssignment (command) — Output kind=object; route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.
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

// bffCall qryProjectPicker (query) — Output kind=array; route buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker.
export interface QryProjectPickerInput {}
export interface QryProjectPickerOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryProjectPickerRoute = 'buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker' as const;
