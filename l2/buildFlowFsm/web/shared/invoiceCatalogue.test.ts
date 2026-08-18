/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmInvoiceCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.js';
import type { CmdCreateInvoiceInput, CmdCreateInvoiceOutput, CmdDeleteInvoiceInput, CmdDeleteInvoiceOutput, CmdUpdateInvoiceInput, CmdUpdateInvoiceOutput, QryClientPickerOutput, QryListInvoiceOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmInvoiceCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListInvoiceState = Assert<Assignable<typeof page.qryListInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_qryListInvoiceData = Assert<Assignable<typeof page.qryListInvoiceData, unknown[] | QryListInvoiceOutput>>;
type _State_cmdCreateInvoiceState = Assert<Assignable<typeof page.cmdCreateInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateInvoiceClientClientId = Assert<Assignable<typeof page.cmdCreateInvoiceClientClientId, string | CmdCreateInvoiceInput["clientClientId"]>>;
type _State_cmdCreateInvoiceProjectProjectId = Assert<Assignable<typeof page.cmdCreateInvoiceProjectProjectId, string | CmdCreateInvoiceInput["projectProjectId"]>>;
type _State_cmdCreateInvoiceCommercialReference = Assert<Assignable<typeof page.cmdCreateInvoiceCommercialReference, string | CmdCreateInvoiceInput["commercialReference"]>>;
type _State_cmdCreateInvoiceAmount = Assert<Assignable<typeof page.cmdCreateInvoiceAmount, string | CmdCreateInvoiceInput["amount"]>>;
type _State_cmdCreateInvoiceOutput = Assert<Assignable<typeof page.cmdCreateInvoiceOutput, CmdCreateInvoiceOutput | null>>;
type _State_cmdCreateInvoiceError = Assert<Assignable<typeof page.cmdCreateInvoiceError, string>>;
type _State_cmdUpdateInvoiceState = Assert<Assignable<typeof page.cmdUpdateInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateInvoiceInvoiceId = Assert<Assignable<typeof page.cmdUpdateInvoiceInvoiceId, string | CmdUpdateInvoiceInput["invoiceId"]>>;
type _State_cmdUpdateInvoiceClientId = Assert<Assignable<typeof page.cmdUpdateInvoiceClientId, string | CmdUpdateInvoiceInput["clientId"]>>;
type _State_cmdUpdateInvoiceProjectId = Assert<Assignable<typeof page.cmdUpdateInvoiceProjectId, string | CmdUpdateInvoiceInput["projectId"]>>;
type _State_cmdUpdateInvoiceCommercialReference = Assert<Assignable<typeof page.cmdUpdateInvoiceCommercialReference, string | CmdUpdateInvoiceInput["commercialReference"]>>;
type _State_cmdUpdateInvoiceAmount = Assert<Assignable<typeof page.cmdUpdateInvoiceAmount, string | CmdUpdateInvoiceInput["amount"]>>;
type _State_cmdUpdateInvoiceStatus = Assert<Assignable<typeof page.cmdUpdateInvoiceStatus, string | CmdUpdateInvoiceInput["status"]>>;
type _State_cmdUpdateInvoiceOutput = Assert<Assignable<typeof page.cmdUpdateInvoiceOutput, CmdUpdateInvoiceOutput | null>>;
type _State_cmdUpdateInvoiceError = Assert<Assignable<typeof page.cmdUpdateInvoiceError, string>>;
type _State_cmdDeleteInvoiceState = Assert<Assignable<typeof page.cmdDeleteInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteInvoiceInvoiceId = Assert<Assignable<typeof page.cmdDeleteInvoiceInvoiceId, string | CmdDeleteInvoiceInput["invoiceId"]>>;
type _State_cmdDeleteInvoiceOutput = Assert<Assignable<typeof page.cmdDeleteInvoiceOutput, CmdDeleteInvoiceOutput | null>>;
type _State_cmdDeleteInvoiceError = Assert<Assignable<typeof page.cmdDeleteInvoiceError, string>>;
type _State_qryClientPickerState = Assert<Assignable<typeof page.qryClientPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientPickerData = Assert<Assignable<typeof page.qryClientPickerData, unknown[] | QryClientPickerOutput>>;
type _State_qryProjectPickerState = Assert<Assignable<typeof page.qryProjectPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectPickerData = Assert<Assignable<typeof page.qryProjectPickerData, unknown[] | QryProjectPickerOutput>>;
type _Action_loadQryListInvoice = Assert<Assignable<typeof page.loadQryListInvoice, (...args: any[]) => unknown>>;
type _Handler_handleQryListInvoiceClick = Assert<Assignable<typeof page.handleQryListInvoiceClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateInvoice = Assert<Assignable<typeof page.cmdCreateInvoice, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceClick = Assert<Assignable<typeof page.handleCmdCreateInvoiceClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateInvoice = Assert<Assignable<typeof page.cmdUpdateInvoice, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceClick = Assert<Assignable<typeof page.handleCmdUpdateInvoiceClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteInvoice = Assert<Assignable<typeof page.cmdDeleteInvoice, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInvoiceClick = Assert<Assignable<typeof page.handleCmdDeleteInvoiceClick, (...args: any[]) => unknown>>;
type _Action_loadQryClientPicker = Assert<Assignable<typeof page.loadQryClientPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryClientPickerClick = Assert<Assignable<typeof page.handleQryClientPickerClick, (...args: any[]) => unknown>>;
type _Action_loadQryProjectPicker = Assert<Assignable<typeof page.loadQryProjectPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectPickerClick = Assert<Assignable<typeof page.handleQryProjectPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceClientClientId = Assert<Assignable<typeof page.setCmdCreateInvoiceClientClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceClientClientIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceClientClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceProjectProjectId = Assert<Assignable<typeof page.setCmdCreateInvoiceProjectProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceProjectProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceProjectProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceCommercialReference = Assert<Assignable<typeof page.setCmdCreateInvoiceCommercialReference, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceCommercialReferenceChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceCommercialReferenceChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceAmount = Assert<Assignable<typeof page.setCmdCreateInvoiceAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceAmountChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceInvoiceId = Assert<Assignable<typeof page.setCmdUpdateInvoiceInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceInvoiceIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceInvoiceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceClientId = Assert<Assignable<typeof page.setCmdUpdateInvoiceClientId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceClientIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceClientIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceProjectId = Assert<Assignable<typeof page.setCmdUpdateInvoiceProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceProjectIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceCommercialReference = Assert<Assignable<typeof page.setCmdUpdateInvoiceCommercialReference, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceCommercialReferenceChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceCommercialReferenceChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceAmount = Assert<Assignable<typeof page.setCmdUpdateInvoiceAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceAmountChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceStatus = Assert<Assignable<typeof page.setCmdUpdateInvoiceStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceStatusChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteInvoiceInvoiceId = Assert<Assignable<typeof page.setCmdDeleteInvoiceInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInvoiceInvoiceIdChange = Assert<Assignable<typeof page.handleCmdDeleteInvoiceInvoiceIdChange, (...args: any[]) => unknown>>;

export {};