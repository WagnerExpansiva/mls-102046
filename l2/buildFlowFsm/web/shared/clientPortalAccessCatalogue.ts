/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListClientPortalAccessInput,
  QryListClientPortalAccessOutput,
  CmdCreateClientPortalAccessInput,
  CmdCreateClientPortalAccessOutput,
  CmdUpdateClientPortalAccessInput,
  CmdUpdateClientPortalAccessOutput,
  CmdDeleteClientPortalAccessInput,
  CmdDeleteClientPortalAccessOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.js';
import {
  qryListClientPortalAccessRoute,
  cmdCreateClientPortalAccessRoute,
  cmdUpdateClientPortalAccessRoute,
  cmdDeleteClientPortalAccessRoute,
  qryClientPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.js';

export type {
  QryListClientPortalAccessInput,
  QryListClientPortalAccessOutput,
  CmdCreateClientPortalAccessInput,
  CmdCreateClientPortalAccessOutput,
  CmdUpdateClientPortalAccessInput,
  CmdUpdateClientPortalAccessOutput,
  CmdDeleteClientPortalAccessInput,
  CmdDeleteClientPortalAccessOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientPortalAccessCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.clientPortalAccessCatalogue.recordList.title': 'Vínculos existentes',
  'organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label': 'Client Portal Access Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess': 'Excluir Vínculo de acesso do cliente',
  'section.clientPortalAccessCatalogue.recordForm.title': 'Criar ou corrigir vínculo',
  'organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label': 'Status',
  'action.cmdCreateClientPortalAccess.success': 'Criar Vínculo de acesso do cliente: OK',
  'action.cmdCreateClientPortalAccess.error': 'Criar Vínculo de acesso do cliente: falhou',
  'action.cmdUpdateClientPortalAccess.success': 'Atualizar Vínculo de acesso do cliente: OK',
  'action.cmdUpdateClientPortalAccess.error': 'Atualizar Vínculo de acesso do cliente: falhou',
  'action.cmdDeleteClientPortalAccess.success': 'Excluir Vínculo de acesso do cliente: OK',
  'action.cmdDeleteClientPortalAccess.error': 'Excluir Vínculo de acesso do cliente: falhou',
  'section.clientPortalAccessCatalogue.accessRecordsWorkspace.title': 'Vínculos de acesso',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.clientPortalAccessCatalogue.recordList.title': 'Vínculos existentes',
  'organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label': 'Client Portal Access Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess': 'Excluir Vínculo de acesso do cliente',
  'section.clientPortalAccessCatalogue.recordForm.title': 'Criar ou corrigir vínculo',
  'organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label': 'Status',
  'action.cmdCreateClientPortalAccess.success': 'Criar Vínculo de acesso do cliente: OK',
  'action.cmdCreateClientPortalAccess.error': 'Criar Vínculo de acesso do cliente: falhou',
  'action.cmdUpdateClientPortalAccess.success': 'Atualizar Vínculo de acesso do cliente: OK',
  'action.cmdUpdateClientPortalAccess.error': 'Atualizar Vínculo de acesso do cliente: falhou',
  'action.cmdDeleteClientPortalAccess.success': 'Excluir Vínculo de acesso do cliente: OK',
  'action.cmdDeleteClientPortalAccess.error': 'Excluir Vínculo de acesso do cliente: falhou',
  'section.clientPortalAccessCatalogue.accessRecordsWorkspace.title': 'Vínculos de acesso',
};
const message_en: MessageType = {
  'section.clientPortalAccessCatalogue.recordList.title': 'Vínculos existentes',
  'organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label': 'Client Portal Access Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess': 'Excluir Vínculo de acesso do cliente',
  'section.clientPortalAccessCatalogue.recordForm.title': 'Criar ou corrigir vínculo',
  'organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label': 'Status',
  'action.cmdCreateClientPortalAccess.success': 'Criar Vínculo de acesso do cliente: OK',
  'action.cmdCreateClientPortalAccess.error': 'Criar Vínculo de acesso do cliente: falhou',
  'action.cmdUpdateClientPortalAccess.success': 'Atualizar Vínculo de acesso do cliente: OK',
  'action.cmdUpdateClientPortalAccess.error': 'Atualizar Vínculo de acesso do cliente: falhou',
  'action.cmdDeleteClientPortalAccess.success': 'Excluir Vínculo de acesso do cliente: OK',
  'action.cmdDeleteClientPortalAccess.error': 'Excluir Vínculo de acesso do cliente: falhou',
  'section.clientPortalAccessCatalogue.accessRecordsWorkspace.title': 'Vínculos de acesso',
};
const message_es: MessageType = {
  'section.clientPortalAccessCatalogue.recordList.title': 'Vínculos existentes',
  'organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title': 'Listar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label': 'Client Portal Access Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess': 'Atualizar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label': 'Status',
  'organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title': 'Excluir Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess': 'Excluir Vínculo de acesso do cliente',
  'section.clientPortalAccessCatalogue.recordForm.title': 'Criar ou corrigir vínculo',
  'organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess': 'Criar Vínculo de acesso do cliente',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label': 'Platform User Id',
  'intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label': 'Status',
  'action.cmdCreateClientPortalAccess.success': 'Criar Vínculo de acesso do cliente: OK',
  'action.cmdCreateClientPortalAccess.error': 'Criar Vínculo de acesso do cliente: falhou',
  'action.cmdUpdateClientPortalAccess.success': 'Atualizar Vínculo de acesso do cliente: OK',
  'action.cmdUpdateClientPortalAccess.error': 'Atualizar Vínculo de acesso do cliente: falhou',
  'action.cmdDeleteClientPortalAccess.success': 'Excluir Vínculo de acesso do cliente: OK',
  'action.cmdDeleteClientPortalAccess.error': 'Excluir Vínculo de acesso do cliente: falhou',
  'section.clientPortalAccessCatalogue.accessRecordsWorkspace.title': 'Vínculos de acesso',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.clientPortalAccessCatalogue.status',
  'ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess',
  'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId',
  'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId',
  'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess',
  'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error',
  'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId',
  'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId',
  'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId',
  'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess',
  'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error',
  'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status',
  'ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId',
  'ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess',
  'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error',
  'ui.clientPortalAccessCatalogue.action.qryClientPicker.status',
  'ui.clientPortalAccessCatalogue.data.qryClientPicker',
];

export class BuildFlowFsmClientPortalAccessCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListClientPortalAccessState — actionStatus, values: idle|loading|success|error */
  @property() qryListClientPortalAccessState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListClientPortalAccessData — queryResult, outputShape: array */
  @property() qryListClientPortalAccessData: QryListClientPortalAccessOutput[] = [];
  /** state cmdCreateClientPortalAccessState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateClientPortalAccessState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateClientPortalAccessClientId — input */
  @property() cmdCreateClientPortalAccessClientId: string = '';
  /** state cmdCreateClientPortalAccessPlatformUserId — input */
  @property() cmdCreateClientPortalAccessPlatformUserId: string = '';
  /** state cmdCreateClientPortalAccessStatus — input */
  @property() cmdCreateClientPortalAccessStatus: string = '';
  /** state cmdCreateClientPortalAccessOutput — commandOutput */
  @property() cmdCreateClientPortalAccessOutput: CmdCreateClientPortalAccessOutput | null = null;
  /** state cmdCreateClientPortalAccessError — actionError */
  @property() cmdCreateClientPortalAccessError: string = '';
  /** state cmdUpdateClientPortalAccessState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateClientPortalAccessState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateClientPortalAccessClientPortalAccessId — input */
  @property() cmdUpdateClientPortalAccessClientPortalAccessId: string = '';
  /** state cmdUpdateClientPortalAccessClientId — input */
  @property() cmdUpdateClientPortalAccessClientId: string = '';
  /** state cmdUpdateClientPortalAccessPlatformUserId — input */
  @property() cmdUpdateClientPortalAccessPlatformUserId: string = '';
  /** state cmdUpdateClientPortalAccessStatus — input */
  @property() cmdUpdateClientPortalAccessStatus: string = '';
  /** state cmdUpdateClientPortalAccessOutput — commandOutput */
  @property() cmdUpdateClientPortalAccessOutput: CmdUpdateClientPortalAccessOutput | null = null;
  /** state cmdUpdateClientPortalAccessError — actionError */
  @property() cmdUpdateClientPortalAccessError: string = '';
  /** state cmdDeleteClientPortalAccessState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteClientPortalAccessState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteClientPortalAccessClientPortalAccessId — input */
  @property() cmdDeleteClientPortalAccessClientPortalAccessId: string = '';
  /** state cmdDeleteClientPortalAccessOutput — commandOutput */
  @property() cmdDeleteClientPortalAccessOutput: CmdDeleteClientPortalAccessOutput | null = null;
  /** state cmdDeleteClientPortalAccessError — actionError */
  @property() cmdDeleteClientPortalAccessError: string = '';
  /** state qryClientPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryClientPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientPickerData — queryResult, outputShape: array */
  @property() qryClientPickerData: QryClientPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.clientPortalAccessCatalogue.status', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status', 'idle');
    this.initStateValue('ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess', []);
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'idle');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess', null);
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'idle');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess', null);
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'idle');
    this.initStateValue('ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess', null);
    this.initStateValue('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error', '');
    this.initStateValue('ui.clientPortalAccessCatalogue.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.clientPortalAccessCatalogue.data.qryClientPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListClientPortalAccess();
    void this.loadQryClientPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientPortalAccessCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status':
        this.qryListClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess':
        this.qryListClientPortalAccessData = (value as QryListClientPortalAccessOutput[]) ?? [];
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status':
        this.cmdCreateClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId':
        this.cmdCreateClientPortalAccessClientId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId':
        this.cmdCreateClientPortalAccessPlatformUserId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status':
        this.cmdCreateClientPortalAccessStatus = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess':
        this.cmdCreateClientPortalAccessOutput = (value as CmdCreateClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error':
        this.cmdCreateClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status':
        this.cmdUpdateClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId':
        this.cmdUpdateClientPortalAccessClientPortalAccessId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId':
        this.cmdUpdateClientPortalAccessClientId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId':
        this.cmdUpdateClientPortalAccessPlatformUserId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status':
        this.cmdUpdateClientPortalAccessStatus = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess':
        this.cmdUpdateClientPortalAccessOutput = (value as CmdUpdateClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error':
        this.cmdUpdateClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status':
        this.cmdDeleteClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId':
        this.cmdDeleteClientPortalAccessClientPortalAccessId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess':
        this.cmdDeleteClientPortalAccessOutput = (value as CmdDeleteClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error':
        this.cmdDeleteClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
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
      case 'ui.clientPortalAccessCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status':
        this.qryListClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess':
        this.qryListClientPortalAccessData = (value as QryListClientPortalAccessOutput[]) ?? [];
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status':
        this.cmdCreateClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId':
        this.cmdCreateClientPortalAccessClientId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId':
        this.cmdCreateClientPortalAccessPlatformUserId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status':
        this.cmdCreateClientPortalAccessStatus = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess':
        this.cmdCreateClientPortalAccessOutput = (value as CmdCreateClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error':
        this.cmdCreateClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status':
        this.cmdUpdateClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId':
        this.cmdUpdateClientPortalAccessClientPortalAccessId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId':
        this.cmdUpdateClientPortalAccessClientId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId':
        this.cmdUpdateClientPortalAccessPlatformUserId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status':
        this.cmdUpdateClientPortalAccessStatus = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess':
        this.cmdUpdateClientPortalAccessOutput = (value as CmdUpdateClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error':
        this.cmdUpdateClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status':
        this.cmdDeleteClientPortalAccessState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId':
        this.cmdDeleteClientPortalAccessClientPortalAccessId = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess':
        this.cmdDeleteClientPortalAccessOutput = (value as CmdDeleteClientPortalAccessOutput | null) ?? null;
        break;
      case 'ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error':
        this.cmdDeleteClientPortalAccessError = (value as string) ?? '';
        break;
      case 'ui.clientPortalAccessCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientPortalAccessCatalogue.data.qryClientPicker':
        this.qryClientPickerData = (value as QryClientPickerOutput[]) ?? [];
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

  /** action qryListClientPortalAccess (query) — route buildFlowFsm.clientPortalAccessCatalogue.qryListClientPortalAccess; inputs: (none); writes ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess; status ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status */
  async loadQryListClientPortalAccess(): Promise<void> {
    this.qryListClientPortalAccessState = 'loading';
    setState('ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status', 'loading');
    const params: QryListClientPortalAccessInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListClientPortalAccessOutput[]>(qryListClientPortalAccessRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListClientPortalAccessData = data;
      setState('ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess', data);
      this.qryListClientPortalAccessState = 'success';
      setState('ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status', 'success');
    } else {
      this.qryListClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.qryListClientPortalAccess.status', 'error');
      if (response.error) {
        console.error('qryListClientPortalAccess failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListClientPortalAccess — bind UI events here */
  handleQryListClientPortalAccessClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListClientPortalAccess();
  }

  /** action cmdCreateClientPortalAccess (command) — route buildFlowFsm.clientPortalAccessCatalogue.cmdCreateClientPortalAccess; inputs: clientId, platformUserId, status; writes ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess; status ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status; feedback keys action.cmdCreateClientPortalAccess.success / action.cmdCreateClientPortalAccess.error */
  async cmdCreateClientPortalAccess(): Promise<void> {
    if (!this.cmdCreateClientPortalAccessClientId) {
      this.cmdCreateClientPortalAccessState = 'idle';
      setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateClientPortalAccessState = 'loading';
    setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'loading');
    this.cmdCreateClientPortalAccessError = '';
    setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error', '');
    const params: CmdCreateClientPortalAccessInput = {
      clientId: this.cmdCreateClientPortalAccessClientId,
      platformUserId: this.cmdCreateClientPortalAccessPlatformUserId,
      status: this.cmdCreateClientPortalAccessStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateClientPortalAccessOutput>(cmdCreateClientPortalAccessRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateClientPortalAccess.error');
      this.cmdCreateClientPortalAccessError = errMsg;
      setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.error', errMsg);
      this.cmdCreateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateClientPortalAccessOutput | null = response.data ?? null;
    this.cmdCreateClientPortalAccessOutput = data;
    setState('ui.clientPortalAccessCatalogue.output.cmdCreateClientPortalAccess', data);
    try {
      await this.loadQryListClientPortalAccess();
      if (this.qryListClientPortalAccessState === 'error') {
        this.cmdCreateClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateClientPortalAccess refresh failed', refreshError);
      this.cmdCreateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdCreateClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateClientPortalAccess refresh failed', refreshError);
      this.cmdCreateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateClientPortalAccessClientId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId', '');
    this.cmdCreateClientPortalAccessPlatformUserId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId', '');
    this.cmdCreateClientPortalAccessStatus = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status', '');
    this.cmdCreateClientPortalAccessState = 'success';
    setState('ui.clientPortalAccessCatalogue.action.cmdCreateClientPortalAccess.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateClientPortalAccess — bind UI events here */
  handleCmdCreateClientPortalAccessClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateClientPortalAccess();
    });
  }

  /** action cmdUpdateClientPortalAccess (command) — route buildFlowFsm.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess; inputs: clientPortalAccessId, clientId, platformUserId, status; writes ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess; status ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status; feedback keys action.cmdUpdateClientPortalAccess.success / action.cmdUpdateClientPortalAccess.error */
  async cmdUpdateClientPortalAccess(): Promise<void> {
    if (!this.cmdUpdateClientPortalAccessClientPortalAccessId) {
      this.cmdUpdateClientPortalAccessState = 'idle';
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateClientPortalAccessClientId) {
      this.cmdUpdateClientPortalAccessState = 'idle';
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateClientPortalAccessState = 'loading';
    setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'loading');
    this.cmdUpdateClientPortalAccessError = '';
    setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error', '');
    const params: CmdUpdateClientPortalAccessInput = {
      clientPortalAccessId: this.cmdUpdateClientPortalAccessClientPortalAccessId,
      clientId: this.cmdUpdateClientPortalAccessClientId,
      platformUserId: this.cmdUpdateClientPortalAccessPlatformUserId,
      status: this.cmdUpdateClientPortalAccessStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateClientPortalAccessOutput>(cmdUpdateClientPortalAccessRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateClientPortalAccess.error');
      this.cmdUpdateClientPortalAccessError = errMsg;
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.error', errMsg);
      this.cmdUpdateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateClientPortalAccessOutput | null = response.data ?? null;
    this.cmdUpdateClientPortalAccessOutput = data;
    setState('ui.clientPortalAccessCatalogue.output.cmdUpdateClientPortalAccess', data);
    try {
      await this.loadQryListClientPortalAccess();
      if (this.qryListClientPortalAccessState === 'error') {
        this.cmdUpdateClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateClientPortalAccess refresh failed', refreshError);
      this.cmdUpdateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdUpdateClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateClientPortalAccess refresh failed', refreshError);
      this.cmdUpdateClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateClientPortalAccessClientPortalAccessId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId', '');
    this.cmdUpdateClientPortalAccessClientId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId', '');
    this.cmdUpdateClientPortalAccessPlatformUserId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId', '');
    this.cmdUpdateClientPortalAccessStatus = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status', '');
    this.cmdUpdateClientPortalAccessState = 'success';
    setState('ui.clientPortalAccessCatalogue.action.cmdUpdateClientPortalAccess.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateClientPortalAccess — bind UI events here */
  handleCmdUpdateClientPortalAccessClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateClientPortalAccess();
    });
  }

  /** action cmdDeleteClientPortalAccess (command) — route buildFlowFsm.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess; inputs: clientPortalAccessId; writes ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess; status ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status; feedback keys action.cmdDeleteClientPortalAccess.success / action.cmdDeleteClientPortalAccess.error */
  async cmdDeleteClientPortalAccess(): Promise<void> {
    if (!this.cmdDeleteClientPortalAccessClientPortalAccessId) {
      this.cmdDeleteClientPortalAccessState = 'idle';
      setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteClientPortalAccessState = 'loading';
    setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'loading');
    this.cmdDeleteClientPortalAccessError = '';
    setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error', '');
    const params: CmdDeleteClientPortalAccessInput = {
      clientPortalAccessId: this.cmdDeleteClientPortalAccessClientPortalAccessId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteClientPortalAccessOutput>(cmdDeleteClientPortalAccessRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteClientPortalAccess.error');
      this.cmdDeleteClientPortalAccessError = errMsg;
      setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.error', errMsg);
      this.cmdDeleteClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteClientPortalAccessOutput | null = response.data ?? null;
    this.cmdDeleteClientPortalAccessOutput = data;
    setState('ui.clientPortalAccessCatalogue.output.cmdDeleteClientPortalAccess', data);
    try {
      await this.loadQryListClientPortalAccess();
      if (this.qryListClientPortalAccessState === 'error') {
        this.cmdDeleteClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteClientPortalAccess refresh failed', refreshError);
      this.cmdDeleteClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdDeleteClientPortalAccessState = 'error';
        setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteClientPortalAccess refresh failed', refreshError);
      this.cmdDeleteClientPortalAccessState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteClientPortalAccessClientPortalAccessId = '';
    setState('ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId', '');
    this.cmdDeleteClientPortalAccessState = 'success';
    setState('ui.clientPortalAccessCatalogue.action.cmdDeleteClientPortalAccess.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteClientPortalAccess — bind UI events here */
  handleCmdDeleteClientPortalAccessClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteClientPortalAccess();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.clientPortalAccessCatalogue.qryClientPicker; inputs: (none); writes ui.clientPortalAccessCatalogue.data.qryClientPicker; status ui.clientPortalAccessCatalogue.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.qryClientPickerState = 'loading';
    setState('ui.clientPortalAccessCatalogue.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.clientPortalAccessCatalogue.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.clientPortalAccessCatalogue.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.clientPortalAccessCatalogue.action.qryClientPicker.status', 'error');
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

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId */
  setCmdCreateClientPortalAccessClientId(value: string): void {
    this.cmdCreateClientPortalAccessClientId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.clientId', value);
    const collection =
      (getState('ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess') as QryListClientPortalAccessOutput[] | null | undefined) ?? this.qryListClientPortalAccessData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListClientPortalAccessOutput) => String(row.clientId) === String(value),
      );
      if (item) {
        this.cmdCreateClientPortalAccessPlatformUserId = item.platformUserId;
        setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId', item.platformUserId);
        this.cmdCreateClientPortalAccessStatus = item.status;
        setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientPortalAccessClientId — bind UI events here */
  handleCmdCreateClientPortalAccessClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientPortalAccessClientId(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId */
  setCmdCreateClientPortalAccessPlatformUserId(value: string): void {
    this.cmdCreateClientPortalAccessPlatformUserId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.platformUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientPortalAccessPlatformUserId — bind UI events here */
  handleCmdCreateClientPortalAccessPlatformUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientPortalAccessPlatformUserId(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status */
  setCmdCreateClientPortalAccessStatus(value: string): void {
    this.cmdCreateClientPortalAccessStatus = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdCreateClientPortalAccess.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientPortalAccessStatus — bind UI events here */
  handleCmdCreateClientPortalAccessStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientPortalAccessStatus(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId */
  setCmdUpdateClientPortalAccessClientPortalAccessId(value: string): void {
    this.cmdUpdateClientPortalAccessClientPortalAccessId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientPortalAccessId', value);
    const collection =
      (getState('ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess') as QryListClientPortalAccessOutput[] | null | undefined) ?? this.qryListClientPortalAccessData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListClientPortalAccessOutput) => String(row.clientPortalAccessId) === String(value),
      );
      if (item) {
        this.cmdUpdateClientPortalAccessPlatformUserId = item.platformUserId;
        setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId', item.platformUserId);
        this.cmdUpdateClientPortalAccessStatus = item.status;
        setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientPortalAccessClientPortalAccessId — bind UI events here */
  handleCmdUpdateClientPortalAccessClientPortalAccessIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientPortalAccessClientPortalAccessId(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId */
  setCmdUpdateClientPortalAccessClientId(value: string): void {
    this.cmdUpdateClientPortalAccessClientId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.clientId', value);
    const collection =
      (getState('ui.clientPortalAccessCatalogue.data.qryListClientPortalAccess') as QryListClientPortalAccessOutput[] | null | undefined) ?? this.qryListClientPortalAccessData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListClientPortalAccessOutput) => String(row.clientId) === String(value),
      );
      if (item) {
        this.cmdUpdateClientPortalAccessPlatformUserId = item.platformUserId;
        setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId', item.platformUserId);
        this.cmdUpdateClientPortalAccessStatus = item.status;
        setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientPortalAccessClientId — bind UI events here */
  handleCmdUpdateClientPortalAccessClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientPortalAccessClientId(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId */
  setCmdUpdateClientPortalAccessPlatformUserId(value: string): void {
    this.cmdUpdateClientPortalAccessPlatformUserId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.platformUserId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientPortalAccessPlatformUserId — bind UI events here */
  handleCmdUpdateClientPortalAccessPlatformUserIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientPortalAccessPlatformUserId(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status */
  setCmdUpdateClientPortalAccessStatus(value: string): void {
    this.cmdUpdateClientPortalAccessStatus = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdUpdateClientPortalAccess.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientPortalAccessStatus — bind UI events here */
  handleCmdUpdateClientPortalAccessStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientPortalAccessStatus(value);
  }

  /** setter for state ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId */
  setCmdDeleteClientPortalAccessClientPortalAccessId(value: string): void {
    this.cmdDeleteClientPortalAccessClientPortalAccessId = value;
    setState('ui.clientPortalAccessCatalogue.input.cmdDeleteClientPortalAccess.clientPortalAccessId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteClientPortalAccessClientPortalAccessId — bind UI events here */
  handleCmdDeleteClientPortalAccessClientPortalAccessIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteClientPortalAccessClientPortalAccessId(value);
  }
}
