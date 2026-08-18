/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryScheduleRiskAssessmentViewInput,
  QryScheduleRiskAssessmentViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.js';
import {
  qryScheduleRiskAssessmentViewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.js';

export type {
  QryScheduleRiskAssessmentViewInput,
  QryScheduleRiskAssessmentViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/scheduleRiskAssessmentView.js';

/// **collab_i18n_start**
const message_pt = {
  'section.scheduleRiskAssessmentView.overview.title': 'Tarefas em risco',
  'organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.scheduleRiskAssessmentView.overview.title': 'Tarefas em risco',
  'organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
};
const message_en: MessageType = {
  'section.scheduleRiskAssessmentView.overview.title': 'Tarefas em risco',
  'organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
};
const message_es: MessageType = {
  'section.scheduleRiskAssessmentView.overview.title': 'Tarefas em risco',
  'organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.scheduleRiskAssessmentView.status',
  'ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status',
  'ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId',
  'ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView',
];

export class BuildFlowFsmScheduleRiskAssessmentViewBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryScheduleRiskAssessmentViewState — actionStatus, values: idle|loading|success|error */
  @property() qryScheduleRiskAssessmentViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId — input */
  @property() qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId: string = '';
  /** state qryScheduleRiskAssessmentViewData — queryResult, outputShape: object */
  @property() qryScheduleRiskAssessmentViewData: QryScheduleRiskAssessmentViewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.scheduleRiskAssessmentView.status', '');
    this.initStateValue('ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status', 'idle');
    this.initStateValue('ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId', '');
    this.initStateValue('ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.scheduleRiskAssessmentView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status':
        this.qryScheduleRiskAssessmentViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId':
        this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView':
        this.qryScheduleRiskAssessmentViewData = (value as QryScheduleRiskAssessmentViewOutput | null) ?? null;
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
      case 'ui.scheduleRiskAssessmentView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status':
        this.qryScheduleRiskAssessmentViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId':
        this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView':
        this.qryScheduleRiskAssessmentViewData = (value as QryScheduleRiskAssessmentViewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryScheduleRiskAssessmentView (query) — route buildFlowFsm.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView; inputs: scheduleRiskAssessmentProjectId; writes ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView; status ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status */
  async loadQryScheduleRiskAssessmentView(): Promise<void> {
    if (!this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId) {
      this.qryScheduleRiskAssessmentViewState = 'idle';
      setState('ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryScheduleRiskAssessmentViewState = 'loading';
    setState('ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status', 'loading');
    const params: QryScheduleRiskAssessmentViewInput = {
      scheduleRiskAssessmentProjectId: this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryScheduleRiskAssessmentViewOutput>(qryScheduleRiskAssessmentViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryScheduleRiskAssessmentViewData = data;
      setState('ui.scheduleRiskAssessmentView.data.qryScheduleRiskAssessmentView', data);
      this.qryScheduleRiskAssessmentViewState = 'success';
      setState('ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status', 'success');
    } else {
      this.qryScheduleRiskAssessmentViewState = 'error';
      setState('ui.scheduleRiskAssessmentView.action.qryScheduleRiskAssessmentView.status', 'error');
      if (response.error) {
        console.error('qryScheduleRiskAssessmentView failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryScheduleRiskAssessmentView — bind UI events here */
  handleQryScheduleRiskAssessmentViewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryScheduleRiskAssessmentView();
  }

  /** setter for state ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId */
  setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(value: string): void {
    this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = value;
    setState('ui.scheduleRiskAssessmentView.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId — bind UI events here */
  handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(value);
  }
}
