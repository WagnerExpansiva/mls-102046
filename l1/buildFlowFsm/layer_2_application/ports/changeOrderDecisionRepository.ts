/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.ts" enhancement="_blank"/>
import type {
  ChangeOrderDecision,
  ChangeOrderDecisionValue,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.js';

export type ChangeOrderDecisionId = string;
export type ChangeOrderId = string;

export interface ChangeOrderDecisionFilter {
  changeOrder?: ChangeOrderId;
  madeByPlatformUser?: string;
  decision?: ChangeOrderDecisionValue;
}

export interface IChangeOrderDecisionRepository {
  getById(id: ChangeOrderDecisionId): Promise<ChangeOrderDecision | null>;
  list(filter: ChangeOrderDecisionFilter): Promise<ChangeOrderDecision[]>;
  save(aggregate: ChangeOrderDecision): Promise<void>;
  listByChangeOrderId(changeOrderId: ChangeOrderId): Promise<ChangeOrderDecision[]>;
}
