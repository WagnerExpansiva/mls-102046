/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectCoordinationAssignment.ts" enhancement="_blank"/>
export type ProjectCoordinationAssignmentStatus = 'active' | 'closed' | 'revoked';

export interface ProjectCoordinationAssignment {
  projectCoordinationAssignmentId: string;
  projectId: string;
  fieldCoordinatorId: string;
  status: ProjectCoordinationAssignmentStatus;
}

export const PROJECT_COORDINATION_ASSIGNMENT_STATUS_TRANSITIONS: Record<
  ProjectCoordinationAssignmentStatus,
  ProjectCoordinationAssignmentStatus[]
> = {
  active: ['closed', 'revoked'],
  closed: [],
  revoked: [],
};

export function canTransitionProjectCoordinationAssignment(
  from: ProjectCoordinationAssignmentStatus,
  to: ProjectCoordinationAssignmentStatus,
): boolean {
  return PROJECT_COORDINATION_ASSIGNMENT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function projectCoordinationAssignmentStartsActive(): boolean {
  return true;
}
