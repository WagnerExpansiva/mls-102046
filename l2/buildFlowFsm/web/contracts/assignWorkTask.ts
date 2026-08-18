/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace assignWorkTask; one contract file per workspace, all bffCalls).

// bffCall qryLocateProject (query) — Output kind=array; route buildFlowFsm.assignWorkTask.qryLocateProject.
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
export const qryLocateProjectRoute = 'buildFlowFsm.assignWorkTask.qryLocateProject' as const;

// bffCall qryInspectProjectTimeline (query) — Output kind=object; route buildFlowFsm.assignWorkTask.qryInspectProjectTimeline.
export interface QryInspectProjectTimelineInput {
  projectTimelineProjectId: string;
}
export interface QryInspectProjectTimelineOutput {
  projectId: string;
  workTasks: string;
  scheduleEntries: string;
}
export const qryInspectProjectTimelineRoute = 'buildFlowFsm.assignWorkTask.qryInspectProjectTimeline' as const;

// bffCall qryLocateFieldWorker (query) — Output kind=array; route buildFlowFsm.assignWorkTask.qryLocateFieldWorker.
export interface QryLocateFieldWorkerInput {}
export interface QryLocateFieldWorkerOutput {
  platformUserId: string;
}
export const qryLocateFieldWorkerRoute = 'buildFlowFsm.assignWorkTask.qryLocateFieldWorker' as const;

// bffCall cmdCreateWorkTask (command) — Output kind=object; route buildFlowFsm.assignWorkTask.cmdCreateWorkTask.
export interface CmdCreateWorkTaskInput {
  projectProjectId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}
export interface CmdCreateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const cmdCreateWorkTaskRoute = 'buildFlowFsm.assignWorkTask.cmdCreateWorkTask' as const;

// bffCall cmdHandoffWorkTaskToFieldWorker (command) — Output kind=object; route buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.
export interface CmdHandoffWorkTaskToFieldWorkerInput {
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}
export interface CmdHandoffWorkTaskToFieldWorkerOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const cmdHandoffWorkTaskToFieldWorkerRoute = 'buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker' as const;
