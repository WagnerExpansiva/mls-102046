/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.ts" enhancement="_blank"/>
import type { Client } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';

export type ClientId = string;
export type ClientName = string;

export interface ClientFilter {
  clientId?: ClientId;
  clientName?: ClientName;
}

export interface IClientRepository {
  getById(id: ClientId): Promise<Client | null>;
  list(filter: ClientFilter): Promise<Client[]>;
  save(aggregate: Client): Promise<void>;
  findByName(name: ClientName): Promise<Client | null>;
}
