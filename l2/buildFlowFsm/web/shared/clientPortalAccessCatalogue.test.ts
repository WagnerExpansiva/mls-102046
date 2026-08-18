/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmClientPortalAccessCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.js';
import type { CmdCreateClientPortalAccessInput, CmdCreateClientPortalAccessOutput, CmdDeleteClientPortalAccessInput, CmdDeleteClientPortalAccessOutput, CmdUpdateClientPortalAccessInput, CmdUpdateClientPortalAccessOutput, QryClientPickerOutput, QryListClientPortalAccessOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmClientPortalAccessCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListClientPortalAccessState = Assert<Assignable<typeof page.qryListClientPortalAccessState, "idle" | "loading" | "success" | "error">>;
type _State_qryListClientPortalAccessData = Assert<Assignable<typeof page.qryListClientPortalAccessData, unknown[] | QryListClientPortalAccessOutput>>;
type _State_cmdCreateClientPortalAccessState = Assert<Assignable<typeof page.cmdCreateClientPortalAccessState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateClientPortalAccessClientId = Assert<Assignable<typeof page.cmdCreateClientPortalAccessClientId, string | CmdCreateClientPortalAccessInput["clientId"]>>;
type _State_cmdCreateClientPortalAccessPlatformUserId = Assert<Assignable<typeof page.cmdCreateClientPortalAccessPlatformUserId, string | CmdCreateClientPortalAccessInput["platformUserId"]>>;
type _State_cmdCreateClientPortalAccessStatus = Assert<Assignable<typeof page.cmdCreateClientPortalAccessStatus, string | CmdCreateClientPortalAccessInput["status"]>>;
type _State_cmdCreateClientPortalAccessOutput = Assert<Assignable<typeof page.cmdCreateClientPortalAccessOutput, CmdCreateClientPortalAccessOutput | null>>;
type _State_cmdCreateClientPortalAccessError = Assert<Assignable<typeof page.cmdCreateClientPortalAccessError, string>>;
type _State_cmdUpdateClientPortalAccessState = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateClientPortalAccessClientPortalAccessId = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessClientPortalAccessId, string | CmdUpdateClientPortalAccessInput["clientPortalAccessId"]>>;
type _State_cmdUpdateClientPortalAccessClientId = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessClientId, string | CmdUpdateClientPortalAccessInput["clientId"]>>;
type _State_cmdUpdateClientPortalAccessPlatformUserId = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessPlatformUserId, string | CmdUpdateClientPortalAccessInput["platformUserId"]>>;
type _State_cmdUpdateClientPortalAccessStatus = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessStatus, string | CmdUpdateClientPortalAccessInput["status"]>>;
type _State_cmdUpdateClientPortalAccessOutput = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessOutput, CmdUpdateClientPortalAccessOutput | null>>;
type _State_cmdUpdateClientPortalAccessError = Assert<Assignable<typeof page.cmdUpdateClientPortalAccessError, string>>;
type _State_cmdDeleteClientPortalAccessState = Assert<Assignable<typeof page.cmdDeleteClientPortalAccessState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteClientPortalAccessClientPortalAccessId = Assert<Assignable<typeof page.cmdDeleteClientPortalAccessClientPortalAccessId, string | CmdDeleteClientPortalAccessInput["clientPortalAccessId"]>>;
type _State_cmdDeleteClientPortalAccessOutput = Assert<Assignable<typeof page.cmdDeleteClientPortalAccessOutput, CmdDeleteClientPortalAccessOutput | null>>;
type _State_cmdDeleteClientPortalAccessError = Assert<Assignable<typeof page.cmdDeleteClientPortalAccessError, string>>;
type _State_qryClientPickerState = Assert<Assignable<typeof page.qryClientPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientPickerData = Assert<Assignable<typeof page.qryClientPickerData, unknown[] | QryClientPickerOutput>>;
type _Action_loadQryListClientPortalAccess = Assert<Assignable<typeof page.loadQryListClientPortalAccess, (...args: any[]) => unknown>>;
type _Handler_handleQryListClientPortalAccessClick = Assert<Assignable<typeof page.handleQryListClientPortalAccessClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateClientPortalAccess = Assert<Assignable<typeof page.cmdCreateClientPortalAccess, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientPortalAccessClick = Assert<Assignable<typeof page.handleCmdCreateClientPortalAccessClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateClientPortalAccess = Assert<Assignable<typeof page.cmdUpdateClientPortalAccess, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientPortalAccessClick = Assert<Assignable<typeof page.handleCmdUpdateClientPortalAccessClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteClientPortalAccess = Assert<Assignable<typeof page.cmdDeleteClientPortalAccess, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteClientPortalAccessClick = Assert<Assignable<typeof page.handleCmdDeleteClientPortalAccessClick, (...args: any[]) => unknown>>;
type _Action_loadQryClientPicker = Assert<Assignable<typeof page.loadQryClientPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryClientPickerClick = Assert<Assignable<typeof page.handleQryClientPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientPortalAccessClientId = Assert<Assignable<typeof page.setCmdCreateClientPortalAccessClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientPortalAccessClientIdChange = Assert<Assignable<typeof page.handleCmdCreateClientPortalAccessClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientPortalAccessPlatformUserId = Assert<Assignable<typeof page.setCmdCreateClientPortalAccessPlatformUserId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientPortalAccessPlatformUserIdChange = Assert<Assignable<typeof page.handleCmdCreateClientPortalAccessPlatformUserIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientPortalAccessStatus = Assert<Assignable<typeof page.setCmdCreateClientPortalAccessStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientPortalAccessStatusChange = Assert<Assignable<typeof page.handleCmdCreateClientPortalAccessStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientPortalAccessClientPortalAccessId = Assert<Assignable<typeof page.setCmdUpdateClientPortalAccessClientPortalAccessId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientPortalAccessClientPortalAccessIdChange = Assert<Assignable<typeof page.handleCmdUpdateClientPortalAccessClientPortalAccessIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientPortalAccessClientId = Assert<Assignable<typeof page.setCmdUpdateClientPortalAccessClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientPortalAccessClientIdChange = Assert<Assignable<typeof page.handleCmdUpdateClientPortalAccessClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientPortalAccessPlatformUserId = Assert<Assignable<typeof page.setCmdUpdateClientPortalAccessPlatformUserId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientPortalAccessPlatformUserIdChange = Assert<Assignable<typeof page.handleCmdUpdateClientPortalAccessPlatformUserIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientPortalAccessStatus = Assert<Assignable<typeof page.setCmdUpdateClientPortalAccessStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientPortalAccessStatusChange = Assert<Assignable<typeof page.handleCmdUpdateClientPortalAccessStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteClientPortalAccessClientPortalAccessId = Assert<Assignable<typeof page.setCmdDeleteClientPortalAccessClientPortalAccessId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteClientPortalAccessClientPortalAccessIdChange = Assert<Assignable<typeof page.handleCmdDeleteClientPortalAccessClientPortalAccessIdChange, (...args: any[]) => unknown>>;

export {};