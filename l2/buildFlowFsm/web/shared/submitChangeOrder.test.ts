/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmSubmitChangeOrderBase } from '/_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.js';
import type { CmdCreateChangeOrderInput, CmdCreateChangeOrderOutput, CmdHandoffChangeOrderToProjectManagerInput, CmdHandoffChangeOrderToProjectManagerOutput, QryLocateClientOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmSubmitChangeOrderBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateClientState = Assert<Assignable<typeof page.qryLocateClientState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateClientData = Assert<Assignable<typeof page.qryLocateClientData, unknown[] | QryLocateClientOutput>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_cmdCreateChangeOrderState = Assert<Assignable<typeof page.cmdCreateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateChangeOrderClientClientId = Assert<Assignable<typeof page.cmdCreateChangeOrderClientClientId, string | CmdCreateChangeOrderInput["clientClientId"]>>;
type _State_cmdCreateChangeOrderProjectProjectId = Assert<Assignable<typeof page.cmdCreateChangeOrderProjectProjectId, string | CmdCreateChangeOrderInput["projectProjectId"]>>;
type _State_cmdCreateChangeOrderDescription = Assert<Assignable<typeof page.cmdCreateChangeOrderDescription, string | CmdCreateChangeOrderInput["description"]>>;
type _State_cmdCreateChangeOrderScopeImpact = Assert<Assignable<typeof page.cmdCreateChangeOrderScopeImpact, string | CmdCreateChangeOrderInput["scopeImpact"]>>;
type _State_cmdCreateChangeOrderScheduleImpact = Assert<Assignable<typeof page.cmdCreateChangeOrderScheduleImpact, string | CmdCreateChangeOrderInput["scheduleImpact"]>>;
type _State_cmdCreateChangeOrderChangeAmount = Assert<Assignable<typeof page.cmdCreateChangeOrderChangeAmount, string | CmdCreateChangeOrderInput["changeAmount"]>>;
type _State_cmdCreateChangeOrderOutput = Assert<Assignable<typeof page.cmdCreateChangeOrderOutput, CmdCreateChangeOrderOutput | null>>;
type _State_cmdCreateChangeOrderError = Assert<Assignable<typeof page.cmdCreateChangeOrderError, string>>;
type _State_cmdHandoffChangeOrderToProjectManagerState = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId, string | CmdHandoffChangeOrderToProjectManagerInput["changeOrderChangeOrderId"]>>;
type _State_cmdHandoffChangeOrderToProjectManagerDescription = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerDescription, string | CmdHandoffChangeOrderToProjectManagerInput["description"]>>;
type _State_cmdHandoffChangeOrderToProjectManagerScopeImpact = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerScopeImpact, string | CmdHandoffChangeOrderToProjectManagerInput["scopeImpact"]>>;
type _State_cmdHandoffChangeOrderToProjectManagerScheduleImpact = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerScheduleImpact, string | CmdHandoffChangeOrderToProjectManagerInput["scheduleImpact"]>>;
type _State_cmdHandoffChangeOrderToProjectManagerChangeAmount = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerChangeAmount, string | CmdHandoffChangeOrderToProjectManagerInput["changeAmount"]>>;
type _State_cmdHandoffChangeOrderToProjectManagerOutput = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerOutput, CmdHandoffChangeOrderToProjectManagerOutput | null>>;
type _State_cmdHandoffChangeOrderToProjectManagerError = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManagerError, string>>;
type _Action_loadQryLocateClient = Assert<Assignable<typeof page.loadQryLocateClient, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateClientClick = Assert<Assignable<typeof page.handleQryLocateClientClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateChangeOrder = Assert<Assignable<typeof page.cmdCreateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderClick = Assert<Assignable<typeof page.handleCmdCreateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffChangeOrderToProjectManager = Assert<Assignable<typeof page.cmdHandoffChangeOrderToProjectManager, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerClick = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderClientClientId = Assert<Assignable<typeof page.setCmdCreateChangeOrderClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderClientClientIdChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderProjectProjectId = Assert<Assignable<typeof page.setCmdCreateChangeOrderProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDescription = Assert<Assignable<typeof page.setCmdCreateChangeOrderDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderScopeImpact = Assert<Assignable<typeof page.setCmdCreateChangeOrderScopeImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderScopeImpactChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderScopeImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderScheduleImpact = Assert<Assignable<typeof page.setCmdCreateChangeOrderScheduleImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderScheduleImpactChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderScheduleImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderChangeAmount = Assert<Assignable<typeof page.setCmdCreateChangeOrderChangeAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderChangeAmountChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderChangeAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToProjectManagerDescription = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToProjectManagerDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToProjectManagerScopeImpact = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToProjectManagerScopeImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToProjectManagerScheduleImpact = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToProjectManagerScheduleImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToProjectManagerChangeAmount = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToProjectManagerChangeAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange, (...args: any[]) => unknown>>;

export {};