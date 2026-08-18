/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListClientInput,
  QryListClientOutput,
  CmdCreateClientInput,
  CmdCreateClientOutput,
  CmdUpdateClientInput,
  CmdUpdateClientOutput,
  CmdDeleteClientInput,
  CmdDeleteClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.js';
import {
  qryListClientRoute,
  cmdCreateClientRoute,
  cmdUpdateClientRoute,
  cmdDeleteClientRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.js';

export type {
  QryListClientInput,
  QryListClientOutput,
  CmdCreateClientInput,
  CmdCreateClientOutput,
  CmdUpdateClientInput,
  CmdUpdateClientOutput,
  CmdDeleteClientInput,
  CmdDeleteClientOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/clientCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.clientCatalogue.recordList.title': 'Localizar Cliente',
  'organism.clientCatalogue.qryListClient.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.empty': 'Nenhum registro encontrado',
  'intent.clientCatalogue.qryListClient.list.column.clientId.label': 'Client Id',
  'intent.clientCatalogue.qryListClient.list.column.clientName.label': 'Client Name',
  'intent.clientCatalogue.qryListClient.list.column.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.qryListClient.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdDeleteClient.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient': 'Excluir Cliente',
  'section.clientCatalogue.recordForm.title': 'Criar ou corrigir Cliente',
  'organism.clientCatalogue.cmdCreateClient.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdUpdateClient.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label': 'Contact Phone',
  'action.cmdCreateClient.success': 'Criar Cliente: OK',
  'action.cmdCreateClient.error': 'Criar Cliente: falhou',
  'action.cmdUpdateClient.success': 'Atualizar Cliente: OK',
  'action.cmdUpdateClient.error': 'Atualizar Cliente: falhou',
  'action.cmdDeleteClient.success': 'Excluir Cliente: OK',
  'action.cmdDeleteClient.error': 'Excluir Cliente: falhou',
  'section.clientCatalogue.clientWorkspace.title': 'Gestão de clientes',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.clientCatalogue.recordList.title': 'Localizar Cliente',
  'organism.clientCatalogue.qryListClient.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.empty': 'Nenhum registro encontrado',
  'intent.clientCatalogue.qryListClient.list.column.clientId.label': 'Client Id',
  'intent.clientCatalogue.qryListClient.list.column.clientName.label': 'Client Name',
  'intent.clientCatalogue.qryListClient.list.column.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.qryListClient.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdDeleteClient.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient': 'Excluir Cliente',
  'section.clientCatalogue.recordForm.title': 'Criar ou corrigir Cliente',
  'organism.clientCatalogue.cmdCreateClient.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdUpdateClient.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label': 'Contact Phone',
  'action.cmdCreateClient.success': 'Criar Cliente: OK',
  'action.cmdCreateClient.error': 'Criar Cliente: falhou',
  'action.cmdUpdateClient.success': 'Atualizar Cliente: OK',
  'action.cmdUpdateClient.error': 'Atualizar Cliente: falhou',
  'action.cmdDeleteClient.success': 'Excluir Cliente: OK',
  'action.cmdDeleteClient.error': 'Excluir Cliente: falhou',
  'section.clientCatalogue.clientWorkspace.title': 'Gestão de clientes',
};
const message_en: MessageType = {
  'section.clientCatalogue.recordList.title': 'Localizar Cliente',
  'organism.clientCatalogue.qryListClient.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.empty': 'Nenhum registro encontrado',
  'intent.clientCatalogue.qryListClient.list.column.clientId.label': 'Client Id',
  'intent.clientCatalogue.qryListClient.list.column.clientName.label': 'Client Name',
  'intent.clientCatalogue.qryListClient.list.column.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.qryListClient.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdDeleteClient.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient': 'Excluir Cliente',
  'section.clientCatalogue.recordForm.title': 'Criar ou corrigir Cliente',
  'organism.clientCatalogue.cmdCreateClient.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdUpdateClient.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label': 'Contact Phone',
  'action.cmdCreateClient.success': 'Criar Cliente: OK',
  'action.cmdCreateClient.error': 'Criar Cliente: falhou',
  'action.cmdUpdateClient.success': 'Atualizar Cliente: OK',
  'action.cmdUpdateClient.error': 'Atualizar Cliente: falhou',
  'action.cmdDeleteClient.success': 'Excluir Cliente: OK',
  'action.cmdDeleteClient.error': 'Excluir Cliente: falhou',
  'section.clientCatalogue.clientWorkspace.title': 'Gestão de clientes',
};
const message_es: MessageType = {
  'section.clientCatalogue.recordList.title': 'Localizar Cliente',
  'organism.clientCatalogue.qryListClient.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.title': 'Listar Cliente',
  'intent.clientCatalogue.qryListClient.list.empty': 'Nenhum registro encontrado',
  'intent.clientCatalogue.qryListClient.list.column.clientId.label': 'Client Id',
  'intent.clientCatalogue.qryListClient.list.column.clientName.label': 'Client Name',
  'intent.clientCatalogue.qryListClient.list.column.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.qryListClient.list.column.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdDeleteClient.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.title': 'Excluir Cliente',
  'intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient': 'Excluir Cliente',
  'section.clientCatalogue.recordForm.title': 'Criar ou corrigir Cliente',
  'organism.clientCatalogue.cmdCreateClient.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.title': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient': 'Criar Cliente',
  'intent.clientCatalogue.cmdCreateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label': 'Contact Phone',
  'organism.clientCatalogue.cmdUpdateClient.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.title': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient': 'Atualizar Cliente',
  'intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label': 'Client Name',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label': 'Contact Email',
  'intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label': 'Contact Phone',
  'action.cmdCreateClient.success': 'Criar Cliente: OK',
  'action.cmdCreateClient.error': 'Criar Cliente: falhou',
  'action.cmdUpdateClient.success': 'Atualizar Cliente: OK',
  'action.cmdUpdateClient.error': 'Atualizar Cliente: falhou',
  'action.cmdDeleteClient.success': 'Excluir Cliente: OK',
  'action.cmdDeleteClient.error': 'Excluir Cliente: falhou',
  'section.clientCatalogue.clientWorkspace.title': 'Gestão de clientes',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.clientCatalogue.status',
  'ui.clientCatalogue.action.qryListClient.status',
  'ui.clientCatalogue.data.qryListClient',
  'ui.clientCatalogue.action.cmdCreateClient.status',
  'ui.clientCatalogue.input.cmdCreateClient.clientName',
  'ui.clientCatalogue.input.cmdCreateClient.contactEmail',
  'ui.clientCatalogue.input.cmdCreateClient.contactPhone',
  'ui.clientCatalogue.output.cmdCreateClient',
  'ui.clientCatalogue.action.cmdCreateClient.error',
  'ui.clientCatalogue.action.cmdUpdateClient.status',
  'ui.clientCatalogue.input.cmdUpdateClient.clientId',
  'ui.clientCatalogue.input.cmdUpdateClient.clientName',
  'ui.clientCatalogue.input.cmdUpdateClient.contactEmail',
  'ui.clientCatalogue.input.cmdUpdateClient.contactPhone',
  'ui.clientCatalogue.output.cmdUpdateClient',
  'ui.clientCatalogue.action.cmdUpdateClient.error',
  'ui.clientCatalogue.action.cmdDeleteClient.status',
  'ui.clientCatalogue.input.cmdDeleteClient.clientId',
  'ui.clientCatalogue.output.cmdDeleteClient',
  'ui.clientCatalogue.action.cmdDeleteClient.error',
];

export class BuildFlowFsmClientCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListClientState — actionStatus, values: idle|loading|success|error */
  @property() qryListClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListClientData — queryResult, outputShape: array */
  @property() qryListClientData: QryListClientOutput[] = [];
  /** state cmdCreateClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateClientClientName — input */
  @property() cmdCreateClientClientName: string = '';
  /** state cmdCreateClientContactEmail — input */
  @property() cmdCreateClientContactEmail: string = '';
  /** state cmdCreateClientContactPhone — input */
  @property() cmdCreateClientContactPhone: string = '';
  /** state cmdCreateClientOutput — commandOutput */
  @property() cmdCreateClientOutput: CmdCreateClientOutput | null = null;
  /** state cmdCreateClientError — actionError */
  @property() cmdCreateClientError: string = '';
  /** state cmdUpdateClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateClientClientId — input */
  @property() cmdUpdateClientClientId: string = '';
  /** state cmdUpdateClientClientName — input */
  @property() cmdUpdateClientClientName: string = '';
  /** state cmdUpdateClientContactEmail — input */
  @property() cmdUpdateClientContactEmail: string = '';
  /** state cmdUpdateClientContactPhone — input */
  @property() cmdUpdateClientContactPhone: string = '';
  /** state cmdUpdateClientOutput — commandOutput */
  @property() cmdUpdateClientOutput: CmdUpdateClientOutput | null = null;
  /** state cmdUpdateClientError — actionError */
  @property() cmdUpdateClientError: string = '';
  /** state cmdDeleteClientState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteClientState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteClientClientId — input */
  @property() cmdDeleteClientClientId: string = '';
  /** state cmdDeleteClientOutput — commandOutput */
  @property() cmdDeleteClientOutput: CmdDeleteClientOutput | null = null;
  /** state cmdDeleteClientError — actionError */
  @property() cmdDeleteClientError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.clientCatalogue.status', '');
    this.initStateValue('ui.clientCatalogue.action.qryListClient.status', 'idle');
    this.initStateValue('ui.clientCatalogue.data.qryListClient', []);
    this.initStateValue('ui.clientCatalogue.action.cmdCreateClient.status', 'idle');
    this.initStateValue('ui.clientCatalogue.input.cmdCreateClient.clientName', '');
    this.initStateValue('ui.clientCatalogue.input.cmdCreateClient.contactEmail', '');
    this.initStateValue('ui.clientCatalogue.input.cmdCreateClient.contactPhone', '');
    this.initStateValue('ui.clientCatalogue.output.cmdCreateClient', null);
    this.initStateValue('ui.clientCatalogue.action.cmdCreateClient.error', '');
    this.initStateValue('ui.clientCatalogue.action.cmdUpdateClient.status', 'idle');
    this.initStateValue('ui.clientCatalogue.input.cmdUpdateClient.clientId', '');
    this.initStateValue('ui.clientCatalogue.input.cmdUpdateClient.clientName', '');
    this.initStateValue('ui.clientCatalogue.input.cmdUpdateClient.contactEmail', '');
    this.initStateValue('ui.clientCatalogue.input.cmdUpdateClient.contactPhone', '');
    this.initStateValue('ui.clientCatalogue.output.cmdUpdateClient', null);
    this.initStateValue('ui.clientCatalogue.action.cmdUpdateClient.error', '');
    this.initStateValue('ui.clientCatalogue.action.cmdDeleteClient.status', 'idle');
    this.initStateValue('ui.clientCatalogue.input.cmdDeleteClient.clientId', '');
    this.initStateValue('ui.clientCatalogue.output.cmdDeleteClient', null);
    this.initStateValue('ui.clientCatalogue.action.cmdDeleteClient.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListClient();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.qryListClient.status':
        this.qryListClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.data.qryListClient':
        this.qryListClientData = (value as QryListClientOutput[]) ?? [];
        break;
      case 'ui.clientCatalogue.action.cmdCreateClient.status':
        this.cmdCreateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.clientName':
        this.cmdCreateClientClientName = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.contactEmail':
        this.cmdCreateClientContactEmail = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.contactPhone':
        this.cmdCreateClientContactPhone = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdCreateClient':
        this.cmdCreateClientOutput = (value as CmdCreateClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdCreateClient.error':
        this.cmdCreateClientError = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.cmdUpdateClient.status':
        this.cmdUpdateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.clientId':
        this.cmdUpdateClientClientId = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.clientName':
        this.cmdUpdateClientClientName = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.contactEmail':
        this.cmdUpdateClientContactEmail = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.contactPhone':
        this.cmdUpdateClientContactPhone = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdUpdateClient':
        this.cmdUpdateClientOutput = (value as CmdUpdateClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdUpdateClient.error':
        this.cmdUpdateClientError = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.cmdDeleteClient.status':
        this.cmdDeleteClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdDeleteClient.clientId':
        this.cmdDeleteClientClientId = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdDeleteClient':
        this.cmdDeleteClientOutput = (value as CmdDeleteClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdDeleteClient.error':
        this.cmdDeleteClientError = (value as string) ?? '';
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
      case 'ui.clientCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.qryListClient.status':
        this.qryListClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.data.qryListClient':
        this.qryListClientData = (value as QryListClientOutput[]) ?? [];
        break;
      case 'ui.clientCatalogue.action.cmdCreateClient.status':
        this.cmdCreateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.clientName':
        this.cmdCreateClientClientName = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.contactEmail':
        this.cmdCreateClientContactEmail = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdCreateClient.contactPhone':
        this.cmdCreateClientContactPhone = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdCreateClient':
        this.cmdCreateClientOutput = (value as CmdCreateClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdCreateClient.error':
        this.cmdCreateClientError = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.cmdUpdateClient.status':
        this.cmdUpdateClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.clientId':
        this.cmdUpdateClientClientId = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.clientName':
        this.cmdUpdateClientClientName = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.contactEmail':
        this.cmdUpdateClientContactEmail = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.input.cmdUpdateClient.contactPhone':
        this.cmdUpdateClientContactPhone = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdUpdateClient':
        this.cmdUpdateClientOutput = (value as CmdUpdateClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdUpdateClient.error':
        this.cmdUpdateClientError = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.action.cmdDeleteClient.status':
        this.cmdDeleteClientState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientCatalogue.input.cmdDeleteClient.clientId':
        this.cmdDeleteClientClientId = (value as string) ?? '';
        break;
      case 'ui.clientCatalogue.output.cmdDeleteClient':
        this.cmdDeleteClientOutput = (value as CmdDeleteClientOutput | null) ?? null;
        break;
      case 'ui.clientCatalogue.action.cmdDeleteClient.error':
        this.cmdDeleteClientError = (value as string) ?? '';
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

  /** action qryListClient (query) — route buildFlowFsm.clientCatalogue.qryListClient; inputs: (none); writes ui.clientCatalogue.data.qryListClient; status ui.clientCatalogue.action.qryListClient.status */
  async loadQryListClient(): Promise<void> {
    this.qryListClientState = 'loading';
    setState('ui.clientCatalogue.action.qryListClient.status', 'loading');
    const params: QryListClientInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListClientOutput[]>(qryListClientRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListClientData = data;
      setState('ui.clientCatalogue.data.qryListClient', data);
      this.qryListClientState = 'success';
      setState('ui.clientCatalogue.action.qryListClient.status', 'success');
    } else {
      this.qryListClientState = 'error';
      setState('ui.clientCatalogue.action.qryListClient.status', 'error');
      if (response.error) {
        console.error('qryListClient failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListClient — bind UI events here */
  handleQryListClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListClient();
  }

  /** action cmdCreateClient (command) — route buildFlowFsm.clientCatalogue.cmdCreateClient; inputs: clientName, contactEmail, contactPhone; writes ui.clientCatalogue.output.cmdCreateClient; status ui.clientCatalogue.action.cmdCreateClient.status; feedback keys action.cmdCreateClient.success / action.cmdCreateClient.error */
  async cmdCreateClient(): Promise<void> {
    this.cmdCreateClientState = 'loading';
    setState('ui.clientCatalogue.action.cmdCreateClient.status', 'loading');
    this.cmdCreateClientError = '';
    setState('ui.clientCatalogue.action.cmdCreateClient.error', '');
    const params: CmdCreateClientInput = {
      clientName: this.cmdCreateClientClientName,
    };
    if (this.cmdCreateClientContactEmail) {
      params.contactEmail = this.cmdCreateClientContactEmail;
    }
    if (this.cmdCreateClientContactPhone) {
      params.contactPhone = this.cmdCreateClientContactPhone;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateClientOutput>(cmdCreateClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateClient.error');
      this.cmdCreateClientError = errMsg;
      setState('ui.clientCatalogue.action.cmdCreateClient.error', errMsg);
      this.cmdCreateClientState = 'error';
      setState('ui.clientCatalogue.action.cmdCreateClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateClientOutput | null = response.data ?? null;
    this.cmdCreateClientOutput = data;
    setState('ui.clientCatalogue.output.cmdCreateClient', data);
    try {
      await this.loadQryListClient();
      if (this.qryListClientState === 'error') {
        this.cmdCreateClientState = 'error';
        setState('ui.clientCatalogue.action.cmdCreateClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateClient refresh failed', refreshError);
      this.cmdCreateClientState = 'error';
      setState('ui.clientCatalogue.action.cmdCreateClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateClientClientName = '';
    setState('ui.clientCatalogue.input.cmdCreateClient.clientName', '');
    this.cmdCreateClientContactEmail = '';
    setState('ui.clientCatalogue.input.cmdCreateClient.contactEmail', '');
    this.cmdCreateClientContactPhone = '';
    setState('ui.clientCatalogue.input.cmdCreateClient.contactPhone', '');
    this.cmdCreateClientState = 'success';
    setState('ui.clientCatalogue.action.cmdCreateClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateClient — bind UI events here */
  handleCmdCreateClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateClient();
    });
  }

  /** action cmdUpdateClient (command) — route buildFlowFsm.clientCatalogue.cmdUpdateClient; inputs: clientId, clientName, contactEmail, contactPhone; writes ui.clientCatalogue.output.cmdUpdateClient; status ui.clientCatalogue.action.cmdUpdateClient.status; feedback keys action.cmdUpdateClient.success / action.cmdUpdateClient.error */
  async cmdUpdateClient(): Promise<void> {
    if (!this.cmdUpdateClientClientId) {
      this.cmdUpdateClientState = 'idle';
      setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateClientState = 'loading';
    setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'loading');
    this.cmdUpdateClientError = '';
    setState('ui.clientCatalogue.action.cmdUpdateClient.error', '');
    const params: CmdUpdateClientInput = {
      clientId: this.cmdUpdateClientClientId,
      clientName: this.cmdUpdateClientClientName,
    };
    if (this.cmdUpdateClientContactEmail) {
      params.contactEmail = this.cmdUpdateClientContactEmail;
    }
    if (this.cmdUpdateClientContactPhone) {
      params.contactPhone = this.cmdUpdateClientContactPhone;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateClientOutput>(cmdUpdateClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateClient.error');
      this.cmdUpdateClientError = errMsg;
      setState('ui.clientCatalogue.action.cmdUpdateClient.error', errMsg);
      this.cmdUpdateClientState = 'error';
      setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateClientOutput | null = response.data ?? null;
    this.cmdUpdateClientOutput = data;
    setState('ui.clientCatalogue.output.cmdUpdateClient', data);
    try {
      await this.loadQryListClient();
      if (this.qryListClientState === 'error') {
        this.cmdUpdateClientState = 'error';
        setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateClient refresh failed', refreshError);
      this.cmdUpdateClientState = 'error';
      setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateClientClientId = '';
    setState('ui.clientCatalogue.input.cmdUpdateClient.clientId', '');
    this.cmdUpdateClientClientName = '';
    setState('ui.clientCatalogue.input.cmdUpdateClient.clientName', '');
    this.cmdUpdateClientContactEmail = '';
    setState('ui.clientCatalogue.input.cmdUpdateClient.contactEmail', '');
    this.cmdUpdateClientContactPhone = '';
    setState('ui.clientCatalogue.input.cmdUpdateClient.contactPhone', '');
    this.cmdUpdateClientState = 'success';
    setState('ui.clientCatalogue.action.cmdUpdateClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateClient — bind UI events here */
  handleCmdUpdateClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateClient();
    });
  }

  /** action cmdDeleteClient (command) — route buildFlowFsm.clientCatalogue.cmdDeleteClient; inputs: clientId; writes ui.clientCatalogue.output.cmdDeleteClient; status ui.clientCatalogue.action.cmdDeleteClient.status; feedback keys action.cmdDeleteClient.success / action.cmdDeleteClient.error */
  async cmdDeleteClient(): Promise<void> {
    if (!this.cmdDeleteClientClientId) {
      this.cmdDeleteClientState = 'idle';
      setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteClientState = 'loading';
    setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'loading');
    this.cmdDeleteClientError = '';
    setState('ui.clientCatalogue.action.cmdDeleteClient.error', '');
    const params: CmdDeleteClientInput = {
      clientId: this.cmdDeleteClientClientId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteClientOutput>(cmdDeleteClientRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteClient.error');
      this.cmdDeleteClientError = errMsg;
      setState('ui.clientCatalogue.action.cmdDeleteClient.error', errMsg);
      this.cmdDeleteClientState = 'error';
      setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteClientOutput | null = response.data ?? null;
    this.cmdDeleteClientOutput = data;
    setState('ui.clientCatalogue.output.cmdDeleteClient', data);
    try {
      await this.loadQryListClient();
      if (this.qryListClientState === 'error') {
        this.cmdDeleteClientState = 'error';
        setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteClient refresh failed', refreshError);
      this.cmdDeleteClientState = 'error';
      setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteClientClientId = '';
    setState('ui.clientCatalogue.input.cmdDeleteClient.clientId', '');
    this.cmdDeleteClientState = 'success';
    setState('ui.clientCatalogue.action.cmdDeleteClient.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteClient — bind UI events here */
  handleCmdDeleteClientClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteClient();
    });
  }

  /** setter for state ui.clientCatalogue.input.cmdCreateClient.clientName */
  setCmdCreateClientClientName(value: string): void {
    this.cmdCreateClientClientName = value;
    setState('ui.clientCatalogue.input.cmdCreateClient.clientName', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientClientName — bind UI events here */
  handleCmdCreateClientClientNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientClientName(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdCreateClient.contactEmail */
  setCmdCreateClientContactEmail(value: string): void {
    this.cmdCreateClientContactEmail = value;
    setState('ui.clientCatalogue.input.cmdCreateClient.contactEmail', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientContactEmail — bind UI events here */
  handleCmdCreateClientContactEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientContactEmail(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdCreateClient.contactPhone */
  setCmdCreateClientContactPhone(value: string): void {
    this.cmdCreateClientContactPhone = value;
    setState('ui.clientCatalogue.input.cmdCreateClient.contactPhone', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateClientContactPhone — bind UI events here */
  handleCmdCreateClientContactPhoneChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateClientContactPhone(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdUpdateClient.clientId */
  setCmdUpdateClientClientId(value: string): void {
    this.cmdUpdateClientClientId = value;
    setState('ui.clientCatalogue.input.cmdUpdateClient.clientId', value);
    const collection =
      (getState('ui.clientCatalogue.data.qryListClient') as QryListClientOutput[] | null | undefined) ?? this.qryListClientData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListClientOutput) => String(row.clientId) === String(value),
      );
      if (item) {
        this.cmdUpdateClientClientName = item.clientName;
        setState('ui.clientCatalogue.input.cmdUpdateClient.clientName', item.clientName);
        this.cmdUpdateClientContactEmail = item.contactEmail;
        setState('ui.clientCatalogue.input.cmdUpdateClient.contactEmail', item.contactEmail);
        this.cmdUpdateClientContactPhone = item.contactPhone;
        setState('ui.clientCatalogue.input.cmdUpdateClient.contactPhone', item.contactPhone);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientClientId — bind UI events here */
  handleCmdUpdateClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientClientId(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdUpdateClient.clientName */
  setCmdUpdateClientClientName(value: string): void {
    this.cmdUpdateClientClientName = value;
    setState('ui.clientCatalogue.input.cmdUpdateClient.clientName', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientClientName — bind UI events here */
  handleCmdUpdateClientClientNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientClientName(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdUpdateClient.contactEmail */
  setCmdUpdateClientContactEmail(value: string): void {
    this.cmdUpdateClientContactEmail = value;
    setState('ui.clientCatalogue.input.cmdUpdateClient.contactEmail', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientContactEmail — bind UI events here */
  handleCmdUpdateClientContactEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientContactEmail(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdUpdateClient.contactPhone */
  setCmdUpdateClientContactPhone(value: string): void {
    this.cmdUpdateClientContactPhone = value;
    setState('ui.clientCatalogue.input.cmdUpdateClient.contactPhone', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateClientContactPhone — bind UI events here */
  handleCmdUpdateClientContactPhoneChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateClientContactPhone(value);
  }

  /** setter for state ui.clientCatalogue.input.cmdDeleteClient.clientId */
  setCmdDeleteClientClientId(value: string): void {
    this.cmdDeleteClientClientId = value;
    setState('ui.clientCatalogue.input.cmdDeleteClient.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteClientClientId — bind UI events here */
  handleCmdDeleteClientClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteClientClientId(value);
  }
}
