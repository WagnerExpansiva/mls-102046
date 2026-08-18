/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.ts" enhancement="_blank"/>
import type { FieldWorker } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.js';

export type FieldWorkerId = string;
export type PlatformUserId = string;

export interface FieldWorkerFilter {
  fieldWorkerId?: FieldWorkerId;
  platformUserId?: PlatformUserId;
}

export interface IFieldWorkerRepository {
  getById(id: FieldWorkerId): Promise<FieldWorker | null>;
  list(filter: FieldWorkerFilter): Promise<FieldWorker[]>;
  save(aggregate: FieldWorker): Promise<void>;
  getByPlatformUserId(platformUserId: PlatformUserId): Promise<FieldWorker | null>;
}
