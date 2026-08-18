/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.ts" enhancement="_blank"/>
export type WorkTaskStatus = 'planned' | 'inProgress' | 'completed' | 'cancelled';

export interface WorkTask {
  workTaskId: string;
  projectId: string;
  assignedFieldWorkerId: string;
  description: string;
  dueDate: string;
  status: WorkTaskStatus;
  progressUpdate: string | null;
  createdAt: string;
  updatedAt: string;
}

export const WORK_TASK_STATUS_TRANSITIONS: Record<WorkTaskStatus, WorkTaskStatus[]> = {
  planned: ['inProgress', 'cancelled'],
  inProgress: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionWorkTask(from: WorkTaskStatus, to: WorkTaskStatus): boolean {
  return WORK_TASK_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function workTaskRequiresProgressUpdate(status: WorkTaskStatus): boolean {
  return status === 'inProgress' || status === 'completed';
}

export function isWorkTaskDueDateValid(workTask: Pick<WorkTask, 'dueDate' | 'createdAt'>): boolean {
  return workTask.dueDate >= workTask.createdAt.slice(0, 10);
}

export function isWorkTaskProgressValid(
  workTask: Pick<WorkTask, 'status' | 'progressUpdate'>,
): boolean {
  if (!workTaskRequiresProgressUpdate(workTask.status)) {
    return true;
  }

  return workTask.progressUpdate !== null && workTask.progressUpdate.trim().length > 0;
}
