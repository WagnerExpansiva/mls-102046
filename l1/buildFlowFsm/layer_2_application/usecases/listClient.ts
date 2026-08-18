/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.ts" enhancement="_blank"/>
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';

export interface ListClientInput {}

export interface ListClientItem {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export type ListClientOutput = ListClientItem[];

export async function listClient(
  ctx: RequestContext,
  _input: ListClientInput,
): Promise<ListClientOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const results = await clients.list({});

  return results.map((client) => ({
    clientId: client.clientId,
    clientName: client.clientName,
    ...(client.contactEmail !== null ? { contactEmail: client.contactEmail } : {}),
    ...(client.contactPhone !== null ? { contactPhone: client.contactPhone } : {}),
  }));
}
