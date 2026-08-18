/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmClientCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.js';
import type { CmdCreateClientInput, CmdCreateClientOutput, CmdDeleteClientInput, CmdDeleteClientOutput, CmdUpdateClientInput, CmdUpdateClientOutput, QryListClientOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmClientCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListClientState = Assert<Assignable<typeof page.qryListClientState, "idle" | "loading" | "success" | "error">>;
type _State_qryListClientData = Assert<Assignable<typeof page.qryListClientData, unknown[] | QryListClientOutput>>;
type _State_cmdCreateClientState = Assert<Assignable<typeof page.cmdCreateClientState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateClientClientName = Assert<Assignable<typeof page.cmdCreateClientClientName, string | CmdCreateClientInput["clientName"]>>;
type _State_cmdCreateClientContactEmail = Assert<Assignable<typeof page.cmdCreateClientContactEmail, string | CmdCreateClientInput["contactEmail"]>>;
type _State_cmdCreateClientContactPhone = Assert<Assignable<typeof page.cmdCreateClientContactPhone, string | CmdCreateClientInput["contactPhone"]>>;
type _State_cmdCreateClientOutput = Assert<Assignable<typeof page.cmdCreateClientOutput, CmdCreateClientOutput | null>>;
type _State_cmdCreateClientError = Assert<Assignable<typeof page.cmdCreateClientError, string>>;
type _State_cmdUpdateClientState = Assert<Assignable<typeof page.cmdUpdateClientState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateClientClientId = Assert<Assignable<typeof page.cmdUpdateClientClientId, string | CmdUpdateClientInput["clientId"]>>;
type _State_cmdUpdateClientClientName = Assert<Assignable<typeof page.cmdUpdateClientClientName, string | CmdUpdateClientInput["clientName"]>>;
type _State_cmdUpdateClientContactEmail = Assert<Assignable<typeof page.cmdUpdateClientContactEmail, string | CmdUpdateClientInput["contactEmail"]>>;
type _State_cmdUpdateClientContactPhone = Assert<Assignable<typeof page.cmdUpdateClientContactPhone, string | CmdUpdateClientInput["contactPhone"]>>;
type _State_cmdUpdateClientOutput = Assert<Assignable<typeof page.cmdUpdateClientOutput, CmdUpdateClientOutput | null>>;
type _State_cmdUpdateClientError = Assert<Assignable<typeof page.cmdUpdateClientError, string>>;
type _State_cmdDeleteClientState = Assert<Assignable<typeof page.cmdDeleteClientState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteClientClientId = Assert<Assignable<typeof page.cmdDeleteClientClientId, string | CmdDeleteClientInput["clientId"]>>;
type _State_cmdDeleteClientOutput = Assert<Assignable<typeof page.cmdDeleteClientOutput, CmdDeleteClientOutput | null>>;
type _State_cmdDeleteClientError = Assert<Assignable<typeof page.cmdDeleteClientError, string>>;
type _Action_loadQryListClient = Assert<Assignable<typeof page.loadQryListClient, (...args: any[]) => unknown>>;
type _Handler_handleQryListClientClick = Assert<Assignable<typeof page.handleQryListClientClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateClient = Assert<Assignable<typeof page.cmdCreateClient, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientClick = Assert<Assignable<typeof page.handleCmdCreateClientClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateClient = Assert<Assignable<typeof page.cmdUpdateClient, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientClick = Assert<Assignable<typeof page.handleCmdUpdateClientClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteClient = Assert<Assignable<typeof page.cmdDeleteClient, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteClientClick = Assert<Assignable<typeof page.handleCmdDeleteClientClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientClientName = Assert<Assignable<typeof page.setCmdCreateClientClientName, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientClientNameChange = Assert<Assignable<typeof page.handleCmdCreateClientClientNameChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientContactEmail = Assert<Assignable<typeof page.setCmdCreateClientContactEmail, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientContactEmailChange = Assert<Assignable<typeof page.handleCmdCreateClientContactEmailChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateClientContactPhone = Assert<Assignable<typeof page.setCmdCreateClientContactPhone, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateClientContactPhoneChange = Assert<Assignable<typeof page.handleCmdCreateClientContactPhoneChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientClientId = Assert<Assignable<typeof page.setCmdUpdateClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientClientIdChange = Assert<Assignable<typeof page.handleCmdUpdateClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientClientName = Assert<Assignable<typeof page.setCmdUpdateClientClientName, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientClientNameChange = Assert<Assignable<typeof page.handleCmdUpdateClientClientNameChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientContactEmail = Assert<Assignable<typeof page.setCmdUpdateClientContactEmail, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientContactEmailChange = Assert<Assignable<typeof page.handleCmdUpdateClientContactEmailChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateClientContactPhone = Assert<Assignable<typeof page.setCmdUpdateClientContactPhone, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateClientContactPhoneChange = Assert<Assignable<typeof page.handleCmdUpdateClientContactPhoneChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteClientClientId = Assert<Assignable<typeof page.setCmdDeleteClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteClientClientIdChange = Assert<Assignable<typeof page.handleCmdDeleteClientClientIdChange, (...args: any[]) => unknown>>;

export {};