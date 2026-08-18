/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientPortalAccessRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IPlatformUserRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.js';
import type { ClientPortalAccess } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.js';
import { canTransitionClientPortalAccess } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.js';

export interface UpdateClientPortalAccessInput {
  clientPortalAccessId: string;
  clientId: string;
}

export interface UpdateClientPortalAccessOutput {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: string;
}

export async function updateClientPortalAccess(
  ctx: RequestContext,
  input: UpdateClientPortalAccessInput,
): Promise<UpdateClientPortalAccessOutput> {
  const clientPortalAccesses = resolveRepository<IClientPortalAccessRepository>(ctx, 'ClientPortalAccess');
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const platformUsers = resolveRepository<IPlatformUserRepository>(ctx, 'PlatformUser');

  const actorId = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
  if (!actorId) {
    throw new AppError('VALIDATION_ERROR', 'A sessão do ator é obrigatória.', 400);
  }

  return ctx.data.runInTransaction(async () => {
    const access = await clientPortalAccesses.getById(input.clientPortalAccessId);
    if (!access) {
      throw new AppError(
        'NOT_FOUND',
        `ClientPortalAccess não encontrado: ${input.clientPortalAccessId}`,
        404,
        { clientPortalAccessId: input.clientPortalAccessId },
      );
    }

    const client = await clients.getById(input.clientId);
    if (!client) {
      throw new AppError('NOT_FOUND', `Client não encontrado: ${input.clientId}`, 404, {
        clientId: input.clientId,
      });
    }

    const platformUser = await platformUsers.getById(actorId);
    if (!platformUser) {
      throw new AppError('NOT_FOUND', `PlatformUser não encontrado: ${actorId}`, 404, {
        platformUserId: actorId,
      });
    }

    const next: ClientPortalAccess = {
      ...access,
      clientId: client.clientId,
      platformUserId: platformUser.platformUserId,
      status: 'active',
    };

    if (access.status !== next.status && !canTransitionClientPortalAccess(access.status, next.status)) {
      throw new AppError(
        'CONFLICT',
        'A transição de estado do vínculo ClientPortalAccess não é permitida.',
        409,
        { ruleId: 'activeClientPortalAccess', from: access.status, to: next.status },
      );
    }

    const activeMatches = await clientPortalAccesses.list({
      clientId: next.clientId,
      platformUserId: next.platformUserId,
      status: 'active',
    });
    const duplicate = activeMatches.some(
      (candidate) => candidate.clientPortalAccessId !== next.clientPortalAccessId,
    );
    if (duplicate) {
      // rule: activeClientPortalAccess — one active access per client and platform user.
      throw new AppError(
        'CONFLICT',
        'Já existe um vínculo ClientPortalAccess ativo para este cliente e usuário.',
        409,
        { ruleId: 'activeClientPortalAccess', clientId: next.clientId, platformUserId: next.platformUserId },
      );
    }

    // rule: activeClientPortalAccess — the updated link remains active.
    await clientPortalAccesses.save(next);
    return {
      clientPortalAccessId: next.clientPortalAccessId,
      clientId: next.clientId,
      platformUserId: next.platformUserId,
      status: next.status,
    };
  });
}
