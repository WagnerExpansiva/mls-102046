/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectHub.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmProjectHubBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectHub.js';
import type { QryClientBillingSummaryViewInput, QryClientBillingSummaryViewOutput, QryListChangeOrderOutput, QryListInvoiceOutput, QryListMaterialUsageOutput, QryListProjectCoordinationAssignmentOutput, QryListProjectOutput, QryListStatusReportOutput, QryListWorkTaskOutput, QryProjectDashboardViewOutput, QryProjectExecutionOverviewViewInput, QryProjectExecutionOverviewViewOutput, QryProjectTimelineViewInput, QryProjectTimelineViewOutput, QryScheduleRiskAssessmentViewInput, QryScheduleRiskAssessmentViewOutput } from '/_102046_/l2/buildFlowFsm/web/contracts/projectHub.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmProjectHubBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_qryListProjectState = Assert<Assignable<typeof page.qryListProjectState, "idle" | "loading" | "success" | "error">>;
type _State_qryListProjectData = Assert<Assignable<typeof page.qryListProjectData, unknown[] | QryListProjectOutput>>;
type _State_qryClientBillingSummaryViewState = Assert<Assignable<typeof page.qryClientBillingSummaryViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryClientBillingSummaryViewClientBillingSummaryClientId = Assert<Assignable<typeof page.qryClientBillingSummaryViewClientBillingSummaryClientId, string | QryClientBillingSummaryViewInput["clientBillingSummaryClientId"]>>;
type _State_qryClientBillingSummaryViewData = Assert<Assignable<typeof page.qryClientBillingSummaryViewData, QryClientBillingSummaryViewOutput | null>>;
type _State_qryProjectDashboardViewState = Assert<Assignable<typeof page.qryProjectDashboardViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectDashboardViewData = Assert<Assignable<typeof page.qryProjectDashboardViewData, QryProjectDashboardViewOutput | null>>;
type _State_qryProjectExecutionOverviewViewState = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId, string | QryProjectExecutionOverviewViewInput["projectExecutionOverviewProjectId"]>>;
type _State_qryProjectExecutionOverviewViewData = Assert<Assignable<typeof page.qryProjectExecutionOverviewViewData, QryProjectExecutionOverviewViewOutput | null>>;
type _State_qryProjectTimelineViewState = Assert<Assignable<typeof page.qryProjectTimelineViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryProjectTimelineViewProjectTimelineProjectId = Assert<Assignable<typeof page.qryProjectTimelineViewProjectTimelineProjectId, string | QryProjectTimelineViewInput["projectTimelineProjectId"]>>;
type _State_qryProjectTimelineViewData = Assert<Assignable<typeof page.qryProjectTimelineViewData, QryProjectTimelineViewOutput | null>>;
type _State_qryScheduleRiskAssessmentViewState = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewState, "idle" | "loading" | "success" | "error">>;
type _State_qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId, string | QryScheduleRiskAssessmentViewInput["scheduleRiskAssessmentProjectId"]>>;
type _State_qryScheduleRiskAssessmentViewData = Assert<Assignable<typeof page.qryScheduleRiskAssessmentViewData, QryScheduleRiskAssessmentViewOutput | null>>;
type _State_qryListChangeOrderState = Assert<Assignable<typeof page.qryListChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_qryListChangeOrderData = Assert<Assignable<typeof page.qryListChangeOrderData, unknown[] | QryListChangeOrderOutput>>;
type _State_qryListInvoiceState = Assert<Assignable<typeof page.qryListInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_qryListInvoiceData = Assert<Assignable<typeof page.qryListInvoiceData, unknown[] | QryListInvoiceOutput>>;
type _State_qryListMaterialUsageState = Assert<Assignable<typeof page.qryListMaterialUsageState, "idle" | "loading" | "success" | "error">>;
type _State_qryListMaterialUsageData = Assert<Assignable<typeof page.qryListMaterialUsageData, unknown[] | QryListMaterialUsageOutput>>;
type _State_qryListProjectCoordinationAssignmentState = Assert<Assignable<typeof page.qryListProjectCoordinationAssignmentState, "idle" | "loading" | "success" | "error">>;
type _State_qryListProjectCoordinationAssignmentData = Assert<Assignable<typeof page.qryListProjectCoordinationAssignmentData, unknown[] | QryListProjectCoordinationAssignmentOutput>>;
type _State_qryListStatusReportState = Assert<Assignable<typeof page.qryListStatusReportState, "idle" | "loading" | "success" | "error">>;
type _State_qryListStatusReportData = Assert<Assignable<typeof page.qryListStatusReportData, unknown[] | QryListStatusReportOutput>>;
type _State_qryListWorkTaskState = Assert<Assignable<typeof page.qryListWorkTaskState, "idle" | "loading" | "success" | "error">>;
type _State_qryListWorkTaskData = Assert<Assignable<typeof page.qryListWorkTaskData, unknown[] | QryListWorkTaskOutput>>;
type _Action_loadQryListProject = Assert<Assignable<typeof page.loadQryListProject, (...args: any[]) => unknown>>;
type _Handler_handleQryListProjectClick = Assert<Assignable<typeof page.handleQryListProjectClick, (...args: any[]) => unknown>>;
type _Action_loadQryClientBillingSummaryView = Assert<Assignable<typeof page.loadQryClientBillingSummaryView, (...args: any[]) => unknown>>;
type _Handler_handleQryClientBillingSummaryViewClick = Assert<Assignable<typeof page.handleQryClientBillingSummaryViewClick, (...args: any[]) => unknown>>;
type _Action_loadQryProjectDashboardView = Assert<Assignable<typeof page.loadQryProjectDashboardView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectDashboardViewClick = Assert<Assignable<typeof page.handleQryProjectDashboardViewClick, (...args: any[]) => unknown>>;
type _Action_loadQryProjectExecutionOverviewView = Assert<Assignable<typeof page.loadQryProjectExecutionOverviewView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectExecutionOverviewViewClick = Assert<Assignable<typeof page.handleQryProjectExecutionOverviewViewClick, (...args: any[]) => unknown>>;
type _Action_loadQryProjectTimelineView = Assert<Assignable<typeof page.loadQryProjectTimelineView, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectTimelineViewClick = Assert<Assignable<typeof page.handleQryProjectTimelineViewClick, (...args: any[]) => unknown>>;
type _Action_loadQryScheduleRiskAssessmentView = Assert<Assignable<typeof page.loadQryScheduleRiskAssessmentView, (...args: any[]) => unknown>>;
type _Handler_handleQryScheduleRiskAssessmentViewClick = Assert<Assignable<typeof page.handleQryScheduleRiskAssessmentViewClick, (...args: any[]) => unknown>>;
type _Action_loadQryListChangeOrder = Assert<Assignable<typeof page.loadQryListChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleQryListChangeOrderClick = Assert<Assignable<typeof page.handleQryListChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_loadQryListInvoice = Assert<Assignable<typeof page.loadQryListInvoice, (...args: any[]) => unknown>>;
type _Handler_handleQryListInvoiceClick = Assert<Assignable<typeof page.handleQryListInvoiceClick, (...args: any[]) => unknown>>;
type _Action_loadQryListMaterialUsage = Assert<Assignable<typeof page.loadQryListMaterialUsage, (...args: any[]) => unknown>>;
type _Handler_handleQryListMaterialUsageClick = Assert<Assignable<typeof page.handleQryListMaterialUsageClick, (...args: any[]) => unknown>>;
type _Action_loadQryListProjectCoordinationAssignment = Assert<Assignable<typeof page.loadQryListProjectCoordinationAssignment, (...args: any[]) => unknown>>;
type _Handler_handleQryListProjectCoordinationAssignmentClick = Assert<Assignable<typeof page.handleQryListProjectCoordinationAssignmentClick, (...args: any[]) => unknown>>;
type _Action_loadQryListStatusReport = Assert<Assignable<typeof page.loadQryListStatusReport, (...args: any[]) => unknown>>;
type _Handler_handleQryListStatusReportClick = Assert<Assignable<typeof page.handleQryListStatusReportClick, (...args: any[]) => unknown>>;
type _Action_loadQryListWorkTask = Assert<Assignable<typeof page.loadQryListWorkTask, (...args: any[]) => unknown>>;
type _Handler_handleQryListWorkTaskClick = Assert<Assignable<typeof page.handleQryListWorkTaskClick, (...args: any[]) => unknown>>;
type _Action_setQryClientBillingSummaryViewClientBillingSummaryClientId = Assert<Assignable<typeof page.setQryClientBillingSummaryViewClientBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange, (...args: any[]) => unknown>>;
type _Action_setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = Assert<Assignable<typeof page.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange = Assert<Assignable<typeof page.handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setQryProjectTimelineViewProjectTimelineProjectId = Assert<Assignable<typeof page.setQryProjectTimelineViewProjectTimelineProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryProjectTimelineViewProjectTimelineProjectIdChange = Assert<Assignable<typeof page.handleQryProjectTimelineViewProjectTimelineProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = Assert<Assignable<typeof page.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId, (...args: any[]) => unknown>>;
type _Handler_handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange = Assert<Assignable<typeof page.handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange, (...args: any[]) => unknown>>;

export {};