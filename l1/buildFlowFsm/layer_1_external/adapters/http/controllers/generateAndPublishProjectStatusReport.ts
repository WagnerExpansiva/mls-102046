/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/generateAndPublishProjectStatusReport.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { locateProject, type LocateProjectInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateProject.js';
import { inspectProjectExecutionOverview, type InspectProjectExecutionOverviewInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.js';
import { inspectScheduleRiskAssessment, type InspectScheduleRiskAssessmentInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.js';
import { createStatusReport, type CreateStatusReportInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.js';
import { publishStatusReport, type PublishStatusReportInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/publishStatusReport.js';
import { handoffStatusReportToClient, type HandoffStatusReportToClientInput } from '/_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffStatusReportToClient.js';

const ALLOWED: readonly string[] = ['internal'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((value) => allowed.includes(value))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function requiredString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required`, 400, { field });
  }
  return value;
}

function requiredId(value: unknown, field: string): string {
  const id = requiredString(value, field);
  if (!/^[A-Za-z0-9_-]+$/.test(id)) {
    throw new AppError('VALIDATION_ERROR', `${field} must be a valid identifier`, 400, { field });
  }
  return id;
}

export const generateAndPublishProjectStatusReportQryLocateProjectHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const input: LocateProjectInput = {};
  const result = await locateProject(ctx, input);
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

export const generateAndPublishProjectStatusReportQryInspectProjectExecutionOverviewHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectExecutionOverviewProjectId?: unknown };
  const input: InspectProjectExecutionOverviewInput = {
    projectId: requiredId(params.projectExecutionOverviewProjectId, 'projectExecutionOverviewProjectId'),
  };
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

export const generateAndPublishProjectStatusReportQryInspectScheduleRiskAssessmentHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as { scheduleRiskAssessmentProjectId?: unknown };
  const input: InspectScheduleRiskAssessmentInput = {
    projectId: requiredId(params.scheduleRiskAssessmentProjectId, 'scheduleRiskAssessmentProjectId'),
  };
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

export const generateAndPublishProjectStatusReportCmdCreateStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    projectProjectId?: unknown;
    projectExecutionOverviewProjectId?: unknown;
    title?: unknown;
    content?: unknown;
    communicatedRisks?: unknown;
    generatedByUserId?: unknown;
    publishedByUserId?: unknown;
  };
  const input: CreateStatusReportInput = {
    projectProjectId: requiredId(params.projectProjectId, 'projectProjectId'),
    projectExecutionOverviewProjectId: requiredId(params.projectExecutionOverviewProjectId, 'projectExecutionOverviewProjectId'),
    title: requiredString(params.title, 'title'),
    content: requiredString(params.content, 'content'),
    communicatedRisks: params.communicatedRisks === undefined ? undefined : requiredString(params.communicatedRisks, 'communicatedRisks'),
    generatedByUserId: requiredId(params.generatedByUserId, 'generatedByUserId'),
    publishedByUserId: params.publishedByUserId === undefined ? undefined : requiredId(params.publishedByUserId, 'publishedByUserId'),
  };
  const result = await createStatusReport(ctx, input);
  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    title: result.title,
    content: result.content,
    communicatedRisks: result.communicatedRisks,
    generatedAt: result.generatedAt,
    generatedByUserId: result.generatedByUserId,
    publishedAt: result.publishedAt,
    publishedByUserId: result.publishedByUserId,
    withdrawnAt: result.withdrawnAt,
  });
};

export const generateAndPublishProjectStatusReportCmdPublishStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    projectProjectId?: unknown;
    projectExecutionOverviewProjectId?: unknown;
    statusReportStatusReportId?: unknown;
    status?: unknown;
  };
  const input: PublishStatusReportInput = {
    projectId: requiredId(params.projectProjectId, 'projectProjectId'),
    projectExecutionOverviewProjectId: requiredId(params.projectExecutionOverviewProjectId, 'projectExecutionOverviewProjectId'),
    statusReportId: requiredId(params.statusReportStatusReportId, 'statusReportStatusReportId'),
    status: requiredString(params.status, 'status'),
  };
  const result = await publishStatusReport(ctx, input);
  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    title: result.title,
    content: result.content,
    communicatedRisks: result.communicatedRisks,
    generatedAt: result.generatedAt,
    generatedByUserId: result.generatedByUserId,
    publishedAt: result.publishedAt,
    publishedByUserId: result.publishedByUserId,
    withdrawnAt: result.withdrawnAt,
  });
};

export const generateAndPublishProjectStatusReportCmdHandoffStatusReportToClientHandler: BffHandler = async ({ request, ctx }) => {
  const route = 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient';
  const denial = enforceActors(ctx, ALLOWED, route);
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    statusReportStatusReportId?: unknown;
    title?: unknown;
    content?: unknown;
    communicatedRisks?: unknown;
    generatedByUserId?: unknown;
    publishedByUserId?: unknown;
  };
  const input: HandoffStatusReportToClientInput = {
    statusReportId: requiredId(params.statusReportStatusReportId, 'statusReportStatusReportId'),
    title: requiredString(params.title, 'title'),
    content: requiredString(params.content, 'content'),
    communicatedRisks: params.communicatedRisks === undefined ? undefined : requiredString(params.communicatedRisks, 'communicatedRisks'),
    generatedByUserId: requiredId(params.generatedByUserId, 'generatedByUserId'),
    publishedByUserId: params.publishedByUserId === undefined ? undefined : requiredId(params.publishedByUserId, 'publishedByUserId'),
  };
  const result = await handoffStatusReportToClient(ctx, input);
  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    title: result.title,
    content: result.content,
    communicatedRisks: result.communicatedRisks,
    generatedAt: result.generatedAt,
    generatedByUserId: result.generatedByUserId,
    publishedAt: result.publishedAt,
    publishedByUserId: result.publishedByUserId,
    withdrawnAt: result.withdrawnAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject', handler: generateAndPublishProjectStatusReportQryLocateProjectHandler },
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview', handler: generateAndPublishProjectStatusReportQryInspectProjectExecutionOverviewHandler },
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment', handler: generateAndPublishProjectStatusReportQryInspectScheduleRiskAssessmentHandler },
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport', handler: generateAndPublishProjectStatusReportCmdCreateStatusReportHandler },
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport', handler: generateAndPublishProjectStatusReportCmdPublishStatusReportHandler },
  { key: 'buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient', handler: generateAndPublishProjectStatusReportCmdHandoffStatusReportToClientHandler },
];
