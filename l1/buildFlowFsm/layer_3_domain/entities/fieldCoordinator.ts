/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldCoordinator.ts" enhancement="_blank"/>
export interface FieldCoordinator {
  fieldCoordinatorId: string;
  platformUserRef: string;
  createdAt: string;
  updatedAt: string;
}

export function hasQualifiedPlatformUser(
  fieldCoordinator: Pick<FieldCoordinator, 'platformUserRef'>,
  isOrganizationallyQualified: (platformUserRef: string) => boolean,
): boolean {
  return isOrganizationallyQualified(fieldCoordinator.platformUserRef);
}

export function hasUniquePlatformUserRef(
  fieldCoordinator: Pick<FieldCoordinator, 'platformUserRef'>,
  existingCoordinators: ReadonlyArray<Pick<FieldCoordinator, 'platformUserRef'>>,
): boolean {
  return !existingCoordinators.some(
    (existingCoordinator) =>
      existingCoordinator.platformUserRef === fieldCoordinator.platformUserRef,
  );
}
