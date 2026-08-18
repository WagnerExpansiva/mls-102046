/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IFieldWorkerRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.js';

export interface LocateFieldWorkerInput {}

export interface LocateFieldWorkerResult {
  platformUserId: string;
}

export type LocateFieldWorkerOutput = LocateFieldWorkerResult[];

export async function locateFieldWorker(
  ctx: RequestContext,
  input: LocateFieldWorkerInput,
): Promise<LocateFieldWorkerOutput> {
  void input;
  const fieldWorkers = resolveRepository<IFieldWorkerRepository>(ctx, 'FieldWorker');
  const records = await fieldWorkers.list({});
  return records.map((fieldWorker) => ({
    platformUserId: fieldWorker.platformUserId,
  }));
}
