/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdHandoffChangeOrderToClientInput,
  CmdHandoffChangeOrderToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.js';
import {
  qryLocateChangeOrderRoute,
  cmdHandoffChangeOrderToClientRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.js';

export type {
  QryLocateChangeOrderInput,
  QryLocateChangeOrderOutput,
  CmdHandoffChangeOrderToClientInput,
  CmdHandoffChangeOrderToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.js';

/// **collab_i18n_start**
const message_pt = {
  'section.forwardChangeOrderForClientApproval.locateChangeOrder.title': 'Localizar ordem de mudança',
  'organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title': 'Encaminhar para aprovação do cliente',
  'organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label': 'Change Amount',
  'action.cmdHandoffChangeOrderToClient.success': 'Solicitar aprovação do cliente: OK',
  'action.cmdHandoffChangeOrderToClient.error': 'Solicitar aprovação do cliente: falhou',
  'section.forwardChangeOrderForClientApproval.change-order-workspace.title': 'Ordem de mudança para encaminhamento',
  'section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title': 'Ordem de mudança para aprovação',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.forwardChangeOrderForClientApproval.locateChangeOrder.title': 'Localizar ordem de mudança',
  'organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title': 'Encaminhar para aprovação do cliente',
  'organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label': 'Change Amount',
  'action.cmdHandoffChangeOrderToClient.success': 'Solicitar aprovação do cliente: OK',
  'action.cmdHandoffChangeOrderToClient.error': 'Solicitar aprovação do cliente: falhou',
  'section.forwardChangeOrderForClientApproval.change-order-workspace.title': 'Ordem de mudança para encaminhamento',
  'section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title': 'Ordem de mudança para aprovação',
};
const message_en: MessageType = {
  'section.forwardChangeOrderForClientApproval.locateChangeOrder.title': 'Localizar ordem de mudança',
  'organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title': 'Encaminhar para aprovação do cliente',
  'organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label': 'Change Amount',
  'action.cmdHandoffChangeOrderToClient.success': 'Solicitar aprovação do cliente: OK',
  'action.cmdHandoffChangeOrderToClient.error': 'Solicitar aprovação do cliente: falhou',
  'section.forwardChangeOrderForClientApproval.change-order-workspace.title': 'Ordem de mudança para encaminhamento',
  'section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title': 'Ordem de mudança para aprovação',
};
const message_es: MessageType = {
  'section.forwardChangeOrderForClientApproval.locateChangeOrder.title': 'Localizar ordem de mudança',
  'organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title': 'Localizar a ordem de mudança submetida',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title': 'Encaminhar para aprovação do cliente',
  'organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient': 'Solicitar aprovação do cliente',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label': 'Description',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label': 'Scope Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label': 'Change Amount',
  'action.cmdHandoffChangeOrderToClient.success': 'Solicitar aprovação do cliente: OK',
  'action.cmdHandoffChangeOrderToClient.error': 'Solicitar aprovação do cliente: falhou',
  'section.forwardChangeOrderForClientApproval.change-order-workspace.title': 'Ordem de mudança para encaminhamento',
  'section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title': 'Ordem de mudança para aprovação',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.forwardChangeOrderForClientApproval.status',
  'ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status',
  'ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder',
  'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status',
  'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId',
  'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description',
  'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact',
  'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact',
  'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount',
  'ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient',
  'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error',
];

export class BuildFlowFsmForwardChangeOrderForClientApprovalBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateChangeOrderData — queryResult, outputShape: array */
  @property() qryLocateChangeOrderData: QryLocateChangeOrderOutput[] = [];
  /** state cmdHandoffChangeOrderToClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffChangeOrderToClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffChangeOrderToClientChangeOrderChangeOrderId — input */
  @property() cmdHandoffChangeOrderToClientChangeOrderChangeOrderId: string = '';
  /** state cmdHandoffChangeOrderToClientDescription — input */
  @property() cmdHandoffChangeOrderToClientDescription: string = '';
  /** state cmdHandoffChangeOrderToClientScopeImpact — input */
  @property() cmdHandoffChangeOrderToClientScopeImpact: string = '';
  /** state cmdHandoffChangeOrderToClientScheduleImpact — input */
  @property() cmdHandoffChangeOrderToClientScheduleImpact: string = '';
  /** state cmdHandoffChangeOrderToClientChangeAmount — input */
  @property() cmdHandoffChangeOrderToClientChangeAmount: string = '';
  /** state cmdHandoffChangeOrderToClientOutput — commandOutput */
  @property() cmdHandoffChangeOrderToClientOutput: CmdHandoffChangeOrderToClientOutput | null = null;
  /** state cmdHandoffChangeOrderToClientError — actionError */
  @property() cmdHandoffChangeOrderToClientError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.forwardChangeOrderForClientApproval.status', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status', 'idle');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder', []);
    this.initStateValue('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'idle');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount', '');
    this.initStateValue('ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient', null);
    this.initStateValue('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateChangeOrder();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.forwardChangeOrderForClientApproval.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status':
        this.cmdHandoffChangeOrderToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId':
        this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description':
        this.cmdHandoffChangeOrderToClientDescription = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact':
        this.cmdHandoffChangeOrderToClientScopeImpact = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact':
        this.cmdHandoffChangeOrderToClientScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount':
        this.cmdHandoffChangeOrderToClientChangeAmount = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient':
        this.cmdHandoffChangeOrderToClientOutput = (value as CmdHandoffChangeOrderToClientOutput | null) ?? null;
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error':
        this.cmdHandoffChangeOrderToClientError = (value as string) ?? '';
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
      case 'ui.forwardChangeOrderForClientApproval.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status':
        this.qryLocateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder':
        this.qryLocateChangeOrderData = (value as QryLocateChangeOrderOutput[]) ?? [];
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status':
        this.cmdHandoffChangeOrderToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId':
        this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description':
        this.cmdHandoffChangeOrderToClientDescription = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact':
        this.cmdHandoffChangeOrderToClientScopeImpact = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact':
        this.cmdHandoffChangeOrderToClientScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount':
        this.cmdHandoffChangeOrderToClientChangeAmount = (value as string) ?? '';
        break;
      case 'ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient':
        this.cmdHandoffChangeOrderToClientOutput = (value as CmdHandoffChangeOrderToClientOutput | null) ?? null;
        break;
      case 'ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error':
        this.cmdHandoffChangeOrderToClientError = (value as string) ?? '';
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

  /** action qryLocateChangeOrder (query) — route buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder; inputs: (none); writes ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder; status ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status */
  async loadQryLocateChangeOrder(): Promise<void> {
    this.qryLocateChangeOrderState = 'loading';
    setState('ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status', 'loading');
    const params: QryLocateChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateChangeOrderOutput[]>(qryLocateChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateChangeOrderData = data;
      setState('ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder', data);
      this.qryLocateChangeOrderState = 'success';
      setState('ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status', 'success');
    } else {
      this.qryLocateChangeOrderState = 'error';
      setState('ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status', 'error');
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

  /** action cmdHandoffChangeOrderToClient (command) — route buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient; inputs: changeOrderChangeOrderId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient; status ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status; feedback keys action.cmdHandoffChangeOrderToClient.success / action.cmdHandoffChangeOrderToClient.error */
  async cmdHandoffChangeOrderToClient(): Promise<void> {
    if (!this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId) {
      this.cmdHandoffChangeOrderToClientState = 'idle';
      setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffChangeOrderToClientState = 'loading';
    setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'loading');
    this.cmdHandoffChangeOrderToClientError = '';
    setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error', '');
    const changeAmountNum = Number(this.cmdHandoffChangeOrderToClientChangeAmount);
    const params: CmdHandoffChangeOrderToClientInput = {
      changeOrderChangeOrderId: this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId,
      description: this.cmdHandoffChangeOrderToClientDescription,
      scopeImpact: this.cmdHandoffChangeOrderToClientScopeImpact,
      scheduleImpact: this.cmdHandoffChangeOrderToClientScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffChangeOrderToClientOutput>(cmdHandoffChangeOrderToClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffChangeOrderToClient.error');
      this.cmdHandoffChangeOrderToClientError = errMsg;
      setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error', errMsg);
      this.cmdHandoffChangeOrderToClientState = 'error';
      setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffChangeOrderToClientOutput | null = response.data ?? null;
    this.cmdHandoffChangeOrderToClientOutput = data;
    setState('ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient', data);
    try {
      await this.loadQryLocateChangeOrder();
      if (this.qryLocateChangeOrderState === 'error') {
        this.cmdHandoffChangeOrderToClientState = 'error';
        setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffChangeOrderToClient refresh failed', refreshError);
      this.cmdHandoffChangeOrderToClientState = 'error';
      setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId = '';
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId', '');
    this.cmdHandoffChangeOrderToClientDescription = '';
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description', '');
    this.cmdHandoffChangeOrderToClientScopeImpact = '';
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact', '');
    this.cmdHandoffChangeOrderToClientScheduleImpact = '';
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact', '');
    this.cmdHandoffChangeOrderToClientChangeAmount = '';
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount', '');
    this.cmdHandoffChangeOrderToClientState = 'success';
    setState('ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffChangeOrderToClient — bind UI events here */
  handleCmdHandoffChangeOrderToClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffChangeOrderToClient();
    });
  }

  /** setter for state ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId */
  setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(value: string): void {
    this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId = value;
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId — bind UI events here */
  handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description */
  setCmdHandoffChangeOrderToClientDescription(value: string): void {
    this.cmdHandoffChangeOrderToClientDescription = value;
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToClientDescription — bind UI events here */
  handleCmdHandoffChangeOrderToClientDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToClientDescription(value);
  }

  /** setter for state ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact */
  setCmdHandoffChangeOrderToClientScopeImpact(value: string): void {
    this.cmdHandoffChangeOrderToClientScopeImpact = value;
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToClientScopeImpact — bind UI events here */
  handleCmdHandoffChangeOrderToClientScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToClientScopeImpact(value);
  }

  /** setter for state ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact */
  setCmdHandoffChangeOrderToClientScheduleImpact(value: string): void {
    this.cmdHandoffChangeOrderToClientScheduleImpact = value;
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToClientScheduleImpact — bind UI events here */
  handleCmdHandoffChangeOrderToClientScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToClientScheduleImpact(value);
  }

  /** setter for state ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount */
  setCmdHandoffChangeOrderToClientChangeAmount(value: string): void {
    this.cmdHandoffChangeOrderToClientChangeAmount = value;
    setState('ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffChangeOrderToClientChangeAmount — bind UI events here */
  handleCmdHandoffChangeOrderToClientChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffChangeOrderToClientChangeAmount(value);
  }
}
