/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';

export interface DeleteClientInput {
  clientId: string;
}

export interface DeleteClientOutput {
  clientId: string;
  clientName: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
}

export async function deleteClient(
  ctx: RequestContext,
  input: DeleteClientInput,
): Promise<DeleteClientOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');

  return ctx.data.runInTransaction(async () => {
    const client = await clients.getById(input.clientId);
    if (!client) {
      throw new AppError(
        'NOT_FOUND',
        `Client não encontrado: ${input.clientId}`,
        404,
        { clientId: input.clientId },
      );
    }

    const deletedClient = clients as unknown as {
      delete(id: string): Promise<void>;
    };
    await deletedClient.delete(client.clientId);

    return {
      clientId: client.clientId,
      clientName: client.clientName,
      contactEmail: client.contactEmail,
      contactPhone: client.contactPhone,
    };
  });
}
