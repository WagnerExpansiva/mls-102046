/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.ts" enhancement="_blank"/>
export type ClientPortalAccessStatus = 'active' | 'revoked';

export interface ClientPortalAccess {
  clientPortalAccessId: string;
  clientId: string;
  platformUserId: string;
  status: ClientPortalAccessStatus;
}

export const CLIENT_PORTAL_ACCESS_STATUS_TRANSITIONS: Record<
  ClientPortalAccessStatus,
  ClientPortalAccessStatus[]
> = {
  active: ['revoked'],
  revoked: [],
};

export function canTransitionClientPortalAccess(
  from: ClientPortalAccessStatus,
  to: ClientPortalAccessStatus,
): boolean {
  return CLIENT_PORTAL_ACCESS_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function clientPortalAccessGrantsAssociation(
  access: Pick<ClientPortalAccess, 'status'>,
): boolean {
  return access.status === 'active';
}
