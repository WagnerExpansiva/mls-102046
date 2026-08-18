/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectTimeLogsInput,
  QryInspectProjectTimeLogsOutput,
  QryInspectProjectMaterialUsagesInput,
  QryInspectProjectMaterialUsagesOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.js';
import {
  qryLocateProjectRoute,
  qryInspectProjectTimeLogsRoute,
  qryInspectProjectMaterialUsagesRoute,
  qryInspectProjectExecutionOverviewRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.js';

export type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectProjectTimeLogsInput,
  QryInspectProjectTimeLogsOutput,
  QryInspectProjectMaterialUsagesInput,
  QryInspectProjectMaterialUsagesOutput,
  QryInspectProjectExecutionOverviewInput,
  QryInspectProjectExecutionOverviewOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/monitorDailyProjectRecords.js';

/// **collab_i18n_start**
const message_pt = {
  'section.monitorDailyProjectRecords.project-selection.title': 'Seleção da obra',
  'organism.monitorDailyProjectRecords.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label': 'Name',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label': 'Address',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.monitorDailyProjectRecords.execution-monitoring.title': 'Acompanhamento da execução',
  'organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label': 'Time Log Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label': 'Work Task Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label': 'Work Date',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label': 'Hours Worked',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label': 'Quantity',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label': 'Usage Description',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label': 'Consumed On',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'section.monitorDailyProjectRecords.project-monitoring.title': 'Acompanhamento da obra',
  'section.monitorDailyProjectRecords.project-selection-and-overview.title': 'Seleção e visão executiva da obra',
  'section.monitorDailyProjectRecords.daily-records-inspection.title': 'Registros diários para investigação',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.monitorDailyProjectRecords.project-selection.title': 'Seleção da obra',
  'organism.monitorDailyProjectRecords.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label': 'Name',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label': 'Address',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.monitorDailyProjectRecords.execution-monitoring.title': 'Acompanhamento da execução',
  'organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label': 'Time Log Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label': 'Work Task Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label': 'Work Date',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label': 'Hours Worked',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label': 'Quantity',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label': 'Usage Description',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label': 'Consumed On',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'section.monitorDailyProjectRecords.project-monitoring.title': 'Acompanhamento da obra',
  'section.monitorDailyProjectRecords.project-selection-and-overview.title': 'Seleção e visão executiva da obra',
  'section.monitorDailyProjectRecords.daily-records-inspection.title': 'Registros diários para investigação',
};
const message_en: MessageType = {
  'section.monitorDailyProjectRecords.project-selection.title': 'Seleção da obra',
  'organism.monitorDailyProjectRecords.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label': 'Name',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label': 'Address',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.monitorDailyProjectRecords.execution-monitoring.title': 'Acompanhamento da execução',
  'organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label': 'Time Log Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label': 'Work Task Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label': 'Work Date',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label': 'Hours Worked',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label': 'Quantity',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label': 'Usage Description',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label': 'Consumed On',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'section.monitorDailyProjectRecords.project-monitoring.title': 'Acompanhamento da obra',
  'section.monitorDailyProjectRecords.project-selection-and-overview.title': 'Seleção e visão executiva da obra',
  'section.monitorDailyProjectRecords.daily-records-inspection.title': 'Registros diários para investigação',
};
const message_es: MessageType = {
  'section.monitorDailyProjectRecords.project-selection.title': 'Seleção da obra',
  'organism.monitorDailyProjectRecords.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label': 'Name',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label': 'Address',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.monitorDailyProjectRecords.execution-monitoring.title': 'Acompanhamento da execução',
  'organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title': 'Analisar a execução da obra',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label': 'Project Name',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label': 'Project Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.workTaskIds.label': 'Work Task Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label': 'Task Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label': 'Upcoming Commitments',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.timeLogIds.label': 'Time Log Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label': 'Total Logged Hours',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label': 'Material Usage Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label': 'Material Usage Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label': 'Actual Labor Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label': 'Actual Material Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label': 'Actual Cost',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label': 'Budget Amount',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label': 'Cost Variance',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label': 'Change Order Ids',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label': 'Change Order Impact Summary',
  'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.calculatedAt.label': 'Calculated At',
  'organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title': 'Consultar os registros diários de horas',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label': 'Time Log Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label': 'Work Task Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label': 'Field Worker Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label': 'Work Date',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label': 'Hours Worked',
  'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label': 'Hourly Labor Cost',
  'organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title': 'Consultar os consumos de materiais',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label': 'Status',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label': 'Project Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label': 'Quantity',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label': 'Usage Description',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label': 'Consumed On',
  'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'section.monitorDailyProjectRecords.project-monitoring.title': 'Acompanhamento da obra',
  'section.monitorDailyProjectRecords.project-selection-and-overview.title': 'Seleção e visão executiva da obra',
  'section.monitorDailyProjectRecords.daily-records-inspection.title': 'Registros diários para investigação',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.monitorDailyProjectRecords.status',
  'ui.monitorDailyProjectRecords.action.qryLocateProject.status',
  'ui.monitorDailyProjectRecords.data.qryLocateProject',
  'ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status',
  'ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId',
  'ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs',
  'ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status',
  'ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId',
  'ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages',
  'ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status',
  'ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId',
  'ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview',
];

export class BuildFlowFsmMonitorDailyProjectRecordsBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryInspectProjectTimeLogsState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectTimeLogsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectTimeLogsTimeLogTimeLogId — input */
  @property() qryInspectProjectTimeLogsTimeLogTimeLogId: string = '';
  /** state qryInspectProjectTimeLogsData — queryResult, outputShape: object */
  @property() qryInspectProjectTimeLogsData: QryInspectProjectTimeLogsOutput | null = null;
  /** state qryInspectProjectMaterialUsagesState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectMaterialUsagesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId — input */
  @property() qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId: string = '';
  /** state qryInspectProjectMaterialUsagesData — queryResult, outputShape: object */
  @property() qryInspectProjectMaterialUsagesData: QryInspectProjectMaterialUsagesOutput | null = null;
  /** state qryInspectProjectExecutionOverviewState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectProjectExecutionOverviewState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId — input */
  @property() qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId: string = '';
  /** state qryInspectProjectExecutionOverviewData — queryResult, outputShape: object */
  @property() qryInspectProjectExecutionOverviewData: QryInspectProjectExecutionOverviewOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.monitorDailyProjectRecords.status', '');
    this.initStateValue('ui.monitorDailyProjectRecords.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.monitorDailyProjectRecords.data.qryLocateProject', []);
    this.initStateValue('ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status', 'idle');
    this.initStateValue('ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId', '');
    this.initStateValue('ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs', null);
    this.initStateValue('ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status', 'idle');
    this.initStateValue('ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId', '');
    this.initStateValue('ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages', null);
    this.initStateValue('ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status', 'idle');
    this.initStateValue('ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', '');
    this.initStateValue('ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview', null);
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
      case 'ui.monitorDailyProjectRecords.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status':
        this.qryInspectProjectTimeLogsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId':
        this.qryInspectProjectTimeLogsTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs':
        this.qryInspectProjectTimeLogsData = (value as QryInspectProjectTimeLogsOutput | null) ?? null;
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status':
        this.qryInspectProjectMaterialUsagesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId':
        this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages':
        this.qryInspectProjectMaterialUsagesData = (value as QryInspectProjectMaterialUsagesOutput | null) ?? null;
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
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
      case 'ui.monitorDailyProjectRecords.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status':
        this.qryInspectProjectTimeLogsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId':
        this.qryInspectProjectTimeLogsTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs':
        this.qryInspectProjectTimeLogsData = (value as QryInspectProjectTimeLogsOutput | null) ?? null;
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status':
        this.qryInspectProjectMaterialUsagesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId':
        this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages':
        this.qryInspectProjectMaterialUsagesData = (value as QryInspectProjectMaterialUsagesOutput | null) ?? null;
        break;
      case 'ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status':
        this.qryInspectProjectExecutionOverviewState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId':
        this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = (value as string) ?? '';
        break;
      case 'ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview':
        this.qryInspectProjectExecutionOverviewData = (value as QryInspectProjectExecutionOverviewOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action qryLocateProject (query) — route buildFlowFsm.monitorDailyProjectRecords.qryLocateProject; inputs: (none); writes ui.monitorDailyProjectRecords.data.qryLocateProject; status ui.monitorDailyProjectRecords.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.qryLocateProjectState = 'loading';
    setState('ui.monitorDailyProjectRecords.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.monitorDailyProjectRecords.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.monitorDailyProjectRecords.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.monitorDailyProjectRecords.action.qryLocateProject.status', 'error');
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

  /** action qryInspectProjectTimeLogs (query) — route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectTimeLogs; inputs: timeLogTimeLogId; writes ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs; status ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status */
  async loadQryInspectProjectTimeLogs(): Promise<void> {
    if (!this.qryInspectProjectTimeLogsTimeLogTimeLogId) {
      this.qryInspectProjectTimeLogsState = 'idle';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectTimeLogsState = 'loading';
    setState('ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status', 'loading');
    const params: QryInspectProjectTimeLogsInput = {
      timeLogTimeLogId: this.qryInspectProjectTimeLogsTimeLogTimeLogId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectTimeLogsOutput>(qryInspectProjectTimeLogsRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectTimeLogsData = data;
      setState('ui.monitorDailyProjectRecords.data.qryInspectProjectTimeLogs', data);
      this.qryInspectProjectTimeLogsState = 'success';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status', 'success');
    } else {
      this.qryInspectProjectTimeLogsState = 'error';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectTimeLogs.status', 'error');
      if (response.error) {
        console.error('qryInspectProjectTimeLogs failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectProjectTimeLogs — bind UI events here */
  handleQryInspectProjectTimeLogsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectProjectTimeLogs();
  }

  /** action qryInspectProjectMaterialUsages (query) — route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectMaterialUsages; inputs: materialUsageMaterialUsageId; writes ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages; status ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status */
  async loadQryInspectProjectMaterialUsages(): Promise<void> {
    if (!this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId) {
      this.qryInspectProjectMaterialUsagesState = 'idle';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectMaterialUsagesState = 'loading';
    setState('ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status', 'loading');
    const params: QryInspectProjectMaterialUsagesInput = {
      materialUsageMaterialUsageId: this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectMaterialUsagesOutput>(qryInspectProjectMaterialUsagesRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectMaterialUsagesData = data;
      setState('ui.monitorDailyProjectRecords.data.qryInspectProjectMaterialUsages', data);
      this.qryInspectProjectMaterialUsagesState = 'success';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status', 'success');
    } else {
      this.qryInspectProjectMaterialUsagesState = 'error';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectMaterialUsages.status', 'error');
      if (response.error) {
        console.error('qryInspectProjectMaterialUsages failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectProjectMaterialUsages — bind UI events here */
  handleQryInspectProjectMaterialUsagesClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectProjectMaterialUsages();
  }

  /** action qryInspectProjectExecutionOverview (query) — route buildFlowFsm.monitorDailyProjectRecords.qryInspectProjectExecutionOverview; inputs: projectExecutionOverviewProjectId; writes ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview; status ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status */
  async loadQryInspectProjectExecutionOverview(): Promise<void> {
    if (!this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId) {
      this.qryInspectProjectExecutionOverviewState = 'idle';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectProjectExecutionOverviewState = 'loading';
    setState('ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status', 'loading');
    const params: QryInspectProjectExecutionOverviewInput = {
      projectExecutionOverviewProjectId: this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectProjectExecutionOverviewOutput>(qryInspectProjectExecutionOverviewRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectProjectExecutionOverviewData = data;
      setState('ui.monitorDailyProjectRecords.data.qryInspectProjectExecutionOverview', data);
      this.qryInspectProjectExecutionOverviewState = 'success';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status', 'success');
    } else {
      this.qryInspectProjectExecutionOverviewState = 'error';
      setState('ui.monitorDailyProjectRecords.action.qryInspectProjectExecutionOverview.status', 'error');
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

  /** setter for state ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId */
  setQryInspectProjectTimeLogsTimeLogTimeLogId(value: string): void {
    this.qryInspectProjectTimeLogsTimeLogTimeLogId = value;
    setState('ui.monitorDailyProjectRecords.input.qryInspectProjectTimeLogs.timeLogTimeLogId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectTimeLogsTimeLogTimeLogId — bind UI events here */
  handleQryInspectProjectTimeLogsTimeLogTimeLogIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectTimeLogsTimeLogTimeLogId(value);
  }

  /** setter for state ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId */
  setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId(value: string): void {
    this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId = value;
    setState('ui.monitorDailyProjectRecords.input.qryInspectProjectMaterialUsages.materialUsageMaterialUsageId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId — bind UI events here */
  handleQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId(value);
  }

  /** setter for state ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId */
  setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value: string): void {
    this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId = value;
    setState('ui.monitorDailyProjectRecords.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId — bind UI events here */
  handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(value);
  }
}
