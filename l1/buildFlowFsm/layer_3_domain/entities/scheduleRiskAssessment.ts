/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.ts" enhancement="_blank"/>
export interface ScheduleRiskAssessment {
  projectId: string;
  workTaskId: string;
  taskStatus: string;
  dueDate: string;
  progressPercent: number | null;
  riskIndicators: Record<string, unknown>;
  riskExplanation: string;
  assessedAt: string;
}

export function hasScheduleRiskAssessmentContext(
  assessment: Pick<ScheduleRiskAssessment, 'projectId' | 'workTaskId' | 'taskStatus'>,
): boolean {
  return (
    assessment.projectId.trim().length > 0 &&
    assessment.workTaskId.trim().length > 0 &&
    assessment.taskStatus.trim().length > 0 &&
    !isCompletedTaskStatus(assessment.taskStatus)
  );
}

export function isCompletedTaskStatus(taskStatus: string): boolean {
  const normalizedStatus = taskStatus.trim().toLowerCase();
  return ['completed', 'complete', 'done', 'finished', 'concluded', 'closed'].includes(normalizedStatus);
}

export function isValidScheduleRiskProgress(progressPercent: number | null): boolean {
  return progressPercent === null ||
    (typeof progressPercent === 'number' &&
      Number.isFinite(progressPercent) &&
      progressPercent >= 0 &&
      progressPercent <= 100);
}

export function hasScheduleRiskAssessmentDates(
  assessment: Pick<ScheduleRiskAssessment, 'dueDate' | 'assessedAt'>,
): boolean {
  return assessment.dueDate.trim().length > 0 && assessment.assessedAt.trim().length > 0;
}

export function hasScheduleRiskFactors(
  assessment: Pick<ScheduleRiskAssessment, 'riskIndicators' | 'riskExplanation'>,
): boolean {
  return (
    Object.keys(assessment.riskIndicators).length > 0 &&
    assessment.riskExplanation.trim().length > 0
  );
}

export function isScheduleRiskAssessmentValid(assessment: ScheduleRiskAssessment): boolean {
  return (
    hasScheduleRiskAssessmentContext(assessment) &&
    hasScheduleRiskAssessmentDates(assessment) &&
    isValidScheduleRiskProgress(assessment.progressPercent) &&
    hasScheduleRiskFactors(assessment)
  );
}
