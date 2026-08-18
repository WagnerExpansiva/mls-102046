/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmChangeOrderDecisionCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.js';
import type { CmdCreateChangeOrderDecisionInput, CmdCreateChangeOrderDecisionOutput, CmdDeleteChangeOrderDecisionInput, CmdDeleteChangeOrderDecisionOutput, CmdUpdateChangeOrderDecisionInput, CmdUpdateChangeOrderDecisionOutput, QryChangeOrderPickerOutput, QryListChangeOrderDecisionOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmChangeOrderDecisionCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListChangeOrderDecisionState = Assert<Assignable<typeof page.qryListChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_qryListChangeOrderDecisionData = Assert<Assignable<typeof page.qryListChangeOrderDecisionData, unknown[] | QryListChangeOrderDecisionOutput>>;
type _State_cmdCreateChangeOrderDecisionState = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateChangeOrderDecisionChangeOrder = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionChangeOrder, string | CmdCreateChangeOrderDecisionInput["changeOrder"]>>;
type _State_cmdCreateChangeOrderDecisionMadeByPlatformUser = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionMadeByPlatformUser, string | CmdCreateChangeOrderDecisionInput["madeByPlatformUser"]>>;
type _State_cmdCreateChangeOrderDecisionDecision = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionDecision, string | CmdCreateChangeOrderDecisionInput["decision"]>>;
type _State_cmdCreateChangeOrderDecisionDecidedAt = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionDecidedAt, string | CmdCreateChangeOrderDecisionInput["decidedAt"]>>;
type _State_cmdCreateChangeOrderDecisionOutput = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionOutput, CmdCreateChangeOrderDecisionOutput | null>>;
type _State_cmdCreateChangeOrderDecisionError = Assert<Assignable<typeof page.cmdCreateChangeOrderDecisionError, string>>;
type _State_cmdUpdateChangeOrderDecisionState = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateChangeOrderDecisionChangeOrderDecisionId = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionChangeOrderDecisionId, string | CmdUpdateChangeOrderDecisionInput["changeOrderDecisionId"]>>;
type _State_cmdUpdateChangeOrderDecisionChangeOrder = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionChangeOrder, string | CmdUpdateChangeOrderDecisionInput["changeOrder"]>>;
type _State_cmdUpdateChangeOrderDecisionMadeByPlatformUser = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionMadeByPlatformUser, string | CmdUpdateChangeOrderDecisionInput["madeByPlatformUser"]>>;
type _State_cmdUpdateChangeOrderDecisionDecision = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionDecision, string | CmdUpdateChangeOrderDecisionInput["decision"]>>;
type _State_cmdUpdateChangeOrderDecisionDecidedAt = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionDecidedAt, string | CmdUpdateChangeOrderDecisionInput["decidedAt"]>>;
type _State_cmdUpdateChangeOrderDecisionOutput = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionOutput, CmdUpdateChangeOrderDecisionOutput | null>>;
type _State_cmdUpdateChangeOrderDecisionError = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecisionError, string>>;
type _State_cmdDeleteChangeOrderDecisionState = Assert<Assignable<typeof page.cmdDeleteChangeOrderDecisionState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteChangeOrderDecisionChangeOrderDecisionId = Assert<Assignable<typeof page.cmdDeleteChangeOrderDecisionChangeOrderDecisionId, string | CmdDeleteChangeOrderDecisionInput["changeOrderDecisionId"]>>;
type _State_cmdDeleteChangeOrderDecisionOutput = Assert<Assignable<typeof page.cmdDeleteChangeOrderDecisionOutput, CmdDeleteChangeOrderDecisionOutput | null>>;
type _State_cmdDeleteChangeOrderDecisionError = Assert<Assignable<typeof page.cmdDeleteChangeOrderDecisionError, string>>;
type _State_qryChangeOrderPickerState = Assert<Assignable<typeof page.qryChangeOrderPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryChangeOrderPickerData = Assert<Assignable<typeof page.qryChangeOrderPickerData, unknown[] | QryChangeOrderPickerOutput>>;
type _Action_loadQryListChangeOrderDecision = Assert<Assignable<typeof page.loadQryListChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleQryListChangeOrderDecisionClick = Assert<Assignable<typeof page.handleQryListChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateChangeOrderDecision = Assert<Assignable<typeof page.cmdCreateChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDecisionClick = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateChangeOrderDecision = Assert<Assignable<typeof page.cmdUpdateChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionClick = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteChangeOrderDecision = Assert<Assignable<typeof page.cmdDeleteChangeOrderDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteChangeOrderDecisionClick = Assert<Assignable<typeof page.handleCmdDeleteChangeOrderDecisionClick, (...args: any[]) => unknown>>;
type _Action_loadQryChangeOrderPicker = Assert<Assignable<typeof page.loadQryChangeOrderPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryChangeOrderPickerClick = Assert<Assignable<typeof page.handleQryChangeOrderPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDecisionChangeOrder = Assert<Assignable<typeof page.setCmdCreateChangeOrderDecisionChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDecisionChangeOrderChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDecisionChangeOrderChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDecisionMadeByPlatformUser = Assert<Assignable<typeof page.setCmdCreateChangeOrderDecisionMadeByPlatformUser, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDecisionMadeByPlatformUserChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDecisionMadeByPlatformUserChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDecisionDecision = Assert<Assignable<typeof page.setCmdCreateChangeOrderDecisionDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDecisionDecisionChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDecisionDecisionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDecisionDecidedAt = Assert<Assignable<typeof page.setCmdCreateChangeOrderDecisionDecidedAt, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDecisionDecidedAtChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDecisionDecidedAtChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDecisionChangeOrderDecisionId = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDecisionChangeOrderDecisionId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionChangeOrderDecisionIdChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionChangeOrderDecisionIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDecisionChangeOrder = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDecisionChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionChangeOrderChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionChangeOrderChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDecisionMadeByPlatformUser = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDecisionMadeByPlatformUser, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionMadeByPlatformUserChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionMadeByPlatformUserChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDecisionDecision = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDecisionDecision, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionDecisionChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionDecisionChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDecisionDecidedAt = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDecisionDecidedAt, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDecisionDecidedAtChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDecisionDecidedAtChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteChangeOrderDecisionChangeOrderDecisionId = Assert<Assignable<typeof page.setCmdDeleteChangeOrderDecisionChangeOrderDecisionId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteChangeOrderDecisionChangeOrderDecisionIdChange = Assert<Assignable<typeof page.handleCmdDeleteChangeOrderDecisionChangeOrderDecisionIdChange, (...args: any[]) => unknown>>;

export {};