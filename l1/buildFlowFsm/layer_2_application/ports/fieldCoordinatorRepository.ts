/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldCoordinatorRepository.ts" enhancement="_blank"/>
import type { FieldCoordinator } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.js';

export type FieldCoordinatorId = string;
export type PlatformUserId = string;

export interface FieldCoordinatorFilter {
  platformUserRef?: PlatformUserId;
}

export interface IFieldCoordinatorRepository {
  getById(id: FieldCoordinatorId): Promise<FieldCoordinator | null>;
  list(filter: FieldCoordinatorFilter): Promise<FieldCoordinator[]>;
  save(aggregate: FieldCoordinator): Promise<void>;
  getByPlatformUserId(platformUserId: PlatformUserId): Promise<FieldCoordinator | null>;
}
