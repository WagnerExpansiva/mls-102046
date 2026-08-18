/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace workTaskCatalogue; one contract file per workspace, all bffCalls).

// bffCall qryListWorkTask (query) — Output kind=array; route buildFlowFsm.workTaskCatalogue.qryListWorkTask.
export interface QryListWorkTaskInput {}
export interface QryListWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const qryListWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.qryListWorkTask' as const;

// bffCall cmdCreateWorkTask (command) — Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask.
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
export const cmdCreateWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask' as const;

// bffCall cmdUpdateWorkTask (command) — Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask.
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
export const cmdUpdateWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask' as const;

// bffCall cmdDeleteWorkTask (command) — Output kind=object; route buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask.
export interface CmdDeleteWorkTaskInput {
  workTaskId: string;
}
export interface CmdDeleteWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const cmdDeleteWorkTaskRoute = 'buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask' as const;
