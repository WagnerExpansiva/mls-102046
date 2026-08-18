/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmProjectExecutionOverviewViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.js';
import type { QryProjectExecutionOverviewViewInput, QryProjectExecutionOverviewViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmProjectExecutionOverviewViewBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryProjectExecutionOverviewViewState = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId, string | QryProjectExecutionOverviewViewInput["projectExecutionOverviewProjectId"]>>;
type _State_qryProjectExecutionOverviewViewData = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewData, QryProjectExecutionOverviewViewOutput | null>>;
type _Action_loadQryProjectExecutionOverviewView = Assert<Assignable<typeof page.loadQryProjectExecutionOverviewView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectExecutionOverviewViewClick = Assert<Assignable<typeof page.handleQryProjectExecutionOverviewViewClick, (...args: any[]) => unknown>>;
type _Action_setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange = Assert<Assignable<typeof page.handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange, (...args: any[]) => unknown>>;

export {};