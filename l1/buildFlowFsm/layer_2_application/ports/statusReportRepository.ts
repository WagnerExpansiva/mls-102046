/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.ts" enhancement="_blank"/>
import type {
  StatusReport,
  StatusReportStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export type StatusReportId = string;
export type ProjectId = string;

export interface StatusReportFilter {
  projectId?: ProjectId;
  status?: StatusReportStatus;
}

export interface IStatusReportRepository {
  getById(id: StatusReportId): Promise<StatusReport | null>;
  list(filter: StatusReportFilter): Promise<StatusReport[]>;
  save(aggregate: StatusReport): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<StatusReport[]>;
}
