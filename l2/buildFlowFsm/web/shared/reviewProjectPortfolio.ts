/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryInspectProjectDashboardInput,
  QryInspectProjectDashboardOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
  CmdHandoffProjectToFieldCoordinatorInput,
  CmdHandoffProjectToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.js';
import {
  qryInspectProjectDashboardRoute,
  qryLocateProjectRoute,
  qryInspectProjectExecutionOverviewRoute,
  cmdHandoffProjectToFieldCoordinatorRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.js';

export type {
  QryInspectProjectDashboardInput,
  QryInspectProjectDashboardOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
  CmdHandoffProjectToFieldCoordinatorInput,
  CmdHandoffProjectToFieldCoordinatorOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.js';

/// **collab_i18n_start**
const message_pt = {
  'section.reviewProjectPortfolio.projectDashboardSection.title': 'Visão do portfólio',
  'organism.reviewProjectPortfolio.qryInspectProjectDashboard.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label': 'Active Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label': 'Total Budget',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label': 'Budget Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'section.reviewProjectPortfolio.projectSelectionSection.title': 'Obra em foco',
  'organism.reviewProjectPortfolio.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label': 'Name',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label': 'Address',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label': 'Status',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label': 'Name',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label': 'Address',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label': 'Planned End Date',
  'action.cmdHandoffProjectToFieldCoordinator.success': 'Encaminhar a obra para acompanhamento de campo: OK',
  'action.cmdHandoffProjectToFieldCoordinator.error': 'Encaminhar a obra para acompanhamento de campo: falhou',
  'section.reviewProjectPortfolio.portfolioOverview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.projectAttentionWorkspace.title': 'Obra que exige atenção',
  'section.reviewProjectPortfolio.portfolio-overview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.project-triage.title': 'Obras que exigem atenção',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.reviewProjectPortfolio.projectDashboardSection.title': 'Visão do portfólio',
  'organism.reviewProjectPortfolio.qryInspectProjectDashboard.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label': 'Active Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label': 'Total Budget',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label': 'Budget Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'section.reviewProjectPortfolio.projectSelectionSection.title': 'Obra em foco',
  'organism.reviewProjectPortfolio.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label': 'Name',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label': 'Address',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label': 'Status',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label': 'Name',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label': 'Address',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label': 'Planned End Date',
  'action.cmdHandoffProjectToFieldCoordinator.success': 'Encaminhar a obra para acompanhamento de campo: OK',
  'action.cmdHandoffProjectToFieldCoordinator.error': 'Encaminhar a obra para acompanhamento de campo: falhou',
  'section.reviewProjectPortfolio.portfolioOverview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.projectAttentionWorkspace.title': 'Obra que exige atenção',
  'section.reviewProjectPortfolio.portfolio-overview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.project-triage.title': 'Obras que exigem atenção',
};
const message_en: MessageType = {
  'section.reviewProjectPortfolio.projectDashboardSection.title': 'Visão do portfólio',
  'organism.reviewProjectPortfolio.qryInspectProjectDashboard.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label': 'Active Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label': 'Total Budget',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label': 'Budget Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'section.reviewProjectPortfolio.projectSelectionSection.title': 'Obra em foco',
  'organism.reviewProjectPortfolio.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label': 'Name',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label': 'Address',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label': 'Status',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label': 'Name',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label': 'Address',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label': 'Planned End Date',
  'action.cmdHandoffProjectToFieldCoordinator.success': 'Encaminhar a obra para acompanhamento de campo: OK',
  'action.cmdHandoffProjectToFieldCoordinator.error': 'Encaminhar a obra para acompanhamento de campo: falhou',
  'section.reviewProjectPortfolio.portfolioOverview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.projectAttentionWorkspace.title': 'Obra que exige atenção',
  'section.reviewProjectPortfolio.portfolio-overview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.project-triage.title': 'Obras que exigem atenção',
};
const message_es: MessageType = {
  'section.reviewProjectPortfolio.projectDashboardSection.title': 'Visão do portfólio',
  'organism.reviewProjectPortfolio.qryInspectProjectDashboard.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title': 'Consultar o painel de obras',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label': 'Active Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label': 'Active Project Count',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label': 'Total Budget',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label': 'Total Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label': 'Budget Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label': 'Cost Attention Projects',
  'intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label': 'Upcoming Tasks',
  'section.reviewProjectPortfolio.projectSelectionSection.title': 'Obra em foco',
  'organism.reviewProjectPortfolio.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.reviewProjectPortfolio.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label': 'Name',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label': 'Address',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label': 'Status',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator': 'Encaminhar a obra para acompanhamento de campo',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label': 'Client Id',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label': 'Name',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label': 'Address',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label': 'Planned End Date',
  'action.cmdHandoffProjectToFieldCoordinator.success': 'Encaminhar a obra para acompanhamento de campo: OK',
  'action.cmdHandoffProjectToFieldCoordinator.error': 'Encaminhar a obra para acompanhamento de campo: falhou',
  'section.reviewProjectPortfolio.portfolioOverview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.projectAttentionWorkspace.title': 'Obra que exige atenção',
  'section.reviewProjectPortfolio.portfolio-overview.title': 'Visão do portfólio',
  'section.reviewProjectPortfolio.project-triage.title': 'Obras que exigem atenção',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.reviewProjectPortfolio.status',
  'ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status',
  'ui.reviewProjectPortfolio.data.qryInspectProjectDashboard',
  'ui.reviewProjectPortfolio.action.qryLocateProject.status',
  'ui.reviewProjectPortfolio.data.qryLocateProject',
  'ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status',
  'ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId',
  'ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview',
  'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate',
  'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate',
  'ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator',
  'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error',
];

export class BuildFlowFsmReviewProjectPortfolioBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryInspectProjectDashboardState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectDashboardState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectDashboardData — queryResult, outputShape: object */
  @property() qryInspectProjectDashboardData: QryInspectProjectDashboardOutput | null = null;
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
  /** state cmdHandoffProjectToFieldCoordinatorState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffProjectToFieldCoordinatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffProjectToFieldCoordinatorProjectProjectId — input */
  @property() cmdHandoffProjectToFieldCoordinatorProjectProjectId: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorClientId — input */
  @property() cmdHandoffProjectToFieldCoordinatorClientId: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorName — input */
  @property() cmdHandoffProjectToFieldCoordinatorName: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorAddress — input */
  @property() cmdHandoffProjectToFieldCoordinatorAddress: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorAuthorizedBudget — input */
  @property() cmdHandoffProjectToFieldCoordinatorAuthorizedBudget: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorPlannedStartDate — input */
  @property() cmdHandoffProjectToFieldCoordinatorPlannedStartDate: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorPlannedEndDate — input */
  @property() cmdHandoffProjectToFieldCoordinatorPlannedEndDate: string = '';
  /** state cmdHandoffProjectToFieldCoordinatorOutput — commandOutput */
  @property() cmdHandoffProjectToFieldCoordinatorOutput: CmdHandoffProjectToFieldCoordinatorOutput | null = null;
  /** state cmdHandoffProjectToFieldCoordinatorError — actionError */
  @property() cmdHandoffProjectToFieldCoordinatorError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.reviewProjectPortfolio.status', '');
    this.initStateValue('ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status', 'idle');
    this.initStateValue('ui.reviewProjectPortfolio.data.qryInspectProjectDashboard', null);
    this.initStateValue('ui.reviewProjectPortfolio.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.reviewProjectPortfolio.data.qryLocateProject', []);
    this.initStateValue('ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status', 'idle');
    this.initStateValue('ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview', null);
    this.initStateValue('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'idle');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate', '');
    this.initStateValue('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate', '');
    this.initStateValue('ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator', null);
    this.initStateValue('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryInspectProjectDashboard();
    void this.loadQryLocateProject();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.reviewProjectPortfolio.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status':
        this.qryInspectProjectDashboardState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.data.qryInspectProjectDashboard':
        this.qryInspectProjectDashboardData = (value as QryInspectProjectDashboardOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status':
        this.cmdHandoffProjectToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId':
        this.cmdHandoffProjectToFieldCoordinatorProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId':
        this.cmdHandoffProjectToFieldCoordinatorClientId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name':
        this.cmdHandoffProjectToFieldCoordinatorName = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address':
        this.cmdHandoffProjectToFieldCoordinatorAddress = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget':
        this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate':
        this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate':
        this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator':
        this.cmdHandoffProjectToFieldCoordinatorOutput = (value as CmdHandoffProjectToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error':
        this.cmdHandoffProjectToFieldCoordinatorError = (value as string) ?? '';
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
      case 'ui.reviewProjectPortfolio.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status':
        this.qryInspectProjectDashboardState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.data.qryInspectProjectDashboard':
        this.qryInspectProjectDashboardData = (value as QryInspectProjectDashboardOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status':
        this.cmdHandoffProjectToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId':
        this.cmdHandoffProjectToFieldCoordinatorProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId':
        this.cmdHandoffProjectToFieldCoordinatorClientId = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name':
        this.cmdHandoffProjectToFieldCoordinatorName = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address':
        this.cmdHandoffProjectToFieldCoordinatorAddress = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget':
        this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate':
        this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate':
        this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator':
        this.cmdHandoffProjectToFieldCoordinatorOutput = (value as CmdHandoffProjectToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error':
        this.cmdHandoffProjectToFieldCoordinatorError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/reviewProjectPortfolio(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdHandoffProjectToFieldCoordinatorProjectProjectId) {
        this.cmdHandoffProjectToFieldCoordinatorProjectProjectId = projectProjectId;
        setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId', projectProjectId);
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

  /** action qryInspectProjectDashboard (query) — route buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard; inputs: (none); writes ui.reviewProjectPortfolio.data.qryInspectProjectDashboard; status ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status */
  async loadQryInspectProjectDashboard(): Promise<void> {
    this.syncRouteParams();
    this.qryInspectProjectDashboardState = 'loading';
    setState('ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status', 'loading');
    const params: QryInspectProjectDashboardInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectDashboardOutput>(qryInspectProjectDashboardRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectDashboardData = data;
      setState('ui.reviewProjectPortfolio.data.qryInspectProjectDashboard', data);
      this.qryInspectProjectDashboardState = 'success';
      setState('ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status', 'success');
    } else {
      this.qryInspectProjectDashboardState = 'error';
      setState('ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status', 'error');
      if (response.error) {
        console.error('qryInspectProjectDashboard failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectProjectDashboard — bind UI events here */
  handleQryInspectProjectDashboardClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectProjectDashboard();
  }

  /** action qryLocateProject (query) — route buildFlowFsm.reviewProjectPortfolio.qryLocateProject; inputs: (none); writes ui.reviewProjectPortfolio.data.qryLocateProject; status ui.reviewProjectPortfolio.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.reviewProjectPortfolio.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.reviewProjectPortfolio.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.reviewProjectPortfolio.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.reviewProjectPortfolio.action.qryLocateProject.status', 'error');
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

  /** action qryInspectProjectExecutionOverview (query) — route buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview; inputs: projectExecutionOverviewProjectId; writes ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview; status ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status */
  async loadQryInspectProjectExecutionOverview(): Promise<void> {
    this.syncRouteParams();
    if (!this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId) {
      this.qryInspectProjectExecutionOverviewState = 'idle';
      setState('ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectExecutionOverviewState = 'loading';
    setState('ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status', 'loading');
    const params: QryInspectProjectExecutionOverviewInput = {
      projectExecutionOverviewProjectId: this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectExecutionOverviewOutput>(qryInspectProjectExecutionOverviewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectExecutionOverviewData = data;
      setState('ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview', data);
      this.qryInspectProjectExecutionOverviewState = 'success';
      setState('ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status', 'success');
    } else {
      this.qryInspectProjectExecutionOverviewState = 'error';
      setState('ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status', 'error');
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

  /** action cmdHandoffProjectToFieldCoordinator (command) — route buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator; inputs: projectProjectId, clientId, name, address, authorizedBudget, plannedStartDate, plannedEndDate; writes ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator; status ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status; feedback keys action.cmdHandoffProjectToFieldCoordinator.success / action.cmdHandoffProjectToFieldCoordinator.error */
  async cmdHandoffProjectToFieldCoordinator(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffProjectToFieldCoordinatorProjectProjectId) {
      this.cmdHandoffProjectToFieldCoordinatorState = 'idle';
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffProjectToFieldCoordinatorState = 'loading';
    setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'loading');
    this.cmdHandoffProjectToFieldCoordinatorError = '';
    setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error', '');
    const authorizedBudgetNum = Number(this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget);
    const params: CmdHandoffProjectToFieldCoordinatorInput = {
      projectProjectId: this.cmdHandoffProjectToFieldCoordinatorProjectProjectId,
      clientId: this.cmdHandoffProjectToFieldCoordinatorClientId,
      name: this.cmdHandoffProjectToFieldCoordinatorName,
      address: this.cmdHandoffProjectToFieldCoordinatorAddress,
      authorizedBudget: Number.isNaN(authorizedBudgetNum) ? 0 : authorizedBudgetNum,
      plannedStartDate: this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate,
      plannedEndDate: this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffProjectToFieldCoordinatorOutput>(cmdHandoffProjectToFieldCoordinatorRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffProjectToFieldCoordinator.error');
      this.cmdHandoffProjectToFieldCoordinatorError = errMsg;
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error', errMsg);
      this.cmdHandoffProjectToFieldCoordinatorState = 'error';
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffProjectToFieldCoordinatorOutput | null = response.data ?? null;
    this.cmdHandoffProjectToFieldCoordinatorOutput = data;
    setState('ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator', data);
    try {
      await this.loadQryInspectProjectDashboard();
      if (this.qryInspectProjectDashboardState === 'error') {
        this.cmdHandoffProjectToFieldCoordinatorState = 'error';
        setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffProjectToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffProjectToFieldCoordinatorState = 'error';
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffProjectToFieldCoordinatorState = 'error';
        setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffProjectToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffProjectToFieldCoordinatorState = 'error';
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectProjectExecutionOverview();
      if (this.qryInspectProjectExecutionOverviewState === 'error') {
        this.cmdHandoffProjectToFieldCoordinatorState = 'error';
        setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffProjectToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffProjectToFieldCoordinatorState = 'error';
      setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffProjectToFieldCoordinatorClientId = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId', '');
    this.cmdHandoffProjectToFieldCoordinatorName = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name', '');
    this.cmdHandoffProjectToFieldCoordinatorAddress = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address', '');
    this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget', '');
    this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate', '');
    this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate = '';
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate', '');
    this.cmdHandoffProjectToFieldCoordinatorState = 'success';
    setState('ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffProjectToFieldCoordinator — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffProjectToFieldCoordinator();
    });
  }

  /** setter for state ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId */
  setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value: string): void {
    this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = value;
    setState('ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId — bind UI events here */
  handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId */
  setCmdHandoffProjectToFieldCoordinatorProjectProjectId(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorProjectProjectId = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorProjectProjectId — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorProjectProjectId(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId */
  setCmdHandoffProjectToFieldCoordinatorClientId(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorClientId = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorClientId — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorClientId(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name */
  setCmdHandoffProjectToFieldCoordinatorName(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorName = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorName — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorName(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address */
  setCmdHandoffProjectToFieldCoordinatorAddress(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorAddress = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorAddress — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorAddress(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget */
  setCmdHandoffProjectToFieldCoordinatorAuthorizedBudget(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorAuthorizedBudget(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate */
  setCmdHandoffProjectToFieldCoordinatorPlannedStartDate(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorPlannedStartDate — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorPlannedStartDate(value);
  }

  /** setter for state ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate */
  setCmdHandoffProjectToFieldCoordinatorPlannedEndDate(value: string): void {
    this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate = value;
    setState('ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffProjectToFieldCoordinatorPlannedEndDate — bind UI events here */
  handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffProjectToFieldCoordinatorPlannedEndDate(value);
  }
}
