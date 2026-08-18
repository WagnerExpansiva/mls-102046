/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListProject (query) — Output kind=array; route buildFlowFsm.projectCatalogue.qryListProject.
export interface QryListProjectInput {}
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

// bffCall cmdCreateProject (command) — Output kind=object; route buildFlowFsm.projectCatalogue.cmdCreateProject.
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

// bffCall cmdUpdateProject (command) — Output kind=object; route buildFlowFsm.projectCatalogue.cmdUpdateProject.
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

// bffCall cmdDeleteProject (command) — Output kind=object; route buildFlowFsm.projectCatalogue.cmdDeleteProject.
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

// bffCall qryClientPicker (query) — Output kind=array; route buildFlowFsm.projectCatalogue.qryClientPicker.
export interface QryClientPickerInput {}
export interface QryClientPickerOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryClientPickerRoute = 'buildFlowFsm.projectCatalogue.qryClientPicker' as const;
