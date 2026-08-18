/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace recordWorkTime; one contract file per workspace, all bffCalls).

// bffCall qryLocateFieldWorker (query) — Output kind=array; route buildFlowFsm.recordWorkTime.qryLocateFieldWorker.
export interface QryLocateFieldWorkerInput {}
export interface QryLocateFieldWorkerOutput {
  platformUserId: string;
}
export const qryLocateFieldWorkerRoute = 'buildFlowFsm.recordWorkTime.qryLocateFieldWorker' as const;

// bffCall qryLocateWorkTask (query) — Output kind=array; route buildFlowFsm.recordWorkTime.qryLocateWorkTask.
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
export const qryLocateWorkTaskRoute = 'buildFlowFsm.recordWorkTime.qryLocateWorkTask' as const;

// bffCall cmdCreateTimeLog (command) — Output kind=object; route buildFlowFsm.recordWorkTime.cmdCreateTimeLog.
export interface CmdCreateTimeLogInput {
  workTaskWorkTaskId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export interface CmdCreateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const cmdCreateTimeLogRoute = 'buildFlowFsm.recordWorkTime.cmdCreateTimeLog' as const;

// bffCall cmdHandoffTimeLogToFieldCoordinator (command) — Output kind=object; route buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.
export interface CmdHandoffTimeLogToFieldCoordinatorInput {
  timeLogTimeLogId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export interface CmdHandoffTimeLogToFieldCoordinatorOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const cmdHandoffTimeLogToFieldCoordinatorRoute = 'buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator' as const;
