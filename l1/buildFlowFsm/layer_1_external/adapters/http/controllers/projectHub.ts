/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectHub.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listProject, type ListProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.js';
import { inspectClientBillingSummary, type InspectClientBillingSummaryInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.js';
import { inspectProjectDashboard, type InspectProjectDashboardInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.js';
import { inspectProjectExecutionOverview, type InspectProjectExecutionOverviewInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.js';
import { inspectProjectTimeline, type InspectProjectTimelineInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.js';
import { inspectScheduleRiskAssessment, type InspectScheduleRiskAssessmentInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.js';
import { listChangeOrder, type ListChangeOrderInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.js';
import { listInvoice, type ListInvoiceInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.js';
import { listMaterialUsage, type ListMaterialUsageInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listMaterialUsage.js';
import { listProjectCoordinationAssignment, type ListProjectCoordinationAssignmentInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.js';
import { listStatusReport, type ListStatusReportInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.js';
import { listWorkTask, type ListWorkTaskInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/listWorkTask.js';

const ALLOWED: readonly string[] = ['internal', 'external', 'internal', 'internal', 'internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((item) => allowed.includes(item))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function requiredId(params: Record<string, unknown>, field: string): string {
  const value = params[field];
  if (typeof value !== 'string' || value.length === 0 || /\s/.test(value) || !/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', field + ' is required', 400, { field });
  }
  return value;
}

export const projectHubQryListProjectHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListProject');
  if (denial) return denial;
  const input: ListProjectInput = {};
  const result = await listProject(ctx, input);
  return ok(result.map((row) => ({
    projectId: row.projectId,
    clientId: row.clientId,
    name: row.name,
    address: row.address,
    status: row.status,
    authorizedBudget: row.authorizedBudget,
    plannedStartDate: row.plannedStartDate,
    plannedEndDate: row.plannedEndDate,
  })));
};

export const projectHubQryClientBillingSummaryViewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryClientBillingSummaryView');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: InspectClientBillingSummaryInput = { clientId: requiredId(params, 'clientId') };
  const result = await inspectClientBillingSummary(ctx, input);
  return ok({
    clientId: result.clientId,
    projectId: result.projectId,
    approvedChangeOrderReferences: result.approvedChangeOrderReferences,
    invoiceReferences: result.invoiceReferences,
    approvedChangeOrderAmount: result.approvedChangeOrderAmount,
    billableAmount: result.billableAmount,
    invoicedAmount: result.invoicedAmount,
    clientAvailableAmount: result.clientAvailableAmount,
  });
};

export const projectHubQryProjectDashboardViewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryProjectDashboardView');
  if (denial) return denial;
  const input: InspectProjectDashboardInput = {};
  const result = await inspectProjectDashboard(ctx, input);
  return ok({
    activeProjects: result.activeProjects,
    activeProjectCount: result.activeProjectCount,
    totalBudget: result.totalBudget,
    totalActualCost: result.totalActualCost,
    budgetVariance: result.budgetVariance,
    costAttentionProjects: result.costAttentionProjects,
    upcomingTasks: result.upcomingTasks,
  });
};

export const projectHubQryProjectExecutionOverviewViewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryProjectExecutionOverviewView');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: InspectProjectExecutionOverviewInput = { projectId: requiredId(params, 'projectId') };
  const result = await inspectProjectExecutionOverview(ctx, input);
  return ok({
    projectId: result.projectId,
    projectName: result.projectName,
    projectStatus: result.projectStatus,
    workTaskIds: result.workTaskIds,
    taskSummary: result.taskSummary,
    upcomingCommitments: result.upcomingCommitments,
    timeLogIds: result.timeLogIds,
    totalLoggedHours: result.totalLoggedHours,
    materialUsageIds: result.materialUsageIds,
    materialUsageSummary: result.materialUsageSummary,
    actualLaborCost: result.actualLaborCost,
    actualMaterialCost: result.actualMaterialCost,
    actualCost: result.actualCost,
    budgetAmount: result.budgetAmount,
    costVariance: result.costVariance,
    changeOrderIds: result.changeOrderIds,
    changeOrderImpactSummary: result.changeOrderImpactSummary,
    calculatedAt: result.calculatedAt,
  });
};

export const projectHubQryProjectTimelineViewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryProjectTimelineView');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: InspectProjectTimelineInput = { projectId: requiredId(params, 'projectId') };
  const result = await inspectProjectTimeline(ctx, input);
  return ok({ projectId: result.projectId, workTasks: result.workTasks, scheduleEntries: result.scheduleEntries });
};

export const projectHubQryScheduleRiskAssessmentViewHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryScheduleRiskAssessmentView');
  if (denial) return denial;
  const params = (request.params ?? {}) as Record<string, unknown>;
  const input: InspectScheduleRiskAssessmentInput = { projectId: requiredId(params, 'projectId') };
  const result = await inspectScheduleRiskAssessment(ctx, input);
  return ok({
    projectId: result.projectId,
    workTaskId: result.workTaskId,
    taskStatus: result.taskStatus,
    dueDate: result.dueDate,
    progressPercent: result.progressPercent,
    riskIndicators: result.riskIndicators,
    riskExplanation: result.riskExplanation,
    assessedAt: result.assessedAt,
  });
};

export const projectHubQryListChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListChangeOrder');
  if (denial) return denial;
  const input: ListChangeOrderInput = {};
  const result = await listChangeOrder(ctx, input);
  return ok(result.map((row) => ({
    changeOrderId: row.changeOrderId,
    clientRef: row.clientRef,
    projectRef: row.projectRef,
    description: row.description,
    scopeImpact: row.scopeImpact,
    scheduleImpact: row.scheduleImpact,
    changeAmount: row.changeAmount,
    submittedAt: row.submittedAt,
    forwardedForClientApprovalAt: row.forwardedForClientApprovalAt,
    status: row.status,
  })));
};

export const projectHubQryListInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListInvoice');
  if (denial) return denial;
  const input: ListInvoiceInput = {};
  const result = await listInvoice(ctx, input);
  return ok(result.map((row) => ({
    invoiceId: row.invoiceId,
    clientId: row.clientId,
    projectId: row.projectId,
    commercialReference: row.commercialReference,
    amount: row.amount,
    status: row.status,
  })));
};

export const projectHubQryListMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListMaterialUsage');
  if (denial) return denial;
  const input: ListMaterialUsageInput = {};
  const result = await listMaterialUsage(ctx, input);
  return ok(result.map((row) => ({
    materialUsageId: row.materialUsageId,
    status: row.status,
    projectId: row.projectId,
    inventoryItemId: row.inventoryItemId,
    inventoryBalanceId: row.inventoryBalanceId,
    quantity: row.quantity,
    usageDescription: row.usageDescription,
    consumedOn: row.consumedOn,
    unitCostBasis: row.unitCostBasis,
  })));
};

export const projectHubQryListProjectCoordinationAssignmentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListProjectCoordinationAssignment');
  if (denial) return denial;
  const input: ListProjectCoordinationAssignmentInput = {};
  const result = await listProjectCoordinationAssignment(ctx, input);
  return ok(result.map((row) => ({
    projectCoordinationAssignmentId: row.projectCoordinationAssignmentId,
    projectId: row.projectId,
    fieldCoordinatorId: row.fieldCoordinatorId,
    status: row.status,
  })));
};

export const projectHubQryListStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListStatusReport');
  if (denial) return denial;
  const input: ListStatusReportInput = {};
  const result = await listStatusReport(ctx, input);
  return ok(result.map((row) => ({
    statusReportId: row.statusReportId,
    projectId: row.projectId,
    status: row.status,
    title: row.title,
    content: row.content,
    communicatedRisks: row.communicatedRisks,
    generatedAt: row.generatedAt,
    generatedByUserId: row.generatedByUserId,
    publishedAt: row.publishedAt,
    publishedByUserId: row.publishedByUserId,
    withdrawnAt: row.withdrawnAt,
  })));
};

