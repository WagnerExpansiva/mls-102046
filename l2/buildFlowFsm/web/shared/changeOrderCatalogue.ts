/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListChangeOrderInput,
  QryListChangeOrderOutput,
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderInput,
  CmdUpdateChangeOrderOutput,
  CmdDeleteChangeOrderInput,
  CmdDeleteChangeOrderOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.js';
import {
  qryListChangeOrderRoute,
  cmdCreateChangeOrderRoute,
  cmdUpdateChangeOrderRoute,
  cmdDeleteChangeOrderRoute,
  qryClientPickerRoute,
  qryProjectPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.js';

export type {
  QryListChangeOrderInput,
  QryListChangeOrderOutput,
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderInput,
  CmdUpdateChangeOrderOutput,
  CmdDeleteChangeOrderInput,
  CmdDeleteChangeOrderOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.changeOrderCatalogue.recordList.title': 'Localizar ordem de mudança',
  'organism.changeOrderCatalogue.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.changeOrderCatalogue.cmdDeleteChangeOrder.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder': 'Excluir Ordem de mudança',
  'section.changeOrderCatalogue.recordForm.title': 'Criar ou corrigir ordem de mudança',
  'organism.changeOrderCatalogue.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'organism.changeOrderCatalogue.cmdUpdateChangeOrder.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label': 'Status',
  'organism.changeOrderCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.changeOrderCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdUpdateChangeOrder.success': 'Atualizar Ordem de mudança: OK',
  'action.cmdUpdateChangeOrder.error': 'Atualizar Ordem de mudança: falhou',
  'action.cmdDeleteChangeOrder.success': 'Excluir Ordem de mudança: OK',
  'action.cmdDeleteChangeOrder.error': 'Excluir Ordem de mudança: falhou',
  'section.changeOrderCatalogue.changeOrderWorkspace.title': 'Ordens de mudança',
  'section.changeOrderCatalogue.changeOrderCreation.title': 'Nova ordem de mudança',
  'section.changeOrderCatalogue.changeOrderRegistration.title': 'Registrar alteração proposta',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.changeOrderCatalogue.recordList.title': 'Localizar ordem de mudança',
  'organism.changeOrderCatalogue.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.changeOrderCatalogue.cmdDeleteChangeOrder.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder': 'Excluir Ordem de mudança',
  'section.changeOrderCatalogue.recordForm.title': 'Criar ou corrigir ordem de mudança',
  'organism.changeOrderCatalogue.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'organism.changeOrderCatalogue.cmdUpdateChangeOrder.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label': 'Status',
  'organism.changeOrderCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.changeOrderCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdUpdateChangeOrder.success': 'Atualizar Ordem de mudança: OK',
  'action.cmdUpdateChangeOrder.error': 'Atualizar Ordem de mudança: falhou',
  'action.cmdDeleteChangeOrder.success': 'Excluir Ordem de mudança: OK',
  'action.cmdDeleteChangeOrder.error': 'Excluir Ordem de mudança: falhou',
  'section.changeOrderCatalogue.changeOrderWorkspace.title': 'Ordens de mudança',
  'section.changeOrderCatalogue.changeOrderCreation.title': 'Nova ordem de mudança',
  'section.changeOrderCatalogue.changeOrderRegistration.title': 'Registrar alteração proposta',
};
const message_en: MessageType = {
  'section.changeOrderCatalogue.recordList.title': 'Localizar ordem de mudança',
  'organism.changeOrderCatalogue.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.changeOrderCatalogue.cmdDeleteChangeOrder.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder': 'Excluir Ordem de mudança',
  'section.changeOrderCatalogue.recordForm.title': 'Criar ou corrigir ordem de mudança',
  'organism.changeOrderCatalogue.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'organism.changeOrderCatalogue.cmdUpdateChangeOrder.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label': 'Status',
  'organism.changeOrderCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.changeOrderCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdUpdateChangeOrder.success': 'Atualizar Ordem de mudança: OK',
  'action.cmdUpdateChangeOrder.error': 'Atualizar Ordem de mudança: falhou',
  'action.cmdDeleteChangeOrder.success': 'Excluir Ordem de mudança: OK',
  'action.cmdDeleteChangeOrder.error': 'Excluir Ordem de mudança: falhou',
  'section.changeOrderCatalogue.changeOrderWorkspace.title': 'Ordens de mudança',
  'section.changeOrderCatalogue.changeOrderCreation.title': 'Nova ordem de mudança',
  'section.changeOrderCatalogue.changeOrderRegistration.title': 'Registrar alteração proposta',
};
const message_es: MessageType = {
  'section.changeOrderCatalogue.recordList.title': 'Localizar ordem de mudança',
  'organism.changeOrderCatalogue.qryListChangeOrder.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label': 'Description',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label': 'Status',
  'organism.changeOrderCatalogue.cmdDeleteChangeOrder.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title': 'Excluir Ordem de mudança',
  'intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder': 'Excluir Ordem de mudança',
  'section.changeOrderCatalogue.recordForm.title': 'Criar ou corrigir ordem de mudança',
  'organism.changeOrderCatalogue.cmdCreateChangeOrder.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Registrar a alteração proposta',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'organism.changeOrderCatalogue.cmdUpdateChangeOrder.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Atualizar Ordem de mudança',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label': 'Change Amount',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label': 'Submitted At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label': 'Status',
  'organism.changeOrderCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.changeOrderCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.changeOrderCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.changeOrderCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.changeOrderCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.changeOrderCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'action.cmdCreateChangeOrder.success': 'Registrar a alteração proposta: OK',
  'action.cmdCreateChangeOrder.error': 'Registrar a alteração proposta: falhou',
  'action.cmdUpdateChangeOrder.success': 'Atualizar Ordem de mudança: OK',
  'action.cmdUpdateChangeOrder.error': 'Atualizar Ordem de mudança: falhou',
  'action.cmdDeleteChangeOrder.success': 'Excluir Ordem de mudança: OK',
  'action.cmdDeleteChangeOrder.error': 'Excluir Ordem de mudança: falhou',
  'section.changeOrderCatalogue.changeOrderWorkspace.title': 'Ordens de mudança',
  'section.changeOrderCatalogue.changeOrderCreation.title': 'Nova ordem de mudança',
  'section.changeOrderCatalogue.changeOrderRegistration.title': 'Registrar alteração proposta',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.changeOrderCatalogue.status',
  'ui.changeOrderCatalogue.action.qryListChangeOrder.status',
  'ui.changeOrderCatalogue.data.qryListChangeOrder',
  'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact',
  'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount',
  'ui.changeOrderCatalogue.output.cmdCreateChangeOrder',
  'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error',
  'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt',
  'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status',
  'ui.changeOrderCatalogue.output.cmdUpdateChangeOrder',
  'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error',
  'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status',
  'ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId',
  'ui.changeOrderCatalogue.output.cmdDeleteChangeOrder',
  'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error',
  'ui.changeOrderCatalogue.action.qryClientPicker.status',
  'ui.changeOrderCatalogue.data.qryClientPicker',
  'ui.changeOrderCatalogue.action.qryProjectPicker.status',
  'ui.changeOrderCatalogue.data.qryProjectPicker',
];

export class BuildFlowFsmChangeOrderCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() qryListChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListChangeOrderData — queryResult, outputShape: array */
  @property() qryListChangeOrderData: QryListChangeOrderOutput[] = [];
  /** state cmdCreateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateChangeOrderClientClientId — input */
  @property() cmdCreateChangeOrderClientClientId: string = '';
  /** state cmdCreateChangeOrderProjectProjectId — input */
  @property() cmdCreateChangeOrderProjectProjectId: string = '';
  /** state cmdCreateChangeOrderDescription — input */
  @property() cmdCreateChangeOrderDescription: string = '';
  /** state cmdCreateChangeOrderScopeImpact — input */
  @property() cmdCreateChangeOrderScopeImpact: string = '';
  /** state cmdCreateChangeOrderScheduleImpact — input */
  @property() cmdCreateChangeOrderScheduleImpact: string = '';
  /** state cmdCreateChangeOrderChangeAmount — input */
  @property() cmdCreateChangeOrderChangeAmount: string = '';
  /** state cmdCreateChangeOrderOutput — commandOutput */
  @property() cmdCreateChangeOrderOutput: CmdCreateChangeOrderOutput | null = null;
  /** state cmdCreateChangeOrderError — actionError */
  @property() cmdCreateChangeOrderError: string = '';
  /** state cmdUpdateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateChangeOrderChangeOrderId — input */
  @property() cmdUpdateChangeOrderChangeOrderId: string = '';
  /** state cmdUpdateChangeOrderClientRef — input */
  @property() cmdUpdateChangeOrderClientRef: string = '';
  /** state cmdUpdateChangeOrderProjectRef — input */
  @property() cmdUpdateChangeOrderProjectRef: string = '';
  /** state cmdUpdateChangeOrderDescription — input */
  @property() cmdUpdateChangeOrderDescription: string = '';
  /** state cmdUpdateChangeOrderScopeImpact — input */
  @property() cmdUpdateChangeOrderScopeImpact: string = '';
  /** state cmdUpdateChangeOrderScheduleImpact — input */
  @property() cmdUpdateChangeOrderScheduleImpact: string = '';
  /** state cmdUpdateChangeOrderChangeAmount — input */
  @property() cmdUpdateChangeOrderChangeAmount: string = '';
  /** state cmdUpdateChangeOrderSubmittedAt — input */
  @property() cmdUpdateChangeOrderSubmittedAt: string = '';
  /** state cmdUpdateChangeOrderForwardedForClientApprovalAt — input */
  @property() cmdUpdateChangeOrderForwardedForClientApprovalAt: string = '';
  /** state cmdUpdateChangeOrderStatus — input */
  @property() cmdUpdateChangeOrderStatus: string = '';
  /** state cmdUpdateChangeOrderOutput — commandOutput */
  @property() cmdUpdateChangeOrderOutput: CmdUpdateChangeOrderOutput | null = null;
  /** state cmdUpdateChangeOrderError — actionError */
  @property() cmdUpdateChangeOrderError: string = '';
  /** state cmdDeleteChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteChangeOrderChangeOrderId — input */
  @property() cmdDeleteChangeOrderChangeOrderId: string = '';
  /** state cmdDeleteChangeOrderOutput — commandOutput */
  @property() cmdDeleteChangeOrderOutput: CmdDeleteChangeOrderOutput | null = null;
  /** state cmdDeleteChangeOrderError — actionError */
  @property() cmdDeleteChangeOrderError: string = '';
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
    this.initStateValue('ui.changeOrderCatalogue.status', '');
    this.initStateValue('ui.changeOrderCatalogue.action.qryListChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.data.qryListChangeOrder', []);
    this.initStateValue('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount', '');
    this.initStateValue('ui.changeOrderCatalogue.output.cmdCreateChangeOrder', null);
    this.initStateValue('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error', '');
    this.initStateValue('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', '');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', '');
    this.initStateValue('ui.changeOrderCatalogue.output.cmdUpdateChangeOrder', null);
    this.initStateValue('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error', '');
    this.initStateValue('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId', '');
    this.initStateValue('ui.changeOrderCatalogue.output.cmdDeleteChangeOrder', null);
    this.initStateValue('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error', '');
    this.initStateValue('ui.changeOrderCatalogue.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.data.qryClientPicker', []);
    this.initStateValue('ui.changeOrderCatalogue.action.qryProjectPicker.status', 'idle');
    this.initStateValue('ui.changeOrderCatalogue.data.qryProjectPicker', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListChangeOrder();
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
      case 'ui.changeOrderCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.qryListChangeOrder.status':
        this.qryListChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryListChangeOrder':
        this.qryListChangeOrderData = (value as QryListChangeOrderOutput[]) ?? [];
        break;
      case 'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId':
        this.cmdCreateChangeOrderClientClientId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId':
        this.cmdCreateChangeOrderProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact':
        this.cmdCreateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact':
        this.cmdCreateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount':
        this.cmdCreateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId':
        this.cmdUpdateChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef':
        this.cmdUpdateChangeOrderClientRef = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef':
        this.cmdUpdateChangeOrderProjectRef = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description':
        this.cmdUpdateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact':
        this.cmdUpdateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact':
        this.cmdUpdateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount':
        this.cmdUpdateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt':
        this.cmdUpdateChangeOrderSubmittedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt':
        this.cmdUpdateChangeOrderForwardedForClientApprovalAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderStatus = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdUpdateChangeOrder':
        this.cmdUpdateChangeOrderOutput = (value as CmdUpdateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error':
        this.cmdUpdateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status':
        this.cmdDeleteChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId':
        this.cmdDeleteChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdDeleteChangeOrder':
        this.cmdDeleteChangeOrderOutput = (value as CmdDeleteChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error':
        this.cmdDeleteChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
        break;
      case 'ui.changeOrderCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryProjectPicker':
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
      case 'ui.changeOrderCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.qryListChangeOrder.status':
        this.qryListChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryListChangeOrder':
        this.qryListChangeOrderData = (value as QryListChangeOrderOutput[]) ?? [];
        break;
      case 'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId':
        this.cmdCreateChangeOrderClientClientId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId':
        this.cmdCreateChangeOrderProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact':
        this.cmdCreateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact':
        this.cmdCreateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount':
        this.cmdCreateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId':
        this.cmdUpdateChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef':
        this.cmdUpdateChangeOrderClientRef = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef':
        this.cmdUpdateChangeOrderProjectRef = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description':
        this.cmdUpdateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact':
        this.cmdUpdateChangeOrderScopeImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact':
        this.cmdUpdateChangeOrderScheduleImpact = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount':
        this.cmdUpdateChangeOrderChangeAmount = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt':
        this.cmdUpdateChangeOrderSubmittedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt':
        this.cmdUpdateChangeOrderForwardedForClientApprovalAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderStatus = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdUpdateChangeOrder':
        this.cmdUpdateChangeOrderOutput = (value as CmdUpdateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error':
        this.cmdUpdateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status':
        this.cmdDeleteChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId':
        this.cmdDeleteChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.output.cmdDeleteChangeOrder':
        this.cmdDeleteChangeOrderOutput = (value as CmdDeleteChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error':
        this.cmdDeleteChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
        break;
      case 'ui.changeOrderCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderCatalogue.data.qryProjectPicker':
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
      /^\/buildFlowFsm\/changeOrderCatalogue(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdCreateChangeOrderProjectProjectId) {
        this.cmdCreateChangeOrderProjectProjectId = projectProjectId;
        setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId', projectProjectId);
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

  /** action qryListChangeOrder (query) — route buildFlowFsm.changeOrderCatalogue.qryListChangeOrder; inputs: (none); writes ui.changeOrderCatalogue.data.qryListChangeOrder; status ui.changeOrderCatalogue.action.qryListChangeOrder.status */
  async loadQryListChangeOrder(): Promise<void> {
    this.syncRouteParams();
    this.qryListChangeOrderState = 'loading';
    setState('ui.changeOrderCatalogue.action.qryListChangeOrder.status', 'loading');
    const params: QryListChangeOrderInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListChangeOrderOutput[]>(qryListChangeOrderRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListChangeOrderData = data;
      setState('ui.changeOrderCatalogue.data.qryListChangeOrder', data);
      this.qryListChangeOrderState = 'success';
      setState('ui.changeOrderCatalogue.action.qryListChangeOrder.status', 'success');
    } else {
      this.qryListChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.qryListChangeOrder.status', 'error');
      if (response.error) {
        console.error('qryListChangeOrder failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListChangeOrder — bind UI events here */
  handleQryListChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListChangeOrder();
  }

  /** action cmdCreateChangeOrder (command) — route buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder; inputs: clientClientId, projectProjectId, description, scopeImpact, scheduleImpact, changeAmount; writes ui.changeOrderCatalogue.output.cmdCreateChangeOrder; status ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status; feedback keys action.cmdCreateChangeOrder.success / action.cmdCreateChangeOrder.error */
  async cmdCreateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateChangeOrderProjectProjectId) {
      this.cmdCreateChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdCreateChangeOrderClientClientId) {
      this.cmdCreateChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderState = 'loading';
    setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'loading');
    this.cmdCreateChangeOrderError = '';
    setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error', '');
    const changeAmountNum = Number(this.cmdCreateChangeOrderChangeAmount);
    const params: CmdCreateChangeOrderInput = {
      clientClientId: this.cmdCreateChangeOrderClientClientId,
      projectProjectId: this.cmdCreateChangeOrderProjectProjectId,
      description: this.cmdCreateChangeOrderDescription,
      scopeImpact: this.cmdCreateChangeOrderScopeImpact,
      scheduleImpact: this.cmdCreateChangeOrderScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateChangeOrderOutput>(cmdCreateChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateChangeOrder.error');
      this.cmdCreateChangeOrderError = errMsg;
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.error', errMsg);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateChangeOrderOutput | null = response.data ?? null;
    this.cmdCreateChangeOrderOutput = data;
    setState('ui.changeOrderCatalogue.output.cmdCreateChangeOrder', data);
    try {
      await this.loadQryListChangeOrder();
      if (this.qryListChangeOrderState === 'error') {
        this.cmdCreateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrder refresh failed', refreshError);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdCreateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrder refresh failed', refreshError);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdCreateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrder refresh failed', refreshError);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderClientClientId = '';
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId', '');
    this.cmdCreateChangeOrderDescription = '';
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description', '');
    this.cmdCreateChangeOrderScopeImpact = '';
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact', '');
    this.cmdCreateChangeOrderScheduleImpact = '';
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact', '');
    this.cmdCreateChangeOrderChangeAmount = '';
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount', '');
    this.cmdCreateChangeOrderState = 'success';
    setState('ui.changeOrderCatalogue.action.cmdCreateChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateChangeOrder — bind UI events here */
  handleCmdCreateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateChangeOrder();
    });
  }

  /** action cmdUpdateChangeOrder (command) — route buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder; inputs: changeOrderId, clientRef, projectRef, description, scopeImpact, scheduleImpact, changeAmount, submittedAt, forwardedForClientApprovalAt, status; writes ui.changeOrderCatalogue.output.cmdUpdateChangeOrder; status ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status; feedback keys action.cmdUpdateChangeOrder.success / action.cmdUpdateChangeOrder.error */
  async cmdUpdateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateChangeOrderChangeOrderId) {
      this.cmdUpdateChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateChangeOrderClientRef) {
      this.cmdUpdateChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateChangeOrderProjectRef) {
      this.cmdUpdateChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderState = 'loading';
    setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'loading');
    this.cmdUpdateChangeOrderError = '';
    setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error', '');
    const changeAmountNum = Number(this.cmdUpdateChangeOrderChangeAmount);
    const params: CmdUpdateChangeOrderInput = {
      changeOrderId: this.cmdUpdateChangeOrderChangeOrderId,
      clientRef: this.cmdUpdateChangeOrderClientRef,
      projectRef: this.cmdUpdateChangeOrderProjectRef,
      description: this.cmdUpdateChangeOrderDescription,
      scopeImpact: this.cmdUpdateChangeOrderScopeImpact,
      scheduleImpact: this.cmdUpdateChangeOrderScheduleImpact,
      changeAmount: Number.isNaN(changeAmountNum) ? 0 : changeAmountNum,
      submittedAt: this.cmdUpdateChangeOrderSubmittedAt,
      status: this.cmdUpdateChangeOrderStatus,
    };
    if (this.cmdUpdateChangeOrderForwardedForClientApprovalAt) {
      params.forwardedForClientApprovalAt = this.cmdUpdateChangeOrderForwardedForClientApprovalAt;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderOutput>(cmdUpdateChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateChangeOrder.error');
      this.cmdUpdateChangeOrderError = errMsg;
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.error', errMsg);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateChangeOrderOutput | null = response.data ?? null;
    this.cmdUpdateChangeOrderOutput = data;
    setState('ui.changeOrderCatalogue.output.cmdUpdateChangeOrder', data);
    try {
      await this.loadQryListChangeOrder();
      if (this.qryListChangeOrderState === 'error') {
        this.cmdUpdateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateChangeOrder refresh failed', refreshError);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdUpdateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateChangeOrder refresh failed', refreshError);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdUpdateChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateChangeOrder refresh failed', refreshError);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderChangeOrderId = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId', '');
    this.cmdUpdateChangeOrderClientRef = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef', '');
    this.cmdUpdateChangeOrderProjectRef = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef', '');
    this.cmdUpdateChangeOrderDescription = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', '');
    this.cmdUpdateChangeOrderScopeImpact = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', '');
    this.cmdUpdateChangeOrderScheduleImpact = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', '');
    this.cmdUpdateChangeOrderChangeAmount = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', '');
    this.cmdUpdateChangeOrderSubmittedAt = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', '');
    this.cmdUpdateChangeOrderForwardedForClientApprovalAt = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', '');
    this.cmdUpdateChangeOrderStatus = '';
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', '');
    this.cmdUpdateChangeOrderState = 'success';
    setState('ui.changeOrderCatalogue.action.cmdUpdateChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateChangeOrder — bind UI events here */
  handleCmdUpdateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateChangeOrder();
    });
  }

  /** action cmdDeleteChangeOrder (command) — route buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder; inputs: changeOrderId; writes ui.changeOrderCatalogue.output.cmdDeleteChangeOrder; status ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status; feedback keys action.cmdDeleteChangeOrder.success / action.cmdDeleteChangeOrder.error */
  async cmdDeleteChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdDeleteChangeOrderChangeOrderId) {
      this.cmdDeleteChangeOrderState = 'idle';
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteChangeOrderState = 'loading';
    setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'loading');
    this.cmdDeleteChangeOrderError = '';
    setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error', '');
    const params: CmdDeleteChangeOrderInput = {
      changeOrderId: this.cmdDeleteChangeOrderChangeOrderId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteChangeOrderOutput>(cmdDeleteChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteChangeOrder.error');
      this.cmdDeleteChangeOrderError = errMsg;
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.error', errMsg);
      this.cmdDeleteChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteChangeOrderOutput | null = response.data ?? null;
    this.cmdDeleteChangeOrderOutput = data;
    setState('ui.changeOrderCatalogue.output.cmdDeleteChangeOrder', data);
    try {
      await this.loadQryListChangeOrder();
      if (this.qryListChangeOrderState === 'error') {
        this.cmdDeleteChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteChangeOrder refresh failed', refreshError);
      this.cmdDeleteChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdDeleteChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteChangeOrder refresh failed', refreshError);
      this.cmdDeleteChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdDeleteChangeOrderState = 'error';
        setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteChangeOrder refresh failed', refreshError);
      this.cmdDeleteChangeOrderState = 'error';
      setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteChangeOrderChangeOrderId = '';
    setState('ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId', '');
    this.cmdDeleteChangeOrderState = 'success';
    setState('ui.changeOrderCatalogue.action.cmdDeleteChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteChangeOrder — bind UI events here */
  handleCmdDeleteChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteChangeOrder();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.changeOrderCatalogue.qryClientPicker; inputs: (none); writes ui.changeOrderCatalogue.data.qryClientPicker; status ui.changeOrderCatalogue.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryClientPickerState = 'loading';
    setState('ui.changeOrderCatalogue.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.changeOrderCatalogue.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.changeOrderCatalogue.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.changeOrderCatalogue.action.qryClientPicker.status', 'error');
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

  /** action qryProjectPicker (query) — route buildFlowFsm.changeOrderCatalogue.qryProjectPicker; inputs: (none); writes ui.changeOrderCatalogue.data.qryProjectPicker; status ui.changeOrderCatalogue.action.qryProjectPicker.status */
  async loadQryProjectPicker(): Promise<void> {
    this.syncRouteParams();
    this.qryProjectPickerState = 'loading';
    setState('ui.changeOrderCatalogue.action.qryProjectPicker.status', 'loading');
    const params: QryProjectPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectPickerOutput[]>(qryProjectPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryProjectPickerData = data;
      setState('ui.changeOrderCatalogue.data.qryProjectPicker', data);
      this.qryProjectPickerState = 'success';
      setState('ui.changeOrderCatalogue.action.qryProjectPicker.status', 'success');
    } else {
      this.qryProjectPickerState = 'error';
      setState('ui.changeOrderCatalogue.action.qryProjectPicker.status', 'error');
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

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId */
  setCmdCreateChangeOrderClientClientId(value: string): void {
    this.cmdCreateChangeOrderClientClientId = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.clientClientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderClientClientId — bind UI events here */
  handleCmdCreateChangeOrderClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderClientClientId(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId */
  setCmdCreateChangeOrderProjectProjectId(value: string): void {
    this.cmdCreateChangeOrderProjectProjectId = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.projectProjectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderProjectProjectId — bind UI events here */
  handleCmdCreateChangeOrderProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderProjectProjectId(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description */
  setCmdCreateChangeOrderDescription(value: string): void {
    this.cmdCreateChangeOrderDescription = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDescription — bind UI events here */
  handleCmdCreateChangeOrderDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact */
  setCmdCreateChangeOrderScopeImpact(value: string): void {
    this.cmdCreateChangeOrderScopeImpact = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScopeImpact — bind UI events here */
  handleCmdCreateChangeOrderScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderScopeImpact(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact */
  setCmdCreateChangeOrderScheduleImpact(value: string): void {
    this.cmdCreateChangeOrderScheduleImpact = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScheduleImpact — bind UI events here */
  handleCmdCreateChangeOrderScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderScheduleImpact(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount */
  setCmdCreateChangeOrderChangeAmount(value: string): void {
    this.cmdCreateChangeOrderChangeAmount = value;
    setState('ui.changeOrderCatalogue.input.cmdCreateChangeOrder.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderChangeAmount — bind UI events here */
  handleCmdCreateChangeOrderChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderChangeAmount(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId */
  setCmdUpdateChangeOrderChangeOrderId(value: string): void {
    this.cmdUpdateChangeOrderChangeOrderId = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeOrderId', value);
    const collection =
      (getState('ui.changeOrderCatalogue.data.qryListChangeOrder') as QryListChangeOrderOutput[] | null | undefined) ?? this.qryListChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderOutput) => String(row.changeOrderId) === String(value),
      );
      if (item) {
        this.cmdUpdateChangeOrderDescription = item.description;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', item.description);
        this.cmdUpdateChangeOrderScopeImpact = item.scopeImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', item.scopeImpact);
        this.cmdUpdateChangeOrderScheduleImpact = item.scheduleImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', item.scheduleImpact);
        this.cmdUpdateChangeOrderChangeAmount = String(item.changeAmount);
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', String(item.changeAmount));
        this.cmdUpdateChangeOrderSubmittedAt = item.submittedAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', item.submittedAt);
        this.cmdUpdateChangeOrderForwardedForClientApprovalAt = item.forwardedForClientApprovalAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', item.forwardedForClientApprovalAt);
        this.cmdUpdateChangeOrderStatus = item.status;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderChangeOrderId — bind UI events here */
  handleCmdUpdateChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef */
  setCmdUpdateChangeOrderClientRef(value: string): void {
    this.cmdUpdateChangeOrderClientRef = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.clientRef', value);
    const collection =
      (getState('ui.changeOrderCatalogue.data.qryListChangeOrder') as QryListChangeOrderOutput[] | null | undefined) ?? this.qryListChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderOutput) => String(row.clientRef) === String(value),
      );
      if (item) {
        this.cmdUpdateChangeOrderDescription = item.description;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', item.description);
        this.cmdUpdateChangeOrderScopeImpact = item.scopeImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', item.scopeImpact);
        this.cmdUpdateChangeOrderScheduleImpact = item.scheduleImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', item.scheduleImpact);
        this.cmdUpdateChangeOrderChangeAmount = String(item.changeAmount);
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', String(item.changeAmount));
        this.cmdUpdateChangeOrderSubmittedAt = item.submittedAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', item.submittedAt);
        this.cmdUpdateChangeOrderForwardedForClientApprovalAt = item.forwardedForClientApprovalAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', item.forwardedForClientApprovalAt);
        this.cmdUpdateChangeOrderStatus = item.status;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderClientRef — bind UI events here */
  handleCmdUpdateChangeOrderClientRefChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderClientRef(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef */
  setCmdUpdateChangeOrderProjectRef(value: string): void {
    this.cmdUpdateChangeOrderProjectRef = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.projectRef', value);
    const collection =
      (getState('ui.changeOrderCatalogue.data.qryListChangeOrder') as QryListChangeOrderOutput[] | null | undefined) ?? this.qryListChangeOrderData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderOutput) => String(row.projectRef) === String(value),
      );
      if (item) {
        this.cmdUpdateChangeOrderDescription = item.description;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', item.description);
        this.cmdUpdateChangeOrderScopeImpact = item.scopeImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', item.scopeImpact);
        this.cmdUpdateChangeOrderScheduleImpact = item.scheduleImpact;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', item.scheduleImpact);
        this.cmdUpdateChangeOrderChangeAmount = String(item.changeAmount);
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', String(item.changeAmount));
        this.cmdUpdateChangeOrderSubmittedAt = item.submittedAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', item.submittedAt);
        this.cmdUpdateChangeOrderForwardedForClientApprovalAt = item.forwardedForClientApprovalAt;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', item.forwardedForClientApprovalAt);
        this.cmdUpdateChangeOrderStatus = item.status;
        setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderProjectRef — bind UI events here */
  handleCmdUpdateChangeOrderProjectRefChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderProjectRef(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description */
  setCmdUpdateChangeOrderDescription(value: string): void {
    this.cmdUpdateChangeOrderDescription = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDescription — bind UI events here */
  handleCmdUpdateChangeOrderDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact */
  setCmdUpdateChangeOrderScopeImpact(value: string): void {
    this.cmdUpdateChangeOrderScopeImpact = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scopeImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderScopeImpact — bind UI events here */
  handleCmdUpdateChangeOrderScopeImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderScopeImpact(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact */
  setCmdUpdateChangeOrderScheduleImpact(value: string): void {
    this.cmdUpdateChangeOrderScheduleImpact = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.scheduleImpact', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderScheduleImpact — bind UI events here */
  handleCmdUpdateChangeOrderScheduleImpactChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderScheduleImpact(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount */
  setCmdUpdateChangeOrderChangeAmount(value: string): void {
    this.cmdUpdateChangeOrderChangeAmount = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.changeAmount', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderChangeAmount — bind UI events here */
  handleCmdUpdateChangeOrderChangeAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderChangeAmount(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt */
  setCmdUpdateChangeOrderSubmittedAt(value: string): void {
    this.cmdUpdateChangeOrderSubmittedAt = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.submittedAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderSubmittedAt — bind UI events here */
  handleCmdUpdateChangeOrderSubmittedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderSubmittedAt(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt */
  setCmdUpdateChangeOrderForwardedForClientApprovalAt(value: string): void {
    this.cmdUpdateChangeOrderForwardedForClientApprovalAt = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.forwardedForClientApprovalAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderForwardedForClientApprovalAt — bind UI events here */
  handleCmdUpdateChangeOrderForwardedForClientApprovalAtChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderForwardedForClientApprovalAt(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status */
  setCmdUpdateChangeOrderStatus(value: string): void {
    this.cmdUpdateChangeOrderStatus = value;
    setState('ui.changeOrderCatalogue.input.cmdUpdateChangeOrder.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatus — bind UI events here */
  handleCmdUpdateChangeOrderStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderStatus(value);
  }

  /** setter for state ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId */
  setCmdDeleteChangeOrderChangeOrderId(value: string): void {
    this.cmdDeleteChangeOrderChangeOrderId = value;
    setState('ui.changeOrderCatalogue.input.cmdDeleteChangeOrder.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteChangeOrderChangeOrderId — bind UI events here */
  handleCmdDeleteChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteChangeOrderChangeOrderId(value);
  }
}
