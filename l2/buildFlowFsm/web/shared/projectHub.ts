/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectHub.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryListProjectInput,
  QryListProjectOutput,
  QryClientBillingSummaryViewInput,
  QryClientBillingSummaryViewOutput,
  QryProjectDashboardViewInput,
  QryProjectDashboardViewOutput,
  QryProjectExecutionOverviewViewInput,
  QryProjectExecutionOverviewViewOutput,
  QryProjectTimelineViewInput,
  QryProjectTimelineViewOutput,
  QryScheduleRiskAssessmentViewInput,
  QryScheduleRiskAssessmentViewOutput,
  QryListChangeOrderInput,
  QryListChangeOrderOutput,
  QryListInvoiceInput,
  QryListInvoiceOutput,
  QryListMaterialUsageInput,
  QryListMaterialUsageOutput,
  QryListProjectCoordinationAssignmentInput,
  QryListProjectCoordinationAssignmentOutput,
  QryListStatusReportInput,
  QryListStatusReportOutput,
  QryListWorkTaskInput,
  QryListWorkTaskOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectHub.js';
import {
  qryListProjectRoute,
  qryClientBillingSummaryViewRoute,
  qryProjectDashboardViewRoute,
  qryProjectExecutionOverviewViewRoute,
  qryProjectTimelineViewRoute,
  qryScheduleRiskAssessmentViewRoute,
  qryListChangeOrderRoute,
  qryListInvoiceRoute,
  qryListMaterialUsageRoute,
  qryListProjectCoordinationAssignmentRoute,
  qryListStatusReportRoute,
  qryListWorkTaskRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectHub.js';

export type {
  QryListProjectInput,
  QryListProjectOutput,
  QryClientBillingSummaryViewInput,
  QryClientBillingSummaryViewOutput,
  QryProjectDashboardViewInput,
  QryProjectDashboardViewOutput,
  QryProjectExecutionOverviewViewInput,
  QryProjectExecutionOverviewViewOutput,
  QryProjectTimelineViewInput,
  QryProjectTimelineViewOutput,
  QryScheduleRiskAssessmentViewInput,
  QryScheduleRiskAssessmentViewOutput,
  QryListChangeOrderInput,
  QryListChangeOrderOutput,
  QryListInvoiceInput,
  QryListInvoiceOutput,
  QryListMaterialUsageInput,
  QryListMaterialUsageOutput,
  QryListProjectCoordinationAssignmentInput,
  QryListProjectCoordinationAssignmentOutput,
  QryListStatusReportInput,
  QryListStatusReportOutput,
  QryListWorkTaskInput,
  QryListWorkTaskOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectHub.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectHub.collection.title': 'Carteira e busca',
  'organism.projectHub.qryListProject.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListProject.list.column.name.label': 'Name',
  'intent.projectHub.qryListProject.list.column.address.label': 'Address',
  'intent.projectHub.qryListProject.list.column.status.label': 'Status',
  'intent.projectHub.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectHub.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectHub.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.projectHub.record.title': 'Registro selecionado e contexto operacional',
  'organism.projectHub.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'organism.projectHub.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'organism.projectHub.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
  'organism.projectHub.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.projectHub.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
  'organism.projectHub.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectHub.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.projectHub.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.projectHub.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.projectHub.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.projectHub.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.projectHub.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.projectHub.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.projectHub.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.projectHub.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.projectHub.qryListInvoice.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.projectHub.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.projectHub.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.projectHub.qryListInvoice.list.column.status.label': 'Status',
  'organism.projectHub.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.projectHub.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.projectHub.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.projectHub.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.projectHub.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.projectHub.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.projectHub.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.projectHub.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectHub.qryListStatusReport.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListStatusReport.list.column.statusReportId.label': 'Status Report Id',
  'intent.projectHub.qryListStatusReport.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListStatusReport.list.column.status.label': 'Status',
  'intent.projectHub.qryListStatusReport.list.column.title.label': 'Title',
  'intent.projectHub.qryListStatusReport.list.column.content.label': 'Content',
  'intent.projectHub.qryListStatusReport.list.column.communicatedRisks.label': 'Communicated Risks',
  'intent.projectHub.qryListStatusReport.list.column.generatedAt.label': 'Generated At',
  'intent.projectHub.qryListStatusReport.list.column.generatedByUserId.label': 'Generated By User Id',
  'intent.projectHub.qryListStatusReport.list.column.publishedAt.label': 'Published At',
  'intent.projectHub.qryListStatusReport.list.column.publishedByUserId.label': 'Published By User Id',
  'intent.projectHub.qryListStatusReport.list.column.withdrawnAt.label': 'Withdrawn At',
  'organism.projectHub.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.projectHub.qryListWorkTask.list.column.description.label': 'Description',
  'intent.projectHub.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryListWorkTask.list.column.status.label': 'Status',
  'intent.projectHub.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.projectHub.supportingActions.title': 'Contexto e carregamento',
  'organism.projectHub.contextual-transition-actions10.title': 'Contextual transition actions',
  'intent.projectHub.contextual-transition-actions10.content.title': 'Contextual transition actions',
  'section.projectHub.portfolio.title': 'Carteira e busca',
  'section.projectHub.selected-project.title': 'Obra selecionada e diagnóstico',
  'section.projectHub.operational-records.title': 'Registros de apoio',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectHub.collection.title': 'Carteira e busca',
  'organism.projectHub.qryListProject.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListProject.list.column.name.label': 'Name',
  'intent.projectHub.qryListProject.list.column.address.label': 'Address',
  'intent.projectHub.qryListProject.list.column.status.label': 'Status',
  'intent.projectHub.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectHub.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectHub.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.projectHub.record.title': 'Registro selecionado e contexto operacional',
  'organism.projectHub.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'organism.projectHub.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'organism.projectHub.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
  'organism.projectHub.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.projectHub.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
  'organism.projectHub.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectHub.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.projectHub.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.projectHub.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.projectHub.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.projectHub.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.projectHub.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.projectHub.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.projectHub.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.projectHub.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.projectHub.qryListInvoice.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.projectHub.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.projectHub.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.projectHub.qryListInvoice.list.column.status.label': 'Status',
  'organism.projectHub.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.projectHub.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.projectHub.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.projectHub.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.projectHub.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.projectHub.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.projectHub.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.projectHub.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectHub.qryListStatusReport.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListStatusReport.list.column.statusReportId.label': 'Status Report Id',
  'intent.projectHub.qryListStatusReport.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListStatusReport.list.column.status.label': 'Status',
  'intent.projectHub.qryListStatusReport.list.column.title.label': 'Title',
  'intent.projectHub.qryListStatusReport.list.column.content.label': 'Content',
  'intent.projectHub.qryListStatusReport.list.column.communicatedRisks.label': 'Communicated Risks',
  'intent.projectHub.qryListStatusReport.list.column.generatedAt.label': 'Generated At',
  'intent.projectHub.qryListStatusReport.list.column.generatedByUserId.label': 'Generated By User Id',
  'intent.projectHub.qryListStatusReport.list.column.publishedAt.label': 'Published At',
  'intent.projectHub.qryListStatusReport.list.column.publishedByUserId.label': 'Published By User Id',
  'intent.projectHub.qryListStatusReport.list.column.withdrawnAt.label': 'Withdrawn At',
  'organism.projectHub.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.projectHub.qryListWorkTask.list.column.description.label': 'Description',
  'intent.projectHub.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryListWorkTask.list.column.status.label': 'Status',
  'intent.projectHub.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.projectHub.supportingActions.title': 'Contexto e carregamento',
  'organism.projectHub.contextual-transition-actions10.title': 'Contextual transition actions',
  'intent.projectHub.contextual-transition-actions10.content.title': 'Contextual transition actions',
  'section.projectHub.portfolio.title': 'Carteira e busca',
  'section.projectHub.selected-project.title': 'Obra selecionada e diagnóstico',
  'section.projectHub.operational-records.title': 'Registros de apoio',
};
const message_en: MessageType = {
  'section.projectHub.collection.title': 'Carteira e busca',
  'organism.projectHub.qryListProject.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListProject.list.column.name.label': 'Name',
  'intent.projectHub.qryListProject.list.column.address.label': 'Address',
  'intent.projectHub.qryListProject.list.column.status.label': 'Status',
  'intent.projectHub.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectHub.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectHub.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.projectHub.record.title': 'Registro selecionado e contexto operacional',
  'organism.projectHub.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'organism.projectHub.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'organism.projectHub.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
  'organism.projectHub.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.projectHub.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
  'organism.projectHub.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectHub.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.projectHub.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.projectHub.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.projectHub.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.projectHub.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.projectHub.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.projectHub.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.projectHub.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.projectHub.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.projectHub.qryListInvoice.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.projectHub.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.projectHub.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.projectHub.qryListInvoice.list.column.status.label': 'Status',
  'organism.projectHub.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.projectHub.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.projectHub.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.projectHub.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.projectHub.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.projectHub.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.projectHub.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.projectHub.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectHub.qryListStatusReport.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListStatusReport.list.column.statusReportId.label': 'Status Report Id',
  'intent.projectHub.qryListStatusReport.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListStatusReport.list.column.status.label': 'Status',
  'intent.projectHub.qryListStatusReport.list.column.title.label': 'Title',
  'intent.projectHub.qryListStatusReport.list.column.content.label': 'Content',
  'intent.projectHub.qryListStatusReport.list.column.communicatedRisks.label': 'Communicated Risks',
  'intent.projectHub.qryListStatusReport.list.column.generatedAt.label': 'Generated At',
  'intent.projectHub.qryListStatusReport.list.column.generatedByUserId.label': 'Generated By User Id',
  'intent.projectHub.qryListStatusReport.list.column.publishedAt.label': 'Published At',
  'intent.projectHub.qryListStatusReport.list.column.publishedByUserId.label': 'Published By User Id',
  'intent.projectHub.qryListStatusReport.list.column.withdrawnAt.label': 'Withdrawn At',
  'organism.projectHub.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.projectHub.qryListWorkTask.list.column.description.label': 'Description',
  'intent.projectHub.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryListWorkTask.list.column.status.label': 'Status',
  'intent.projectHub.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.projectHub.supportingActions.title': 'Contexto e carregamento',
  'organism.projectHub.contextual-transition-actions10.title': 'Contextual transition actions',
  'intent.projectHub.contextual-transition-actions10.content.title': 'Contextual transition actions',
  'section.projectHub.portfolio.title': 'Carteira e busca',
  'section.projectHub.selected-project.title': 'Obra selecionada e diagnóstico',
  'section.projectHub.operational-records.title': 'Registros de apoio',
};
const message_es: MessageType = {
  'section.projectHub.collection.title': 'Carteira e busca',
  'organism.projectHub.qryListProject.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.title': 'Listar Obra',
  'intent.projectHub.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListProject.list.column.name.label': 'Name',
  'intent.projectHub.qryListProject.list.column.address.label': 'Address',
  'intent.projectHub.qryListProject.list.column.status.label': 'Status',
  'intent.projectHub.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectHub.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectHub.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.projectHub.record.title': 'Registro selecionado e contexto operacional',
  'organism.projectHub.qryClientBillingSummaryView.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.title': 'Consultar o resumo de faturamento',
  'intent.projectHub.qryClientBillingSummaryView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoiceReferences.label': 'Invoice References',
  'intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label': 'Billable Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'organism.projectHub.qryProjectDashboardView.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.title': 'Consultar o painel de obras',
  'intent.projectHub.qryProjectDashboardView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjects.label': 'Active Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label': 'Total Budget',
  'intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label': 'Budget Variance',
  'intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'organism.projectHub.qryProjectExecutionOverviewView.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.title': 'Analisar a execução da obra',
  'intent.projectHub.qryProjectExecutionOverviewView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectName.label': 'Project Name',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label': 'Project Status',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label': 'Task Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label': 'Actual Cost',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label': 'Budget Amount',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label': 'Cost Variance',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.projectHub.qryProjectExecutionOverviewView.list.column.calculatedAt.label': 'Calculated At',
  'organism.projectHub.qryProjectTimelineView.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.title': 'Consultar o cronograma da obra',
  'intent.projectHub.qryProjectTimelineView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryProjectTimelineView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryProjectTimelineView.list.column.workTasks.label': 'Work Tasks',
  'intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label': 'Schedule Entries',
  'organism.projectHub.qryScheduleRiskAssessmentView.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.title': 'Consultar tarefas em risco de atraso',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label': 'Task Status',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label': 'Progress Percent',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.projectHub.qryScheduleRiskAssessmentView.list.column.assessedAt.label': 'Assessed At',
  'organism.projectHub.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.projectHub.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectHub.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.projectHub.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.projectHub.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.projectHub.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.projectHub.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.projectHub.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.projectHub.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.projectHub.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.projectHub.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.projectHub.qryListInvoice.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.title': 'Listar Fatura',
  'intent.projectHub.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.projectHub.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.projectHub.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.projectHub.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.projectHub.qryListInvoice.list.column.status.label': 'Status',
  'organism.projectHub.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.projectHub.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.projectHub.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.projectHub.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.projectHub.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.projectHub.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.projectHub.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.projectHub.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.projectHub.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.projectHub.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectHub.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectHub.qryListStatusReport.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.title': 'Listar Relatório de status',
  'intent.projectHub.qryListStatusReport.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListStatusReport.list.column.statusReportId.label': 'Status Report Id',
  'intent.projectHub.qryListStatusReport.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListStatusReport.list.column.status.label': 'Status',
  'intent.projectHub.qryListStatusReport.list.column.title.label': 'Title',
  'intent.projectHub.qryListStatusReport.list.column.content.label': 'Content',
  'intent.projectHub.qryListStatusReport.list.column.communicatedRisks.label': 'Communicated Risks',
  'intent.projectHub.qryListStatusReport.list.column.generatedAt.label': 'Generated At',
  'intent.projectHub.qryListStatusReport.list.column.generatedByUserId.label': 'Generated By User Id',
  'intent.projectHub.qryListStatusReport.list.column.publishedAt.label': 'Published At',
  'intent.projectHub.qryListStatusReport.list.column.publishedByUserId.label': 'Published By User Id',
  'intent.projectHub.qryListStatusReport.list.column.withdrawnAt.label': 'Withdrawn At',
  'organism.projectHub.qryListWorkTask.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.title': 'Listar Tarefa de trabalho',
  'intent.projectHub.qryListWorkTask.list.empty': 'Nenhum registro encontrado',
  'intent.projectHub.qryListWorkTask.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectHub.qryListWorkTask.list.column.projectId.label': 'Project Id',
  'intent.projectHub.qryListWorkTask.list.column.assignedFieldWorkerId.label': 'Assigned Field Worker Id',
  'intent.projectHub.qryListWorkTask.list.column.description.label': 'Description',
  'intent.projectHub.qryListWorkTask.list.column.dueDate.label': 'Due Date',
  'intent.projectHub.qryListWorkTask.list.column.status.label': 'Status',
  'intent.projectHub.qryListWorkTask.list.column.progressUpdate.label': 'Progress Update',
  'section.projectHub.supportingActions.title': 'Contexto e carregamento',
  'organism.projectHub.contextual-transition-actions10.title': 'Contextual transition actions',
  'intent.projectHub.contextual-transition-actions10.content.title': 'Contextual transition actions',
  'section.projectHub.portfolio.title': 'Carteira e busca',
  'section.projectHub.selected-project.title': 'Obra selecionada e diagnóstico',
  'section.projectHub.operational-records.title': 'Registros de apoio',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectHub.status',
  'ui.projectHub.action.qryListProject.status',
  'ui.projectHub.data.qryListProject',
  'ui.projectHub.action.qryClientBillingSummaryView.status',
  'ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId',
  'ui.projectHub.data.qryClientBillingSummaryView',
  'ui.projectHub.action.qryProjectDashboardView.status',
  'ui.projectHub.data.qryProjectDashboardView',
  'ui.projectHub.action.qryProjectExecutionOverviewView.status',
  'ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId',
  'ui.projectHub.data.qryProjectExecutionOverviewView',
  'ui.projectHub.action.qryProjectTimelineView.status',
  'ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId',
  'ui.projectHub.data.qryProjectTimelineView',
  'ui.projectHub.action.qryScheduleRiskAssessmentView.status',
  'ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId',
  'ui.projectHub.data.qryScheduleRiskAssessmentView',
  'ui.projectHub.action.qryListChangeOrder.status',
  'ui.projectHub.data.qryListChangeOrder',
  'ui.projectHub.action.qryListInvoice.status',
  'ui.projectHub.data.qryListInvoice',
  'ui.projectHub.action.qryListMaterialUsage.status',
  'ui.projectHub.data.qryListMaterialUsage',
  'ui.projectHub.action.qryListProjectCoordinationAssignment.status',
  'ui.projectHub.data.qryListProjectCoordinationAssignment',
  'ui.projectHub.action.qryListStatusReport.status',
  'ui.projectHub.data.qryListStatusReport',
  'ui.projectHub.action.qryListWorkTask.status',
  'ui.projectHub.data.qryListWorkTask',
];

export class BuildFlowFsmProjectHubBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryListProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListProjectData — queryResult, outputShape: array */
  @property() qryListProjectData: QryListProjectOutput[] = [];
  /** state qryClientBillingSummaryViewState — actionStatus, values: idle|loading|success|error */
  @property() qryClientBillingSummaryViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientBillingSummaryViewClientBillingSummaryClientId — input */
  @property() qryClientBillingSummaryViewClientBillingSummaryClientId: string = '';
  /** state qryClientBillingSummaryViewData — queryResult, outputShape: object */
  @property() qryClientBillingSummaryViewData: QryClientBillingSummaryViewOutput | null = null;
  /** state qryProjectDashboardViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectDashboardViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectDashboardViewData — queryResult, outputShape: object */
  @property() qryProjectDashboardViewData: QryProjectDashboardViewOutput | null = null;
  /** state qryProjectExecutionOverviewViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectExecutionOverviewViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId — input */
  @property() qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId: string = '';
  /** state qryProjectExecutionOverviewViewData — queryResult, outputShape: object */
  @property() qryProjectExecutionOverviewViewData: QryProjectExecutionOverviewViewOutput | null = null;
  /** state qryProjectTimelineViewState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectTimelineViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectTimelineViewProjectTimelineProjectId — input */
  @property() qryProjectTimelineViewProjectTimelineProjectId: string = '';
  /** state qryProjectTimelineViewData — queryResult, outputShape: object */
  @property() qryProjectTimelineViewData: QryProjectTimelineViewOutput | null = null;
  /** state qryScheduleRiskAssessmentViewState — actionStatus, values: idle|loading|success|error */
  @property() qryScheduleRiskAssessmentViewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId — input */
  @property() qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId: string = '';
  /** state qryScheduleRiskAssessmentViewData — queryResult, outputShape: object */
  @property() qryScheduleRiskAssessmentViewData: QryScheduleRiskAssessmentViewOutput | null = null;
  /** state qryListChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryListChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListChangeOrderData — queryResult, outputShape: array */
  @property() qryListChangeOrderData: QryListChangeOrderOutput[] = [];
  /** state qryListInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() qryListInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListInvoiceData — queryResult, outputShape: array */
  @property() qryListInvoiceData: QryListInvoiceOutput[] = [];
  /** state qryListMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() qryListMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListMaterialUsageData — queryResult, outputShape: array */
  @property() qryListMaterialUsageData: QryListMaterialUsageOutput[] = [];
  /** state qryListProjectCoordinationAssignmentState — actionStatus, values: idle|loading|success|error */
  @property() qryListProjectCoordinationAssignmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListProjectCoordinationAssignmentData — queryResult, outputShape: array */
  @property() qryListProjectCoordinationAssignmentData: QryListProjectCoordinationAssignmentOutput[] = [];
  /** state qryListStatusReportState — actionStatus, values: idle|loading|success|error */
  @property() qryListStatusReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListStatusReportData — queryResult, outputShape: array */
  @property() qryListStatusReportData: QryListStatusReportOutput[] = [];
  /** state qryListWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() qryListWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListWorkTaskData — queryResult, outputShape: array */
  @property() qryListWorkTaskData: QryListWorkTaskOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectHub.status', '');
    this.initStateValue('ui.projectHub.action.qryListProject.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListProject', []);
    this.initStateValue('ui.projectHub.action.qryClientBillingSummaryView.status', 'idle');
    this.initStateValue('ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId', '');
    this.initStateValue('ui.projectHub.data.qryClientBillingSummaryView', null);
    this.initStateValue('ui.projectHub.action.qryProjectDashboardView.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryProjectDashboardView', null);
    this.initStateValue('ui.projectHub.action.qryProjectExecutionOverviewView.status', 'idle');
    this.initStateValue('ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.projectHub.data.qryProjectExecutionOverviewView', null);
    this.initStateValue('ui.projectHub.action.qryProjectTimelineView.status', 'idle');
    this.initStateValue('ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId', '');
    this.initStateValue('ui.projectHub.data.qryProjectTimelineView', null);
    this.initStateValue('ui.projectHub.action.qryScheduleRiskAssessmentView.status', 'idle');
    this.initStateValue('ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId', '');
    this.initStateValue('ui.projectHub.data.qryScheduleRiskAssessmentView', null);
    this.initStateValue('ui.projectHub.action.qryListChangeOrder.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListChangeOrder', []);
    this.initStateValue('ui.projectHub.action.qryListInvoice.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListInvoice', []);
    this.initStateValue('ui.projectHub.action.qryListMaterialUsage.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListMaterialUsage', []);
    this.initStateValue('ui.projectHub.action.qryListProjectCoordinationAssignment.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListProjectCoordinationAssignment', []);
    this.initStateValue('ui.projectHub.action.qryListStatusReport.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListStatusReport', []);
    this.initStateValue('ui.projectHub.action.qryListWorkTask.status', 'idle');
    this.initStateValue('ui.projectHub.data.qryListWorkTask', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListProject();
    void this.loadQryProjectDashboardView();
    void this.loadQryListChangeOrder();
    void this.loadQryListInvoice();
    void this.loadQryListMaterialUsage();
    void this.loadQryListProjectCoordinationAssignment();
    void this.loadQryListStatusReport();
    void this.loadQryListWorkTask();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectHub.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectHub.action.qryListProject.status':
        this.qryListProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListProject':
        this.qryListProjectData = (value as QryListProjectOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryClientBillingSummaryView.status':
        this.qryClientBillingSummaryViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId':
        this.qryClientBillingSummaryViewClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryClientBillingSummaryView':
        this.qryClientBillingSummaryViewData = (value as QryClientBillingSummaryViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectDashboardView.status':
        this.qryProjectDashboardViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryProjectDashboardView':
        this.qryProjectDashboardViewData = (value as QryProjectDashboardViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectExecutionOverviewView.status':
        this.qryProjectExecutionOverviewViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId':
        this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryProjectExecutionOverviewView':
        this.qryProjectExecutionOverviewViewData = (value as QryProjectExecutionOverviewViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectTimelineView.status':
        this.qryProjectTimelineViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId':
        this.qryProjectTimelineViewProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryProjectTimelineView':
        this.qryProjectTimelineViewData = (value as QryProjectTimelineViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryScheduleRiskAssessmentView.status':
        this.qryScheduleRiskAssessmentViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId':
        this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryScheduleRiskAssessmentView':
        this.qryScheduleRiskAssessmentViewData = (value as QryScheduleRiskAssessmentViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryListChangeOrder.status':
        this.qryListChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListChangeOrder':
        this.qryListChangeOrderData = (value as QryListChangeOrderOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListInvoice.status':
        this.qryListInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListInvoice':
        this.qryListInvoiceData = (value as QryListInvoiceOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListMaterialUsage.status':
        this.qryListMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListMaterialUsage':
        this.qryListMaterialUsageData = (value as QryListMaterialUsageOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListProjectCoordinationAssignment.status':
        this.qryListProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListProjectCoordinationAssignment':
        this.qryListProjectCoordinationAssignmentData = (value as QryListProjectCoordinationAssignmentOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListStatusReport.status':
        this.qryListStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListStatusReport':
        this.qryListStatusReportData = (value as QryListStatusReportOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListWorkTask.status':
        this.qryListWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListWorkTask':
        this.qryListWorkTaskData = (value as QryListWorkTaskOutput[]) ?? [];
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
      case 'ui.projectHub.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectHub.action.qryListProject.status':
        this.qryListProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListProject':
        this.qryListProjectData = (value as QryListProjectOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryClientBillingSummaryView.status':
        this.qryClientBillingSummaryViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId':
        this.qryClientBillingSummaryViewClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryClientBillingSummaryView':
        this.qryClientBillingSummaryViewData = (value as QryClientBillingSummaryViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectDashboardView.status':
        this.qryProjectDashboardViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryProjectDashboardView':
        this.qryProjectDashboardViewData = (value as QryProjectDashboardViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectExecutionOverviewView.status':
        this.qryProjectExecutionOverviewViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId':
        this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryProjectExecutionOverviewView':
        this.qryProjectExecutionOverviewViewData = (value as QryProjectExecutionOverviewViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryProjectTimelineView.status':
        this.qryProjectTimelineViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId':
        this.qryProjectTimelineViewProjectTimelineProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryProjectTimelineView':
        this.qryProjectTimelineViewData = (value as QryProjectTimelineViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryScheduleRiskAssessmentView.status':
        this.qryScheduleRiskAssessmentViewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId':
        this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectHub.data.qryScheduleRiskAssessmentView':
        this.qryScheduleRiskAssessmentViewData = (value as QryScheduleRiskAssessmentViewOutput | null) ?? null;
        break;
      case 'ui.projectHub.action.qryListChangeOrder.status':
        this.qryListChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListChangeOrder':
        this.qryListChangeOrderData = (value as QryListChangeOrderOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListInvoice.status':
        this.qryListInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListInvoice':
        this.qryListInvoiceData = (value as QryListInvoiceOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListMaterialUsage.status':
        this.qryListMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListMaterialUsage':
        this.qryListMaterialUsageData = (value as QryListMaterialUsageOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListProjectCoordinationAssignment.status':
        this.qryListProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListProjectCoordinationAssignment':
        this.qryListProjectCoordinationAssignmentData = (value as QryListProjectCoordinationAssignmentOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListStatusReport.status':
        this.qryListStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListStatusReport':
        this.qryListStatusReportData = (value as QryListStatusReportOutput[]) ?? [];
        break;
      case 'ui.projectHub.action.qryListWorkTask.status':
        this.qryListWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectHub.data.qryListWorkTask':
        this.qryListWorkTaskData = (value as QryListWorkTaskOutput[]) ?? [];
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryListProject (query) — route buildFlowFsm.projectHub.qryListProject; inputs: (none); writes ui.projectHub.data.qryListProject; status ui.projectHub.action.qryListProject.status */
  async loadQryListProject(): Promise<void> {
    this.qryListProjectState = 'loading';
    setState('ui.projectHub.action.qryListProject.status', 'loading');
    const params: QryListProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListProjectOutput[]>(qryListProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListProjectData = data;
      setState('ui.projectHub.data.qryListProject', data);
      this.qryListProjectState = 'success';
      setState('ui.projectHub.action.qryListProject.status', 'success');
    } else {
      this.qryListProjectState = 'error';
      setState('ui.projectHub.action.qryListProject.status', 'error');
      if (response.error) {
        console.error('qryListProject failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListProject — bind UI events here */
  handleQryListProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListProject();
  }

  /** action qryClientBillingSummaryView (query) — route buildFlowFsm.projectHub.qryClientBillingSummaryView; inputs: clientBillingSummaryClientId; writes ui.projectHub.data.qryClientBillingSummaryView; status ui.projectHub.action.qryClientBillingSummaryView.status */
  async loadQryClientBillingSummaryView(): Promise<void> {
    if (!this.qryClientBillingSummaryViewClientBillingSummaryClientId) {
      this.qryClientBillingSummaryViewState = 'idle';
      setState('ui.projectHub.action.qryClientBillingSummaryView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryClientBillingSummaryViewState = 'loading';
    setState('ui.projectHub.action.qryClientBillingSummaryView.status', 'loading');
    const params: QryClientBillingSummaryViewInput = {
      clientBillingSummaryClientId: this.qryClientBillingSummaryViewClientBillingSummaryClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientBillingSummaryViewOutput>(qryClientBillingSummaryViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryClientBillingSummaryViewData = data;
      setState('ui.projectHub.data.qryClientBillingSummaryView', data);
      this.qryClientBillingSummaryViewState = 'success';
      setState('ui.projectHub.action.qryClientBillingSummaryView.status', 'success');
    } else {
      this.qryClientBillingSummaryViewState = 'error';
      setState('ui.projectHub.action.qryClientBillingSummaryView.status', 'error');
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

  /** action qryProjectDashboardView (query) — route buildFlowFsm.projectHub.qryProjectDashboardView; inputs: (none); writes ui.projectHub.data.qryProjectDashboardView; status ui.projectHub.action.qryProjectDashboardView.status */
  async loadQryProjectDashboardView(): Promise<void> {
    this.qryProjectDashboardViewState = 'loading';
    setState('ui.projectHub.action.qryProjectDashboardView.status', 'loading');
    const params: QryProjectDashboardViewInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectDashboardViewOutput>(qryProjectDashboardViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectDashboardViewData = data;
      setState('ui.projectHub.data.qryProjectDashboardView', data);
      this.qryProjectDashboardViewState = 'success';
      setState('ui.projectHub.action.qryProjectDashboardView.status', 'success');
    } else {
      this.qryProjectDashboardViewState = 'error';
      setState('ui.projectHub.action.qryProjectDashboardView.status', 'error');
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

  /** action qryProjectExecutionOverviewView (query) — route buildFlowFsm.projectHub.qryProjectExecutionOverviewView; inputs: projectExecutionOverviewProjectId; writes ui.projectHub.data.qryProjectExecutionOverviewView; status ui.projectHub.action.qryProjectExecutionOverviewView.status */
  async loadQryProjectExecutionOverviewView(): Promise<void> {
    if (!this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId) {
      this.qryProjectExecutionOverviewViewState = 'idle';
      setState('ui.projectHub.action.qryProjectExecutionOverviewView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryProjectExecutionOverviewViewState = 'loading';
    setState('ui.projectHub.action.qryProjectExecutionOverviewView.status', 'loading');
    const params: QryProjectExecutionOverviewViewInput = {
      projectExecutionOverviewProjectId: this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectExecutionOverviewViewOutput>(qryProjectExecutionOverviewViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectExecutionOverviewViewData = data;
      setState('ui.projectHub.data.qryProjectExecutionOverviewView', data);
      this.qryProjectExecutionOverviewViewState = 'success';
      setState('ui.projectHub.action.qryProjectExecutionOverviewView.status', 'success');
    } else {
      this.qryProjectExecutionOverviewViewState = 'error';
      setState('ui.projectHub.action.qryProjectExecutionOverviewView.status', 'error');
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

  /** action qryProjectTimelineView (query) — route buildFlowFsm.projectHub.qryProjectTimelineView; inputs: projectTimelineProjectId; writes ui.projectHub.data.qryProjectTimelineView; status ui.projectHub.action.qryProjectTimelineView.status */
  async loadQryProjectTimelineView(): Promise<void> {
    if (!this.qryProjectTimelineViewProjectTimelineProjectId) {
      this.qryProjectTimelineViewState = 'idle';
      setState('ui.projectHub.action.qryProjectTimelineView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryProjectTimelineViewState = 'loading';
    setState('ui.projectHub.action.qryProjectTimelineView.status', 'loading');
    const params: QryProjectTimelineViewInput = {
      projectTimelineProjectId: this.qryProjectTimelineViewProjectTimelineProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectTimelineViewOutput>(qryProjectTimelineViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryProjectTimelineViewData = data;
      setState('ui.projectHub.data.qryProjectTimelineView', data);
      this.qryProjectTimelineViewState = 'success';
      setState('ui.projectHub.action.qryProjectTimelineView.status', 'success');
    } else {
      this.qryProjectTimelineViewState = 'error';
      setState('ui.projectHub.action.qryProjectTimelineView.status', 'error');
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

  /** action qryScheduleRiskAssessmentView (query) — route buildFlowFsm.projectHub.qryScheduleRiskAssessmentView; inputs: scheduleRiskAssessmentProjectId; writes ui.projectHub.data.qryScheduleRiskAssessmentView; status ui.projectHub.action.qryScheduleRiskAssessmentView.status */
  async loadQryScheduleRiskAssessmentView(): Promise<void> {
    if (!this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId) {
      this.qryScheduleRiskAssessmentViewState = 'idle';
      setState('ui.projectHub.action.qryScheduleRiskAssessmentView.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryScheduleRiskAssessmentViewState = 'loading';
    setState('ui.projectHub.action.qryScheduleRiskAssessmentView.status', 'loading');
    const params: QryScheduleRiskAssessmentViewInput = {
      scheduleRiskAssessmentProjectId: this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryScheduleRiskAssessmentViewOutput>(qryScheduleRiskAssessmentViewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryScheduleRiskAssessmentViewData = data;
      setState('ui.projectHub.data.qryScheduleRiskAssessmentView', data);
      this.qryScheduleRiskAssessmentViewState = 'success';
      setState('ui.projectHub.action.qryScheduleRiskAssessmentView.status', 'success');
    } else {
      this.qryScheduleRiskAssessmentViewState = 'error';
      setState('ui.projectHub.action.qryScheduleRiskAssessmentView.status', 'error');
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

  /** action qryListChangeOrder (query) — route buildFlowFsm.projectHub.qryListChangeOrder; inputs: (none); writes ui.projectHub.data.qryListChangeOrder; status ui.projectHub.action.qryListChangeOrder.status */
  async loadQryListChangeOrder(): Promise<void> {
    this.qryListChangeOrderState = 'loading';
    setState('ui.projectHub.action.qryListChangeOrder.status', 'loading');
    const params: QryListChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListChangeOrderOutput[]>(qryListChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListChangeOrderData = data;
      setState('ui.projectHub.data.qryListChangeOrder', data);
      this.qryListChangeOrderState = 'success';
      setState('ui.projectHub.action.qryListChangeOrder.status', 'success');
    } else {
      this.qryListChangeOrderState = 'error';
      setState('ui.projectHub.action.qryListChangeOrder.status', 'error');
      if (response.error) {
        console.error('qryListChangeOrder failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListChangeOrder — bind UI events here */
  handleQryListChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListChangeOrder();
  }

  /** action qryListInvoice (query) — route buildFlowFsm.projectHub.qryListInvoice; inputs: (none); writes ui.projectHub.data.qryListInvoice; status ui.projectHub.action.qryListInvoice.status */
  async loadQryListInvoice(): Promise<void> {
    this.qryListInvoiceState = 'loading';
    setState('ui.projectHub.action.qryListInvoice.status', 'loading');
    const params: QryListInvoiceInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListInvoiceOutput[]>(qryListInvoiceRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListInvoiceData = data;
      setState('ui.projectHub.data.qryListInvoice', data);
      this.qryListInvoiceState = 'success';
      setState('ui.projectHub.action.qryListInvoice.status', 'success');
    } else {
      this.qryListInvoiceState = 'error';
      setState('ui.projectHub.action.qryListInvoice.status', 'error');
      if (response.error) {
        console.error('qryListInvoice failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListInvoice — bind UI events here */
  handleQryListInvoiceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListInvoice();
  }

  /** action qryListMaterialUsage (query) — route buildFlowFsm.projectHub.qryListMaterialUsage; inputs: (none); writes ui.projectHub.data.qryListMaterialUsage; status ui.projectHub.action.qryListMaterialUsage.status */
  async loadQryListMaterialUsage(): Promise<void> {
    this.qryListMaterialUsageState = 'loading';
    setState('ui.projectHub.action.qryListMaterialUsage.status', 'loading');
    const params: QryListMaterialUsageInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListMaterialUsageOutput[]>(qryListMaterialUsageRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListMaterialUsageData = data;
      setState('ui.projectHub.data.qryListMaterialUsage', data);
      this.qryListMaterialUsageState = 'success';
      setState('ui.projectHub.action.qryListMaterialUsage.status', 'success');
    } else {
      this.qryListMaterialUsageState = 'error';
      setState('ui.projectHub.action.qryListMaterialUsage.status', 'error');
      if (response.error) {
        console.error('qryListMaterialUsage failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListMaterialUsage — bind UI events here */
  handleQryListMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListMaterialUsage();
  }

  /** action qryListProjectCoordinationAssignment (query) — route buildFlowFsm.projectHub.qryListProjectCoordinationAssignment; inputs: (none); writes ui.projectHub.data.qryListProjectCoordinationAssignment; status ui.projectHub.action.qryListProjectCoordinationAssignment.status */
  async loadQryListProjectCoordinationAssignment(): Promise<void> {
    this.qryListProjectCoordinationAssignmentState = 'loading';
    setState('ui.projectHub.action.qryListProjectCoordinationAssignment.status', 'loading');
    const params: QryListProjectCoordinationAssignmentInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListProjectCoordinationAssignmentOutput[]>(qryListProjectCoordinationAssignmentRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListProjectCoordinationAssignmentData = data;
      setState('ui.projectHub.data.qryListProjectCoordinationAssignment', data);
      this.qryListProjectCoordinationAssignmentState = 'success';
      setState('ui.projectHub.action.qryListProjectCoordinationAssignment.status', 'success');
    } else {
      this.qryListProjectCoordinationAssignmentState = 'error';
      setState('ui.projectHub.action.qryListProjectCoordinationAssignment.status', 'error');
      if (response.error) {
        console.error('qryListProjectCoordinationAssignment failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListProjectCoordinationAssignment — bind UI events here */
  handleQryListProjectCoordinationAssignmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListProjectCoordinationAssignment();
  }

  /** action qryListStatusReport (query) — route buildFlowFsm.projectHub.qryListStatusReport; inputs: (none); writes ui.projectHub.data.qryListStatusReport; status ui.projectHub.action.qryListStatusReport.status */
  async loadQryListStatusReport(): Promise<void> {
    this.qryListStatusReportState = 'loading';
    setState('ui.projectHub.action.qryListStatusReport.status', 'loading');
    const params: QryListStatusReportInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListStatusReportOutput[]>(qryListStatusReportRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListStatusReportData = data;
      setState('ui.projectHub.data.qryListStatusReport', data);
      this.qryListStatusReportState = 'success';
      setState('ui.projectHub.action.qryListStatusReport.status', 'success');
    } else {
      this.qryListStatusReportState = 'error';
      setState('ui.projectHub.action.qryListStatusReport.status', 'error');
      if (response.error) {
        console.error('qryListStatusReport failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListStatusReport — bind UI events here */
  handleQryListStatusReportClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListStatusReport();
  }

  /** action qryListWorkTask (query) — route buildFlowFsm.projectHub.qryListWorkTask; inputs: (none); writes ui.projectHub.data.qryListWorkTask; status ui.projectHub.action.qryListWorkTask.status */
  async loadQryListWorkTask(): Promise<void> {
    this.qryListWorkTaskState = 'loading';
    setState('ui.projectHub.action.qryListWorkTask.status', 'loading');
    const params: QryListWorkTaskInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListWorkTaskOutput[]>(qryListWorkTaskRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListWorkTaskData = data;
      setState('ui.projectHub.data.qryListWorkTask', data);
      this.qryListWorkTaskState = 'success';
      setState('ui.projectHub.action.qryListWorkTask.status', 'success');
    } else {
      this.qryListWorkTaskState = 'error';
      setState('ui.projectHub.action.qryListWorkTask.status', 'error');
      if (response.error) {
        console.error('qryListWorkTask failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListWorkTask — bind UI events here */
  handleQryListWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListWorkTask();
  }

  /** setter for state ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId */
  setQryClientBillingSummaryViewClientBillingSummaryClientId(value: string): void {
    this.qryClientBillingSummaryViewClientBillingSummaryClientId = value;
    setState('ui.projectHub.input.qryClientBillingSummaryView.clientBillingSummaryClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryClientBillingSummaryViewClientBillingSummaryClientId — bind UI events here */
  handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryClientBillingSummaryViewClientBillingSummaryClientId(value);
  }

  /** setter for state ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId */
  setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(value: string): void {
    this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId = value;
    setState('ui.projectHub.input.qryProjectExecutionOverviewView.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId — bind UI events here */
  handleQryProjectExecutionOverviewViewProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(value);
  }

  /** setter for state ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId */
  setQryProjectTimelineViewProjectTimelineProjectId(value: string): void {
    this.qryProjectTimelineViewProjectTimelineProjectId = value;
    setState('ui.projectHub.input.qryProjectTimelineView.projectTimelineProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryProjectTimelineViewProjectTimelineProjectId — bind UI events here */
  handleQryProjectTimelineViewProjectTimelineProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryProjectTimelineViewProjectTimelineProjectId(value);
  }

  /** setter for state ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId */
  setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(value: string): void {
    this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId = value;
    setState('ui.projectHub.input.qryScheduleRiskAssessmentView.scheduleRiskAssessmentProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId — bind UI events here */
  handleQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(value);
  }
}
