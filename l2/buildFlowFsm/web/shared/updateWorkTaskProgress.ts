/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateWorkTaskInput,
  QryLocateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdHandoffWorkTaskProgressToFieldCoordinatorInput,
  CmdHandoffWorkTaskProgressToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.js';
import {
  qryLocateWorkTaskRoute,
  cmdUpdateWorkTaskRoute,
  cmdHandoffWorkTaskProgressToFieldCoordinatorRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.js';

export type {
  QryLocateWorkTaskInput,
  QryLocateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdHandoffWorkTaskProgressToFieldCoordinatorInput,
  CmdHandoffWorkTaskProgressToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/updateWorkTaskProgress.js';

/// **collab_i18n_start**
const message_pt = {
  'section.updateWorkTaskProgress.locateWorkTask.title': 'Tarefa selecionada',
  'organism.updateWorkTaskProgress.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.updateWorkTask.title': 'Registrar andamento',
  'organism.updateWorkTaskProgress.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title': 'Comunicar ao coordenador',
  'organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.success': 'Informar o andamento ao coordenador: OK',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.error': 'Informar o andamento ao coordenador: falhou',
  'section.updateWorkTaskProgress.taskProgressWorkspace.title': 'Acompanhamento da tarefa',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.updateWorkTaskProgress.locateWorkTask.title': 'Tarefa selecionada',
  'organism.updateWorkTaskProgress.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.updateWorkTask.title': 'Registrar andamento',
  'organism.updateWorkTaskProgress.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title': 'Comunicar ao coordenador',
  'organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.success': 'Informar o andamento ao coordenador: OK',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.error': 'Informar o andamento ao coordenador: falhou',
  'section.updateWorkTaskProgress.taskProgressWorkspace.title': 'Acompanhamento da tarefa',
};
const message_en: MessageType = {
  'section.updateWorkTaskProgress.locateWorkTask.title': 'Tarefa selecionada',
  'organism.updateWorkTaskProgress.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.updateWorkTask.title': 'Registrar andamento',
  'organism.updateWorkTaskProgress.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title': 'Comunicar ao coordenador',
  'organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.success': 'Informar o andamento ao coordenador: OK',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.error': 'Informar o andamento ao coordenador: falhou',
  'section.updateWorkTaskProgress.taskProgressWorkspace.title': 'Acompanhamento da tarefa',
};
const message_es: MessageType = {
  'section.updateWorkTaskProgress.locateWorkTask.title': 'Tarefa selecionada',
  'organism.updateWorkTaskProgress.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.updateWorkTask.title': 'Registrar andamento',
  'organism.updateWorkTaskProgress.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title': 'Comunicar ao coordenador',
  'organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator': 'Informar o andamento ao coordenador',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label': 'Description',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label': 'Due Date',
  'intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.success': 'Informar o andamento ao coordenador: OK',
  'action.cmdHandoffWorkTaskProgressToFieldCoordinator.error': 'Informar o andamento ao coordenador: falhou',
  'section.updateWorkTaskProgress.taskProgressWorkspace.title': 'Acompanhamento da tarefa',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.updateWorkTaskProgress.status',
  'ui.updateWorkTaskProgress.action.qryLocateWorkTask.status',
  'ui.updateWorkTaskProgress.data.qryLocateWorkTask',
  'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status',
  'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId',
  'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId',
  'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description',
  'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate',
  'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate',
  'ui.updateWorkTaskProgress.output.cmdUpdateWorkTask',
  'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error',
  'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status',
  'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId',
  'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description',
  'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate',
  'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate',
  'ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator',
  'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error',
];

export class BuildFlowFsmUpdateWorkTaskProgressBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateWorkTaskData — queryResult, outputShape: array */
  @property() qryLocateWorkTaskData: QryLocateWorkTaskOutput[] = [];
  /** state cmdUpdateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateWorkTaskProjectProjectId — input */
  @property() cmdUpdateWorkTaskProjectProjectId: string = '';
  /** state cmdUpdateWorkTaskWorkTaskWorkTaskId — input */
  @property() cmdUpdateWorkTaskWorkTaskWorkTaskId: string = '';
  /** state cmdUpdateWorkTaskDescription — input */
  @property() cmdUpdateWorkTaskDescription: string = '';
  /** state cmdUpdateWorkTaskDueDate — input */
  @property() cmdUpdateWorkTaskDueDate: string = '';
  /** state cmdUpdateWorkTaskProgressUpdate — input */
  @property() cmdUpdateWorkTaskProgressUpdate: string = '';
  /** state cmdUpdateWorkTaskOutput — commandOutput */
  @property() cmdUpdateWorkTaskOutput: CmdUpdateWorkTaskOutput | null = null;
  /** state cmdUpdateWorkTaskError — actionError */
  @property() cmdUpdateWorkTaskError: string = '';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId — input */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId: string = '';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorDescription — input */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorDescription: string = '';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate — input */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate: string = '';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate — input */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate: string = '';
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorOutput — commandOutput */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorOutput: CmdHandoffWorkTaskProgressToFieldCoordinatorOutput | null = null;
  /** state cmdHandoffWorkTaskProgressToFieldCoordinatorError — actionError */
  @property() cmdHandoffWorkTaskProgressToFieldCoordinatorError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.updateWorkTaskProgress.status', '');
    this.initStateValue('ui.updateWorkTaskProgress.action.qryLocateWorkTask.status', 'idle');
    this.initStateValue('ui.updateWorkTaskProgress.data.qryLocateWorkTask', []);
    this.initStateValue('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'idle');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate', '');
    this.initStateValue('ui.updateWorkTaskProgress.output.cmdUpdateWorkTask', null);
    this.initStateValue('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error', '');
    this.initStateValue('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'idle');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate', '');
    this.initStateValue('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate', '');
    this.initStateValue('ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator', null);
    this.initStateValue('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateWorkTask();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.updateWorkTaskProgress.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.action.qryLocateWorkTask.status':
        this.qryLocateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.data.qryLocateWorkTask':
        this.qryLocateWorkTaskData = (value as QryLocateWorkTaskOutput[]) ?? [];
        break;
      case 'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId':
        this.cmdUpdateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId':
        this.cmdUpdateWorkTaskWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate':
        this.cmdUpdateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorOutput = (value as CmdHandoffWorkTaskProgressToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorError = (value as string) ?? '';
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
      case 'ui.updateWorkTaskProgress.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.action.qryLocateWorkTask.status':
        this.qryLocateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.data.qryLocateWorkTask':
        this.qryLocateWorkTaskData = (value as QryLocateWorkTaskOutput[]) ?? [];
        break;
      case 'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId':
        this.cmdUpdateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId':
        this.cmdUpdateWorkTaskWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate':
        this.cmdUpdateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorOutput = (value as CmdHandoffWorkTaskProgressToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error':
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/updateWorkTaskProgress(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdUpdateWorkTaskProjectProjectId) {
        this.cmdUpdateWorkTaskProjectProjectId = projectProjectId;
        setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId', projectProjectId);
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

  /** action qryLocateWorkTask (query) — route buildFlowFsm.updateWorkTaskProgress.qryLocateWorkTask; inputs: (none); writes ui.updateWorkTaskProgress.data.qryLocateWorkTask; status ui.updateWorkTaskProgress.action.qryLocateWorkTask.status */
  async loadQryLocateWorkTask(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateWorkTaskState = 'loading';
    setState('ui.updateWorkTaskProgress.action.qryLocateWorkTask.status', 'loading');
    const params: QryLocateWorkTaskInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateWorkTaskOutput[]>(qryLocateWorkTaskRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateWorkTaskData = data;
      setState('ui.updateWorkTaskProgress.data.qryLocateWorkTask', data);
      this.qryLocateWorkTaskState = 'success';
      setState('ui.updateWorkTaskProgress.action.qryLocateWorkTask.status', 'success');
    } else {
      this.qryLocateWorkTaskState = 'error';
      setState('ui.updateWorkTaskProgress.action.qryLocateWorkTask.status', 'error');
      if (response.error) {
        console.error('qryLocateWorkTask failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateWorkTask — bind UI events here */
  handleQryLocateWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateWorkTask();
  }

  /** action cmdUpdateWorkTask (command) — route buildFlowFsm.updateWorkTaskProgress.cmdUpdateWorkTask; inputs: projectProjectId, workTaskWorkTaskId, description, dueDate, progressUpdate; writes ui.updateWorkTaskProgress.output.cmdUpdateWorkTask; status ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status; feedback keys action.cmdUpdateWorkTask.success / action.cmdUpdateWorkTask.error */
  async cmdUpdateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateWorkTaskProjectProjectId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateWorkTaskWorkTaskWorkTaskId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskState = 'loading';
    setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'loading');
    this.cmdUpdateWorkTaskError = '';
    setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error', '');
    const params: CmdUpdateWorkTaskInput = {
      projectProjectId: this.cmdUpdateWorkTaskProjectProjectId,
      workTaskWorkTaskId: this.cmdUpdateWorkTaskWorkTaskWorkTaskId,
      description: this.cmdUpdateWorkTaskDescription,
      dueDate: this.cmdUpdateWorkTaskDueDate,
    };
    if (this.cmdUpdateWorkTaskProgressUpdate) {
      params.progressUpdate = this.cmdUpdateWorkTaskProgressUpdate;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateWorkTaskOutput>(cmdUpdateWorkTaskRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateWorkTask.error');
      this.cmdUpdateWorkTaskError = errMsg;
      setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.error', errMsg);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateWorkTaskOutput | null = response.data ?? null;
    this.cmdUpdateWorkTaskOutput = data;
    setState('ui.updateWorkTaskProgress.output.cmdUpdateWorkTask', data);
    try {
      await this.loadQryLocateWorkTask();
      if (this.qryLocateWorkTaskState === 'error') {
        this.cmdUpdateWorkTaskState = 'error';
        setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateWorkTask refresh failed', refreshError);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskWorkTaskWorkTaskId = '';
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId', '');
    this.cmdUpdateWorkTaskDescription = '';
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description', '');
    this.cmdUpdateWorkTaskDueDate = '';
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate', '');
    this.cmdUpdateWorkTaskProgressUpdate = '';
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate', '');
    this.cmdUpdateWorkTaskState = 'success';
    setState('ui.updateWorkTaskProgress.action.cmdUpdateWorkTask.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateWorkTask — bind UI events here */
  handleCmdUpdateWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateWorkTask();
    });
  }

  /** action cmdHandoffWorkTaskProgressToFieldCoordinator (command) — route buildFlowFsm.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator; inputs: workTaskWorkTaskId, description, dueDate, progressUpdate; writes ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator; status ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status; feedback keys action.cmdHandoffWorkTaskProgressToFieldCoordinator.success / action.cmdHandoffWorkTaskProgressToFieldCoordinator.error */
  async cmdHandoffWorkTaskProgressToFieldCoordinator(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId) {
      this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'idle';
      setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'loading';
    setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'loading');
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorError = '';
    setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error', '');
    const params: CmdHandoffWorkTaskProgressToFieldCoordinatorInput = {
      workTaskWorkTaskId: this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId,
      description: this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription,
      dueDate: this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate,
    };
    if (this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate) {
      params.progressUpdate = this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffWorkTaskProgressToFieldCoordinatorOutput>(cmdHandoffWorkTaskProgressToFieldCoordinatorRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffWorkTaskProgressToFieldCoordinator.error');
      this.cmdHandoffWorkTaskProgressToFieldCoordinatorError = errMsg;
      setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.error', errMsg);
      this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'error';
      setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffWorkTaskProgressToFieldCoordinatorOutput | null = response.data ?? null;
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorOutput = data;
    setState('ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator', data);
    try {
      await this.loadQryLocateWorkTask();
      if (this.qryLocateWorkTaskState === 'error') {
        this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'error';
        setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffWorkTaskProgressToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'error';
      setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = '';
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId', '');
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription = '';
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description', '');
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = '';
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate', '');
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = '';
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate', '');
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorState = 'success';
    setState('ui.updateWorkTaskProgress.action.cmdHandoffWorkTaskProgressToFieldCoordinator.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffWorkTaskProgressToFieldCoordinator — bind UI events here */
  handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffWorkTaskProgressToFieldCoordinator();
    });
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId */
  setCmdUpdateWorkTaskProjectProjectId(value: string): void {
    this.cmdUpdateWorkTaskProjectProjectId = value;
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskProjectProjectId — bind UI events here */
  handleCmdUpdateWorkTaskProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskProjectProjectId(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId */
  setCmdUpdateWorkTaskWorkTaskWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskWorkTaskWorkTaskId = value;
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskWorkTaskWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description */
  setCmdUpdateWorkTaskDescription(value: string): void {
    this.cmdUpdateWorkTaskDescription = value;
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDescription — bind UI events here */
  handleCmdUpdateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDescription(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate */
  setCmdUpdateWorkTaskDueDate(value: string): void {
    this.cmdUpdateWorkTaskDueDate = value;
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDueDate — bind UI events here */
  handleCmdUpdateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDueDate(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate */
  setCmdUpdateWorkTaskProgressUpdate(value: string): void {
    this.cmdUpdateWorkTaskProgressUpdate = value;
    setState('ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskProgressUpdate — bind UI events here */
  handleCmdUpdateWorkTaskProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskProgressUpdate(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId */
  setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId(value: string): void {
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId = value;
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId — bind UI events here */
  handleCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description */
  setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription(value: string): void {
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription = value;
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription — bind UI events here */
  handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate */
  setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate(value: string): void {
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate = value;
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate — bind UI events here */
  handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate(value);
  }

  /** setter for state ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate */
  setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate(value: string): void {
    this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate = value;
    setState('ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate — bind UI events here */
  handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate(value);
  }
}
