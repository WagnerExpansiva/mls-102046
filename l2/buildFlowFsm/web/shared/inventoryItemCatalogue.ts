/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListInventoryItemInput,
  QryListInventoryItemOutput,
  CmdCreateInventoryItemInput,
  CmdCreateInventoryItemOutput,
  CmdUpdateInventoryItemInput,
  CmdUpdateInventoryItemOutput,
  CmdDeleteInventoryItemInput,
  CmdDeleteInventoryItemOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.js';
import {
  qryListInventoryItemRoute,
  cmdCreateInventoryItemRoute,
  cmdUpdateInventoryItemRoute,
  cmdDeleteInventoryItemRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.js';

export type {
  QryListInventoryItemInput,
  QryListInventoryItemOutput,
  CmdCreateInventoryItemInput,
  CmdCreateInventoryItemOutput,
  CmdUpdateInventoryItemInput,
  CmdUpdateInventoryItemOutput,
  CmdDeleteInventoryItemInput,
  CmdDeleteInventoryItemOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/inventoryItemCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.inventoryItemCatalogue.recordList.title': 'Localizar itens de estoque',
  'organism.inventoryItemCatalogue.qryListInventoryItem.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label': 'Name',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label': 'Description',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem': 'Excluir Item de estoque',
  'section.inventoryItemCatalogue.recordForm.title': 'Criar ou corrigir item',
  'organism.inventoryItemCatalogue.cmdCreateInventoryItem.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label': 'Status',
  'action.cmdCreateInventoryItem.success': 'Criar Item de estoque: OK',
  'action.cmdCreateInventoryItem.error': 'Criar Item de estoque: falhou',
  'action.cmdUpdateInventoryItem.success': 'Atualizar Item de estoque: OK',
  'action.cmdUpdateInventoryItem.error': 'Atualizar Item de estoque: falhou',
  'action.cmdDeleteInventoryItem.success': 'Excluir Item de estoque: OK',
  'action.cmdDeleteInventoryItem.error': 'Excluir Item de estoque: falhou',
  'section.inventoryItemCatalogue.inventoryWorkbench.title': 'Catálogo de itens de estoque',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.inventoryItemCatalogue.recordList.title': 'Localizar itens de estoque',
  'organism.inventoryItemCatalogue.qryListInventoryItem.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label': 'Name',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label': 'Description',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem': 'Excluir Item de estoque',
  'section.inventoryItemCatalogue.recordForm.title': 'Criar ou corrigir item',
  'organism.inventoryItemCatalogue.cmdCreateInventoryItem.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label': 'Status',
  'action.cmdCreateInventoryItem.success': 'Criar Item de estoque: OK',
  'action.cmdCreateInventoryItem.error': 'Criar Item de estoque: falhou',
  'action.cmdUpdateInventoryItem.success': 'Atualizar Item de estoque: OK',
  'action.cmdUpdateInventoryItem.error': 'Atualizar Item de estoque: falhou',
  'action.cmdDeleteInventoryItem.success': 'Excluir Item de estoque: OK',
  'action.cmdDeleteInventoryItem.error': 'Excluir Item de estoque: falhou',
  'section.inventoryItemCatalogue.inventoryWorkbench.title': 'Catálogo de itens de estoque',
};
const message_en: MessageType = {
  'section.inventoryItemCatalogue.recordList.title': 'Localizar itens de estoque',
  'organism.inventoryItemCatalogue.qryListInventoryItem.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label': 'Name',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label': 'Description',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem': 'Excluir Item de estoque',
  'section.inventoryItemCatalogue.recordForm.title': 'Criar ou corrigir item',
  'organism.inventoryItemCatalogue.cmdCreateInventoryItem.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label': 'Status',
  'action.cmdCreateInventoryItem.success': 'Criar Item de estoque: OK',
  'action.cmdCreateInventoryItem.error': 'Criar Item de estoque: falhou',
  'action.cmdUpdateInventoryItem.success': 'Atualizar Item de estoque: OK',
  'action.cmdUpdateInventoryItem.error': 'Atualizar Item de estoque: falhou',
  'action.cmdDeleteInventoryItem.success': 'Excluir Item de estoque: OK',
  'action.cmdDeleteInventoryItem.error': 'Excluir Item de estoque: falhou',
  'section.inventoryItemCatalogue.inventoryWorkbench.title': 'Catálogo de itens de estoque',
};
const message_es: MessageType = {
  'section.inventoryItemCatalogue.recordList.title': 'Localizar itens de estoque',
  'organism.inventoryItemCatalogue.qryListInventoryItem.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.title': 'Listar Item de estoque',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.empty': 'Nenhum registro encontrado',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label': 'Inventory Item Id',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label': 'Name',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label': 'Description',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title': 'Excluir Item de estoque',
  'intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem': 'Excluir Item de estoque',
  'section.inventoryItemCatalogue.recordForm.title': 'Criar ou corrigir item',
  'organism.inventoryItemCatalogue.cmdCreateInventoryItem.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem': 'Criar Item de estoque',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label': 'Status',
  'organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem': 'Atualizar Item de estoque',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label': 'Name',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label': 'Description',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label': 'Unit Of Measure',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label': 'Reference Unit Cost',
  'intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label': 'Status',
  'action.cmdCreateInventoryItem.success': 'Criar Item de estoque: OK',
  'action.cmdCreateInventoryItem.error': 'Criar Item de estoque: falhou',
  'action.cmdUpdateInventoryItem.success': 'Atualizar Item de estoque: OK',
  'action.cmdUpdateInventoryItem.error': 'Atualizar Item de estoque: falhou',
  'action.cmdDeleteInventoryItem.success': 'Excluir Item de estoque: OK',
  'action.cmdDeleteInventoryItem.error': 'Excluir Item de estoque: falhou',
  'section.inventoryItemCatalogue.inventoryWorkbench.title': 'Catálogo de itens de estoque',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.inventoryItemCatalogue.status',
  'ui.inventoryItemCatalogue.action.qryListInventoryItem.status',
  'ui.inventoryItemCatalogue.data.qryListInventoryItem',
  'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status',
  'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name',
  'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description',
  'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure',
  'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost',
  'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status',
  'ui.inventoryItemCatalogue.output.cmdCreateInventoryItem',
  'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error',
  'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost',
  'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status',
  'ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem',
  'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error',
  'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status',
  'ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId',
  'ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem',
  'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error',
];

export class BuildFlowFsmInventoryItemCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListInventoryItemState — actionStatus, values: idle|loading|success|error */
  @property() qryListInventoryItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListInventoryItemData — queryResult, outputShape: array */
  @property() qryListInventoryItemData: QryListInventoryItemOutput[] = [];
  /** state cmdCreateInventoryItemState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateInventoryItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateInventoryItemName — input */
  @property() cmdCreateInventoryItemName: string = '';
  /** state cmdCreateInventoryItemDescription — input */
  @property() cmdCreateInventoryItemDescription: string = '';
  /** state cmdCreateInventoryItemUnitOfMeasure — input */
  @property() cmdCreateInventoryItemUnitOfMeasure: string = '';
  /** state cmdCreateInventoryItemReferenceUnitCost — input */
  @property() cmdCreateInventoryItemReferenceUnitCost: string = '';
  /** state cmdCreateInventoryItemStatus — input */
  @property() cmdCreateInventoryItemStatus: string = '';
  /** state cmdCreateInventoryItemOutput — commandOutput */
  @property() cmdCreateInventoryItemOutput: CmdCreateInventoryItemOutput | null = null;
  /** state cmdCreateInventoryItemError — actionError */
  @property() cmdCreateInventoryItemError: string = '';
  /** state cmdUpdateInventoryItemState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateInventoryItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateInventoryItemInventoryItemId — input */
  @property() cmdUpdateInventoryItemInventoryItemId: string = '';
  /** state cmdUpdateInventoryItemName — input */
  @property() cmdUpdateInventoryItemName: string = '';
  /** state cmdUpdateInventoryItemDescription — input */
  @property() cmdUpdateInventoryItemDescription: string = '';
  /** state cmdUpdateInventoryItemUnitOfMeasure — input */
  @property() cmdUpdateInventoryItemUnitOfMeasure: string = '';
  /** state cmdUpdateInventoryItemReferenceUnitCost — input */
  @property() cmdUpdateInventoryItemReferenceUnitCost: string = '';
  /** state cmdUpdateInventoryItemStatus — input */
  @property() cmdUpdateInventoryItemStatus: string = '';
  /** state cmdUpdateInventoryItemOutput — commandOutput */
  @property() cmdUpdateInventoryItemOutput: CmdUpdateInventoryItemOutput | null = null;
  /** state cmdUpdateInventoryItemError — actionError */
  @property() cmdUpdateInventoryItemError: string = '';
  /** state cmdDeleteInventoryItemState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteInventoryItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteInventoryItemInventoryItemId — input */
  @property() cmdDeleteInventoryItemInventoryItemId: string = '';
  /** state cmdDeleteInventoryItemOutput — commandOutput */
  @property() cmdDeleteInventoryItemOutput: CmdDeleteInventoryItemOutput | null = null;
  /** state cmdDeleteInventoryItemError — actionError */
  @property() cmdDeleteInventoryItemError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.inventoryItemCatalogue.status', '');
    this.initStateValue('ui.inventoryItemCatalogue.action.qryListInventoryItem.status', 'idle');
    this.initStateValue('ui.inventoryItemCatalogue.data.qryListInventoryItem', []);
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'idle');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status', '');
    this.initStateValue('ui.inventoryItemCatalogue.output.cmdCreateInventoryItem', null);
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error', '');
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'idle');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost', '');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status', '');
    this.initStateValue('ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem', null);
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error', '');
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'idle');
    this.initStateValue('ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId', '');
    this.initStateValue('ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem', null);
    this.initStateValue('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListInventoryItem();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.inventoryItemCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.qryListInventoryItem.status':
        this.qryListInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.data.qryListInventoryItem':
        this.qryListInventoryItemData = (value as QryListInventoryItemOutput[]) ?? [];
        break;
      case 'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status':
        this.cmdCreateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name':
        this.cmdCreateInventoryItemName = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description':
        this.cmdCreateInventoryItemDescription = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure':
        this.cmdCreateInventoryItemUnitOfMeasure = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost':
        this.cmdCreateInventoryItemReferenceUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status':
        this.cmdCreateInventoryItemStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdCreateInventoryItem':
        this.cmdCreateInventoryItemOutput = (value as CmdCreateInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error':
        this.cmdCreateInventoryItemError = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status':
        this.cmdUpdateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId':
        this.cmdUpdateInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name':
        this.cmdUpdateInventoryItemName = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description':
        this.cmdUpdateInventoryItemDescription = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure':
        this.cmdUpdateInventoryItemUnitOfMeasure = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost':
        this.cmdUpdateInventoryItemReferenceUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status':
        this.cmdUpdateInventoryItemStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem':
        this.cmdUpdateInventoryItemOutput = (value as CmdUpdateInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error':
        this.cmdUpdateInventoryItemError = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status':
        this.cmdDeleteInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId':
        this.cmdDeleteInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem':
        this.cmdDeleteInventoryItemOutput = (value as CmdDeleteInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error':
        this.cmdDeleteInventoryItemError = (value as string) ?? '';
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
      case 'ui.inventoryItemCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.qryListInventoryItem.status':
        this.qryListInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.data.qryListInventoryItem':
        this.qryListInventoryItemData = (value as QryListInventoryItemOutput[]) ?? [];
        break;
      case 'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status':
        this.cmdCreateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name':
        this.cmdCreateInventoryItemName = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description':
        this.cmdCreateInventoryItemDescription = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure':
        this.cmdCreateInventoryItemUnitOfMeasure = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost':
        this.cmdCreateInventoryItemReferenceUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status':
        this.cmdCreateInventoryItemStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdCreateInventoryItem':
        this.cmdCreateInventoryItemOutput = (value as CmdCreateInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error':
        this.cmdCreateInventoryItemError = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status':
        this.cmdUpdateInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId':
        this.cmdUpdateInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name':
        this.cmdUpdateInventoryItemName = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description':
        this.cmdUpdateInventoryItemDescription = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure':
        this.cmdUpdateInventoryItemUnitOfMeasure = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost':
        this.cmdUpdateInventoryItemReferenceUnitCost = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status':
        this.cmdUpdateInventoryItemStatus = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem':
        this.cmdUpdateInventoryItemOutput = (value as CmdUpdateInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error':
        this.cmdUpdateInventoryItemError = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status':
        this.cmdDeleteInventoryItemState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId':
        this.cmdDeleteInventoryItemInventoryItemId = (value as string) ?? '';
        break;
      case 'ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem':
        this.cmdDeleteInventoryItemOutput = (value as CmdDeleteInventoryItemOutput | null) ?? null;
        break;
      case 'ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error':
        this.cmdDeleteInventoryItemError = (value as string) ?? '';
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

  /** action qryListInventoryItem (query) — route buildFlowFsm.inventoryItemCatalogue.qryListInventoryItem; inputs: (none); writes ui.inventoryItemCatalogue.data.qryListInventoryItem; status ui.inventoryItemCatalogue.action.qryListInventoryItem.status */
  async loadQryListInventoryItem(): Promise<void> {
    this.qryListInventoryItemState = 'loading';
    setState('ui.inventoryItemCatalogue.action.qryListInventoryItem.status', 'loading');
    const params: QryListInventoryItemInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListInventoryItemOutput[]>(qryListInventoryItemRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListInventoryItemData = data;
      setState('ui.inventoryItemCatalogue.data.qryListInventoryItem', data);
      this.qryListInventoryItemState = 'success';
      setState('ui.inventoryItemCatalogue.action.qryListInventoryItem.status', 'success');
    } else {
      this.qryListInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.qryListInventoryItem.status', 'error');
      if (response.error) {
        console.error('qryListInventoryItem failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListInventoryItem — bind UI events here */
  handleQryListInventoryItemClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListInventoryItem();
  }

  /** action cmdCreateInventoryItem (command) — route buildFlowFsm.inventoryItemCatalogue.cmdCreateInventoryItem; inputs: name, description, unitOfMeasure, referenceUnitCost, status; writes ui.inventoryItemCatalogue.output.cmdCreateInventoryItem; status ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status; feedback keys action.cmdCreateInventoryItem.success / action.cmdCreateInventoryItem.error */
  async cmdCreateInventoryItem(): Promise<void> {
    this.cmdCreateInventoryItemState = 'loading';
    setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'loading');
    this.cmdCreateInventoryItemError = '';
    setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error', '');
    const referenceUnitCostNum = Number(this.cmdCreateInventoryItemReferenceUnitCost);
    const params: CmdCreateInventoryItemInput = {
      name: this.cmdCreateInventoryItemName,
      unitOfMeasure: this.cmdCreateInventoryItemUnitOfMeasure,
      referenceUnitCost: Number.isNaN(referenceUnitCostNum) ? 0 : referenceUnitCostNum,
      status: this.cmdCreateInventoryItemStatus,
    };
    if (this.cmdCreateInventoryItemDescription) {
      params.description = this.cmdCreateInventoryItemDescription;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateInventoryItemOutput>(cmdCreateInventoryItemRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateInventoryItem.error');
      this.cmdCreateInventoryItemError = errMsg;
      setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.error', errMsg);
      this.cmdCreateInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateInventoryItemOutput | null = response.data ?? null;
    this.cmdCreateInventoryItemOutput = data;
    setState('ui.inventoryItemCatalogue.output.cmdCreateInventoryItem', data);
    try {
      await this.loadQryListInventoryItem();
      if (this.qryListInventoryItemState === 'error') {
        this.cmdCreateInventoryItemState = 'error';
        setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInventoryItem refresh failed', refreshError);
      this.cmdCreateInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInventoryItemName = '';
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name', '');
    this.cmdCreateInventoryItemDescription = '';
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description', '');
    this.cmdCreateInventoryItemUnitOfMeasure = '';
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure', '');
    this.cmdCreateInventoryItemReferenceUnitCost = '';
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost', '');
    this.cmdCreateInventoryItemStatus = '';
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status', '');
    this.cmdCreateInventoryItemState = 'success';
    setState('ui.inventoryItemCatalogue.action.cmdCreateInventoryItem.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateInventoryItem — bind UI events here */
  handleCmdCreateInventoryItemClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateInventoryItem();
    });
  }

  /** action cmdUpdateInventoryItem (command) — route buildFlowFsm.inventoryItemCatalogue.cmdUpdateInventoryItem; inputs: inventoryItemId, name, description, unitOfMeasure, referenceUnitCost, status; writes ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem; status ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status; feedback keys action.cmdUpdateInventoryItem.success / action.cmdUpdateInventoryItem.error */
  async cmdUpdateInventoryItem(): Promise<void> {
    if (!this.cmdUpdateInventoryItemInventoryItemId) {
      this.cmdUpdateInventoryItemState = 'idle';
      setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInventoryItemState = 'loading';
    setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'loading');
    this.cmdUpdateInventoryItemError = '';
    setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error', '');
    const referenceUnitCostNum = Number(this.cmdUpdateInventoryItemReferenceUnitCost);
    const params: CmdUpdateInventoryItemInput = {
      inventoryItemId: this.cmdUpdateInventoryItemInventoryItemId,
      name: this.cmdUpdateInventoryItemName,
      unitOfMeasure: this.cmdUpdateInventoryItemUnitOfMeasure,
      referenceUnitCost: Number.isNaN(referenceUnitCostNum) ? 0 : referenceUnitCostNum,
      status: this.cmdUpdateInventoryItemStatus,
    };
    if (this.cmdUpdateInventoryItemDescription) {
      params.description = this.cmdUpdateInventoryItemDescription;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateInventoryItemOutput>(cmdUpdateInventoryItemRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateInventoryItem.error');
      this.cmdUpdateInventoryItemError = errMsg;
      setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.error', errMsg);
      this.cmdUpdateInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateInventoryItemOutput | null = response.data ?? null;
    this.cmdUpdateInventoryItemOutput = data;
    setState('ui.inventoryItemCatalogue.output.cmdUpdateInventoryItem', data);
    try {
      await this.loadQryListInventoryItem();
      if (this.qryListInventoryItemState === 'error') {
        this.cmdUpdateInventoryItemState = 'error';
        setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInventoryItem refresh failed', refreshError);
      this.cmdUpdateInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInventoryItemInventoryItemId = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId', '');
    this.cmdUpdateInventoryItemName = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name', '');
    this.cmdUpdateInventoryItemDescription = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description', '');
    this.cmdUpdateInventoryItemUnitOfMeasure = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure', '');
    this.cmdUpdateInventoryItemReferenceUnitCost = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost', '');
    this.cmdUpdateInventoryItemStatus = '';
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status', '');
    this.cmdUpdateInventoryItemState = 'success';
    setState('ui.inventoryItemCatalogue.action.cmdUpdateInventoryItem.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateInventoryItem — bind UI events here */
  handleCmdUpdateInventoryItemClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateInventoryItem();
    });
  }

  /** action cmdDeleteInventoryItem (command) — route buildFlowFsm.inventoryItemCatalogue.cmdDeleteInventoryItem; inputs: inventoryItemId; writes ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem; status ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status; feedback keys action.cmdDeleteInventoryItem.success / action.cmdDeleteInventoryItem.error */
  async cmdDeleteInventoryItem(): Promise<void> {
    if (!this.cmdDeleteInventoryItemInventoryItemId) {
      this.cmdDeleteInventoryItemState = 'idle';
      setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInventoryItemState = 'loading';
    setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'loading');
    this.cmdDeleteInventoryItemError = '';
    setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error', '');
    const params: CmdDeleteInventoryItemInput = {
      inventoryItemId: this.cmdDeleteInventoryItemInventoryItemId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteInventoryItemOutput>(cmdDeleteInventoryItemRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteInventoryItem.error');
      this.cmdDeleteInventoryItemError = errMsg;
      setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.error', errMsg);
      this.cmdDeleteInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteInventoryItemOutput | null = response.data ?? null;
    this.cmdDeleteInventoryItemOutput = data;
    setState('ui.inventoryItemCatalogue.output.cmdDeleteInventoryItem', data);
    try {
      await this.loadQryListInventoryItem();
      if (this.qryListInventoryItemState === 'error') {
        this.cmdDeleteInventoryItemState = 'error';
        setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInventoryItem refresh failed', refreshError);
      this.cmdDeleteInventoryItemState = 'error';
      setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInventoryItemInventoryItemId = '';
    setState('ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId', '');
    this.cmdDeleteInventoryItemState = 'success';
    setState('ui.inventoryItemCatalogue.action.cmdDeleteInventoryItem.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteInventoryItem — bind UI events here */
  handleCmdDeleteInventoryItemClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteInventoryItem();
    });
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name */
  setCmdCreateInventoryItemName(value: string): void {
    this.cmdCreateInventoryItemName = value;
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.name', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryItemName — bind UI events here */
  handleCmdCreateInventoryItemNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryItemName(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description */
  setCmdCreateInventoryItemDescription(value: string): void {
    this.cmdCreateInventoryItemDescription = value;
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryItemDescription — bind UI events here */
  handleCmdCreateInventoryItemDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryItemDescription(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure */
  setCmdCreateInventoryItemUnitOfMeasure(value: string): void {
    this.cmdCreateInventoryItemUnitOfMeasure = value;
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.unitOfMeasure', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryItemUnitOfMeasure — bind UI events here */
  handleCmdCreateInventoryItemUnitOfMeasureChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryItemUnitOfMeasure(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost */
  setCmdCreateInventoryItemReferenceUnitCost(value: string): void {
    this.cmdCreateInventoryItemReferenceUnitCost = value;
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.referenceUnitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryItemReferenceUnitCost — bind UI events here */
  handleCmdCreateInventoryItemReferenceUnitCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryItemReferenceUnitCost(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status */
  setCmdCreateInventoryItemStatus(value: string): void {
    this.cmdCreateInventoryItemStatus = value;
    setState('ui.inventoryItemCatalogue.input.cmdCreateInventoryItem.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInventoryItemStatus — bind UI events here */
  handleCmdCreateInventoryItemStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInventoryItemStatus(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId */
  setCmdUpdateInventoryItemInventoryItemId(value: string): void {
    this.cmdUpdateInventoryItemInventoryItemId = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.inventoryItemId', value);
    const collection =
      (getState('ui.inventoryItemCatalogue.data.qryListInventoryItem') as QryListInventoryItemOutput[] | null | undefined) ?? this.qryListInventoryItemData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInventoryItemOutput) => String(row.inventoryItemId) === String(value),
      );
      if (item) {
        this.cmdUpdateInventoryItemName = item.name;
        setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name', item.name);
        this.cmdUpdateInventoryItemDescription = item.description;
        setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description', item.description);
        this.cmdUpdateInventoryItemUnitOfMeasure = item.unitOfMeasure;
        setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure', item.unitOfMeasure);
        this.cmdUpdateInventoryItemReferenceUnitCost = String(item.referenceUnitCost);
        setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost', String(item.referenceUnitCost));
        this.cmdUpdateInventoryItemStatus = item.status;
        setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemInventoryItemId — bind UI events here */
  handleCmdUpdateInventoryItemInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemInventoryItemId(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name */
  setCmdUpdateInventoryItemName(value: string): void {
    this.cmdUpdateInventoryItemName = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.name', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemName — bind UI events here */
  handleCmdUpdateInventoryItemNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemName(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description */
  setCmdUpdateInventoryItemDescription(value: string): void {
    this.cmdUpdateInventoryItemDescription = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemDescription — bind UI events here */
  handleCmdUpdateInventoryItemDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemDescription(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure */
  setCmdUpdateInventoryItemUnitOfMeasure(value: string): void {
    this.cmdUpdateInventoryItemUnitOfMeasure = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.unitOfMeasure', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemUnitOfMeasure — bind UI events here */
  handleCmdUpdateInventoryItemUnitOfMeasureChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemUnitOfMeasure(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost */
  setCmdUpdateInventoryItemReferenceUnitCost(value: string): void {
    this.cmdUpdateInventoryItemReferenceUnitCost = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.referenceUnitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemReferenceUnitCost — bind UI events here */
  handleCmdUpdateInventoryItemReferenceUnitCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemReferenceUnitCost(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status */
  setCmdUpdateInventoryItemStatus(value: string): void {
    this.cmdUpdateInventoryItemStatus = value;
    setState('ui.inventoryItemCatalogue.input.cmdUpdateInventoryItem.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInventoryItemStatus — bind UI events here */
  handleCmdUpdateInventoryItemStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInventoryItemStatus(value);
  }

  /** setter for state ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId */
  setCmdDeleteInventoryItemInventoryItemId(value: string): void {
    this.cmdDeleteInventoryItemInventoryItemId = value;
    setState('ui.inventoryItemCatalogue.input.cmdDeleteInventoryItem.inventoryItemId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteInventoryItemInventoryItemId — bind UI events here */
  handleCmdDeleteInventoryItemInventoryItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteInventoryItemInventoryItemId(value);
  }
}
