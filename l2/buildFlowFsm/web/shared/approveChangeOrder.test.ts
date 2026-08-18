/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmApproveChangeOrderBase } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';
import type { CmdApproveChangeOrderDecisionInput, CmdApproveChangeOrderDecisionOutput, CmdHandoffApprovedChangeOrderToBillingInput, CmdHandoffApprovedChangeOrderToBillingOutput, QryClientPickerOutput, QryLocateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmApproveChangeOrderBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateChangeOrderState = Assert<Assignable<typeof page.qryLocateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateChangeOrderData = Assert<Assignable<typeof page.qryLocateChangeOrderData, unknown[] | QryLocateChangeOrderOutput>>;
type _State_cmdApproveChangeOrderDecisionState = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_cmdApproveChangeOrderDecisionChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId, string | CmdApproveChangeOrderDecisionInput["changeOrderChangeOrderId"]>>;
type _State_cmdApproveChangeOrderDecisionClientClientId = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionClientClientId, string | CmdApproveChangeOrderDecisionInput["clientClientId"]>>;
type _State_cmdApproveChangeOrderDecisionProjectProjectId = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionProjectProjectId, string | CmdApproveChangeOrderDecisionInput["projectProjectId"]>>;
type _State_cmdApproveChangeOrderDecisionStatus = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionStatus, string | CmdApproveChangeOrderDecisionInput["status"]>>;
type _State_cmdApproveChangeOrderDecisionOutput = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionOutput, CmdApproveChangeOrderDecisionOutput | null>>;
type _State_cmdApproveChangeOrderDecisionError = Assert<Assignable<typeof page.cmdApproveChangeOrderDecisionError, string>>;
type _State_cmdHandoffApprovedChangeOrderToBillingState = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId, string | CmdHandoffApprovedChangeOrderToBillingInput["changeOrderChangeOrderId"]>>;
type _State_cmdHandoffApprovedChangeOrderToBillingDescription = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingDescription, string | CmdHandoffApprovedChangeOrderToBillingInput["description"]>>;
type _State_cmdHandoffApprovedChangeOrderToBillingScopeImpact = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingScopeImpact, string | CmdHandoffApprovedChangeOrderToBillingInput["scopeImpact"]>>;
type _State_cmdHandoffApprovedChangeOrderToBillingScheduleImpact = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingScheduleImpact, string | CmdHandoffApprovedChangeOrderToBillingInput["scheduleImpact"]>>;
type _State_cmdHandoffApprovedChangeOrderToBillingChangeAmount = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingChangeAmount, string | CmdHandoffApprovedChangeOrderToBillingInput["changeAmount"]>>;
type _State_cmdHandoffApprovedChangeOrderToBillingOutput = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingOutput, CmdHandoffApprovedChangeOrderToBillingOutput | null>>;
type _State_cmdHandoffApprovedChangeOrderToBillingError = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBillingError, string>>;
type _State_qryClientPickerState = Assert<Assignable<typeof page.qryClientPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientPickerData = Assert<Assignable<typeof page.qryClientPickerData, unknown[] | QryClientPickerOutput>>;
type _Action_loadQryLocateChangeOrder = Assert<Assignable<typeof page.loadQryLocateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateChangeOrderClick = Assert<Assignable<typeof page.handleQryLocateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdApproveChangeOrderDecision = Assert<Assignable<typeof page.cmdApproveChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdApproveChangeOrderDecisionClick = Assert<Assignable<typeof page.handleCmdApproveChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffApprovedChangeOrderToBilling = Assert<Assignable<typeof page.cmdHandoffApprovedChangeOrderToBilling, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingClick = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingClick, (...args: any[]) => unknown>>;
type _Action_loadQryClientPicker = Assert<Assignable<typeof page.loadQryClientPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryClientPickerClick = Assert<Assignable<typeof page.handleQryClientPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdApproveChangeOrderDecisionClientClientId = Assert<Assignable<typeof page.setCmdApproveChangeOrderDecisionClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdApproveChangeOrderDecisionClientClientIdChange = Assert<Assignable<typeof page.handleCmdApproveChangeOrderDecisionClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdApproveChangeOrderDecisionProjectProjectId = Assert<Assignable<typeof page.setCmdApproveChangeOrderDecisionProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdApproveChangeOrderDecisionProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdApproveChangeOrderDecisionProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdApproveChangeOrderDecisionStatus = Assert<Assignable<typeof page.setCmdApproveChangeOrderDecisionStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdApproveChangeOrderDecisionStatusChange = Assert<Assignable<typeof page.handleCmdApproveChangeOrderDecisionStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffApprovedChangeOrderToBillingDescription = Assert<Assignable<typeof page.setCmdHandoffApprovedChangeOrderToBillingDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffApprovedChangeOrderToBillingScopeImpact = Assert<Assignable<typeof page.setCmdHandoffApprovedChangeOrderToBillingScopeImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffApprovedChangeOrderToBillingScheduleImpact = Assert<Assignable<typeof page.setCmdHandoffApprovedChangeOrderToBillingScheduleImpact, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffApprovedChangeOrderToBillingChangeAmount = Assert<Assignable<typeof page.setCmdHandoffApprovedChangeOrderToBillingChangeAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange = Assert<Assignable<typeof page.handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange, (...args: any[]) => unknown>>;

export {};