export const projectHubQryListWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectHub.qryListWorkTask');
  if (denial) return denial;
  const input: ListWorkTaskInput = {};
  const result = await listWorkTask(ctx, input);
  return ok(result.map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    assignedFieldWorkerId: row.assignedFieldWorkerId,
    description: row.description,
    dueDate: row.dueDate,
    status: row.status,
    progressUpdate: row.progressUpdate,
  })));
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.projectHub.qryListProject', handler: projectHubQryListProjectHandler },
  { key: 'buildFlowFsm.projectHub.qryClientBillingSummaryView', handler: projectHubQryClientBillingSummaryViewHandler },
  { key: 'buildFlowFsm.projectHub.qryProjectDashboardView', handler: projectHubQryProjectDashboardViewHandler },
  { key: 'buildFlowFsm.projectHub.qryProjectExecutionOverviewView', handler: projectHubQryProjectExecutionOverviewViewHandler },
  { key: 'buildFlowFsm.projectHub.qryProjectTimelineView', handler: projectHubQryProjectTimelineViewHandler },
  { key: 'buildFlowFsm.projectHub.qryScheduleRiskAssessmentView', handler: projectHubQryScheduleRiskAssessmentViewHandler },
  { key: 'buildFlowFsm.projectHub.qryListChangeOrder', handler: projectHubQryListChangeOrderHandler },
  { key: 'buildFlowFsm.projectHub.qryListInvoice', handler: projectHubQryListInvoiceHandler },
  { key: 'buildFlowFsm.projectHub.qryListMaterialUsage', handler: projectHubQryListMaterialUsageHandler },
  { key: 'buildFlowFsm.projectHub.qryListProjectCoordinationAssignment', handler: projectHubQryListProjectCoordinationAssignmentHandler },
  { key: 'buildFlowFsm.projectHub.qryListStatusReport', handler: projectHubQryListStatusReportHandler },
  { key: 'buildFlowFsm.projectHub.qryListWorkTask', handler: projectHubQryListWorkTaskHandler },
];