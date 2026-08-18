/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListWorkTaskInput,
  QryListWorkTaskOutput,
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdDeleteWorkTaskInput,
  CmdDeleteWorkTaskOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.js';
import {
  qryListWorkTaskRoute,
  cmdCreateWorkTaskRoute,
  cmdUpdateWorkTaskRoute,
  cmdDeleteWorkTaskRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.js';

export type {
  QryListWorkTaskInput,
  QryListWorkTaskOutput,
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdDeleteWorkTaskInput,
  CmdDeleteWorkTaskOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/workTaskCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.workTaskCatalogue.recordList.title': 'Localizar tarefa de trabalho',
  'organism.workTaskCatalogue.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.description.label': 'Description',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.status.label': 'Status',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdDeleteWorkTask.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask': 'Excluir Tarefa de trabalho',
  'section.workTaskCatalogue.recordForm.title': 'Criar ou corrigir tarefa',
  'organism.workTaskCatalogue.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdDeleteWorkTask.success': 'Excluir Tarefa de trabalho: OK',
  'action.cmdDeleteWorkTask.error': 'Excluir Tarefa de trabalho: falhou',
  'section.workTaskCatalogue.taskWorkbench.title': 'Gestão de tarefas',
  'section.workTaskCatalogue.workTaskWorkbench.title': 'Tarefas de trabalho',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.workTaskCatalogue.recordList.title': 'Localizar tarefa de trabalho',
  'organism.workTaskCatalogue.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.description.label': 'Description',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.status.label': 'Status',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdDeleteWorkTask.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask': 'Excluir Tarefa de trabalho',
  'section.workTaskCatalogue.recordForm.title': 'Criar ou corrigir tarefa',
  'organism.workTaskCatalogue.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdDeleteWorkTask.success': 'Excluir Tarefa de trabalho: OK',
  'action.cmdDeleteWorkTask.error': 'Excluir Tarefa de trabalho: falhou',
  'section.workTaskCatalogue.taskWorkbench.title': 'Gestão de tarefas',
  'section.workTaskCatalogue.workTaskWorkbench.title': 'Tarefas de trabalho',
};
const message_en: MessageType = {
  'section.workTaskCatalogue.recordList.title': 'Localizar tarefa de trabalho',
  'organism.workTaskCatalogue.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.description.label': 'Description',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.status.label': 'Status',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdDeleteWorkTask.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask': 'Excluir Tarefa de trabalho',
  'section.workTaskCatalogue.recordForm.title': 'Criar ou corrigir tarefa',
  'organism.workTaskCatalogue.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdDeleteWorkTask.success': 'Excluir Tarefa de trabalho: OK',
  'action.cmdDeleteWorkTask.error': 'Excluir Tarefa de trabalho: falhou',
  'section.workTaskCatalogue.taskWorkbench.title': 'Gestão de tarefas',
  'section.workTaskCatalogue.workTaskWorkbench.title': 'Tarefas de trabalho',
};
const message_es: MessageType = {
  'section.workTaskCatalogue.recordList.title': 'Localizar tarefa de trabalho',
  'organism.workTaskCatalogue.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.workTaskCatalogue.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.description.label': 'Description',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.status.label': 'Status',
  'intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdDeleteWorkTask.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.title': 'Excluir Tarefa de trabalho',
  'intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask': 'Excluir Tarefa de trabalho',
  'section.workTaskCatalogue.recordForm.title': 'Criar ou corrigir tarefa',
  'organism.workTaskCatalogue.cmdCreateWorkTask.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.title': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Registrar a tarefa atribuída',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'organism.workTaskCatalogue.cmdUpdateWorkTask.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.title': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Registrar o andamento da tarefa',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label': 'Progress Update',
  'action.cmdCreateWorkTask.success': 'Registrar a tarefa atribuída: OK',
  'action.cmdCreateWorkTask.error': 'Registrar a tarefa atribuída: falhou',
  'action.cmdUpdateWorkTask.success': 'Registrar o andamento da tarefa: OK',
  'action.cmdUpdateWorkTask.error': 'Registrar o andamento da tarefa: falhou',
  'action.cmdDeleteWorkTask.success': 'Excluir Tarefa de trabalho: OK',
  'action.cmdDeleteWorkTask.error': 'Excluir Tarefa de trabalho: falhou',
  'section.workTaskCatalogue.taskWorkbench.title': 'Gestão de tarefas',
  'section.workTaskCatalogue.workTaskWorkbench.title': 'Tarefas de trabalho',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.workTaskCatalogue.status',
  'ui.workTaskCatalogue.action.qryListWorkTask.status',
  'ui.workTaskCatalogue.data.qryListWorkTask',
  'ui.workTaskCatalogue.action.cmdCreateWorkTask.status',
  'ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId',
  'ui.workTaskCatalogue.input.cmdCreateWorkTask.description',
  'ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate',
  'ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate',
  'ui.workTaskCatalogue.output.cmdCreateWorkTask',
  'ui.workTaskCatalogue.action.cmdCreateWorkTask.error',
  'ui.workTaskCatalogue.action.cmdUpdateWorkTask.status',
  'ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId',
  'ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId',
  'ui.workTaskCatalogue.input.cmdUpdateWorkTask.description',
  'ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate',
  'ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate',
  'ui.workTaskCatalogue.output.cmdUpdateWorkTask',
  'ui.workTaskCatalogue.action.cmdUpdateWorkTask.error',
  'ui.workTaskCatalogue.action.cmdDeleteWorkTask.status',
  'ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId',
  'ui.workTaskCatalogue.output.cmdDeleteWorkTask',
  'ui.workTaskCatalogue.action.cmdDeleteWorkTask.error',
];

export class BuildFlowFsmWorkTaskCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() qryListWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListWorkTaskData — queryResult, outputShape: array */
  @property() qryListWorkTaskData: QryListWorkTaskOutput[] = [];
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
  /** state cmdDeleteWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteWorkTaskWorkTaskId — input */
  @property() cmdDeleteWorkTaskWorkTaskId: string = '';
  /** state cmdDeleteWorkTaskOutput — commandOutput */
  @property() cmdDeleteWorkTaskOutput: CmdDeleteWorkTaskOutput | null = null;
  /** state cmdDeleteWorkTaskError — actionError */
  @property() cmdDeleteWorkTaskError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.workTaskCatalogue.status', '');
    this.initStateValue('ui.workTaskCatalogue.action.qryListWorkTask.status', 'idle');
    this.initStateValue('ui.workTaskCatalogue.data.qryListWorkTask', []);
    this.initStateValue('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'idle');
    this.initStateValue('ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdCreateWorkTask.description', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate', '');
    this.initStateValue('ui.workTaskCatalogue.output.cmdCreateWorkTask', null);
    this.initStateValue('ui.workTaskCatalogue.action.cmdCreateWorkTask.error', '');
    this.initStateValue('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'idle');
    this.initStateValue('ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdUpdateWorkTask.description', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate', '');
    this.initStateValue('ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate', '');
    this.initStateValue('ui.workTaskCatalogue.output.cmdUpdateWorkTask', null);
    this.initStateValue('ui.workTaskCatalogue.action.cmdUpdateWorkTask.error', '');
    this.initStateValue('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'idle');
    this.initStateValue('ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId', '');
    this.initStateValue('ui.workTaskCatalogue.output.cmdDeleteWorkTask', null);
    this.initStateValue('ui.workTaskCatalogue.action.cmdDeleteWorkTask.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListWorkTask();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.workTaskCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.qryListWorkTask.status':
        this.qryListWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.data.qryListWorkTask':
        this.qryListWorkTaskData = (value as QryListWorkTaskOutput[]) ?? [];
        break;
      case 'ui.workTaskCatalogue.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId':
        this.cmdCreateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate':
        this.cmdCreateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId':
        this.cmdUpdateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId':
        this.cmdUpdateWorkTaskWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate':
        this.cmdUpdateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.cmdDeleteWorkTask.status':
        this.cmdDeleteWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId':
        this.cmdDeleteWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdDeleteWorkTask':
        this.cmdDeleteWorkTaskOutput = (value as CmdDeleteWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdDeleteWorkTask.error':
        this.cmdDeleteWorkTaskError = (value as string) ?? '';
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
      case 'ui.workTaskCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.qryListWorkTask.status':
        this.qryListWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.data.qryListWorkTask':
        this.qryListWorkTaskData = (value as QryListWorkTaskOutput[]) ?? [];
        break;
      case 'ui.workTaskCatalogue.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId':
        this.cmdCreateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate':
        this.cmdCreateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId':
        this.cmdUpdateWorkTaskProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId':
        this.cmdUpdateWorkTaskWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate':
        this.cmdUpdateWorkTaskProgressUpdate = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.action.cmdDeleteWorkTask.status':
        this.cmdDeleteWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId':
        this.cmdDeleteWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.workTaskCatalogue.output.cmdDeleteWorkTask':
        this.cmdDeleteWorkTaskOutput = (value as CmdDeleteWorkTaskOutput | null) ?? null;
        break;
      case 'ui.workTaskCatalogue.action.cmdDeleteWorkTask.error':
        this.cmdDeleteWorkTaskError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/workTaskCatalogue(?:\/([^/]+))?\/?$/,
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
        setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId', projectProjectId);
      }
      if (!this.cmdUpdateWorkTaskProjectProjectId) {
        this.cmdUpdateWorkTaskProjectProjectId = projectProjectId;
        setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId', projectProjectId);
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

  /** action qryListWorkTask (query) — route buildFlowFsm.workTaskCatalogue.qryListWorkTask; inputs: (none); writes ui.workTaskCatalogue.data.qryListWorkTask; status ui.workTaskCatalogue.action.qryListWorkTask.status */
  async loadQryListWorkTask(): Promise<void> {
    this.syncRouteParams();
    this.qryListWorkTaskState = 'loading';
    setState('ui.workTaskCatalogue.action.qryListWorkTask.status', 'loading');
    const params: QryListWorkTaskInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListWorkTaskOutput[]>(qryListWorkTaskRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListWorkTaskData = data;
      setState('ui.workTaskCatalogue.data.qryListWorkTask', data);
      this.qryListWorkTaskState = 'success';
      setState('ui.workTaskCatalogue.action.qryListWorkTask.status', 'success');
    } else {
      this.qryListWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.qryListWorkTask.status', 'error');
      if (response.error) {
        console.error('qryListWorkTask failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListWorkTask — bind UI events here */
  handleQryListWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListWorkTask();
  }

  /** action cmdCreateWorkTask (command) — route buildFlowFsm.workTaskCatalogue.cmdCreateWorkTask; inputs: projectProjectId, description, dueDate, progressUpdate; writes ui.workTaskCatalogue.output.cmdCreateWorkTask; status ui.workTaskCatalogue.action.cmdCreateWorkTask.status; feedback keys action.cmdCreateWorkTask.success / action.cmdCreateWorkTask.error */
  async cmdCreateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateWorkTaskProjectProjectId) {
      this.cmdCreateWorkTaskState = 'idle';
      setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateWorkTaskState = 'loading';
    setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'loading');
    this.cmdCreateWorkTaskError = '';
    setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.error', '');
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
      setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.error', errMsg);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateWorkTaskOutput | null = response.data ?? null;
    this.cmdCreateWorkTaskOutput = data;
    setState('ui.workTaskCatalogue.output.cmdCreateWorkTask', data);
    try {
      await this.loadQryListWorkTask();
      if (this.qryListWorkTaskState === 'error') {
        this.cmdCreateWorkTaskState = 'error';
        setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateWorkTask refresh failed', refreshError);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateWorkTaskDescription = '';
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.description', '');
    this.cmdCreateWorkTaskDueDate = '';
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate', '');
    this.cmdCreateWorkTaskProgressUpdate = '';
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate', '');
    this.cmdCreateWorkTaskState = 'success';
    setState('ui.workTaskCatalogue.action.cmdCreateWorkTask.status', 'success');
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

  /** action cmdUpdateWorkTask (command) — route buildFlowFsm.workTaskCatalogue.cmdUpdateWorkTask; inputs: projectProjectId, workTaskWorkTaskId, description, dueDate, progressUpdate; writes ui.workTaskCatalogue.output.cmdUpdateWorkTask; status ui.workTaskCatalogue.action.cmdUpdateWorkTask.status; feedback keys action.cmdUpdateWorkTask.success / action.cmdUpdateWorkTask.error */
  async cmdUpdateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateWorkTaskProjectProjectId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateWorkTaskWorkTaskWorkTaskId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskState = 'loading';
    setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'loading');
    this.cmdUpdateWorkTaskError = '';
    setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.error', '');
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
      setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.error', errMsg);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateWorkTaskOutput | null = response.data ?? null;
    this.cmdUpdateWorkTaskOutput = data;
    setState('ui.workTaskCatalogue.output.cmdUpdateWorkTask', data);
    try {
      await this.loadQryListWorkTask();
      if (this.qryListWorkTaskState === 'error') {
        this.cmdUpdateWorkTaskState = 'error';
        setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateWorkTask refresh failed', refreshError);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskWorkTaskWorkTaskId = '';
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId', '');
    this.cmdUpdateWorkTaskDescription = '';
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.description', '');
    this.cmdUpdateWorkTaskDueDate = '';
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate', '');
    this.cmdUpdateWorkTaskProgressUpdate = '';
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate', '');
    this.cmdUpdateWorkTaskState = 'success';
    setState('ui.workTaskCatalogue.action.cmdUpdateWorkTask.status', 'success');
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

  /** action cmdDeleteWorkTask (command) — route buildFlowFsm.workTaskCatalogue.cmdDeleteWorkTask; inputs: workTaskId; writes ui.workTaskCatalogue.output.cmdDeleteWorkTask; status ui.workTaskCatalogue.action.cmdDeleteWorkTask.status; feedback keys action.cmdDeleteWorkTask.success / action.cmdDeleteWorkTask.error */
  async cmdDeleteWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdDeleteWorkTaskWorkTaskId) {
      this.cmdDeleteWorkTaskState = 'idle';
      setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteWorkTaskState = 'loading';
    setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'loading');
    this.cmdDeleteWorkTaskError = '';
    setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.error', '');
    const params: CmdDeleteWorkTaskInput = {
      workTaskId: this.cmdDeleteWorkTaskWorkTaskId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteWorkTaskOutput>(cmdDeleteWorkTaskRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteWorkTask.error');
      this.cmdDeleteWorkTaskError = errMsg;
      setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.error', errMsg);
      this.cmdDeleteWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteWorkTaskOutput | null = response.data ?? null;
    this.cmdDeleteWorkTaskOutput = data;
    setState('ui.workTaskCatalogue.output.cmdDeleteWorkTask', data);
    try {
      await this.loadQryListWorkTask();
      if (this.qryListWorkTaskState === 'error') {
        this.cmdDeleteWorkTaskState = 'error';
        setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteWorkTask refresh failed', refreshError);
      this.cmdDeleteWorkTaskState = 'error';
      setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteWorkTaskWorkTaskId = '';
    setState('ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId', '');
    this.cmdDeleteWorkTaskState = 'success';
    setState('ui.workTaskCatalogue.action.cmdDeleteWorkTask.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteWorkTask — bind UI events here */
  handleCmdDeleteWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteWorkTask();
    });
  }

  /** setter for state ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId */
  setCmdCreateWorkTaskProjectProjectId(value: string): void {
    this.cmdCreateWorkTaskProjectProjectId = value;
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProjectProjectId — bind UI events here */
  handleCmdCreateWorkTaskProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskProjectProjectId(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdCreateWorkTask.description */
  setCmdCreateWorkTaskDescription(value: string): void {
    this.cmdCreateWorkTaskDescription = value;
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDescription — bind UI events here */
  handleCmdCreateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDescription(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate */
  setCmdCreateWorkTaskDueDate(value: string): void {
    this.cmdCreateWorkTaskDueDate = value;
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDueDate — bind UI events here */
  handleCmdCreateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDueDate(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate */
  setCmdCreateWorkTaskProgressUpdate(value: string): void {
    this.cmdCreateWorkTaskProgressUpdate = value;
    setState('ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProgressUpdate — bind UI events here */
  handleCmdCreateWorkTaskProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskProgressUpdate(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId */
  setCmdUpdateWorkTaskProjectProjectId(value: string): void {
    this.cmdUpdateWorkTaskProjectProjectId = value;
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskProjectProjectId — bind UI events here */
  handleCmdUpdateWorkTaskProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskProjectProjectId(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId */
  setCmdUpdateWorkTaskWorkTaskWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskWorkTaskWorkTaskId = value;
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskWorkTaskWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdUpdateWorkTask.description */
  setCmdUpdateWorkTaskDescription(value: string): void {
    this.cmdUpdateWorkTaskDescription = value;
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDescription — bind UI events here */
  handleCmdUpdateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDescription(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate */
  setCmdUpdateWorkTaskDueDate(value: string): void {
    this.cmdUpdateWorkTaskDueDate = value;
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDueDate — bind UI events here */
  handleCmdUpdateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDueDate(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate */
  setCmdUpdateWorkTaskProgressUpdate(value: string): void {
    this.cmdUpdateWorkTaskProgressUpdate = value;
    setState('ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskProgressUpdate — bind UI events here */
  handleCmdUpdateWorkTaskProgressUpdateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskProgressUpdate(value);
  }

  /** setter for state ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId */
  setCmdDeleteWorkTaskWorkTaskId(value: string): void {
    this.cmdDeleteWorkTaskWorkTaskId = value;
    setState('ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteWorkTaskWorkTaskId — bind UI events here */
  handleCmdDeleteWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteWorkTaskWorkTaskId(value);
  }
}
