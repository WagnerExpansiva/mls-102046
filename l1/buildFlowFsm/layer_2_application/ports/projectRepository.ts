/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.ts" enhancement="_blank"/>
import type {
  Project,
  ProjectStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export type ProjectId = string;
export type ClientId = string;

export interface ProjectFilter {
  projectId?: ProjectId;
  clientId?: ClientId;
  status?: ProjectStatus;
}

export interface IProjectRepository {
  getById(id: ProjectId): Promise<Project | null>;
  list(filter: ProjectFilter): Promise<Project[]>;
  save(aggregate: Project): Promise<void>;
  listByClientId(clientId: ClientId): Promise<Project[]>;
}
