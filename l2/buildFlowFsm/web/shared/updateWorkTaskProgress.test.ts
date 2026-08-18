/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmUpdateWorkTaskProgressBase } from '/_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.js';
import type { CmdHandoffWorkTaskProgressToFieldCoordinatorInput, CmdHandoffWorkTaskProgressToFieldCoordinatorOutput, CmdUpdateWorkTaskInput, CmdUpdateWorkTaskOutput, QryLocateWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmUpdateWorkTaskProgressBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateWorkTaskState = Assert<Assignable<typeof page.qryLocateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateWorkTaskData = Assert<Assignable<typeof page.qryLocateWorkTaskData, unknown[] | QryLocateWorkTaskOutput>>;
type _State_cmdUpdateWorkTaskState = Assert<Assignable<typeof page.cmdUpdateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateWorkTaskProjectProjectId = Assert<Assignable<typeof page.cmdUpdateWorkTaskProjectProjectId, string | CmdUpdateWorkTaskInput["projectProjectId"]>>;
type _State_cmdUpdateWorkTaskWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdUpdateWorkTaskWorkTaskWorkTaskId, string | CmdUpdateWorkTaskInput["workTaskWorkTaskId"]>>;
type _State_cmdUpdateWorkTaskDescription = Assert<Assignable<typeof page.cmdUpdateWorkTaskDescription, string | CmdUpdateWorkTaskInput["description"]>>;
type _State_cmdUpdateWorkTaskDueDate = Assert<Assignable<typeof page.cmdUpdateWorkTaskDueDate, string | CmdUpdateWorkTaskInput["dueDate"]>>;
type _State_cmdUpdateWorkTaskProgressUpdate = Assert<Assignable<typeof page.cmdUpdateWorkTaskProgressUpdate, string | CmdUpdateWorkTaskInput["progressUpdate"]>>;
type _State_cmdUpdateWorkTaskOutput = Assert<Assignable<typeof page.cmdUpdateWorkTaskOutput, CmdUpdateWorkTaskOutput | null>>;
type _State_cmdUpdateWorkTaskError = Assert<Assignable<typeof page.cmdUpdateWorkTaskError, string>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorState = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId, string | CmdHandoffWorkTaskProgressToFieldCoordinatorInput["workTaskWorkTaskId"]>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorDescription = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription, string | CmdHandoffWorkTaskProgressToFieldCoordinatorInput["description"]>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate, string | CmdHandoffWorkTaskProgressToFieldCoordinatorInput["dueDate"]>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate, string | CmdHandoffWorkTaskProgressToFieldCoordinatorInput["progressUpdate"]>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorOutput = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorOutput, CmdHandoffWorkTaskProgressToFieldCoordinatorOutput | null>>;
type _State_cmdHandoffWorkTaskProgressToFieldCoordinatorError = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinatorError, string>>;
type _Action_loadQryLocateWorkTask = Assert<Assignable<typeof page.loadQryLocateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateWorkTaskClick = Assert<Assignable<typeof page.handleQryLocateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateWorkTask = Assert<Assignable<typeof page.cmdUpdateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskClick = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffWorkTaskProgressToFieldCoordinator = Assert<Assignable<typeof page.cmdHandoffWorkTaskProgressToFieldCoordinator, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateWorkTaskProjectProjectId = Assert<Assignable<typeof page.setCmdUpdateWorkTaskProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateWorkTaskWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdUpdateWorkTaskWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateWorkTaskDescription = Assert<Assignable<typeof page.setCmdUpdateWorkTaskDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskDescriptionChange = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateWorkTaskDueDate = Assert<Assignable<typeof page.setCmdUpdateWorkTaskDueDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskDueDateChange = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskDueDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateWorkTaskProgressUpdate = Assert<Assignable<typeof page.setCmdUpdateWorkTaskProgressUpdate, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskProgressUpdateChange = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskProgressUpdateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription = Assert<Assignable<typeof page.setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = Assert<Assignable<typeof page.setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = Assert<Assignable<typeof page.setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange, (...args: any[]) => unknown>>;

export {};