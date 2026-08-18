/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.ts" enhancement="_blank"/>
export interface PlatformUser {
  platformUserId: string;
}

/**
 * Validates that a platform user identifier is a UUID.
 */
export function isValidPlatformUserId(platformUserId: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(platformUserId);
}

/**
 * Validates the platform user invariants that can be checked within the aggregate.
 * Uniqueness and immutability are enforced by the application/persistence boundary.
 */
export function validatePlatformUser(platformUser: Pick<PlatformUser, 'platformUserId'>): boolean {
  return isValidPlatformUserId(platformUser.platformUserId);
}

export function isPlatformUserIdImmutable(
  current: Pick<PlatformUser, 'platformUserId'>,
  next: Pick<PlatformUser, 'platformUserId'>,
): boolean {
  return current.platformUserId === next.platformUserId;
}
