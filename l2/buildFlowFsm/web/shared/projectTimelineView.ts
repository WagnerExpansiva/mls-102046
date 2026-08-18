/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryProjectTimelineViewInput,
  QryProjectTimelineViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.js';
import {
  qryProjectTimelineViewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.js';

export type {
  QryProjectTimelineViewInput,
  QryProjectTimelineViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectTimelineView.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectTimelineView.overview.title': 'Visão geral do cronograma',
  'organism.projectTimelineView.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectTimelineView.overview.title': 'Visão geral do cronograma',
  'organism.projectTimelineView.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
};
const message_en: MessageType = {
  'section.projectTimelineView.overview.title': 'Visão geral do cronograma',
  'organism.projectTimelineView.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
};
const message_es: MessageType = {
  'section.projectTimelineView.overview.title': 'Visão geral do cronograma',
  'organism.projectTimelineView.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectTimelineView.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectTimelineView.status',
  'ui.projectTimelineView.action.qryProjectTimelineView.status',
  'ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId',
  'ui.projectTimelineView.data.qryProjectTimelineView',
];

export class BuildFlowFsmProjectTimelineViewBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryProjectTimelineViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectTimelineViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectTimelineViewProjectTimelineProjectId — input */
  @property() qryProjectTimelineViewProjectTimelineProjectId: string = '';
  /** state qryProjectTimelineViewData — queryResult, outputShape: object */
  @property() qryProjectTimelineViewData: QryProjectTimelineViewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectTimelineView.status', '');
    this.initStateValue('ui.projectTimelineView.action.qryProjectTimelineView.status', 'idle');
    this.initStateValue('ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId', '');
    this.initStateValue('ui.projectTimelineView.data.qryProjectTimelineView', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectTimelineView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectTimelineView.action.qryProjectTimelineView.status':
        this.qryProjectTimelineViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId':
        this.qryProjectTimelineViewProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.projectTimelineView.data.qryProjectTimelineView':
        this.qryProjectTimelineViewData = (value as QryProjectTimelineViewOutput | null) ?? null;
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
      case 'ui.projectTimelineView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectTimelineView.action.qryProjectTimelineView.status':
        this.qryProjectTimelineViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId':
        this.qryProjectTimelineViewProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.projectTimelineView.data.qryProjectTimelineView':
        this.qryProjectTimelineViewData = (value as QryProjectTimelineViewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryProjectTimelineView (query) — route buildFlowFsm.projectTimelineView.qryProjectTimelineView; inputs: projectTimelineProjectId; writes ui.projectTimelineView.data.qryProjectTimelineView; status ui.projectTimelineView.action.qryProjectTimelineView.status */
  async loadQryProjectTimelineView(): Promise<void> {
    if (!this.qryProjectTimelineViewProjectTimelineProjectId) {
      this.qryProjectTimelineViewState = 'idle';
      setState('ui.projectTimelineView.action.qryProjectTimelineView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryProjectTimelineViewState = 'loading';
    setState('ui.projectTimelineView.action.qryProjectTimelineView.status', 'loading');
    const params: QryProjectTimelineViewInput = {
      projectTimelineProjectId: this.qryProjectTimelineViewProjectTimelineProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectTimelineViewOutput>(qryProjectTimelineViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectTimelineViewData = data;
      setState('ui.projectTimelineView.data.qryProjectTimelineView', data);
      this.qryProjectTimelineViewState = 'success';
      setState('ui.projectTimelineView.action.qryProjectTimelineView.status', 'success');
    } else {
      this.qryProjectTimelineViewState = 'error';
      setState('ui.projectTimelineView.action.qryProjectTimelineView.status', 'error');
      if (response.error) {
        console.error('qryProjectTimelineView failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryProjectTimelineView — bind UI events here */
  handleQryProjectTimelineViewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryProjectTimelineView();
  }

  /** setter for state ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId */
  setQryProjectTimelineViewProjectTimelineProjectId(value: string): void {
    this.qryProjectTimelineViewProjectTimelineProjectId = value;
    setState('ui.projectTimelineView.input.qryProjectTimelineView.projectTimelineProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryProjectTimelineViewProjectTimelineProjectId — bind UI events here */
  handleQryProjectTimelineViewProjectTimelineProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryProjectTimelineViewProjectTimelineProjectId(value);
  }
}
