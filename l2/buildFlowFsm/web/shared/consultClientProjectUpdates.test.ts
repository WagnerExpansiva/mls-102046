/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmConsultClientProjectUpdatesBase } from '/_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.js';
import type { QryInspectClientBillingSummaryInput, QryInspectClientBillingSummaryOutput, QryInspectStatusReportInput, QryInspectStatusReportOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/consultClientProjectUpdates.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmConsultClientProjectUpdatesBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryLocateProjectState = Assert<Assignable<typeof page.qryLocateProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryLocateProjectData = Assert<Assignable<typeof page.qryLocateProjectData, unknown[] | QryLocateProjectOutput>>;
type _State_qryInspectStatusReportState = Assert<Assignable<typeof page.qryInspectStatusReportState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectStatusReportStatusReportStatusReportId = Assert<Assignable<typeof page.qryInspectStatusReportStatusReportStatusReportId, string | QryInspectStatusReportInput["statusReportStatusReportId"]>>;
type _State_qryInspectStatusReportData = Assert<Assignable<typeof page.qryInspectStatusReportData, QryInspectStatusReportOutput | null>>;
type _State_qryInspectClientBillingSummaryState = Assert<Assignable<typeof page.qryInspectClientBillingSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_qryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.qryInspectClientBillingSummaryClientBillingSummaryClientId, string | QryInspectClientBillingSummaryInput["clientBillingSummaryClientId"]>>;
type _State_qryInspectClientBillingSummaryData = Assert<Assignable<typeof page.qryInspectClientBillingSummaryData, QryInspectClientBillingSummaryOutput | null>>;
type _Action_loadQryLocateProject = Assert<Assignable<typeof page.loadQryLocateProject, (...args: any[]) => unknown>>;
type _Handler_handleQryLocateProjectClick = Assert<Assignable<typeof page.handleQryLocateProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectStatusReport = Assert<Assignable<typeof page.loadQryInspectStatusReport, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectStatusReportClick = Assert<Assignable<typeof page.handleQryInspectStatusReportClick, (...args: any[]) => unknown>>;
type _Action_loadQryInspectClientBillingSummary = Assert<Assignable<typeof page.loadQryInspectClientBillingSummary, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClick = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClick, (...args: any[]) => unknown>>;
type _Action_setQryInspectStatusReportStatusReportStatusReportId = Assert<Assignable<typeof page.setQryInspectStatusReportStatusReportStatusReportId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectStatusReportStatusReportStatusReportIdChange = Assert<Assignable<typeof page.handleQryInspectStatusReportStatusReportStatusReportIdChange, (...args: any[]) => unknown>>;
type _Action_setQryInspectClientBillingSummaryClientBillingSummaryClientId = Assert<Assignable<typeof page.setQryInspectClientBillingSummaryClientBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange, (...args: any[]) => unknown>>;

export {};