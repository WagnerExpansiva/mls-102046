/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace updateWorkTaskProgress; one contract file per workspace, all bffCalls).

// bffCall qryLocateWorkTask (query) — Output kind=array; route buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask.
export interface QryLocateWorkTaskInput {}
export interface QryLocateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const qryLocateWorkTaskRoute = 'buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask' as const;

// bffCall cmdUpdateWorkTask (command) — Output kind=object; route buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask.
export interface CmdUpdateWorkTaskInput {
  projectProjectId: string;
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}
export interface CmdUpdateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const cmdUpdateWorkTaskRoute = 'buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask' as const;

// bffCall cmdHandoffWorkTaskProgressToFieldCoordinator (command) — Output kind=object; route buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.
export interface CmdHandoffWorkTaskProgressToFieldCoordinatorInput {
  workTaskWorkTaskId: string;
  description: string;
  dueDate: string;
  progressUpdate?: string;
}
export interface CmdHandoffWorkTaskProgressToFieldCoordinatorOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const cmdHandoffWorkTaskProgressToFieldCoordinatorRoute = 'buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator' as const;
