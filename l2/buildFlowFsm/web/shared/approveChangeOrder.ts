/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdApproveChangeOrderDecisionInput,
  CmdApproveChangeOrderDecisionOutput,
  CmdHandoffApprovedChangeOrderToBillingInput,
  CmdHandoffApprovedChangeOrderToBillingOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.js';
import {
  qryLocateChangeOrderRoute,
  cmdApproveChangeOrderDecisionRoute,
  cmdHandoffApprovedChangeOrderToBillingRoute,
  qryClientPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.js';

export type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdApproveChangeOrderDecisionInput,
  CmdApproveChangeOrderDecisionOutput,
  CmdHandoffApprovedChangeOrderToBillingInput,
  CmdHandoffApprovedChangeOrderToBillingOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.js';

/// **collab_i18n_start**
const message_pt = {
  'section.approveChangeOrder.locateChangeOrder.title': 'Ordem pendente',
  'organism.approveChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.approveChangeOrder.approveChangeOrderDecision.title': 'Decisão de aprovação',
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': 'Status',
  'organism.approveChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': 'Encaminhamento ao faturamento',
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': 'Description',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': 'Change Amount',
  'action.cmdApproveChangeOrderDecision.success': 'Aprovar a ordem de mudança: OK',
  'action.cmdApproveChangeOrderDecision.error': 'Aprovar a ordem de mudança: falhou',
  'action.cmdHandoffApprovedChangeOrderToBilling.success': 'Encaminhar a alteração aprovada ao faturamento: OK',
  'action.cmdHandoffApprovedChangeOrderToBilling.error': 'Encaminhar a alteração aprovada ao faturamento: falhou',
  'section.approveChangeOrder.change-order-workspace.title': 'Revisar e decidir ordem de mudança',
  'section.approveChangeOrder.billing-handoff.title': 'Encaminhar aprovação ao faturamento',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.approveChangeOrder.locateChangeOrder.title': 'Ordem pendente',
  'organism.approveChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.approveChangeOrder.approveChangeOrderDecision.title': 'Decisão de aprovação',
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': 'Status',
  'organism.approveChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': 'Encaminhamento ao faturamento',
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': 'Description',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': 'Change Amount',
  'action.cmdApproveChangeOrderDecision.success': 'Aprovar a ordem de mudança: OK',
  'action.cmdApproveChangeOrderDecision.error': 'Aprovar a ordem de mudança: falhou',
  'action.cmdHandoffApprovedChangeOrderToBilling.success': 'Encaminhar a alteração aprovada ao faturamento: OK',
  'action.cmdHandoffApprovedChangeOrderToBilling.error': 'Encaminhar a alteração aprovada ao faturamento: falhou',
  'section.approveChangeOrder.change-order-workspace.title': 'Revisar e decidir ordem de mudança',
  'section.approveChangeOrder.billing-handoff.title': 'Encaminhar aprovação ao faturamento',
};
const message_en: MessageType = {
  'section.approveChangeOrder.locateChangeOrder.title': 'Ordem pendente',
  'organism.approveChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.approveChangeOrder.approveChangeOrderDecision.title': 'Decisão de aprovação',
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': 'Status',
  'organism.approveChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': 'Encaminhamento ao faturamento',
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': 'Description',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': 'Change Amount',
  'action.cmdApproveChangeOrderDecision.success': 'Aprovar a ordem de mudança: OK',
  'action.cmdApproveChangeOrderDecision.error': 'Aprovar a ordem de mudança: falhou',
  'action.cmdHandoffApprovedChangeOrderToBilling.success': 'Encaminhar a alteração aprovada ao faturamento: OK',
  'action.cmdHandoffApprovedChangeOrderToBilling.error': 'Encaminhar a alteração aprovada ao faturamento: falhou',
  'section.approveChangeOrder.change-order-workspace.title': 'Revisar e decidir ordem de mudança',
  'section.approveChangeOrder.billing-handoff.title': 'Encaminhar aprovação ao faturamento',
};
const message_es: MessageType = {
  'section.approveChangeOrder.locateChangeOrder.title': 'Ordem pendente',
  'organism.approveChangeOrder.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.approveChangeOrder.approveChangeOrderDecision.title': 'Decisão de aprovação',
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': 'Aprovar a ordem de mudança',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': 'Status',
  'organism.approveChangeOrder.qryClientPicker.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.title': 'Listar Cliente',
  'intent.approveChangeOrder.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': 'Encaminhamento ao faturamento',
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': 'Encaminhar a alteração aprovada ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': 'Description',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': 'Scope Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': 'Change Amount',
  'action.cmdApproveChangeOrderDecision.success': 'Aprovar a ordem de mudança: OK',
  'action.cmdApproveChangeOrderDecision.error': 'Aprovar a ordem de mudança: falhou',
  'action.cmdHandoffApprovedChangeOrderToBilling.success': 'Encaminhar a alteração aprovada ao faturamento: OK',
  'action.cmdHandoffApprovedChangeOrderToBilling.error': 'Encaminhar a alteração aprovada ao faturamento: falhou',
  'section.approveChangeOrder.change-order-workspace.title': 'Revisar e decidir ordem de mudança',
  'section.approveChangeOrder.billing-handoff.title': 'Encaminhar aprovação ao faturamento',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.approveChangeOrder.status',
  'ui.approveChangeOrder.action.qryLocateChangeOrder.status',
  'ui.approveChangeOrder.data.qryLocateChangeOrder',
  'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status',
  'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId',
  'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId',
  'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId',
  'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status',
  'ui.approveChangeOrder.output.cmdApproveChangeOrderDecision',
  'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error',
  'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status',
  'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId',
  'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description',
  'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact',
  'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact',
  'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount',
  'ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling',
  'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error',
  'ui.approveChangeOrder.action.qryClientPicker.status',
  'ui.approveChangeOrder.data.qryClientPicker',
];

export class BuildFlowFsmApproveChangeOrderBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateChangeOrderData — queryResult, outputShape: array */
  @property() qryLocateChangeOrderData: QryLocateChangeOrderOutput[] = [];
  /** state cmdApproveChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() cmdApproveChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdApproveChangeOrderDecisionChangeOrderChangeOrderId — input */
  @property() cmdApproveChangeOrderDecisionChangeOrderChangeOrderId: string = '';
  /** state cmdApproveChangeOrderDecisionClientClientId — input */
  @property() cmdApproveChangeOrderDecisionClientClientId: string = '';
  /** state cmdApproveChangeOrderDecisionProjectProjectId — input */
  @property() cmdApproveChangeOrderDecisionProjectProjectId: string = '';
  /** state cmdApproveChangeOrderDecisionStatus — input */
  @property() cmdApproveChangeOrderDecisionStatus: string = '';
  /** state cmdApproveChangeOrderDecisionOutput — commandOutput */
  @property() cmdApproveChangeOrderDecisionOutput: CmdApproveChangeOrderDecisionOutput | null = null;
  /** state cmdApproveChangeOrderDecisionError — actionError */
  @property() cmdApproveChangeOrderDecisionError: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffApprovedChangeOrderToBillingState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId — input */
  @property() cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingDescription — input */
  @property() cmdHandoffApprovedChangeOrderToBillingDescription: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingScopeImpact — input */
  @property() cmdHandoffApprovedChangeOrderToBillingScopeImpact: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingScheduleImpact — input */
  @property() cmdHandoffApprovedChangeOrderToBillingScheduleImpact: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingChangeAmount — input */
  @property() cmdHandoffApprovedChangeOrderToBillingChangeAmount: string = '';
  /** state cmdHandoffApprovedChangeOrderToBillingOutput — commandOutput */
  @property() cmdHandoffApprovedChangeOrderToBillingOutput: CmdHandoffApprovedChangeOrderToBillingOutput | null = null;
  /** state cmdHandoffApprovedChangeOrderToBillingError — actionError */
  @property() cmdHandoffApprovedChangeOrderToBillingError: string = '';
  /** state qryClientPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryClientPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientPickerData — queryResult, outputShape: array */
  @property() qryClientPickerData: QryClientPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.approveChangeOrder.status', '');
    this.initStateValue('ui.approveChangeOrder.action.qryLocateChangeOrder.status', 'idle');
    this.initStateValue('ui.approveChangeOrder.data.qryLocateChangeOrder', []);
    this.initStateValue('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status', '');
    this.initStateValue('ui.approveChangeOrder.output.cmdApproveChangeOrderDecision', null);
    this.initStateValue('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error', '');
    this.initStateValue('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'idle');
    this.initStateValue('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact', '');
    this.initStateValue('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount', '');
    this.initStateValue('ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling', null);
    this.initStateValue('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error', '');
    this.initStateValue('ui.approveChangeOrder.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.approveChangeOrder.data.qryClientPicker', []);
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
      case 'ui.approveChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status':
        this.cmdApproveChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId':
        this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId':
        this.cmdApproveChangeOrderDecisionClientClientId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId':
        this.cmdApproveChangeOrderDecisionProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status':
        this.cmdApproveChangeOrderDecisionStatus = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.output.cmdApproveChangeOrderDecision':
        this.cmdApproveChangeOrderDecisionOutput = (value as CmdApproveChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error':
        this.cmdApproveChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status':
        this.cmdHandoffApprovedChangeOrderToBillingState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId':
        this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description':
        this.cmdHandoffApprovedChangeOrderToBillingDescription = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact':
        this.cmdHandoffApprovedChangeOrderToBillingScopeImpact = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact':
        this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount':
        this.cmdHandoffApprovedChangeOrderToBillingChangeAmount = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling':
        this.cmdHandoffApprovedChangeOrderToBillingOutput = (value as CmdHandoffApprovedChangeOrderToBillingOutput | null) ?? null;
        break;
      case 'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error':
        this.cmdHandoffApprovedChangeOrderToBillingError = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.data.qryClientPicker':
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
      case 'ui.approveChangeOrder.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status':
        this.cmdApproveChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId':
        this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId':
        this.cmdApproveChangeOrderDecisionClientClientId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId':
        this.cmdApproveChangeOrderDecisionProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status':
        this.cmdApproveChangeOrderDecisionStatus = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.output.cmdApproveChangeOrderDecision':
        this.cmdApproveChangeOrderDecisionOutput = (value as CmdApproveChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error':
        this.cmdApproveChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status':
        this.cmdHandoffApprovedChangeOrderToBillingState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId':
        this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description':
        this.cmdHandoffApprovedChangeOrderToBillingDescription = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact':
        this.cmdHandoffApprovedChangeOrderToBillingScopeImpact = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact':
        this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount':
        this.cmdHandoffApprovedChangeOrderToBillingChangeAmount = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling':
        this.cmdHandoffApprovedChangeOrderToBillingOutput = (value as CmdHandoffApprovedChangeOrderToBillingOutput | null) ?? null;
        break;
      case 'ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error':
        this.cmdHandoffApprovedChangeOrderToBillingError = (value as string) ?? '';
        break;
      case 'ui.approveChangeOrder.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.approveChangeOrder.data.qryClientPicker':
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
      /^\/buildFlowFsm\/approveChangeOrder(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdApproveChangeOrderDecisionProjectProjectId) {
        this.cmdApproveChangeOrderDecisionProjectProjectId = projectProjectId;
        setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId', projectProjectId);
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

  /** action qryLocateChangeOrder (query) — route buildFlowFsm.approveChangeOrder.qryLocateChangeOrder; inputs: (none); writes ui.approveChangeOrder.data.qryLocateChangeOrder; status ui.approveChangeOrder.action.qryLocateChangeOrder.status */
  async loadQryLocateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateChangeOrderState = 'loading';
    setState('ui.approveChangeOrder.action.qryLocateChangeOrder.status', 'loading');
    const params: QryLocateChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateChangeOrderOutput[]>(qryLocateChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateChangeOrderData = data;
      setState('ui.approveChangeOrder.data.qryLocateChangeOrder', data);
      this.qryLocateChangeOrderState = 'success';
      setState('ui.approveChangeOrder.action.qryLocateChangeOrder.status', 'success');
    } else {
      this.qryLocateChangeOrderState = 'error';
      setState('ui.approveChangeOrder.action.qryLocateChangeOrder.status', 'error');
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

  /** action cmdApproveChangeOrderDecision (command) — route buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision; inputs: changeOrderChangeOrderId, clientClientId, projectProjectId, status; writes ui.approveChangeOrder.output.cmdApproveChangeOrderDecision; status ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status; feedback keys action.cmdApproveChangeOrderDecision.success / action.cmdApproveChangeOrderDecision.error */
  async cmdApproveChangeOrderDecision(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdApproveChangeOrderDecisionProjectProjectId) {
      this.cmdApproveChangeOrderDecisionState = 'idle';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId) {
      this.cmdApproveChangeOrderDecisionState = 'idle';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdApproveChangeOrderDecisionClientClientId) {
      this.cmdApproveChangeOrderDecisionState = 'idle';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdApproveChangeOrderDecisionState = 'loading';
    setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'loading');
    this.cmdApproveChangeOrderDecisionError = '';
    setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error', '');
    const params: CmdApproveChangeOrderDecisionInput = {
      changeOrderChangeOrderId: this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId,
      clientClientId: this.cmdApproveChangeOrderDecisionClientClientId,
      projectProjectId: this.cmdApproveChangeOrderDecisionProjectProjectId,
      status: this.cmdApproveChangeOrderDecisionStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdApproveChangeOrderDecisionOutput>(cmdApproveChangeOrderDecisionRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdApproveChangeOrderDecision.error');
      this.cmdApproveChangeOrderDecisionError = errMsg;
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error', errMsg);
      this.cmdApproveChangeOrderDecisionState = 'error';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdApproveChangeOrderDecisionOutput | null = response.data ?? null;
    this.cmdApproveChangeOrderDecisionOutput = data;
    setState('ui.approveChangeOrder.output.cmdApproveChangeOrderDecision', data);
    try {
      await this.loadQryLocateChangeOrder();
      if (this.qryLocateChangeOrderState === 'error') {
        this.cmdApproveChangeOrderDecisionState = 'error';
        setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdApproveChangeOrderDecision refresh failed', refreshError);
      this.cmdApproveChangeOrderDecisionState = 'error';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdApproveChangeOrderDecisionState = 'error';
        setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdApproveChangeOrderDecision refresh failed', refreshError);
      this.cmdApproveChangeOrderDecisionState = 'error';
      setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId = '';
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId', '');
    this.cmdApproveChangeOrderDecisionClientClientId = '';
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId', '');
    this.cmdApproveChangeOrderDecisionStatus = '';
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status', '');
    this.cmdApproveChangeOrderDecisionState = 'success';
    setState('ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdApproveChangeOrderDecision — bind UI events here */
  handleCmdApproveChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdApproveChangeOrderDecision();
    });
  }

  /** action cmdHandoffApprovedChangeOrderToBilling (command) — route buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling; inputs: changeOrderChangeOrderId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling; status ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status; feedback keys action.cmdHandoffApprovedChangeOrderToBilling.success / action.cmdHandoffApprovedChangeOrderToBilling.error */
  async cmdHandoffApprovedChangeOrderToBilling(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId) {
      this.cmdHandoffApprovedChangeOrderToBillingState = 'idle';
      setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffApprovedChangeOrderToBillingState = 'loading';
    setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'loading');
    this.cmdHandoffApprovedChangeOrderToBillingError = '';
    setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error', '');
    const changeAmountNum = Number(this.cmdHandoffApprovedChangeOrderToBillingChangeAmount);
    const params: CmdHandoffApprovedChangeOrderToBillingInput = {
      changeOrderChangeOrderId: this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId,
      description: this.cmdHandoffApprovedChangeOrderToBillingDescription,
      scopeImpact: this.cmdHandoffApprovedChangeOrderToBillingScopeImpact,
      scheduleImpact: this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffApprovedChangeOrderToBillingOutput>(cmdHandoffApprovedChangeOrderToBillingRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffApprovedChangeOrderToBilling.error');
      this.cmdHandoffApprovedChangeOrderToBillingError = errMsg;
      setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error', errMsg);
      this.cmdHandoffApprovedChangeOrderToBillingState = 'error';
      setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffApprovedChangeOrderToBillingOutput | null = response.data ?? null;
    this.cmdHandoffApprovedChangeOrderToBillingOutput = data;
    setState('ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling', data);
    try {
      await this.loadQryLocateChangeOrder();
      if (this.qryLocateChangeOrderState === 'error') {
        this.cmdHandoffApprovedChangeOrderToBillingState = 'error';
        setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffApprovedChangeOrderToBilling refresh failed', refreshError);
      this.cmdHandoffApprovedChangeOrderToBillingState = 'error';
      setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdHandoffApprovedChangeOrderToBillingState = 'error';
        setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffApprovedChangeOrderToBilling refresh failed', refreshError);
      this.cmdHandoffApprovedChangeOrderToBillingState = 'error';
      setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = '';
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId', '');
    this.cmdHandoffApprovedChangeOrderToBillingDescription = '';
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description', '');
    this.cmdHandoffApprovedChangeOrderToBillingScopeImpact = '';
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact', '');
    this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact = '';
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact', '');
    this.cmdHandoffApprovedChangeOrderToBillingChangeAmount = '';
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount', '');
    this.cmdHandoffApprovedChangeOrderToBillingState = 'success';
    setState('ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffApprovedChangeOrderToBilling — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffApprovedChangeOrderToBilling();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.approveChangeOrder.qryClientPicker; inputs: (none); writes ui.approveChangeOrder.data.qryClientPicker; status ui.approveChangeOrder.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryClientPickerState = 'loading';
    setState('ui.approveChangeOrder.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.approveChangeOrder.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.approveChangeOrder.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.approveChangeOrder.action.qryClientPicker.status', 'error');
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

  /** setter for state ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId */
  setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId(value: string): void {
    this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId = value;
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId — bind UI events here */
  handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId */
  setCmdApproveChangeOrderDecisionClientClientId(value: string): void {
    this.cmdApproveChangeOrderDecisionClientClientId = value;
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdApproveChangeOrderDecisionClientClientId — bind UI events here */
  handleCmdApproveChangeOrderDecisionClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdApproveChangeOrderDecisionClientClientId(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId */
  setCmdApproveChangeOrderDecisionProjectProjectId(value: string): void {
    this.cmdApproveChangeOrderDecisionProjectProjectId = value;
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdApproveChangeOrderDecisionProjectProjectId — bind UI events here */
  handleCmdApproveChangeOrderDecisionProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdApproveChangeOrderDecisionProjectProjectId(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status */
  setCmdApproveChangeOrderDecisionStatus(value: string): void {
    this.cmdApproveChangeOrderDecisionStatus = value;
    setState('ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdApproveChangeOrderDecisionStatus — bind UI events here */
  handleCmdApproveChangeOrderDecisionStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdApproveChangeOrderDecisionStatus(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId */
  setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId(value: string): void {
    this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId = value;
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description */
  setCmdHandoffApprovedChangeOrderToBillingDescription(value: string): void {
    this.cmdHandoffApprovedChangeOrderToBillingDescription = value;
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffApprovedChangeOrderToBillingDescription — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffApprovedChangeOrderToBillingDescription(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact */
  setCmdHandoffApprovedChangeOrderToBillingScopeImpact(value: string): void {
    this.cmdHandoffApprovedChangeOrderToBillingScopeImpact = value;
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffApprovedChangeOrderToBillingScopeImpact — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffApprovedChangeOrderToBillingScopeImpact(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact */
  setCmdHandoffApprovedChangeOrderToBillingScheduleImpact(value: string): void {
    this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact = value;
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffApprovedChangeOrderToBillingScheduleImpact — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffApprovedChangeOrderToBillingScheduleImpact(value);
  }

  /** setter for state ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount */
  setCmdHandoffApprovedChangeOrderToBillingChangeAmount(value: string): void {
    this.cmdHandoffApprovedChangeOrderToBillingChangeAmount = value;
    setState('ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffApprovedChangeOrderToBillingChangeAmount — bind UI events here */
  handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffApprovedChangeOrderToBillingChangeAmount(value);
  }
}
