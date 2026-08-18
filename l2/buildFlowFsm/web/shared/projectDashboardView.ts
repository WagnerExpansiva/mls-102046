/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryProjectDashboardViewInput,
  QryProjectDashboardViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.js';
import {
  qryProjectDashboardViewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.js';

export type {
  QryProjectDashboardViewInput,
  QryProjectDashboardViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectDashboardView.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectDashboardView.overview.title': 'Visão geral do portfólio',
  'organism.projectDashboardView.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectDashboardView.overview.title': 'Visão geral do portfólio',
  'organism.projectDashboardView.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
};
const message_en: MessageType = {
  'section.projectDashboardView.overview.title': 'Visão geral do portfólio',
  'organism.projectDashboardView.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
};
const message_es: MessageType = {
  'section.projectDashboardView.overview.title': 'Visão geral do portfólio',
  'organism.projectDashboardView.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectDashboardView.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectDashboardView.status',
  'ui.projectDashboardView.action.qryProjectDashboardView.status',
  'ui.projectDashboardView.data.qryProjectDashboardView',
];

export class BuildFlowFsmProjectDashboardViewBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryProjectDashboardViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectDashboardViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectDashboardViewData — queryResult, outputShape: object */
  @property() qryProjectDashboardViewData: QryProjectDashboardViewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectDashboardView.status', '');
    this.initStateValue('ui.projectDashboardView.action.qryProjectDashboardView.status', 'idle');
    this.initStateValue('ui.projectDashboardView.data.qryProjectDashboardView', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryProjectDashboardView();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectDashboardView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectDashboardView.action.qryProjectDashboardView.status':
        this.qryProjectDashboardViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDashboardView.data.qryProjectDashboardView':
        this.qryProjectDashboardViewData = (value as QryProjectDashboardViewOutput | null) ?? null;
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
      case 'ui.projectDashboardView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectDashboardView.action.qryProjectDashboardView.status':
        this.qryProjectDashboardViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDashboardView.data.qryProjectDashboardView':
        this.qryProjectDashboardViewData = (value as QryProjectDashboardViewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryProjectDashboardView (query) — route buildFlowFsm.projectDashboardView.qryProjectDashboardView; inputs: (none); writes ui.projectDashboardView.data.qryProjectDashboardView; status ui.projectDashboardView.action.qryProjectDashboardView.status */
  async loadQryProjectDashboardView(): Promise<void> {
    this.qryProjectDashboardViewState = 'loading';
    setState('ui.projectDashboardView.action.qryProjectDashboardView.status', 'loading');
    const params: QryProjectDashboardViewInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectDashboardViewOutput>(qryProjectDashboardViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectDashboardViewData = data;
      setState('ui.projectDashboardView.data.qryProjectDashboardView', data);
      this.qryProjectDashboardViewState = 'success';
      setState('ui.projectDashboardView.action.qryProjectDashboardView.status', 'success');
    } else {
      this.qryProjectDashboardViewState = 'error';
      setState('ui.projectDashboardView.action.qryProjectDashboardView.status', 'error');
      if (response.error) {
        console.error('qryProjectDashboardView failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryProjectDashboardView — bind UI events here */
  handleQryProjectDashboardViewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryProjectDashboardView();
  }
}
