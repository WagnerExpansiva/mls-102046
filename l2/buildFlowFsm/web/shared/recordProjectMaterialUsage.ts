/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryLocateInventoryItemInput,
  QryLocateInventoryItemOutput,
  CmdCreateMaterialUsageInput,
  CmdCreateMaterialUsageOutput,
  CmdHandoffMaterialUsageToFieldCoordinatorInput,
  CmdHandoffMaterialUsageToFieldCoordinatorOutput,
  QryInventoryBalancePickerInput,
  QryInventoryBalancePickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.js';
import {
  qryLocateProjectRoute,
  qryLocateInventoryItemRoute,
  cmdCreateMaterialUsageRoute,
  cmdHandoffMaterialUsageToFieldCoordinatorRoute,
  qryInventoryBalancePickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.js';

export type {
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryLocateInventoryItemInput,
  QryLocateInventoryItemOutput,
  CmdCreateMaterialUsageInput,
  CmdCreateMaterialUsageOutput,
  CmdHandoffMaterialUsageToFieldCoordinatorInput,
  CmdHandoffMaterialUsageToFieldCoordinatorOutput,
  QryInventoryBalancePickerInput,
  QryInventoryBalancePickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/recordProjectMaterialUsage.js';

/// **collab_i18n_start**
const message_pt = {
  'section.recordProjectMaterialUsage.locateProject.title': 'Project context',
  'organism.recordProjectMaterialUsage.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label': 'Address',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label': 'Status',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.recordProjectMaterialUsage.locateInventoryItem.title': 'Material context',
  'organism.recordProjectMaterialUsage.qryLocateInventoryItem.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label': 'Description',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label': 'Status',
  'section.recordProjectMaterialUsage.createMaterialUsage.title': 'Record consumption',
  'organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title': 'Coordinator handoff',
  'organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.success': 'Informar o consumo ao coordenador: OK',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.error': 'Informar o consumo ao coordenador: falhou',
  'section.recordProjectMaterialUsage.usageWorkspace.title': 'Registrar consumo',
  'section.recordProjectMaterialUsage.materialUsageWorkspace.title': 'Registro e encaminhamento do consumo',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.recordProjectMaterialUsage.locateProject.title': 'Project context',
  'organism.recordProjectMaterialUsage.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label': 'Address',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label': 'Status',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.recordProjectMaterialUsage.locateInventoryItem.title': 'Material context',
  'organism.recordProjectMaterialUsage.qryLocateInventoryItem.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label': 'Description',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label': 'Status',
  'section.recordProjectMaterialUsage.createMaterialUsage.title': 'Record consumption',
  'organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title': 'Coordinator handoff',
  'organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.success': 'Informar o consumo ao coordenador: OK',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.error': 'Informar o consumo ao coordenador: falhou',
  'section.recordProjectMaterialUsage.usageWorkspace.title': 'Registrar consumo',
  'section.recordProjectMaterialUsage.materialUsageWorkspace.title': 'Registro e encaminhamento do consumo',
};
const message_en: MessageType = {
  'section.recordProjectMaterialUsage.locateProject.title': 'Project context',
  'organism.recordProjectMaterialUsage.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label': 'Address',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label': 'Status',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.recordProjectMaterialUsage.locateInventoryItem.title': 'Material context',
  'organism.recordProjectMaterialUsage.qryLocateInventoryItem.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label': 'Description',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label': 'Status',
  'section.recordProjectMaterialUsage.createMaterialUsage.title': 'Record consumption',
  'organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title': 'Coordinator handoff',
  'organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.success': 'Informar o consumo ao coordenador: OK',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.error': 'Informar o consumo ao coordenador: falhou',
  'section.recordProjectMaterialUsage.usageWorkspace.title': 'Registrar consumo',
  'section.recordProjectMaterialUsage.materialUsageWorkspace.title': 'Registro e encaminhamento do consumo',
};
const message_es: MessageType = {
  'section.recordProjectMaterialUsage.locateProject.title': 'Project context',
  'organism.recordProjectMaterialUsage.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label': 'Address',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label': 'Status',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.recordProjectMaterialUsage.locateInventoryItem.title': 'Material context',
  'organism.recordProjectMaterialUsage.qryLocateInventoryItem.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title': 'Selecionar o material consumido',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label': 'Name',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label': 'Description',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label': 'Status',
  'section.recordProjectMaterialUsage.createMaterialUsage.title': 'Record consumption',
  'organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title': 'Coordinator handoff',
  'organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator': 'Informar o consumo ao coordenador',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label': 'Quantity',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label': 'Usage Description',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label': 'Consumed On',
  'intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.success': 'Informar o consumo ao coordenador: OK',
  'action.cmdHandoffMaterialUsageToFieldCoordinator.error': 'Informar o consumo ao coordenador: falhou',
  'section.recordProjectMaterialUsage.usageWorkspace.title': 'Registrar consumo',
  'section.recordProjectMaterialUsage.materialUsageWorkspace.title': 'Registro e encaminhamento do consumo',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.recordProjectMaterialUsage.status',
  'ui.recordProjectMaterialUsage.action.qryLocateProject.status',
  'ui.recordProjectMaterialUsage.data.qryLocateProject',
  'ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status',
  'ui.recordProjectMaterialUsage.data.qryLocateInventoryItem',
  'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn',
  'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis',
  'ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage',
  'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error',
  'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status',
  'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId',
  'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity',
  'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription',
  'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn',
  'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis',
  'ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator',
  'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error',
  'ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status',
  'ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker',
];

export class BuildFlowFsmRecordProjectMaterialUsageBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryLocateInventoryItemState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateInventoryItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateInventoryItemData — queryResult, outputShape: array */
  @property() qryLocateInventoryItemData: QryLocateInventoryItemOutput[] = [];
  /** state cmdCreateMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId — input */
  @property() cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId: string = '';
  /** state cmdCreateMaterialUsageInventoryItemInventoryItemId — input */
  @property() cmdCreateMaterialUsageInventoryItemInventoryItemId: string = '';
  /** state cmdCreateMaterialUsageProjectProjectId — input */
  @property() cmdCreateMaterialUsageProjectProjectId: string = '';
  /** state cmdCreateMaterialUsageQuantity — input */
  @property() cmdCreateMaterialUsageQuantity: string = '';
  /** state cmdCreateMaterialUsageUsageDescription — input */
  @property() cmdCreateMaterialUsageUsageDescription: string = '';
  /** state cmdCreateMaterialUsageConsumedOn — input */
  @property() cmdCreateMaterialUsageConsumedOn: string = '';
  /** state cmdCreateMaterialUsageUnitCostBasis — input */
  @property() cmdCreateMaterialUsageUnitCostBasis: string = '';
  /** state cmdCreateMaterialUsageOutput — commandOutput */
  @property() cmdCreateMaterialUsageOutput: CmdCreateMaterialUsageOutput | null = null;
  /** state cmdCreateMaterialUsageError — actionError */
  @property() cmdCreateMaterialUsageError: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId — input */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorQuantity — input */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorQuantity: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription — input */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn — input */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis — input */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis: string = '';
  /** state cmdHandoffMaterialUsageToFieldCoordinatorOutput — commandOutput */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorOutput: CmdHandoffMaterialUsageToFieldCoordinatorOutput | null = null;
  /** state cmdHandoffMaterialUsageToFieldCoordinatorError — actionError */
  @property() cmdHandoffMaterialUsageToFieldCoordinatorError: string = '';
  /** state qryInventoryBalancePickerState — actionStatus, values: idle|loading|success|error */
  @property() qryInventoryBalancePickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInventoryBalancePickerData — queryResult, outputShape: array */
  @property() qryInventoryBalancePickerData: QryInventoryBalancePickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.recordProjectMaterialUsage.status', '');
    this.initStateValue('ui.recordProjectMaterialUsage.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.recordProjectMaterialUsage.data.qryLocateProject', []);
    this.initStateValue('ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status', 'idle');
    this.initStateValue('ui.recordProjectMaterialUsage.data.qryLocateInventoryItem', []);
    this.initStateValue('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'idle');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis', '');
    this.initStateValue('ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage', null);
    this.initStateValue('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error', '');
    this.initStateValue('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'idle');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn', '');
    this.initStateValue('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis', '');
    this.initStateValue('ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator', null);
    this.initStateValue('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error', '');
    this.initStateValue('ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status', 'idle');
    this.initStateValue('ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateProject();
    void this.loadQryLocateInventoryItem();
    void this.loadQryInventoryBalancePicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.recordProjectMaterialUsage.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status':
        this.qryLocateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryLocateInventoryItem':
        this.qryLocateInventoryItemData = (value as QryLocateInventoryItemOutput[]) ?? [];
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status':
        this.cmdCreateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId':
        this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId':
        this.cmdCreateMaterialUsageInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId':
        this.cmdCreateMaterialUsageProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity':
        this.cmdCreateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription':
        this.cmdCreateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn':
        this.cmdCreateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis':
        this.cmdCreateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage':
        this.cmdCreateMaterialUsageOutput = (value as CmdCreateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error':
        this.cmdCreateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status':
        this.cmdHandoffMaterialUsageToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId':
        this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity':
        this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription':
        this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn':
        this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis':
        this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator':
        this.cmdHandoffMaterialUsageToFieldCoordinatorOutput = (value as CmdHandoffMaterialUsageToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error':
        this.cmdHandoffMaterialUsageToFieldCoordinatorError = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status':
        this.qryInventoryBalancePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker':
        this.qryInventoryBalancePickerData = (value as QryInventoryBalancePickerOutput[]) ?? [];
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
      case 'ui.recordProjectMaterialUsage.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status':
        this.qryLocateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryLocateInventoryItem':
        this.qryLocateInventoryItemData = (value as QryLocateInventoryItemOutput[]) ?? [];
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status':
        this.cmdCreateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId':
        this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId':
        this.cmdCreateMaterialUsageInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId':
        this.cmdCreateMaterialUsageProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity':
        this.cmdCreateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription':
        this.cmdCreateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn':
        this.cmdCreateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis':
        this.cmdCreateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage':
        this.cmdCreateMaterialUsageOutput = (value as CmdCreateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error':
        this.cmdCreateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status':
        this.cmdHandoffMaterialUsageToFieldCoordinatorState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId':
        this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity':
        this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription':
        this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn':
        this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis':
        this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator':
        this.cmdHandoffMaterialUsageToFieldCoordinatorOutput = (value as CmdHandoffMaterialUsageToFieldCoordinatorOutput | null) ?? null;
        break;
      case 'ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error':
        this.cmdHandoffMaterialUsageToFieldCoordinatorError = (value as string) ?? '';
        break;
      case 'ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status':
        this.qryInventoryBalancePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker':
        this.qryInventoryBalancePickerData = (value as QryInventoryBalancePickerOutput[]) ?? [];
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
      /^\/buildFlowFsm\/recordProjectMaterialUsage(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdCreateMaterialUsageProjectProjectId) {
        this.cmdCreateMaterialUsageProjectProjectId = projectProjectId;
        setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId', projectProjectId);
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

  /** action qryLocateProject (query) — route buildFlowFsm.recordProjectMaterialUsage.qryLocateProject; inputs: (none); writes ui.recordProjectMaterialUsage.data.qryLocateProject; status ui.recordProjectMaterialUsage.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.recordProjectMaterialUsage.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.recordProjectMaterialUsage.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.recordProjectMaterialUsage.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.recordProjectMaterialUsage.action.qryLocateProject.status', 'error');
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

  /** action qryLocateInventoryItem (query) — route buildFlowFsm.recordProjectMaterialUsage.qryLocateInventoryItem; inputs: (none); writes ui.recordProjectMaterialUsage.data.qryLocateInventoryItem; status ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status */
  async loadQryLocateInventoryItem(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateInventoryItemState = 'loading';
    setState('ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status', 'loading');
    const params: QryLocateInventoryItemInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateInventoryItemOutput[]>(qryLocateInventoryItemRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateInventoryItemData = data;
      setState('ui.recordProjectMaterialUsage.data.qryLocateInventoryItem', data);
      this.qryLocateInventoryItemState = 'success';
      setState('ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status', 'success');
    } else {
      this.qryLocateInventoryItemState = 'error';
      setState('ui.recordProjectMaterialUsage.action.qryLocateInventoryItem.status', 'error');
      if (response.error) {
        console.error('qryLocateInventoryItem failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateInventoryItem — bind UI events here */
  handleQryLocateInventoryItemClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateInventoryItem();
  }

  /** action cmdCreateMaterialUsage (command) — route buildFlowFsm.recordProjectMaterialUsage.cmdCreateMaterialUsage; inputs: inventoryBalanceInventoryBalanceId, inventoryItemInventoryItemId, projectProjectId, quantity, usageDescription, consumedOn, unitCostBasis; writes ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage; status ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status; feedback keys action.cmdCreateMaterialUsage.success / action.cmdCreateMaterialUsage.error */
  async cmdCreateMaterialUsage(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateMaterialUsageProjectProjectId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateMaterialUsageInventoryItemInventoryItemId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateMaterialUsageState = 'loading';
    setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'loading');
    this.cmdCreateMaterialUsageError = '';
    setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error', '');
    const quantityNum = Number(this.cmdCreateMaterialUsageQuantity);
    const unitCostBasisNum = Number(this.cmdCreateMaterialUsageUnitCostBasis);
    const params: CmdCreateMaterialUsageInput = {
      inventoryBalanceInventoryBalanceId: this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId,
      inventoryItemInventoryItemId: this.cmdCreateMaterialUsageInventoryItemInventoryItemId,
      projectProjectId: this.cmdCreateMaterialUsageProjectProjectId,
      quantity: Number.isNaN(quantityNum) ? 0 : quantityNum,
      usageDescription: this.cmdCreateMaterialUsageUsageDescription,
      consumedOn: this.cmdCreateMaterialUsageConsumedOn,
      unitCostBasis: Number.isNaN(unitCostBasisNum) ? 0 : unitCostBasisNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateMaterialUsageOutput>(cmdCreateMaterialUsageRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateMaterialUsage.error');
      this.cmdCreateMaterialUsageError = errMsg;
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.error', errMsg);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateMaterialUsageOutput | null = response.data ?? null;
    this.cmdCreateMaterialUsageOutput = data;
    setState('ui.recordProjectMaterialUsage.output.cmdCreateMaterialUsage', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateInventoryItem();
      if (this.qryLocateInventoryItemState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryBalancePicker();
      if (this.qryInventoryBalancePickerState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', '');
    this.cmdCreateMaterialUsageInventoryItemInventoryItemId = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', '');
    this.cmdCreateMaterialUsageQuantity = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity', '');
    this.cmdCreateMaterialUsageUsageDescription = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription', '');
    this.cmdCreateMaterialUsageConsumedOn = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn', '');
    this.cmdCreateMaterialUsageUnitCostBasis = '';
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis', '');
    this.cmdCreateMaterialUsageState = 'success';
    setState('ui.recordProjectMaterialUsage.action.cmdCreateMaterialUsage.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateMaterialUsage — bind UI events here */
  handleCmdCreateMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateMaterialUsage();
    });
  }

  /** action cmdHandoffMaterialUsageToFieldCoordinator (command) — route buildFlowFsm.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator; inputs: materialUsageMaterialUsageId, quantity, usageDescription, consumedOn, unitCostBasis; writes ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator; status ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status; feedback keys action.cmdHandoffMaterialUsageToFieldCoordinator.success / action.cmdHandoffMaterialUsageToFieldCoordinator.error */
  async cmdHandoffMaterialUsageToFieldCoordinator(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId) {
      this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'idle';
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'loading';
    setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'loading');
    this.cmdHandoffMaterialUsageToFieldCoordinatorError = '';
    setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error', '');
    const quantityNum = Number(this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity);
    const unitCostBasisNum = Number(this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis);
    const params: CmdHandoffMaterialUsageToFieldCoordinatorInput = {
      materialUsageMaterialUsageId: this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId,
      quantity: Number.isNaN(quantityNum) ? 0 : quantityNum,
      usageDescription: this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription,
      consumedOn: this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn,
      unitCostBasis: Number.isNaN(unitCostBasisNum) ? 0 : unitCostBasisNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffMaterialUsageToFieldCoordinatorOutput>(cmdHandoffMaterialUsageToFieldCoordinatorRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffMaterialUsageToFieldCoordinator.error');
      this.cmdHandoffMaterialUsageToFieldCoordinatorError = errMsg;
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.error', errMsg);
      this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffMaterialUsageToFieldCoordinatorOutput | null = response.data ?? null;
    this.cmdHandoffMaterialUsageToFieldCoordinatorOutput = data;
    setState('ui.recordProjectMaterialUsage.output.cmdHandoffMaterialUsageToFieldCoordinator', data);
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffMaterialUsageToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateInventoryItem();
      if (this.qryLocateInventoryItemState === 'error') {
        this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffMaterialUsageToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryBalancePicker();
      if (this.qryInventoryBalancePickerState === 'error') {
        this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
        setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffMaterialUsageToFieldCoordinator refresh failed', refreshError);
      this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'error';
      setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = '';
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId', '');
    this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity = '';
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity', '');
    this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = '';
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription', '');
    this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = '';
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn', '');
    this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = '';
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis', '');
    this.cmdHandoffMaterialUsageToFieldCoordinatorState = 'success';
    setState('ui.recordProjectMaterialUsage.action.cmdHandoffMaterialUsageToFieldCoordinator.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffMaterialUsageToFieldCoordinator — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffMaterialUsageToFieldCoordinator();
    });
  }

  /** action qryInventoryBalancePicker (query) — route buildFlowFsm.recordProjectMaterialUsage.qryInventoryBalancePicker; inputs: (none); writes ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker; status ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status */
  async loadQryInventoryBalancePicker(): Promise<void> {
    this.syncRouteParams();
    this.qryInventoryBalancePickerState = 'loading';
    setState('ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status', 'loading');
    const params: QryInventoryBalancePickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInventoryBalancePickerOutput[]>(qryInventoryBalancePickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryInventoryBalancePickerData = data;
      setState('ui.recordProjectMaterialUsage.data.qryInventoryBalancePicker', data);
      this.qryInventoryBalancePickerState = 'success';
      setState('ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status', 'success');
    } else {
      this.qryInventoryBalancePickerState = 'error';
      setState('ui.recordProjectMaterialUsage.action.qryInventoryBalancePicker.status', 'error');
      if (response.error) {
        console.error('qryInventoryBalancePicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInventoryBalancePicker — bind UI events here */
  handleQryInventoryBalancePickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInventoryBalancePicker();
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId */
  setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(value: string): void {
    this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId — bind UI events here */
  handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId */
  setCmdCreateMaterialUsageInventoryItemInventoryItemId(value: string): void {
    this.cmdCreateMaterialUsageInventoryItemInventoryItemId = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageInventoryItemInventoryItemId — bind UI events here */
  handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId */
  setCmdCreateMaterialUsageProjectProjectId(value: string): void {
    this.cmdCreateMaterialUsageProjectProjectId = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageProjectProjectId — bind UI events here */
  handleCmdCreateMaterialUsageProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageProjectProjectId(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity */
  setCmdCreateMaterialUsageQuantity(value: string): void {
    this.cmdCreateMaterialUsageQuantity = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageQuantity — bind UI events here */
  handleCmdCreateMaterialUsageQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageQuantity(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription */
  setCmdCreateMaterialUsageUsageDescription(value: string): void {
    this.cmdCreateMaterialUsageUsageDescription = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.usageDescription', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageUsageDescription — bind UI events here */
  handleCmdCreateMaterialUsageUsageDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageUsageDescription(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn */
  setCmdCreateMaterialUsageConsumedOn(value: string): void {
    this.cmdCreateMaterialUsageConsumedOn = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.consumedOn', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageConsumedOn — bind UI events here */
  handleCmdCreateMaterialUsageConsumedOnChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageConsumedOn(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis */
  setCmdCreateMaterialUsageUnitCostBasis(value: string): void {
    this.cmdCreateMaterialUsageUnitCostBasis = value;
    setState('ui.recordProjectMaterialUsage.input.cmdCreateMaterialUsage.unitCostBasis', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageUnitCostBasis — bind UI events here */
  handleCmdCreateMaterialUsageUnitCostBasisChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageUnitCostBasis(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId */
  setCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId(value: string): void {
    this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId = value;
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.materialUsageMaterialUsageId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity */
  setCmdHandoffMaterialUsageToFieldCoordinatorQuantity(value: string): void {
    this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity = value;
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffMaterialUsageToFieldCoordinatorQuantity — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffMaterialUsageToFieldCoordinatorQuantity(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription */
  setCmdHandoffMaterialUsageToFieldCoordinatorUsageDescription(value: string): void {
    this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription = value;
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.usageDescription', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffMaterialUsageToFieldCoordinatorUsageDescription(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn */
  setCmdHandoffMaterialUsageToFieldCoordinatorConsumedOn(value: string): void {
    this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn = value;
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.consumedOn', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffMaterialUsageToFieldCoordinatorConsumedOn(value);
  }

  /** setter for state ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis */
  setCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis(value: string): void {
    this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis = value;
    setState('ui.recordProjectMaterialUsage.input.cmdHandoffMaterialUsageToFieldCoordinator.unitCostBasis', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis — bind UI events here */
  handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis(value);
  }
}
