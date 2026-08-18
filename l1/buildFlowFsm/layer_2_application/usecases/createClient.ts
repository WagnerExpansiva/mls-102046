/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { Client } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';
import { isValidClient } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.js';

export interface CreateClientInput {
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface CreateClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export async function createClient(
  ctx: RequestContext,
  input: CreateClientInput,
): Promise<CreateClientOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');

  if (input.clientName.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'clientName é obrigatório.',
      400,
      { field: 'clientName' },
    );
  }

  const client: Client = {
    clientId: ctx.idGenerator.newId(),
    clientName: input.clientName,
    contactEmail: input.contactEmail ?? null,
    contactPhone: input.contactPhone ?? null,
  };

  if (!isValidClient(client)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Os dados do cliente são inválidos.',
      400,
    );
  }

  await ctx.data.runInTransaction(async () => {
    await clients.save(client);
  });

  return {
    clientId: client.clientId,
    clientName: client.clientName,
    ...(client.contactEmail !== null ? { contactEmail: client.contactEmail } : {}),
    ...(client.contactPhone !== null ? { contactPhone: client.contactPhone } : {}),
  };
}
