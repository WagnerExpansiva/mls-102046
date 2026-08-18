/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace timeLogCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListTimeLog (query) — Output kind=array; route buildFlowFsm.timeLogCatalogue.qryListTimeLog.
export interface QryListTimeLogInput {}
export interface QryListTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const qryListTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.qryListTimeLog' as const;

// bffCall cmdCreateTimeLog (command) — Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog.
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
export const cmdCreateTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog' as const;

// bffCall cmdUpdateTimeLog (command) — Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog.
export interface CmdUpdateTimeLogInput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export interface CmdUpdateTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const cmdUpdateTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog' as const;

// bffCall cmdDeleteTimeLog (command) — Output kind=object; route buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog.
export interface CmdDeleteTimeLogInput {
  timeLogId: string;
}
export interface CmdDeleteTimeLogOutput {
  timeLogId: string;
  status: string;
  workTaskId: string;
  fieldWorkerId: string;
  workDate: string;
  hoursWorked: number;
  hourlyLaborCost: number;
}
export const cmdDeleteTimeLogRoute = 'buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog' as const;

// bffCall qryWorkTaskPicker (query) — Output kind=array; route buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker.
export interface QryWorkTaskPickerInput {}
export interface QryWorkTaskPickerOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const qryWorkTaskPickerRoute = 'buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker' as const;
