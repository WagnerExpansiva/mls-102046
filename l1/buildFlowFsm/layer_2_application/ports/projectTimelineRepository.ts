/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.ts" enhancement="_blank"/>
import type { ProjectTimeline } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.js';

export type ProjectTimelineId = string;
export type ProjectId = string;

export interface ProjectTimelineFilter {
  projectId?: ProjectId;
}

export interface IProjectTimelineRepository {
  getById(id: ProjectTimelineId): Promise<ProjectTimeline | null>;
  list(filter: ProjectTimelineFilter): Promise<ProjectTimeline[]>;
  save(aggregate: ProjectTimeline): Promise<void>;
  getByProjectId(projectId: ProjectId): Promise<ProjectTimeline | null>;
}
