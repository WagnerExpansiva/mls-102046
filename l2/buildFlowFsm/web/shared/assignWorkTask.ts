/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectTimelineInput,
  QryInspectProjectTimelineOutput,
  QryLocateFieldWorkerInput,
  QryLocateFieldWorkerOutput,
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdHandoffWorkTaskToFieldWorkerInput,
  CmdHandoffWorkTaskToFieldWorkerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.js';
import {
  qryLocateProjectRoute,
  qryInspectProjectTimelineRoute,
  qryLocateFieldWorkerRoute,
  cmdCreateWorkTaskRoute,
  cmdHandoffWorkTaskToFieldWorkerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.js';

export type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectTimelineInput,
  QryInspectProjectTimelineOutput,
  QryLocateFieldWorkerInput,
  QryLocateFieldWorkerOutput,
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdHandoffWorkTaskToFieldWorkerInput,
  CmdHandoffWorkTaskToFieldWorkerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/assignWorkTask.js';

/// **collab_i18n_start**
const message_pt = {
  'section.assignWorkTask.planningContext.title': 'Contexto de planejamento',
  'organism.assignWorkTask.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.assignWorkTask.qryLocateProject.list.column.name.label': 'Name',
  'intent.assignWorkTask.qryLocateProject.list.column.address.label': 'Address',
  'intent.assignWorkTask.qryLocateProject.list.column.status.label': 'Status',
  'intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.assignWorkTask.qryInspectProjectTimeline.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label': 'Work Tasks',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.assignWorkTask.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.assignWorkTask.taskExecution.title': 'Execução da tarefa',
  'organism.assignWorkTask.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdHandoffWorkTaskToFieldWorker.success': 'Encaminhar a tarefa ao trabalhador: OK',
  'action.cmdHandoffWorkTaskToFieldWorker.error': 'Encaminhar a tarefa ao trabalhador: falhou',
  'section.assignWorkTask.workPlanningWorkspace.title': 'Planejamento e atribuição',
  'section.assignWorkTask.taskPlanningWorkspace.title': 'Planejamento da tarefa',
  'section.assignWorkTask.fieldAssignmentWorkspace.title': 'Responsável e encaminhamento',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.assignWorkTask.planningContext.title': 'Contexto de planejamento',
  'organism.assignWorkTask.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.assignWorkTask.qryLocateProject.list.column.name.label': 'Name',
  'intent.assignWorkTask.qryLocateProject.list.column.address.label': 'Address',
  'intent.assignWorkTask.qryLocateProject.list.column.status.label': 'Status',
  'intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.assignWorkTask.qryInspectProjectTimeline.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label': 'Work Tasks',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.assignWorkTask.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.assignWorkTask.taskExecution.title': 'Execução da tarefa',
  'organism.assignWorkTask.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdHandoffWorkTaskToFieldWorker.success': 'Encaminhar a tarefa ao trabalhador: OK',
  'action.cmdHandoffWorkTaskToFieldWorker.error': 'Encaminhar a tarefa ao trabalhador: falhou',
  'section.assignWorkTask.workPlanningWorkspace.title': 'Planejamento e atribuição',
  'section.assignWorkTask.taskPlanningWorkspace.title': 'Planejamento da tarefa',
  'section.assignWorkTask.fieldAssignmentWorkspace.title': 'Responsável e encaminhamento',
};
const message_en: MessageType = {
  'section.assignWorkTask.planningContext.title': 'Contexto de planejamento',
  'organism.assignWorkTask.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.assignWorkTask.qryLocateProject.list.column.name.label': 'Name',
  'intent.assignWorkTask.qryLocateProject.list.column.address.label': 'Address',
  'intent.assignWorkTask.qryLocateProject.list.column.status.label': 'Status',
  'intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.assignWorkTask.qryInspectProjectTimeline.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label': 'Work Tasks',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.assignWorkTask.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.assignWorkTask.taskExecution.title': 'Execução da tarefa',
  'organism.assignWorkTask.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdHandoffWorkTaskToFieldWorker.success': 'Encaminhar a tarefa ao trabalhador: OK',
  'action.cmdHandoffWorkTaskToFieldWorker.error': 'Encaminhar a tarefa ao trabalhador: falhou',
  'section.assignWorkTask.workPlanningWorkspace.title': 'Planejamento e atribuição',
  'section.assignWorkTask.taskPlanningWorkspace.title': 'Planejamento da tarefa',
  'section.assignWorkTask.fieldAssignmentWorkspace.title': 'Responsável e encaminhamento',
};
const message_es: MessageType = {
  'section.assignWorkTask.planningContext.title': 'Contexto de planejamento',
  'organism.assignWorkTask.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.assignWorkTask.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.assignWorkTask.qryLocateProject.list.column.name.label': 'Name',
  'intent.assignWorkTask.qryLocateProject.list.column.address.label': 'Address',
  'intent.assignWorkTask.qryLocateProject.list.column.status.label': 'Status',
  'intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.assignWorkTask.qryInspectProjectTimeline.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.title': 'Consultar o cronograma da obra',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label': 'Project Id',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label': 'Work Tasks',
  'intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.assignWorkTask.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.assignWorkTask.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.assignWorkTask.taskExecution.title': 'Execução da tarefa',
  'organism.assignWorkTask.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker': 'Encaminhar a tarefa ao trabalhador',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label': 'Description',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label': 'Due Date',
  'intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdHandoffWorkTaskToFieldWorker.success': 'Encaminhar a tarefa ao trabalhador: OK',
  'action.cmdHandoffWorkTaskToFieldWorker.error': 'Encaminhar a tarefa ao trabalhador: falhou',
  'section.assignWorkTask.workPlanningWorkspace.title': 'Planejamento e atribuição',
  'section.assignWorkTask.taskPlanningWorkspace.title': 'Planejamento da tarefa',
  'section.assignWorkTask.fieldAssignmentWorkspace.title': 'Responsável e encaminhamento',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.assignWorkTask.status',
  'ui.assignWorkTask.action.qryLocateProject.status',
  'ui.assignWorkTask.data.qryLocateProject',
  'ui.assignWorkTask.action.qryInspectProjectTimeline.status',
  'ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId',
  'ui.assignWorkTask.data.qryInspectProjectTimeline',
  'ui.assignWorkTask.action.qryLocateFieldWorker.status',
  'ui.assignWorkTask.data.qryLocateFieldWorker',
  'ui.assignWorkTask.action.cmdCreateWorkTask.status',
  'ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId',
  'ui.assignWorkTask.input.cmdCreateWorkTask.description',
  'ui.assignWorkTask.input.cmdCreateWorkTask.dueDate',
  'ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate',
  'ui.assignWorkTask.output.cmdCreateWorkTask',
  'ui.assignWorkTask.action.cmdCreateWorkTask.error',
  'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status',
  'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId',
  'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description',
  'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate',
  'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate',
  'ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker',
  'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error',
];

export class BuildFlowFsmAssignWorkTaskBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryInspectProjectTimelineState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectTimelineState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectTimelineProjectTimelineProjectId — input */
  @property() qryInspectProjectTimelineProjectTimelineProjectId: string = '';
  /** state qryInspectProjectTimelineData — queryResult, outputShape: object */
  @property() qryInspectProjectTimelineData: QryInspectProjectTimelineOutput | null = null;
  /** state qryLocateFieldWorkerState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateFieldWorkerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateFieldWorkerData — queryResult, outputShape: array */
  @property() qryLocateFieldWorkerData: QryLocateFieldWorkerOutput[] = [];
  /** state cmdCreateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateWorkTaskProjectProjectId — input */
  @property() cmdCreateWorkTaskProjectProjectId: string = '';
  /** state cmdCreateWorkTaskDescription — input */
  @property() cmdCreateWorkTaskDescription: string = '';
  /** state cmdCreateWorkTaskDueDate — input */
  @property() cmdCreateWorkTaskDueDate: string = '';
  /** state cmdCreateWorkTaskProgressUpdate — input */
  @property() cmdCreateWorkTaskProgressUpdate: string = '';
  /** state cmdCreateWorkTaskOutput — commandOutput */
  @property() cmdCreateWorkTaskOutput: CmdCreateWorkTaskOutput | null = null;
  /** state cmdCreateWorkTaskError — actionError */
  @property() cmdCreateWorkTaskError: string = '';
  /** state cmdHandoffWorkTaskToFieldWorkerState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffWorkTaskToFieldWorkerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId — input */
  @property() cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId: string = '';
  /** state cmdHandoffWorkTaskToFieldWorkerDescription — input */
  @property() cmdHandoffWorkTaskToFieldWorkerDescription: string = '';
  /** state cmdHandoffWorkTaskToFieldWorkerDueDate — input */
  @property() cmdHandoffWorkTaskToFieldWorkerDueDate: string = '';
  /** state cmdHandoffWorkTaskToFieldWorkerProgressUpdate — input */
  @property() cmdHandoffWorkTaskToFieldWorkerProgressUpdate: string = '';
  /** state cmdHandoffWorkTaskToFieldWorkerOutput — commandOutput */
  @property() cmdHandoffWorkTaskToFieldWorkerOutput: CmdHandoffWorkTaskToFieldWorkerOutput | null = null;
  /** state cmdHandoffWorkTaskToFieldWorkerError — actionError */
  @property() cmdHandoffWorkTaskToFieldWorkerError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.assignWorkTask.status', '');
    this.initStateValue('ui.assignWorkTask.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.assignWorkTask.data.qryLocateProject', []);
    this.initStateValue('ui.assignWorkTask.action.qryInspectProjectTimeline.status', 'idle');
    this.initStateValue('ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId', '');
    this.initStateValue('ui.assignWorkTask.data.qryInspectProjectTimeline', null);
    this.initStateValue('ui.assignWorkTask.action.qryLocateFieldWorker.status', 'idle');
    this.initStateValue('ui.assignWorkTask.data.qryLocateFieldWorker', []);
    this.initStateValue('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'idle');
    this.initStateValue('ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId', '');
    this.initStateValue('ui.assignWorkTask.input.cmdCreateWorkTask.description', '');
    this.initStateValue('ui.assignWorkTask.input.cmdCreateWorkTask.dueDate', '');
    this.initStateValue('ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate', '');
    this.initStateValue('ui.assignWorkTask.output.cmdCreateWorkTask', null);
    this.initStateValue('ui.assignWorkTask.action.cmdCreateWorkTask.error', '');
    this.initStateValue('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'idle');
    this.initStateValue('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId', '');
    this.initStateValue('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description', '');
    this.initStateValue('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate', '');
    this.initStateValue('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate', '');
    this.initStateValue('ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker', null);
    this.initStateValue('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateProject();
    void this.loadQryLocateFieldWorker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.assignWorkTask.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.assignWorkTask.action.qryInspectProjectTimeline.status':
        this.qryInspectProjectTimelineState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId':
        this.qryInspectProjectTimelineProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.data.qryInspectProjectTimeline':
        this.qryInspectProjectTimelineData = (value as QryInspectProjectTimelineOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.qryLocateFieldWorker.status':
        this.qryLocateFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.data.qryLocateFieldWorker':
        this.qryLocateFieldWorkerData = (value as QryLocateFieldWorkerOutput[]) ?? [];
        break;
      case 'ui.assignWorkTask.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId':
        this.cmdCreateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate':
        this.cmdCreateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status':
        this.cmdHandoffWorkTaskToFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId':
        this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description':
        this.cmdHandoffWorkTaskToFieldWorkerDescription = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate':
        this.cmdHandoffWorkTaskToFieldWorkerDueDate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate':
        this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker':
        this.cmdHandoffWorkTaskToFieldWorkerOutput = (value as CmdHandoffWorkTaskToFieldWorkerOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error':
        this.cmdHandoffWorkTaskToFieldWorkerError = (value as string) ?? '';
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, defaultValue: unknown): void {
    const existing: unknown = getState(stateKey);
    const value: unknown = existing !== undefined ? existing : defaultValue;
    switch (stateKey) {
      case 'ui.assignWorkTask.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.assignWorkTask.action.qryInspectProjectTimeline.status':
        this.qryInspectProjectTimelineState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId':
        this.qryInspectProjectTimelineProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.data.qryInspectProjectTimeline':
        this.qryInspectProjectTimelineData = (value as QryInspectProjectTimelineOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.qryLocateFieldWorker.status':
        this.qryLocateFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.data.qryLocateFieldWorker':
        this.qryLocateFieldWorkerData = (value as QryLocateFieldWorkerOutput[]) ?? [];
        break;
      case 'ui.assignWorkTask.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId':
        this.cmdCreateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate':
        this.cmdCreateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status':
        this.cmdHandoffWorkTaskToFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId':
        this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description':
        this.cmdHandoffWorkTaskToFieldWorkerDescription = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate':
        this.cmdHandoffWorkTaskToFieldWorkerDueDate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate':
        this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker':
        this.cmdHandoffWorkTaskToFieldWorkerOutput = (value as CmdHandoffWorkTaskToFieldWorkerOutput | null) ?? null;
        break;
      case 'ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error':
        this.cmdHandoffWorkTaskToFieldWorkerError = (value as string) ?? '';
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private syncRouteParams(): void {
    const pathname: string = window.location.pathname;
    const match: RegExpMatchArray | null = pathname.match(
      /^\/buildFlowFsm\/assignWorkTask(?:\/([^/]+))?\/?$/,
    );
    const rawProjectProjectId: string = match && match[1] ? match[1] : '';
    let projectProjectId: string = '';
    if (rawProjectProjectId) {
      try {
        projectProjectId = decodeURIComponent(rawProjectProjectId);
      } catch {
        projectProjectId = rawProjectProjectId;
      }
    }
    if (projectProjectId) {
      if (!this.cmdCreateWorkTaskProjectProjectId) {
        this.cmdCreateWorkTaskProjectProjectId = projectProjectId;
        setState('ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId', projectProjectId);
      }
    }
  }

  private readErrorMessage(error: unknown, fallback: string): string {
    if (error && typeof error === 'object') {
      const record = error as { message?: unknown; error?: unknown };
      if (typeof record.message === 'string' && record.message) {
        return record.message;
      }
      if (typeof record.error === 'string' && record.error) {
        return record.error;
      }
    }
    return fallback;
  }

  /** action qryLocateProject (query) — route buildFlowFsm.assignWorkTask.qryLocateProject; inputs: (none); writes ui.assignWorkTask.data.qryLocateProject; status ui.assignWorkTask.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.assignWorkTask.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.assignWorkTask.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.assignWorkTask.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.assignWorkTask.action.qryLocateProject.status', 'error');
      if (response.error) {
        console.error('qryLocateProject failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateProject — bind UI events here */
  handleQryLocateProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateProject();
  }

  /** action qryInspectProjectTimeline (query) — route buildFlowFsm.assignWorkTask.qryInspectProjectTimeline; inputs: projectTimelineProjectId; writes ui.assignWorkTask.data.qryInspectProjectTimeline; status ui.assignWorkTask.action.qryInspectProjectTimeline.status */
  async loadQryInspectProjectTimeline(): Promise<void> {
    this.syncRouteParams();
    if (!this.qryInspectProjectTimelineProjectTimelineProjectId) {
      this.qryInspectProjectTimelineState = 'idle';
      setState('ui.assignWorkTask.action.qryInspectProjectTimeline.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectTimelineState = 'loading';
    setState('ui.assignWorkTask.action.qryInspectProjectTimeline.status', 'loading');
    const params: QryInspectProjectTimelineInput = {
      projectTimelineProjectId: this.qryInspectProjectTimelineProjectTimelineProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectTimelineOutput>(qryInspectProjectTimelineRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectTimelineData = data;
      setState('ui.assignWorkTask.data.qryInspectProjectTimeline', data);
      this.qryInspectProjectTimelineState = 'success';
      setState('ui.assignWorkTask.action.qryInspectProjectTimeline.status', 'success');
    } else {
      this.qryInspectProjectTimelineState = 'error';
      setState('ui.assignWorkTask.action.qryInspectProjectTimeline.status', 'error');
      if (response.error) {
        console.error('qryInspectProjectTimeline failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectProjectTimeline — bind UI events here */
  handleQryInspectProjectTimelineClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectProjectTimeline();
  }

  /** action qryLocateFieldWorker (query) — route buildFlowFsm.assignWorkTask.qryLocateFieldWorker; inputs: (none); writes ui.assignWorkTask.data.qryLocateFieldWorker; status ui.assignWorkTask.action.qryLocateFieldWorker.status */
  async loadQryLocateFieldWorker(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateFieldWorkerState = 'loading';
    setState('ui.assignWorkTask.action.qryLocateFieldWorker.status', 'loading');
    const params: QryLocateFieldWorkerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateFieldWorkerOutput[]>(qryLocateFieldWorkerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateFieldWorkerData = data;
      setState('ui.assignWorkTask.data.qryLocateFieldWorker', data);
      this.qryLocateFieldWorkerState = 'success';
      setState('ui.assignWorkTask.action.qryLocateFieldWorker.status', 'success');
    } else {
      this.qryLocateFieldWorkerState = 'error';
      setState('ui.assignWorkTask.action.qryLocateFieldWorker.status', 'error');
      if (response.error) {
        console.error('qryLocateFieldWorker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateFieldWorker — bind UI events here */
  handleQryLocateFieldWorkerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateFieldWorker();
  }

  /** action cmdCreateWorkTask (command) — route buildFlowFsm.assignWorkTask.cmdCreateWorkTask; inputs: projectProjectId, description, dueDate, progressUpdate; writes ui.assignWorkTask.output.cmdCreateWorkTask; status ui.assignWorkTask.action.cmdCreateWorkTask.status; feedback keys action.cmdCreateWorkTask.success / action.cmdCreateWorkTask.error */
  async cmdCreateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateWorkTaskProjectProjectId) {
      this.cmdCreateWorkTaskState = 'idle';
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateWorkTaskState = 'loading';
    setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'loading');
    this.cmdCreateWorkTaskError = '';
    setState('ui.assignWorkTask.action.cmdCreateWorkTask.error', '');
    const params: CmdCreateWorkTaskInput = {
      projectProjectId: this.cmdCreateWorkTaskProjectProjectId,
      description: this.cmdCreateWorkTaskDescription,
      dueDate: this.cmdCreateWorkTaskDueDate,
    };
    if (this.cmdCreateWorkTaskProgressUpdate) {
      params.progressUpdate = this.cmdCreateWorkTaskProgressUpdate;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateWorkTaskOutput>(cmdCreateWorkTaskRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateWorkTask.error');
      this.cmdCreateWorkTaskError = errMsg;
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.error', errMsg);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateWorkTaskOutput | null = response.data ?? null;
    this.cmdCreateWorkTaskOutput = data;
    setState('ui.assignWorkTask.output.cmdCreateWorkTask', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdCreateWorkTaskState = 'error';
        setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateWorkTask refresh failed', refreshError);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectTimeline();
      if (this.qryInspectProjectTimelineState === 'error') {
        this.cmdCreateWorkTaskState = 'error';
        setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateWorkTask refresh failed', refreshError);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateFieldWorker();
      if (this.qryLocateFieldWorkerState === 'error') {
        this.cmdCreateWorkTaskState = 'error';
        setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateWorkTask refresh failed', refreshError);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateWorkTaskDescription = '';
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.description', '');
    this.cmdCreateWorkTaskDueDate = '';
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.dueDate', '');
    this.cmdCreateWorkTaskProgressUpdate = '';
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate', '');
    this.cmdCreateWorkTaskState = 'success';
    setState('ui.assignWorkTask.action.cmdCreateWorkTask.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateWorkTask — bind UI events here */
  handleCmdCreateWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateWorkTask();
    });
  }

  /** action cmdHandoffWorkTaskToFieldWorker (command) — route buildFlowFsm.assignWorkTask.cmdHandoffWorkTaskToFieldWorker; inputs: workTaskWorkTaskId, description, dueDate, progressUpdate; writes ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker; status ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status; feedback keys action.cmdHandoffWorkTaskToFieldWorker.success / action.cmdHandoffWorkTaskToFieldWorker.error */
  async cmdHandoffWorkTaskToFieldWorker(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId) {
      this.cmdHandoffWorkTaskToFieldWorkerState = 'idle';
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffWorkTaskToFieldWorkerState = 'loading';
    setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'loading');
    this.cmdHandoffWorkTaskToFieldWorkerError = '';
    setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error', '');
    const params: CmdHandoffWorkTaskToFieldWorkerInput = {
      workTaskWorkTaskId: this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId,
      description: this.cmdHandoffWorkTaskToFieldWorkerDescription,
      dueDate: this.cmdHandoffWorkTaskToFieldWorkerDueDate,
    };
    if (this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate) {
      params.progressUpdate = this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffWorkTaskToFieldWorkerOutput>(cmdHandoffWorkTaskToFieldWorkerRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffWorkTaskToFieldWorker.error');
      this.cmdHandoffWorkTaskToFieldWorkerError = errMsg;
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.error', errMsg);
      this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffWorkTaskToFieldWorkerOutput | null = response.data ?? null;
    this.cmdHandoffWorkTaskToFieldWorkerOutput = data;
    setState('ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
        setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffWorkTaskToFieldWorker refresh failed', refreshError);
      this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectTimeline();
      if (this.qryInspectProjectTimelineState === 'error') {
        this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
        setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffWorkTaskToFieldWorker refresh failed', refreshError);
      this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateFieldWorker();
      if (this.qryLocateFieldWorkerState === 'error') {
        this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
        setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffWorkTaskToFieldWorker refresh failed', refreshError);
      this.cmdHandoffWorkTaskToFieldWorkerState = 'error';
      setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = '';
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId', '');
    this.cmdHandoffWorkTaskToFieldWorkerDescription = '';
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description', '');
    this.cmdHandoffWorkTaskToFieldWorkerDueDate = '';
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate', '');
    this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate = '';
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate', '');
    this.cmdHandoffWorkTaskToFieldWorkerState = 'success';
    setState('ui.assignWorkTask.action.cmdHandoffWorkTaskToFieldWorker.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffWorkTaskToFieldWorker — bind UI events here */
  handleCmdHandoffWorkTaskToFieldWorkerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffWorkTaskToFieldWorker();
    });
  }

  /** setter for state ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId */
  setQryInspectProjectTimelineProjectTimelineProjectId(value: string): void {
    this.qryInspectProjectTimelineProjectTimelineProjectId = value;
    setState('ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectTimelineProjectTimelineProjectId — bind UI events here */
  handleQryInspectProjectTimelineProjectTimelineProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectTimelineProjectTimelineProjectId(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId */
  setCmdCreateWorkTaskProjectProjectId(value: string): void {
    this.cmdCreateWorkTaskProjectProjectId = value;
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProjectProjectId — bind UI events here */
  handleCmdCreateWorkTaskProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskProjectProjectId(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdCreateWorkTask.description */
  setCmdCreateWorkTaskDescription(value: string): void {
    this.cmdCreateWorkTaskDescription = value;
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDescription — bind UI events here */
  handleCmdCreateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDescription(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdCreateWorkTask.dueDate */
  setCmdCreateWorkTaskDueDate(value: string): void {
    this.cmdCreateWorkTaskDueDate = value;
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDueDate — bind UI events here */
  handleCmdCreateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDueDate(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate */
  setCmdCreateWorkTaskProgressUpdate(value: string): void {
    this.cmdCreateWorkTaskProgressUpdate = value;
    setState('ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProgressUpdate — bind UI events here */
  handleCmdCreateWorkTaskProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskProgressUpdate(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId */
  setCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId(value: string): void {
    this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId = value;
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId — bind UI events here */
  handleCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description */
  setCmdHandoffWorkTaskToFieldWorkerDescription(value: string): void {
    this.cmdHandoffWorkTaskToFieldWorkerDescription = value;
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskToFieldWorkerDescription — bind UI events here */
  handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskToFieldWorkerDescription(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate */
  setCmdHandoffWorkTaskToFieldWorkerDueDate(value: string): void {
    this.cmdHandoffWorkTaskToFieldWorkerDueDate = value;
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskToFieldWorkerDueDate — bind UI events here */
  handleCmdHandoffWorkTaskToFieldWorkerDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskToFieldWorkerDueDate(value);
  }

  /** setter for state ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate */
  setCmdHandoffWorkTaskToFieldWorkerProgressUpdate(value: string): void {
    this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate = value;
    setState('ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskToFieldWorkerProgressUpdate — bind UI events here */
  handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskToFieldWorkerProgressUpdate(value);
  }
}
