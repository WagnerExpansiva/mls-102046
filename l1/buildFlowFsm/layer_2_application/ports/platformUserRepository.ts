/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.ts" enhancement="_blank"/>
import type { PlatformUser } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.js';

export type PlatformUserId = string;
export type EmailAddress = string;

export interface PlatformUserFilter {
  platformUserId?: PlatformUserId;
}

export interface IPlatformUserRepository {
  getById(id: PlatformUserId): Promise<PlatformUser | null>;
  list(filter: PlatformUserFilter): Promise<PlatformUser[]>;
  save(aggregate: PlatformUser): Promise<void>;
  findByEmail(email: EmailAddress): Promise<PlatformUser | null>;
}
