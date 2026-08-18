/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListTimeLogInput,
  QryListTimeLogOutput,
  CmdCreateTimeLogInput,
  CmdCreateTimeLogOutput,
  CmdUpdateTimeLogInput,
  CmdUpdateTimeLogOutput,
  CmdDeleteTimeLogInput,
  CmdDeleteTimeLogOutput,
  QryWorkTaskPickerInput,
  QryWorkTaskPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.js';
import {
  qryListTimeLogRoute,
  cmdCreateTimeLogRoute,
  cmdUpdateTimeLogRoute,
  cmdDeleteTimeLogRoute,
  qryWorkTaskPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.js';

export type {
  QryListTimeLogInput,
  QryListTimeLogOutput,
  CmdCreateTimeLogInput,
  CmdCreateTimeLogOutput,
  CmdUpdateTimeLogInput,
  CmdUpdateTimeLogOutput,
  CmdDeleteTimeLogInput,
  CmdDeleteTimeLogOutput,
  QryWorkTaskPickerInput,
  QryWorkTaskPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/timeLogCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.timeLogCatalogue.recordList.title': 'Localizar registros de horas',
  'organism.timeLogCatalogue.qryListTimeLog.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label': 'Time Log Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdDeleteTimeLog.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog': 'Excluir Registro de horas',
  'section.timeLogCatalogue.recordForm.title': 'Registrar ou corrigir horas',
  'organism.timeLogCatalogue.qryWorkTaskPicker.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label': 'Project Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label': 'Description',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label': 'Due Date',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label': 'Progress Update',
  'organism.timeLogCatalogue.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdUpdateTimeLog.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label': 'Status',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdUpdateTimeLog.success': 'Atualizar Registro de horas: OK',
  'action.cmdUpdateTimeLog.error': 'Atualizar Registro de horas: falhou',
  'action.cmdDeleteTimeLog.success': 'Excluir Registro de horas: OK',
  'action.cmdDeleteTimeLog.error': 'Excluir Registro de horas: falhou',
  'section.timeLogCatalogue.recordWorkspace.title': 'Registros e edição',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.timeLogCatalogue.recordList.title': 'Localizar registros de horas',
  'organism.timeLogCatalogue.qryListTimeLog.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label': 'Time Log Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdDeleteTimeLog.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog': 'Excluir Registro de horas',
  'section.timeLogCatalogue.recordForm.title': 'Registrar ou corrigir horas',
  'organism.timeLogCatalogue.qryWorkTaskPicker.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label': 'Project Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label': 'Description',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label': 'Due Date',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label': 'Progress Update',
  'organism.timeLogCatalogue.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdUpdateTimeLog.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label': 'Status',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdUpdateTimeLog.success': 'Atualizar Registro de horas: OK',
  'action.cmdUpdateTimeLog.error': 'Atualizar Registro de horas: falhou',
  'action.cmdDeleteTimeLog.success': 'Excluir Registro de horas: OK',
  'action.cmdDeleteTimeLog.error': 'Excluir Registro de horas: falhou',
  'section.timeLogCatalogue.recordWorkspace.title': 'Registros e edição',
};
const message_en: MessageType = {
  'section.timeLogCatalogue.recordList.title': 'Localizar registros de horas',
  'organism.timeLogCatalogue.qryListTimeLog.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label': 'Time Log Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdDeleteTimeLog.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog': 'Excluir Registro de horas',
  'section.timeLogCatalogue.recordForm.title': 'Registrar ou corrigir horas',
  'organism.timeLogCatalogue.qryWorkTaskPicker.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label': 'Project Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label': 'Description',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label': 'Due Date',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label': 'Progress Update',
  'organism.timeLogCatalogue.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdUpdateTimeLog.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label': 'Status',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdUpdateTimeLog.success': 'Atualizar Registro de horas: OK',
  'action.cmdUpdateTimeLog.error': 'Atualizar Registro de horas: falhou',
  'action.cmdDeleteTimeLog.success': 'Excluir Registro de horas: OK',
  'action.cmdDeleteTimeLog.error': 'Excluir Registro de horas: falhou',
  'section.timeLogCatalogue.recordWorkspace.title': 'Registros e edição',
};
const message_es: MessageType = {
  'section.timeLogCatalogue.recordList.title': 'Localizar registros de horas',
  'organism.timeLogCatalogue.qryListTimeLog.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.title': 'Listar Registro de horas',
  'intent.timeLogCatalogue.qryListTimeLog.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label': 'Time Log Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdDeleteTimeLog.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.title': 'Excluir Registro de horas',
  'intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog': 'Excluir Registro de horas',
  'section.timeLogCatalogue.recordForm.title': 'Registrar ou corrigir horas',
  'organism.timeLogCatalogue.qryWorkTaskPicker.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.title': 'Listar Tarefa de trabalho',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.empty': 'Nenhum registro encontrado',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label': 'Work Task Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label': 'Project Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label': 'Description',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label': 'Due Date',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label': 'Status',
  'intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label': 'Progress Update',
  'organism.timeLogCatalogue.cmdCreateTimeLog.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.title': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog': 'Registrar as horas trabalhadas',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.timeLogCatalogue.cmdUpdateTimeLog.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.title': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog': 'Atualizar Registro de horas',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label': 'Status',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label': 'Field Worker Id',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label': 'Work Date',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label': 'Hourly Labor Cost',
  'action.cmdCreateTimeLog.success': 'Registrar as horas trabalhadas: OK',
  'action.cmdCreateTimeLog.error': 'Registrar as horas trabalhadas: falhou',
  'action.cmdUpdateTimeLog.success': 'Atualizar Registro de horas: OK',
  'action.cmdUpdateTimeLog.error': 'Atualizar Registro de horas: falhou',
  'action.cmdDeleteTimeLog.success': 'Excluir Registro de horas: OK',
  'action.cmdDeleteTimeLog.error': 'Excluir Registro de horas: falhou',
  'section.timeLogCatalogue.recordWorkspace.title': 'Registros e edição',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.timeLogCatalogue.status',
  'ui.timeLogCatalogue.action.qryListTimeLog.status',
  'ui.timeLogCatalogue.data.qryListTimeLog',
  'ui.timeLogCatalogue.action.cmdCreateTimeLog.status',
  'ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId',
  'ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate',
  'ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked',
  'ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost',
  'ui.timeLogCatalogue.output.cmdCreateTimeLog',
  'ui.timeLogCatalogue.action.cmdCreateTimeLog.error',
  'ui.timeLogCatalogue.action.cmdUpdateTimeLog.status',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.status',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked',
  'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost',
  'ui.timeLogCatalogue.output.cmdUpdateTimeLog',
  'ui.timeLogCatalogue.action.cmdUpdateTimeLog.error',
  'ui.timeLogCatalogue.action.cmdDeleteTimeLog.status',
  'ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId',
  'ui.timeLogCatalogue.output.cmdDeleteTimeLog',
  'ui.timeLogCatalogue.action.cmdDeleteTimeLog.error',
  'ui.timeLogCatalogue.action.qryWorkTaskPicker.status',
  'ui.timeLogCatalogue.data.qryWorkTaskPicker',
];

export class BuildFlowFsmTimeLogCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() qryListTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListTimeLogData — queryResult, outputShape: array */
  @property() qryListTimeLogData: QryListTimeLogOutput[] = [];
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
  /** state cmdUpdateTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateTimeLogTimeLogId — input */
  @property() cmdUpdateTimeLogTimeLogId: string = '';
  /** state cmdUpdateTimeLogStatus — input */
  @property() cmdUpdateTimeLogStatus: string = '';
  /** state cmdUpdateTimeLogWorkTaskId — input */
  @property() cmdUpdateTimeLogWorkTaskId: string = '';
  /** state cmdUpdateTimeLogFieldWorkerId — input */
  @property() cmdUpdateTimeLogFieldWorkerId: string = '';
  /** state cmdUpdateTimeLogWorkDate — input */
  @property() cmdUpdateTimeLogWorkDate: string = '';
  /** state cmdUpdateTimeLogHoursWorked — input */
  @property() cmdUpdateTimeLogHoursWorked: string = '';
  /** state cmdUpdateTimeLogHourlyLaborCost — input */
  @property() cmdUpdateTimeLogHourlyLaborCost: string = '';
  /** state cmdUpdateTimeLogOutput — commandOutput */
  @property() cmdUpdateTimeLogOutput: CmdUpdateTimeLogOutput | null = null;
  /** state cmdUpdateTimeLogError — actionError */
  @property() cmdUpdateTimeLogError: string = '';
  /** state cmdDeleteTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteTimeLogTimeLogId — input */
  @property() cmdDeleteTimeLogTimeLogId: string = '';
  /** state cmdDeleteTimeLogOutput — commandOutput */
  @property() cmdDeleteTimeLogOutput: CmdDeleteTimeLogOutput | null = null;
  /** state cmdDeleteTimeLogError — actionError */
  @property() cmdDeleteTimeLogError: string = '';
  /** state qryWorkTaskPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryWorkTaskPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryWorkTaskPickerData — queryResult, outputShape: array */
  @property() qryWorkTaskPickerData: QryWorkTaskPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.timeLogCatalogue.status', '');
    this.initStateValue('ui.timeLogCatalogue.action.qryListTimeLog.status', 'idle');
    this.initStateValue('ui.timeLogCatalogue.data.qryListTimeLog', []);
    this.initStateValue('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'idle');
    this.initStateValue('ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost', '');
    this.initStateValue('ui.timeLogCatalogue.output.cmdCreateTimeLog', null);
    this.initStateValue('ui.timeLogCatalogue.action.cmdCreateTimeLog.error', '');
    this.initStateValue('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'idle');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.status', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked', '');
    this.initStateValue('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost', '');
    this.initStateValue('ui.timeLogCatalogue.output.cmdUpdateTimeLog', null);
    this.initStateValue('ui.timeLogCatalogue.action.cmdUpdateTimeLog.error', '');
    this.initStateValue('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'idle');
    this.initStateValue('ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId', '');
    this.initStateValue('ui.timeLogCatalogue.output.cmdDeleteTimeLog', null);
    this.initStateValue('ui.timeLogCatalogue.action.cmdDeleteTimeLog.error', '');
    this.initStateValue('ui.timeLogCatalogue.action.qryWorkTaskPicker.status', 'idle');
    this.initStateValue('ui.timeLogCatalogue.data.qryWorkTaskPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListTimeLog();
    void this.loadQryWorkTaskPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.timeLogCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.qryListTimeLog.status':
        this.qryListTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.data.qryListTimeLog':
        this.qryListTimeLogData = (value as QryListTimeLogOutput[]) ?? [];
        break;
      case 'ui.timeLogCatalogue.action.cmdCreateTimeLog.status':
        this.cmdCreateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId':
        this.cmdCreateTimeLogWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate':
        this.cmdCreateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked':
        this.cmdCreateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost':
        this.cmdCreateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdCreateTimeLog':
        this.cmdCreateTimeLogOutput = (value as CmdCreateTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdCreateTimeLog.error':
        this.cmdCreateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.cmdUpdateTimeLog.status':
        this.cmdUpdateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId':
        this.cmdUpdateTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.status':
        this.cmdUpdateTimeLogStatus = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId':
        this.cmdUpdateTimeLogWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId':
        this.cmdUpdateTimeLogFieldWorkerId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate':
        this.cmdUpdateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked':
        this.cmdUpdateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost':
        this.cmdUpdateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdUpdateTimeLog':
        this.cmdUpdateTimeLogOutput = (value as CmdUpdateTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdUpdateTimeLog.error':
        this.cmdUpdateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.cmdDeleteTimeLog.status':
        this.cmdDeleteTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId':
        this.cmdDeleteTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdDeleteTimeLog':
        this.cmdDeleteTimeLogOutput = (value as CmdDeleteTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdDeleteTimeLog.error':
        this.cmdDeleteTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.qryWorkTaskPicker.status':
        this.qryWorkTaskPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.data.qryWorkTaskPicker':
        this.qryWorkTaskPickerData = (value as QryWorkTaskPickerOutput[]) ?? [];
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
      case 'ui.timeLogCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.qryListTimeLog.status':
        this.qryListTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.data.qryListTimeLog':
        this.qryListTimeLogData = (value as QryListTimeLogOutput[]) ?? [];
        break;
      case 'ui.timeLogCatalogue.action.cmdCreateTimeLog.status':
        this.cmdCreateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId':
        this.cmdCreateTimeLogWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate':
        this.cmdCreateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked':
        this.cmdCreateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost':
        this.cmdCreateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdCreateTimeLog':
        this.cmdCreateTimeLogOutput = (value as CmdCreateTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdCreateTimeLog.error':
        this.cmdCreateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.cmdUpdateTimeLog.status':
        this.cmdUpdateTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId':
        this.cmdUpdateTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.status':
        this.cmdUpdateTimeLogStatus = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId':
        this.cmdUpdateTimeLogWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId':
        this.cmdUpdateTimeLogFieldWorkerId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate':
        this.cmdUpdateTimeLogWorkDate = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked':
        this.cmdUpdateTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost':
        this.cmdUpdateTimeLogHourlyLaborCost = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdUpdateTimeLog':
        this.cmdUpdateTimeLogOutput = (value as CmdUpdateTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdUpdateTimeLog.error':
        this.cmdUpdateTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.cmdDeleteTimeLog.status':
        this.cmdDeleteTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId':
        this.cmdDeleteTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.output.cmdDeleteTimeLog':
        this.cmdDeleteTimeLogOutput = (value as CmdDeleteTimeLogOutput | null) ?? null;
        break;
      case 'ui.timeLogCatalogue.action.cmdDeleteTimeLog.error':
        this.cmdDeleteTimeLogError = (value as string) ?? '';
        break;
      case 'ui.timeLogCatalogue.action.qryWorkTaskPicker.status':
        this.qryWorkTaskPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.timeLogCatalogue.data.qryWorkTaskPicker':
        this.qryWorkTaskPickerData = (value as QryWorkTaskPickerOutput[]) ?? [];
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

  /** action qryListTimeLog (query) — route buildFlowFsm.timeLogCatalogue.qryListTimeLog; inputs: (none); writes ui.timeLogCatalogue.data.qryListTimeLog; status ui.timeLogCatalogue.action.qryListTimeLog.status */
  async loadQryListTimeLog(): Promise<void> {
    this.qryListTimeLogState = 'loading';
    setState('ui.timeLogCatalogue.action.qryListTimeLog.status', 'loading');
    const params: QryListTimeLogInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListTimeLogOutput[]>(qryListTimeLogRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListTimeLogData = data;
      setState('ui.timeLogCatalogue.data.qryListTimeLog', data);
      this.qryListTimeLogState = 'success';
      setState('ui.timeLogCatalogue.action.qryListTimeLog.status', 'success');
    } else {
      this.qryListTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.qryListTimeLog.status', 'error');
      if (response.error) {
        console.error('qryListTimeLog failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListTimeLog — bind UI events here */
  handleQryListTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListTimeLog();
  }

  /** action cmdCreateTimeLog (command) — route buildFlowFsm.timeLogCatalogue.cmdCreateTimeLog; inputs: workTaskWorkTaskId, workDate, hoursWorked, hourlyLaborCost; writes ui.timeLogCatalogue.output.cmdCreateTimeLog; status ui.timeLogCatalogue.action.cmdCreateTimeLog.status; feedback keys action.cmdCreateTimeLog.success / action.cmdCreateTimeLog.error */
  async cmdCreateTimeLog(): Promise<void> {
    if (!this.cmdCreateTimeLogWorkTaskWorkTaskId) {
      this.cmdCreateTimeLogState = 'idle';
      setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateTimeLogState = 'loading';
    setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'loading');
    this.cmdCreateTimeLogError = '';
    setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.error', '');
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
      setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.error', errMsg);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateTimeLogOutput | null = response.data ?? null;
    this.cmdCreateTimeLogOutput = data;
    setState('ui.timeLogCatalogue.output.cmdCreateTimeLog', data);
    try {
      await this.loadQryListTimeLog();
      if (this.qryListTimeLogState === 'error') {
        this.cmdCreateTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateTimeLog refresh failed', refreshError);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryWorkTaskPicker();
      if (this.qryWorkTaskPickerState === 'error') {
        this.cmdCreateTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateTimeLog refresh failed', refreshError);
      this.cmdCreateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateTimeLogWorkTaskWorkTaskId = '';
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId', '');
    this.cmdCreateTimeLogWorkDate = '';
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate', '');
    this.cmdCreateTimeLogHoursWorked = '';
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked', '');
    this.cmdCreateTimeLogHourlyLaborCost = '';
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost', '');
    this.cmdCreateTimeLogState = 'success';
    setState('ui.timeLogCatalogue.action.cmdCreateTimeLog.status', 'success');
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

  /** action cmdUpdateTimeLog (command) — route buildFlowFsm.timeLogCatalogue.cmdUpdateTimeLog; inputs: timeLogId, status, workTaskId, fieldWorkerId, workDate, hoursWorked, hourlyLaborCost; writes ui.timeLogCatalogue.output.cmdUpdateTimeLog; status ui.timeLogCatalogue.action.cmdUpdateTimeLog.status; feedback keys action.cmdUpdateTimeLog.success / action.cmdUpdateTimeLog.error */
  async cmdUpdateTimeLog(): Promise<void> {
    if (!this.cmdUpdateTimeLogTimeLogId) {
      this.cmdUpdateTimeLogState = 'idle';
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateTimeLogWorkTaskId) {
      this.cmdUpdateTimeLogState = 'idle';
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateTimeLogState = 'loading';
    setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'loading');
    this.cmdUpdateTimeLogError = '';
    setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.error', '');
    const hoursWorkedNum = Number(this.cmdUpdateTimeLogHoursWorked);
    const hourlyLaborCostNum = Number(this.cmdUpdateTimeLogHourlyLaborCost);
    const params: CmdUpdateTimeLogInput = {
      timeLogId: this.cmdUpdateTimeLogTimeLogId,
      status: this.cmdUpdateTimeLogStatus,
      workTaskId: this.cmdUpdateTimeLogWorkTaskId,
      fieldWorkerId: this.cmdUpdateTimeLogFieldWorkerId,
      workDate: this.cmdUpdateTimeLogWorkDate,
      hoursWorked: Number.isNaN(hoursWorkedNum) ? 0 : hoursWorkedNum,
      hourlyLaborCost: Number.isNaN(hourlyLaborCostNum) ? 0 : hourlyLaborCostNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateTimeLogOutput>(cmdUpdateTimeLogRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateTimeLog.error');
      this.cmdUpdateTimeLogError = errMsg;
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.error', errMsg);
      this.cmdUpdateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateTimeLogOutput | null = response.data ?? null;
    this.cmdUpdateTimeLogOutput = data;
    setState('ui.timeLogCatalogue.output.cmdUpdateTimeLog', data);
    try {
      await this.loadQryListTimeLog();
      if (this.qryListTimeLogState === 'error') {
        this.cmdUpdateTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateTimeLog refresh failed', refreshError);
      this.cmdUpdateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryWorkTaskPicker();
      if (this.qryWorkTaskPickerState === 'error') {
        this.cmdUpdateTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateTimeLog refresh failed', refreshError);
      this.cmdUpdateTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateTimeLogTimeLogId = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId', '');
    this.cmdUpdateTimeLogStatus = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.status', '');
    this.cmdUpdateTimeLogWorkTaskId = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId', '');
    this.cmdUpdateTimeLogFieldWorkerId = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId', '');
    this.cmdUpdateTimeLogWorkDate = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate', '');
    this.cmdUpdateTimeLogHoursWorked = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked', '');
    this.cmdUpdateTimeLogHourlyLaborCost = '';
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost', '');
    this.cmdUpdateTimeLogState = 'success';
    setState('ui.timeLogCatalogue.action.cmdUpdateTimeLog.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateTimeLog — bind UI events here */
  handleCmdUpdateTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateTimeLog();
    });
  }

  /** action cmdDeleteTimeLog (command) — route buildFlowFsm.timeLogCatalogue.cmdDeleteTimeLog; inputs: timeLogId; writes ui.timeLogCatalogue.output.cmdDeleteTimeLog; status ui.timeLogCatalogue.action.cmdDeleteTimeLog.status; feedback keys action.cmdDeleteTimeLog.success / action.cmdDeleteTimeLog.error */
  async cmdDeleteTimeLog(): Promise<void> {
    if (!this.cmdDeleteTimeLogTimeLogId) {
      this.cmdDeleteTimeLogState = 'idle';
      setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteTimeLogState = 'loading';
    setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'loading');
    this.cmdDeleteTimeLogError = '';
    setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.error', '');
    const params: CmdDeleteTimeLogInput = {
      timeLogId: this.cmdDeleteTimeLogTimeLogId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteTimeLogOutput>(cmdDeleteTimeLogRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteTimeLog.error');
      this.cmdDeleteTimeLogError = errMsg;
      setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.error', errMsg);
      this.cmdDeleteTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteTimeLogOutput | null = response.data ?? null;
    this.cmdDeleteTimeLogOutput = data;
    setState('ui.timeLogCatalogue.output.cmdDeleteTimeLog', data);
    try {
      await this.loadQryListTimeLog();
      if (this.qryListTimeLogState === 'error') {
        this.cmdDeleteTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteTimeLog refresh failed', refreshError);
      this.cmdDeleteTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryWorkTaskPicker();
      if (this.qryWorkTaskPickerState === 'error') {
        this.cmdDeleteTimeLogState = 'error';
        setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteTimeLog refresh failed', refreshError);
      this.cmdDeleteTimeLogState = 'error';
      setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteTimeLogTimeLogId = '';
    setState('ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId', '');
    this.cmdDeleteTimeLogState = 'success';
    setState('ui.timeLogCatalogue.action.cmdDeleteTimeLog.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteTimeLog — bind UI events here */
  handleCmdDeleteTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteTimeLog();
    });
  }

  /** action qryWorkTaskPicker (query) — route buildFlowFsm.timeLogCatalogue.qryWorkTaskPicker; inputs: (none); writes ui.timeLogCatalogue.data.qryWorkTaskPicker; status ui.timeLogCatalogue.action.qryWorkTaskPicker.status */
  async loadQryWorkTaskPicker(): Promise<void> {
    this.qryWorkTaskPickerState = 'loading';
    setState('ui.timeLogCatalogue.action.qryWorkTaskPicker.status', 'loading');
    const params: QryWorkTaskPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryWorkTaskPickerOutput[]>(qryWorkTaskPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryWorkTaskPickerData = data;
      setState('ui.timeLogCatalogue.data.qryWorkTaskPicker', data);
      this.qryWorkTaskPickerState = 'success';
      setState('ui.timeLogCatalogue.action.qryWorkTaskPicker.status', 'success');
    } else {
      this.qryWorkTaskPickerState = 'error';
      setState('ui.timeLogCatalogue.action.qryWorkTaskPicker.status', 'error');
      if (response.error) {
        console.error('qryWorkTaskPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryWorkTaskPicker — bind UI events here */
  handleQryWorkTaskPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryWorkTaskPicker();
  }

  /** setter for state ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId */
  setCmdCreateTimeLogWorkTaskWorkTaskId(value: string): void {
    this.cmdCreateTimeLogWorkTaskWorkTaskId = value;
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogWorkTaskWorkTaskId — bind UI events here */
  handleCmdCreateTimeLogWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate */
  setCmdCreateTimeLogWorkDate(value: string): void {
    this.cmdCreateTimeLogWorkDate = value;
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogWorkDate — bind UI events here */
  handleCmdCreateTimeLogWorkDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogWorkDate(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked */
  setCmdCreateTimeLogHoursWorked(value: string): void {
    this.cmdCreateTimeLogHoursWorked = value;
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogHoursWorked — bind UI events here */
  handleCmdCreateTimeLogHoursWorkedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogHoursWorked(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost */
  setCmdCreateTimeLogHourlyLaborCost(value: string): void {
    this.cmdCreateTimeLogHourlyLaborCost = value;
    setState('ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateTimeLogHourlyLaborCost — bind UI events here */
  handleCmdCreateTimeLogHourlyLaborCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateTimeLogHourlyLaborCost(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId */
  setCmdUpdateTimeLogTimeLogId(value: string): void {
    this.cmdUpdateTimeLogTimeLogId = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId', value);
    const collection =
      (getState('ui.timeLogCatalogue.data.qryListTimeLog') as QryListTimeLogOutput[] | null | undefined) ?? this.qryListTimeLogData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListTimeLogOutput) => String(row.timeLogId) === String(value),
      );
      if (item) {
        this.cmdUpdateTimeLogStatus = item.status;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.status', item.status);
        this.cmdUpdateTimeLogFieldWorkerId = item.fieldWorkerId;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId', item.fieldWorkerId);
        this.cmdUpdateTimeLogWorkDate = item.workDate;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate', item.workDate);
        this.cmdUpdateTimeLogHoursWorked = String(item.hoursWorked);
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked', String(item.hoursWorked));
        this.cmdUpdateTimeLogHourlyLaborCost = String(item.hourlyLaborCost);
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost', String(item.hourlyLaborCost));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogTimeLogId — bind UI events here */
  handleCmdUpdateTimeLogTimeLogIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogTimeLogId(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.status */
  setCmdUpdateTimeLogStatus(value: string): void {
    this.cmdUpdateTimeLogStatus = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogStatus — bind UI events here */
  handleCmdUpdateTimeLogStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogStatus(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId */
  setCmdUpdateTimeLogWorkTaskId(value: string): void {
    this.cmdUpdateTimeLogWorkTaskId = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId', value);
    const collection =
      (getState('ui.timeLogCatalogue.data.qryListTimeLog') as QryListTimeLogOutput[] | null | undefined) ?? this.qryListTimeLogData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListTimeLogOutput) => String(row.workTaskId) === String(value),
      );
      if (item) {
        this.cmdUpdateTimeLogStatus = item.status;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.status', item.status);
        this.cmdUpdateTimeLogFieldWorkerId = item.fieldWorkerId;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId', item.fieldWorkerId);
        this.cmdUpdateTimeLogWorkDate = item.workDate;
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate', item.workDate);
        this.cmdUpdateTimeLogHoursWorked = String(item.hoursWorked);
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked', String(item.hoursWorked));
        this.cmdUpdateTimeLogHourlyLaborCost = String(item.hourlyLaborCost);
        setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost', String(item.hourlyLaborCost));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogWorkTaskId — bind UI events here */
  handleCmdUpdateTimeLogWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogWorkTaskId(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId */
  setCmdUpdateTimeLogFieldWorkerId(value: string): void {
    this.cmdUpdateTimeLogFieldWorkerId = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogFieldWorkerId — bind UI events here */
  handleCmdUpdateTimeLogFieldWorkerIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogFieldWorkerId(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate */
  setCmdUpdateTimeLogWorkDate(value: string): void {
    this.cmdUpdateTimeLogWorkDate = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogWorkDate — bind UI events here */
  handleCmdUpdateTimeLogWorkDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogWorkDate(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked */
  setCmdUpdateTimeLogHoursWorked(value: string): void {
    this.cmdUpdateTimeLogHoursWorked = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogHoursWorked — bind UI events here */
  handleCmdUpdateTimeLogHoursWorkedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogHoursWorked(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost */
  setCmdUpdateTimeLogHourlyLaborCost(value: string): void {
    this.cmdUpdateTimeLogHourlyLaborCost = value;
    setState('ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateTimeLogHourlyLaborCost — bind UI events here */
  handleCmdUpdateTimeLogHourlyLaborCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateTimeLogHourlyLaborCost(value);
  }

  /** setter for state ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId */
  setCmdDeleteTimeLogTimeLogId(value: string): void {
    this.cmdDeleteTimeLogTimeLogId = value;
    setState('ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteTimeLogTimeLogId — bind UI events here */
  handleCmdDeleteTimeLogTimeLogIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteTimeLogTimeLogId(value);
  }
}
