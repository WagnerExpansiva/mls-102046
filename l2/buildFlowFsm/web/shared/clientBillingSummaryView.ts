/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryClientBillingSummaryViewInput,
  QryClientBillingSummaryViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.js';
import {
  qryClientBillingSummaryViewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.js';

export type {
  QryClientBillingSummaryViewInput,
  QryClientBillingSummaryViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.js';

/// **collab_i18n_start**
const message_pt = {
  'section.clientBillingSummaryView.overview.title': 'Resumo de faturamento',
  'organism.clientBillingSummaryView.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.clientBillingSummaryView.overview.title': 'Resumo de faturamento',
  'organism.clientBillingSummaryView.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
};
const message_en: MessageType = {
  'section.clientBillingSummaryView.overview.title': 'Resumo de faturamento',
  'organism.clientBillingSummaryView.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
};
const message_es: MessageType = {
  'section.clientBillingSummaryView.overview.title': 'Resumo de faturamento',
  'organism.clientBillingSummaryView.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.clientBillingSummaryView.status',
  'ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status',
  'ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId',
  'ui.clientBillingSummaryView.data.qryClientBillingSummaryView',
];

export class BuildFlowFsmClientBillingSummaryViewBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryClientBillingSummaryViewState — actionStatus, values: idle|loading|success|error */
  @property() qryClientBillingSummaryViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientBillingSummaryViewClientBillingSummaryClientId — input */
  @property() qryClientBillingSummaryViewClientBillingSummaryClientId: string = '';
  /** state qryClientBillingSummaryViewData — queryResult, outputShape: object */
  @property() qryClientBillingSummaryViewData: QryClientBillingSummaryViewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.clientBillingSummaryView.status', '');
    this.initStateValue('ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status', 'idle');
    this.initStateValue('ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId', '');
    this.initStateValue('ui.clientBillingSummaryView.data.qryClientBillingSummaryView', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientBillingSummaryView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status':
        this.qryClientBillingSummaryViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId':
        this.qryClientBillingSummaryViewClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingSummaryView.data.qryClientBillingSummaryView':
        this.qryClientBillingSummaryViewData = (value as QryClientBillingSummaryViewOutput | null) ?? null;
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
      case 'ui.clientBillingSummaryView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status':
        this.qryClientBillingSummaryViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId':
        this.qryClientBillingSummaryViewClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingSummaryView.data.qryClientBillingSummaryView':
        this.qryClientBillingSummaryViewData = (value as QryClientBillingSummaryViewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryClientBillingSummaryView (query) — route buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView; inputs: clientBillingSummaryClientId; writes ui.clientBillingSummaryView.data.qryClientBillingSummaryView; status ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status */
  async loadQryClientBillingSummaryView(): Promise<void> {
    if (!this.qryClientBillingSummaryViewClientBillingSummaryClientId) {
      this.qryClientBillingSummaryViewState = 'idle';
      setState('ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryClientBillingSummaryViewState = 'loading';
    setState('ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status', 'loading');
    const params: QryClientBillingSummaryViewInput = {
      clientBillingSummaryClientId: this.qryClientBillingSummaryViewClientBillingSummaryClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientBillingSummaryViewOutput>(qryClientBillingSummaryViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryClientBillingSummaryViewData = data;
      setState('ui.clientBillingSummaryView.data.qryClientBillingSummaryView', data);
      this.qryClientBillingSummaryViewState = 'success';
      setState('ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status', 'success');
    } else {
      this.qryClientBillingSummaryViewState = 'error';
      setState('ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status', 'error');
      if (response.error) {
        console.error('qryClientBillingSummaryView failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryClientBillingSummaryView — bind UI events here */
  handleQryClientBillingSummaryViewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryClientBillingSummaryView();
  }

  /** setter for state ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId */
  setQryClientBillingSummaryViewClientBillingSummaryClientId(value: string): void {
    this.qryClientBillingSummaryViewClientBillingSummaryClientId = value;
    setState('ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryClientBillingSummaryViewClientBillingSummaryClientId — bind UI events here */
  handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryClientBillingSummaryViewClientBillingSummaryClientId(value);
  }
}
