/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.ts" enhancement="_blank"/>
import type { ProjectDashboard } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.js';

export type ProjectDashboardId = string;
export type ProjectId = string;

export interface ProjectDashboardFilter {
  projectId?: ProjectId;
}

export interface IProjectDashboardRepository {
  getById(id: ProjectDashboardId): Promise<ProjectDashboard | null>;
  list(filter: ProjectDashboardFilter): Promise<ProjectDashboard[]>;
  save(aggregate: ProjectDashboard): Promise<void>;
  getByProjectId(projectId: ProjectId): Promise<ProjectDashboard | null>;
}
