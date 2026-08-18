/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmIssueProjectInvoiceBase } from '/_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.js';
import type { CmdCreateInvoiceInput, CmdCreateInvoiceOutput, CmdHandoffInvoiceToClientInput, CmdHandoffInvoiceToClientOutput, QryInspectClientBillingSummaryInput, QryInspectClientBillingSummaryOutput, QryLocateClientOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmIssueProjectInvoiceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateClientState = Assert<Assignable<typeof page.qryLocateClientState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateClientData = Assert<Assignable<typeof page.qryLocateClientData, unknown[] | QryLocateClientOutput>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectClientBillingSummaryState = Assert<Assignable<typeof page.qryInspectClientBillingSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.qryInspectClientBillingSummaryClientBillingSummaryClientId, string | QryInspectClientBillingSummaryInput["clientBillingSummaryClientId"]>>;
type _State_qryInspectClientBillingSummaryData = Assert<Assignable<typeof page.qryInspectClientBillingSummaryData, QryInspectClientBillingSummaryOutput | null>>;
type _State_cmdCreateInvoiceState = Assert<Assignable<typeof page.cmdCreateInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateInvoiceClientClientId = Assert<Assignable<typeof page.cmdCreateInvoiceClientClientId, string | CmdCreateInvoiceInput["clientClientId"]>>;
type _State_cmdCreateInvoiceProjectProjectId = Assert<Assignable<typeof page.cmdCreateInvoiceProjectProjectId, string | CmdCreateInvoiceInput["projectProjectId"]>>;
type _State_cmdCreateInvoiceCommercialReference = Assert<Assignable<typeof page.cmdCreateInvoiceCommercialReference, string | CmdCreateInvoiceInput["commercialReference"]>>;
type _State_cmdCreateInvoiceAmount = Assert<Assignable<typeof page.cmdCreateInvoiceAmount, string | CmdCreateInvoiceInput["amount"]>>;
type _State_cmdCreateInvoiceOutput = Assert<Assignable<typeof page.cmdCreateInvoiceOutput, CmdCreateInvoiceOutput | null>>;
type _State_cmdCreateInvoiceError = Assert<Assignable<typeof page.cmdCreateInvoiceError, string>>;
type _State_cmdHandoffInvoiceToClientState = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientState, "idle" | "loading" | "success" | "error">>;
type _State_cmdHandoffInvoiceToClientInvoiceInvoiceId = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientInvoiceInvoiceId, string | CmdHandoffInvoiceToClientInput["invoiceInvoiceId"]>>;
type _State_cmdHandoffInvoiceToClientCommercialReference = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientCommercialReference, string | CmdHandoffInvoiceToClientInput["commercialReference"]>>;
type _State_cmdHandoffInvoiceToClientAmount = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientAmount, string | CmdHandoffInvoiceToClientInput["amount"]>>;
type _State_cmdHandoffInvoiceToClientOutput = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientOutput, CmdHandoffInvoiceToClientOutput | null>>;
type _State_cmdHandoffInvoiceToClientError = Assert<Assignable<typeof page.cmdHandoffInvoiceToClientError, string>>;
type _Action_loadQryLocateClient = Assert<Assignable<typeof page.loadQryLocateClient, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateClientClick = Assert<Assignable<typeof page.handleQryLocateClientClick, (...args: any[]) => unknown>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectClientBillingSummary = Assert<Assignable<typeof page.loadQryInspectClientBillingSummary, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClick = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateInvoice = Assert<Assignable<typeof page.cmdCreateInvoice, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceClick = Assert<Assignable<typeof page.handleCmdCreateInvoiceClick, (...args: any[]) => unknown>>;
type _Action_cmdHandoffInvoiceToClient = Assert<Assignable<typeof page.cmdHandoffInvoiceToClient, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffInvoiceToClientClick = Assert<Assignable<typeof page.handleCmdHandoffInvoiceToClientClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.setQryInspectClientBillingSummaryClientBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceClientClientId = Assert<Assignable<typeof page.setCmdCreateInvoiceClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceClientClientIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceProjectProjectId = Assert<Assignable<typeof page.setCmdCreateInvoiceProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceCommercialReference = Assert<Assignable<typeof page.setCmdCreateInvoiceCommercialReference, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceCommercialReferenceChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceCommercialReferenceChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceAmount = Assert<Assignable<typeof page.setCmdCreateInvoiceAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceAmountChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffInvoiceToClientInvoiceInvoiceId = Assert<Assignable<typeof page.setCmdHandoffInvoiceToClientInvoiceInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffInvoiceToClientInvoiceInvoiceIdChange = Assert<Assignable<typeof page.handleCmdHandoffInvoiceToClientInvoiceInvoiceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffInvoiceToClientCommercialReference = Assert<Assignable<typeof page.setCmdHandoffInvoiceToClientCommercialReference, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffInvoiceToClientCommercialReferenceChange = Assert<Assignable<typeof page.handleCmdHandoffInvoiceToClientCommercialReferenceChange, (...args: any[]) => unknown>>;
type _Action_setCmdHandoffInvoiceToClientAmount = Assert<Assignable<typeof page.setCmdHandoffInvoiceToClientAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdHandoffInvoiceToClientAmountChange = Assert<Assignable<typeof page.handleCmdHandoffInvoiceToClientAmountChange, (...args: any[]) => unknown>>;

export {};