/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateFieldWorkerInput,
  QryLocateFieldWorkerOutput,
  QryLocateWorkTaskInput,
  QryLocateWorkTaskOutput,
  CmdCreateTimeLogInput,
  CmdCreateTimeLogOutput,
  CmdHandoffTimeLogToFieldCoordinatorInput,
  CmdHandoffTimeLogToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.js';
import {
  qryLocateFieldWorkerRoute,
  qryLocateWorkTaskRoute,
  cmdCreateTimeLogRoute,
  cmdHandoffTimeLogToFieldCoordinatorRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.js';

export type {
  QryLocateFieldWorkerInput,
  QryLocateFieldWorkerOutput,
  QryLocateWorkTaskInput,
  QryLocateWorkTaskOutput,
  CmdCreateTimeLogInput,
  CmdCreateTimeLogOutput,
  CmdHandoffTimeLogToFieldCoordinatorInput,
  CmdHandoffTimeLogToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordWorkTime.js';

/// **collab_i18n_start**
const message_pt = {
  'section.recordWorkTime.locateFieldWorker.title': 'Confirmar trabalhador',
  'organism.recordWorkTime.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.recordWorkTime.locateWorkTask.title': 'Localizar tarefa',
  'organism.recordWorkTime.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.recordWorkTime.createTimeLog.title': 'Registrar horas',
  'organism.recordWorkTime.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'section.recordWorkTime.handoffTimeLogToFieldCoordinator.title': 'Encaminhar registro',
  'organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdHandoffTimeLogToFieldCoordinator.success': 'Encaminhar o registro diário: OK',
  'action.cmdHandoffTimeLogToFieldCoordinator.error': 'Encaminhar o registro diário: falhou',
  'section.recordWorkTime.workLogWorkspace.title': 'Registrar e encaminhar horas',
  'section.recordWorkTime.workContext.title': 'Contexto do registro',
  'section.recordWorkTime.timeLogWorkspace.title': 'Registro e acompanhamento',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.recordWorkTime.locateFieldWorker.title': 'Confirmar trabalhador',
  'organism.recordWorkTime.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.recordWorkTime.locateWorkTask.title': 'Localizar tarefa',
  'organism.recordWorkTime.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.recordWorkTime.createTimeLog.title': 'Registrar horas',
  'organism.recordWorkTime.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'section.recordWorkTime.handoffTimeLogToFieldCoordinator.title': 'Encaminhar registro',
  'organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdHandoffTimeLogToFieldCoordinator.success': 'Encaminhar o registro diário: OK',
  'action.cmdHandoffTimeLogToFieldCoordinator.error': 'Encaminhar o registro diário: falhou',
  'section.recordWorkTime.workLogWorkspace.title': 'Registrar e encaminhar horas',
  'section.recordWorkTime.workContext.title': 'Contexto do registro',
  'section.recordWorkTime.timeLogWorkspace.title': 'Registro e acompanhamento',
};
const message_en: MessageType = {
  'section.recordWorkTime.locateFieldWorker.title': 'Confirmar trabalhador',
  'organism.recordWorkTime.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.recordWorkTime.locateWorkTask.title': 'Localizar tarefa',
  'organism.recordWorkTime.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.recordWorkTime.createTimeLog.title': 'Registrar horas',
  'organism.recordWorkTime.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'section.recordWorkTime.handoffTimeLogToFieldCoordinator.title': 'Encaminhar registro',
  'organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdHandoffTimeLogToFieldCoordinator.success': 'Encaminhar o registro diário: OK',
  'action.cmdHandoffTimeLogToFieldCoordinator.error': 'Encaminhar o registro diário: falhou',
  'section.recordWorkTime.workLogWorkspace.title': 'Registrar e encaminhar horas',
  'section.recordWorkTime.workContext.title': 'Contexto do registro',
  'section.recordWorkTime.timeLogWorkspace.title': 'Registro e acompanhamento',
};
const message_es: MessageType = {
  'section.recordWorkTime.locateFieldWorker.title': 'Confirmar trabalhador',
  'organism.recordWorkTime.qryLocateFieldWorker.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.title': 'Selecionar o trabalhador responsável',
  'intent.recordWorkTime.qryLocateFieldWorker.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label': 'Platform User Id',
  'section.recordWorkTime.locateWorkTask.title': 'Localizar tarefa',
  'organism.recordWorkTime.qryLocateWorkTask.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.title': 'Localizar a tarefa atribuída',
  'intent.recordWorkTime.qryLocateWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label': 'Project Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.description.label': 'Description',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.status.label': 'Status',
  'intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.recordWorkTime.createTimeLog.title': 'Registrar horas',
  'organism.recordWorkTime.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'section.recordWorkTime.handoffTimeLogToFieldCoordinator.title': 'Encaminhar registro',
  'organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator': 'Encaminhar o registro diário',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label': 'Work Date',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label': 'Hours Worked',
  'intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdHandoffTimeLogToFieldCoordinator.success': 'Encaminhar o registro diário: OK',
  'action.cmdHandoffTimeLogToFieldCoordinator.error': 'Encaminhar o registro diário: falhou',
  'section.recordWorkTime.workLogWorkspace.title': 'Registrar e encaminhar horas',
  'section.recordWorkTime.workContext.title': 'Contexto do registro',
  'section.recordWorkTime.timeLogWorkspace.title': 'Registro e acompanhamento',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.recordWorkTime.status',
  'ui.recordWorkTime.action.qryLocateFieldWorker.status',
  'ui.recordWorkTime.data.qryLocateFieldWorker',
  'ui.recordWorkTime.action.qryLocateWorkTask.status',
  'ui.recordWorkTime.data.qryLocateWorkTask',
  'ui.recordWorkTime.action.cmdCreateTimeLog.status',
  'ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId',
  'ui.recordWorkTime.input.cmdCreateTimeLog.workDate',
  'ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked',
  'ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost',
  'ui.recordWorkTime.output.cmdCreateTimeLog',
  'ui.recordWorkTime.action.cmdCreateTimeLog.error',
  'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status',
  'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId',
  'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate',
  'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked',
  'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost',
  'ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator',
  'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error',
];

export class BuildFlowFsmRecordWorkTimeBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateFieldWorkerState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateFieldWorkerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateFieldWorkerData — queryResult, outputShape: array */
  @property() qryLocateFieldWorkerData: QryLocateFieldWorkerOutput[] = [];
  /** state qryLocateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateWorkTaskData — queryResult, outputShape: array */
  @property() qryLocateWorkTaskData: QryLocateWorkTaskOutput[] = [];
  /** state cmdCreateTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateTimeLogWorkTaskWorkTaskId — input */
  @property() cmdCreateTimeLogWorkTaskWorkTaskId: string = '';
  /** state cmdCreateTimeLogWorkDate — input */
  @property() cmdCreateTimeLogWorkDate: string = '';
  /** state cmdCreateTimeLogHoursWorked — input */
  @property() cmdCreateTimeLogHoursWorked: string = '';
  /** state cmdCreateTimeLogHourlyLaborCost — input */
  @property() cmdCreateTimeLogHourlyLaborCost: string = '';
  /** state cmdCreateTimeLogOutput — commandOutput */
  @property() cmdCreateTimeLogOutput: CmdCreateTimeLogOutput | null = null;
  /** state cmdCreateTimeLogError — actionError */
  @property() cmdCreateTimeLogError: string = '';
  /** state cmdHandoffTimeLogToFieldCoordinatorState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffTimeLogToFieldCoordinatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId — input */
  @property() cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId: string = '';
  /** state cmdHandoffTimeLogToFieldCoordinatorWorkDate — input */
  @property() cmdHandoffTimeLogToFieldCoordinatorWorkDate: string = '';
  /** state cmdHandoffTimeLogToFieldCoordinatorHoursWorked — input */
  @property() cmdHandoffTimeLogToFieldCoordinatorHoursWorked: string = '';
  /** state cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost — input */
  @property() cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost: string = '';
  /** state cmdHandoffTimeLogToFieldCoordinatorOutput — commandOutput */
  @property() cmdHandoffTimeLogToFieldCoordinatorOutput: CmdHandoffTimeLogToFieldCoordinatorOutput | null = null;
  /** state cmdHandoffTimeLogToFieldCoordinatorError — actionError */
  @property() cmdHandoffTimeLogToFieldCoordinatorError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.recordWorkTime.status', '');
    this.initStateValue('ui.recordWorkTime.action.qryLocateFieldWorker.status', 'idle');
    this.initStateValue('ui.recordWorkTime.data.qryLocateFieldWorker', []);
    this.initStateValue('ui.recordWorkTime.action.qryLocateWorkTask.status', 'idle');
    this.initStateValue('ui.recordWorkTime.data.qryLocateWorkTask', []);
    this.initStateValue('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'idle');
    this.initStateValue('ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId', '');
    this.initStateValue('ui.recordWorkTime.input.cmdCreateTimeLog.workDate', '');
    this.initStateValue('ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked', '');
    this.initStateValue('ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost', '');
    this.initStateValue('ui.recordWorkTime.output.cmdCreateTimeLog', null);
    this.initStateValue('ui.recordWorkTime.action.cmdCreateTimeLog.error', '');
    this.initStateValue('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'idle');
    this.initStateValue('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId', '');
    this.initStateValue('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate', '');
    this.initStateValue('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked', '');
    this.initStateValue('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost', '');
    this.initStateValue('ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator', null);
    this.initStateValue('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateFieldWorker();
    void this.loadQryLocateWorkTask();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.recordWorkTime.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.action.qryLocateFieldWorker.status':
        this.qryLocateFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.data.qryLocateFieldWorker':
        this.qryLocateFieldWorkerData = (value as QryLocateFieldWorkerOutput[]) ?? [];
        break;
      case 'ui.recordWorkTime.action.qryLocateWorkTask.status':
        this.qryLocateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.data.qryLocateWorkTask':
        this.qryLocateWorkTaskData = (value as QryLocateWorkTaskOutput[]) ?? [];
        break;
      case 'ui.recordWorkTime.action.cmdCreateTimeLog.status':
        this.cmdCreateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId':
        this.cmdCreateTimeLogWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.workDate':
        this.cmdCreateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked':
        this.cmdCreateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost':
        this.cmdCreateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.output.cmdCreateTimeLog':
        this.cmdCreateTimeLogOutput = (value as CmdCreateTimeLogOutput | null) ?? null;
        break;
      case 'ui.recordWorkTime.action.cmdCreateTimeLog.error':
        this.cmdCreateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status':
        this.cmdHandoffTimeLogToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId':
        this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate':
        this.cmdHandoffTimeLogToFieldCoordinatorWorkDate = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked':
        this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost':
        this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator':
        this.cmdHandoffTimeLogToFieldCoordinatorOutput = (value as CmdHandoffTimeLogToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error':
        this.cmdHandoffTimeLogToFieldCoordinatorError = (value as string) ?? '';
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
      case 'ui.recordWorkTime.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.action.qryLocateFieldWorker.status':
        this.qryLocateFieldWorkerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.data.qryLocateFieldWorker':
        this.qryLocateFieldWorkerData = (value as QryLocateFieldWorkerOutput[]) ?? [];
        break;
      case 'ui.recordWorkTime.action.qryLocateWorkTask.status':
        this.qryLocateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.data.qryLocateWorkTask':
        this.qryLocateWorkTaskData = (value as QryLocateWorkTaskOutput[]) ?? [];
        break;
      case 'ui.recordWorkTime.action.cmdCreateTimeLog.status':
        this.cmdCreateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId':
        this.cmdCreateTimeLogWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.workDate':
        this.cmdCreateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked':
        this.cmdCreateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost':
        this.cmdCreateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.output.cmdCreateTimeLog':
        this.cmdCreateTimeLogOutput = (value as CmdCreateTimeLogOutput | null) ?? null;
        break;
      case 'ui.recordWorkTime.action.cmdCreateTimeLog.error':
        this.cmdCreateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status':
        this.cmdHandoffTimeLogToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId':
        this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate':
        this.cmdHandoffTimeLogToFieldCoordinatorWorkDate = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked':
        this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost':
        this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator':
        this.cmdHandoffTimeLogToFieldCoordinatorOutput = (value as CmdHandoffTimeLogToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error':
        this.cmdHandoffTimeLogToFieldCoordinatorError = (value as string) ?? '';
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
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

  /** action qryLocateFieldWorker (query) — route buildFlowFsm.recordWorkTime.qryLocateFieldWorker; inputs: (none); writes ui.recordWorkTime.data.qryLocateFieldWorker; status ui.recordWorkTime.action.qryLocateFieldWorker.status */
  async loadQryLocateFieldWorker(): Promise<void> {
    this.qryLocateFieldWorkerState = 'loading';
    setState('ui.recordWorkTime.action.qryLocateFieldWorker.status', 'loading');
    const params: QryLocateFieldWorkerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateFieldWorkerOutput[]>(qryLocateFieldWorkerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateFieldWorkerData = data;
      setState('ui.recordWorkTime.data.qryLocateFieldWorker', data);
      this.qryLocateFieldWorkerState = 'success';
      setState('ui.recordWorkTime.action.qryLocateFieldWorker.status', 'success');
    } else {
      this.qryLocateFieldWorkerState = 'error';
      setState('ui.recordWorkTime.action.qryLocateFieldWorker.status', 'error');
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

  /** action qryLocateWorkTask (query) — route buildFlowFsm.recordWorkTime.qryLocateWorkTask; inputs: (none); writes ui.recordWorkTime.data.qryLocateWorkTask; status ui.recordWorkTime.action.qryLocateWorkTask.status */
  async loadQryLocateWorkTask(): Promise<void> {
    this.qryLocateWorkTaskState = 'loading';
    setState('ui.recordWorkTime.action.qryLocateWorkTask.status', 'loading');
    const params: QryLocateWorkTaskInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateWorkTaskOutput[]>(qryLocateWorkTaskRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateWorkTaskData = data;
      setState('ui.recordWorkTime.data.qryLocateWorkTask', data);
      this.qryLocateWorkTaskState = 'success';
      setState('ui.recordWorkTime.action.qryLocateWorkTask.status', 'success');
    } else {
      this.qryLocateWorkTaskState = 'error';
      setState('ui.recordWorkTime.action.qryLocateWorkTask.status', 'error');
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

  /** action cmdCreateTimeLog (command) — route buildFlowFsm.recordWorkTime.cmdCreateTimeLog; inputs: workTaskWorkTaskId, workDate, hoursWorked, hourlyLaborCost; writes ui.recordWorkTime.output.cmdCreateTimeLog; status ui.recordWorkTime.action.cmdCreateTimeLog.status; feedback keys action.cmdCreateTimeLog.success / action.cmdCreateTimeLog.error */
  async cmdCreateTimeLog(): Promise<void> {
    if (!this.cmdCreateTimeLogWorkTaskWorkTaskId) {
      this.cmdCreateTimeLogState = 'idle';
      setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateTimeLogState = 'loading';
    setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'loading');
    this.cmdCreateTimeLogError = '';
    setState('ui.recordWorkTime.action.cmdCreateTimeLog.error', '');
    const hoursWorkedNum = Number(this.cmdCreateTimeLogHoursWorked);
    const hourlyLaborCostNum = Number(this.cmdCreateTimeLogHourlyLaborCost);
    const params: CmdCreateTimeLogInput = {
      workTaskWorkTaskId: this.cmdCreateTimeLogWorkTaskWorkTaskId,
      workDate: this.cmdCreateTimeLogWorkDate,
      hoursWorked: Number.isNaN(hoursWorkedNum) ? 0 : hoursWorkedNum,
      hourlyLaborCost: Number.isNaN(hourlyLaborCostNum) ? 0 : hourlyLaborCostNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateTimeLogOutput>(cmdCreateTimeLogRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateTimeLog.error');
      this.cmdCreateTimeLogError = errMsg;
      setState('ui.recordWorkTime.action.cmdCreateTimeLog.error', errMsg);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateTimeLogOutput | null = response.data ?? null;
    this.cmdCreateTimeLogOutput = data;
    setState('ui.recordWorkTime.output.cmdCreateTimeLog', data);
    try {
      await this.loadQryLocateFieldWorker();
      if (this.qryLocateFieldWorkerState === 'error') {
        this.cmdCreateTimeLogState = 'error';
        setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateTimeLog refresh failed', refreshError);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateWorkTask();
      if (this.qryLocateWorkTaskState === 'error') {
        this.cmdCreateTimeLogState = 'error';
        setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateTimeLog refresh failed', refreshError);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateTimeLogWorkTaskWorkTaskId = '';
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId', '');
    this.cmdCreateTimeLogWorkDate = '';
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.workDate', '');
    this.cmdCreateTimeLogHoursWorked = '';
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked', '');
    this.cmdCreateTimeLogHourlyLaborCost = '';
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost', '');
    this.cmdCreateTimeLogState = 'success';
    setState('ui.recordWorkTime.action.cmdCreateTimeLog.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateTimeLog — bind UI events here */
  handleCmdCreateTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateTimeLog();
    });
  }

  /** action cmdHandoffTimeLogToFieldCoordinator (command) — route buildFlowFsm.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator; inputs: timeLogTimeLogId, workDate, hoursWorked, hourlyLaborCost; writes ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator; status ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status; feedback keys action.cmdHandoffTimeLogToFieldCoordinator.success / action.cmdHandoffTimeLogToFieldCoordinator.error */
  async cmdHandoffTimeLogToFieldCoordinator(): Promise<void> {
    if (!this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId) {
      this.cmdHandoffTimeLogToFieldCoordinatorState = 'idle';
      setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffTimeLogToFieldCoordinatorState = 'loading';
    setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'loading');
    this.cmdHandoffTimeLogToFieldCoordinatorError = '';
    setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error', '');
    const hoursWorkedNum = Number(this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked);
    const hourlyLaborCostNum = Number(this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost);
    const params: CmdHandoffTimeLogToFieldCoordinatorInput = {
      timeLogTimeLogId: this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId,
      workDate: this.cmdHandoffTimeLogToFieldCoordinatorWorkDate,
      hoursWorked: Number.isNaN(hoursWorkedNum) ? 0 : hoursWorkedNum,
      hourlyLaborCost: Number.isNaN(hourlyLaborCostNum) ? 0 : hourlyLaborCostNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffTimeLogToFieldCoordinatorOutput>(cmdHandoffTimeLogToFieldCoordinatorRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffTimeLogToFieldCoordinator.error');
      this.cmdHandoffTimeLogToFieldCoordinatorError = errMsg;
      setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.error', errMsg);
      this.cmdHandoffTimeLogToFieldCoordinatorState = 'error';
      setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffTimeLogToFieldCoordinatorOutput | null = response.data ?? null;
    this.cmdHandoffTimeLogToFieldCoordinatorOutput = data;
    setState('ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator', data);
    try {
      await this.loadQryLocateFieldWorker();
      if (this.qryLocateFieldWorkerState === 'error') {
        this.cmdHandoffTimeLogToFieldCoordinatorState = 'error';
        setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffTimeLogToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffTimeLogToFieldCoordinatorState = 'error';
      setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateWorkTask();
      if (this.qryLocateWorkTaskState === 'error') {
        this.cmdHandoffTimeLogToFieldCoordinatorState = 'error';
        setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffTimeLogToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffTimeLogToFieldCoordinatorState = 'error';
      setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = '';
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId', '');
    this.cmdHandoffTimeLogToFieldCoordinatorWorkDate = '';
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate', '');
    this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked = '';
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked', '');
    this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = '';
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost', '');
    this.cmdHandoffTimeLogToFieldCoordinatorState = 'success';
    setState('ui.recordWorkTime.action.cmdHandoffTimeLogToFieldCoordinator.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffTimeLogToFieldCoordinator — bind UI events here */
  handleCmdHandoffTimeLogToFieldCoordinatorClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffTimeLogToFieldCoordinator();
    });
  }

  /** setter for state ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId */
  setCmdCreateTimeLogWorkTaskWorkTaskId(value: string): void {
    this.cmdCreateTimeLogWorkTaskWorkTaskId = value;
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogWorkTaskWorkTaskId — bind UI events here */
  handleCmdCreateTimeLogWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdCreateTimeLog.workDate */
  setCmdCreateTimeLogWorkDate(value: string): void {
    this.cmdCreateTimeLogWorkDate = value;
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.workDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogWorkDate — bind UI events here */
  handleCmdCreateTimeLogWorkDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogWorkDate(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked */
  setCmdCreateTimeLogHoursWorked(value: string): void {
    this.cmdCreateTimeLogHoursWorked = value;
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogHoursWorked — bind UI events here */
  handleCmdCreateTimeLogHoursWorkedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogHoursWorked(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost */
  setCmdCreateTimeLogHourlyLaborCost(value: string): void {
    this.cmdCreateTimeLogHourlyLaborCost = value;
    setState('ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogHourlyLaborCost — bind UI events here */
  handleCmdCreateTimeLogHourlyLaborCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogHourlyLaborCost(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId */
  setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId(value: string): void {
    this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId = value;
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId — bind UI events here */
  handleCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate */
  setCmdHandoffTimeLogToFieldCoordinatorWorkDate(value: string): void {
    this.cmdHandoffTimeLogToFieldCoordinatorWorkDate = value;
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffTimeLogToFieldCoordinatorWorkDate — bind UI events here */
  handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffTimeLogToFieldCoordinatorWorkDate(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked */
  setCmdHandoffTimeLogToFieldCoordinatorHoursWorked(value: string): void {
    this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked = value;
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffTimeLogToFieldCoordinatorHoursWorked — bind UI events here */
  handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffTimeLogToFieldCoordinatorHoursWorked(value);
  }

  /** setter for state ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost */
  setCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost(value: string): void {
    this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost = value;
    setState('ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost — bind UI events here */
  handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost(value);
  }
}
