/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.ts" enhancement="_blank"/>
import type { ScheduleRiskAssessment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.js';

export type ScheduleRiskAssessmentId = string;
export type ProjectId = string;

export interface ScheduleRiskAssessmentFilter {
  projectId?: ProjectId;
  workTaskId?: string;
  taskStatus?: string;
  dueDate?: string;
  assessedAt?: string;
}

export interface IScheduleRiskAssessmentRepository {
  getById(id: ScheduleRiskAssessmentId): Promise<ScheduleRiskAssessment | null>;
  list(filter: ScheduleRiskAssessmentFilter): Promise<ScheduleRiskAssessment[]>;
  save(aggregate: ScheduleRiskAssessment): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<ScheduleRiskAssessment[]>;
}
