/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdDeclineChangeOrderDecisionInput,
  CmdDeclineChangeOrderDecisionOutput,
  CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput,
  CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.js';
import {
  qryLocateChangeOrderRoute,
  cmdDeclineChangeOrderDecisionRoute,
  cmdHandoffDeclinedChangeOrderToFieldCoordinatorRoute,
  qryClientPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.js';

export type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdDeclineChangeOrderDecisionInput,
  CmdDeclineChangeOrderDecisionOutput,
  CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput,
  CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/declineChangeOrder.js';

/// **collab_i18n_start**
const message_pt = {
  'section.declineChangeOrder.locateChangeOrder.title': 'Ordem submetida',
  'organism.declineChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.declineChangeOrder.declineChangeOrderDecision.title': 'Registrar recusa',
  'organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label': 'Status',
  'organism.declineChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver ao campo',
  'organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label': 'Description',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label': 'Change Amount',
  'action.cmdDeclineChangeOrderDecision.success': 'Recusar a ordem de mudança: OK',
  'action.cmdDeclineChangeOrderDecision.error': 'Recusar a ordem de mudança: falhou',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success': 'Devolver a decisão ao campo: OK',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error': 'Devolver a decisão ao campo: falhou',
  'section.declineChangeOrder.decisionQueue.title': 'Ordens para decisão',
  'section.declineChangeOrder.handoffOutcome.title': 'Resultado e encaminhamento',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.declineChangeOrder.locateChangeOrder.title': 'Ordem submetida',
  'organism.declineChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.declineChangeOrder.declineChangeOrderDecision.title': 'Registrar recusa',
  'organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label': 'Status',
  'organism.declineChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver ao campo',
  'organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label': 'Description',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label': 'Change Amount',
  'action.cmdDeclineChangeOrderDecision.success': 'Recusar a ordem de mudança: OK',
  'action.cmdDeclineChangeOrderDecision.error': 'Recusar a ordem de mudança: falhou',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success': 'Devolver a decisão ao campo: OK',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error': 'Devolver a decisão ao campo: falhou',
  'section.declineChangeOrder.decisionQueue.title': 'Ordens para decisão',
  'section.declineChangeOrder.handoffOutcome.title': 'Resultado e encaminhamento',
};
const message_en: MessageType = {
  'section.declineChangeOrder.locateChangeOrder.title': 'Ordem submetida',
  'organism.declineChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.declineChangeOrder.declineChangeOrderDecision.title': 'Registrar recusa',
  'organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label': 'Status',
  'organism.declineChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver ao campo',
  'organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label': 'Description',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label': 'Change Amount',
  'action.cmdDeclineChangeOrderDecision.success': 'Recusar a ordem de mudança: OK',
  'action.cmdDeclineChangeOrderDecision.error': 'Recusar a ordem de mudança: falhou',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success': 'Devolver a decisão ao campo: OK',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error': 'Devolver a decisão ao campo: falhou',
  'section.declineChangeOrder.decisionQueue.title': 'Ordens para decisão',
  'section.declineChangeOrder.handoffOutcome.title': 'Resultado e encaminhamento',
};
const message_es: MessageType = {
  'section.declineChangeOrder.locateChangeOrder.title': 'Ordem submetida',
  'organism.declineChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.declineChangeOrder.declineChangeOrderDecision.title': 'Registrar recusa',
  'organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision': 'Recusar a ordem de mudança',
  'intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label': 'Status',
  'organism.declineChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.declineChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.declineChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver ao campo',
  'organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator': 'Devolver a decisão ao campo',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label': 'Description',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label': 'Scope Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label': 'Change Amount',
  'action.cmdDeclineChangeOrderDecision.success': 'Recusar a ordem de mudança: OK',
  'action.cmdDeclineChangeOrderDecision.error': 'Recusar a ordem de mudança: falhou',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success': 'Devolver a decisão ao campo: OK',
  'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error': 'Devolver a decisão ao campo: falhou',
  'section.declineChangeOrder.decisionQueue.title': 'Ordens para decisão',
  'section.declineChangeOrder.handoffOutcome.title': 'Resultado e encaminhamento',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.declineChangeOrder.status',
  'ui.declineChangeOrder.action.qryLocateChangeOrder.status',
  'ui.declineChangeOrder.data.qryLocateChangeOrder',
  'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status',
  'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId',
  'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId',
  'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId',
  'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status',
  'ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision',
  'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error',
  'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status',
  'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId',
  'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description',
  'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact',
  'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact',
  'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount',
  'ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator',
  'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error',
  'ui.declineChangeOrder.action.qryClientPicker.status',
  'ui.declineChangeOrder.data.qryClientPicker',
];

export class BuildFlowFsmDeclineChangeOrderBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateChangeOrderData — queryResult, outputShape: array */
  @property() qryLocateChangeOrderData: QryLocateChangeOrderOutput[] = [];
  /** state cmdDeclineChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeclineChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId — input */
  @property() cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId: string = '';
  /** state cmdDeclineChangeOrderDecisionClientClientId — input */
  @property() cmdDeclineChangeOrderDecisionClientClientId: string = '';
  /** state cmdDeclineChangeOrderDecisionProjectProjectId — input */
  @property() cmdDeclineChangeOrderDecisionProjectProjectId: string = '';
  /** state cmdDeclineChangeOrderDecisionStatus — input */
  @property() cmdDeclineChangeOrderDecisionStatus: string = '';
  /** state cmdDeclineChangeOrderDecisionOutput — commandOutput */
  @property() cmdDeclineChangeOrderDecisionOutput: CmdDeclineChangeOrderDecisionOutput | null = null;
  /** state cmdDeclineChangeOrderDecisionError — actionError */
  @property() cmdDeclineChangeOrderDecisionError: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId — input */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription — input */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact — input */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact — input */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount — input */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount: string = '';
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput — commandOutput */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput: CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput | null = null;
  /** state cmdHandoffDeclinedChangeOrderToFieldCoordinatorError — actionError */
  @property() cmdHandoffDeclinedChangeOrderToFieldCoordinatorError: string = '';
  /** state qryClientPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryClientPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientPickerData — queryResult, outputShape: array */
  @property() qryClientPickerData: QryClientPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.declineChangeOrder.status', '');
    this.initStateValue('ui.declineChangeOrder.action.qryLocateChangeOrder.status', 'idle');
    this.initStateValue('ui.declineChangeOrder.data.qryLocateChangeOrder', []);
    this.initStateValue('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status', '');
    this.initStateValue('ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision', null);
    this.initStateValue('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error', '');
    this.initStateValue('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'idle');
    this.initStateValue('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact', '');
    this.initStateValue('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount', '');
    this.initStateValue('ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator', null);
    this.initStateValue('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error', '');
    this.initStateValue('ui.declineChangeOrder.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.declineChangeOrder.data.qryClientPicker', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateChangeOrder();
    void this.loadQryClientPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.declineChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status':
        this.cmdDeclineChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId':
        this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId':
        this.cmdDeclineChangeOrderDecisionClientClientId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId':
        this.cmdDeclineChangeOrderDecisionProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status':
        this.cmdDeclineChangeOrderDecisionStatus = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision':
        this.cmdDeclineChangeOrderDecisionOutput = (value as CmdDeclineChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error':
        this.cmdDeclineChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput = (value as CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
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
      case 'ui.declineChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status':
        this.cmdDeclineChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId':
        this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId':
        this.cmdDeclineChangeOrderDecisionClientClientId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId':
        this.cmdDeclineChangeOrderDecisionProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status':
        this.cmdDeclineChangeOrderDecisionStatus = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision':
        this.cmdDeclineChangeOrderDecisionOutput = (value as CmdDeclineChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error':
        this.cmdDeclineChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput = (value as CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error':
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError = (value as string) ?? '';
        break;
      case 'ui.declineChangeOrder.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.declineChangeOrder.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
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
      /^\/buildFlowFsm\/declineChangeOrder(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdDeclineChangeOrderDecisionProjectProjectId) {
        this.cmdDeclineChangeOrderDecisionProjectProjectId = projectProjectId;
        setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId', projectProjectId);
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

  /** action qryLocateChangeOrder (query) — route buildFlowFsm.declineChangeOrder.qryLocateChangeOrder; inputs: (none); writes ui.declineChangeOrder.data.qryLocateChangeOrder; status ui.declineChangeOrder.action.qryLocateChangeOrder.status */
  async loadQryLocateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateChangeOrderState = 'loading';
    setState('ui.declineChangeOrder.action.qryLocateChangeOrder.status', 'loading');
    const params: QryLocateChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateChangeOrderOutput[]>(qryLocateChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateChangeOrderData = data;
      setState('ui.declineChangeOrder.data.qryLocateChangeOrder', data);
      this.qryLocateChangeOrderState = 'success';
      setState('ui.declineChangeOrder.action.qryLocateChangeOrder.status', 'success');
    } else {
      this.qryLocateChangeOrderState = 'error';
      setState('ui.declineChangeOrder.action.qryLocateChangeOrder.status', 'error');
      if (response.error) {
        console.error('qryLocateChangeOrder failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateChangeOrder — bind UI events here */
  handleQryLocateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateChangeOrder();
  }

  /** action cmdDeclineChangeOrderDecision (command) — route buildFlowFsm.declineChangeOrder.cmdDeclineChangeOrderDecision; inputs: changeOrderChangeOrderId, clientClientId, projectProjectId, status; writes ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision; status ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status; feedback keys action.cmdDeclineChangeOrderDecision.success / action.cmdDeclineChangeOrderDecision.error */
  async cmdDeclineChangeOrderDecision(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdDeclineChangeOrderDecisionProjectProjectId) {
      this.cmdDeclineChangeOrderDecisionState = 'idle';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId) {
      this.cmdDeclineChangeOrderDecisionState = 'idle';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdDeclineChangeOrderDecisionClientClientId) {
      this.cmdDeclineChangeOrderDecisionState = 'idle';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeclineChangeOrderDecisionState = 'loading';
    setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'loading');
    this.cmdDeclineChangeOrderDecisionError = '';
    setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error', '');
    const params: CmdDeclineChangeOrderDecisionInput = {
      changeOrderChangeOrderId: this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId,
      clientClientId: this.cmdDeclineChangeOrderDecisionClientClientId,
      projectProjectId: this.cmdDeclineChangeOrderDecisionProjectProjectId,
      status: this.cmdDeclineChangeOrderDecisionStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeclineChangeOrderDecisionOutput>(cmdDeclineChangeOrderDecisionRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeclineChangeOrderDecision.error');
      this.cmdDeclineChangeOrderDecisionError = errMsg;
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.error', errMsg);
      this.cmdDeclineChangeOrderDecisionState = 'error';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeclineChangeOrderDecisionOutput | null = response.data ?? null;
    this.cmdDeclineChangeOrderDecisionOutput = data;
    setState('ui.declineChangeOrder.output.cmdDeclineChangeOrderDecision', data);
    try {
      await this.loadQryLocateChangeOrder();
      if (this.qryLocateChangeOrderState === 'error') {
        this.cmdDeclineChangeOrderDecisionState = 'error';
        setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeclineChangeOrderDecision refresh failed', refreshError);
      this.cmdDeclineChangeOrderDecisionState = 'error';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdDeclineChangeOrderDecisionState = 'error';
        setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeclineChangeOrderDecision refresh failed', refreshError);
      this.cmdDeclineChangeOrderDecisionState = 'error';
      setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = '';
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId', '');
    this.cmdDeclineChangeOrderDecisionClientClientId = '';
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId', '');
    this.cmdDeclineChangeOrderDecisionStatus = '';
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status', '');
    this.cmdDeclineChangeOrderDecisionState = 'success';
    setState('ui.declineChangeOrder.action.cmdDeclineChangeOrderDecision.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeclineChangeOrderDecision — bind UI events here */
  handleCmdDeclineChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeclineChangeOrderDecision();
    });
  }

  /** action cmdHandoffDeclinedChangeOrderToFieldCoordinator (command) — route buildFlowFsm.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator; inputs: changeOrderChangeOrderId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator; status ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status; feedback keys action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success / action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error */
  async cmdHandoffDeclinedChangeOrderToFieldCoordinator(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId) {
      this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'idle';
      setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'loading';
    setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'loading');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError = '';
    setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error', '');
    const changeAmountNum = Number(this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount);
    const params: CmdHandoffDeclinedChangeOrderToFieldCoordinatorInput = {
      changeOrderChangeOrderId: this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId,
      description: this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription,
      scopeImpact: this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact,
      scheduleImpact: this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput>(cmdHandoffDeclinedChangeOrderToFieldCoordinatorRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error');
      this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError = errMsg;
      setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error', errMsg);
      this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'error';
      setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput | null = response.data ?? null;
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorOutput = data;
    setState('ui.declineChangeOrder.output.cmdHandoffDeclinedChangeOrderToFieldCoordinator', data);
    try {
      await this.loadQryLocateChangeOrder();
      if (this.qryLocateChangeOrderState === 'error') {
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'error';
        setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffDeclinedChangeOrderToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'error';
      setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'error';
        setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffDeclinedChangeOrderToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'error';
      setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = '';
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId', '');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = '';
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description', '');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = '';
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact', '');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = '';
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact', '');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = '';
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount', '');
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState = 'success';
    setState('ui.declineChangeOrder.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffDeclinedChangeOrderToFieldCoordinator — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffDeclinedChangeOrderToFieldCoordinator();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.declineChangeOrder.qryClientPicker; inputs: (none); writes ui.declineChangeOrder.data.qryClientPicker; status ui.declineChangeOrder.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryClientPickerState = 'loading';
    setState('ui.declineChangeOrder.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.declineChangeOrder.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.declineChangeOrder.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.declineChangeOrder.action.qryClientPicker.status', 'error');
      if (response.error) {
        console.error('qryClientPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryClientPicker — bind UI events here */
  handleQryClientPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryClientPicker();
  }

  /** setter for state ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId */
  setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(value: string): void {
    this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId = value;
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId — bind UI events here */
  handleCmdDeclineChangeOrderDecisionChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId */
  setCmdDeclineChangeOrderDecisionClientClientId(value: string): void {
    this.cmdDeclineChangeOrderDecisionClientClientId = value;
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeclineChangeOrderDecisionClientClientId — bind UI events here */
  handleCmdDeclineChangeOrderDecisionClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeclineChangeOrderDecisionClientClientId(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId */
  setCmdDeclineChangeOrderDecisionProjectProjectId(value: string): void {
    this.cmdDeclineChangeOrderDecisionProjectProjectId = value;
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeclineChangeOrderDecisionProjectProjectId — bind UI events here */
  handleCmdDeclineChangeOrderDecisionProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeclineChangeOrderDecisionProjectProjectId(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status */
  setCmdDeclineChangeOrderDecisionStatus(value: string): void {
    this.cmdDeclineChangeOrderDecisionStatus = value;
    setState('ui.declineChangeOrder.input.cmdDeclineChangeOrderDecision.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeclineChangeOrderDecisionStatus — bind UI events here */
  handleCmdDeclineChangeOrderDecisionStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeclineChangeOrderDecisionStatus(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId */
  setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId(value: string): void {
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId = value;
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description */
  setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription(value: string): void {
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription = value;
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact */
  setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact(value: string): void {
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact = value;
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact */
  setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact(value: string): void {
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact = value;
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact(value);
  }

  /** setter for state ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount */
  setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount(value: string): void {
    this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount = value;
    setState('ui.declineChangeOrder.input.cmdHandoffDeclinedChangeOrderToFieldCoordinator.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount — bind UI events here */
  handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount(value);
  }
}
