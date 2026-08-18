/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmDeclineChangeOrderBase } from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';
import type { CmdDeclineChangeOrderDecisionInput, CmdDeclineChangeOrderDecisionOutput, CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput, CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput, QryClientPickerOutput, QryLocateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmDeclineChangeOrderBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateChangeOrderState = Assert<Assignable<typeof page.qryLocateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateChangeOrderData = Assert<Assignable<typeof page.qryLocateChangeOrderData, unknown[] | QryLocateChangeOrderOutput>>;
type _State_cmdDeclineChangeOrderDecisionState = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId, string | CmdDeclineChangeOrderDecisionInput["changeOrderChangeOrderId"]>>;
type _State_cmdDeclineChangeOrderDecisionClientClientId = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionClientClientId, string | CmdDeclineChangeOrderDecisionInput["clientClientId"]>>;
type _State_cmdDeclineChangeOrderDecisionProjectProjectId = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionProjectProjectId, string | CmdDeclineChangeOrderDecisionInput["projectProjectId"]>>;
type _State_cmdDeclineChangeOrderDecisionStatus = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionStatus, string | CmdDeclineChangeOrderDecisionInput["status"]>>;
type _State_cmdDeclineChangeOrderDecisionOutput = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionOutput, CmdDeclineChangeOrderDecisionOutput | null>>;
type _State_cmdDeclineChangeOrderDecisionError = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecisionError, string>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId, string | CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput["changeOrderChangeOrderId"]>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription, string | CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput["description"]>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact, string | CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput["scopeImpact"]>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact, string | CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput["scheduleImpact"]>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount, string | CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput["changeAmount"]>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput, CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput | null>>;
type _State_cmdHandoffDeclinedChangeOrderToFieldCoordinatorError = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError, string>>;
type _State_qryClientPickerState = Assert<Assignable<typeof page.qryClientPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientPickerData = Assert<Assignable<typeof page.qryClientPickerData, unknown[] | QryClientPickerOutput>>;
type _Action_loadQryLocateChangeOrder = Assert<Assignable<typeof page.loadQryLocateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateChangeOrderClick = Assert<Assignable<typeof page.handleQryLocateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdDeclineChangeOrderDecision = Assert<Assignable<typeof page.cmdDeclineChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeclineChangeOrderDecisionClick = Assert<Assignable<typeof page.handleCmdDeclineChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffDeclinedChangeOrderToFieldCoordinator = Assert<Assignable<typeof page.cmdHandoffDeclinedChangeOrderToFieldCoordinator, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick, (...args: any[]) => unknown>>;
type _Action_loadQryClientPicker = Assert<Assignable<typeof page.loadQryClientPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryClientPickerClick = Assert<Assignable<typeof page.handleQryClientPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeclineChangeOrderDecisionChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdDeclineChangeOrderDecisionChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeclineChangeOrderDecisionClientClientId = Assert<Assignable<typeof page.setCmdDeclineChangeOrderDecisionClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeclineChangeOrderDecisionClientClientIdChange = Assert<Assignable<typeof page.handleCmdDeclineChangeOrderDecisionClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeclineChangeOrderDecisionProjectProjectId = Assert<Assignable<typeof page.setCmdDeclineChangeOrderDecisionProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeclineChangeOrderDecisionProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdDeclineChangeOrderDecisionProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeclineChangeOrderDecisionStatus = Assert<Assignable<typeof page.setCmdDeclineChangeOrderDecisionStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeclineChangeOrderDecisionStatusChange = Assert<Assignable<typeof page.handleCmdDeclineChangeOrderDecisionStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = Assert<Assignable<typeof page.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = Assert<Assignable<typeof page.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = Assert<Assignable<typeof page.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = Assert<Assignable<typeof page.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange = Assert<Assignable<typeof page.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange, (...args: any[]) => unknown>>;

export {};