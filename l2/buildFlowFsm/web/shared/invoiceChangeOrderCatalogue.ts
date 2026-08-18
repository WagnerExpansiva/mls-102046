/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListInvoiceChangeOrderInput,
  QryListInvoiceChangeOrderOutput,
  CmdCreateInvoiceChangeOrderInput,
  CmdCreateInvoiceChangeOrderOutput,
  CmdUpdateInvoiceChangeOrderInput,
  CmdUpdateInvoiceChangeOrderOutput,
  CmdDeleteInvoiceChangeOrderInput,
  CmdDeleteInvoiceChangeOrderOutput,
  QryInvoicePickerInput,
  QryInvoicePickerOutput,
  QryChangeOrderPickerInput,
  QryChangeOrderPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.js';
import {
  qryListInvoiceChangeOrderRoute,
  cmdCreateInvoiceChangeOrderRoute,
  cmdUpdateInvoiceChangeOrderRoute,
  cmdDeleteInvoiceChangeOrderRoute,
  qryInvoicePickerRoute,
  qryChangeOrderPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.js';

export type {
  QryListInvoiceChangeOrderInput,
  QryListInvoiceChangeOrderOutput,
  CmdCreateInvoiceChangeOrderInput,
  CmdCreateInvoiceChangeOrderOutput,
  CmdUpdateInvoiceChangeOrderInput,
  CmdUpdateInvoiceChangeOrderOutput,
  CmdDeleteInvoiceChangeOrderInput,
  CmdDeleteInvoiceChangeOrderOutput,
  QryInvoicePickerInput,
  QryInvoicePickerOutput,
  QryChangeOrderPickerInput,
  QryChangeOrderPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/invoiceChangeOrderCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.invoiceChangeOrderCatalogue.recordList.title': 'Localizar aplicações',
  'organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label': 'Invoice Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder': 'Excluir Aplicação de ordem de mudança na fatura',
  'section.invoiceChangeOrderCatalogue.recordForm.title': 'Criar ou corrigir aplicação',
  'organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label': 'Amount',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'action.cmdCreateInvoiceChangeOrder.success': 'Criar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdCreateInvoiceChangeOrder.error': 'Criar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdUpdateInvoiceChangeOrder.success': 'Atualizar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdUpdateInvoiceChangeOrder.error': 'Atualizar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdDeleteInvoiceChangeOrder.success': 'Excluir Aplicação de ordem de mudança na fatura: OK',
  'action.cmdDeleteInvoiceChangeOrder.error': 'Excluir Aplicação de ordem de mudança na fatura: falhou',
  'section.invoiceChangeOrderCatalogue.recordWorkbench.title': 'Aplicações vinculadas',
  'section.invoiceChangeOrderCatalogue.newAssociation.title': 'Nova aplicação',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.invoiceChangeOrderCatalogue.recordList.title': 'Localizar aplicações',
  'organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label': 'Invoice Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder': 'Excluir Aplicação de ordem de mudança na fatura',
  'section.invoiceChangeOrderCatalogue.recordForm.title': 'Criar ou corrigir aplicação',
  'organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label': 'Amount',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'action.cmdCreateInvoiceChangeOrder.success': 'Criar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdCreateInvoiceChangeOrder.error': 'Criar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdUpdateInvoiceChangeOrder.success': 'Atualizar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdUpdateInvoiceChangeOrder.error': 'Atualizar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdDeleteInvoiceChangeOrder.success': 'Excluir Aplicação de ordem de mudança na fatura: OK',
  'action.cmdDeleteInvoiceChangeOrder.error': 'Excluir Aplicação de ordem de mudança na fatura: falhou',
  'section.invoiceChangeOrderCatalogue.recordWorkbench.title': 'Aplicações vinculadas',
  'section.invoiceChangeOrderCatalogue.newAssociation.title': 'Nova aplicação',
};
const message_en: MessageType = {
  'section.invoiceChangeOrderCatalogue.recordList.title': 'Localizar aplicações',
  'organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label': 'Invoice Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder': 'Excluir Aplicação de ordem de mudança na fatura',
  'section.invoiceChangeOrderCatalogue.recordForm.title': 'Criar ou corrigir aplicação',
  'organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label': 'Amount',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'action.cmdCreateInvoiceChangeOrder.success': 'Criar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdCreateInvoiceChangeOrder.error': 'Criar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdUpdateInvoiceChangeOrder.success': 'Atualizar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdUpdateInvoiceChangeOrder.error': 'Atualizar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdDeleteInvoiceChangeOrder.success': 'Excluir Aplicação de ordem de mudança na fatura: OK',
  'action.cmdDeleteInvoiceChangeOrder.error': 'Excluir Aplicação de ordem de mudança na fatura: falhou',
  'section.invoiceChangeOrderCatalogue.recordWorkbench.title': 'Aplicações vinculadas',
  'section.invoiceChangeOrderCatalogue.newAssociation.title': 'Nova aplicação',
};
const message_es: MessageType = {
  'section.invoiceChangeOrderCatalogue.recordList.title': 'Localizar aplicações',
  'organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title': 'Listar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label': 'Invoice Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title': 'Excluir Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder': 'Excluir Aplicação de ordem de mudança na fatura',
  'section.invoiceChangeOrderCatalogue.recordForm.title': 'Criar ou corrigir aplicação',
  'organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title': 'Listar Fatura',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label': 'Invoice Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label': 'Client Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label': 'Project Id',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label': 'Commercial Reference',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label': 'Amount',
  'intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder': 'Criar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder': 'Atualizar Aplicação de ordem de mudança na fatura',
  'intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label': 'Billed Amount',
  'action.cmdCreateInvoiceChangeOrder.success': 'Criar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdCreateInvoiceChangeOrder.error': 'Criar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdUpdateInvoiceChangeOrder.success': 'Atualizar Aplicação de ordem de mudança na fatura: OK',
  'action.cmdUpdateInvoiceChangeOrder.error': 'Atualizar Aplicação de ordem de mudança na fatura: falhou',
  'action.cmdDeleteInvoiceChangeOrder.success': 'Excluir Aplicação de ordem de mudança na fatura: OK',
  'action.cmdDeleteInvoiceChangeOrder.error': 'Excluir Aplicação de ordem de mudança na fatura: falhou',
  'section.invoiceChangeOrderCatalogue.recordWorkbench.title': 'Aplicações vinculadas',
  'section.invoiceChangeOrderCatalogue.newAssociation.title': 'Nova aplicação',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.invoiceChangeOrderCatalogue.status',
  'ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status',
  'ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder',
  'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status',
  'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId',
  'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId',
  'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount',
  'ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder',
  'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error',
  'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status',
  'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId',
  'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId',
  'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId',
  'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount',
  'ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder',
  'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error',
  'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status',
  'ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId',
  'ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder',
  'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error',
  'ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status',
  'ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker',
  'ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status',
  'ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker',
];

export class BuildFlowFsmInvoiceChangeOrderCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListInvoiceChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryListInvoiceChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListInvoiceChangeOrderData — queryResult, outputShape: array */
  @property() qryListInvoiceChangeOrderData: QryListInvoiceChangeOrderOutput[] = [];
  /** state cmdCreateInvoiceChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateInvoiceChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateInvoiceChangeOrderInvoiceId — input */
  @property() cmdCreateInvoiceChangeOrderInvoiceId: string = '';
  /** state cmdCreateInvoiceChangeOrderChangeOrderId — input */
  @property() cmdCreateInvoiceChangeOrderChangeOrderId: string = '';
  /** state cmdCreateInvoiceChangeOrderBilledAmount — input */
  @property() cmdCreateInvoiceChangeOrderBilledAmount: string = '';
  /** state cmdCreateInvoiceChangeOrderOutput — commandOutput */
  @property() cmdCreateInvoiceChangeOrderOutput: CmdCreateInvoiceChangeOrderOutput | null = null;
  /** state cmdCreateInvoiceChangeOrderError — actionError */
  @property() cmdCreateInvoiceChangeOrderError: string = '';
  /** state cmdUpdateInvoiceChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateInvoiceChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId — input */
  @property() cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId: string = '';
  /** state cmdUpdateInvoiceChangeOrderInvoiceId — input */
  @property() cmdUpdateInvoiceChangeOrderInvoiceId: string = '';
  /** state cmdUpdateInvoiceChangeOrderChangeOrderId — input */
  @property() cmdUpdateInvoiceChangeOrderChangeOrderId: string = '';
  /** state cmdUpdateInvoiceChangeOrderBilledAmount — input */
  @property() cmdUpdateInvoiceChangeOrderBilledAmount: string = '';
  /** state cmdUpdateInvoiceChangeOrderOutput — commandOutput */
  @property() cmdUpdateInvoiceChangeOrderOutput: CmdUpdateInvoiceChangeOrderOutput | null = null;
  /** state cmdUpdateInvoiceChangeOrderError — actionError */
  @property() cmdUpdateInvoiceChangeOrderError: string = '';
  /** state cmdDeleteInvoiceChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteInvoiceChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId — input */
  @property() cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId: string = '';
  /** state cmdDeleteInvoiceChangeOrderOutput — commandOutput */
  @property() cmdDeleteInvoiceChangeOrderOutput: CmdDeleteInvoiceChangeOrderOutput | null = null;
  /** state cmdDeleteInvoiceChangeOrderError — actionError */
  @property() cmdDeleteInvoiceChangeOrderError: string = '';
  /** state qryInvoicePickerState — actionStatus, values: idle|loading|success|error */
  @property() qryInvoicePickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInvoicePickerData — queryResult, outputShape: array */
  @property() qryInvoicePickerData: QryInvoicePickerOutput[] = [];
  /** state qryChangeOrderPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryChangeOrderPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryChangeOrderPickerData — queryResult, outputShape: array */
  @property() qryChangeOrderPickerData: QryChangeOrderPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.invoiceChangeOrderCatalogue.status', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder', []);
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder', null);
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder', null);
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder', null);
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error', '');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker', []);
    this.initStateValue('ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status', 'idle');
    this.initStateValue('ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListInvoiceChangeOrder();
    void this.loadQryInvoicePicker();
    void this.loadQryChangeOrderPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.invoiceChangeOrderCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status':
        this.qryListInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder':
        this.qryListInvoiceChangeOrderData = (value as QryListInvoiceChangeOrderOutput[]) ?? [];
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status':
        this.cmdCreateInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId':
        this.cmdCreateInvoiceChangeOrderInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId':
        this.cmdCreateInvoiceChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount':
        this.cmdCreateInvoiceChangeOrderBilledAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder':
        this.cmdCreateInvoiceChangeOrderOutput = (value as CmdCreateInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error':
        this.cmdCreateInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status':
        this.cmdUpdateInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId':
        this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId':
        this.cmdUpdateInvoiceChangeOrderInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId':
        this.cmdUpdateInvoiceChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount':
        this.cmdUpdateInvoiceChangeOrderBilledAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder':
        this.cmdUpdateInvoiceChangeOrderOutput = (value as CmdUpdateInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error':
        this.cmdUpdateInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status':
        this.cmdDeleteInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId':
        this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder':
        this.cmdDeleteInvoiceChangeOrderOutput = (value as CmdDeleteInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error':
        this.cmdDeleteInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status':
        this.qryInvoicePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker':
        this.qryInvoicePickerData = (value as QryInvoicePickerOutput[]) ?? [];
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status':
        this.qryChangeOrderPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker':
        this.qryChangeOrderPickerData = (value as QryChangeOrderPickerOutput[]) ?? [];
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
      case 'ui.invoiceChangeOrderCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status':
        this.qryListInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder':
        this.qryListInvoiceChangeOrderData = (value as QryListInvoiceChangeOrderOutput[]) ?? [];
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status':
        this.cmdCreateInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId':
        this.cmdCreateInvoiceChangeOrderInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId':
        this.cmdCreateInvoiceChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount':
        this.cmdCreateInvoiceChangeOrderBilledAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder':
        this.cmdCreateInvoiceChangeOrderOutput = (value as CmdCreateInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error':
        this.cmdCreateInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status':
        this.cmdUpdateInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId':
        this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId':
        this.cmdUpdateInvoiceChangeOrderInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId':
        this.cmdUpdateInvoiceChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount':
        this.cmdUpdateInvoiceChangeOrderBilledAmount = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder':
        this.cmdUpdateInvoiceChangeOrderOutput = (value as CmdUpdateInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error':
        this.cmdUpdateInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status':
        this.cmdDeleteInvoiceChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId':
        this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder':
        this.cmdDeleteInvoiceChangeOrderOutput = (value as CmdDeleteInvoiceChangeOrderOutput | null) ?? null;
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error':
        this.cmdDeleteInvoiceChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status':
        this.qryInvoicePickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker':
        this.qryInvoicePickerData = (value as QryInvoicePickerOutput[]) ?? [];
        break;
      case 'ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status':
        this.qryChangeOrderPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker':
        this.qryChangeOrderPickerData = (value as QryChangeOrderPickerOutput[]) ?? [];
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

  /** action qryListInvoiceChangeOrder (query) — route buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder; inputs: (none); writes ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder; status ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status */
  async loadQryListInvoiceChangeOrder(): Promise<void> {
    this.qryListInvoiceChangeOrderState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status', 'loading');
    const params: QryListInvoiceChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListInvoiceChangeOrderOutput[]>(qryListInvoiceChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListInvoiceChangeOrderData = data;
      setState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder', data);
      this.qryListInvoiceChangeOrderState = 'success';
      setState('ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status', 'success');
    } else {
      this.qryListInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.qryListInvoiceChangeOrder.status', 'error');
      if (response.error) {
        console.error('qryListInvoiceChangeOrder failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListInvoiceChangeOrder — bind UI events here */
  handleQryListInvoiceChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListInvoiceChangeOrder();
  }

  /** action cmdCreateInvoiceChangeOrder (command) — route buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder; inputs: invoiceId, changeOrderId, billedAmount; writes ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder; status ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status; feedback keys action.cmdCreateInvoiceChangeOrder.success / action.cmdCreateInvoiceChangeOrder.error */
  async cmdCreateInvoiceChangeOrder(): Promise<void> {
    if (!this.cmdCreateInvoiceChangeOrderInvoiceId) {
      this.cmdCreateInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateInvoiceChangeOrderChangeOrderId) {
      this.cmdCreateInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceChangeOrderState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'loading');
    this.cmdCreateInvoiceChangeOrderError = '';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error', '');
    const billedAmountNum = Number(this.cmdCreateInvoiceChangeOrderBilledAmount);
    const params: CmdCreateInvoiceChangeOrderInput = {
      invoiceId: this.cmdCreateInvoiceChangeOrderInvoiceId,
      changeOrderId: this.cmdCreateInvoiceChangeOrderChangeOrderId,
      billedAmount: Number.isNaN(billedAmountNum) ? 0 : billedAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateInvoiceChangeOrderOutput>(cmdCreateInvoiceChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateInvoiceChangeOrder.error');
      this.cmdCreateInvoiceChangeOrderError = errMsg;
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.error', errMsg);
      this.cmdCreateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateInvoiceChangeOrderOutput | null = response.data ?? null;
    this.cmdCreateInvoiceChangeOrderOutput = data;
    setState('ui.invoiceChangeOrderCatalogue.output.cmdCreateInvoiceChangeOrder', data);
    try {
      await this.loadQryListInvoiceChangeOrder();
      if (this.qryListInvoiceChangeOrderState === 'error') {
        this.cmdCreateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdCreateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInvoicePicker();
      if (this.qryInvoicePickerState === 'error') {
        this.cmdCreateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdCreateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdCreateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdCreateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceChangeOrderInvoiceId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId', '');
    this.cmdCreateInvoiceChangeOrderChangeOrderId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId', '');
    this.cmdCreateInvoiceChangeOrderBilledAmount = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount', '');
    this.cmdCreateInvoiceChangeOrderState = 'success';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdCreateInvoiceChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateInvoiceChangeOrder — bind UI events here */
  handleCmdCreateInvoiceChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateInvoiceChangeOrder();
    });
  }

  /** action cmdUpdateInvoiceChangeOrder (command) — route buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder; inputs: invoiceChangeOrderId, invoiceId, changeOrderId, billedAmount; writes ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder; status ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status; feedback keys action.cmdUpdateInvoiceChangeOrder.success / action.cmdUpdateInvoiceChangeOrder.error */
  async cmdUpdateInvoiceChangeOrder(): Promise<void> {
    if (!this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId) {
      this.cmdUpdateInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateInvoiceChangeOrderInvoiceId) {
      this.cmdUpdateInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateInvoiceChangeOrderChangeOrderId) {
      this.cmdUpdateInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInvoiceChangeOrderState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'loading');
    this.cmdUpdateInvoiceChangeOrderError = '';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error', '');
    const billedAmountNum = Number(this.cmdUpdateInvoiceChangeOrderBilledAmount);
    const params: CmdUpdateInvoiceChangeOrderInput = {
      invoiceChangeOrderId: this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId,
      invoiceId: this.cmdUpdateInvoiceChangeOrderInvoiceId,
      changeOrderId: this.cmdUpdateInvoiceChangeOrderChangeOrderId,
      billedAmount: Number.isNaN(billedAmountNum) ? 0 : billedAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateInvoiceChangeOrderOutput>(cmdUpdateInvoiceChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateInvoiceChangeOrder.error');
      this.cmdUpdateInvoiceChangeOrderError = errMsg;
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.error', errMsg);
      this.cmdUpdateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateInvoiceChangeOrderOutput | null = response.data ?? null;
    this.cmdUpdateInvoiceChangeOrderOutput = data;
    setState('ui.invoiceChangeOrderCatalogue.output.cmdUpdateInvoiceChangeOrder', data);
    try {
      await this.loadQryListInvoiceChangeOrder();
      if (this.qryListInvoiceChangeOrderState === 'error') {
        this.cmdUpdateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdUpdateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInvoicePicker();
      if (this.qryInvoicePickerState === 'error') {
        this.cmdUpdateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdUpdateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdUpdateInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateInvoiceChangeOrder refresh failed', refreshError);
      this.cmdUpdateInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId', '');
    this.cmdUpdateInvoiceChangeOrderInvoiceId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId', '');
    this.cmdUpdateInvoiceChangeOrderChangeOrderId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId', '');
    this.cmdUpdateInvoiceChangeOrderBilledAmount = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', '');
    this.cmdUpdateInvoiceChangeOrderState = 'success';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdUpdateInvoiceChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateInvoiceChangeOrder — bind UI events here */
  handleCmdUpdateInvoiceChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateInvoiceChangeOrder();
    });
  }

  /** action cmdDeleteInvoiceChangeOrder (command) — route buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder; inputs: invoiceChangeOrderId; writes ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder; status ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status; feedback keys action.cmdDeleteInvoiceChangeOrder.success / action.cmdDeleteInvoiceChangeOrder.error */
  async cmdDeleteInvoiceChangeOrder(): Promise<void> {
    if (!this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId) {
      this.cmdDeleteInvoiceChangeOrderState = 'idle';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInvoiceChangeOrderState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'loading');
    this.cmdDeleteInvoiceChangeOrderError = '';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error', '');
    const params: CmdDeleteInvoiceChangeOrderInput = {
      invoiceChangeOrderId: this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteInvoiceChangeOrderOutput>(cmdDeleteInvoiceChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteInvoiceChangeOrder.error');
      this.cmdDeleteInvoiceChangeOrderError = errMsg;
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.error', errMsg);
      this.cmdDeleteInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteInvoiceChangeOrderOutput | null = response.data ?? null;
    this.cmdDeleteInvoiceChangeOrderOutput = data;
    setState('ui.invoiceChangeOrderCatalogue.output.cmdDeleteInvoiceChangeOrder', data);
    try {
      await this.loadQryListInvoiceChangeOrder();
      if (this.qryListInvoiceChangeOrderState === 'error') {
        this.cmdDeleteInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoiceChangeOrder refresh failed', refreshError);
      this.cmdDeleteInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInvoicePicker();
      if (this.qryInvoicePickerState === 'error') {
        this.cmdDeleteInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoiceChangeOrder refresh failed', refreshError);
      this.cmdDeleteInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdDeleteInvoiceChangeOrderState = 'error';
        setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteInvoiceChangeOrder refresh failed', refreshError);
      this.cmdDeleteInvoiceChangeOrderState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = '';
    setState('ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId', '');
    this.cmdDeleteInvoiceChangeOrderState = 'success';
    setState('ui.invoiceChangeOrderCatalogue.action.cmdDeleteInvoiceChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteInvoiceChangeOrder — bind UI events here */
  handleCmdDeleteInvoiceChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteInvoiceChangeOrder();
    });
  }

  /** action qryInvoicePicker (query) — route buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker; inputs: (none); writes ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker; status ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status */
  async loadQryInvoicePicker(): Promise<void> {
    this.qryInvoicePickerState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status', 'loading');
    const params: QryInvoicePickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInvoicePickerOutput[]>(qryInvoicePickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryInvoicePickerData = data;
      setState('ui.invoiceChangeOrderCatalogue.data.qryInvoicePicker', data);
      this.qryInvoicePickerState = 'success';
      setState('ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status', 'success');
    } else {
      this.qryInvoicePickerState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.qryInvoicePicker.status', 'error');
      if (response.error) {
        console.error('qryInvoicePicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInvoicePicker — bind UI events here */
  handleQryInvoicePickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInvoicePicker();
  }

  /** action qryChangeOrderPicker (query) — route buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker; inputs: (none); writes ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker; status ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status */
  async loadQryChangeOrderPicker(): Promise<void> {
    this.qryChangeOrderPickerState = 'loading';
    setState('ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status', 'loading');
    const params: QryChangeOrderPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryChangeOrderPickerOutput[]>(qryChangeOrderPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryChangeOrderPickerData = data;
      setState('ui.invoiceChangeOrderCatalogue.data.qryChangeOrderPicker', data);
      this.qryChangeOrderPickerState = 'success';
      setState('ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status', 'success');
    } else {
      this.qryChangeOrderPickerState = 'error';
      setState('ui.invoiceChangeOrderCatalogue.action.qryChangeOrderPicker.status', 'error');
      if (response.error) {
        console.error('qryChangeOrderPicker failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryChangeOrderPicker — bind UI events here */
  handleQryChangeOrderPickerClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryChangeOrderPicker();
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId */
  setCmdCreateInvoiceChangeOrderInvoiceId(value: string): void {
    this.cmdCreateInvoiceChangeOrderInvoiceId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.invoiceId', value);
    const collection =
      (getState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder') as QryListInvoiceChangeOrderOutput[] | null | undefined) ?? this.qryListInvoiceChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceChangeOrderOutput) => String(row.invoiceId) === String(value),
      );
      if (item) {
        this.cmdCreateInvoiceChangeOrderBilledAmount = String(item.billedAmount);
        setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount', String(item.billedAmount));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceChangeOrderInvoiceId — bind UI events here */
  handleCmdCreateInvoiceChangeOrderInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceChangeOrderInvoiceId(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId */
  setCmdCreateInvoiceChangeOrderChangeOrderId(value: string): void {
    this.cmdCreateInvoiceChangeOrderChangeOrderId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.changeOrderId', value);
    const collection =
      (getState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder') as QryListInvoiceChangeOrderOutput[] | null | undefined) ?? this.qryListInvoiceChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceChangeOrderOutput) => String(row.changeOrderId) === String(value),
      );
      if (item) {
        this.cmdCreateInvoiceChangeOrderBilledAmount = String(item.billedAmount);
        setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount', String(item.billedAmount));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceChangeOrderChangeOrderId — bind UI events here */
  handleCmdCreateInvoiceChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount */
  setCmdCreateInvoiceChangeOrderBilledAmount(value: string): void {
    this.cmdCreateInvoiceChangeOrderBilledAmount = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdCreateInvoiceChangeOrder.billedAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceChangeOrderBilledAmount — bind UI events here */
  handleCmdCreateInvoiceChangeOrderBilledAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceChangeOrderBilledAmount(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId */
  setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId(value: string): void {
    this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceChangeOrderId', value);
    const collection =
      (getState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder') as QryListInvoiceChangeOrderOutput[] | null | undefined) ?? this.qryListInvoiceChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceChangeOrderOutput) => String(row.invoiceChangeOrderId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceChangeOrderBilledAmount = String(item.billedAmount);
        setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', String(item.billedAmount));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId — bind UI events here */
  handleCmdUpdateInvoiceChangeOrderInvoiceChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId */
  setCmdUpdateInvoiceChangeOrderInvoiceId(value: string): void {
    this.cmdUpdateInvoiceChangeOrderInvoiceId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.invoiceId', value);
    const collection =
      (getState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder') as QryListInvoiceChangeOrderOutput[] | null | undefined) ?? this.qryListInvoiceChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceChangeOrderOutput) => String(row.invoiceId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceChangeOrderBilledAmount = String(item.billedAmount);
        setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', String(item.billedAmount));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceChangeOrderInvoiceId — bind UI events here */
  handleCmdUpdateInvoiceChangeOrderInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceChangeOrderInvoiceId(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId */
  setCmdUpdateInvoiceChangeOrderChangeOrderId(value: string): void {
    this.cmdUpdateInvoiceChangeOrderChangeOrderId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.changeOrderId', value);
    const collection =
      (getState('ui.invoiceChangeOrderCatalogue.data.qryListInvoiceChangeOrder') as QryListInvoiceChangeOrderOutput[] | null | undefined) ?? this.qryListInvoiceChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListInvoiceChangeOrderOutput) => String(row.changeOrderId) === String(value),
      );
      if (item) {
        this.cmdUpdateInvoiceChangeOrderBilledAmount = String(item.billedAmount);
        setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', String(item.billedAmount));
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceChangeOrderChangeOrderId — bind UI events here */
  handleCmdUpdateInvoiceChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount */
  setCmdUpdateInvoiceChangeOrderBilledAmount(value: string): void {
    this.cmdUpdateInvoiceChangeOrderBilledAmount = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdUpdateInvoiceChangeOrder.billedAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateInvoiceChangeOrderBilledAmount — bind UI events here */
  handleCmdUpdateInvoiceChangeOrderBilledAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateInvoiceChangeOrderBilledAmount(value);
  }

  /** setter for state ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId */
  setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId(value: string): void {
    this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId = value;
    setState('ui.invoiceChangeOrderCatalogue.input.cmdDeleteInvoiceChangeOrder.invoiceChangeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId — bind UI events here */
  handleCmdDeleteInvoiceChangeOrderInvoiceChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId(value);
  }
}
