/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.ts" enhancement="_blank"/>
import type { ClientBillingSummary } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.js';

export type ClientBillingSummaryId = string;
export type ClientId = string;

export interface ClientBillingSummaryFilter {
  clientId?: ClientId;
  projectId?: string;
}

export interface IClientBillingSummaryRepository {
  getById(id: ClientBillingSummaryId): Promise<ClientBillingSummary | null>;
  list(filter: ClientBillingSummaryFilter): Promise<ClientBillingSummary[]>;
  save(aggregate: ClientBillingSummary): Promise<void>;
  getByClientId(clientId: ClientId): Promise<ClientBillingSummary | null>;
}
