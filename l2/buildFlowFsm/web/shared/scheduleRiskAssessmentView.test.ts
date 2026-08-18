/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmScheduleRiskAssessmentViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.js';
import type { QryScheduleRiskAssessmentViewInput, QryScheduleRiskAssessmentViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmScheduleRiskAssessmentViewBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryScheduleRiskAssessmentViewState = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId, string | QryScheduleRiskAssessmentViewInput["scheduleRiskAssessmentProjectId"]>>;
type _State_qryScheduleRiskAssessmentViewData = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewData, QryScheduleRiskAssessmentViewOutput | null>>;
type _Action_loadQryScheduleRiskAssessmentView = Assert<Assignable<typeof page.loadQryScheduleRiskAssessmentView, (...args: any[]) => unknown>>;
type _Handler_handleQryScheduleRiskAssessmentViewClick = Assert<Assignable<typeof page.handleQryScheduleRiskAssessmentViewClick, (...args: any[]) => unknown>>;
type _Action_setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = Assert<Assignable<typeof page.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange = Assert<Assignable<typeof page.handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange, (...args: any[]) => unknown>>;

export {};