/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmInvoiceChangeOrderCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.js';
import type { CmdCreateInvoiceChangeOrderInput, CmdCreateInvoiceChangeOrderOutput, CmdDeleteInvoiceChangeOrderInput, CmdDeleteInvoiceChangeOrderOutput, CmdUpdateInvoiceChangeOrderInput, CmdUpdateInvoiceChangeOrderOutput, QryChangeOrderPickerOutput, QryInvoicePickerOutput, QryListInvoiceChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmInvoiceChangeOrderCatalogueBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListInvoiceChangeOrderState = Assert<Assignable<typeof page.qryListInvoiceChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_qryListInvoiceChangeOrderData = Assert<Assignable<typeof page.qryListInvoiceChangeOrderData, unknown[] | QryListInvoiceChangeOrderOutput>>;
type _State_cmdCreateInvoiceChangeOrderState = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateInvoiceChangeOrderInvoiceId = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderInvoiceId, string | CmdCreateInvoiceChangeOrderInput["invoiceId"]>>;
type _State_cmdCreateInvoiceChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderChangeOrderId, string | CmdCreateInvoiceChangeOrderInput["changeOrderId"]>>;
type _State_cmdCreateInvoiceChangeOrderBilledAmount = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderBilledAmount, string | CmdCreateInvoiceChangeOrderInput["billedAmount"]>>;
type _State_cmdCreateInvoiceChangeOrderOutput = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderOutput, CmdCreateInvoiceChangeOrderOutput | null>>;
type _State_cmdCreateInvoiceChangeOrderError = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrderError, string>>;
type _State_cmdUpdateInvoiceChangeOrderState = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId, string | CmdUpdateInvoiceChangeOrderInput["invoiceChangeOrderId"]>>;
type _State_cmdUpdateInvoiceChangeOrderInvoiceId = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderInvoiceId, string | CmdUpdateInvoiceChangeOrderInput["invoiceId"]>>;
type _State_cmdUpdateInvoiceChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderChangeOrderId, string | CmdUpdateInvoiceChangeOrderInput["changeOrderId"]>>;
type _State_cmdUpdateInvoiceChangeOrderBilledAmount = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderBilledAmount, string | CmdUpdateInvoiceChangeOrderInput["billedAmount"]>>;
type _State_cmdUpdateInvoiceChangeOrderOutput = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderOutput, CmdUpdateInvoiceChangeOrderOutput | null>>;
type _State_cmdUpdateInvoiceChangeOrderError = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrderError, string>>;
type _State_cmdDeleteInvoiceChangeOrderState = Assert<Assignable<typeof page.cmdDeleteInvoiceChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = Assert<Assignable<typeof page.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId, string | CmdDeleteInvoiceChangeOrderInput["invoiceChangeOrderId"]>>;
type _State_cmdDeleteInvoiceChangeOrderOutput = Assert<Assignable<typeof page.cmdDeleteInvoiceChangeOrderOutput, CmdDeleteInvoiceChangeOrderOutput | null>>;
type _State_cmdDeleteInvoiceChangeOrderError = Assert<Assignable<typeof page.cmdDeleteInvoiceChangeOrderError, string>>;
type _State_qryInvoicePickerState = Assert<Assignable<typeof page.qryInvoicePickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryInvoicePickerData = Assert<Assignable<typeof page.qryInvoicePickerData, unknown[] | QryInvoicePickerOutput>>;
type _State_qryChangeOrderPickerState = Assert<Assignable<typeof page.qryChangeOrderPickerState, "idle" | "loading" | "success" | "error">>;
type _State_qryChangeOrderPickerData = Assert<Assignable<typeof page.qryChangeOrderPickerData, unknown[] | QryChangeOrderPickerOutput>>;
type _Action_loadQryListInvoiceChangeOrder = Assert<Assignable<typeof page.loadQryListInvoiceChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleQryListInvoiceChangeOrderClick = Assert<Assignable<typeof page.handleQryListInvoiceChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdCreateInvoiceChangeOrder = Assert<Assignable<typeof page.cmdCreateInvoiceChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceChangeOrderClick = Assert<Assignable<typeof page.handleCmdCreateInvoiceChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateInvoiceChangeOrder = Assert<Assignable<typeof page.cmdUpdateInvoiceChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceChangeOrderClick = Assert<Assignable<typeof page.handleCmdUpdateInvoiceChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdDeleteInvoiceChangeOrder = Assert<Assignable<typeof page.cmdDeleteInvoiceChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInvoiceChangeOrderClick = Assert<Assignable<typeof page.handleCmdDeleteInvoiceChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_loadQryInvoicePicker = Assert<Assignable<typeof page.loadQryInvoicePicker, (...args: any[]) => unknown>>;
type _Handler_handleQryInvoicePickerClick = Assert<Assignable<typeof page.handleQryInvoicePickerClick, (...args: any[]) => unknown>>;
type _Action_loadQryChangeOrderPicker = Assert<Assignable<typeof page.loadQryChangeOrderPicker, (...args: any[]) => unknown>>;
type _Handler_handleQryChangeOrderPickerClick = Assert<Assignable<typeof page.handleQryChangeOrderPickerClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceChangeOrderInvoiceId = Assert<Assignable<typeof page.setCmdCreateInvoiceChangeOrderInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceChangeOrderInvoiceIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceChangeOrderInvoiceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdCreateInvoiceChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateInvoiceChangeOrderBilledAmount = Assert<Assignable<typeof page.setCmdCreateInvoiceChangeOrderBilledAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateInvoiceChangeOrderBilledAmountChange = Assert<Assignable<typeof page.handleCmdCreateInvoiceChangeOrderBilledAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = Assert<Assignable<typeof page.setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceChangeOrderInvoiceChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceChangeOrderInvoiceChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceChangeOrderInvoiceId = Assert<Assignable<typeof page.setCmdUpdateInvoiceChangeOrderInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceChangeOrderInvoiceIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceChangeOrderInvoiceIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdUpdateInvoiceChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateInvoiceChangeOrderBilledAmount = Assert<Assignable<typeof page.setCmdUpdateInvoiceChangeOrderBilledAmount, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateInvoiceChangeOrderBilledAmountChange = Assert<Assignable<typeof page.handleCmdUpdateInvoiceChangeOrderBilledAmountChange, (...args: any[]) => unknown>>;
type _Action_setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = Assert<Assignable<typeof page.setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdDeleteInvoiceChangeOrderInvoiceChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdDeleteInvoiceChangeOrderInvoiceChangeOrderIdChange, (...args: any[]) => unknown>>;

export {};