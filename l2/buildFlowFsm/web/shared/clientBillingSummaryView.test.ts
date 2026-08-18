/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmClientBillingSummaryViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';
import type { QryClientBillingSummaryViewInput, QryClientBillingSummaryViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmClientBillingSummaryViewBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryClientBillingSummaryViewState = Assert<Assignable<typeof page.qryClientBillingSummaryViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientBillingSummaryViewClientBillingSummaryClientId = Assert<Assignable<typeof page.qryClientBillingSummaryViewClientBillingSummaryClientId, string | QryClientBillingSummaryViewInput["clientBillingSummaryClientId"]>>;
type _State_qryClientBillingSummaryViewData = Assert<Assignable<typeof page.qryClientBillingSummaryViewData, QryClientBillingSummaryViewOutput | null>>;
type _Action_loadQryClientBillingSummaryView = Assert<Assignable<typeof page.loadQryClientBillingSummaryView, (...args: any[]) => unknown>>;
type _Handler_handleQryClientBillingSummaryViewClick = Assert<Assignable<typeof page.handleQryClientBillingSummaryViewClick, (...args: any[]) => unknown>>;
type _Action_setQryClientBillingSummaryViewClientBillingSummaryClientId = Assert<Assignable<typeof page.setQryClientBillingSummaryViewClientBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange, (...args: any[]) => unknown>>;

export {};