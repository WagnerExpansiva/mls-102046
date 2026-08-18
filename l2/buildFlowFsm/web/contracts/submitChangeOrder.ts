/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace submitChangeOrder; one contract file per workspace, all bffCalls).

// bffCall qryLocateClient (query) — Output kind=array; route buildFlowFsm.submitChangeOrder.qryLocateClient.
export interface QryLocateClientInput {}
export interface QryLocateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail: string;
  contactPhone: string;
}
export const qryLocateClientRoute = 'buildFlowFsm.submitChangeOrder.qryLocateClient' as const;

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.submitChangeOrder.qryLocateProject.
export interface QryLocateProjectInput {}
export interface QryLocateProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryLocateProjectRoute = 'buildFlowFsm.submitChangeOrder.qryLocateProject' as const;

// bffCall cmdCreateChangeOrder (command) — Output kind=object; route buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder.
export interface CmdCreateChangeOrderInput {
  clientClientId: string;
  projectProjectId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdCreateChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const cmdCreateChangeOrderRoute = 'buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder' as const;

// bffCall cmdHandoffChangeOrderToProjectManager (command) — Output kind=object; route buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.
export interface CmdHandoffChangeOrderToProjectManagerInput {
  changeOrderChangeOrderId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}
export interface CmdHandoffChangeOrderToProjectManagerOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const cmdHandoffChangeOrderToProjectManagerRoute = 'buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager' as const;
