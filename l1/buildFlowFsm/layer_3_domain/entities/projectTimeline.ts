/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectTimeline.ts" enhancement="_blank"/>

export interface ProjectTimelineTask {
  taskId: string;
  projectId: string;
  sequence: number | null;
  plannedStart: string | null;
  plannedFinish: string | null;
  [key: string]: unknown;
}

export interface ProjectTimelineScheduleEntry {
  taskId: string;
  projectId: string;
  sequence: number | null;
  plannedStart: string | null;
  plannedFinish: string | null;
  [key: string]: unknown;
}

export interface ProjectTimeline {
  projectId: string;
  workTasks: ProjectTimelineTask[] | null;
  scheduleEntries: ProjectTimelineScheduleEntry[] | null;
}

function hasValidProjectId(projectId: string): boolean {
  return projectId.trim().length > 0;
}

function taskIdentity(task: ProjectTimelineTask): string {
  return task.taskId.trim();
}

function sequenceOf(item: { sequence: number | null }): number | null {
  return item.sequence;
}

function dateOf(item: {
  plannedStart: string | null;
  plannedFinish: string | null;
}): string | null {
  return item.plannedStart ?? item.plannedFinish;
}

export function projectTimelineHasValidProject(
  timeline: Pick<ProjectTimeline, 'projectId'>,
): boolean {
  return hasValidProjectId(timeline.projectId);
}

export function projectTimelineHasConsistentProject(
  timeline: Pick<ProjectTimeline, 'projectId' | 'workTasks' | 'scheduleEntries'>,
): boolean {
  if (!hasValidProjectId(timeline.projectId)) return false;

  const tasks = timeline.workTasks ?? [];
  const entries = timeline.scheduleEntries ?? [];
  return [...tasks, ...entries].every(
    (item) => item.projectId === timeline.projectId,
  );
}

export function projectTimelineHasUniqueTaskIdentities(
  items: readonly Pick<ProjectTimelineTask, 'taskId'>[],
): boolean {
  const identities = items.map((item) => item.taskId.trim());
  return identities.every(
    (identity, index) =>
      identity.length > 0 && identities.indexOf(identity) === index,
  );
}

export function projectTimelineHasValidDates(
  items: readonly Pick<ProjectTimelineTask, 'plannedStart' | 'plannedFinish'>[],
): boolean {
  return items.every((item) => {
    if (item.plannedStart === null || item.plannedFinish === null) return true;
    return item.plannedStart <= item.plannedFinish;
  });
}

export function projectTimelineHasConsistentScheduleEntries(
  timeline: Pick<ProjectTimeline, 'projectId' | 'workTasks' | 'scheduleEntries'>,
): boolean {
  const tasks = timeline.workTasks ?? [];
  const entries = timeline.scheduleEntries ?? [];
  const taskIds = new Set(tasks.map(taskIdentity));

  if (!entries.every((entry) => entry.projectId === timeline.projectId)) return false;
  if (!entries.every((entry) => taskIds.has(taskIdentity(entry)))) return false;
  if (!projectTimelineHasUniqueTaskIdentities(tasks)) return false;
  if (!projectTimelineHasUniqueTaskIdentities(entries)) return false;
  if (!projectTimelineHasValidDates(tasks) || !projectTimelineHasValidDates(entries)) {
    return false;
  }

  for (let index = 1; index < entries.length; index += 1) {
    const previous = entries[index - 1];
    const current = entries[index];
    const previousSequence = sequenceOf(previous);
    const currentSequence = sequenceOf(current);

    if (
      previousSequence !== null &&
      currentSequence !== null &&
      currentSequence < previousSequence
    ) {
      return false;
    }

    const previousDate = dateOf(previous);
    const currentDate = dateOf(current);
    if (previousDate !== null && currentDate !== null && currentDate < previousDate) {
      return false;
    }
  }

  return true;
}

export function isProjectTimelineValid(timeline: ProjectTimeline): boolean {
  return (
    projectTimelineHasValidProject(timeline) &&
    projectTimelineHasConsistentProject(timeline) &&
    projectTimelineHasConsistentScheduleEntries(timeline)
  );
}
