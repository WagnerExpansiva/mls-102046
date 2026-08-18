/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmProjectDashboardViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.js';
import type { QryProjectDashboardViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmProjectDashboardViewBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryProjectDashboardViewState = Assert<Assignable<typeof page.qryProjectDashboardViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectDashboardViewData = Assert<Assignable<typeof page.qryProjectDashboardViewData, QryProjectDashboardViewOutput | null>>;
type _Action_loadQryProjectDashboardView = Assert<Assignable<typeof page.loadQryProjectDashboardView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectDashboardViewClick = Assert<Assignable<typeof page.handleQryProjectDashboardViewClick, (...args: any[]) => unknown>>;

export {};