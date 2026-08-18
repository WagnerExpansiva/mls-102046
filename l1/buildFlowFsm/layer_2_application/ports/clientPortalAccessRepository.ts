/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.ts" enhancement="_blank"/>
import type {
  ClientPortalAccess,
  ClientPortalAccessStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.js';

export type ClientPortalAccessId = string;
export type ClientId = string;

export interface ClientPortalAccessFilter {
  clientId?: ClientId;
  platformUserId?: string;
  status?: ClientPortalAccessStatus;
}

export interface IClientPortalAccessRepository {
  getById(id: ClientPortalAccessId): Promise<ClientPortalAccess | null>;
  list(filter: ClientPortalAccessFilter): Promise<ClientPortalAccess[]>;
  save(aggregate: ClientPortalAccess): Promise<void>;
  getByClientId(clientId: ClientId): Promise<ClientPortalAccess | null>;
}
