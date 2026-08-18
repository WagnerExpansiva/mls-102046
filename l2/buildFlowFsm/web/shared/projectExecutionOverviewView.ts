/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryProjectExecutionOverviewViewInput,
  QryProjectExecutionOverviewViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.js';
import {
  qryProjectExecutionOverviewViewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.js';

export type {
  QryProjectExecutionOverviewViewInput,
  QryProjectExecutionOverviewViewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectExecutionOverviewView.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectExecutionOverviewView.overview.title': 'Visão consolidada da execução',
  'organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectExecutionOverviewView.overview.title': 'Visão consolidada da execução',
  'organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
};
const message_en: MessageType = {
  'section.projectExecutionOverviewView.overview.title': 'Visão consolidada da execução',
  'organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
};
const message_es: MessageType = {
  'section.projectExecutionOverviewView.overview.title': 'Visão consolidada da execução',
  'organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectExecutionOverviewView.status',
  'ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status',
  'ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId',
  'ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView',
];

export class BuildFlowFsmProjectExecutionOverviewViewBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryProjectExecutionOverviewViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectExecutionOverviewViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId — input */
  @property() qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId: string = '';
  /** state qryProjectExecutionOverviewViewData — queryResult, outputShape: object */
  @property() qryProjectExecutionOverviewViewData: QryProjectExecutionOverviewViewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectExecutionOverviewView.status', '');
    this.initStateValue('ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status', 'idle');
    this.initStateValue('ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectExecutionOverviewView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status':
        this.qryProjectExecutionOverviewViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId':
        this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView':
        this.qryProjectExecutionOverviewViewData = (value as QryProjectExecutionOverviewViewOutput | null) ?? null;
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
      case 'ui.projectExecutionOverviewView.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status':
        this.qryProjectExecutionOverviewViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId':
        this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView':
        this.qryProjectExecutionOverviewViewData = (value as QryProjectExecutionOverviewViewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryProjectExecutionOverviewView (query) — route buildFlowFsm.projectExecutionOverviewView.qryProjectExecutionOverviewView; inputs: projectExecutionOverviewProjectId; writes ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView; status ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status */
  async loadQryProjectExecutionOverviewView(): Promise<void> {
    if (!this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId) {
      this.qryProjectExecutionOverviewViewState = 'idle';
      setState('ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryProjectExecutionOverviewViewState = 'loading';
    setState('ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status', 'loading');
    const params: QryProjectExecutionOverviewViewInput = {
      projectExecutionOverviewProjectId: this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectExecutionOverviewViewOutput>(qryProjectExecutionOverviewViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectExecutionOverviewViewData = data;
      setState('ui.projectExecutionOverviewView.data.qryProjectExecutionOverviewView', data);
      this.qryProjectExecutionOverviewViewState = 'success';
      setState('ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status', 'success');
    } else {
      this.qryProjectExecutionOverviewViewState = 'error';
      setState('ui.projectExecutionOverviewView.action.qryProjectExecutionOverviewView.status', 'error');
      if (response.error) {
        console.error('qryProjectExecutionOverviewView failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryProjectExecutionOverviewView — bind UI events here */
  handleQryProjectExecutionOverviewViewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryProjectExecutionOverviewView();
  }

  /** setter for state ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId */
  setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(value: string): void {
    this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = value;
    setState('ui.projectExecutionOverviewView.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId — bind UI events here */
  handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(value);
  }
}
