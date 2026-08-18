/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmTimeLogCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.js';
import type { CmdCreateTimeLogInput, CmdCreateTimeLogOutput, CmdDeleteTimeLogInput, CmdDeleteTimeLogOutput, CmdUpdateTimeLogInput, CmdUpdateTimeLogOutput, QryListTimeLogOutput, QryWorkTaskPickerOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmTimeLogCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListTimeLogState = Assert<Assignable<typeof page.qryListTimeLogState, "idle" | "loading" | "success" | "error">>;
type _State_qryListTimeLogData = Assert<Assignable<typeof page.qryListTimeLogData, unknown[] | QryListTimeLogOutput>>;
type _State_cmdCreateTimeLogState = Assert<Assignable<typeof page.cmdCreateTimeLogState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateTimeLogWorkTaskWorkTaskId = Assert<Assignable<typeof page.cmdCreateTimeLogWorkTaskWorkTaskId, string | CmdCreateTimeLogInput["workTaskWorkTaskId"]>>;
type _State_cmdCreateTimeLogWorkDate = Assert<Assignable<typeof page.cmdCreateTimeLogWorkDate, string | CmdCreateTimeLogInput["workDate"]>>;
type _State_cmdCreateTimeLogHoursWorked = Assert<Assignable<typeof page.cmdCreateTimeLogHoursWorked, string | CmdCreateTimeLogInput["hoursWorked"]>>;
type _State_cmdCreateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.cmdCreateTimeLogHourlyLaborCost, string | CmdCreateTimeLogInput["hourlyLaborCost"]>>;
type _State_cmdCreateTimeLogOutput = Assert<Assignable<typeof page.cmdCreateTimeLogOutput, CmdCreateTimeLogOutput | null>>;
type _State_cmdCreateTimeLogError = Assert<Assignable<typeof page.cmdCreateTimeLogError, string>>;
type _State_cmdUpdateTimeLogState = Assert<Assignable<typeof page.cmdUpdateTimeLogState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateTimeLogTimeLogId = Assert<Assignable<typeof page.cmdUpdateTimeLogTimeLogId, string | CmdUpdateTimeLogInput["timeLogId"]>>;
type _State_cmdUpdateTimeLogStatus = Assert<Assignable<typeof page.cmdUpdateTimeLogStatus, string | CmdUpdateTimeLogInput["status"]>>;
type _State_cmdUpdateTimeLogWorkTaskId = Assert<Assignable<typeof page.cmdUpdateTimeLogWorkTaskId, string | CmdUpdateTimeLogInput["workTaskId"]>>;
type _State_cmdUpdateTimeLogFieldWorkerId = Assert<Assignable<typeof page.cmdUpdateTimeLogFieldWorkerId, string | CmdUpdateTimeLogInput["fieldWorkerId"]>>;
type _State_cmdUpdateTimeLogWorkDate = Assert<Assignable<typeof page.cmdUpdateTimeLogWorkDate, string | CmdUpdateTimeLogInput["workDate"]>>;
type _State_cmdUpdateTimeLogHoursWorked = Assert<Assignable<typeof page.cmdUpdateTimeLogHoursWorked, string | CmdUpdateTimeLogInput["hoursWorked"]>>;
type _State_cmdUpdateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.cmdUpdateTimeLogHourlyLaborCost, string | CmdUpdateTimeLogInput["hourlyLaborCost"]>>;
type _State_cmdUpdateTimeLogOutput = Assert<Assignable<typeof page.cmdUpdateTimeLogOutput, CmdUpdateTimeLogOutput | null>>;
type _State_cmdUpdateTimeLogError = Assert<Assignable<typeof page.cmdUpdateTimeLogError, string>>;
type _State_cmdDeleteTimeLogState = Assert<Assignable<typeof page.cmdDeleteTimeLogState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteTimeLogTimeLogId = Assert<Assignable<typeof page.cmdDeleteTimeLogTimeLogId, string | CmdDeleteTimeLogInput["timeLogId"]>>;
type _State_cmdDeleteTimeLogOutput = Assert<Assignable<typeof page.cmdDeleteTimeLogOutput, CmdDeleteTimeLogOutput | null>>;
type _State_cmdDeleteTimeLogError = Assert<Assignable<typeof page.cmdDeleteTimeLogError, string>>;
type _State_qryWorkTaskPickerState = Assert<Assignable<typeof page.qryWorkTaskPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryWorkTaskPickerData = Assert<Assignable<typeof page.qryWorkTaskPickerData, unknown[] | QryWorkTaskPickerOutput>>;
type _Action_loadQryListTimeLog = Assert<Assignable<typeof page.loadQryListTimeLog, (...args: any[]) => unknown>>;
type _Handler_handleQryListTimeLogClick = Assert<Assignable<typeof page.handleQryListTimeLogClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateTimeLog = Assert<Assignable<typeof page.cmdCreateTimeLog, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogClick = Assert<Assignable<typeof page.handleCmdCreateTimeLogClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateTimeLog = Assert<Assignable<typeof page.cmdUpdateTimeLog, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogClick = Assert<Assignable<typeof page.handleCmdUpdateTimeLogClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteTimeLog = Assert<Assignable<typeof page.cmdDeleteTimeLog, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteTimeLogClick = Assert<Assignable<typeof page.handleCmdDeleteTimeLogClick, (...args: any[]) => unknown>>;
type _Action_loadQryWorkTaskPicker = Assert<Assignable<typeof page.loadQryWorkTaskPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryWorkTaskPickerClick = Assert<Assignable<typeof page.handleQryWorkTaskPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogWorkTaskWorkTaskId = Assert<Assignable<typeof page.setCmdCreateTimeLogWorkTaskWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogWorkTaskWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogWorkDate = Assert<Assignable<typeof page.setCmdCreateTimeLogWorkDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogWorkDateChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogWorkDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogHoursWorked = Assert<Assignable<typeof page.setCmdCreateTimeLogHoursWorked, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogHoursWorkedChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogHoursWorkedChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.setCmdCreateTimeLogHourlyLaborCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateTimeLogHourlyLaborCostChange = Assert<Assignable<typeof page.handleCmdCreateTimeLogHourlyLaborCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogTimeLogId = Assert<Assignable<typeof page.setCmdUpdateTimeLogTimeLogId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogTimeLogIdChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogTimeLogIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogStatus = Assert<Assignable<typeof page.setCmdUpdateTimeLogStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogStatusChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogWorkTaskId = Assert<Assignable<typeof page.setCmdUpdateTimeLogWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogWorkTaskIdChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogFieldWorkerId = Assert<Assignable<typeof page.setCmdUpdateTimeLogFieldWorkerId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogFieldWorkerIdChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogFieldWorkerIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogWorkDate = Assert<Assignable<typeof page.setCmdUpdateTimeLogWorkDate, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogWorkDateChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogWorkDateChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogHoursWorked = Assert<Assignable<typeof page.setCmdUpdateTimeLogHoursWorked, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogHoursWorkedChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogHoursWorkedChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateTimeLogHourlyLaborCost = Assert<Assignable<typeof page.setCmdUpdateTimeLogHourlyLaborCost, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateTimeLogHourlyLaborCostChange = Assert<Assignable<typeof page.handleCmdUpdateTimeLogHourlyLaborCostChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteTimeLogTimeLogId = Assert<Assignable<typeof page.setCmdDeleteTimeLogTimeLogId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteTimeLogTimeLogIdChange = Assert<Assignable<typeof page.handleCmdDeleteTimeLogTimeLogIdChange, (...args: any[]) => unknown>>;

export {};