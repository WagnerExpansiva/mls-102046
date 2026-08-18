/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmConsultApprovedProjectChangeOrdersBase } from '/_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.js';
import type { QryInspectApprovedChangeOrdersInput, QryInspectApprovedChangeOrdersOutput, QryInspectClientBillingSummaryInput, QryInspectClientBillingSummaryOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmConsultApprovedProjectChangeOrdersBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectApprovedChangeOrdersState = Assert<Assignable<typeof page.qryInspectApprovedChangeOrdersState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectApprovedChangeOrdersChangeOrderChangeOrderId = Assert<Assignable<typeof page.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId, string | QryInspectApprovedChangeOrdersInput["changeOrderChangeOrderId"]>>;
type _State_qryInspectApprovedChangeOrdersData = Assert<Assignable<typeof page.qryInspectApprovedChangeOrdersData, QryInspectApprovedChangeOrdersOutput | null>>;
type _State_qryInspectClientBillingSummaryState = Assert<Assignable<typeof page.qryInspectClientBillingSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.qryInspectClientBillingSummaryClientBillingSummaryClientId, string | QryInspectClientBillingSummaryInput["clientBillingSummaryClientId"]>>;
type _State_qryInspectClientBillingSummaryData = Assert<Assignable<typeof page.qryInspectClientBillingSummaryData, QryInspectClientBillingSummaryOutput | null>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectApprovedChangeOrders = Assert<Assignable<typeof page.loadQryInspectApprovedChangeOrders, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectApprovedChangeOrdersClick = Assert<Assignable<typeof page.handleQryInspectApprovedChangeOrdersClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectClientBillingSummary = Assert<Assignable<typeof page.loadQryInspectClientBillingSummary, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClick = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId = Assert<Assignable<typeof page.setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectApprovedChangeOrdersChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleQryInspectApprovedChangeOrdersChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setQryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.setQryInspectClientBillingSummaryClientBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange, (...args: any[]) => unknown>>;

export {};