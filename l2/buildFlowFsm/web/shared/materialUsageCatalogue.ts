/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListMaterialUsageInput,
  QryListMaterialUsageOutput,
  CmdCreateMaterialUsageInput,
  CmdCreateMaterialUsageOutput,
  CmdUpdateMaterialUsageInput,
  CmdUpdateMaterialUsageOutput,
  CmdDeleteMaterialUsageInput,
  CmdDeleteMaterialUsageOutput,
  QryInventoryBalancePickerInput,
  QryInventoryBalancePickerOutput,
  QryInventoryItemPickerInput,
  QryInventoryItemPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.js';
import {
  qryListMaterialUsageRoute,
  cmdCreateMaterialUsageRoute,
  cmdUpdateMaterialUsageRoute,
  cmdDeleteMaterialUsageRoute,
  qryInventoryBalancePickerRoute,
  qryInventoryItemPickerRoute,
  qryProjectPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.js';

export type {
  QryListMaterialUsageInput,
  QryListMaterialUsageOutput,
  CmdCreateMaterialUsageInput,
  CmdCreateMaterialUsageOutput,
  CmdUpdateMaterialUsageInput,
  CmdUpdateMaterialUsageOutput,
  CmdDeleteMaterialUsageInput,
  CmdDeleteMaterialUsageOutput,
  QryInventoryBalancePickerInput,
  QryInventoryBalancePickerOutput,
  QryInventoryItemPickerInput,
  QryInventoryItemPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/materialUsageCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.materialUsageCatalogue.recordList.title': 'Consumos registrados',
  'organism.materialUsageCatalogue.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage': 'Excluir Consumo de material',
  'section.materialUsageCatalogue.recordForm.title': 'Registrar ou corrigir consumo',
  'organism.materialUsageCatalogue.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label': 'Status',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdUpdateMaterialUsage.success': 'Atualizar Consumo de material: OK',
  'action.cmdUpdateMaterialUsage.error': 'Atualizar Consumo de material: falhou',
  'action.cmdDeleteMaterialUsage.success': 'Excluir Consumo de material: OK',
  'action.cmdDeleteMaterialUsage.error': 'Excluir Consumo de material: falhou',
  'section.materialUsageCatalogue.usageWorkbench.title': 'Consumos de material',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.materialUsageCatalogue.recordList.title': 'Consumos registrados',
  'organism.materialUsageCatalogue.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage': 'Excluir Consumo de material',
  'section.materialUsageCatalogue.recordForm.title': 'Registrar ou corrigir consumo',
  'organism.materialUsageCatalogue.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label': 'Status',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdUpdateMaterialUsage.success': 'Atualizar Consumo de material: OK',
  'action.cmdUpdateMaterialUsage.error': 'Atualizar Consumo de material: falhou',
  'action.cmdDeleteMaterialUsage.success': 'Excluir Consumo de material: OK',
  'action.cmdDeleteMaterialUsage.error': 'Excluir Consumo de material: falhou',
  'section.materialUsageCatalogue.usageWorkbench.title': 'Consumos de material',
};
const message_en: MessageType = {
  'section.materialUsageCatalogue.recordList.title': 'Consumos registrados',
  'organism.materialUsageCatalogue.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage': 'Excluir Consumo de material',
  'section.materialUsageCatalogue.recordForm.title': 'Registrar ou corrigir consumo',
  'organism.materialUsageCatalogue.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label': 'Status',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdUpdateMaterialUsage.success': 'Atualizar Consumo de material: OK',
  'action.cmdUpdateMaterialUsage.error': 'Atualizar Consumo de material: falhou',
  'action.cmdDeleteMaterialUsage.success': 'Excluir Consumo de material: OK',
  'action.cmdDeleteMaterialUsage.error': 'Excluir Consumo de material: falhou',
  'section.materialUsageCatalogue.usageWorkbench.title': 'Consumos de material',
};
const message_es: MessageType = {
  'section.materialUsageCatalogue.recordList.title': 'Consumos registrados',
  'organism.materialUsageCatalogue.qryListMaterialUsage.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.title': 'Listar Consumo de material',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label': 'Material Usage Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.title': 'Excluir Consumo de material',
  'intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage': 'Excluir Consumo de material',
  'section.materialUsageCatalogue.recordForm.title': 'Registrar ou corrigir consumo',
  'organism.materialUsageCatalogue.cmdCreateMaterialUsage.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage': 'Registrar o consumo de material',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'organism.materialUsageCatalogue.qryInventoryBalancePicker.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title': 'Listar Saldo de estoque',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.materialUsageCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.materialUsageCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.materialUsageCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage': 'Atualizar Consumo de material',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label': 'Status',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label': 'Usage Description',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label': 'Consumed On',
  'intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label': 'Unit Cost Basis',
  'action.cmdCreateMaterialUsage.success': 'Registrar o consumo de material: OK',
  'action.cmdCreateMaterialUsage.error': 'Registrar o consumo de material: falhou',
  'action.cmdUpdateMaterialUsage.success': 'Atualizar Consumo de material: OK',
  'action.cmdUpdateMaterialUsage.error': 'Atualizar Consumo de material: falhou',
  'action.cmdDeleteMaterialUsage.success': 'Excluir Consumo de material: OK',
  'action.cmdDeleteMaterialUsage.error': 'Excluir Consumo de material: falhou',
  'section.materialUsageCatalogue.usageWorkbench.title': 'Consumos de material',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.materialUsageCatalogue.status',
  'ui.materialUsageCatalogue.action.qryListMaterialUsage.status',
  'ui.materialUsageCatalogue.data.qryListMaterialUsage',
  'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn',
  'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis',
  'ui.materialUsageCatalogue.output.cmdCreateMaterialUsage',
  'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error',
  'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn',
  'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis',
  'ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage',
  'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error',
  'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status',
  'ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId',
  'ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage',
  'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error',
  'ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status',
  'ui.materialUsageCatalogue.data.qryInventoryBalancePicker',
  'ui.materialUsageCatalogue.action.qryInventoryItemPicker.status',
  'ui.materialUsageCatalogue.data.qryInventoryItemPicker',
  'ui.materialUsageCatalogue.action.qryProjectPicker.status',
  'ui.materialUsageCatalogue.data.qryProjectPicker',
];

export class BuildFlowFsmMaterialUsageCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() qryListMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListMaterialUsageData — queryResult, outputShape: array */
  @property() qryListMaterialUsageData: QryListMaterialUsageOutput[] = [];
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
  /** state cmdUpdateMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateMaterialUsageMaterialUsageId — input */
  @property() cmdUpdateMaterialUsageMaterialUsageId: string = '';
  /** state cmdUpdateMaterialUsageStatus — input */
  @property() cmdUpdateMaterialUsageStatus: string = '';
  /** state cmdUpdateMaterialUsageProjectId — input */
  @property() cmdUpdateMaterialUsageProjectId: string = '';
  /** state cmdUpdateMaterialUsageInventoryItemId — input */
  @property() cmdUpdateMaterialUsageInventoryItemId: string = '';
  /** state cmdUpdateMaterialUsageInventoryBalanceId — input */
  @property() cmdUpdateMaterialUsageInventoryBalanceId: string = '';
  /** state cmdUpdateMaterialUsageQuantity — input */
  @property() cmdUpdateMaterialUsageQuantity: string = '';
  /** state cmdUpdateMaterialUsageUsageDescription — input */
  @property() cmdUpdateMaterialUsageUsageDescription: string = '';
  /** state cmdUpdateMaterialUsageConsumedOn — input */
  @property() cmdUpdateMaterialUsageConsumedOn: string = '';
  /** state cmdUpdateMaterialUsageUnitCostBasis — input */
  @property() cmdUpdateMaterialUsageUnitCostBasis: string = '';
  /** state cmdUpdateMaterialUsageOutput — commandOutput */
  @property() cmdUpdateMaterialUsageOutput: CmdUpdateMaterialUsageOutput | null = null;
  /** state cmdUpdateMaterialUsageError — actionError */
  @property() cmdUpdateMaterialUsageError: string = '';
  /** state cmdDeleteMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteMaterialUsageMaterialUsageId — input */
  @property() cmdDeleteMaterialUsageMaterialUsageId: string = '';
  /** state cmdDeleteMaterialUsageOutput — commandOutput */
  @property() cmdDeleteMaterialUsageOutput: CmdDeleteMaterialUsageOutput | null = null;
  /** state cmdDeleteMaterialUsageError — actionError */
  @property() cmdDeleteMaterialUsageError: string = '';
  /** state qryInventoryBalancePickerState — actionStatus, values: idle|loading|success|error */
  @property() qryInventoryBalancePickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInventoryBalancePickerData — queryResult, outputShape: array */
  @property() qryInventoryBalancePickerData: QryInventoryBalancePickerOutput[] = [];
  /** state qryInventoryItemPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryInventoryItemPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInventoryItemPickerData — queryResult, outputShape: array */
  @property() qryInventoryItemPickerData: QryInventoryItemPickerOutput[] = [];
  /** state qryProjectPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectPickerData — queryResult, outputShape: array */
  @property() qryProjectPickerData: QryProjectPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.materialUsageCatalogue.status', '');
    this.initStateValue('ui.materialUsageCatalogue.action.qryListMaterialUsage.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.data.qryListMaterialUsage', []);
    this.initStateValue('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis', '');
    this.initStateValue('ui.materialUsageCatalogue.output.cmdCreateMaterialUsage', null);
    this.initStateValue('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error', '');
    this.initStateValue('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', '');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', '');
    this.initStateValue('ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage', null);
    this.initStateValue('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error', '');
    this.initStateValue('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId', '');
    this.initStateValue('ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage', null);
    this.initStateValue('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error', '');
    this.initStateValue('ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.data.qryInventoryBalancePicker', []);
    this.initStateValue('ui.materialUsageCatalogue.action.qryInventoryItemPicker.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.data.qryInventoryItemPicker', []);
    this.initStateValue('ui.materialUsageCatalogue.action.qryProjectPicker.status', 'idle');
    this.initStateValue('ui.materialUsageCatalogue.data.qryProjectPicker', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListMaterialUsage();
    void this.loadQryInventoryBalancePicker();
    void this.loadQryInventoryItemPicker();
    void this.loadQryProjectPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.materialUsageCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.qryListMaterialUsage.status':
        this.qryListMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryListMaterialUsage':
        this.qryListMaterialUsageData = (value as QryListMaterialUsageOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status':
        this.cmdCreateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId':
        this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId':
        this.cmdCreateMaterialUsageInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId':
        this.cmdCreateMaterialUsageProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity':
        this.cmdCreateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription':
        this.cmdCreateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn':
        this.cmdCreateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis':
        this.cmdCreateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdCreateMaterialUsage':
        this.cmdCreateMaterialUsageOutput = (value as CmdCreateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error':
        this.cmdCreateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status':
        this.cmdUpdateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId':
        this.cmdUpdateMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status':
        this.cmdUpdateMaterialUsageStatus = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId':
        this.cmdUpdateMaterialUsageProjectId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId':
        this.cmdUpdateMaterialUsageInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId':
        this.cmdUpdateMaterialUsageInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity':
        this.cmdUpdateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription':
        this.cmdUpdateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn':
        this.cmdUpdateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis':
        this.cmdUpdateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage':
        this.cmdUpdateMaterialUsageOutput = (value as CmdUpdateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error':
        this.cmdUpdateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status':
        this.cmdDeleteMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId':
        this.cmdDeleteMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage':
        this.cmdDeleteMaterialUsageOutput = (value as CmdDeleteMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error':
        this.cmdDeleteMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status':
        this.qryInventoryBalancePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryInventoryBalancePicker':
        this.qryInventoryBalancePickerData = (value as QryInventoryBalancePickerOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.qryInventoryItemPicker.status':
        this.qryInventoryItemPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryInventoryItemPicker':
        this.qryInventoryItemPickerData = (value as QryInventoryItemPickerOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryProjectPicker':
        this.qryProjectPickerData = (value as QryProjectPickerOutput[]) ?? [];
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
      case 'ui.materialUsageCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.qryListMaterialUsage.status':
        this.qryListMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryListMaterialUsage':
        this.qryListMaterialUsageData = (value as QryListMaterialUsageOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status':
        this.cmdCreateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId':
        this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId':
        this.cmdCreateMaterialUsageInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId':
        this.cmdCreateMaterialUsageProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity':
        this.cmdCreateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription':
        this.cmdCreateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn':
        this.cmdCreateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis':
        this.cmdCreateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdCreateMaterialUsage':
        this.cmdCreateMaterialUsageOutput = (value as CmdCreateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error':
        this.cmdCreateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status':
        this.cmdUpdateMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId':
        this.cmdUpdateMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status':
        this.cmdUpdateMaterialUsageStatus = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId':
        this.cmdUpdateMaterialUsageProjectId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId':
        this.cmdUpdateMaterialUsageInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId':
        this.cmdUpdateMaterialUsageInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity':
        this.cmdUpdateMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription':
        this.cmdUpdateMaterialUsageUsageDescription = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn':
        this.cmdUpdateMaterialUsageConsumedOn = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis':
        this.cmdUpdateMaterialUsageUnitCostBasis = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage':
        this.cmdUpdateMaterialUsageOutput = (value as CmdUpdateMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error':
        this.cmdUpdateMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status':
        this.cmdDeleteMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId':
        this.cmdDeleteMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage':
        this.cmdDeleteMaterialUsageOutput = (value as CmdDeleteMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error':
        this.cmdDeleteMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status':
        this.qryInventoryBalancePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryInventoryBalancePicker':
        this.qryInventoryBalancePickerData = (value as QryInventoryBalancePickerOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.qryInventoryItemPicker.status':
        this.qryInventoryItemPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryInventoryItemPicker':
        this.qryInventoryItemPickerData = (value as QryInventoryItemPickerOutput[]) ?? [];
        break;
      case 'ui.materialUsageCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.materialUsageCatalogue.data.qryProjectPicker':
        this.qryProjectPickerData = (value as QryProjectPickerOutput[]) ?? [];
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
      /^\/buildFlowFsm\/materialUsageCatalogue(?:\/([^/]+))?\/?$/,
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
        setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId', projectProjectId);
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

  /** action qryListMaterialUsage (query) — route buildFlowFsm.materialUsageCatalogue.qryListMaterialUsage; inputs: (none); writes ui.materialUsageCatalogue.data.qryListMaterialUsage; status ui.materialUsageCatalogue.action.qryListMaterialUsage.status */
  async loadQryListMaterialUsage(): Promise<void> {
    this.syncRouteParams();
    this.qryListMaterialUsageState = 'loading';
    setState('ui.materialUsageCatalogue.action.qryListMaterialUsage.status', 'loading');
    const params: QryListMaterialUsageInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListMaterialUsageOutput[]>(qryListMaterialUsageRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListMaterialUsageData = data;
      setState('ui.materialUsageCatalogue.data.qryListMaterialUsage', data);
      this.qryListMaterialUsageState = 'success';
      setState('ui.materialUsageCatalogue.action.qryListMaterialUsage.status', 'success');
    } else {
      this.qryListMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.qryListMaterialUsage.status', 'error');
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

  /** action cmdCreateMaterialUsage (command) — route buildFlowFsm.materialUsageCatalogue.cmdCreateMaterialUsage; inputs: inventoryBalanceInventoryBalanceId, inventoryItemInventoryItemId, projectProjectId, quantity, usageDescription, consumedOn, unitCostBasis; writes ui.materialUsageCatalogue.output.cmdCreateMaterialUsage; status ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status; feedback keys action.cmdCreateMaterialUsage.success / action.cmdCreateMaterialUsage.error */
  async cmdCreateMaterialUsage(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateMaterialUsageProjectProjectId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateMaterialUsageInventoryItemInventoryItemId) {
      this.cmdCreateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateMaterialUsageState = 'loading';
    setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'loading');
    this.cmdCreateMaterialUsageError = '';
    setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error', '');
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
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.error', errMsg);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateMaterialUsageOutput | null = response.data ?? null;
    this.cmdCreateMaterialUsageOutput = data;
    setState('ui.materialUsageCatalogue.output.cmdCreateMaterialUsage', data);
    try {
      await this.loadQryListMaterialUsage();
      if (this.qryListMaterialUsageState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryBalancePicker();
      if (this.qryInventoryBalancePickerState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdCreateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateMaterialUsage refresh failed', refreshError);
      this.cmdCreateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', '');
    this.cmdCreateMaterialUsageInventoryItemInventoryItemId = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', '');
    this.cmdCreateMaterialUsageQuantity = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity', '');
    this.cmdCreateMaterialUsageUsageDescription = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription', '');
    this.cmdCreateMaterialUsageConsumedOn = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn', '');
    this.cmdCreateMaterialUsageUnitCostBasis = '';
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis', '');
    this.cmdCreateMaterialUsageState = 'success';
    setState('ui.materialUsageCatalogue.action.cmdCreateMaterialUsage.status', 'success');
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

  /** action cmdUpdateMaterialUsage (command) — route buildFlowFsm.materialUsageCatalogue.cmdUpdateMaterialUsage; inputs: materialUsageId, status, projectId, inventoryItemId, inventoryBalanceId, quantity, usageDescription, consumedOn, unitCostBasis; writes ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage; status ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status; feedback keys action.cmdUpdateMaterialUsage.success / action.cmdUpdateMaterialUsage.error */
  async cmdUpdateMaterialUsage(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateMaterialUsageMaterialUsageId) {
      this.cmdUpdateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateMaterialUsageProjectId) {
      this.cmdUpdateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateMaterialUsageInventoryItemId) {
      this.cmdUpdateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateMaterialUsageInventoryBalanceId) {
      this.cmdUpdateMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateMaterialUsageState = 'loading';
    setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'loading');
    this.cmdUpdateMaterialUsageError = '';
    setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error', '');
    const quantityNum = Number(this.cmdUpdateMaterialUsageQuantity);
    const unitCostBasisNum = Number(this.cmdUpdateMaterialUsageUnitCostBasis);
    const params: CmdUpdateMaterialUsageInput = {
      materialUsageId: this.cmdUpdateMaterialUsageMaterialUsageId,
      status: this.cmdUpdateMaterialUsageStatus,
      projectId: this.cmdUpdateMaterialUsageProjectId,
      inventoryItemId: this.cmdUpdateMaterialUsageInventoryItemId,
      inventoryBalanceId: this.cmdUpdateMaterialUsageInventoryBalanceId,
      quantity: Number.isNaN(quantityNum) ? 0 : quantityNum,
      usageDescription: this.cmdUpdateMaterialUsageUsageDescription,
      consumedOn: this.cmdUpdateMaterialUsageConsumedOn,
      unitCostBasis: Number.isNaN(unitCostBasisNum) ? 0 : unitCostBasisNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateMaterialUsageOutput>(cmdUpdateMaterialUsageRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateMaterialUsage.error');
      this.cmdUpdateMaterialUsageError = errMsg;
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.error', errMsg);
      this.cmdUpdateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateMaterialUsageOutput | null = response.data ?? null;
    this.cmdUpdateMaterialUsageOutput = data;
    setState('ui.materialUsageCatalogue.output.cmdUpdateMaterialUsage', data);
    try {
      await this.loadQryListMaterialUsage();
      if (this.qryListMaterialUsageState === 'error') {
        this.cmdUpdateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateMaterialUsage refresh failed', refreshError);
      this.cmdUpdateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryBalancePicker();
      if (this.qryInventoryBalancePickerState === 'error') {
        this.cmdUpdateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateMaterialUsage refresh failed', refreshError);
      this.cmdUpdateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdUpdateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateMaterialUsage refresh failed', refreshError);
      this.cmdUpdateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdUpdateMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateMaterialUsage refresh failed', refreshError);
      this.cmdUpdateMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateMaterialUsageMaterialUsageId = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId', '');
    this.cmdUpdateMaterialUsageStatus = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', '');
    this.cmdUpdateMaterialUsageProjectId = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId', '');
    this.cmdUpdateMaterialUsageInventoryItemId = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId', '');
    this.cmdUpdateMaterialUsageInventoryBalanceId = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId', '');
    this.cmdUpdateMaterialUsageQuantity = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', '');
    this.cmdUpdateMaterialUsageUsageDescription = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', '');
    this.cmdUpdateMaterialUsageConsumedOn = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', '');
    this.cmdUpdateMaterialUsageUnitCostBasis = '';
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', '');
    this.cmdUpdateMaterialUsageState = 'success';
    setState('ui.materialUsageCatalogue.action.cmdUpdateMaterialUsage.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateMaterialUsage — bind UI events here */
  handleCmdUpdateMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateMaterialUsage();
    });
  }

  /** action cmdDeleteMaterialUsage (command) — route buildFlowFsm.materialUsageCatalogue.cmdDeleteMaterialUsage; inputs: materialUsageId; writes ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage; status ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status; feedback keys action.cmdDeleteMaterialUsage.success / action.cmdDeleteMaterialUsage.error */
  async cmdDeleteMaterialUsage(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdDeleteMaterialUsageMaterialUsageId) {
      this.cmdDeleteMaterialUsageState = 'idle';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteMaterialUsageState = 'loading';
    setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'loading');
    this.cmdDeleteMaterialUsageError = '';
    setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error', '');
    const params: CmdDeleteMaterialUsageInput = {
      materialUsageId: this.cmdDeleteMaterialUsageMaterialUsageId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteMaterialUsageOutput>(cmdDeleteMaterialUsageRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteMaterialUsage.error');
      this.cmdDeleteMaterialUsageError = errMsg;
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.error', errMsg);
      this.cmdDeleteMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteMaterialUsageOutput | null = response.data ?? null;
    this.cmdDeleteMaterialUsageOutput = data;
    setState('ui.materialUsageCatalogue.output.cmdDeleteMaterialUsage', data);
    try {
      await this.loadQryListMaterialUsage();
      if (this.qryListMaterialUsageState === 'error') {
        this.cmdDeleteMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteMaterialUsage refresh failed', refreshError);
      this.cmdDeleteMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryBalancePicker();
      if (this.qryInventoryBalancePickerState === 'error') {
        this.cmdDeleteMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteMaterialUsage refresh failed', refreshError);
      this.cmdDeleteMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdDeleteMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteMaterialUsage refresh failed', refreshError);
      this.cmdDeleteMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdDeleteMaterialUsageState = 'error';
        setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteMaterialUsage refresh failed', refreshError);
      this.cmdDeleteMaterialUsageState = 'error';
      setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteMaterialUsageMaterialUsageId = '';
    setState('ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId', '');
    this.cmdDeleteMaterialUsageState = 'success';
    setState('ui.materialUsageCatalogue.action.cmdDeleteMaterialUsage.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteMaterialUsage — bind UI events here */
  handleCmdDeleteMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteMaterialUsage();
    });
  }

  /** action qryInventoryBalancePicker (query) — route buildFlowFsm.materialUsageCatalogue.qryInventoryBalancePicker; inputs: (none); writes ui.materialUsageCatalogue.data.qryInventoryBalancePicker; status ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status */
  async loadQryInventoryBalancePicker(): Promise<void> {
    this.syncRouteParams();
    this.qryInventoryBalancePickerState = 'loading';
    setState('ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status', 'loading');
    const params: QryInventoryBalancePickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInventoryBalancePickerOutput[]>(qryInventoryBalancePickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryInventoryBalancePickerData = data;
      setState('ui.materialUsageCatalogue.data.qryInventoryBalancePicker', data);
      this.qryInventoryBalancePickerState = 'success';
      setState('ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status', 'success');
    } else {
      this.qryInventoryBalancePickerState = 'error';
      setState('ui.materialUsageCatalogue.action.qryInventoryBalancePicker.status', 'error');
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

  /** action qryInventoryItemPicker (query) — route buildFlowFsm.materialUsageCatalogue.qryInventoryItemPicker; inputs: (none); writes ui.materialUsageCatalogue.data.qryInventoryItemPicker; status ui.materialUsageCatalogue.action.qryInventoryItemPicker.status */
  async loadQryInventoryItemPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryInventoryItemPickerState = 'loading';
    setState('ui.materialUsageCatalogue.action.qryInventoryItemPicker.status', 'loading');
    const params: QryInventoryItemPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInventoryItemPickerOutput[]>(qryInventoryItemPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryInventoryItemPickerData = data;
      setState('ui.materialUsageCatalogue.data.qryInventoryItemPicker', data);
      this.qryInventoryItemPickerState = 'success';
      setState('ui.materialUsageCatalogue.action.qryInventoryItemPicker.status', 'success');
    } else {
      this.qryInventoryItemPickerState = 'error';
      setState('ui.materialUsageCatalogue.action.qryInventoryItemPicker.status', 'error');
      if (response.error) {
        console.error('qryInventoryItemPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInventoryItemPicker — bind UI events here */
  handleQryInventoryItemPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInventoryItemPicker();
  }

  /** action qryProjectPicker (query) — route buildFlowFsm.materialUsageCatalogue.qryProjectPicker; inputs: (none); writes ui.materialUsageCatalogue.data.qryProjectPicker; status ui.materialUsageCatalogue.action.qryProjectPicker.status */
  async loadQryProjectPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryProjectPickerState = 'loading';
    setState('ui.materialUsageCatalogue.action.qryProjectPicker.status', 'loading');
    const params: QryProjectPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectPickerOutput[]>(qryProjectPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryProjectPickerData = data;
      setState('ui.materialUsageCatalogue.data.qryProjectPicker', data);
      this.qryProjectPickerState = 'success';
      setState('ui.materialUsageCatalogue.action.qryProjectPicker.status', 'success');
    } else {
      this.qryProjectPickerState = 'error';
      setState('ui.materialUsageCatalogue.action.qryProjectPicker.status', 'error');
      if (response.error) {
        console.error('qryProjectPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryProjectPicker — bind UI events here */
  handleQryProjectPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryProjectPicker();
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId */
  setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(value: string): void {
    this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryBalanceInventoryBalanceId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId — bind UI events here */
  handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId */
  setCmdCreateMaterialUsageInventoryItemInventoryItemId(value: string): void {
    this.cmdCreateMaterialUsageInventoryItemInventoryItemId = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.inventoryItemInventoryItemId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageInventoryItemInventoryItemId — bind UI events here */
  handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId */
  setCmdCreateMaterialUsageProjectProjectId(value: string): void {
    this.cmdCreateMaterialUsageProjectProjectId = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageProjectProjectId — bind UI events here */
  handleCmdCreateMaterialUsageProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageProjectProjectId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity */
  setCmdCreateMaterialUsageQuantity(value: string): void {
    this.cmdCreateMaterialUsageQuantity = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageQuantity — bind UI events here */
  handleCmdCreateMaterialUsageQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageQuantity(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription */
  setCmdCreateMaterialUsageUsageDescription(value: string): void {
    this.cmdCreateMaterialUsageUsageDescription = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.usageDescription', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageUsageDescription — bind UI events here */
  handleCmdCreateMaterialUsageUsageDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageUsageDescription(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn */
  setCmdCreateMaterialUsageConsumedOn(value: string): void {
    this.cmdCreateMaterialUsageConsumedOn = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.consumedOn', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageConsumedOn — bind UI events here */
  handleCmdCreateMaterialUsageConsumedOnChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageConsumedOn(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis */
  setCmdCreateMaterialUsageUnitCostBasis(value: string): void {
    this.cmdCreateMaterialUsageUnitCostBasis = value;
    setState('ui.materialUsageCatalogue.input.cmdCreateMaterialUsage.unitCostBasis', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateMaterialUsageUnitCostBasis — bind UI events here */
  handleCmdCreateMaterialUsageUnitCostBasisChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateMaterialUsageUnitCostBasis(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId */
  setCmdUpdateMaterialUsageMaterialUsageId(value: string): void {
    this.cmdUpdateMaterialUsageMaterialUsageId = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.materialUsageId', value);
    const collection =
      (getState('ui.materialUsageCatalogue.data.qryListMaterialUsage') as QryListMaterialUsageOutput[] | null | undefined) ?? this.qryListMaterialUsageData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListMaterialUsageOutput) => String(row.materialUsageId) === String(value),
      );
      if (item) {
        this.cmdUpdateMaterialUsageStatus = item.status;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', item.status);
        this.cmdUpdateMaterialUsageQuantity = String(item.quantity);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', String(item.quantity));
        this.cmdUpdateMaterialUsageUsageDescription = item.usageDescription;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', item.usageDescription);
        this.cmdUpdateMaterialUsageConsumedOn = item.consumedOn;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', item.consumedOn);
        this.cmdUpdateMaterialUsageUnitCostBasis = String(item.unitCostBasis);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', String(item.unitCostBasis));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageMaterialUsageId — bind UI events here */
  handleCmdUpdateMaterialUsageMaterialUsageIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageMaterialUsageId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status */
  setCmdUpdateMaterialUsageStatus(value: string): void {
    this.cmdUpdateMaterialUsageStatus = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageStatus — bind UI events here */
  handleCmdUpdateMaterialUsageStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageStatus(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId */
  setCmdUpdateMaterialUsageProjectId(value: string): void {
    this.cmdUpdateMaterialUsageProjectId = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.projectId', value);
    const collection =
      (getState('ui.materialUsageCatalogue.data.qryListMaterialUsage') as QryListMaterialUsageOutput[] | null | undefined) ?? this.qryListMaterialUsageData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListMaterialUsageOutput) => String(row.projectId) === String(value),
      );
      if (item) {
        this.cmdUpdateMaterialUsageStatus = item.status;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', item.status);
        this.cmdUpdateMaterialUsageQuantity = String(item.quantity);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', String(item.quantity));
        this.cmdUpdateMaterialUsageUsageDescription = item.usageDescription;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', item.usageDescription);
        this.cmdUpdateMaterialUsageConsumedOn = item.consumedOn;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', item.consumedOn);
        this.cmdUpdateMaterialUsageUnitCostBasis = String(item.unitCostBasis);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', String(item.unitCostBasis));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageProjectId — bind UI events here */
  handleCmdUpdateMaterialUsageProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageProjectId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId */
  setCmdUpdateMaterialUsageInventoryItemId(value: string): void {
    this.cmdUpdateMaterialUsageInventoryItemId = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryItemId', value);
    const collection =
      (getState('ui.materialUsageCatalogue.data.qryListMaterialUsage') as QryListMaterialUsageOutput[] | null | undefined) ?? this.qryListMaterialUsageData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListMaterialUsageOutput) => String(row.inventoryItemId) === String(value),
      );
      if (item) {
        this.cmdUpdateMaterialUsageStatus = item.status;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', item.status);
        this.cmdUpdateMaterialUsageQuantity = String(item.quantity);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', String(item.quantity));
        this.cmdUpdateMaterialUsageUsageDescription = item.usageDescription;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', item.usageDescription);
        this.cmdUpdateMaterialUsageConsumedOn = item.consumedOn;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', item.consumedOn);
        this.cmdUpdateMaterialUsageUnitCostBasis = String(item.unitCostBasis);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', String(item.unitCostBasis));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageInventoryItemId — bind UI events here */
  handleCmdUpdateMaterialUsageInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageInventoryItemId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId */
  setCmdUpdateMaterialUsageInventoryBalanceId(value: string): void {
    this.cmdUpdateMaterialUsageInventoryBalanceId = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.inventoryBalanceId', value);
    const collection =
      (getState('ui.materialUsageCatalogue.data.qryListMaterialUsage') as QryListMaterialUsageOutput[] | null | undefined) ?? this.qryListMaterialUsageData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListMaterialUsageOutput) => String(row.inventoryBalanceId) === String(value),
      );
      if (item) {
        this.cmdUpdateMaterialUsageStatus = item.status;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.status', item.status);
        this.cmdUpdateMaterialUsageQuantity = String(item.quantity);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', String(item.quantity));
        this.cmdUpdateMaterialUsageUsageDescription = item.usageDescription;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', item.usageDescription);
        this.cmdUpdateMaterialUsageConsumedOn = item.consumedOn;
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', item.consumedOn);
        this.cmdUpdateMaterialUsageUnitCostBasis = String(item.unitCostBasis);
        setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', String(item.unitCostBasis));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageInventoryBalanceId — bind UI events here */
  handleCmdUpdateMaterialUsageInventoryBalanceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageInventoryBalanceId(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity */
  setCmdUpdateMaterialUsageQuantity(value: string): void {
    this.cmdUpdateMaterialUsageQuantity = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageQuantity — bind UI events here */
  handleCmdUpdateMaterialUsageQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageQuantity(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription */
  setCmdUpdateMaterialUsageUsageDescription(value: string): void {
    this.cmdUpdateMaterialUsageUsageDescription = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.usageDescription', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageUsageDescription — bind UI events here */
  handleCmdUpdateMaterialUsageUsageDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageUsageDescription(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn */
  setCmdUpdateMaterialUsageConsumedOn(value: string): void {
    this.cmdUpdateMaterialUsageConsumedOn = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.consumedOn', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageConsumedOn — bind UI events here */
  handleCmdUpdateMaterialUsageConsumedOnChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageConsumedOn(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis */
  setCmdUpdateMaterialUsageUnitCostBasis(value: string): void {
    this.cmdUpdateMaterialUsageUnitCostBasis = value;
    setState('ui.materialUsageCatalogue.input.cmdUpdateMaterialUsage.unitCostBasis', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateMaterialUsageUnitCostBasis — bind UI events here */
  handleCmdUpdateMaterialUsageUnitCostBasisChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateMaterialUsageUnitCostBasis(value);
  }

  /** setter for state ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId */
  setCmdDeleteMaterialUsageMaterialUsageId(value: string): void {
    this.cmdDeleteMaterialUsageMaterialUsageId = value;
    setState('ui.materialUsageCatalogue.input.cmdDeleteMaterialUsage.materialUsageId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteMaterialUsageMaterialUsageId — bind UI events here */
  handleCmdDeleteMaterialUsageMaterialUsageIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteMaterialUsageMaterialUsageId(value);
  }
}
