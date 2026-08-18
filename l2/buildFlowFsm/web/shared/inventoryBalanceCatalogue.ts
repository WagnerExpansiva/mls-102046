/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListInventoryBalanceInput,
  QryListInventoryBalanceOutput,
  CmdCreateInventoryBalanceInput,
  CmdCreateInventoryBalanceOutput,
  CmdUpdateInventoryBalanceInput,
  CmdUpdateInventoryBalanceOutput,
  CmdDeleteInventoryBalanceInput,
  CmdDeleteInventoryBalanceOutput,
  QryInventoryItemPickerInput,
  QryInventoryItemPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.js';
import {
  qryListInventoryBalanceRoute,
  cmdCreateInventoryBalanceRoute,
  cmdUpdateInventoryBalanceRoute,
  cmdDeleteInventoryBalanceRoute,
  qryInventoryItemPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.js';

export type {
  QryListInventoryBalanceInput,
  QryListInventoryBalanceOutput,
  CmdCreateInventoryBalanceInput,
  CmdCreateInventoryBalanceOutput,
  CmdUpdateInventoryBalanceInput,
  CmdUpdateInventoryBalanceOutput,
  CmdDeleteInventoryBalanceInput,
  CmdDeleteInventoryBalanceOutput,
  QryInventoryItemPickerInput,
  QryInventoryItemPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryBalanceCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.inventoryBalanceCatalogue.recordList.title': 'Localizar saldo de estoque',
  'organism.inventoryBalanceCatalogue.qryListInventoryBalance.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance': 'Excluir Saldo de estoque',
  'section.inventoryBalanceCatalogue.recordForm.title': 'Criar ou corrigir saldo',
  'organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label': 'Status',
  'action.cmdCreateInventoryBalance.success': 'Criar Saldo de estoque: OK',
  'action.cmdCreateInventoryBalance.error': 'Criar Saldo de estoque: falhou',
  'action.cmdUpdateInventoryBalance.success': 'Atualizar Saldo de estoque: OK',
  'action.cmdUpdateInventoryBalance.error': 'Atualizar Saldo de estoque: falhou',
  'action.cmdDeleteInventoryBalance.success': 'Excluir Saldo de estoque: OK',
  'action.cmdDeleteInventoryBalance.error': 'Excluir Saldo de estoque: falhou',
  'section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title': 'Saldo de estoque',
  'section.inventoryBalanceCatalogue.inventoryBalanceCreation.title': 'Novo saldo de estoque',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.inventoryBalanceCatalogue.recordList.title': 'Localizar saldo de estoque',
  'organism.inventoryBalanceCatalogue.qryListInventoryBalance.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance': 'Excluir Saldo de estoque',
  'section.inventoryBalanceCatalogue.recordForm.title': 'Criar ou corrigir saldo',
  'organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label': 'Status',
  'action.cmdCreateInventoryBalance.success': 'Criar Saldo de estoque: OK',
  'action.cmdCreateInventoryBalance.error': 'Criar Saldo de estoque: falhou',
  'action.cmdUpdateInventoryBalance.success': 'Atualizar Saldo de estoque: OK',
  'action.cmdUpdateInventoryBalance.error': 'Atualizar Saldo de estoque: falhou',
  'action.cmdDeleteInventoryBalance.success': 'Excluir Saldo de estoque: OK',
  'action.cmdDeleteInventoryBalance.error': 'Excluir Saldo de estoque: falhou',
  'section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title': 'Saldo de estoque',
  'section.inventoryBalanceCatalogue.inventoryBalanceCreation.title': 'Novo saldo de estoque',
};
const message_en: MessageType = {
  'section.inventoryBalanceCatalogue.recordList.title': 'Localizar saldo de estoque',
  'organism.inventoryBalanceCatalogue.qryListInventoryBalance.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance': 'Excluir Saldo de estoque',
  'section.inventoryBalanceCatalogue.recordForm.title': 'Criar ou corrigir saldo',
  'organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label': 'Status',
  'action.cmdCreateInventoryBalance.success': 'Criar Saldo de estoque: OK',
  'action.cmdCreateInventoryBalance.error': 'Criar Saldo de estoque: falhou',
  'action.cmdUpdateInventoryBalance.success': 'Atualizar Saldo de estoque: OK',
  'action.cmdUpdateInventoryBalance.error': 'Atualizar Saldo de estoque: falhou',
  'action.cmdDeleteInventoryBalance.success': 'Excluir Saldo de estoque: OK',
  'action.cmdDeleteInventoryBalance.error': 'Excluir Saldo de estoque: falhou',
  'section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title': 'Saldo de estoque',
  'section.inventoryBalanceCatalogue.inventoryBalanceCreation.title': 'Novo saldo de estoque',
};
const message_es: MessageType = {
  'section.inventoryBalanceCatalogue.recordList.title': 'Localizar saldo de estoque',
  'organism.inventoryBalanceCatalogue.qryListInventoryBalance.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title': 'Listar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label': 'Inventory Balance Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title': 'Listar Item de estoque',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label': 'Name',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label': 'Description',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title': 'Excluir Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance': 'Excluir Saldo de estoque',
  'section.inventoryBalanceCatalogue.recordForm.title': 'Criar ou corrigir saldo',
  'organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance': 'Criar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label': 'Status',
  'organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance': 'Atualizar Saldo de estoque',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label': 'Physical Quantity',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label': 'Applicable Unit Cost',
  'intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label': 'Status',
  'action.cmdCreateInventoryBalance.success': 'Criar Saldo de estoque: OK',
  'action.cmdCreateInventoryBalance.error': 'Criar Saldo de estoque: falhou',
  'action.cmdUpdateInventoryBalance.success': 'Atualizar Saldo de estoque: OK',
  'action.cmdUpdateInventoryBalance.error': 'Atualizar Saldo de estoque: falhou',
  'action.cmdDeleteInventoryBalance.success': 'Excluir Saldo de estoque: OK',
  'action.cmdDeleteInventoryBalance.error': 'Excluir Saldo de estoque: falhou',
  'section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title': 'Saldo de estoque',
  'section.inventoryBalanceCatalogue.inventoryBalanceCreation.title': 'Novo saldo de estoque',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.inventoryBalanceCatalogue.status',
  'ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.data.qryListInventoryBalance',
  'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId',
  'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity',
  'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost',
  'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance',
  'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error',
  'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId',
  'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId',
  'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity',
  'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost',
  'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance',
  'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error',
  'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status',
  'ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId',
  'ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance',
  'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error',
  'ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status',
  'ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker',
];

export class BuildFlowFsmInventoryBalanceCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListInventoryBalanceState — actionStatus, values: idle|loading|success|error */
  @property() qryListInventoryBalanceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListInventoryBalanceData — queryResult, outputShape: array */
  @property() qryListInventoryBalanceData: QryListInventoryBalanceOutput[] = [];
  /** state cmdCreateInventoryBalanceState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateInventoryBalanceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateInventoryBalanceInventoryItemId — input */
  @property() cmdCreateInventoryBalanceInventoryItemId: string = '';
  /** state cmdCreateInventoryBalancePhysicalQuantity — input */
  @property() cmdCreateInventoryBalancePhysicalQuantity: string = '';
  /** state cmdCreateInventoryBalanceApplicableUnitCost — input */
  @property() cmdCreateInventoryBalanceApplicableUnitCost: string = '';
  /** state cmdCreateInventoryBalanceStatus — input */
  @property() cmdCreateInventoryBalanceStatus: string = '';
  /** state cmdCreateInventoryBalanceOutput — commandOutput */
  @property() cmdCreateInventoryBalanceOutput: CmdCreateInventoryBalanceOutput | null = null;
  /** state cmdCreateInventoryBalanceError — actionError */
  @property() cmdCreateInventoryBalanceError: string = '';
  /** state cmdUpdateInventoryBalanceState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateInventoryBalanceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateInventoryBalanceInventoryBalanceId — input */
  @property() cmdUpdateInventoryBalanceInventoryBalanceId: string = '';
  /** state cmdUpdateInventoryBalanceInventoryItemId — input */
  @property() cmdUpdateInventoryBalanceInventoryItemId: string = '';
  /** state cmdUpdateInventoryBalancePhysicalQuantity — input */
  @property() cmdUpdateInventoryBalancePhysicalQuantity: string = '';
  /** state cmdUpdateInventoryBalanceApplicableUnitCost — input */
  @property() cmdUpdateInventoryBalanceApplicableUnitCost: string = '';
  /** state cmdUpdateInventoryBalanceStatus — input */
  @property() cmdUpdateInventoryBalanceStatus: string = '';
  /** state cmdUpdateInventoryBalanceOutput — commandOutput */
  @property() cmdUpdateInventoryBalanceOutput: CmdUpdateInventoryBalanceOutput | null = null;
  /** state cmdUpdateInventoryBalanceError — actionError */
  @property() cmdUpdateInventoryBalanceError: string = '';
  /** state cmdDeleteInventoryBalanceState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteInventoryBalanceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteInventoryBalanceInventoryBalanceId — input */
  @property() cmdDeleteInventoryBalanceInventoryBalanceId: string = '';
  /** state cmdDeleteInventoryBalanceOutput — commandOutput */
  @property() cmdDeleteInventoryBalanceOutput: CmdDeleteInventoryBalanceOutput | null = null;
  /** state cmdDeleteInventoryBalanceError — actionError */
  @property() cmdDeleteInventoryBalanceError: string = '';
  /** state qryInventoryItemPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryInventoryItemPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInventoryItemPickerData — queryResult, outputShape: array */
  @property() qryInventoryItemPickerData: QryInventoryItemPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.inventoryBalanceCatalogue.status', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status', 'idle');
    this.initStateValue('ui.inventoryBalanceCatalogue.data.qryListInventoryBalance', []);
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'idle');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance', null);
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'idle');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance', null);
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'idle');
    this.initStateValue('ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance', null);
    this.initStateValue('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error', '');
    this.initStateValue('ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status', 'idle');
    this.initStateValue('ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListInventoryBalance();
    void this.loadQryInventoryItemPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.inventoryBalanceCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status':
        this.qryListInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.data.qryListInventoryBalance':
        this.qryListInventoryBalanceData = (value as QryListInventoryBalanceOutput[]) ?? [];
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status':
        this.cmdCreateInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId':
        this.cmdCreateInventoryBalanceInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity':
        this.cmdCreateInventoryBalancePhysicalQuantity = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost':
        this.cmdCreateInventoryBalanceApplicableUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status':
        this.cmdCreateInventoryBalanceStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance':
        this.cmdCreateInventoryBalanceOutput = (value as CmdCreateInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error':
        this.cmdCreateInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status':
        this.cmdUpdateInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId':
        this.cmdUpdateInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId':
        this.cmdUpdateInventoryBalanceInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity':
        this.cmdUpdateInventoryBalancePhysicalQuantity = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost':
        this.cmdUpdateInventoryBalanceApplicableUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status':
        this.cmdUpdateInventoryBalanceStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance':
        this.cmdUpdateInventoryBalanceOutput = (value as CmdUpdateInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error':
        this.cmdUpdateInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status':
        this.cmdDeleteInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId':
        this.cmdDeleteInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance':
        this.cmdDeleteInventoryBalanceOutput = (value as CmdDeleteInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error':
        this.cmdDeleteInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status':
        this.qryInventoryItemPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker':
        this.qryInventoryItemPickerData = (value as QryInventoryItemPickerOutput[]) ?? [];
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
      case 'ui.inventoryBalanceCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status':
        this.qryListInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.data.qryListInventoryBalance':
        this.qryListInventoryBalanceData = (value as QryListInventoryBalanceOutput[]) ?? [];
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status':
        this.cmdCreateInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId':
        this.cmdCreateInventoryBalanceInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity':
        this.cmdCreateInventoryBalancePhysicalQuantity = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost':
        this.cmdCreateInventoryBalanceApplicableUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status':
        this.cmdCreateInventoryBalanceStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance':
        this.cmdCreateInventoryBalanceOutput = (value as CmdCreateInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error':
        this.cmdCreateInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status':
        this.cmdUpdateInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId':
        this.cmdUpdateInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId':
        this.cmdUpdateInventoryBalanceInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity':
        this.cmdUpdateInventoryBalancePhysicalQuantity = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost':
        this.cmdUpdateInventoryBalanceApplicableUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status':
        this.cmdUpdateInventoryBalanceStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance':
        this.cmdUpdateInventoryBalanceOutput = (value as CmdUpdateInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error':
        this.cmdUpdateInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status':
        this.cmdDeleteInventoryBalanceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId':
        this.cmdDeleteInventoryBalanceInventoryBalanceId = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance':
        this.cmdDeleteInventoryBalanceOutput = (value as CmdDeleteInventoryBalanceOutput | null) ?? null;
        break;
      case 'ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error':
        this.cmdDeleteInventoryBalanceError = (value as string) ?? '';
        break;
      case 'ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status':
        this.qryInventoryItemPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker':
        this.qryInventoryItemPickerData = (value as QryInventoryItemPickerOutput[]) ?? [];
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
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

  /** action qryListInventoryBalance (query) — route buildFlowFsm.inventoryBalanceCatalogue.qryListInventoryBalance; inputs: (none); writes ui.inventoryBalanceCatalogue.data.qryListInventoryBalance; status ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status */
  async loadQryListInventoryBalance(): Promise<void> {
    this.qryListInventoryBalanceState = 'loading';
    setState('ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status', 'loading');
    const params: QryListInventoryBalanceInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListInventoryBalanceOutput[]>(qryListInventoryBalanceRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListInventoryBalanceData = data;
      setState('ui.inventoryBalanceCatalogue.data.qryListInventoryBalance', data);
      this.qryListInventoryBalanceState = 'success';
      setState('ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status', 'success');
    } else {
      this.qryListInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.qryListInventoryBalance.status', 'error');
      if (response.error) {
        console.error('qryListInventoryBalance failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListInventoryBalance — bind UI events here */
  handleQryListInventoryBalanceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListInventoryBalance();
  }

  /** action cmdCreateInventoryBalance (command) — route buildFlowFsm.inventoryBalanceCatalogue.cmdCreateInventoryBalance; inputs: inventoryItemId, physicalQuantity, applicableUnitCost, status; writes ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance; status ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status; feedback keys action.cmdCreateInventoryBalance.success / action.cmdCreateInventoryBalance.error */
  async cmdCreateInventoryBalance(): Promise<void> {
    if (!this.cmdCreateInventoryBalanceInventoryItemId) {
      this.cmdCreateInventoryBalanceState = 'idle';
      setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInventoryBalanceState = 'loading';
    setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'loading');
    this.cmdCreateInventoryBalanceError = '';
    setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error', '');
    const physicalQuantityNum = Number(this.cmdCreateInventoryBalancePhysicalQuantity);
    const applicableUnitCostNum = Number(this.cmdCreateInventoryBalanceApplicableUnitCost);
    const params: CmdCreateInventoryBalanceInput = {
      inventoryItemId: this.cmdCreateInventoryBalanceInventoryItemId,
      physicalQuantity: Number.isNaN(physicalQuantityNum) ? 0 : physicalQuantityNum,
      applicableUnitCost: Number.isNaN(applicableUnitCostNum) ? 0 : applicableUnitCostNum,
      status: this.cmdCreateInventoryBalanceStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateInventoryBalanceOutput>(cmdCreateInventoryBalanceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateInventoryBalance.error');
      this.cmdCreateInventoryBalanceError = errMsg;
      setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.error', errMsg);
      this.cmdCreateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateInventoryBalanceOutput | null = response.data ?? null;
    this.cmdCreateInventoryBalanceOutput = data;
    setState('ui.inventoryBalanceCatalogue.output.cmdCreateInventoryBalance', data);
    try {
      await this.loadQryListInventoryBalance();
      if (this.qryListInventoryBalanceState === 'error') {
        this.cmdCreateInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInventoryBalance refresh failed', refreshError);
      this.cmdCreateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdCreateInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInventoryBalance refresh failed', refreshError);
      this.cmdCreateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInventoryBalanceInventoryItemId = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId', '');
    this.cmdCreateInventoryBalancePhysicalQuantity = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity', '');
    this.cmdCreateInventoryBalanceApplicableUnitCost = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost', '');
    this.cmdCreateInventoryBalanceStatus = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status', '');
    this.cmdCreateInventoryBalanceState = 'success';
    setState('ui.inventoryBalanceCatalogue.action.cmdCreateInventoryBalance.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateInventoryBalance — bind UI events here */
  handleCmdCreateInventoryBalanceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateInventoryBalance();
    });
  }

  /** action cmdUpdateInventoryBalance (command) — route buildFlowFsm.inventoryBalanceCatalogue.cmdUpdateInventoryBalance; inputs: inventoryBalanceId, inventoryItemId, physicalQuantity, applicableUnitCost, status; writes ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance; status ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status; feedback keys action.cmdUpdateInventoryBalance.success / action.cmdUpdateInventoryBalance.error */
  async cmdUpdateInventoryBalance(): Promise<void> {
    if (!this.cmdUpdateInventoryBalanceInventoryBalanceId) {
      this.cmdUpdateInventoryBalanceState = 'idle';
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateInventoryBalanceInventoryItemId) {
      this.cmdUpdateInventoryBalanceState = 'idle';
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInventoryBalanceState = 'loading';
    setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'loading');
    this.cmdUpdateInventoryBalanceError = '';
    setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error', '');
    const physicalQuantityNum = Number(this.cmdUpdateInventoryBalancePhysicalQuantity);
    const applicableUnitCostNum = Number(this.cmdUpdateInventoryBalanceApplicableUnitCost);
    const params: CmdUpdateInventoryBalanceInput = {
      inventoryBalanceId: this.cmdUpdateInventoryBalanceInventoryBalanceId,
      inventoryItemId: this.cmdUpdateInventoryBalanceInventoryItemId,
      physicalQuantity: Number.isNaN(physicalQuantityNum) ? 0 : physicalQuantityNum,
      applicableUnitCost: Number.isNaN(applicableUnitCostNum) ? 0 : applicableUnitCostNum,
      status: this.cmdUpdateInventoryBalanceStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateInventoryBalanceOutput>(cmdUpdateInventoryBalanceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateInventoryBalance.error');
      this.cmdUpdateInventoryBalanceError = errMsg;
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.error', errMsg);
      this.cmdUpdateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateInventoryBalanceOutput | null = response.data ?? null;
    this.cmdUpdateInventoryBalanceOutput = data;
    setState('ui.inventoryBalanceCatalogue.output.cmdUpdateInventoryBalance', data);
    try {
      await this.loadQryListInventoryBalance();
      if (this.qryListInventoryBalanceState === 'error') {
        this.cmdUpdateInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInventoryBalance refresh failed', refreshError);
      this.cmdUpdateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdUpdateInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInventoryBalance refresh failed', refreshError);
      this.cmdUpdateInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInventoryBalanceInventoryBalanceId = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId', '');
    this.cmdUpdateInventoryBalanceInventoryItemId = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId', '');
    this.cmdUpdateInventoryBalancePhysicalQuantity = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity', '');
    this.cmdUpdateInventoryBalanceApplicableUnitCost = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost', '');
    this.cmdUpdateInventoryBalanceStatus = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status', '');
    this.cmdUpdateInventoryBalanceState = 'success';
    setState('ui.inventoryBalanceCatalogue.action.cmdUpdateInventoryBalance.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateInventoryBalance — bind UI events here */
  handleCmdUpdateInventoryBalanceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateInventoryBalance();
    });
  }

  /** action cmdDeleteInventoryBalance (command) — route buildFlowFsm.inventoryBalanceCatalogue.cmdDeleteInventoryBalance; inputs: inventoryBalanceId; writes ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance; status ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status; feedback keys action.cmdDeleteInventoryBalance.success / action.cmdDeleteInventoryBalance.error */
  async cmdDeleteInventoryBalance(): Promise<void> {
    if (!this.cmdDeleteInventoryBalanceInventoryBalanceId) {
      this.cmdDeleteInventoryBalanceState = 'idle';
      setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInventoryBalanceState = 'loading';
    setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'loading');
    this.cmdDeleteInventoryBalanceError = '';
    setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error', '');
    const params: CmdDeleteInventoryBalanceInput = {
      inventoryBalanceId: this.cmdDeleteInventoryBalanceInventoryBalanceId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteInventoryBalanceOutput>(cmdDeleteInventoryBalanceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteInventoryBalance.error');
      this.cmdDeleteInventoryBalanceError = errMsg;
      setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.error', errMsg);
      this.cmdDeleteInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteInventoryBalanceOutput | null = response.data ?? null;
    this.cmdDeleteInventoryBalanceOutput = data;
    setState('ui.inventoryBalanceCatalogue.output.cmdDeleteInventoryBalance', data);
    try {
      await this.loadQryListInventoryBalance();
      if (this.qryListInventoryBalanceState === 'error') {
        this.cmdDeleteInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInventoryBalance refresh failed', refreshError);
      this.cmdDeleteInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInventoryItemPicker();
      if (this.qryInventoryItemPickerState === 'error') {
        this.cmdDeleteInventoryBalanceState = 'error';
        setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInventoryBalance refresh failed', refreshError);
      this.cmdDeleteInventoryBalanceState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInventoryBalanceInventoryBalanceId = '';
    setState('ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId', '');
    this.cmdDeleteInventoryBalanceState = 'success';
    setState('ui.inventoryBalanceCatalogue.action.cmdDeleteInventoryBalance.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteInventoryBalance — bind UI events here */
  handleCmdDeleteInventoryBalanceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteInventoryBalance();
    });
  }

  /** action qryInventoryItemPicker (query) — route buildFlowFsm.inventoryBalanceCatalogue.qryInventoryItemPicker; inputs: (none); writes ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker; status ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status */
  async loadQryInventoryItemPicker(): Promise<void> {
    this.qryInventoryItemPickerState = 'loading';
    setState('ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status', 'loading');
    const params: QryInventoryItemPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInventoryItemPickerOutput[]>(qryInventoryItemPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryInventoryItemPickerData = data;
      setState('ui.inventoryBalanceCatalogue.data.qryInventoryItemPicker', data);
      this.qryInventoryItemPickerState = 'success';
      setState('ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status', 'success');
    } else {
      this.qryInventoryItemPickerState = 'error';
      setState('ui.inventoryBalanceCatalogue.action.qryInventoryItemPicker.status', 'error');
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

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId */
  setCmdCreateInventoryBalanceInventoryItemId(value: string): void {
    this.cmdCreateInventoryBalanceInventoryItemId = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.inventoryItemId', value);
    const collection =
      (getState('ui.inventoryBalanceCatalogue.data.qryListInventoryBalance') as QryListInventoryBalanceOutput[] | null | undefined) ?? this.qryListInventoryBalanceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInventoryBalanceOutput) => String(row.inventoryItemId) === String(value),
      );
      if (item) {
        this.cmdCreateInventoryBalancePhysicalQuantity = String(item.physicalQuantity);
        setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity', String(item.physicalQuantity));
        this.cmdCreateInventoryBalanceApplicableUnitCost = String(item.applicableUnitCost);
        setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost', String(item.applicableUnitCost));
        this.cmdCreateInventoryBalanceStatus = item.status;
        setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryBalanceInventoryItemId — bind UI events here */
  handleCmdCreateInventoryBalanceInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryBalanceInventoryItemId(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity */
  setCmdCreateInventoryBalancePhysicalQuantity(value: string): void {
    this.cmdCreateInventoryBalancePhysicalQuantity = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.physicalQuantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryBalancePhysicalQuantity — bind UI events here */
  handleCmdCreateInventoryBalancePhysicalQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryBalancePhysicalQuantity(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost */
  setCmdCreateInventoryBalanceApplicableUnitCost(value: string): void {
    this.cmdCreateInventoryBalanceApplicableUnitCost = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.applicableUnitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryBalanceApplicableUnitCost — bind UI events here */
  handleCmdCreateInventoryBalanceApplicableUnitCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryBalanceApplicableUnitCost(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status */
  setCmdCreateInventoryBalanceStatus(value: string): void {
    this.cmdCreateInventoryBalanceStatus = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdCreateInventoryBalance.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryBalanceStatus — bind UI events here */
  handleCmdCreateInventoryBalanceStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryBalanceStatus(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId */
  setCmdUpdateInventoryBalanceInventoryBalanceId(value: string): void {
    this.cmdUpdateInventoryBalanceInventoryBalanceId = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryBalanceId', value);
    const collection =
      (getState('ui.inventoryBalanceCatalogue.data.qryListInventoryBalance') as QryListInventoryBalanceOutput[] | null | undefined) ?? this.qryListInventoryBalanceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInventoryBalanceOutput) => String(row.inventoryBalanceId) === String(value),
      );
      if (item) {
        this.cmdUpdateInventoryBalancePhysicalQuantity = String(item.physicalQuantity);
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity', String(item.physicalQuantity));
        this.cmdUpdateInventoryBalanceApplicableUnitCost = String(item.applicableUnitCost);
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost', String(item.applicableUnitCost));
        this.cmdUpdateInventoryBalanceStatus = item.status;
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryBalanceInventoryBalanceId — bind UI events here */
  handleCmdUpdateInventoryBalanceInventoryBalanceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryBalanceInventoryBalanceId(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId */
  setCmdUpdateInventoryBalanceInventoryItemId(value: string): void {
    this.cmdUpdateInventoryBalanceInventoryItemId = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.inventoryItemId', value);
    const collection =
      (getState('ui.inventoryBalanceCatalogue.data.qryListInventoryBalance') as QryListInventoryBalanceOutput[] | null | undefined) ?? this.qryListInventoryBalanceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInventoryBalanceOutput) => String(row.inventoryItemId) === String(value),
      );
      if (item) {
        this.cmdUpdateInventoryBalancePhysicalQuantity = String(item.physicalQuantity);
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity', String(item.physicalQuantity));
        this.cmdUpdateInventoryBalanceApplicableUnitCost = String(item.applicableUnitCost);
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost', String(item.applicableUnitCost));
        this.cmdUpdateInventoryBalanceStatus = item.status;
        setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryBalanceInventoryItemId — bind UI events here */
  handleCmdUpdateInventoryBalanceInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryBalanceInventoryItemId(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity */
  setCmdUpdateInventoryBalancePhysicalQuantity(value: string): void {
    this.cmdUpdateInventoryBalancePhysicalQuantity = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.physicalQuantity', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryBalancePhysicalQuantity — bind UI events here */
  handleCmdUpdateInventoryBalancePhysicalQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryBalancePhysicalQuantity(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost */
  setCmdUpdateInventoryBalanceApplicableUnitCost(value: string): void {
    this.cmdUpdateInventoryBalanceApplicableUnitCost = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.applicableUnitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryBalanceApplicableUnitCost — bind UI events here */
  handleCmdUpdateInventoryBalanceApplicableUnitCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryBalanceApplicableUnitCost(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status */
  setCmdUpdateInventoryBalanceStatus(value: string): void {
    this.cmdUpdateInventoryBalanceStatus = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdUpdateInventoryBalance.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryBalanceStatus — bind UI events here */
  handleCmdUpdateInventoryBalanceStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryBalanceStatus(value);
  }

  /** setter for state ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId */
  setCmdDeleteInventoryBalanceInventoryBalanceId(value: string): void {
    this.cmdDeleteInventoryBalanceInventoryBalanceId = value;
    setState('ui.inventoryBalanceCatalogue.input.cmdDeleteInventoryBalance.inventoryBalanceId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteInventoryBalanceInventoryBalanceId — bind UI events here */
  handleCmdDeleteInventoryBalanceInventoryBalanceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteInventoryBalanceInventoryBalanceId(value);
  }
}
