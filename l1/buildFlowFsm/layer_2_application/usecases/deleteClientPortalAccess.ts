/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClientPortalAccess.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientPortalAccessRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.js';

export interface DeleteClientPortalAccessInput {
  clientPortalAccessId: string;
}

export interface DeleteClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

interface DeletableClientPortalAccessRepository extends IClientPortalAccessRepository {
  delete(id: string): Promise<void>;
}

export async function deleteClientPortalAccess(
  ctx: RequestContext,
  input: DeleteClientPortalAccessInput,
): Promise<DeleteClientPortalAccessOutput> {
  const clientPortalAccesses = resolveRepository<IClientPortalAccessRepository>(ctx, 'ClientPortalAccess');
  const loaded = await clientPortalAccesses.getById(input.clientPortalAccessId);
  if (!loaded) {
    throw new AppError(
      'NOT_FOUND',
      `ClientPortalAccess not found: ${input.clientPortalAccessId}`,
      404,
      { clientPortalAccessId: input.clientPortalAccessId },
    );
  }

  const output: DeleteClientPortalAccessOutput = {
    clientPortalAccessId: loaded.clientPortalAccessId,
    clientId: loaded.clientId,
    platformUserId: loaded.platformUserId,
    status: loaded.status,
  };

  await ctx.data.runInTransaction(async () => {
    const deletableRepository = clientPortalAccesses as unknown as DeletableClientPortalAccessRepository;
    await deletableRepository.delete(input.clientPortalAccessId);
  });

  return output;
}
