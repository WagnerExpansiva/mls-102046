/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmProjectTimelineViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';
import type { QryProjectTimelineViewInput, QryProjectTimelineViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmProjectTimelineViewBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryProjectTimelineViewState = Assert<Assignable<typeof page.qryProjectTimelineViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectTimelineViewProjectTimelineProjectId = Assert<Assignable<typeof page.qryProjectTimelineViewProjectTimelineProjectId, string | QryProjectTimelineViewInput["projectTimelineProjectId"]>>;
type _State_qryProjectTimelineViewData = Assert<Assignable<typeof page.qryProjectTimelineViewData, QryProjectTimelineViewOutput | null>>;
type _Action_loadQryProjectTimelineView = Assert<Assignable<typeof page.loadQryProjectTimelineView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectTimelineViewClick = Assert<Assignable<typeof page.handleQryProjectTimelineViewClick, (...args: any[]) => unknown>>;
type _Action_setQryProjectTimelineViewProjectTimelineProjectId = Assert<Assignable<typeof page.setQryProjectTimelineViewProjectTimelineProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectTimelineViewProjectTimelineProjectIdChange = Assert<Assignable<typeof page.handleQryProjectTimelineViewProjectTimelineProjectIdChange, (...args: any[]) => unknown>>;

export {};