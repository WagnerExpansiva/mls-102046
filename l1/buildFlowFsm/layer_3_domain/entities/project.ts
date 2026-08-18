/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.ts" enhancement="_blank"/>
export type ProjectStatus = 'planned' | 'active' | 'completed' | 'cancelled';

export interface Project {
  projectId: string;
  clientId: string;
  name: string;
  address: string;
  status: ProjectStatus;
  authorizedBudget: number;
  plannedStartDate: string;
  plannedEndDate: string;
}

export const PROJECT_STATUS_TRANSITIONS: Record<ProjectStatus, ProjectStatus[]> = {
  planned: ['active', 'cancelled'],
  active: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionProject(from: ProjectStatus, to: ProjectStatus): boolean {
  return PROJECT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function validateProject(project: Pick<Project, 'name' | 'address' | 'authorizedBudget' | 'plannedStartDate' | 'plannedEndDate'>): boolean {
  return (
    project.name.trim().length > 0 &&
    project.address.trim().length > 0 &&
    project.authorizedBudget >= 0 &&
    project.plannedEndDate >= project.plannedStartDate
  );
}

export function projectRequiresPreviousActiveStatus(
  status: ProjectStatus,
): boolean {
  return status === 'completed';
}

export function isTerminalProjectStatus(status: ProjectStatus): boolean {
  return status === 'completed' || status === 'cancelled';
}
