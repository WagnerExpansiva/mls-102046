/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryLocateClientInput,
  QryLocateClientOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectClientBillingSummaryInput,
  QryInspectClientBillingSummaryOutput,
  CmdCreateInvoiceInput,
  CmdCreateInvoiceOutput,
  CmdHandoffInvoiceToClientInput,
  CmdHandoffInvoiceToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.js';
import {
  qryLocateClientRoute,
  qryLocateProjectRoute,
  qryInspectClientBillingSummaryRoute,
  cmdCreateInvoiceRoute,
  cmdHandoffInvoiceToClientRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.js';

export type {
  QryLocateClientInput,
  QryLocateClientOutput,
  QryLocateProjectInput,
  QryLocateProjectOutput,
  QryInspectClientBillingSummaryInput,
  QryInspectClientBillingSummaryOutput,
  CmdCreateInvoiceInput,
  CmdCreateInvoiceOutput,
  CmdHandoffInvoiceToClientInput,
  CmdHandoffInvoiceToClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.js';

/// **collab_i18n_start**
const message_pt = {
  'section.issueProjectInvoice.locateClient.title': 'Localizar cliente',
  'organism.issueProjectInvoice.qryLocateClient.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.issueProjectInvoice.locateProject.title': 'Selecionar obra',
  'organism.issueProjectInvoice.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.name.label': 'Name',
  'intent.issueProjectInvoice.qryLocateProject.list.column.address.label': 'Address',
  'intent.issueProjectInvoice.qryLocateProject.list.column.status.label': 'Status',
  'intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.issueProjectInvoice.inspectClientBillingSummary.title': 'Resumo de faturamento',
  'organism.issueProjectInvoice.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.issueProjectInvoice.createInvoice.title': 'Emitir fatura',
  'organism.issueProjectInvoice.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'section.issueProjectInvoice.handoffInvoiceToClient.title': 'Disponibilizar ao cliente',
  'organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label': 'Amount',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdHandoffInvoiceToClient.success': 'Disponibilizar a fatura ao cliente: OK',
  'action.cmdHandoffInvoiceToClient.error': 'Disponibilizar a fatura ao cliente: falhou',
  'section.issueProjectInvoice.billing-context.title': 'Contexto de faturamento',
  'section.issueProjectInvoice.invoice-issuance.title': 'Emissão da fatura',
  'section.issueProjectInvoice.invoice-handoff.title': 'Disponibilização ao cliente',
  'section.issueProjectInvoice.invoicePreparation.title': 'Preparar emissão',
  'section.issueProjectInvoice.invoiceHandoff.title': 'Disponibilizar ao cliente',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.issueProjectInvoice.locateClient.title': 'Localizar cliente',
  'organism.issueProjectInvoice.qryLocateClient.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.issueProjectInvoice.locateProject.title': 'Selecionar obra',
  'organism.issueProjectInvoice.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.name.label': 'Name',
  'intent.issueProjectInvoice.qryLocateProject.list.column.address.label': 'Address',
  'intent.issueProjectInvoice.qryLocateProject.list.column.status.label': 'Status',
  'intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.issueProjectInvoice.inspectClientBillingSummary.title': 'Resumo de faturamento',
  'organism.issueProjectInvoice.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.issueProjectInvoice.createInvoice.title': 'Emitir fatura',
  'organism.issueProjectInvoice.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'section.issueProjectInvoice.handoffInvoiceToClient.title': 'Disponibilizar ao cliente',
  'organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label': 'Amount',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdHandoffInvoiceToClient.success': 'Disponibilizar a fatura ao cliente: OK',
  'action.cmdHandoffInvoiceToClient.error': 'Disponibilizar a fatura ao cliente: falhou',
  'section.issueProjectInvoice.billing-context.title': 'Contexto de faturamento',
  'section.issueProjectInvoice.invoice-issuance.title': 'Emissão da fatura',
  'section.issueProjectInvoice.invoice-handoff.title': 'Disponibilização ao cliente',
  'section.issueProjectInvoice.invoicePreparation.title': 'Preparar emissão',
  'section.issueProjectInvoice.invoiceHandoff.title': 'Disponibilizar ao cliente',
};
const message_en: MessageType = {
  'section.issueProjectInvoice.locateClient.title': 'Localizar cliente',
  'organism.issueProjectInvoice.qryLocateClient.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.issueProjectInvoice.locateProject.title': 'Selecionar obra',
  'organism.issueProjectInvoice.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.name.label': 'Name',
  'intent.issueProjectInvoice.qryLocateProject.list.column.address.label': 'Address',
  'intent.issueProjectInvoice.qryLocateProject.list.column.status.label': 'Status',
  'intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.issueProjectInvoice.inspectClientBillingSummary.title': 'Resumo de faturamento',
  'organism.issueProjectInvoice.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.issueProjectInvoice.createInvoice.title': 'Emitir fatura',
  'organism.issueProjectInvoice.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'section.issueProjectInvoice.handoffInvoiceToClient.title': 'Disponibilizar ao cliente',
  'organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label': 'Amount',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdHandoffInvoiceToClient.success': 'Disponibilizar a fatura ao cliente: OK',
  'action.cmdHandoffInvoiceToClient.error': 'Disponibilizar a fatura ao cliente: falhou',
  'section.issueProjectInvoice.billing-context.title': 'Contexto de faturamento',
  'section.issueProjectInvoice.invoice-issuance.title': 'Emissão da fatura',
  'section.issueProjectInvoice.invoice-handoff.title': 'Disponibilização ao cliente',
  'section.issueProjectInvoice.invoicePreparation.title': 'Preparar emissão',
  'section.issueProjectInvoice.invoiceHandoff.title': 'Disponibilizar ao cliente',
};
const message_es: MessageType = {
  'section.issueProjectInvoice.locateClient.title': 'Localizar cliente',
  'organism.issueProjectInvoice.qryLocateClient.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.title': 'Localizar o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label': 'Client Name',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label': 'Contact Email',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label': 'Contact Phone',
  'section.issueProjectInvoice.locateProject.title': 'Selecionar obra',
  'organism.issueProjectInvoice.qryLocateProject.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.title': 'Selecionar a obra que exige atenção',
  'intent.issueProjectInvoice.qryLocateProject.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryLocateProject.list.column.name.label': 'Name',
  'intent.issueProjectInvoice.qryLocateProject.list.column.address.label': 'Address',
  'intent.issueProjectInvoice.qryLocateProject.list.column.status.label': 'Status',
  'intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label': 'Planned End Date',
  'section.issueProjectInvoice.inspectClientBillingSummary.title': 'Resumo de faturamento',
  'organism.issueProjectInvoice.qryInspectClientBillingSummary.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title': 'Consultar o resumo de faturamento',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label': 'Client Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Approved Change Order References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Invoice References',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Approved Change Order Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Billable Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Invoiced Amount',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Client Available Amount',
  'section.issueProjectInvoice.createInvoice.title': 'Emitir fatura',
  'organism.issueProjectInvoice.cmdCreateInvoice.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.title': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label': 'Amount',
  'section.issueProjectInvoice.handoffInvoiceToClient.title': 'Disponibilizar ao cliente',
  'organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient': 'Disponibilizar a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label': 'Commercial Reference',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label': 'Amount',
  'action.cmdCreateInvoice.success': 'Emitir a fatura: OK',
  'action.cmdCreateInvoice.error': 'Emitir a fatura: falhou',
  'action.cmdHandoffInvoiceToClient.success': 'Disponibilizar a fatura ao cliente: OK',
  'action.cmdHandoffInvoiceToClient.error': 'Disponibilizar a fatura ao cliente: falhou',
  'section.issueProjectInvoice.billing-context.title': 'Contexto de faturamento',
  'section.issueProjectInvoice.invoice-issuance.title': 'Emissão da fatura',
  'section.issueProjectInvoice.invoice-handoff.title': 'Disponibilização ao cliente',
  'section.issueProjectInvoice.invoicePreparation.title': 'Preparar emissão',
  'section.issueProjectInvoice.invoiceHandoff.title': 'Disponibilizar ao cliente',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.issueProjectInvoice.status',
  'ui.issueProjectInvoice.action.qryLocateClient.status',
  'ui.issueProjectInvoice.data.qryLocateClient',
  'ui.issueProjectInvoice.action.qryLocateProject.status',
  'ui.issueProjectInvoice.data.qryLocateProject',
  'ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status',
  'ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId',
  'ui.issueProjectInvoice.data.qryInspectClientBillingSummary',
  'ui.issueProjectInvoice.action.cmdCreateInvoice.status',
  'ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId',
  'ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId',
  'ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference',
  'ui.issueProjectInvoice.input.cmdCreateInvoice.amount',
  'ui.issueProjectInvoice.output.cmdCreateInvoice',
  'ui.issueProjectInvoice.action.cmdCreateInvoice.error',
  'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status',
  'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId',
  'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference',
  'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount',
  'ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient',
  'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error',
];

export class BuildFlowFsmIssueProjectInvoiceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryLocateClientState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateClientData — queryResult, outputShape: array */
  @property() qryLocateClientData: QryLocateClientOutput[] = [];
  /** state qryLocateProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryLocateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryLocateProjectData — queryResult, outputShape: array */
  @property() qryLocateProjectData: QryLocateProjectOutput[] = [];
  /** state qryInspectClientBillingSummaryState — actionStatus, values: idle|loading|success|error */
  @property() qryInspectClientBillingSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryInspectClientBillingSummaryClientBillingSummaryClientId — input */
  @property() qryInspectClientBillingSummaryClientBillingSummaryClientId: string = '';
  /** state qryInspectClientBillingSummaryData — queryResult, outputShape: object */
  @property() qryInspectClientBillingSummaryData: QryInspectClientBillingSummaryOutput | null = null;
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
  /** state cmdHandoffInvoiceToClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdHandoffInvoiceToClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdHandoffInvoiceToClientInvoiceInvoiceId — input */
  @property() cmdHandoffInvoiceToClientInvoiceInvoiceId: string = '';
  /** state cmdHandoffInvoiceToClientCommercialReference — input */
  @property() cmdHandoffInvoiceToClientCommercialReference: string = '';
  /** state cmdHandoffInvoiceToClientAmount — input */
  @property() cmdHandoffInvoiceToClientAmount: string = '';
  /** state cmdHandoffInvoiceToClientOutput — commandOutput */
  @property() cmdHandoffInvoiceToClientOutput: CmdHandoffInvoiceToClientOutput | null = null;
  /** state cmdHandoffInvoiceToClientError — actionError */
  @property() cmdHandoffInvoiceToClientError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.issueProjectInvoice.status', '');
    this.initStateValue('ui.issueProjectInvoice.action.qryLocateClient.status', 'idle');
    this.initStateValue('ui.issueProjectInvoice.data.qryLocateClient', []);
    this.initStateValue('ui.issueProjectInvoice.action.qryLocateProject.status', 'idle');
    this.initStateValue('ui.issueProjectInvoice.data.qryLocateProject', []);
    this.initStateValue('ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status', 'idle');
    this.initStateValue('ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId', '');
    this.initStateValue('ui.issueProjectInvoice.data.qryInspectClientBillingSummary', null);
    this.initStateValue('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'idle');
    this.initStateValue('ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId', '');
    this.initStateValue('ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId', '');
    this.initStateValue('ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference', '');
    this.initStateValue('ui.issueProjectInvoice.input.cmdCreateInvoice.amount', '');
    this.initStateValue('ui.issueProjectInvoice.output.cmdCreateInvoice', null);
    this.initStateValue('ui.issueProjectInvoice.action.cmdCreateInvoice.error', '');
    this.initStateValue('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'idle');
    this.initStateValue('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId', '');
    this.initStateValue('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference', '');
    this.initStateValue('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount', '');
    this.initStateValue('ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient', null);
    this.initStateValue('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryLocateClient();
    void this.loadQryLocateProject();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.issueProjectInvoice.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.action.qryLocateClient.status':
        this.qryLocateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.data.qryLocateClient':
        this.qryLocateClientData = (value as QryLocateClientOutput[]) ?? [];
        break;
      case 'ui.issueProjectInvoice.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status':
        this.qryInspectClientBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId':
        this.qryInspectClientBillingSummaryClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.data.qryInspectClientBillingSummary':
        this.qryInspectClientBillingSummaryData = (value as QryInspectClientBillingSummaryOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdCreateInvoice.status':
        this.cmdCreateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId':
        this.cmdCreateInvoiceClientClientId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId':
        this.cmdCreateInvoiceProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference':
        this.cmdCreateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.amount':
        this.cmdCreateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.output.cmdCreateInvoice':
        this.cmdCreateInvoiceOutput = (value as CmdCreateInvoiceOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdCreateInvoice.error':
        this.cmdCreateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status':
        this.cmdHandoffInvoiceToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId':
        this.cmdHandoffInvoiceToClientInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference':
        this.cmdHandoffInvoiceToClientCommercialReference = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount':
        this.cmdHandoffInvoiceToClientAmount = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient':
        this.cmdHandoffInvoiceToClientOutput = (value as CmdHandoffInvoiceToClientOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error':
        this.cmdHandoffInvoiceToClientError = (value as string) ?? '';
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
      case 'ui.issueProjectInvoice.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.action.qryLocateClient.status':
        this.qryLocateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.data.qryLocateClient':
        this.qryLocateClientData = (value as QryLocateClientOutput[]) ?? [];
        break;
      case 'ui.issueProjectInvoice.action.qryLocateProject.status':
        this.qryLocateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.data.qryLocateProject':
        this.qryLocateProjectData = (value as QryLocateProjectOutput[]) ?? [];
        break;
      case 'ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status':
        this.qryInspectClientBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId':
        this.qryInspectClientBillingSummaryClientBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.data.qryInspectClientBillingSummary':
        this.qryInspectClientBillingSummaryData = (value as QryInspectClientBillingSummaryOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdCreateInvoice.status':
        this.cmdCreateInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId':
        this.cmdCreateInvoiceClientClientId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId':
        this.cmdCreateInvoiceProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference':
        this.cmdCreateInvoiceCommercialReference = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdCreateInvoice.amount':
        this.cmdCreateInvoiceAmount = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.output.cmdCreateInvoice':
        this.cmdCreateInvoiceOutput = (value as CmdCreateInvoiceOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdCreateInvoice.error':
        this.cmdCreateInvoiceError = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status':
        this.cmdHandoffInvoiceToClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId':
        this.cmdHandoffInvoiceToClientInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference':
        this.cmdHandoffInvoiceToClientCommercialReference = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount':
        this.cmdHandoffInvoiceToClientAmount = (value as string) ?? '';
        break;
      case 'ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient':
        this.cmdHandoffInvoiceToClientOutput = (value as CmdHandoffInvoiceToClientOutput | null) ?? null;
        break;
      case 'ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error':
        this.cmdHandoffInvoiceToClientError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/issueProjectInvoice(?:\/([^/]+))?\/?$/,
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
        setState('ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId', projectProjectId);
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

  /** action qryLocateClient (query) — route buildFlowFsm.issueProjectInvoice.qryLocateClient; inputs: (none); writes ui.issueProjectInvoice.data.qryLocateClient; status ui.issueProjectInvoice.action.qryLocateClient.status */
  async loadQryLocateClient(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateClientState = 'loading';
    setState('ui.issueProjectInvoice.action.qryLocateClient.status', 'loading');
    const params: QryLocateClientInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateClientOutput[]>(qryLocateClientRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateClientData = data;
      setState('ui.issueProjectInvoice.data.qryLocateClient', data);
      this.qryLocateClientState = 'success';
      setState('ui.issueProjectInvoice.action.qryLocateClient.status', 'success');
    } else {
      this.qryLocateClientState = 'error';
      setState('ui.issueProjectInvoice.action.qryLocateClient.status', 'error');
      if (response.error) {
        console.error('qryLocateClient failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryLocateClient — bind UI events here */
  handleQryLocateClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryLocateClient();
  }

  /** action qryLocateProject (query) — route buildFlowFsm.issueProjectInvoice.qryLocateProject; inputs: (none); writes ui.issueProjectInvoice.data.qryLocateProject; status ui.issueProjectInvoice.action.qryLocateProject.status */
  async loadQryLocateProject(): Promise<void> {
    this.syncRouteParams();
    this.qryLocateProjectState = 'loading';
    setState('ui.issueProjectInvoice.action.qryLocateProject.status', 'loading');
    const params: QryLocateProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryLocateProjectOutput[]>(qryLocateProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryLocateProjectData = data;
      setState('ui.issueProjectInvoice.data.qryLocateProject', data);
      this.qryLocateProjectState = 'success';
      setState('ui.issueProjectInvoice.action.qryLocateProject.status', 'success');
    } else {
      this.qryLocateProjectState = 'error';
      setState('ui.issueProjectInvoice.action.qryLocateProject.status', 'error');
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

  /** action qryInspectClientBillingSummary (query) — route buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary; inputs: clientBillingSummaryClientId; writes ui.issueProjectInvoice.data.qryInspectClientBillingSummary; status ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status */
  async loadQryInspectClientBillingSummary(): Promise<void> {
    this.syncRouteParams();
    if (!this.qryInspectClientBillingSummaryClientBillingSummaryClientId) {
      this.qryInspectClientBillingSummaryState = 'idle';
      setState('ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.qryInspectClientBillingSummaryState = 'loading';
    setState('ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status', 'loading');
    const params: QryInspectClientBillingSummaryInput = {
      clientBillingSummaryClientId: this.qryInspectClientBillingSummaryClientBillingSummaryClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryInspectClientBillingSummaryOutput>(qryInspectClientBillingSummaryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.qryInspectClientBillingSummaryData = data;
      setState('ui.issueProjectInvoice.data.qryInspectClientBillingSummary', data);
      this.qryInspectClientBillingSummaryState = 'success';
      setState('ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status', 'success');
    } else {
      this.qryInspectClientBillingSummaryState = 'error';
      setState('ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status', 'error');
      if (response.error) {
        console.error('qryInspectClientBillingSummary failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryInspectClientBillingSummary — bind UI events here */
  handleQryInspectClientBillingSummaryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryInspectClientBillingSummary();
  }

  /** action cmdCreateInvoice (command) — route buildFlowFsm.issueProjectInvoice.cmdCreateInvoice; inputs: clientClientId, projectProjectId, commercialReference, amount; writes ui.issueProjectInvoice.output.cmdCreateInvoice; status ui.issueProjectInvoice.action.cmdCreateInvoice.status; feedback keys action.cmdCreateInvoice.success / action.cmdCreateInvoice.error */
  async cmdCreateInvoice(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateInvoiceProjectProjectId) {
      this.cmdCreateInvoiceState = 'idle';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateInvoiceClientClientId) {
      this.cmdCreateInvoiceState = 'idle';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceState = 'loading';
    setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'loading');
    this.cmdCreateInvoiceError = '';
    setState('ui.issueProjectInvoice.action.cmdCreateInvoice.error', '');
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
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.error', errMsg);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateInvoiceOutput | null = response.data ?? null;
    this.cmdCreateInvoiceOutput = data;
    setState('ui.issueProjectInvoice.output.cmdCreateInvoice', data);
    try {
      await this.loadQryLocateClient();
      if (this.qryLocateClientState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectClientBillingSummary();
      if (this.qryInspectClientBillingSummaryState === 'error') {
        this.cmdCreateInvoiceState = 'error';
        setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateInvoice refresh failed', refreshError);
      this.cmdCreateInvoiceState = 'error';
      setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateInvoiceClientClientId = '';
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId', '');
    this.cmdCreateInvoiceCommercialReference = '';
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference', '');
    this.cmdCreateInvoiceAmount = '';
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.amount', '');
    this.cmdCreateInvoiceState = 'success';
    setState('ui.issueProjectInvoice.action.cmdCreateInvoice.status', 'success');
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

  /** action cmdHandoffInvoiceToClient (command) — route buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient; inputs: invoiceInvoiceId, commercialReference, amount; writes ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient; status ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status; feedback keys action.cmdHandoffInvoiceToClient.success / action.cmdHandoffInvoiceToClient.error */
  async cmdHandoffInvoiceToClient(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdHandoffInvoiceToClientInvoiceInvoiceId) {
      this.cmdHandoffInvoiceToClientState = 'idle';
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffInvoiceToClientState = 'loading';
    setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'loading');
    this.cmdHandoffInvoiceToClientError = '';
    setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error', '');
    const amountNum = Number(this.cmdHandoffInvoiceToClientAmount);
    const params: CmdHandoffInvoiceToClientInput = {
      invoiceInvoiceId: this.cmdHandoffInvoiceToClientInvoiceInvoiceId,
      commercialReference: this.cmdHandoffInvoiceToClientCommercialReference,
      amount: Number.isNaN(amountNum) ? 0 : amountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdHandoffInvoiceToClientOutput>(cmdHandoffInvoiceToClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdHandoffInvoiceToClient.error');
      this.cmdHandoffInvoiceToClientError = errMsg;
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error', errMsg);
      this.cmdHandoffInvoiceToClientState = 'error';
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdHandoffInvoiceToClientOutput | null = response.data ?? null;
    this.cmdHandoffInvoiceToClientOutput = data;
    setState('ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient', data);
    try {
      await this.loadQryLocateClient();
      if (this.qryLocateClientState === 'error') {
        this.cmdHandoffInvoiceToClientState = 'error';
        setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffInvoiceToClient refresh failed', refreshError);
      this.cmdHandoffInvoiceToClientState = 'error';
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryLocateProject();
      if (this.qryLocateProjectState === 'error') {
        this.cmdHandoffInvoiceToClientState = 'error';
        setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffInvoiceToClient refresh failed', refreshError);
      this.cmdHandoffInvoiceToClientState = 'error';
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryInspectClientBillingSummary();
      if (this.qryInspectClientBillingSummaryState === 'error') {
        this.cmdHandoffInvoiceToClientState = 'error';
        setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdHandoffInvoiceToClient refresh failed', refreshError);
      this.cmdHandoffInvoiceToClientState = 'error';
      setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdHandoffInvoiceToClientInvoiceInvoiceId = '';
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId', '');
    this.cmdHandoffInvoiceToClientCommercialReference = '';
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference', '');
    this.cmdHandoffInvoiceToClientAmount = '';
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount', '');
    this.cmdHandoffInvoiceToClientState = 'success';
    setState('ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdHandoffInvoiceToClient — bind UI events here */
  handleCmdHandoffInvoiceToClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdHandoffInvoiceToClient();
    });
  }

  /** setter for state ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId */
  setQryInspectClientBillingSummaryClientBillingSummaryClientId(value: string): void {
    this.qryInspectClientBillingSummaryClientBillingSummaryClientId = value;
    setState('ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.qryInspectClientBillingSummaryClientBillingSummaryClientId — bind UI events here */
  handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId */
  setCmdCreateInvoiceClientClientId(value: string): void {
    this.cmdCreateInvoiceClientClientId = value;
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceClientClientId — bind UI events here */
  handleCmdCreateInvoiceClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceClientClientId(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId */
  setCmdCreateInvoiceProjectProjectId(value: string): void {
    this.cmdCreateInvoiceProjectProjectId = value;
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceProjectProjectId — bind UI events here */
  handleCmdCreateInvoiceProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceProjectProjectId(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference */
  setCmdCreateInvoiceCommercialReference(value: string): void {
    this.cmdCreateInvoiceCommercialReference = value;
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceCommercialReference — bind UI events here */
  handleCmdCreateInvoiceCommercialReferenceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceCommercialReference(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdCreateInvoice.amount */
  setCmdCreateInvoiceAmount(value: string): void {
    this.cmdCreateInvoiceAmount = value;
    setState('ui.issueProjectInvoice.input.cmdCreateInvoice.amount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateInvoiceAmount — bind UI events here */
  handleCmdCreateInvoiceAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateInvoiceAmount(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId */
  setCmdHandoffInvoiceToClientInvoiceInvoiceId(value: string): void {
    this.cmdHandoffInvoiceToClientInvoiceInvoiceId = value;
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffInvoiceToClientInvoiceInvoiceId — bind UI events here */
  handleCmdHandoffInvoiceToClientInvoiceInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffInvoiceToClientInvoiceInvoiceId(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference */
  setCmdHandoffInvoiceToClientCommercialReference(value: string): void {
    this.cmdHandoffInvoiceToClientCommercialReference = value;
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffInvoiceToClientCommercialReference — bind UI events here */
  handleCmdHandoffInvoiceToClientCommercialReferenceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffInvoiceToClientCommercialReference(value);
  }

  /** setter for state ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount */
  setCmdHandoffInvoiceToClientAmount(value: string): void {
    this.cmdHandoffInvoiceToClientAmount = value;
    setState('ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdHandoffInvoiceToClientAmount — bind UI events here */
  handleCmdHandoffInvoiceToClientAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdHandoffInvoiceToClientAmount(value);
  }
}
