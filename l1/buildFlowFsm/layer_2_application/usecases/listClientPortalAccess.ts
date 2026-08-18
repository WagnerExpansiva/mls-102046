/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClientPortalAccess.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientPortalAccessRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.js';

export interface ListClientPortalAccessInput {}

export interface ListClientPortalAccessItem {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export interface ListClientPortalAccessOutput {
  items: ListClientPortalAccessItem[];
}

export async function listClientPortalAccess(
  ctx: RequestContext,
  input: ListClientPortalAccessInput,
): Promise<ListClientPortalAccessOutput> {
  void input;
  const clientPortalAccessRepository = resolveRepository<IClientPortalAccessRepository>(
    ctx,
    'ClientPortalAccess',
  );
  const records = await clientPortalAccessRepository.list({});
  return {
    items: records.map((record) => ({
      clientPortalAccessId: record.clientPortalAccessId,
      clientId: record.clientId,
      platformUserId: record.platformUserId,
      status: record.status,
    })),
  };
}
