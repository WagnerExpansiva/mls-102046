/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClientPortalAccess.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientPortalAccessRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IPlatformUserRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.js';
import type { ClientPortalAccess } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.js';

export interface CreateClientPortalAccessInput {
  clientId: string;
}

export interface CreateClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export async function createClientPortalAccess(
  ctx: RequestContext,
  input: CreateClientPortalAccessInput,
): Promise<CreateClientPortalAccessOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const platformUsers = resolveRepository<IPlatformUserRepository>(ctx, 'PlatformUser');
  const clientPortalAccesses = resolveRepository<IClientPortalAccessRepository>(ctx, 'ClientPortalAccess');

  const client = await clients.getById(input.clientId);
  if (!client) {
    throw new AppError('NOT_FOUND', `Client not found: ${input.clientId}`, 404, {
      clientId: input.clientId,
    });
  }

  const platformUserId = ctx.sessionContext.actorSession.actorId;
  if (!platformUserId) {
    throw new AppError('VALIDATION_ERROR', 'Authenticated actor is required to create client portal access.', 400);
  }

  const platformUser = await platformUsers.getById(platformUserId);
  if (!platformUser) {
    throw new AppError('NOT_FOUND', `PlatformUser not found: ${platformUserId}`, 404, {
      platformUserId,
    });
  }

  const access = await ctx.data.runInTransaction(async () => {
    const existing = await clientPortalAccesses.list({
      clientId: client.clientId,
      platformUserId: platformUser.platformUserId,
      status: 'active',
    });
    if (existing.length > 0) {
      throw new AppError(
        'CONFLICT',
        'An active client portal access already exists for this client and platform user.',
        409,
        {
          ruleId: 'activeClientPortalAccess',
          clientId: client.clientId,
          platformUserId: platformUser.platformUserId,
        },
      );
    }

    const newAccess: ClientPortalAccess = {
      clientPortalAccessId: ctx.idGenerator.newId(),
      clientId: client.clientId,
      platformUserId: platformUser.platformUserId,
      status: 'active',
    };
    await clientPortalAccesses.save(newAccess);
    return newAccess;
  });

  return {
    clientPortalAccessId: access.clientPortalAccessId,
    clientId: access.clientId,
    platformUserId: access.platformUserId,
    status: access.status,
  };
}
