/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { validateChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface CreateChangeOrderInput {
  clientClientId: string;
  projectProjectId: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
}

export interface CreateChangeOrderOutput {
  changeOrderId: string;
  clientRef: string;
  projectRef: string;
  description: string;
  scopeImpact: string;
  scheduleImpact: string;
  changeAmount: number;
  submittedAt: string;
  forwardedForClientApprovalAt?: string;
  status: string;
}

export async function createChangeOrder(
  ctx: RequestContext,
  input: CreateChangeOrderInput,
): Promise<CreateChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const clients = resolveRepository<IClientRepository>(ctx, 'Client');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  const persisted = await ctx.data.runInTransaction(async () => {
    const client = await clients.getById(input.clientClientId);
    if (!client) {
      throw new AppError(
        'VALIDATION_ERROR',
        'A change order requires an existing client.',
        400,
        { ruleId: 'changeOrderRequiresClientAndProject', clientClientId: input.clientClientId },
      );
    }

    const project = await projects.getById(input.projectProjectId);
    if (!project || project.clientId !== client.clientId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'A change order requires an existing project belonging to the selected client.',
        400,
        {
          ruleId: 'changeOrderRequiresClientAndProject',
          clientClientId: input.clientClientId,
          projectProjectId: input.projectProjectId,
        },
      );
    }

    const now = ctx.clock.nowIso();
    const changeOrder: ChangeOrder = {
      changeOrderId: ctx.idGenerator.newId(),
      clientRef: client.clientId,
      projectRef: project.projectId,
      description: input.description,
      scopeImpact: input.scopeImpact,
      scheduleImpact: input.scheduleImpact,
      changeAmount: input.changeAmount,
      submittedAt: now,
      forwardedForClientApprovalAt: null,
      status: 'submitted',
    };

    const validationErrors = validateChangeOrder(
      changeOrder,
      (projectRef, clientRef) =>
        projectRef === project.projectId && clientRef === client.clientId,
    );
    if (validationErrors.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'The change order proposal is invalid.',
        400,
        { errors: validationErrors },
      );
    }

    await changeOrders.save(changeOrder);
    return changeOrder;
  });

  return {
    changeOrderId: persisted.changeOrderId,
    clientRef: persisted.clientRef,
    projectRef: persisted.projectRef,
    description: persisted.description,
    scopeImpact: persisted.scopeImpact,
    scheduleImpact: persisted.scheduleImpact,
    changeAmount: persisted.changeAmount,
    submittedAt: persisted.submittedAt,
    forwardedForClientApprovalAt: persisted.forwardedForClientApprovalAt ?? undefined,
    status: persisted.status,
  };
}
