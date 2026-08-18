/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmForwardChangeOrderForClientApprovalBase } from '/_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.js';
import type { CmdHandoffChangeOrderToClientInput, CmdHandoffChangeOrderToClientOutput, QryLocateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmForwardChangeOrderForClientApprovalBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateChangeOrderState = Assert<Assignable<typeof page.qryLocateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateChangeOrderData = Assert<Assignable<typeof page.qryLocateChangeOrderData, unknown[] | QryLocateChangeOrderOutput>>;
type _State_cmdHandoffChangeOrderToClientState = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffChangeOrderToClientChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId, string | CmdHandoffChangeOrderToClientInput["changeOrderChangeOrderId"]>>;
type _State_cmdHandoffChangeOrderToClientDescription = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientDescription, string | CmdHandoffChangeOrderToClientInput["description"]>>;
type _State_cmdHandoffChangeOrderToClientScopeImpact = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientScopeImpact, string | CmdHandoffChangeOrderToClientInput["scopeImpact"]>>;
type _State_cmdHandoffChangeOrderToClientScheduleImpact = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientScheduleImpact, string | CmdHandoffChangeOrderToClientInput["scheduleImpact"]>>;
type _State_cmdHandoffChangeOrderToClientChangeAmount = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientChangeAmount, string | CmdHandoffChangeOrderToClientInput["changeAmount"]>>;
type _State_cmdHandoffChangeOrderToClientOutput = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientOutput, CmdHandoffChangeOrderToClientOutput | null>>;
type _State_cmdHandoffChangeOrderToClientError = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClientError, string>>;
type _Action_loadQryLocateChangeOrder = Assert<Assignable<typeof page.loadQryLocateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateChangeOrderClick = Assert<Assignable<typeof page.handleQryLocateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffChangeOrderToClient = Assert<Assignable<typeof page.cmdHandoffChangeOrderToClient, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientClick = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientClick, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToClientDescription = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToClientDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToClientScopeImpact = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToClientScopeImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientScopeImpactChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientScopeImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToClientScheduleImpact = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToClientScheduleImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientScheduleImpactChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientScheduleImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffChangeOrderToClientChangeAmount = Assert<Assignable<typeof page.setCmdHandoffChangeOrderToClientChangeAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffChangeOrderToClientChangeAmountChange = Assert<Assignable<typeof page.handleCmdHandoffChangeOrderToClientChangeAmountChange, (...args: any[]) => unknown>>;

export {};