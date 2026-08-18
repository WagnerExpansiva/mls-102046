/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmRecordWorkTimeBase } from '/_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.js';
import type { CmdCreateTimeLogInput, CmdCreateTimeLogOutput, CmdHandoffTimeLogToFieldCoordinatorInput, CmdHandoffTimeLogToFieldCoordinatorOutput, QryLocateFieldWorkerOutput, QryLocateWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmRecordWorkTimeBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateFieldWorkerState = Assert<Assignable<typeof page.qryLocateFieldWorkerState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateFieldWorkerData = Assert<Assignable<typeof page.qryLocateFieldWorkerData, unknown[] | QryLocateFieldWorkerOutput>>;
type _State_qryLocateWorkTaskState = Assert<Assignable<typeof page.qryLocateWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateWorkTaskData = Assert<Assignable<typeof page.qryLocateWorkTaskData, unknown[] | QryLocateWorkTaskOutput>>;
type _State_cmdCreateTimeLogState = Assert<Assignable<typeof page.cmdCreateTimeLogState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateTimeLogWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdCreateTimeLogWorkTaskWorkTaskId, string | CmdCreateTimeLogInput["workTaskWorkTaskId"]>>;
type _State_cmdCreateTimeLogWorkDate = Assert<Assignable<typeof page.cmdCreateTimeLogWorkDate, string | CmdCreateTimeLogInput["workDate"]>>;
type _State_cmdCreateTimeLogHoursWorked = Assert<Assignable<typeof page.cmdCreateTimeLogHoursWorked, string | CmdCreateTimeLogInput["hoursWorked"]>>;
type _State_cmdCreateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.cmdCreateTimeLogHourlyLaborCost, string | CmdCreateTimeLogInput["hourlyLaborCost"]>>;
type _State_cmdCreateTimeLogOutput = Assert<Assignable<typeof page.cmdCreateTimeLogOutput, CmdCreateTimeLogOutput | null>>;
type _State_cmdCreateTimeLogError = Assert<Assignable<typeof page.cmdCreateTimeLogError, string>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorState = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId, string | CmdHandoffTimeLogToFieldCoordinatorInput["timeLogTimeLogId"]>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorWorkDate = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorWorkDate, string | CmdHandoffTimeLogToFieldCoordinatorInput["workDate"]>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorHoursWorked = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorHoursWorked, string | CmdHandoffTimeLogToFieldCoordinatorInput["hoursWorked"]>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost, string | CmdHandoffTimeLogToFieldCoordinatorInput["hourlyLaborCost"]>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorOutput = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorOutput, CmdHandoffTimeLogToFieldCoordinatorOutput | null>>;
type _State_cmdHandoffTimeLogToFieldCoordinatorError = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinatorError, string>>;
type _Action_loadQryLocateFieldWorker = Assert<Assignable<typeof page.loadQryLocateFieldWorker, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateFieldWorkerClick = Assert<Assignable<typeof page.handleQryLocateFieldWorkerClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateWorkTask = Assert<Assignable<typeof page.loadQryLocateWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateWorkTaskClick = Assert<Assignable<typeof page.handleQryLocateWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateTimeLog = Assert<Assignable<typeof page.cmdCreateTimeLog, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogClick = Assert<Assignable<typeof page.handleCmdCreateTimeLogClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffTimeLogToFieldCoordinator = Assert<Assignable<typeof page.cmdHandoffTimeLogToFieldCoordinator, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffTimeLogToFieldCoordinatorClick = Assert<Assignable<typeof page.handleCmdHandoffTimeLogToFieldCoordinatorClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdCreateTimeLogWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogWorkDate = Assert<Assignable<typeof page.setCmdCreateTimeLogWorkDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogWorkDateChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogWorkDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogHoursWorked = Assert<Assignable<typeof page.setCmdCreateTimeLogHoursWorked, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogHoursWorkedChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogHoursWorkedChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.setCmdCreateTimeLogHourlyLaborCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogHourlyLaborCostChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogHourlyLaborCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = Assert<Assignable<typeof page.setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogIdChange = Assert<Assignable<typeof page.handleCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffTimeLogToFieldCoordinatorWorkDate = Assert<Assignable<typeof page.setCmdHandoffTimeLogToFieldCoordinatorWorkDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange = Assert<Assignable<typeof page.handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffTimeLogToFieldCoordinatorHoursWorked = Assert<Assignable<typeof page.setCmdHandoffTimeLogToFieldCoordinatorHoursWorked, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange = Assert<Assignable<typeof page.handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = Assert<Assignable<typeof page.setCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange = Assert<Assignable<typeof page.handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange, (...args: any[]) => unknown>>;

export {};