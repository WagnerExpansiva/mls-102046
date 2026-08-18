/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import { isValidClient, type Client } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';

export interface UpdateClientInput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface UpdateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export async function updateClient(
  ctx: RequestContext,
  input: UpdateClientInput,
): Promise<UpdateClientOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');

  return ctx.data.runInTransaction(async () => {
    const existing = await clients.getById(input.clientId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `Client not found: ${input.clientId}`,
        404,
        { clientId: input.clientId },
      );
    }

    const updated: Client = {
      clientId: existing.clientId,
      clientName: input.clientName,
      contactEmail: input.contactEmail ?? existing.contactEmail,
      contactPhone: input.contactPhone ?? existing.contactPhone,
    };

    if (!isValidClient(updated)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The client data is invalid.',
        400,
        { clientId: updated.clientId },
      );
    }

    await clients.save(updated);

    return {
      clientId: updated.clientId,
      clientName: updated.clientName,
      contactEmail: updated.contactEmail ?? undefined,
      contactPhone: updated.contactPhone ?? undefined,
    };
  });
}
