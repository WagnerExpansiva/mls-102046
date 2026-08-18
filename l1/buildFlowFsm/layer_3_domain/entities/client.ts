/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.ts" enhancement="_blank"/>
export interface Client {
  clientId: string;
  clientName: string;
  contactEmail: string | null;
  contactPhone: string | null;
}

export function isValidClientEmail(contactEmail: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);
}

export function isValidClient(client: Pick<Client, 'clientId' | 'clientName' | 'contactEmail' | 'contactPhone'>): boolean {
  if (client.clientId.trim().length === 0) {
    return false;
  }

  if (client.clientName.trim().length === 0) {
    return false;
  }

  if (client.contactEmail !== null) {
    if (client.contactEmail.trim().length === 0 || !isValidClientEmail(client.contactEmail)) {
      return false;
    }
  }

  if (client.contactPhone !== null && client.contactPhone.trim().length === 0) {
    return false;
  }

  return true;
}

export function clientRequiresValidContactInformation(
  client: Pick<Client, 'contactEmail' | 'contactPhone'>,
): boolean {
  return (
    (client.contactEmail === null || (client.contactEmail.trim().length > 0 && isValidClientEmail(client.contactEmail))) &&
    (client.contactPhone === null || client.contactPhone.trim().length > 0)
  );
}
