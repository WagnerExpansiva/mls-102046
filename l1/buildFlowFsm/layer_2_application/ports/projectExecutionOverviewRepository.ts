/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.ts" enhancement="_blank"/>
import type { ProjectExecutionOverview } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.js';

export type ProjectExecutionOverviewId = string;
export type ProjectId = string;

export interface ProjectExecutionOverviewFilter {
  projectId?: ProjectId;
  projectStatus?: string;
}

export interface IProjectExecutionOverviewRepository {
  getById(id: ProjectExecutionOverviewId): Promise<ProjectExecutionOverview | null>;
  list(filter: ProjectExecutionOverviewFilter): Promise<ProjectExecutionOverview[]>;
  save(aggregate: ProjectExecutionOverview): Promise<void>;
  getByProjectId(projectId: ProjectId): Promise<ProjectExecutionOverview | null>;
}
