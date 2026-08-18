/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateClient.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';

export interface LocateClientInput {}

export interface LocateClientItem {
  clientId: string;
  clientName: string;
  contactEmail?: string;
  contactPhone?: string;
}

export type LocateClientOutput = LocateClientItem[];

export async function locateClient(
  ctx: RequestContext,
  _input: LocateClientInput,
): Promise<LocateClientOutput> {
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const locatedClients = await clients.list({});

  return locatedClients.map((client) => ({
    clientId: client.clientId,
    clientName: client.clientName,
    ...(client.contactEmail !== null ? { contactEmail: client.contactEmail } : {}),
    ...(client.contactPhone !== null ? { contactPhone: client.contactPhone } : {}),
  }));
}
