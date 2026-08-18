/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.ts" enhancement="_blank"/>
import type { WorkTask, WorkTaskStatus } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export type WorkTaskId = string;
export type ProjectId = string;

export interface WorkTaskFilter {
  projectId?: ProjectId;
  assignedFieldWorkerId?: string;
  status?: WorkTaskStatus;
}

export interface IWorkTaskRepository {
  getById(id: WorkTaskId): Promise<WorkTask | null>;
  list(filter: WorkTaskFilter): Promise<WorkTask[]>;
  save(aggregate: WorkTask): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<WorkTask[]>;
}
