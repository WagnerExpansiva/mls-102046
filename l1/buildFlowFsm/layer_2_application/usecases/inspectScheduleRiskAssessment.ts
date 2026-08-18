/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IScheduleRiskAssessmentRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.js';
import type { IWorkTaskRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { ScheduleRiskAssessment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.js';

export interface InspectScheduleRiskAssessmentInput {
  projectId: string;
}

export interface InspectScheduleRiskAssessmentOutput {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent?: number;
  riskIndicators: string;
  riskExplanation: string;
  assessedAt: string;
}

export async function inspectScheduleRiskAssessment(
  ctx: RequestContext,
  input: InspectScheduleRiskAssessmentInput,
): Promise<InspectScheduleRiskAssessmentOutput> {
  const assessments = resolveRepository<IScheduleRiskAssessmentRepository>(
    ctx,
    'ScheduleRiskAssessment',
  );
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  const records = await assessments.listByProjectId(input.projectId);
  const assessment: ScheduleRiskAssessment | undefined = records[0];
  if (!assessment) {
    throw new AppError(
      'NOT_FOUND',
      `Schedule risk assessment not found for project: ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  const workTask = await workTasks.getById(assessment.workTaskId);
  if (!workTask) {
    throw new AppError(
      'NOT_FOUND',
      `Work task not found: ${assessment.workTaskId}`,
      404,
      { workTaskId: assessment.workTaskId },
    );
  }

  if (workTask.status !== 'planned' && workTask.status !== 'inProgress') {
    throw new AppError(
      'VALIDATION_ERROR',
      'A schedule risk assessment can only be inspected for unfinished work tasks.',
      400,
      { ruleId: 'unfinishedWorkTask', workTaskId: workTask.workTaskId, status: workTask.status },
    );
  }

  return {
    projectId: assessment.projectId,
    workTaskId: assessment.workTaskId,
    taskStatus: assessment.taskStatus,
    dueDate: assessment.dueDate,
    ...(assessment.progressPercent === null
      ? {}
      : { progressPercent: assessment.progressPercent }),
    riskIndicators: JSON.stringify(assessment.riskIndicators),
    riskExplanation: assessment.riskExplanation,
    assessedAt: assessment.assessedAt,
  };
}
