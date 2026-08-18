/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.ts" enhancement="_blank"/>
import type {
  MaterialUsage,
  MaterialUsageStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export type MaterialUsageId = string;
export type ProjectId = string;

export interface MaterialUsageFilter {
  projectId?: ProjectId;
  inventoryItemId?: string;
  inventoryBalanceId?: string;
  status?: MaterialUsageStatus;
}

export interface IMaterialUsageRepository {
  getById(id: MaterialUsageId): Promise<MaterialUsage | null>;
  list(filter: MaterialUsageFilter): Promise<MaterialUsage[]>;
  save(aggregate: MaterialUsage): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<MaterialUsage[]>;
}
