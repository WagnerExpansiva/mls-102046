/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectApprovedChangeOrdersInput,
  QryInspectApprovedChangeOrdersOutput,
  QryInspectClientBillingSummaryInput,
  QryInspectClientBillingSummaryOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.js';
import {
  qryLocateProjectRoute,
  qryInspectApprovedChangeOrdersRoute,
  qryInspectClientBillingSummaryRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.js';

export type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectApprovedChangeOrdersInput,
  QryInspectApprovedChangeOrdersOutput,
  QryInspectClientBillingSummaryInput,
  QryInspectClientBillingSummaryOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.js';

/// **collab_i18n_start**
const message_pt = {
  'section.consultApprovedProjectChangeOrders.project-context.title': 'Obra selecionada',
  'organism.consultApprovedProjectChangeOrders.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label': 'Name',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label': 'Address',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label': 'Status',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.consultApprovedProjectChangeOrders.approved-change-orders.title': 'Alterações aprovadas',
  'organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label': 'Change Order Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label': 'Client Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label': 'Project Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label': 'Description',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label': 'Scope Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label': 'Change Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label': 'Submitted At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label': 'Status',
  'section.consultApprovedProjectChangeOrders.billing-summary.title': 'Reflexo no faturamento',
  'organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.consultApprovedProjectChangeOrders.projectAndApprovedChanges.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpact.title': 'Reflexo no faturamento',
  'section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpactSummary.title': 'Reflexo no faturamento',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.consultApprovedProjectChangeOrders.project-context.title': 'Obra selecionada',
  'organism.consultApprovedProjectChangeOrders.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label': 'Name',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label': 'Address',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label': 'Status',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.consultApprovedProjectChangeOrders.approved-change-orders.title': 'Alterações aprovadas',
  'organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label': 'Change Order Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label': 'Client Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label': 'Project Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label': 'Description',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label': 'Scope Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label': 'Change Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label': 'Submitted At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label': 'Status',
  'section.consultApprovedProjectChangeOrders.billing-summary.title': 'Reflexo no faturamento',
  'organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.consultApprovedProjectChangeOrders.projectAndApprovedChanges.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpact.title': 'Reflexo no faturamento',
  'section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpactSummary.title': 'Reflexo no faturamento',
};
const message_en: MessageType = {
  'section.consultApprovedProjectChangeOrders.project-context.title': 'Obra selecionada',
  'organism.consultApprovedProjectChangeOrders.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label': 'Name',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label': 'Address',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label': 'Status',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.consultApprovedProjectChangeOrders.approved-change-orders.title': 'Alterações aprovadas',
  'organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label': 'Change Order Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label': 'Client Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label': 'Project Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label': 'Description',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label': 'Scope Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label': 'Change Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label': 'Submitted At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label': 'Status',
  'section.consultApprovedProjectChangeOrders.billing-summary.title': 'Reflexo no faturamento',
  'organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.consultApprovedProjectChangeOrders.projectAndApprovedChanges.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpact.title': 'Reflexo no faturamento',
  'section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpactSummary.title': 'Reflexo no faturamento',
};
const message_es: MessageType = {
  'section.consultApprovedProjectChangeOrders.project-context.title': 'Obra selecionada',
  'organism.consultApprovedProjectChangeOrders.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label': 'Name',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label': 'Address',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label': 'Status',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.consultApprovedProjectChangeOrders.approved-change-orders.title': 'Alterações aprovadas',
  'organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title': 'Consultar as alterações aprovadas',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label': 'Change Order Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label': 'Client Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label': 'Project Ref',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label': 'Description',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label': 'Scope Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label': 'Change Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label': 'Submitted At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label': 'Status',
  'section.consultApprovedProjectChangeOrders.billing-summary.title': 'Reflexo no faturamento',
  'organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.consultApprovedProjectChangeOrders.projectAndApprovedChanges.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpact.title': 'Reflexo no faturamento',
  'section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title': 'Obra e alterações aprovadas',
  'section.consultApprovedProjectChangeOrders.billingImpactSummary.title': 'Reflexo no faturamento',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.consultApprovedProjectChangeOrders.status',
  'ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status',
  'ui.consultApprovedProjectChangeOrders.data.qryLocateProject',
  'ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status',
  'ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId',
  'ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders',
  'ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status',
  'ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId',
  'ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary',
];

export class BuildFlowFsmConsultApprovedProjectChangeOrdersBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryInspectApprovedChangeOrdersState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectApprovedChangeOrdersState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectApprovedChangeOrdersChangeOrderChangeOrderId — input */
  @property() qryInspectApprovedChangeOrdersChangeOrderChangeOrderId: string = '';
  /** state qryInspectApprovedChangeOrdersData — queryResult, outputShape: object */
  @property() qryInspectApprovedChangeOrdersData: QryInspectApprovedChangeOrdersOutput | null = null;
  /** state qryInspectClientBillingSummaryState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectClientBillingSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectClientBillingSummaryClientBillingSummaryClientId — input */
  @property() qryInspectClientBillingSummaryClientBillingSummaryClientId: string = '';
  /** state qryInspectClientBillingSummaryData — queryResult, outputShape: object */
  @property() qryInspectClientBillingSummaryData: QryInspectClientBillingSummaryOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.consultApprovedProjectChangeOrders.status', '');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.data.qryLocateProject', []);
    this.initStateValue('ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status', 'idle');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId', '');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders', null);
    this.initStateValue('ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status', 'idle');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId', '');
    this.initStateValue('ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary', null);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateProject();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.consultApprovedProjectChangeOrders.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status':
        this.qryInspectApprovedChangeOrdersState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId':
        this.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders':
        this.qryInspectApprovedChangeOrdersData = (value as QryInspectApprovedChangeOrdersOutput | null) ?? null;
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status':
        this.qryInspectClientBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId':
        this.qryInspectClientBillingSummaryClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary':
        this.qryInspectClientBillingSummaryData = (value as QryInspectClientBillingSummaryOutput | null) ?? null;
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
      case 'ui.consultApprovedProjectChangeOrders.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status':
        this.qryInspectApprovedChangeOrdersState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId':
        this.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders':
        this.qryInspectApprovedChangeOrdersData = (value as QryInspectApprovedChangeOrdersOutput | null) ?? null;
        break;
      case 'ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status':
        this.qryInspectClientBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId':
        this.qryInspectClientBillingSummaryClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary':
        this.qryInspectClientBillingSummaryData = (value as QryInspectClientBillingSummaryOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryLocateProject (query) — route buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject; inputs: (none); writes ui.consultApprovedProjectChangeOrders.data.qryLocateProject; status ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.qryLocateProjectState = 'loading';
    setState('ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.consultApprovedProjectChangeOrders.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status', 'error');
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

  /** action qryInspectApprovedChangeOrders (query) — route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders; inputs: changeOrderChangeOrderId; writes ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders; status ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status */
  async loadQryInspectApprovedChangeOrders(): Promise<void> {
    if (!this.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId) {
      this.qryInspectApprovedChangeOrdersState = 'idle';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectApprovedChangeOrdersState = 'loading';
    setState('ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status', 'loading');
    const params: QryInspectApprovedChangeOrdersInput = {
      changeOrderChangeOrderId: this.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectApprovedChangeOrdersOutput>(qryInspectApprovedChangeOrdersRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectApprovedChangeOrdersData = data;
      setState('ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders', data);
      this.qryInspectApprovedChangeOrdersState = 'success';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status', 'success');
    } else {
      this.qryInspectApprovedChangeOrdersState = 'error';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status', 'error');
      if (response.error) {
        console.error('qryInspectApprovedChangeOrders failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectApprovedChangeOrders — bind UI events here */
  handleQryInspectApprovedChangeOrdersClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectApprovedChangeOrders();
  }

  /** action qryInspectClientBillingSummary (query) — route buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary; inputs: clientBillingSummaryClientId; writes ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary; status ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status */
  async loadQryInspectClientBillingSummary(): Promise<void> {
    if (!this.qryInspectClientBillingSummaryClientBillingSummaryClientId) {
      this.qryInspectClientBillingSummaryState = 'idle';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectClientBillingSummaryState = 'loading';
    setState('ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status', 'loading');
    const params: QryInspectClientBillingSummaryInput = {
      clientBillingSummaryClientId: this.qryInspectClientBillingSummaryClientBillingSummaryClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectClientBillingSummaryOutput>(qryInspectClientBillingSummaryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectClientBillingSummaryData = data;
      setState('ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary', data);
      this.qryInspectClientBillingSummaryState = 'success';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status', 'success');
    } else {
      this.qryInspectClientBillingSummaryState = 'error';
      setState('ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status', 'error');
      if (response.error) {
        console.error('qryInspectClientBillingSummary failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectClientBillingSummary — bind UI events here */
  handleQryInspectClientBillingSummaryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectClientBillingSummary();
  }

  /** setter for state ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId */
  setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId(value: string): void {
    this.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId = value;
    setState('ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId — bind UI events here */
  handleQryInspectApprovedChangeOrdersChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId */
  setQryInspectClientBillingSummaryClientBillingSummaryClientId(value: string): void {
    this.qryInspectClientBillingSummaryClientBillingSummaryClientId = value;
    setState('ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectClientBillingSummaryClientBillingSummaryClientId — bind UI events here */
  handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(value);
  }
}
