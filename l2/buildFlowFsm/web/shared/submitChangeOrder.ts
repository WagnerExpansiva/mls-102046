/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateClientInput,
  QryLocateClientOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdHandoffChangeOrderToProjectManagerInput,
  CmdHandoffChangeOrderToProjectManagerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.js';
import {
  qryLocateClientRoute,
  qryLocateProjectRoute,
  cmdCreateChangeOrderRoute,
  cmdHandoffChangeOrderToProjectManagerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.js';

export type {
  QryLocateClientInput,
  QryLocateClientOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdHandoffChangeOrderToProjectManagerInput,
  CmdHandoffChangeOrderToProjectManagerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/submitChangeOrder.js';

/// **collab_i18n_start**
const message_pt = {
  'section.submitChangeOrder.locateClient.title': 'Localizar cliente',
  'organism.submitChangeOrder.qryLocateClient.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.submitChangeOrder.locateProject.title': 'Selecionar obra',
  'organism.submitChangeOrder.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.name.label': 'Name',
  'intent.submitChangeOrder.qryLocateProject.list.column.address.label': 'Address',
  'intent.submitChangeOrder.qryLocateProject.list.column.status.label': 'Status',
  'intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.submitChangeOrder.createChangeOrder.title': 'Registrar alteração',
  'organism.submitChangeOrder.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'section.submitChangeOrder.handoffChangeOrderToProjectManager.title': 'Submeter para tratamento',
  'organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label': 'Change Amount',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdHandoffChangeOrderToProjectManager.success': 'Submeter a alteração para tratamento: OK',
  'action.cmdHandoffChangeOrderToProjectManager.error': 'Submeter a alteração para tratamento: falhou',
  'section.submitChangeOrder.changeOrderWorkspace.title': 'Formalizar e encaminhar alteração',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.submitChangeOrder.locateClient.title': 'Localizar cliente',
  'organism.submitChangeOrder.qryLocateClient.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.submitChangeOrder.locateProject.title': 'Selecionar obra',
  'organism.submitChangeOrder.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.name.label': 'Name',
  'intent.submitChangeOrder.qryLocateProject.list.column.address.label': 'Address',
  'intent.submitChangeOrder.qryLocateProject.list.column.status.label': 'Status',
  'intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.submitChangeOrder.createChangeOrder.title': 'Registrar alteração',
  'organism.submitChangeOrder.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'section.submitChangeOrder.handoffChangeOrderToProjectManager.title': 'Submeter para tratamento',
  'organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label': 'Change Amount',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdHandoffChangeOrderToProjectManager.success': 'Submeter a alteração para tratamento: OK',
  'action.cmdHandoffChangeOrderToProjectManager.error': 'Submeter a alteração para tratamento: falhou',
  'section.submitChangeOrder.changeOrderWorkspace.title': 'Formalizar e encaminhar alteração',
};
const message_en: MessageType = {
  'section.submitChangeOrder.locateClient.title': 'Localizar cliente',
  'organism.submitChangeOrder.qryLocateClient.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.submitChangeOrder.locateProject.title': 'Selecionar obra',
  'organism.submitChangeOrder.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.name.label': 'Name',
  'intent.submitChangeOrder.qryLocateProject.list.column.address.label': 'Address',
  'intent.submitChangeOrder.qryLocateProject.list.column.status.label': 'Status',
  'intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.submitChangeOrder.createChangeOrder.title': 'Registrar alteração',
  'organism.submitChangeOrder.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'section.submitChangeOrder.handoffChangeOrderToProjectManager.title': 'Submeter para tratamento',
  'organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label': 'Change Amount',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdHandoffChangeOrderToProjectManager.success': 'Submeter a alteração para tratamento: OK',
  'action.cmdHandoffChangeOrderToProjectManager.error': 'Submeter a alteração para tratamento: falhou',
  'section.submitChangeOrder.changeOrderWorkspace.title': 'Formalizar e encaminhar alteração',
};
const message_es: MessageType = {
  'section.submitChangeOrder.locateClient.title': 'Localizar cliente',
  'organism.submitChangeOrder.qryLocateClient.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.submitChangeOrder.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.submitChangeOrder.locateProject.title': 'Selecionar obra',
  'organism.submitChangeOrder.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.submitChangeOrder.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.submitChangeOrder.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.submitChangeOrder.qryLocateProject.list.column.name.label': 'Name',
  'intent.submitChangeOrder.qryLocateProject.list.column.address.label': 'Address',
  'intent.submitChangeOrder.qryLocateProject.list.column.status.label': 'Status',
  'intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.submitChangeOrder.createChangeOrder.title': 'Registrar alteração',
  'organism.submitChangeOrder.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'section.submitChangeOrder.handoffChangeOrderToProjectManager.title': 'Submeter para tratamento',
  'organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager': 'Submeter a alteração para tratamento',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label': 'Description',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label': 'Scope Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label': 'Change Amount',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdHandoffChangeOrderToProjectManager.success': 'Submeter a alteração para tratamento: OK',
  'action.cmdHandoffChangeOrderToProjectManager.error': 'Submeter a alteração para tratamento: falhou',
  'section.submitChangeOrder.changeOrderWorkspace.title': 'Formalizar e encaminhar alteração',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.submitChangeOrder.status',
  'ui.submitChangeOrder.action.qryLocateClient.status',
  'ui.submitChangeOrder.data.qryLocateClient',
  'ui.submitChangeOrder.action.qryLocateProject.status',
  'ui.submitChangeOrder.data.qryLocateProject',
  'ui.submitChangeOrder.action.cmdCreateChangeOrder.status',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.description',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact',
  'ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount',
  'ui.submitChangeOrder.output.cmdCreateChangeOrder',
  'ui.submitChangeOrder.action.cmdCreateChangeOrder.error',
  'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status',
  'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId',
  'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description',
  'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact',
  'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact',
  'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount',
  'ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager',
  'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error',
];

export class BuildFlowFsmSubmitChangeOrderBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateClientState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateClientData — queryResult, outputShape: array */
  @property() qryLocateClientData: QryLocateClientOutput[] = [];
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state cmdCreateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateChangeOrderClientClientId — input */
  @property() cmdCreateChangeOrderClientClientId: string = '';
  /** state cmdCreateChangeOrderProjectProjectId — input */
  @property() cmdCreateChangeOrderProjectProjectId: string = '';
  /** state cmdCreateChangeOrderDescription — input */
  @property() cmdCreateChangeOrderDescription: string = '';
  /** state cmdCreateChangeOrderScopeImpact — input */
  @property() cmdCreateChangeOrderScopeImpact: string = '';
  /** state cmdCreateChangeOrderScheduleImpact — input */
  @property() cmdCreateChangeOrderScheduleImpact: string = '';
  /** state cmdCreateChangeOrderChangeAmount — input */
  @property() cmdCreateChangeOrderChangeAmount: string = '';
  /** state cmdCreateChangeOrderOutput — commandOutput */
  @property() cmdCreateChangeOrderOutput: CmdCreateChangeOrderOutput | null = null;
  /** state cmdCreateChangeOrderError — actionError */
  @property() cmdCreateChangeOrderError: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffChangeOrderToProjectManagerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId — input */
  @property() cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerDescription — input */
  @property() cmdHandoffChangeOrderToProjectManagerDescription: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerScopeImpact — input */
  @property() cmdHandoffChangeOrderToProjectManagerScopeImpact: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerScheduleImpact — input */
  @property() cmdHandoffChangeOrderToProjectManagerScheduleImpact: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerChangeAmount — input */
  @property() cmdHandoffChangeOrderToProjectManagerChangeAmount: string = '';
  /** state cmdHandoffChangeOrderToProjectManagerOutput — commandOutput */
  @property() cmdHandoffChangeOrderToProjectManagerOutput: CmdHandoffChangeOrderToProjectManagerOutput | null = null;
  /** state cmdHandoffChangeOrderToProjectManagerError — actionError */
  @property() cmdHandoffChangeOrderToProjectManagerError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.submitChangeOrder.status', '');
    this.initStateValue('ui.submitChangeOrder.action.qryLocateClient.status', 'idle');
    this.initStateValue('ui.submitChangeOrder.data.qryLocateClient', []);
    this.initStateValue('ui.submitChangeOrder.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.submitChangeOrder.data.qryLocateProject', []);
    this.initStateValue('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'idle');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.description', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount', '');
    this.initStateValue('ui.submitChangeOrder.output.cmdCreateChangeOrder', null);
    this.initStateValue('ui.submitChangeOrder.action.cmdCreateChangeOrder.error', '');
    this.initStateValue('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'idle');
    this.initStateValue('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact', '');
    this.initStateValue('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount', '');
    this.initStateValue('ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager', null);
    this.initStateValue('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateClient();
    void this.loadQryLocateProject();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.submitChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.action.qryLocateClient.status':
        this.qryLocateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.data.qryLocateClient':
        this.qryLocateClientData = (value as QryLocateClientOutput[]) ?? [];
        break;
      case 'ui.submitChangeOrder.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.submitChangeOrder.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId':
        this.cmdCreateChangeOrderClientClientId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId':
        this.cmdCreateChangeOrderProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact':
        this.cmdCreateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact':
        this.cmdCreateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount':
        this.cmdCreateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.submitChangeOrder.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status':
        this.cmdHandoffChangeOrderToProjectManagerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId':
        this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description':
        this.cmdHandoffChangeOrderToProjectManagerDescription = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact':
        this.cmdHandoffChangeOrderToProjectManagerScopeImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact':
        this.cmdHandoffChangeOrderToProjectManagerScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount':
        this.cmdHandoffChangeOrderToProjectManagerChangeAmount = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager':
        this.cmdHandoffChangeOrderToProjectManagerOutput = (value as CmdHandoffChangeOrderToProjectManagerOutput | null) ?? null;
        break;
      case 'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error':
        this.cmdHandoffChangeOrderToProjectManagerError = (value as string) ?? '';
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
      case 'ui.submitChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.action.qryLocateClient.status':
        this.qryLocateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.data.qryLocateClient':
        this.qryLocateClientData = (value as QryLocateClientOutput[]) ?? [];
        break;
      case 'ui.submitChangeOrder.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.submitChangeOrder.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId':
        this.cmdCreateChangeOrderClientClientId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId':
        this.cmdCreateChangeOrderProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact':
        this.cmdCreateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact':
        this.cmdCreateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount':
        this.cmdCreateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.submitChangeOrder.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status':
        this.cmdHandoffChangeOrderToProjectManagerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId':
        this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description':
        this.cmdHandoffChangeOrderToProjectManagerDescription = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact':
        this.cmdHandoffChangeOrderToProjectManagerScopeImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact':
        this.cmdHandoffChangeOrderToProjectManagerScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount':
        this.cmdHandoffChangeOrderToProjectManagerChangeAmount = (value as string) ?? '';
        break;
      case 'ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager':
        this.cmdHandoffChangeOrderToProjectManagerOutput = (value as CmdHandoffChangeOrderToProjectManagerOutput | null) ?? null;
        break;
      case 'ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error':
        this.cmdHandoffChangeOrderToProjectManagerError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/submitChangeOrder(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdCreateChangeOrderProjectProjectId) {
        this.cmdCreateChangeOrderProjectProjectId = projectProjectId;
        setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId', projectProjectId);
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

  /** action qryLocateClient (query) — route buildFlowFsm.submitChangeOrder.qryLocateClient; inputs: (none); writes ui.submitChangeOrder.data.qryLocateClient; status ui.submitChangeOrder.action.qryLocateClient.status */
  async loadQryLocateClient(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateClientState = 'loading';
    setState('ui.submitChangeOrder.action.qryLocateClient.status', 'loading');
    const params: QryLocateClientInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateClientOutput[]>(qryLocateClientRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateClientData = data;
      setState('ui.submitChangeOrder.data.qryLocateClient', data);
      this.qryLocateClientState = 'success';
      setState('ui.submitChangeOrder.action.qryLocateClient.status', 'success');
    } else {
      this.qryLocateClientState = 'error';
      setState('ui.submitChangeOrder.action.qryLocateClient.status', 'error');
      if (response.error) {
        console.error('qryLocateClient failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateClient — bind UI events here */
  handleQryLocateClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateClient();
  }

  /** action qryLocateProject (query) — route buildFlowFsm.submitChangeOrder.qryLocateProject; inputs: (none); writes ui.submitChangeOrder.data.qryLocateProject; status ui.submitChangeOrder.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.submitChangeOrder.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.submitChangeOrder.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.submitChangeOrder.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.submitChangeOrder.action.qryLocateProject.status', 'error');
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

  /** action cmdCreateChangeOrder (command) — route buildFlowFsm.submitChangeOrder.cmdCreateChangeOrder; inputs: clientClientId, projectProjectId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.submitChangeOrder.output.cmdCreateChangeOrder; status ui.submitChangeOrder.action.cmdCreateChangeOrder.status; feedback keys action.cmdCreateChangeOrder.success / action.cmdCreateChangeOrder.error */
  async cmdCreateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateChangeOrderProjectProjectId) {
      this.cmdCreateChangeOrderState = 'idle';
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateChangeOrderClientClientId) {
      this.cmdCreateChangeOrderState = 'idle';
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderState = 'loading';
    setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'loading');
    this.cmdCreateChangeOrderError = '';
    setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.error', '');
    const changeAmountNum = Number(this.cmdCreateChangeOrderChangeAmount);
    const params: CmdCreateChangeOrderInput = {
      clientClientId: this.cmdCreateChangeOrderClientClientId,
      projectProjectId: this.cmdCreateChangeOrderProjectProjectId,
      description: this.cmdCreateChangeOrderDescription,
      scopeImpact: this.cmdCreateChangeOrderScopeImpact,
      scheduleImpact: this.cmdCreateChangeOrderScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateChangeOrderOutput>(cmdCreateChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateChangeOrder.error');
      this.cmdCreateChangeOrderError = errMsg;
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.error', errMsg);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateChangeOrderOutput | null = response.data ?? null;
    this.cmdCreateChangeOrderOutput = data;
    setState('ui.submitChangeOrder.output.cmdCreateChangeOrder', data);
    try {
      await this.loadQryLocateClient();
      if (this.qryLocateClientState === 'error') {
        this.cmdCreateChangeOrderState = 'error';
        setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrder refresh failed', refreshError);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdCreateChangeOrderState = 'error';
        setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrder refresh failed', refreshError);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderClientClientId = '';
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId', '');
    this.cmdCreateChangeOrderDescription = '';
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.description', '');
    this.cmdCreateChangeOrderScopeImpact = '';
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact', '');
    this.cmdCreateChangeOrderScheduleImpact = '';
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact', '');
    this.cmdCreateChangeOrderChangeAmount = '';
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount', '');
    this.cmdCreateChangeOrderState = 'success';
    setState('ui.submitChangeOrder.action.cmdCreateChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateChangeOrder — bind UI events here */
  handleCmdCreateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateChangeOrder();
    });
  }

  /** action cmdHandoffChangeOrderToProjectManager (command) — route buildFlowFsm.submitChangeOrder.cmdHandoffChangeOrderToProjectManager; inputs: changeOrderChangeOrderId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager; status ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status; feedback keys action.cmdHandoffChangeOrderToProjectManager.success / action.cmdHandoffChangeOrderToProjectManager.error */
  async cmdHandoffChangeOrderToProjectManager(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId) {
      this.cmdHandoffChangeOrderToProjectManagerState = 'idle';
      setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffChangeOrderToProjectManagerState = 'loading';
    setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'loading');
    this.cmdHandoffChangeOrderToProjectManagerError = '';
    setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error', '');
    const changeAmountNum = Number(this.cmdHandoffChangeOrderToProjectManagerChangeAmount);
    const params: CmdHandoffChangeOrderToProjectManagerInput = {
      changeOrderChangeOrderId: this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId,
      description: this.cmdHandoffChangeOrderToProjectManagerDescription,
      scopeImpact: this.cmdHandoffChangeOrderToProjectManagerScopeImpact,
      scheduleImpact: this.cmdHandoffChangeOrderToProjectManagerScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffChangeOrderToProjectManagerOutput>(cmdHandoffChangeOrderToProjectManagerRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffChangeOrderToProjectManager.error');
      this.cmdHandoffChangeOrderToProjectManagerError = errMsg;
      setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.error', errMsg);
      this.cmdHandoffChangeOrderToProjectManagerState = 'error';
      setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffChangeOrderToProjectManagerOutput | null = response.data ?? null;
    this.cmdHandoffChangeOrderToProjectManagerOutput = data;
    setState('ui.submitChangeOrder.output.cmdHandoffChangeOrderToProjectManager', data);
    try {
      await this.loadQryLocateClient();
      if (this.qryLocateClientState === 'error') {
        this.cmdHandoffChangeOrderToProjectManagerState = 'error';
        setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffChangeOrderToProjectManager refresh failed', refreshError);
      this.cmdHandoffChangeOrderToProjectManagerState = 'error';
      setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffChangeOrderToProjectManagerState = 'error';
        setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffChangeOrderToProjectManager refresh failed', refreshError);
      this.cmdHandoffChangeOrderToProjectManagerState = 'error';
      setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = '';
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId', '');
    this.cmdHandoffChangeOrderToProjectManagerDescription = '';
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description', '');
    this.cmdHandoffChangeOrderToProjectManagerScopeImpact = '';
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact', '');
    this.cmdHandoffChangeOrderToProjectManagerScheduleImpact = '';
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact', '');
    this.cmdHandoffChangeOrderToProjectManagerChangeAmount = '';
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount', '');
    this.cmdHandoffChangeOrderToProjectManagerState = 'success';
    setState('ui.submitChangeOrder.action.cmdHandoffChangeOrderToProjectManager.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffChangeOrderToProjectManager — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffChangeOrderToProjectManager();
    });
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId */
  setCmdCreateChangeOrderClientClientId(value: string): void {
    this.cmdCreateChangeOrderClientClientId = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderClientClientId — bind UI events here */
  handleCmdCreateChangeOrderClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderClientClientId(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId */
  setCmdCreateChangeOrderProjectProjectId(value: string): void {
    this.cmdCreateChangeOrderProjectProjectId = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderProjectProjectId — bind UI events here */
  handleCmdCreateChangeOrderProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderProjectProjectId(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.description */
  setCmdCreateChangeOrderDescription(value: string): void {
    this.cmdCreateChangeOrderDescription = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDescription — bind UI events here */
  handleCmdCreateChangeOrderDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDescription(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact */
  setCmdCreateChangeOrderScopeImpact(value: string): void {
    this.cmdCreateChangeOrderScopeImpact = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScopeImpact — bind UI events here */
  handleCmdCreateChangeOrderScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderScopeImpact(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact */
  setCmdCreateChangeOrderScheduleImpact(value: string): void {
    this.cmdCreateChangeOrderScheduleImpact = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScheduleImpact — bind UI events here */
  handleCmdCreateChangeOrderScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderScheduleImpact(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount */
  setCmdCreateChangeOrderChangeAmount(value: string): void {
    this.cmdCreateChangeOrderChangeAmount = value;
    setState('ui.submitChangeOrder.input.cmdCreateChangeOrder.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderChangeAmount — bind UI events here */
  handleCmdCreateChangeOrderChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderChangeAmount(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId */
  setCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId(value: string): void {
    this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId = value;
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description */
  setCmdHandoffChangeOrderToProjectManagerDescription(value: string): void {
    this.cmdHandoffChangeOrderToProjectManagerDescription = value;
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToProjectManagerDescription — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToProjectManagerDescription(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact */
  setCmdHandoffChangeOrderToProjectManagerScopeImpact(value: string): void {
    this.cmdHandoffChangeOrderToProjectManagerScopeImpact = value;
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToProjectManagerScopeImpact — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToProjectManagerScopeImpact(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact */
  setCmdHandoffChangeOrderToProjectManagerScheduleImpact(value: string): void {
    this.cmdHandoffChangeOrderToProjectManagerScheduleImpact = value;
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToProjectManagerScheduleImpact — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToProjectManagerScheduleImpact(value);
  }

  /** setter for state ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount */
  setCmdHandoffChangeOrderToProjectManagerChangeAmount(value: string): void {
    this.cmdHandoffChangeOrderToProjectManagerChangeAmount = value;
    setState('ui.submitChangeOrder.input.cmdHandoffChangeOrderToProjectManager.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToProjectManagerChangeAmount — bind UI events here */
  handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToProjectManagerChangeAmount(value);
  }
}
