/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmAssignWorkTaskBase } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
import type { CmdCreateWorkTaskInput, CmdCreateWorkTaskOutput, CmdHandoffWorkTaskToFieldWorkerInput, CmdHandoffWorkTaskToFieldWorkerOutput, QryInspectProjectTimelineInput, QryInspectProjectTimelineOutput, QryLocateFieldWorkerOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmAssignWorkTaskBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectProjectTimelineState = Assert<Assignable<typeof page.qryInspectProjectTimelineState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectProjectTimelineProjectTimelineProjectId = Assert<Assignable<typeof page.qryInspectProjectTimelineProjectTimelineProjectId, string | QryInspectProjectTimelineInput["projectTimelineProjectId"]>>;
type _State_qryInspectProjectTimelineData = Assert<Assignable<typeof page.qryInspectProjectTimelineData, QryInspectProjectTimelineOutput | null>>;
type _State_qryLocateFieldWorkerState = Assert<Assignable<typeof page.qryLocateFieldWorkerState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateFieldWorkerData = Assert<Assignable<typeof page.qryLocateFieldWorkerData, unknown[] | QryLocateFieldWorkerOutput>>;
type _State_cmdCreateWorkTaskState = Assert<Assignable<typeof page.cmdCreateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateWorkTaskProjectProjectId = Assert<Assignable<typeof page.cmdCreateWorkTaskProjectProjectId, string | CmdCreateWorkTaskInput["projectProjectId"]>>;
type _State_cmdCreateWorkTaskDescription = Assert<Assignable<typeof page.cmdCreateWorkTaskDescription, string | CmdCreateWorkTaskInput["description"]>>;
type _State_cmdCreateWorkTaskDueDate = Assert<Assignable<typeof page.cmdCreateWorkTaskDueDate, string | CmdCreateWorkTaskInput["dueDate"]>>;
type _State_cmdCreateWorkTaskProgressUpdate = Assert<Assignable<typeof page.cmdCreateWorkTaskProgressUpdate, string | CmdCreateWorkTaskInput["progressUpdate"]>>;
type _State_cmdCreateWorkTaskOutput = Assert<Assignable<typeof page.cmdCreateWorkTaskOutput, CmdCreateWorkTaskOutput | null>>;
type _State_cmdCreateWorkTaskError = Assert<Assignable<typeof page.cmdCreateWorkTaskError, string>>;
type _State_cmdHandoffWorkTaskToFieldWorkerState = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId, string | CmdHandoffWorkTaskToFieldWorkerInput["workTaskWorkTaskId"]>>;
type _State_cmdHandoffWorkTaskToFieldWorkerDescription = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerDescription, string | CmdHandoffWorkTaskToFieldWorkerInput["description"]>>;
type _State_cmdHandoffWorkTaskToFieldWorkerDueDate = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerDueDate, string | CmdHandoffWorkTaskToFieldWorkerInput["dueDate"]>>;
type _State_cmdHandoffWorkTaskToFieldWorkerProgressUpdate = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerProgressUpdate, string | CmdHandoffWorkTaskToFieldWorkerInput["progressUpdate"]>>;
type _State_cmdHandoffWorkTaskToFieldWorkerOutput = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerOutput, CmdHandoffWorkTaskToFieldWorkerOutput | null>>;
type _State_cmdHandoffWorkTaskToFieldWorkerError = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorkerError, string>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectProjectTimeline = Assert<Assignable<typeof page.loadQryInspectProjectTimeline, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectTimelineClick = Assert<Assignable<typeof page.handleQryInspectProjectTimelineClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateFieldWorker = Assert<Assignable<typeof page.loadQryLocateFieldWorker, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateFieldWorkerClick = Assert<Assignable<typeof page.handleQryLocateFieldWorkerClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateWorkTask = Assert<Assignable<typeof page.cmdCreateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskClick = Assert<Assignable<typeof page.handleCmdCreateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffWorkTaskToFieldWorker = Assert<Assignable<typeof page.cmdHandoffWorkTaskToFieldWorker, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskToFieldWorkerClick = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskToFieldWorkerClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectProjectTimelineProjectTimelineProjectId = Assert<Assignable<typeof page.setQryInspectProjectTimelineProjectTimelineProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectProjectTimelineProjectTimelineProjectIdChange = Assert<Assignable<typeof page.handleQryInspectProjectTimelineProjectTimelineProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskProjectProjectId = Assert<Assignable<typeof page.setCmdCreateWorkTaskProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskDescription = Assert<Assignable<typeof page.setCmdCreateWorkTaskDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskDueDate = Assert<Assignable<typeof page.setCmdCreateWorkTaskDueDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskDueDateChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskDueDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateWorkTaskProgressUpdate = Assert<Assignable<typeof page.setCmdCreateWorkTaskProgressUpdate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateWorkTaskProgressUpdateChange = Assert<Assignable<typeof page.handleCmdCreateWorkTaskProgressUpdateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskToFieldWorkerDescription = Assert<Assignable<typeof page.setCmdHandoffWorkTaskToFieldWorkerDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskToFieldWorkerDueDate = Assert<Assignable<typeof page.setCmdHandoffWorkTaskToFieldWorkerDueDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskToFieldWorkerDueDateChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskToFieldWorkerDueDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffWorkTaskToFieldWorkerProgressUpdate = Assert<Assignable<typeof page.setCmdHandoffWorkTaskToFieldWorkerProgressUpdate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange = Assert<Assignable<typeof page.handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange, (...args: any[]) => unknown>>;

export {};