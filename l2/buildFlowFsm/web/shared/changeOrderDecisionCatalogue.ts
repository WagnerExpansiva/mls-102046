/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListChangeOrderDecisionInput,
  QryListChangeOrderDecisionOutput,
  CmdCreateChangeOrderDecisionInput,
  CmdCreateChangeOrderDecisionOutput,
  CmdUpdateChangeOrderDecisionInput,
  CmdUpdateChangeOrderDecisionOutput,
  CmdDeleteChangeOrderDecisionInput,
  CmdDeleteChangeOrderDecisionOutput,
  QryChangeOrderPickerInput,
  QryChangeOrderPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.js';
import {
  qryListChangeOrderDecisionRoute,
  cmdCreateChangeOrderDecisionRoute,
  cmdUpdateChangeOrderDecisionRoute,
  cmdDeleteChangeOrderDecisionRoute,
  qryChangeOrderPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.js';

export type {
  QryListChangeOrderDecisionInput,
  QryListChangeOrderDecisionOutput,
  CmdCreateChangeOrderDecisionInput,
  CmdCreateChangeOrderDecisionOutput,
  CmdUpdateChangeOrderDecisionInput,
  CmdUpdateChangeOrderDecisionOutput,
  CmdDeleteChangeOrderDecisionInput,
  CmdDeleteChangeOrderDecisionOutput,
  QryChangeOrderPickerInput,
  QryChangeOrderPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/changeOrderDecisionCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.changeOrderDecisionCatalogue.recordList.title': 'Localizar decisões',
  'organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label': 'Change Order Decision Id',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label': 'Change Order',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision': 'Excluir Decisão sobre ordem de mudança',
  'section.changeOrderDecisionCatalogue.recordForm.title': 'Criar ou corrigir decisão',
  'organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'action.cmdCreateChangeOrderDecision.success': 'Criar Decisão sobre ordem de mudança: OK',
  'action.cmdCreateChangeOrderDecision.error': 'Criar Decisão sobre ordem de mudança: falhou',
  'action.cmdUpdateChangeOrderDecision.success': 'Atualizar Decisão sobre ordem de mudança: OK',
  'action.cmdUpdateChangeOrderDecision.error': 'Atualizar Decisão sobre ordem de mudança: falhou',
  'action.cmdDeleteChangeOrderDecision.success': 'Excluir Decisão sobre ordem de mudança: OK',
  'action.cmdDeleteChangeOrderDecision.error': 'Excluir Decisão sobre ordem de mudança: falhou',
  'section.changeOrderDecisionCatalogue.decisionWorkbench.title': 'Decisões sobre ordens de mudança',
  'section.changeOrderDecisionCatalogue.decisionCreation.title': 'Registrar decisão',
  'section.changeOrderDecisionCatalogue.newDecision.title': 'Registrar decisão',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.changeOrderDecisionCatalogue.recordList.title': 'Localizar decisões',
  'organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label': 'Change Order Decision Id',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label': 'Change Order',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision': 'Excluir Decisão sobre ordem de mudança',
  'section.changeOrderDecisionCatalogue.recordForm.title': 'Criar ou corrigir decisão',
  'organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'action.cmdCreateChangeOrderDecision.success': 'Criar Decisão sobre ordem de mudança: OK',
  'action.cmdCreateChangeOrderDecision.error': 'Criar Decisão sobre ordem de mudança: falhou',
  'action.cmdUpdateChangeOrderDecision.success': 'Atualizar Decisão sobre ordem de mudança: OK',
  'action.cmdUpdateChangeOrderDecision.error': 'Atualizar Decisão sobre ordem de mudança: falhou',
  'action.cmdDeleteChangeOrderDecision.success': 'Excluir Decisão sobre ordem de mudança: OK',
  'action.cmdDeleteChangeOrderDecision.error': 'Excluir Decisão sobre ordem de mudança: falhou',
  'section.changeOrderDecisionCatalogue.decisionWorkbench.title': 'Decisões sobre ordens de mudança',
  'section.changeOrderDecisionCatalogue.decisionCreation.title': 'Registrar decisão',
  'section.changeOrderDecisionCatalogue.newDecision.title': 'Registrar decisão',
};
const message_en: MessageType = {
  'section.changeOrderDecisionCatalogue.recordList.title': 'Localizar decisões',
  'organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label': 'Change Order Decision Id',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label': 'Change Order',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision': 'Excluir Decisão sobre ordem de mudança',
  'section.changeOrderDecisionCatalogue.recordForm.title': 'Criar ou corrigir decisão',
  'organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'action.cmdCreateChangeOrderDecision.success': 'Criar Decisão sobre ordem de mudança: OK',
  'action.cmdCreateChangeOrderDecision.error': 'Criar Decisão sobre ordem de mudança: falhou',
  'action.cmdUpdateChangeOrderDecision.success': 'Atualizar Decisão sobre ordem de mudança: OK',
  'action.cmdUpdateChangeOrderDecision.error': 'Atualizar Decisão sobre ordem de mudança: falhou',
  'action.cmdDeleteChangeOrderDecision.success': 'Excluir Decisão sobre ordem de mudança: OK',
  'action.cmdDeleteChangeOrderDecision.error': 'Excluir Decisão sobre ordem de mudança: falhou',
  'section.changeOrderDecisionCatalogue.decisionWorkbench.title': 'Decisões sobre ordens de mudança',
  'section.changeOrderDecisionCatalogue.decisionCreation.title': 'Registrar decisão',
  'section.changeOrderDecisionCatalogue.newDecision.title': 'Registrar decisão',
};
const message_es: MessageType = {
  'section.changeOrderDecisionCatalogue.recordList.title': 'Localizar decisões',
  'organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title': 'Listar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label': 'Change Order Decision Id',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label': 'Change Order',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision': 'Atualizar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title': 'Excluir Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision': 'Excluir Decisão sobre ordem de mudança',
  'section.changeOrderDecisionCatalogue.recordForm.title': 'Criar ou corrigir decisão',
  'organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision': 'Criar Decisão sobre ordem de mudança',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label': 'Made By Platform User',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label': 'Decision',
  'intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label': 'Decided At',
  'organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title': 'Listar Ordem de mudança',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty': 'Nenhum registro encontrado',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label': 'Change Order Id',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label': 'Client Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label': 'Project Ref',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label': 'Description',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label': 'Scope Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label': 'Schedule Impact',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label': 'Change Amount',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label': 'Submitted At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label': 'Forwarded For Client Approval At',
  'intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label': 'Status',
  'action.cmdCreateChangeOrderDecision.success': 'Criar Decisão sobre ordem de mudança: OK',
  'action.cmdCreateChangeOrderDecision.error': 'Criar Decisão sobre ordem de mudança: falhou',
  'action.cmdUpdateChangeOrderDecision.success': 'Atualizar Decisão sobre ordem de mudança: OK',
  'action.cmdUpdateChangeOrderDecision.error': 'Atualizar Decisão sobre ordem de mudança: falhou',
  'action.cmdDeleteChangeOrderDecision.success': 'Excluir Decisão sobre ordem de mudança: OK',
  'action.cmdDeleteChangeOrderDecision.error': 'Excluir Decisão sobre ordem de mudança: falhou',
  'section.changeOrderDecisionCatalogue.decisionWorkbench.title': 'Decisões sobre ordens de mudança',
  'section.changeOrderDecisionCatalogue.decisionCreation.title': 'Registrar decisão',
  'section.changeOrderDecisionCatalogue.newDecision.title': 'Registrar decisão',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.changeOrderDecisionCatalogue.status',
  'ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status',
  'ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision',
  'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status',
  'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder',
  'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser',
  'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision',
  'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt',
  'ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision',
  'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error',
  'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status',
  'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId',
  'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder',
  'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser',
  'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision',
  'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt',
  'ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision',
  'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error',
  'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status',
  'ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId',
  'ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision',
  'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error',
  'ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status',
  'ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker',
];

export class BuildFlowFsmChangeOrderDecisionCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() qryListChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListChangeOrderDecisionData — queryResult, outputShape: array */
  @property() qryListChangeOrderDecisionData: QryListChangeOrderDecisionOutput[] = [];
  /** state cmdCreateChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateChangeOrderDecisionChangeOrder — input */
  @property() cmdCreateChangeOrderDecisionChangeOrder: string = '';
  /** state cmdCreateChangeOrderDecisionMadeByPlatformUser — input */
  @property() cmdCreateChangeOrderDecisionMadeByPlatformUser: string = '';
  /** state cmdCreateChangeOrderDecisionDecision — input */
  @property() cmdCreateChangeOrderDecisionDecision: string = '';
  /** state cmdCreateChangeOrderDecisionDecidedAt — input */
  @property() cmdCreateChangeOrderDecisionDecidedAt: string = '';
  /** state cmdCreateChangeOrderDecisionOutput — commandOutput */
  @property() cmdCreateChangeOrderDecisionOutput: CmdCreateChangeOrderDecisionOutput | null = null;
  /** state cmdCreateChangeOrderDecisionError — actionError */
  @property() cmdCreateChangeOrderDecisionError: string = '';
  /** state cmdUpdateChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateChangeOrderDecisionChangeOrderDecisionId — input */
  @property() cmdUpdateChangeOrderDecisionChangeOrderDecisionId: string = '';
  /** state cmdUpdateChangeOrderDecisionChangeOrder — input */
  @property() cmdUpdateChangeOrderDecisionChangeOrder: string = '';
  /** state cmdUpdateChangeOrderDecisionMadeByPlatformUser — input */
  @property() cmdUpdateChangeOrderDecisionMadeByPlatformUser: string = '';
  /** state cmdUpdateChangeOrderDecisionDecision — input */
  @property() cmdUpdateChangeOrderDecisionDecision: string = '';
  /** state cmdUpdateChangeOrderDecisionDecidedAt — input */
  @property() cmdUpdateChangeOrderDecisionDecidedAt: string = '';
  /** state cmdUpdateChangeOrderDecisionOutput — commandOutput */
  @property() cmdUpdateChangeOrderDecisionOutput: CmdUpdateChangeOrderDecisionOutput | null = null;
  /** state cmdUpdateChangeOrderDecisionError — actionError */
  @property() cmdUpdateChangeOrderDecisionError: string = '';
  /** state cmdDeleteChangeOrderDecisionState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteChangeOrderDecisionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteChangeOrderDecisionChangeOrderDecisionId — input */
  @property() cmdDeleteChangeOrderDecisionChangeOrderDecisionId: string = '';
  /** state cmdDeleteChangeOrderDecisionOutput — commandOutput */
  @property() cmdDeleteChangeOrderDecisionOutput: CmdDeleteChangeOrderDecisionOutput | null = null;
  /** state cmdDeleteChangeOrderDecisionError — actionError */
  @property() cmdDeleteChangeOrderDecisionError: string = '';
  /** state qryChangeOrderPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryChangeOrderPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryChangeOrderPickerData — queryResult, outputShape: array */
  @property() qryChangeOrderPickerData: QryChangeOrderPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.changeOrderDecisionCatalogue.status', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision', []);
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision', null);
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision', null);
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'idle');
    this.initStateValue('ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision', null);
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error', '');
    this.initStateValue('ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status', 'idle');
    this.initStateValue('ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListChangeOrderDecision();
    void this.loadQryChangeOrderPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.changeOrderDecisionCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status':
        this.qryListChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision':
        this.qryListChangeOrderDecisionData = (value as QryListChangeOrderDecisionOutput[]) ?? [];
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status':
        this.cmdCreateChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder':
        this.cmdCreateChangeOrderDecisionChangeOrder = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser':
        this.cmdCreateChangeOrderDecisionMadeByPlatformUser = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision':
        this.cmdCreateChangeOrderDecisionDecision = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt':
        this.cmdCreateChangeOrderDecisionDecidedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision':
        this.cmdCreateChangeOrderDecisionOutput = (value as CmdCreateChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error':
        this.cmdCreateChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status':
        this.cmdUpdateChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId':
        this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder':
        this.cmdUpdateChangeOrderDecisionChangeOrder = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser':
        this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision':
        this.cmdUpdateChangeOrderDecisionDecision = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt':
        this.cmdUpdateChangeOrderDecisionDecidedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision':
        this.cmdUpdateChangeOrderDecisionOutput = (value as CmdUpdateChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error':
        this.cmdUpdateChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status':
        this.cmdDeleteChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId':
        this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision':
        this.cmdDeleteChangeOrderDecisionOutput = (value as CmdDeleteChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error':
        this.cmdDeleteChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status':
        this.qryChangeOrderPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker':
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
      case 'ui.changeOrderDecisionCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status':
        this.qryListChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision':
        this.qryListChangeOrderDecisionData = (value as QryListChangeOrderDecisionOutput[]) ?? [];
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status':
        this.cmdCreateChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder':
        this.cmdCreateChangeOrderDecisionChangeOrder = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser':
        this.cmdCreateChangeOrderDecisionMadeByPlatformUser = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision':
        this.cmdCreateChangeOrderDecisionDecision = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt':
        this.cmdCreateChangeOrderDecisionDecidedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision':
        this.cmdCreateChangeOrderDecisionOutput = (value as CmdCreateChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error':
        this.cmdCreateChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status':
        this.cmdUpdateChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId':
        this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder':
        this.cmdUpdateChangeOrderDecisionChangeOrder = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser':
        this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision':
        this.cmdUpdateChangeOrderDecisionDecision = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt':
        this.cmdUpdateChangeOrderDecisionDecidedAt = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision':
        this.cmdUpdateChangeOrderDecisionOutput = (value as CmdUpdateChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error':
        this.cmdUpdateChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status':
        this.cmdDeleteChangeOrderDecisionState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId':
        this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision':
        this.cmdDeleteChangeOrderDecisionOutput = (value as CmdDeleteChangeOrderDecisionOutput | null) ?? null;
        break;
      case 'ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error':
        this.cmdDeleteChangeOrderDecisionError = (value as string) ?? '';
        break;
      case 'ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status':
        this.qryChangeOrderPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker':
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

  /** action qryListChangeOrderDecision (query) — route buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision; inputs: (none); writes ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision; status ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status */
  async loadQryListChangeOrderDecision(): Promise<void> {
    this.qryListChangeOrderDecisionState = 'loading';
    setState('ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status', 'loading');
    const params: QryListChangeOrderDecisionInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListChangeOrderDecisionOutput[]>(qryListChangeOrderDecisionRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListChangeOrderDecisionData = data;
      setState('ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision', data);
      this.qryListChangeOrderDecisionState = 'success';
      setState('ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status', 'success');
    } else {
      this.qryListChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.qryListChangeOrderDecision.status', 'error');
      if (response.error) {
        console.error('qryListChangeOrderDecision failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListChangeOrderDecision — bind UI events here */
  handleQryListChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListChangeOrderDecision();
  }

  /** action cmdCreateChangeOrderDecision (command) — route buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision; inputs: changeOrder, madeByPlatformUser, decision, decidedAt; writes ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision; status ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status; feedback keys action.cmdCreateChangeOrderDecision.success / action.cmdCreateChangeOrderDecision.error */
  async cmdCreateChangeOrderDecision(): Promise<void> {
    if (!this.cmdCreateChangeOrderDecisionChangeOrder) {
      this.cmdCreateChangeOrderDecisionState = 'idle';
      setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderDecisionState = 'loading';
    setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'loading');
    this.cmdCreateChangeOrderDecisionError = '';
    setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error', '');
    const params: CmdCreateChangeOrderDecisionInput = {
      changeOrder: this.cmdCreateChangeOrderDecisionChangeOrder,
      madeByPlatformUser: this.cmdCreateChangeOrderDecisionMadeByPlatformUser,
      decision: this.cmdCreateChangeOrderDecisionDecision,
      decidedAt: this.cmdCreateChangeOrderDecisionDecidedAt,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateChangeOrderDecisionOutput>(cmdCreateChangeOrderDecisionRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateChangeOrderDecision.error');
      this.cmdCreateChangeOrderDecisionError = errMsg;
      setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.error', errMsg);
      this.cmdCreateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateChangeOrderDecisionOutput | null = response.data ?? null;
    this.cmdCreateChangeOrderDecisionOutput = data;
    setState('ui.changeOrderDecisionCatalogue.output.cmdCreateChangeOrderDecision', data);
    try {
      await this.loadQryListChangeOrderDecision();
      if (this.qryListChangeOrderDecisionState === 'error') {
        this.cmdCreateChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrderDecision refresh failed', refreshError);
      this.cmdCreateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdCreateChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateChangeOrderDecision refresh failed', refreshError);
      this.cmdCreateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderDecisionChangeOrder = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder', '');
    this.cmdCreateChangeOrderDecisionMadeByPlatformUser = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser', '');
    this.cmdCreateChangeOrderDecisionDecision = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision', '');
    this.cmdCreateChangeOrderDecisionDecidedAt = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt', '');
    this.cmdCreateChangeOrderDecisionState = 'success';
    setState('ui.changeOrderDecisionCatalogue.action.cmdCreateChangeOrderDecision.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateChangeOrderDecision — bind UI events here */
  handleCmdCreateChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateChangeOrderDecision();
    });
  }

  /** action cmdUpdateChangeOrderDecision (command) — route buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision; inputs: changeOrderDecisionId, changeOrder, madeByPlatformUser, decision, decidedAt; writes ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision; status ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status; feedback keys action.cmdUpdateChangeOrderDecision.success / action.cmdUpdateChangeOrderDecision.error */
  async cmdUpdateChangeOrderDecision(): Promise<void> {
    if (!this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId) {
      this.cmdUpdateChangeOrderDecisionState = 'idle';
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateChangeOrderDecisionChangeOrder) {
      this.cmdUpdateChangeOrderDecisionState = 'idle';
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderDecisionState = 'loading';
    setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'loading');
    this.cmdUpdateChangeOrderDecisionError = '';
    setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error', '');
    const params: CmdUpdateChangeOrderDecisionInput = {
      changeOrderDecisionId: this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId,
      changeOrder: this.cmdUpdateChangeOrderDecisionChangeOrder,
      madeByPlatformUser: this.cmdUpdateChangeOrderDecisionMadeByPlatformUser,
      decision: this.cmdUpdateChangeOrderDecisionDecision,
      decidedAt: this.cmdUpdateChangeOrderDecisionDecidedAt,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderDecisionOutput>(cmdUpdateChangeOrderDecisionRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateChangeOrderDecision.error');
      this.cmdUpdateChangeOrderDecisionError = errMsg;
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.error', errMsg);
      this.cmdUpdateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateChangeOrderDecisionOutput | null = response.data ?? null;
    this.cmdUpdateChangeOrderDecisionOutput = data;
    setState('ui.changeOrderDecisionCatalogue.output.cmdUpdateChangeOrderDecision', data);
    try {
      await this.loadQryListChangeOrderDecision();
      if (this.qryListChangeOrderDecisionState === 'error') {
        this.cmdUpdateChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateChangeOrderDecision refresh failed', refreshError);
      this.cmdUpdateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdUpdateChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateChangeOrderDecision refresh failed', refreshError);
      this.cmdUpdateChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId', '');
    this.cmdUpdateChangeOrderDecisionChangeOrder = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder', '');
    this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser', '');
    this.cmdUpdateChangeOrderDecisionDecision = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision', '');
    this.cmdUpdateChangeOrderDecisionDecidedAt = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt', '');
    this.cmdUpdateChangeOrderDecisionState = 'success';
    setState('ui.changeOrderDecisionCatalogue.action.cmdUpdateChangeOrderDecision.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateChangeOrderDecision — bind UI events here */
  handleCmdUpdateChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateChangeOrderDecision();
    });
  }

  /** action cmdDeleteChangeOrderDecision (command) — route buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision; inputs: changeOrderDecisionId; writes ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision; status ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status; feedback keys action.cmdDeleteChangeOrderDecision.success / action.cmdDeleteChangeOrderDecision.error */
  async cmdDeleteChangeOrderDecision(): Promise<void> {
    if (!this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId) {
      this.cmdDeleteChangeOrderDecisionState = 'idle';
      setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteChangeOrderDecisionState = 'loading';
    setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'loading');
    this.cmdDeleteChangeOrderDecisionError = '';
    setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error', '');
    const params: CmdDeleteChangeOrderDecisionInput = {
      changeOrderDecisionId: this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteChangeOrderDecisionOutput>(cmdDeleteChangeOrderDecisionRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteChangeOrderDecision.error');
      this.cmdDeleteChangeOrderDecisionError = errMsg;
      setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.error', errMsg);
      this.cmdDeleteChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteChangeOrderDecisionOutput | null = response.data ?? null;
    this.cmdDeleteChangeOrderDecisionOutput = data;
    setState('ui.changeOrderDecisionCatalogue.output.cmdDeleteChangeOrderDecision', data);
    try {
      await this.loadQryListChangeOrderDecision();
      if (this.qryListChangeOrderDecisionState === 'error') {
        this.cmdDeleteChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteChangeOrderDecision refresh failed', refreshError);
      this.cmdDeleteChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryChangeOrderPicker();
      if (this.qryChangeOrderPickerState === 'error') {
        this.cmdDeleteChangeOrderDecisionState = 'error';
        setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteChangeOrderDecision refresh failed', refreshError);
      this.cmdDeleteChangeOrderDecisionState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId = '';
    setState('ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId', '');
    this.cmdDeleteChangeOrderDecisionState = 'success';
    setState('ui.changeOrderDecisionCatalogue.action.cmdDeleteChangeOrderDecision.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteChangeOrderDecision — bind UI events here */
  handleCmdDeleteChangeOrderDecisionClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteChangeOrderDecision();
    });
  }

  /** action qryChangeOrderPicker (query) — route buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker; inputs: (none); writes ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker; status ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status */
  async loadQryChangeOrderPicker(): Promise<void> {
    this.qryChangeOrderPickerState = 'loading';
    setState('ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status', 'loading');
    const params: QryChangeOrderPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryChangeOrderPickerOutput[]>(qryChangeOrderPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryChangeOrderPickerData = data;
      setState('ui.changeOrderDecisionCatalogue.data.qryChangeOrderPicker', data);
      this.qryChangeOrderPickerState = 'success';
      setState('ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status', 'success');
    } else {
      this.qryChangeOrderPickerState = 'error';
      setState('ui.changeOrderDecisionCatalogue.action.qryChangeOrderPicker.status', 'error');
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

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder */
  setCmdCreateChangeOrderDecisionChangeOrder(value: string): void {
    this.cmdCreateChangeOrderDecisionChangeOrder = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.changeOrder', value);
    const collection =
      (getState('ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision') as QryListChangeOrderDecisionOutput[] | null | undefined) ?? this.qryListChangeOrderDecisionData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderDecisionOutput) => String(row.changeOrder) === String(value),
      );
      if (item) {
        this.cmdCreateChangeOrderDecisionMadeByPlatformUser = item.madeByPlatformUser;
        setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser', item.madeByPlatformUser);
        this.cmdCreateChangeOrderDecisionDecision = item.decision;
        setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision', item.decision);
        this.cmdCreateChangeOrderDecisionDecidedAt = item.decidedAt;
        setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt', item.decidedAt);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDecisionChangeOrder — bind UI events here */
  handleCmdCreateChangeOrderDecisionChangeOrderChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDecisionChangeOrder(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser */
  setCmdCreateChangeOrderDecisionMadeByPlatformUser(value: string): void {
    this.cmdCreateChangeOrderDecisionMadeByPlatformUser = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.madeByPlatformUser', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDecisionMadeByPlatformUser — bind UI events here */
  handleCmdCreateChangeOrderDecisionMadeByPlatformUserChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDecisionMadeByPlatformUser(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision */
  setCmdCreateChangeOrderDecisionDecision(value: string): void {
    this.cmdCreateChangeOrderDecisionDecision = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decision', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDecisionDecision — bind UI events here */
  handleCmdCreateChangeOrderDecisionDecisionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDecisionDecision(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt */
  setCmdCreateChangeOrderDecisionDecidedAt(value: string): void {
    this.cmdCreateChangeOrderDecisionDecidedAt = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdCreateChangeOrderDecision.decidedAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDecisionDecidedAt — bind UI events here */
  handleCmdCreateChangeOrderDecisionDecidedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDecisionDecidedAt(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId */
  setCmdUpdateChangeOrderDecisionChangeOrderDecisionId(value: string): void {
    this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrderDecisionId', value);
    const collection =
      (getState('ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision') as QryListChangeOrderDecisionOutput[] | null | undefined) ?? this.qryListChangeOrderDecisionData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderDecisionOutput) => String(row.changeOrderDecisionId) === String(value),
      );
      if (item) {
        this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = item.madeByPlatformUser;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser', item.madeByPlatformUser);
        this.cmdUpdateChangeOrderDecisionDecision = item.decision;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision', item.decision);
        this.cmdUpdateChangeOrderDecisionDecidedAt = item.decidedAt;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt', item.decidedAt);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDecisionChangeOrderDecisionId — bind UI events here */
  handleCmdUpdateChangeOrderDecisionChangeOrderDecisionIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDecisionChangeOrderDecisionId(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder */
  setCmdUpdateChangeOrderDecisionChangeOrder(value: string): void {
    this.cmdUpdateChangeOrderDecisionChangeOrder = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.changeOrder', value);
    const collection =
      (getState('ui.changeOrderDecisionCatalogue.data.qryListChangeOrderDecision') as QryListChangeOrderDecisionOutput[] | null | undefined) ?? this.qryListChangeOrderDecisionData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListChangeOrderDecisionOutput) => String(row.changeOrder) === String(value),
      );
      if (item) {
        this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = item.madeByPlatformUser;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser', item.madeByPlatformUser);
        this.cmdUpdateChangeOrderDecisionDecision = item.decision;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision', item.decision);
        this.cmdUpdateChangeOrderDecisionDecidedAt = item.decidedAt;
        setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt', item.decidedAt);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDecisionChangeOrder — bind UI events here */
  handleCmdUpdateChangeOrderDecisionChangeOrderChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDecisionChangeOrder(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser */
  setCmdUpdateChangeOrderDecisionMadeByPlatformUser(value: string): void {
    this.cmdUpdateChangeOrderDecisionMadeByPlatformUser = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.madeByPlatformUser', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDecisionMadeByPlatformUser — bind UI events here */
  handleCmdUpdateChangeOrderDecisionMadeByPlatformUserChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDecisionMadeByPlatformUser(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision */
  setCmdUpdateChangeOrderDecisionDecision(value: string): void {
    this.cmdUpdateChangeOrderDecisionDecision = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decision', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDecisionDecision — bind UI events here */
  handleCmdUpdateChangeOrderDecisionDecisionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDecisionDecision(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt */
  setCmdUpdateChangeOrderDecisionDecidedAt(value: string): void {
    this.cmdUpdateChangeOrderDecisionDecidedAt = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdUpdateChangeOrderDecision.decidedAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDecisionDecidedAt — bind UI events here */
  handleCmdUpdateChangeOrderDecisionDecidedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDecisionDecidedAt(value);
  }

  /** setter for state ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId */
  setCmdDeleteChangeOrderDecisionChangeOrderDecisionId(value: string): void {
    this.cmdDeleteChangeOrderDecisionChangeOrderDecisionId = value;
    setState('ui.changeOrderDecisionCatalogue.input.cmdDeleteChangeOrderDecision.changeOrderDecisionId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteChangeOrderDecisionChangeOrderDecisionId — bind UI events here */
  handleCmdDeleteChangeOrderDecisionChangeOrderDecisionIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteChangeOrderDecisionChangeOrderDecisionId(value);
  }
}
