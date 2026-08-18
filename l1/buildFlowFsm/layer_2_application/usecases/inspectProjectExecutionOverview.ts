/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectExecutionOverviewRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.js';
import type { ProjectExecutionOverview } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';

export interface InspectProjectExecutionOverviewInput {
  projectId: string;
}

export interface InspectProjectExecutionOverviewOutput {
  projectId: string;
  projectName: string;
  projectStatus: string;
  workTaskIds?: string;
  taskSummary: string;
  upcomingCommitments: string;
  timeLogIds?: string;
  totalLoggedHours: number;
  materialUsageIds?: string;
  materialUsageSummary: string;
  actualLaborCost: number;
  actualMaterialCost: number;
  actualCost: number;
  budgetAmount: number;
  costVariance: number;
  changeOrderIds?: string;
  changeOrderImpactSummary: string;
  calculatedAt: string;
}

function serializeValue(value: unknown): string {
  if (typeof value === 'string') return value;
  return JSON.stringify(value) ?? '';
}

function serializeIdentifiers(value: readonly string[] | null): string | undefined {
  return value === null ? undefined : JSON.stringify(value);
}

function canViewProjectCosts(ctx: RequestContext): boolean {
  const scopes = ctx.sessionContext.actorSession.scope ?? ctx.sessionContext.actorScope ?? [];
  return scopes.includes('*') ||
    scopes.includes('project.cost.read') ||
    scopes.includes('project:cost:read') ||
    scopes.includes('project.cost.view') ||
    scopes.includes('project:cost:view') ||
    scopes.includes('activeProjectCostVisibility');
}

function toOutput(overview: ProjectExecutionOverview): InspectProjectExecutionOverviewOutput {
  return {
    projectId: overview.projectId,
    projectName: overview.projectName,
    projectStatus: overview.projectStatus,
    workTaskIds: serializeIdentifiers(overview.workTaskIds),
    taskSummary: serializeValue(overview.taskSummary),
    upcomingCommitments: serializeValue(overview.upcomingCommitments),
    timeLogIds: serializeIdentifiers(overview.timeLogIds),
    totalLoggedHours: overview.totalLoggedHours,
    materialUsageIds: serializeIdentifiers(overview.materialUsageIds),
    materialUsageSummary: serializeValue(overview.materialUsageSummary),
    actualLaborCost: overview.actualLaborCost,
    actualMaterialCost: overview.actualMaterialCost,
    actualCost: overview.actualCost,
    budgetAmount: overview.budgetAmount,
    costVariance: overview.costVariance,
    changeOrderIds: serializeIdentifiers(overview.changeOrderIds),
    changeOrderImpactSummary: serializeValue(overview.changeOrderImpactSummary),
    calculatedAt: overview.calculatedAt,
  };
}

export async function inspectProjectExecutionOverview(
  ctx: RequestContext,
  input: InspectProjectExecutionOverviewInput,
): Promise<InspectProjectExecutionOverviewOutput> {
  if (!input || typeof input.projectId !== 'string' || input.projectId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'projectId é obrigatório.',
      400,
      { field: 'projectId' },
    );
  }

  // rule: activeProjectCostVisibility
  if (!canViewProjectCosts(ctx)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'A autorização para visualizar os custos do projeto não foi concedida.',
      400,
      { ruleId: 'activeProjectCostVisibility' },
    );
  }

  const overviews = resolveRepository<IProjectExecutionOverviewRepository>(
    ctx,
    'ProjectExecutionOverview',
  );
  const overview = await overviews.getByProjectId(input.projectId);
  if (!overview) {
    throw new AppError(
      'NOT_FOUND',
      `ProjectExecutionOverview não encontrada para o projeto: ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  return toOutput(overview);
}
