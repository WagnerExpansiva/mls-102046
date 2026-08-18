/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectTimeline.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectTimelineRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectTimelineRepository.js';

export interface InspectProjectTimelineInput {
  projectId: string;
}

export interface InspectProjectTimelineOutput {
  projectId: string;
  workTasks?: string;
  scheduleEntries?: string;
}

export async function inspectProjectTimeline(
  ctx: RequestContext,
  input: InspectProjectTimelineInput,
): Promise<InspectProjectTimelineOutput> {
  if (input.projectId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'projectId is required to inspect the project timeline.',
      400,
    );
  }

  const projectTimelines = resolveRepository<IProjectTimelineRepository>(
    ctx,
    'ProjectTimeline',
  );
  const timeline = await projectTimelines.getByProjectId(input.projectId);

  if (!timeline) {
    throw new AppError(
      'NOT_FOUND',
      `Project timeline not found for project: ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  return {
    projectId: timeline.projectId,
    ...(timeline.workTasks !== null
      ? { workTasks: JSON.stringify(timeline.workTasks) }
      : {}),
    ...(timeline.scheduleEntries !== null
      ? { scheduleEntries: JSON.stringify(timeline.scheduleEntries) }
      : {}),
  };
}
