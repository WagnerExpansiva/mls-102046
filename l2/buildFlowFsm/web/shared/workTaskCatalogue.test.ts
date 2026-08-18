/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmWorkTaskCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.js';
import type { CmdCreateWorkTaskInput, CmdCreateWorkTaskOutput, CmdDeleteWorkTaskInput, CmdDeleteWorkTaskOutput, CmdUpdateWorkTaskInput, CmdUpdateWorkTaskOutput, QryListWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmWorkTaskCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListWorkTaskState = Assert<Assignable<typeof page.qryListWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_qryListWorkTaskData = Assert<Assignable<typeof page.qryListWorkTaskData, unknown[] | QryListWorkTaskOutput>>;
type _State_cmdCreateWorkTaskState = Assert<Assignable<typeof page.cmdCreateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateWorkTaskProjectProjectId = Assert<Assignable<typeof page.cmdCreateWorkTaskProjectProjectId, string | CmdCreateWorkTaskInput["projectProjectId"]>>;
type _State_cmdCreateWorkTaskDescription = Assert<Assignable<typeof page.cmdCreateWorkTaskDescription, string | CmdCreateWorkTaskInput["description"]>>;
type _State_cmdCreateWorkTaskDueDate = Assert<Assignable<typeof page.cmdCreateWorkTaskDueDate, string | CmdCreateWorkTaskInput["dueDate"]>>;
type _State_cmdCreateWorkTaskProgressUpdate = Assert<Assignable<typeof page.cmdCreateWorkTaskProgressUpdate, string | CmdCreateWorkTaskInput["progressUpdate"]>>;
type _State_cmdCreateWorkTaskOutput = Assert<Assignable<typeof page.cmdCreateWorkTaskOutput, CmdCreateWorkTaskOutput | null>>;
type _State_cmdCreateWorkTaskError = Assert<Assignable<typeof page.cmdCreateWorkTaskError, string>>;
type _State_cmdUpdateWorkTaskState = Assert<Assignable<typeof page.cmdUpdateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateWorkTaskProjectProjectId = Assert<Assignable<typeof page.cmdUpdateWorkTaskProjectProjectId, string | CmdUpdateWorkTaskInput["projectProjectId"]>>;
type _State_cmdUpdateWorkTaskWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdUpdateWorkTaskWorkTaskWorkTaskId, string | CmdUpdateWorkTaskInput["workTaskWorkTaskId"]>>;
type _State_cmdUpdateWorkTaskDescription = Assert<Assignable<typeof page.cmdUpdateWorkTaskDescription, string | CmdUpdateWorkTaskInput["description"]>>;
type _State_cmdUpdateWorkTaskDueDate = Assert<Assignable<typeof page.cmdUpdateWorkTaskDueDate, string | CmdUpdateWorkTaskInput["dueDate"]>>;
type _State_cmdUpdateWorkTaskProgressUpdate = Assert<Assignable<typeof page.cmdUpdateWorkTaskProgressUpdate, string | CmdUpdateWorkTaskInput["progressUpdate"]>>;
type _State_cmdUpdateWorkTaskOutput = Assert<Assignable<typeof page.cmdUpdateWorkTaskOutput, CmdUpdateWorkTaskOutput | null>>;
type _State_cmdUpdateWorkTaskError = Assert<Assignable<typeof page.cmdUpdateWorkTaskError, string>>;
type _State_cmdDeleteWorkTaskState = Assert<Assignable<typeof page.cmdDeleteWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdDeleteWorkTaskWorkTaskId, string | CmdDeleteWorkTaskInput["workTaskId"]>>;
type _State_cmdDeleteWorkTaskOutput = Assert<Assignable<typeof page.cmdDeleteWorkTaskOutput, CmdDeleteWorkTaskOutput | null>>;
type _State_cmdDeleteWorkTaskError = Assert<Assignable<typeof page.cmdDeleteWorkTaskError, string>>;
type _Action_loadQryListWorkTask = Assert<Assignable<typeof page.loadQryListWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleQryListWorkTaskClick = Assert<Assignable<typeof page.handleQryListWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateWorkTask = Assert<Assignable<typeof page.cmdCreateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskClick = Assert<Assignable<typeof page.handleCmdCreateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateWorkTask = Assert<Assignable<typeof page.cmdUpdateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateWorkTaskClick = Assert<Assignable<typeof page.handleCmdUpdateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteWorkTask = Assert<Assignable<typeof page.cmdDeleteWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteWorkTaskClick = Assert<Assignable<typeof page.handleCmdDeleteWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskProjectProjectId = Assert<Assignable<typeof page.setCmdCreateWorkTaskProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskDescription = Assert<Assignable<typeof page.setCmdCreateWorkTaskDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskDueDate = Assert<Assignable<typeof page.setCmdCreateWorkTaskDueDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskDueDateChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskDueDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskProgressUpdate = Assert<Assignable<typeof page.setCmdCreateWorkTaskProgressUpdate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskProgressUpdateChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskProgressUpdateChange, (...args: any[]) => unknown>>;
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
type _Action_setCmdDeleteWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdDeleteWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdDeleteWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;

export {};