/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListInvoiceInput,
  QryListInvoiceOutput,
  CmdCreateInvoiceInput,
  CmdCreateInvoiceOutput,
  CmdUpdateInvoiceInput,
  CmdUpdateInvoiceOutput,
  CmdDeleteInvoiceInput,
  CmdDeleteInvoiceOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.js';
import {
  qryListInvoiceRoute,
  cmdCreateInvoiceRoute,
  cmdUpdateInvoiceRoute,
  cmdDeleteInvoiceRoute,
  qryClientPickerRoute,
  qryProjectPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.js';

export type {
  QryListInvoiceInput,
  QryListInvoiceOutput,
  CmdCreateInvoiceInput,
  CmdCreateInvoiceOutput,
  CmdUpdateInvoiceInput,
  CmdUpdateInvoiceOutput,
  CmdDeleteInvoiceInput,
  CmdDeleteInvoiceOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.invoiceCatalogue.recordList.title': 'Localizar e selecionar fatura',
  'organism.invoiceCatalogue.qryListInvoice.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.invoiceCatalogue.qryListInvoice.list.column.status.label': 'Status',
  'organism.invoiceCatalogue.cmdDeleteInvoice.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice': 'Excluir Fatura',
  'section.invoiceCatalogue.recordForm.title': 'Emitir ou corrigir fatura',
  'organism.invoiceCatalogue.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'organism.invoiceCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.invoiceCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.invoiceCatalogue.cmdUpdateInvoice.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label': 'Amount',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label': 'Status',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdUpdateInvoice.success': 'Atualizar Fatura: OK',
  'action.cmdUpdateInvoice.error': 'Atualizar Fatura: falhou',
  'action.cmdDeleteInvoice.success': 'Excluir Fatura: OK',
  'action.cmdDeleteInvoice.error': 'Excluir Fatura: falhou',
  'section.invoiceCatalogue.invoiceWorkbench.title': 'Localizar e gerir faturas',
  'section.invoiceCatalogue.invoiceIssuance.title': 'Emitir nova fatura',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.invoiceCatalogue.recordList.title': 'Localizar e selecionar fatura',
  'organism.invoiceCatalogue.qryListInvoice.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.invoiceCatalogue.qryListInvoice.list.column.status.label': 'Status',
  'organism.invoiceCatalogue.cmdDeleteInvoice.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice': 'Excluir Fatura',
  'section.invoiceCatalogue.recordForm.title': 'Emitir ou corrigir fatura',
  'organism.invoiceCatalogue.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'organism.invoiceCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.invoiceCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.invoiceCatalogue.cmdUpdateInvoice.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label': 'Amount',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label': 'Status',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdUpdateInvoice.success': 'Atualizar Fatura: OK',
  'action.cmdUpdateInvoice.error': 'Atualizar Fatura: falhou',
  'action.cmdDeleteInvoice.success': 'Excluir Fatura: OK',
  'action.cmdDeleteInvoice.error': 'Excluir Fatura: falhou',
  'section.invoiceCatalogue.invoiceWorkbench.title': 'Localizar e gerir faturas',
  'section.invoiceCatalogue.invoiceIssuance.title': 'Emitir nova fatura',
};
const message_en: MessageType = {
  'section.invoiceCatalogue.recordList.title': 'Localizar e selecionar fatura',
  'organism.invoiceCatalogue.qryListInvoice.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.invoiceCatalogue.qryListInvoice.list.column.status.label': 'Status',
  'organism.invoiceCatalogue.cmdDeleteInvoice.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice': 'Excluir Fatura',
  'section.invoiceCatalogue.recordForm.title': 'Emitir ou corrigir fatura',
  'organism.invoiceCatalogue.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'organism.invoiceCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.invoiceCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.invoiceCatalogue.cmdUpdateInvoice.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label': 'Amount',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label': 'Status',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdUpdateInvoice.success': 'Atualizar Fatura: OK',
  'action.cmdUpdateInvoice.error': 'Atualizar Fatura: falhou',
  'action.cmdDeleteInvoice.success': 'Excluir Fatura: OK',
  'action.cmdDeleteInvoice.error': 'Excluir Fatura: falhou',
  'section.invoiceCatalogue.invoiceWorkbench.title': 'Localizar e gerir faturas',
  'section.invoiceCatalogue.invoiceIssuance.title': 'Emitir nova fatura',
};
const message_es: MessageType = {
  'section.invoiceCatalogue.recordList.title': 'Localizar e selecionar fatura',
  'organism.invoiceCatalogue.qryListInvoice.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.title': 'Listar Fatura',
  'intent.invoiceCatalogue.qryListInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.qryListInvoice.list.column.amount.label': 'Amount',
  'intent.invoiceCatalogue.qryListInvoice.list.column.status.label': 'Status',
  'organism.invoiceCatalogue.cmdDeleteInvoice.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.title': 'Excluir Fatura',
  'intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice': 'Excluir Fatura',
  'section.invoiceCatalogue.recordForm.title': 'Emitir ou corrigir fatura',
  'organism.invoiceCatalogue.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'organism.invoiceCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.invoiceCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.invoiceCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.invoiceCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.invoiceCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.invoiceCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.invoiceCatalogue.cmdUpdateInvoice.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.title': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice': 'Atualizar Fatura',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label': 'Amount',
  'intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label': 'Status',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdUpdateInvoice.success': 'Atualizar Fatura: OK',
  'action.cmdUpdateInvoice.error': 'Atualizar Fatura: falhou',
  'action.cmdDeleteInvoice.success': 'Excluir Fatura: OK',
  'action.cmdDeleteInvoice.error': 'Excluir Fatura: falhou',
  'section.invoiceCatalogue.invoiceWorkbench.title': 'Localizar e gerir faturas',
  'section.invoiceCatalogue.invoiceIssuance.title': 'Emitir nova fatura',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.invoiceCatalogue.status',
  'ui.invoiceCatalogue.action.qryListInvoice.status',
  'ui.invoiceCatalogue.data.qryListInvoice',
  'ui.invoiceCatalogue.action.cmdCreateInvoice.status',
  'ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId',
  'ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId',
  'ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference',
  'ui.invoiceCatalogue.input.cmdCreateInvoice.amount',
  'ui.invoiceCatalogue.output.cmdCreateInvoice',
  'ui.invoiceCatalogue.action.cmdCreateInvoice.error',
  'ui.invoiceCatalogue.action.cmdUpdateInvoice.status',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.amount',
  'ui.invoiceCatalogue.input.cmdUpdateInvoice.status',
  'ui.invoiceCatalogue.output.cmdUpdateInvoice',
  'ui.invoiceCatalogue.action.cmdUpdateInvoice.error',
  'ui.invoiceCatalogue.action.cmdDeleteInvoice.status',
  'ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId',
  'ui.invoiceCatalogue.output.cmdDeleteInvoice',
  'ui.invoiceCatalogue.action.cmdDeleteInvoice.error',
  'ui.invoiceCatalogue.action.qryClientPicker.status',
  'ui.invoiceCatalogue.data.qryClientPicker',
  'ui.invoiceCatalogue.action.qryProjectPicker.status',
  'ui.invoiceCatalogue.data.qryProjectPicker',
];

export class BuildFlowFsmInvoiceCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() qryListInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListInvoiceData — queryResult, outputShape: array */
  @property() qryListInvoiceData: QryListInvoiceOutput[] = [];
  /** state cmdCreateInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateInvoiceClientClientId — input */
  @property() cmdCreateInvoiceClientClientId: string = '';
  /** state cmdCreateInvoiceProjectProjectId — input */
  @property() cmdCreateInvoiceProjectProjectId: string = '';
  /** state cmdCreateInvoiceCommercialReference — input */
  @property() cmdCreateInvoiceCommercialReference: string = '';
  /** state cmdCreateInvoiceAmount — input */
  @property() cmdCreateInvoiceAmount: string = '';
  /** state cmdCreateInvoiceOutput — commandOutput */
  @property() cmdCreateInvoiceOutput: CmdCreateInvoiceOutput | null = null;
  /** state cmdCreateInvoiceError — actionError */
  @property() cmdCreateInvoiceError: string = '';
  /** state cmdUpdateInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateInvoiceInvoiceId — input */
  @property() cmdUpdateInvoiceInvoiceId: string = '';
  /** state cmdUpdateInvoiceClientId — input */
  @property() cmdUpdateInvoiceClientId: string = '';
  /** state cmdUpdateInvoiceProjectId — input */
  @property() cmdUpdateInvoiceProjectId: string = '';
  /** state cmdUpdateInvoiceCommercialReference — input */
  @property() cmdUpdateInvoiceCommercialReference: string = '';
  /** state cmdUpdateInvoiceAmount — input */
  @property() cmdUpdateInvoiceAmount: string = '';
  /** state cmdUpdateInvoiceStatus — input */
  @property() cmdUpdateInvoiceStatus: string = '';
  /** state cmdUpdateInvoiceOutput — commandOutput */
  @property() cmdUpdateInvoiceOutput: CmdUpdateInvoiceOutput | null = null;
  /** state cmdUpdateInvoiceError — actionError */
  @property() cmdUpdateInvoiceError: string = '';
  /** state cmdDeleteInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteInvoiceInvoiceId — input */
  @property() cmdDeleteInvoiceInvoiceId: string = '';
  /** state cmdDeleteInvoiceOutput — commandOutput */
  @property() cmdDeleteInvoiceOutput: CmdDeleteInvoiceOutput | null = null;
  /** state cmdDeleteInvoiceError — actionError */
  @property() cmdDeleteInvoiceError: string = '';
  /** state qryClientPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryClientPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientPickerData — queryResult, outputShape: array */
  @property() qryClientPickerData: QryClientPickerOutput[] = [];
  /** state qryProjectPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectPickerData — queryResult, outputShape: array */
  @property() qryProjectPickerData: QryProjectPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.invoiceCatalogue.status', '');
    this.initStateValue('ui.invoiceCatalogue.action.qryListInvoice.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.data.qryListInvoice', []);
    this.initStateValue('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdCreateInvoice.amount', '');
    this.initStateValue('ui.invoiceCatalogue.output.cmdCreateInvoice', null);
    this.initStateValue('ui.invoiceCatalogue.action.cmdCreateInvoice.error', '');
    this.initStateValue('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', '');
    this.initStateValue('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', '');
    this.initStateValue('ui.invoiceCatalogue.output.cmdUpdateInvoice', null);
    this.initStateValue('ui.invoiceCatalogue.action.cmdUpdateInvoice.error', '');
    this.initStateValue('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId', '');
    this.initStateValue('ui.invoiceCatalogue.output.cmdDeleteInvoice', null);
    this.initStateValue('ui.invoiceCatalogue.action.cmdDeleteInvoice.error', '');
    this.initStateValue('ui.invoiceCatalogue.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.data.qryClientPicker', []);
    this.initStateValue('ui.invoiceCatalogue.action.qryProjectPicker.status', 'idle');
    this.initStateValue('ui.invoiceCatalogue.data.qryProjectPicker', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListInvoice();
    void this.loadQryClientPicker();
    void this.loadQryProjectPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.invoiceCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.qryListInvoice.status':
        this.qryListInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryListInvoice':
        this.qryListInvoiceData = (value as QryListInvoiceOutput[]) ?? [];
        break;
      case 'ui.invoiceCatalogue.action.cmdCreateInvoice.status':
        this.cmdCreateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId':
        this.cmdCreateInvoiceClientClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId':
        this.cmdCreateInvoiceProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference':
        this.cmdCreateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.amount':
        this.cmdCreateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdCreateInvoice':
        this.cmdCreateInvoiceOutput = (value as CmdCreateInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdCreateInvoice.error':
        this.cmdCreateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.cmdUpdateInvoice.status':
        this.cmdUpdateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId':
        this.cmdUpdateInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId':
        this.cmdUpdateInvoiceClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId':
        this.cmdUpdateInvoiceProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference':
        this.cmdUpdateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.amount':
        this.cmdUpdateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.status':
        this.cmdUpdateInvoiceStatus = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdUpdateInvoice':
        this.cmdUpdateInvoiceOutput = (value as CmdUpdateInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdUpdateInvoice.error':
        this.cmdUpdateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.cmdDeleteInvoice.status':
        this.cmdDeleteInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId':
        this.cmdDeleteInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdDeleteInvoice':
        this.cmdDeleteInvoiceOutput = (value as CmdDeleteInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdDeleteInvoice.error':
        this.cmdDeleteInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
        break;
      case 'ui.invoiceCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryProjectPicker':
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
      case 'ui.invoiceCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.qryListInvoice.status':
        this.qryListInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryListInvoice':
        this.qryListInvoiceData = (value as QryListInvoiceOutput[]) ?? [];
        break;
      case 'ui.invoiceCatalogue.action.cmdCreateInvoice.status':
        this.cmdCreateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId':
        this.cmdCreateInvoiceClientClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId':
        this.cmdCreateInvoiceProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference':
        this.cmdCreateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdCreateInvoice.amount':
        this.cmdCreateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdCreateInvoice':
        this.cmdCreateInvoiceOutput = (value as CmdCreateInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdCreateInvoice.error':
        this.cmdCreateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.cmdUpdateInvoice.status':
        this.cmdUpdateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId':
        this.cmdUpdateInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId':
        this.cmdUpdateInvoiceClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId':
        this.cmdUpdateInvoiceProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference':
        this.cmdUpdateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.amount':
        this.cmdUpdateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.input.cmdUpdateInvoice.status':
        this.cmdUpdateInvoiceStatus = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdUpdateInvoice':
        this.cmdUpdateInvoiceOutput = (value as CmdUpdateInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdUpdateInvoice.error':
        this.cmdUpdateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.cmdDeleteInvoice.status':
        this.cmdDeleteInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId':
        this.cmdDeleteInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.output.cmdDeleteInvoice':
        this.cmdDeleteInvoiceOutput = (value as CmdDeleteInvoiceOutput | null) ?? null;
        break;
      case 'ui.invoiceCatalogue.action.cmdDeleteInvoice.error':
        this.cmdDeleteInvoiceError = (value as string) ?? '';
        break;
      case 'ui.invoiceCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
        break;
      case 'ui.invoiceCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceCatalogue.data.qryProjectPicker':
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
      /^\/buildFlowFsm\/invoiceCatalogue(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdCreateInvoiceProjectProjectId) {
        this.cmdCreateInvoiceProjectProjectId = projectProjectId;
        setState('ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId', projectProjectId);
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

  /** action qryListInvoice (query) — route buildFlowFsm.invoiceCatalogue.qryListInvoice; inputs: (none); writes ui.invoiceCatalogue.data.qryListInvoice; status ui.invoiceCatalogue.action.qryListInvoice.status */
  async loadQryListInvoice(): Promise<void> {
    this.syncRouteParams();
    this.qryListInvoiceState = 'loading';
    setState('ui.invoiceCatalogue.action.qryListInvoice.status', 'loading');
    const params: QryListInvoiceInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListInvoiceOutput[]>(qryListInvoiceRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListInvoiceData = data;
      setState('ui.invoiceCatalogue.data.qryListInvoice', data);
      this.qryListInvoiceState = 'success';
      setState('ui.invoiceCatalogue.action.qryListInvoice.status', 'success');
    } else {
      this.qryListInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.qryListInvoice.status', 'error');
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

  /** action cmdCreateInvoice (command) — route buildFlowFsm.invoiceCatalogue.cmdCreateInvoice; inputs: clientClientId, projectProjectId, commercialReference, amount; writes ui.invoiceCatalogue.output.cmdCreateInvoice; status ui.invoiceCatalogue.action.cmdCreateInvoice.status; feedback keys action.cmdCreateInvoice.success / action.cmdCreateInvoice.error */
  async cmdCreateInvoice(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateInvoiceProjectProjectId) {
      this.cmdCreateInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateInvoiceClientClientId) {
      this.cmdCreateInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceState = 'loading';
    setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'loading');
    this.cmdCreateInvoiceError = '';
    setState('ui.invoiceCatalogue.action.cmdCreateInvoice.error', '');
    const amountNum = Number(this.cmdCreateInvoiceAmount);
    const params: CmdCreateInvoiceInput = {
      clientClientId: this.cmdCreateInvoiceClientClientId,
      projectProjectId: this.cmdCreateInvoiceProjectProjectId,
      commercialReference: this.cmdCreateInvoiceCommercialReference,
      amount: Number.isNaN(amountNum) ? 0 : amountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateInvoiceOutput>(cmdCreateInvoiceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateInvoice.error');
      this.cmdCreateInvoiceError = errMsg;
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.error', errMsg);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateInvoiceOutput | null = response.data ?? null;
    this.cmdCreateInvoiceOutput = data;
    setState('ui.invoiceCatalogue.output.cmdCreateInvoice', data);
    try {
      await this.loadQryListInvoice();
      if (this.qryListInvoiceState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceClientClientId = '';
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId', '');
    this.cmdCreateInvoiceCommercialReference = '';
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference', '');
    this.cmdCreateInvoiceAmount = '';
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.amount', '');
    this.cmdCreateInvoiceState = 'success';
    setState('ui.invoiceCatalogue.action.cmdCreateInvoice.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateInvoice — bind UI events here */
  handleCmdCreateInvoiceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateInvoice();
    });
  }

  /** action cmdUpdateInvoice (command) — route buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice; inputs: invoiceId, clientId, projectId, commercialReference, amount, status; writes ui.invoiceCatalogue.output.cmdUpdateInvoice; status ui.invoiceCatalogue.action.cmdUpdateInvoice.status; feedback keys action.cmdUpdateInvoice.success / action.cmdUpdateInvoice.error */
  async cmdUpdateInvoice(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateInvoiceInvoiceId) {
      this.cmdUpdateInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateInvoiceClientId) {
      this.cmdUpdateInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateInvoiceProjectId) {
      this.cmdUpdateInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInvoiceState = 'loading';
    setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'loading');
    this.cmdUpdateInvoiceError = '';
    setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.error', '');
    const amountNum = Number(this.cmdUpdateInvoiceAmount);
    const params: CmdUpdateInvoiceInput = {
      invoiceId: this.cmdUpdateInvoiceInvoiceId,
      clientId: this.cmdUpdateInvoiceClientId,
      projectId: this.cmdUpdateInvoiceProjectId,
      commercialReference: this.cmdUpdateInvoiceCommercialReference,
      amount: Number.isNaN(amountNum) ? 0 : amountNum,
      status: this.cmdUpdateInvoiceStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateInvoiceOutput>(cmdUpdateInvoiceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateInvoice.error');
      this.cmdUpdateInvoiceError = errMsg;
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.error', errMsg);
      this.cmdUpdateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateInvoiceOutput | null = response.data ?? null;
    this.cmdUpdateInvoiceOutput = data;
    setState('ui.invoiceCatalogue.output.cmdUpdateInvoice', data);
    try {
      await this.loadQryListInvoice();
      if (this.qryListInvoiceState === 'error') {
        this.cmdUpdateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoice refresh failed', refreshError);
      this.cmdUpdateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdUpdateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoice refresh failed', refreshError);
      this.cmdUpdateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdUpdateInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoice refresh failed', refreshError);
      this.cmdUpdateInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInvoiceInvoiceId = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId', '');
    this.cmdUpdateInvoiceClientId = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId', '');
    this.cmdUpdateInvoiceProjectId = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId', '');
    this.cmdUpdateInvoiceCommercialReference = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', '');
    this.cmdUpdateInvoiceAmount = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', '');
    this.cmdUpdateInvoiceStatus = '';
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', '');
    this.cmdUpdateInvoiceState = 'success';
    setState('ui.invoiceCatalogue.action.cmdUpdateInvoice.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateInvoice — bind UI events here */
  handleCmdUpdateInvoiceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateInvoice();
    });
  }

  /** action cmdDeleteInvoice (command) — route buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice; inputs: invoiceId; writes ui.invoiceCatalogue.output.cmdDeleteInvoice; status ui.invoiceCatalogue.action.cmdDeleteInvoice.status; feedback keys action.cmdDeleteInvoice.success / action.cmdDeleteInvoice.error */
  async cmdDeleteInvoice(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdDeleteInvoiceInvoiceId) {
      this.cmdDeleteInvoiceState = 'idle';
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInvoiceState = 'loading';
    setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'loading');
    this.cmdDeleteInvoiceError = '';
    setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.error', '');
    const params: CmdDeleteInvoiceInput = {
      invoiceId: this.cmdDeleteInvoiceInvoiceId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteInvoiceOutput>(cmdDeleteInvoiceRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteInvoice.error');
      this.cmdDeleteInvoiceError = errMsg;
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.error', errMsg);
      this.cmdDeleteInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteInvoiceOutput | null = response.data ?? null;
    this.cmdDeleteInvoiceOutput = data;
    setState('ui.invoiceCatalogue.output.cmdDeleteInvoice', data);
    try {
      await this.loadQryListInvoice();
      if (this.qryListInvoiceState === 'error') {
        this.cmdDeleteInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoice refresh failed', refreshError);
      this.cmdDeleteInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdDeleteInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoice refresh failed', refreshError);
      this.cmdDeleteInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdDeleteInvoiceState = 'error';
        setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoice refresh failed', refreshError);
      this.cmdDeleteInvoiceState = 'error';
      setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInvoiceInvoiceId = '';
    setState('ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId', '');
    this.cmdDeleteInvoiceState = 'success';
    setState('ui.invoiceCatalogue.action.cmdDeleteInvoice.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteInvoice — bind UI events here */
  handleCmdDeleteInvoiceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteInvoice();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.invoiceCatalogue.qryClientPicker; inputs: (none); writes ui.invoiceCatalogue.data.qryClientPicker; status ui.invoiceCatalogue.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryClientPickerState = 'loading';
    setState('ui.invoiceCatalogue.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.invoiceCatalogue.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.invoiceCatalogue.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.invoiceCatalogue.action.qryClientPicker.status', 'error');
      if (response.error) {
        console.error('qryClientPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryClientPicker — bind UI events here */
  handleQryClientPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryClientPicker();
  }

  /** action qryProjectPicker (query) — route buildFlowFsm.invoiceCatalogue.qryProjectPicker; inputs: (none); writes ui.invoiceCatalogue.data.qryProjectPicker; status ui.invoiceCatalogue.action.qryProjectPicker.status */
  async loadQryProjectPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryProjectPickerState = 'loading';
    setState('ui.invoiceCatalogue.action.qryProjectPicker.status', 'loading');
    const params: QryProjectPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectPickerOutput[]>(qryProjectPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryProjectPickerData = data;
      setState('ui.invoiceCatalogue.data.qryProjectPicker', data);
      this.qryProjectPickerState = 'success';
      setState('ui.invoiceCatalogue.action.qryProjectPicker.status', 'success');
    } else {
      this.qryProjectPickerState = 'error';
      setState('ui.invoiceCatalogue.action.qryProjectPicker.status', 'error');
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

  /** setter for state ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId */
  setCmdCreateInvoiceClientClientId(value: string): void {
    this.cmdCreateInvoiceClientClientId = value;
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceClientClientId — bind UI events here */
  handleCmdCreateInvoiceClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceClientClientId(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId */
  setCmdCreateInvoiceProjectProjectId(value: string): void {
    this.cmdCreateInvoiceProjectProjectId = value;
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceProjectProjectId — bind UI events here */
  handleCmdCreateInvoiceProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceProjectProjectId(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference */
  setCmdCreateInvoiceCommercialReference(value: string): void {
    this.cmdCreateInvoiceCommercialReference = value;
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.commercialReference', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceCommercialReference — bind UI events here */
  handleCmdCreateInvoiceCommercialReferenceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceCommercialReference(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdCreateInvoice.amount */
  setCmdCreateInvoiceAmount(value: string): void {
    this.cmdCreateInvoiceAmount = value;
    setState('ui.invoiceCatalogue.input.cmdCreateInvoice.amount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceAmount — bind UI events here */
  handleCmdCreateInvoiceAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceAmount(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId */
  setCmdUpdateInvoiceInvoiceId(value: string): void {
    this.cmdUpdateInvoiceInvoiceId = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.invoiceId', value);
    const collection =
      (getState('ui.invoiceCatalogue.data.qryListInvoice') as QryListInvoiceOutput[] | null | undefined) ?? this.qryListInvoiceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceOutput) => String(row.invoiceId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceCommercialReference = item.commercialReference;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', item.commercialReference);
        this.cmdUpdateInvoiceAmount = String(item.amount);
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', String(item.amount));
        this.cmdUpdateInvoiceStatus = item.status;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceInvoiceId — bind UI events here */
  handleCmdUpdateInvoiceInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceInvoiceId(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId */
  setCmdUpdateInvoiceClientId(value: string): void {
    this.cmdUpdateInvoiceClientId = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.clientId', value);
    const collection =
      (getState('ui.invoiceCatalogue.data.qryListInvoice') as QryListInvoiceOutput[] | null | undefined) ?? this.qryListInvoiceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceOutput) => String(row.clientId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceCommercialReference = item.commercialReference;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', item.commercialReference);
        this.cmdUpdateInvoiceAmount = String(item.amount);
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', String(item.amount));
        this.cmdUpdateInvoiceStatus = item.status;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceClientId — bind UI events here */
  handleCmdUpdateInvoiceClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceClientId(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId */
  setCmdUpdateInvoiceProjectId(value: string): void {
    this.cmdUpdateInvoiceProjectId = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.projectId', value);
    const collection =
      (getState('ui.invoiceCatalogue.data.qryListInvoice') as QryListInvoiceOutput[] | null | undefined) ?? this.qryListInvoiceData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceOutput) => String(row.projectId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceCommercialReference = item.commercialReference;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', item.commercialReference);
        this.cmdUpdateInvoiceAmount = String(item.amount);
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', String(item.amount));
        this.cmdUpdateInvoiceStatus = item.status;
        setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceProjectId — bind UI events here */
  handleCmdUpdateInvoiceProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceProjectId(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference */
  setCmdUpdateInvoiceCommercialReference(value: string): void {
    this.cmdUpdateInvoiceCommercialReference = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.commercialReference', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceCommercialReference — bind UI events here */
  handleCmdUpdateInvoiceCommercialReferenceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceCommercialReference(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.amount */
  setCmdUpdateInvoiceAmount(value: string): void {
    this.cmdUpdateInvoiceAmount = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.amount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceAmount — bind UI events here */
  handleCmdUpdateInvoiceAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceAmount(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdUpdateInvoice.status */
  setCmdUpdateInvoiceStatus(value: string): void {
    this.cmdUpdateInvoiceStatus = value;
    setState('ui.invoiceCatalogue.input.cmdUpdateInvoice.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceStatus — bind UI events here */
  handleCmdUpdateInvoiceStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceStatus(value);
  }

  /** setter for state ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId */
  setCmdDeleteInvoiceInvoiceId(value: string): void {
    this.cmdDeleteInvoiceInvoiceId = value;
    setState('ui.invoiceCatalogue.input.cmdDeleteInvoice.invoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteInvoiceInvoiceId — bind UI events here */
  handleCmdDeleteInvoiceInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteInvoiceInvoiceId(value);
  }
}
