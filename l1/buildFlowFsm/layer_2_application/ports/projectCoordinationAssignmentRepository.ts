/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectCoordinationAssignmentRepository.ts" enhancement="_blank"/>
import type { ProjectCoordinationAssignment } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.js';

export type ProjectCoordinationAssignmentId = string;
export type ProjectId = string;

export interface ProjectCoordinationAssignmentFilter {
  projectId?: ProjectId;
  fieldCoordinatorId?: string;
  status?: ProjectCoordinationAssignment['status'];
}

export interface IProjectCoordinationAssignmentRepository {
  getById(id: ProjectCoordinationAssignmentId): Promise<ProjectCoordinationAssignment | null>;
  list(filter: ProjectCoordinationAssignmentFilter): Promise<ProjectCoordinationAssignment[]>;
  save(aggregate: ProjectCoordinationAssignment): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<ProjectCoordinationAssignment[]>;
}
