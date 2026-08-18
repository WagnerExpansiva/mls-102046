/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.ts" enhancement="_blank"/>
import type {
  ChangeOrder,
  ChangeOrderStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export type ChangeOrderId = string;
export type ProjectId = string;

export interface ChangeOrderFilter {
  changeOrderId?: ChangeOrderId;
  clientRef?: string;
  projectRef?: ProjectId;
  status?: ChangeOrderStatus;
}

export interface IChangeOrderRepository {
  getById(id: ChangeOrderId): Promise<ChangeOrder | null>;
  list(filter: ChangeOrderFilter): Promise<ChangeOrder[]>;
  save(aggregate: ChangeOrder): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<ChangeOrder[]>;
}
