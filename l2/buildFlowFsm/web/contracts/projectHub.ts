/// <mls fileReference="_102046_/l2/buildFlowFsm/web/contracts/projectHub.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectHub; one contract file per workspace, all bffCalls).

// bffCall qryListProject (query) — Output kind=array; route buildFlowFsm.projectHub.qryListProject.
export interface QryListProjectInput {}
export interface QryListProjectOutput {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: string;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}
export const qryListProjectRoute = 'buildFlowFsm.projectHub.qryListProject' as const;

// bffCall qryClientBillingSummaryView (query) — Output kind=object; route buildFlowFsm.projectHub.qryClientBillingSummaryView.
export interface QryClientBillingSummaryViewInput {
  clientBillingSummaryClientId: string;
}
export interface QryClientBillingSummaryViewOutput {
  clientId: string;
  projectId: string;
  approvedChangeOrderReferences: string;
  invoiceReferences: string;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}
export const qryClientBillingSummaryViewRoute = 'buildFlowFsm.projectHub.qryClientBillingSummaryView' as const;

// bffCall qryProjectDashboardView (query) — Output kind=object; route buildFlowFsm.projectHub.qryProjectDashboardView.
export interface QryProjectDashboardViewInput {}
export interface QryProjectDashboardViewOutput {
  activeProjects: string;
  activeProjectCount: number;
  totalBudget: number;
  totalActualCost: number;
  budgetVariance: number;
  costAttentionProjects: string;
  upcomingTasks: string;
}
export const qryProjectDashboardViewRoute = 'buildFlowFsm.projectHub.qryProjectDashboardView' as const;

// bffCall qryProjectExecutionOverviewView (query) — Output kind=object; route buildFlowFsm.projectHub.qryProjectExecutionOverviewView.
export interface QryProjectExecutionOverviewViewInput {
  projectExecutionOverviewProjectId: string;
}
export interface QryProjectExecutionOverviewViewOutput {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds: string;
  taskSummary: string;
  upcomingCommitments: string;
  timeLogIds: string;
  totalLoggedHours: number;
  materialUsageIds: string;
  materialUsageSummary: string;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds: string;
  changeOrderImpactSummary: string;
  calculatedAt: string;
}
export const qryProjectExecutionOverviewViewRoute = 'buildFlowFsm.projectHub.qryProjectExecutionOverviewView' as const;

// bffCall qryProjectTimelineView (query) — Output kind=object; route buildFlowFsm.projectHub.qryProjectTimelineView.
export interface QryProjectTimelineViewInput {
  projectTimelineProjectId: string;
}
export interface QryProjectTimelineViewOutput {
  projectId: string;
  workTasks: string;
  scheduleEntries: string;
}
export const qryProjectTimelineViewRoute = 'buildFlowFsm.projectHub.qryProjectTimelineView' as const;

// bffCall qryScheduleRiskAssessmentView (query) — Output kind=object; route buildFlowFsm.projectHub.qryScheduleRiskAssessmentView.
export interface QryScheduleRiskAssessmentViewInput {
  scheduleRiskAssessmentProjectId: string;
}
export interface QryScheduleRiskAssessmentViewOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}
export const qryScheduleRiskAssessmentViewRoute = 'buildFlowFsm.projectHub.qryScheduleRiskAssessmentView' as const;

// bffCall qryListChangeOrder (query) — Output kind=array; route buildFlowFsm.projectHub.qryListChangeOrder.
export interface QryListChangeOrderInput {}
export interface QryListChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt: string;
  status: string;
}
export const qryListChangeOrderRoute = 'buildFlowFsm.projectHub.qryListChangeOrder' as const;

// bffCall qryListInvoice (query) — Output kind=array; route buildFlowFsm.projectHub.qryListInvoice.
export interface QryListInvoiceInput {}
export interface QryListInvoiceOutput {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: string;
}
export const qryListInvoiceRoute = 'buildFlowFsm.projectHub.qryListInvoice' as const;

// bffCall qryListMaterialUsage (query) — Output kind=array; route buildFlowFsm.projectHub.qryListMaterialUsage.
export interface QryListMaterialUsageInput {}
export interface QryListMaterialUsageOutput {
  materialUsageId: string;
  status: string;
  projectId: string;
  inventoryItemId: string;
  inventoryBalanceId: string;
  quantity: number;
  usageDescription: string;
  consumedOn: string;
  unitCostBasis: number;
}
export const qryListMaterialUsageRoute = 'buildFlowFsm.projectHub.qryListMaterialUsage' as const;

// bffCall qryListProjectCoordinationAssignment (query) — Output kind=array; route buildFlowFsm.projectHub.qryListProjectCoordinationAssignment.
export interface QryListProjectCoordinationAssignmentInput {}
export interface QryListProjectCoordinationAssignmentOutput {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: string;
}
export const qryListProjectCoordinationAssignmentRoute = 'buildFlowFsm.projectHub.qryListProjectCoordinationAssignment' as const;

// bffCall qryListStatusReport (query) — Output kind=array; route buildFlowFsm.projectHub.qryListStatusReport.
export interface QryListStatusReportInput {}
export interface QryListStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  title: string;
  content: string;
  communicatedRisks: string;
  generatedAt: string;
  generatedByUserId: string;
  publishedAt: string;
  publishedByUserId: string;
  withdrawnAt: string;
}
export const qryListStatusReportRoute = 'buildFlowFsm.projectHub.qryListStatusReport' as const;

// bffCall qryListWorkTask (query) — Output kind=array; route buildFlowFsm.projectHub.qryListWorkTask.
export interface QryListWorkTaskInput {}
export interface QryListWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: string;
  progressUpdate: string;
}
export const qryListWorkTaskRoute = 'buildFlowFsm.projectHub.qryListWorkTask' as const;
