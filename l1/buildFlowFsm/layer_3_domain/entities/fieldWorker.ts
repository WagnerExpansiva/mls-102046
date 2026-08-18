/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.ts" enhancement="_blank"/>
export interface FieldWorker {
  fieldWorkerId: string;
  platformUserId: string;
  createdAt: string;
  updatedAt: string;
}

/** Returns true when no platform user is referenced by more than one record. */
export function hasUniquePlatformUserId(fieldWorkers: ReadonlyArray<Pick<FieldWorker, 'platformUserId'>>): boolean {
  const platformUserIds = new Set<string>();
  for (const fieldWorker of fieldWorkers) {
    if (platformUserIds.has(fieldWorker.platformUserId)) {
      return false;
    }
    platformUserIds.add(fieldWorker.platformUserId);
  }
  return true;
}

/** Returns true when the referenced platform user is qualified as a field worker. */
export function referencesQualifiedPlatformUser(
  fieldWorker: Pick<FieldWorker, 'platformUserId'>,
  qualifiedPlatformUserIds: ReadonlyArray<string>,
): boolean {
  return qualifiedPlatformUserIds.includes(fieldWorker.platformUserId);
}
