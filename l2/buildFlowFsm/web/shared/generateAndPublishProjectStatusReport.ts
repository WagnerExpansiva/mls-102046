/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
  QryInspectScheduleRiskAssessmentInput,
  QryInspectScheduleRiskAssessmentOutput,
  CmdCreateStatusReportInput,
  CmdCreateStatusReportOutput,
  CmdPublishStatusReportInput,
  CmdPublishStatusReportOutput,
  CmdHandoffStatusReportToClientInput,
  CmdHandoffStatusReportToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.js';
import {
  qryLocateProjectRoute,
  qryInspectProjectExecutionOverviewRoute,
  qryInspectScheduleRiskAssessmentRoute,
  cmdCreateStatusReportRoute,
  cmdPublishStatusReportRoute,
  cmdHandoffStatusReportToClientRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.js';

export type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
  QryInspectScheduleRiskAssessmentInput,
  QryInspectScheduleRiskAssessmentOutput,
  CmdCreateStatusReportInput,
  CmdCreateStatusReportOutput,
  CmdPublishStatusReportInput,
  CmdPublishStatusReportOutput,
  CmdHandoffStatusReportToClientInput,
  CmdHandoffStatusReportToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.js';

/// **collab_i18n_start**
const message_pt = {
  'section.generateAndPublishProjectStatusReport.locateProject.title': 'Localizar obra',
  'organism.generateAndPublishProjectStatusReport.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label': 'Name',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label': 'Address',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label': 'Status',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.generateAndPublishProjectStatusReport.projectAssessment.title': 'Analisar execução e riscos',
  'organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label': 'Work Task Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.taskStatus.label': 'Task Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label': 'Due Date',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label': 'Progress Percent',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.assessedAt.label': 'Assessed At',
  'section.generateAndPublishProjectStatusReport.reportWorkflow.title': 'Gerar, publicar e encaminhar',
  'organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label': 'Published By User Id',
  'organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label': 'Status',
  'organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label': 'Published By User Id',
  'action.cmdCreateStatusReport.success': 'Gerar relatório profissional de status: OK',
  'action.cmdCreateStatusReport.error': 'Gerar relatório profissional de status: falhou',
  'action.cmdPublishStatusReport.success': 'Publicar o relatório de status: OK',
  'action.cmdPublishStatusReport.error': 'Publicar o relatório de status: falhou',
  'action.cmdHandoffStatusReportToClient.success': 'Encaminhar o relatório ao cliente: OK',
  'action.cmdHandoffStatusReportToClient.error': 'Encaminhar o relatório ao cliente: falhou',
  'section.generateAndPublishProjectStatusReport.projectContext.title': 'Contexto e diagnóstico da obra',
  'section.generateAndPublishProjectStatusReport.reportPreparation.title': 'Preparação do relatório',
  'organism.generateAndPublishProjectStatusReport.master-detail20.title': 'Master detail',
  'intent.generateAndPublishProjectStatusReport.master-detail20.content.title': 'Master detail',
  'section.generateAndPublishProjectStatusReport.publicationAndHandoff.title': 'Publicação e envio ao cliente',
  'section.generateAndPublishProjectStatusReport.reportWorkflowWorkspace.title': 'Status report workspace',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.generateAndPublishProjectStatusReport.locateProject.title': 'Localizar obra',
  'organism.generateAndPublishProjectStatusReport.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label': 'Name',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label': 'Address',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label': 'Status',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.generateAndPublishProjectStatusReport.projectAssessment.title': 'Analisar execução e riscos',
  'organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label': 'Work Task Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.taskStatus.label': 'Task Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label': 'Due Date',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label': 'Progress Percent',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.assessedAt.label': 'Assessed At',
  'section.generateAndPublishProjectStatusReport.reportWorkflow.title': 'Gerar, publicar e encaminhar',
  'organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label': 'Published By User Id',
  'organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label': 'Status',
  'organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label': 'Published By User Id',
  'action.cmdCreateStatusReport.success': 'Gerar relatório profissional de status: OK',
  'action.cmdCreateStatusReport.error': 'Gerar relatório profissional de status: falhou',
  'action.cmdPublishStatusReport.success': 'Publicar o relatório de status: OK',
  'action.cmdPublishStatusReport.error': 'Publicar o relatório de status: falhou',
  'action.cmdHandoffStatusReportToClient.success': 'Encaminhar o relatório ao cliente: OK',
  'action.cmdHandoffStatusReportToClient.error': 'Encaminhar o relatório ao cliente: falhou',
  'section.generateAndPublishProjectStatusReport.projectContext.title': 'Contexto e diagnóstico da obra',
  'section.generateAndPublishProjectStatusReport.reportPreparation.title': 'Preparação do relatório',
  'organism.generateAndPublishProjectStatusReport.master-detail20.title': 'Master detail',
  'intent.generateAndPublishProjectStatusReport.master-detail20.content.title': 'Master detail',
  'section.generateAndPublishProjectStatusReport.publicationAndHandoff.title': 'Publicação e envio ao cliente',
  'section.generateAndPublishProjectStatusReport.reportWorkflowWorkspace.title': 'Status report workspace',
};
const message_en: MessageType = {
  'section.generateAndPublishProjectStatusReport.locateProject.title': 'Localizar obra',
  'organism.generateAndPublishProjectStatusReport.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label': 'Name',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label': 'Address',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label': 'Status',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.generateAndPublishProjectStatusReport.projectAssessment.title': 'Analisar execução e riscos',
  'organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label': 'Work Task Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.taskStatus.label': 'Task Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label': 'Due Date',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label': 'Progress Percent',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.assessedAt.label': 'Assessed At',
  'section.generateAndPublishProjectStatusReport.reportWorkflow.title': 'Gerar, publicar e encaminhar',
  'organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label': 'Published By User Id',
  'organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label': 'Status',
  'organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label': 'Published By User Id',
  'action.cmdCreateStatusReport.success': 'Gerar relatório profissional de status: OK',
  'action.cmdCreateStatusReport.error': 'Gerar relatório profissional de status: falhou',
  'action.cmdPublishStatusReport.success': 'Publicar o relatório de status: OK',
  'action.cmdPublishStatusReport.error': 'Publicar o relatório de status: falhou',
  'action.cmdHandoffStatusReportToClient.success': 'Encaminhar o relatório ao cliente: OK',
  'action.cmdHandoffStatusReportToClient.error': 'Encaminhar o relatório ao cliente: falhou',
  'section.generateAndPublishProjectStatusReport.projectContext.title': 'Contexto e diagnóstico da obra',
  'section.generateAndPublishProjectStatusReport.reportPreparation.title': 'Preparação do relatório',
  'organism.generateAndPublishProjectStatusReport.master-detail20.title': 'Master detail',
  'intent.generateAndPublishProjectStatusReport.master-detail20.content.title': 'Master detail',
  'section.generateAndPublishProjectStatusReport.publicationAndHandoff.title': 'Publicação e envio ao cliente',
  'section.generateAndPublishProjectStatusReport.reportWorkflowWorkspace.title': 'Status report workspace',
};
const message_es: MessageType = {
  'section.generateAndPublishProjectStatusReport.locateProject.title': 'Localizar obra',
  'organism.generateAndPublishProjectStatusReport.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label': 'Name',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label': 'Address',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label': 'Status',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.generateAndPublishProjectStatusReport.projectAssessment.title': 'Analisar execução e riscos',
  'organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title': 'Consultar tarefas em risco de atraso',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty': 'Nenhum registro encontrado',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.projectId.label': 'Project Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label': 'Work Task Id',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.taskStatus.label': 'Task Status',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label': 'Due Date',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label': 'Progress Percent',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskIndicators.label': 'Risk Indicators',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskExplanation.label': 'Risk Explanation',
  'intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.assessedAt.label': 'Assessed At',
  'section.generateAndPublishProjectStatusReport.reportWorkflow.title': 'Gerar, publicar e encaminhar',
  'organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport': 'Gerar relatório profissional de status',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label': 'Published By User Id',
  'organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport': 'Publicar o relatório de status',
  'intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label': 'Status',
  'organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient': 'Encaminhar o relatório ao cliente',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label': 'Title',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label': 'Content',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label': 'Communicated Risks',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label': 'Generated By User Id',
  'intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label': 'Published By User Id',
  'action.cmdCreateStatusReport.success': 'Gerar relatório profissional de status: OK',
  'action.cmdCreateStatusReport.error': 'Gerar relatório profissional de status: falhou',
  'action.cmdPublishStatusReport.success': 'Publicar o relatório de status: OK',
  'action.cmdPublishStatusReport.error': 'Publicar o relatório de status: falhou',
  'action.cmdHandoffStatusReportToClient.success': 'Encaminhar o relatório ao cliente: OK',
  'action.cmdHandoffStatusReportToClient.error': 'Encaminhar o relatório ao cliente: falhou',
  'section.generateAndPublishProjectStatusReport.projectContext.title': 'Contexto e diagnóstico da obra',
  'section.generateAndPublishProjectStatusReport.reportPreparation.title': 'Preparação do relatório',
  'organism.generateAndPublishProjectStatusReport.master-detail20.title': 'Master detail',
  'intent.generateAndPublishProjectStatusReport.master-detail20.content.title': 'Master detail',
  'section.generateAndPublishProjectStatusReport.publicationAndHandoff.title': 'Publicação e envio ao cliente',
  'section.generateAndPublishProjectStatusReport.reportWorkflowWorkspace.title': 'Status report workspace',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.generateAndPublishProjectStatusReport.status',
  'ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status',
  'ui.generateAndPublishProjectStatusReport.data.qryLocateProject',
  'ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status',
  'ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId',
  'ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview',
  'ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status',
  'ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId',
  'ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment',
  'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId',
  'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId',
  'ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport',
  'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error',
  'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status',
  'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId',
  'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId',
  'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId',
  'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status',
  'ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport',
  'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error',
  'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId',
  'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId',
  'ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient',
  'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error',
];

export class BuildFlowFsmGenerateAndPublishProjectStatusReportBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryInspectProjectExecutionOverviewState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectExecutionOverviewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId — input */
  @property() qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId: string = '';
  /** state qryInspectProjectExecutionOverviewData — queryResult, outputShape: object */
  @property() qryInspectProjectExecutionOverviewData: QryInspectProjectExecutionOverviewOutput | null = null;
  /** state qryInspectScheduleRiskAssessmentState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectScheduleRiskAssessmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId — input */
  @property() qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId: string = '';
  /** state qryInspectScheduleRiskAssessmentData — queryResult, outputShape: object */
  @property() qryInspectScheduleRiskAssessmentData: QryInspectScheduleRiskAssessmentOutput | null = null;
  /** state cmdCreateStatusReportState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateStatusReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateStatusReportProjectProjectId — input */
  @property() cmdCreateStatusReportProjectProjectId: string = '';
  /** state cmdCreateStatusReportProjectExecutionOverviewProjectId — input */
  @property() cmdCreateStatusReportProjectExecutionOverviewProjectId: string = '';
  /** state cmdCreateStatusReportTitle — input */
  @property() cmdCreateStatusReportTitle: string = '';
  /** state cmdCreateStatusReportContent — input */
  @property() cmdCreateStatusReportContent: string = '';
  /** state cmdCreateStatusReportCommunicatedRisks — input */
  @property() cmdCreateStatusReportCommunicatedRisks: string = '';
  /** state cmdCreateStatusReportGeneratedByUserId — input */
  @property() cmdCreateStatusReportGeneratedByUserId: string = '';
  /** state cmdCreateStatusReportPublishedByUserId — input */
  @property() cmdCreateStatusReportPublishedByUserId: string = '';
  /** state cmdCreateStatusReportOutput — commandOutput */
  @property() cmdCreateStatusReportOutput: CmdCreateStatusReportOutput | null = null;
  /** state cmdCreateStatusReportError — actionError */
  @property() cmdCreateStatusReportError: string = '';
  /** state cmdPublishStatusReportState — actionStatus, values: idle|loading|success|error */
  @property() cmdPublishStatusReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdPublishStatusReportProjectProjectId — input */
  @property() cmdPublishStatusReportProjectProjectId: string = '';
  /** state cmdPublishStatusReportProjectExecutionOverviewProjectId — input */
  @property() cmdPublishStatusReportProjectExecutionOverviewProjectId: string = '';
  /** state cmdPublishStatusReportStatusReportStatusReportId — input */
  @property() cmdPublishStatusReportStatusReportStatusReportId: string = '';
  /** state cmdPublishStatusReportStatus — input */
  @property() cmdPublishStatusReportStatus: string = '';
  /** state cmdPublishStatusReportOutput — commandOutput */
  @property() cmdPublishStatusReportOutput: CmdPublishStatusReportOutput | null = null;
  /** state cmdPublishStatusReportError — actionError */
  @property() cmdPublishStatusReportError: string = '';
  /** state cmdHandoffStatusReportToClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffStatusReportToClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffStatusReportToClientStatusReportStatusReportId — input */
  @property() cmdHandoffStatusReportToClientStatusReportStatusReportId: string = '';
  /** state cmdHandoffStatusReportToClientTitle — input */
  @property() cmdHandoffStatusReportToClientTitle: string = '';
  /** state cmdHandoffStatusReportToClientContent — input */
  @property() cmdHandoffStatusReportToClientContent: string = '';
  /** state cmdHandoffStatusReportToClientCommunicatedRisks — input */
  @property() cmdHandoffStatusReportToClientCommunicatedRisks: string = '';
  /** state cmdHandoffStatusReportToClientGeneratedByUserId — input */
  @property() cmdHandoffStatusReportToClientGeneratedByUserId: string = '';
  /** state cmdHandoffStatusReportToClientPublishedByUserId — input */
  @property() cmdHandoffStatusReportToClientPublishedByUserId: string = '';
  /** state cmdHandoffStatusReportToClientOutput — commandOutput */
  @property() cmdHandoffStatusReportToClientOutput: CmdHandoffStatusReportToClientOutput | null = null;
  /** state cmdHandoffStatusReportToClientError — actionError */
  @property() cmdHandoffStatusReportToClientError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.generateAndPublishProjectStatusReport.status', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.data.qryLocateProject', []);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview', null);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment', null);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport', null);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport', null);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'idle');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId', '');
    this.initStateValue('ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient', null);
    this.initStateValue('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error', '');
    this.syncRouteParams();
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
      case 'ui.generateAndPublishProjectStatusReport.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status':
        this.qryInspectScheduleRiskAssessmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId':
        this.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment':
        this.qryInspectScheduleRiskAssessmentData = (value as QryInspectScheduleRiskAssessmentOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status':
        this.cmdCreateStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId':
        this.cmdCreateStatusReportProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId':
        this.cmdCreateStatusReportProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title':
        this.cmdCreateStatusReportTitle = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content':
        this.cmdCreateStatusReportContent = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks':
        this.cmdCreateStatusReportCommunicatedRisks = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId':
        this.cmdCreateStatusReportGeneratedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId':
        this.cmdCreateStatusReportPublishedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport':
        this.cmdCreateStatusReportOutput = (value as CmdCreateStatusReportOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error':
        this.cmdCreateStatusReportError = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status':
        this.cmdPublishStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId':
        this.cmdPublishStatusReportProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId':
        this.cmdPublishStatusReportProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId':
        this.cmdPublishStatusReportStatusReportStatusReportId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status':
        this.cmdPublishStatusReportStatus = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport':
        this.cmdPublishStatusReportOutput = (value as CmdPublishStatusReportOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error':
        this.cmdPublishStatusReportError = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status':
        this.cmdHandoffStatusReportToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId':
        this.cmdHandoffStatusReportToClientStatusReportStatusReportId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title':
        this.cmdHandoffStatusReportToClientTitle = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content':
        this.cmdHandoffStatusReportToClientContent = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks':
        this.cmdHandoffStatusReportToClientCommunicatedRisks = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId':
        this.cmdHandoffStatusReportToClientGeneratedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId':
        this.cmdHandoffStatusReportToClientPublishedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient':
        this.cmdHandoffStatusReportToClientOutput = (value as CmdHandoffStatusReportToClientOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error':
        this.cmdHandoffStatusReportToClientError = (value as string) ?? '';
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
      case 'ui.generateAndPublishProjectStatusReport.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status':
        this.qryInspectScheduleRiskAssessmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId':
        this.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment':
        this.qryInspectScheduleRiskAssessmentData = (value as QryInspectScheduleRiskAssessmentOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status':
        this.cmdCreateStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId':
        this.cmdCreateStatusReportProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId':
        this.cmdCreateStatusReportProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title':
        this.cmdCreateStatusReportTitle = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content':
        this.cmdCreateStatusReportContent = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks':
        this.cmdCreateStatusReportCommunicatedRisks = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId':
        this.cmdCreateStatusReportGeneratedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId':
        this.cmdCreateStatusReportPublishedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport':
        this.cmdCreateStatusReportOutput = (value as CmdCreateStatusReportOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error':
        this.cmdCreateStatusReportError = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status':
        this.cmdPublishStatusReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId':
        this.cmdPublishStatusReportProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId':
        this.cmdPublishStatusReportProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId':
        this.cmdPublishStatusReportStatusReportStatusReportId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status':
        this.cmdPublishStatusReportStatus = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport':
        this.cmdPublishStatusReportOutput = (value as CmdPublishStatusReportOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error':
        this.cmdPublishStatusReportError = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status':
        this.cmdHandoffStatusReportToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId':
        this.cmdHandoffStatusReportToClientStatusReportStatusReportId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title':
        this.cmdHandoffStatusReportToClientTitle = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content':
        this.cmdHandoffStatusReportToClientContent = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks':
        this.cmdHandoffStatusReportToClientCommunicatedRisks = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId':
        this.cmdHandoffStatusReportToClientGeneratedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId':
        this.cmdHandoffStatusReportToClientPublishedByUserId = (value as string) ?? '';
        break;
      case 'ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient':
        this.cmdHandoffStatusReportToClientOutput = (value as CmdHandoffStatusReportToClientOutput | null) ?? null;
        break;
      case 'ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error':
        this.cmdHandoffStatusReportToClientError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/generateAndPublishProjectStatusReport(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdCreateStatusReportProjectProjectId) {
        this.cmdCreateStatusReportProjectProjectId = projectProjectId;
        setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId', projectProjectId);
      }
      if (!this.cmdPublishStatusReportProjectProjectId) {
        this.cmdPublishStatusReportProjectProjectId = projectProjectId;
        setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId', projectProjectId);
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

  /** action qryLocateProject (query) — route buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject; inputs: (none); writes ui.generateAndPublishProjectStatusReport.data.qryLocateProject; status ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.generateAndPublishProjectStatusReport.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status', 'error');
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

  /** action qryInspectProjectExecutionOverview (query) — route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview; inputs: projectExecutionOverviewProjectId; writes ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview; status ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status */
  async loadQryInspectProjectExecutionOverview(): Promise<void> {
    this.syncRouteParams();
    if (!this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId) {
      this.qryInspectProjectExecutionOverviewState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectExecutionOverviewState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status', 'loading');
    const params: QryInspectProjectExecutionOverviewInput = {
      projectExecutionOverviewProjectId: this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectExecutionOverviewOutput>(qryInspectProjectExecutionOverviewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectExecutionOverviewData = data;
      setState('ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview', data);
      this.qryInspectProjectExecutionOverviewState = 'success';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status', 'success');
    } else {
      this.qryInspectProjectExecutionOverviewState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status', 'error');
      if (response.error) {
        console.error('qryInspectProjectExecutionOverview failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectProjectExecutionOverview — bind UI events here */
  handleQryInspectProjectExecutionOverviewClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectProjectExecutionOverview();
  }

  /** action qryInspectScheduleRiskAssessment (query) — route buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment; inputs: scheduleRiskAssessmentProjectId; writes ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment; status ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status */
  async loadQryInspectScheduleRiskAssessment(): Promise<void> {
    this.syncRouteParams();
    if (!this.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId) {
      this.qryInspectScheduleRiskAssessmentState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectScheduleRiskAssessmentState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status', 'loading');
    const params: QryInspectScheduleRiskAssessmentInput = {
      scheduleRiskAssessmentProjectId: this.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectScheduleRiskAssessmentOutput>(qryInspectScheduleRiskAssessmentRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectScheduleRiskAssessmentData = data;
      setState('ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment', data);
      this.qryInspectScheduleRiskAssessmentState = 'success';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status', 'success');
    } else {
      this.qryInspectScheduleRiskAssessmentState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status', 'error');
      if (response.error) {
        console.error('qryInspectScheduleRiskAssessment failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectScheduleRiskAssessment — bind UI events here */
  handleQryInspectScheduleRiskAssessmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectScheduleRiskAssessment();
  }

  /** action cmdCreateStatusReport (command) — route buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport; inputs: projectProjectId, projectExecutionOverviewProjectId, title, content, communicatedRisks, generatedByUserId, publishedByUserId; writes ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport; status ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status; feedback keys action.cmdCreateStatusReport.success / action.cmdCreateStatusReport.error */
  async cmdCreateStatusReport(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateStatusReportProjectProjectId) {
      this.cmdCreateStatusReportState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateStatusReportProjectExecutionOverviewProjectId) {
      this.cmdCreateStatusReportState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateStatusReportState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'loading');
    this.cmdCreateStatusReportError = '';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error', '');
    const params: CmdCreateStatusReportInput = {
      projectProjectId: this.cmdCreateStatusReportProjectProjectId,
      projectExecutionOverviewProjectId: this.cmdCreateStatusReportProjectExecutionOverviewProjectId,
      title: this.cmdCreateStatusReportTitle,
      content: this.cmdCreateStatusReportContent,
      generatedByUserId: this.cmdCreateStatusReportGeneratedByUserId,
    };
    if (this.cmdCreateStatusReportCommunicatedRisks) {
      params.communicatedRisks = this.cmdCreateStatusReportCommunicatedRisks;
    }
    if (this.cmdCreateStatusReportPublishedByUserId) {
      params.publishedByUserId = this.cmdCreateStatusReportPublishedByUserId;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateStatusReportOutput>(cmdCreateStatusReportRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateStatusReport.error');
      this.cmdCreateStatusReportError = errMsg;
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error', errMsg);
      this.cmdCreateStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateStatusReportOutput | null = response.data ?? null;
    this.cmdCreateStatusReportOutput = data;
    setState('ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdCreateStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateStatusReport refresh failed', refreshError);
      this.cmdCreateStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectExecutionOverview();
      if (this.qryInspectProjectExecutionOverviewState === 'error') {
        this.cmdCreateStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateStatusReport refresh failed', refreshError);
      this.cmdCreateStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectScheduleRiskAssessment();
      if (this.qryInspectScheduleRiskAssessmentState === 'error') {
        this.cmdCreateStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateStatusReport refresh failed', refreshError);
      this.cmdCreateStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateStatusReportProjectExecutionOverviewProjectId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId', '');
    this.cmdCreateStatusReportTitle = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title', '');
    this.cmdCreateStatusReportContent = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content', '');
    this.cmdCreateStatusReportCommunicatedRisks = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks', '');
    this.cmdCreateStatusReportGeneratedByUserId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId', '');
    this.cmdCreateStatusReportPublishedByUserId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId', '');
    this.cmdCreateStatusReportState = 'success';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateStatusReport — bind UI events here */
  handleCmdCreateStatusReportClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateStatusReport();
    });
  }

  /** action cmdPublishStatusReport (command) — route buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport; inputs: projectProjectId, projectExecutionOverviewProjectId, statusReportStatusReportId, status; writes ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport; status ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status; feedback keys action.cmdPublishStatusReport.success / action.cmdPublishStatusReport.error */
  async cmdPublishStatusReport(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdPublishStatusReportProjectProjectId) {
      this.cmdPublishStatusReportState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdPublishStatusReportProjectExecutionOverviewProjectId) {
      this.cmdPublishStatusReportState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdPublishStatusReportStatusReportStatusReportId) {
      this.cmdPublishStatusReportState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdPublishStatusReportState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'loading');
    this.cmdPublishStatusReportError = '';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error', '');
    const params: CmdPublishStatusReportInput = {
      projectProjectId: this.cmdPublishStatusReportProjectProjectId,
      projectExecutionOverviewProjectId: this.cmdPublishStatusReportProjectExecutionOverviewProjectId,
      statusReportStatusReportId: this.cmdPublishStatusReportStatusReportStatusReportId,
      status: this.cmdPublishStatusReportStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdPublishStatusReportOutput>(cmdPublishStatusReportRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdPublishStatusReport.error');
      this.cmdPublishStatusReportError = errMsg;
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error', errMsg);
      this.cmdPublishStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdPublishStatusReportOutput | null = response.data ?? null;
    this.cmdPublishStatusReportOutput = data;
    setState('ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdPublishStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdPublishStatusReport refresh failed', refreshError);
      this.cmdPublishStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectExecutionOverview();
      if (this.qryInspectProjectExecutionOverviewState === 'error') {
        this.cmdPublishStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdPublishStatusReport refresh failed', refreshError);
      this.cmdPublishStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectScheduleRiskAssessment();
      if (this.qryInspectScheduleRiskAssessmentState === 'error') {
        this.cmdPublishStatusReportState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdPublishStatusReport refresh failed', refreshError);
      this.cmdPublishStatusReportState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdPublishStatusReportProjectExecutionOverviewProjectId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId', '');
    this.cmdPublishStatusReportStatusReportStatusReportId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId', '');
    this.cmdPublishStatusReportStatus = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status', '');
    this.cmdPublishStatusReportState = 'success';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdPublishStatusReport — bind UI events here */
  handleCmdPublishStatusReportClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdPublishStatusReport();
    });
  }

  /** action cmdHandoffStatusReportToClient (command) — route buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient; inputs: statusReportStatusReportId, title, content, communicatedRisks, generatedByUserId, publishedByUserId; writes ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient; status ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status; feedback keys action.cmdHandoffStatusReportToClient.success / action.cmdHandoffStatusReportToClient.error */
  async cmdHandoffStatusReportToClient(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffStatusReportToClientStatusReportStatusReportId) {
      this.cmdHandoffStatusReportToClientState = 'idle';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffStatusReportToClientState = 'loading';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'loading');
    this.cmdHandoffStatusReportToClientError = '';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error', '');
    const params: CmdHandoffStatusReportToClientInput = {
      statusReportStatusReportId: this.cmdHandoffStatusReportToClientStatusReportStatusReportId,
      title: this.cmdHandoffStatusReportToClientTitle,
      content: this.cmdHandoffStatusReportToClientContent,
      generatedByUserId: this.cmdHandoffStatusReportToClientGeneratedByUserId,
    };
    if (this.cmdHandoffStatusReportToClientCommunicatedRisks) {
      params.communicatedRisks = this.cmdHandoffStatusReportToClientCommunicatedRisks;
    }
    if (this.cmdHandoffStatusReportToClientPublishedByUserId) {
      params.publishedByUserId = this.cmdHandoffStatusReportToClientPublishedByUserId;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffStatusReportToClientOutput>(cmdHandoffStatusReportToClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffStatusReportToClient.error');
      this.cmdHandoffStatusReportToClientError = errMsg;
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error', errMsg);
      this.cmdHandoffStatusReportToClientState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffStatusReportToClientOutput | null = response.data ?? null;
    this.cmdHandoffStatusReportToClientOutput = data;
    setState('ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffStatusReportToClientState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffStatusReportToClient refresh failed', refreshError);
      this.cmdHandoffStatusReportToClientState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectExecutionOverview();
      if (this.qryInspectProjectExecutionOverviewState === 'error') {
        this.cmdHandoffStatusReportToClientState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffStatusReportToClient refresh failed', refreshError);
      this.cmdHandoffStatusReportToClientState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectScheduleRiskAssessment();
      if (this.qryInspectScheduleRiskAssessmentState === 'error') {
        this.cmdHandoffStatusReportToClientState = 'error';
        setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffStatusReportToClient refresh failed', refreshError);
      this.cmdHandoffStatusReportToClientState = 'error';
      setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffStatusReportToClientStatusReportStatusReportId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId', '');
    this.cmdHandoffStatusReportToClientTitle = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title', '');
    this.cmdHandoffStatusReportToClientContent = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content', '');
    this.cmdHandoffStatusReportToClientCommunicatedRisks = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks', '');
    this.cmdHandoffStatusReportToClientGeneratedByUserId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId', '');
    this.cmdHandoffStatusReportToClientPublishedByUserId = '';
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId', '');
    this.cmdHandoffStatusReportToClientState = 'success';
    setState('ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffStatusReportToClient — bind UI events here */
  handleCmdHandoffStatusReportToClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffStatusReportToClient();
    });
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId */
  setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value: string): void {
    this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId — bind UI events here */
  handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId */
  setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId(value: string): void {
    this.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId — bind UI events here */
  handleQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId */
  setCmdCreateStatusReportProjectProjectId(value: string): void {
    this.cmdCreateStatusReportProjectProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportProjectProjectId — bind UI events here */
  handleCmdCreateStatusReportProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportProjectProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId */
  setCmdCreateStatusReportProjectExecutionOverviewProjectId(value: string): void {
    this.cmdCreateStatusReportProjectExecutionOverviewProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportProjectExecutionOverviewProjectId — bind UI events here */
  handleCmdCreateStatusReportProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportProjectExecutionOverviewProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title */
  setCmdCreateStatusReportTitle(value: string): void {
    this.cmdCreateStatusReportTitle = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportTitle — bind UI events here */
  handleCmdCreateStatusReportTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportTitle(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content */
  setCmdCreateStatusReportContent(value: string): void {
    this.cmdCreateStatusReportContent = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportContent — bind UI events here */
  handleCmdCreateStatusReportContentChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportContent(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks */
  setCmdCreateStatusReportCommunicatedRisks(value: string): void {
    this.cmdCreateStatusReportCommunicatedRisks = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportCommunicatedRisks — bind UI events here */
  handleCmdCreateStatusReportCommunicatedRisksChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportCommunicatedRisks(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId */
  setCmdCreateStatusReportGeneratedByUserId(value: string): void {
    this.cmdCreateStatusReportGeneratedByUserId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportGeneratedByUserId — bind UI events here */
  handleCmdCreateStatusReportGeneratedByUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportGeneratedByUserId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId */
  setCmdCreateStatusReportPublishedByUserId(value: string): void {
    this.cmdCreateStatusReportPublishedByUserId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateStatusReportPublishedByUserId — bind UI events here */
  handleCmdCreateStatusReportPublishedByUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateStatusReportPublishedByUserId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId */
  setCmdPublishStatusReportProjectProjectId(value: string): void {
    this.cmdPublishStatusReportProjectProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdPublishStatusReportProjectProjectId — bind UI events here */
  handleCmdPublishStatusReportProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdPublishStatusReportProjectProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId */
  setCmdPublishStatusReportProjectExecutionOverviewProjectId(value: string): void {
    this.cmdPublishStatusReportProjectExecutionOverviewProjectId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdPublishStatusReportProjectExecutionOverviewProjectId — bind UI events here */
  handleCmdPublishStatusReportProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdPublishStatusReportProjectExecutionOverviewProjectId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId */
  setCmdPublishStatusReportStatusReportStatusReportId(value: string): void {
    this.cmdPublishStatusReportStatusReportStatusReportId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdPublishStatusReportStatusReportStatusReportId — bind UI events here */
  handleCmdPublishStatusReportStatusReportStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdPublishStatusReportStatusReportStatusReportId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status */
  setCmdPublishStatusReportStatus(value: string): void {
    this.cmdPublishStatusReportStatus = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdPublishStatusReportStatus — bind UI events here */
  handleCmdPublishStatusReportStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdPublishStatusReportStatus(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId */
  setCmdHandoffStatusReportToClientStatusReportStatusReportId(value: string): void {
    this.cmdHandoffStatusReportToClientStatusReportStatusReportId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientStatusReportStatusReportId — bind UI events here */
  handleCmdHandoffStatusReportToClientStatusReportStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientStatusReportStatusReportId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title */
  setCmdHandoffStatusReportToClientTitle(value: string): void {
    this.cmdHandoffStatusReportToClientTitle = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientTitle — bind UI events here */
  handleCmdHandoffStatusReportToClientTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientTitle(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content */
  setCmdHandoffStatusReportToClientContent(value: string): void {
    this.cmdHandoffStatusReportToClientContent = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientContent — bind UI events here */
  handleCmdHandoffStatusReportToClientContentChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientContent(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks */
  setCmdHandoffStatusReportToClientCommunicatedRisks(value: string): void {
    this.cmdHandoffStatusReportToClientCommunicatedRisks = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientCommunicatedRisks — bind UI events here */
  handleCmdHandoffStatusReportToClientCommunicatedRisksChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientCommunicatedRisks(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId */
  setCmdHandoffStatusReportToClientGeneratedByUserId(value: string): void {
    this.cmdHandoffStatusReportToClientGeneratedByUserId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientGeneratedByUserId — bind UI events here */
  handleCmdHandoffStatusReportToClientGeneratedByUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientGeneratedByUserId(value);
  }

  /** setter for state ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId */
  setCmdHandoffStatusReportToClientPublishedByUserId(value: string): void {
    this.cmdHandoffStatusReportToClientPublishedByUserId = value;
    setState('ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffStatusReportToClientPublishedByUserId — bind UI events here */
  handleCmdHandoffStatusReportToClientPublishedByUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffStatusReportToClientPublishedByUserId(value);
  }
}
