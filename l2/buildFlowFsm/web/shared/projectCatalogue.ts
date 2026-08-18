/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListProjectInput,
  QryListProjectOutput,
  CmdCreateProjectInput,
  CmdCreateProjectOutput,
  CmdUpdateProjectInput,
  CmdUpdateProjectOutput,
  CmdDeleteProjectInput,
  CmdDeleteProjectOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.js';
import {
  qryListProjectRoute,
  cmdCreateProjectRoute,
  cmdUpdateProjectRoute,
  cmdDeleteProjectRoute,
  qryClientPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.js';

export type {
  QryListProjectInput,
  QryListProjectOutput,
  CmdCreateProjectInput,
  CmdCreateProjectOutput,
  CmdUpdateProjectInput,
  CmdUpdateProjectOutput,
  CmdDeleteProjectInput,
  CmdDeleteProjectOutput,
  QryClientPickerInput,
  QryClientPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectCatalogue.recordList.title': 'Localizar obra',
  'organism.projectCatalogue.qryListProject.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Name',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Address',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir Obra',
  'section.projectCatalogue.recordForm.title': 'Criar ou corrigir obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'action.cmdCreateProject.success': 'Criar Obra: OK',
  'action.cmdCreateProject.error': 'Criar Obra: falhou',
  'action.cmdUpdateProject.success': 'Atualizar Obra: OK',
  'action.cmdUpdateProject.error': 'Atualizar Obra: falhou',
  'action.cmdDeleteProject.success': 'Excluir Obra: OK',
  'action.cmdDeleteProject.error': 'Excluir Obra: falhou',
  'section.projectCatalogue.projectWorkbench.title': 'Obras',
  'section.projectCatalogue.projectCreation.title': 'Nova obra',
  'section.projectCatalogue.projectWorkspace.title': 'Localização e manutenção de obras',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectCatalogue.recordList.title': 'Localizar obra',
  'organism.projectCatalogue.qryListProject.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Name',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Address',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir Obra',
  'section.projectCatalogue.recordForm.title': 'Criar ou corrigir obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'action.cmdCreateProject.success': 'Criar Obra: OK',
  'action.cmdCreateProject.error': 'Criar Obra: falhou',
  'action.cmdUpdateProject.success': 'Atualizar Obra: OK',
  'action.cmdUpdateProject.error': 'Atualizar Obra: falhou',
  'action.cmdDeleteProject.success': 'Excluir Obra: OK',
  'action.cmdDeleteProject.error': 'Excluir Obra: falhou',
  'section.projectCatalogue.projectWorkbench.title': 'Obras',
  'section.projectCatalogue.projectCreation.title': 'Nova obra',
  'section.projectCatalogue.projectWorkspace.title': 'Localização e manutenção de obras',
};
const message_en: MessageType = {
  'section.projectCatalogue.recordList.title': 'Localizar obra',
  'organism.projectCatalogue.qryListProject.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Name',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Address',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir Obra',
  'section.projectCatalogue.recordForm.title': 'Criar ou corrigir obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'action.cmdCreateProject.success': 'Criar Obra: OK',
  'action.cmdCreateProject.error': 'Criar Obra: falhou',
  'action.cmdUpdateProject.success': 'Atualizar Obra: OK',
  'action.cmdUpdateProject.error': 'Atualizar Obra: falhou',
  'action.cmdDeleteProject.success': 'Excluir Obra: OK',
  'action.cmdDeleteProject.error': 'Excluir Obra: falhou',
  'section.projectCatalogue.projectWorkbench.title': 'Obras',
  'section.projectCatalogue.projectCreation.title': 'Nova obra',
  'section.projectCatalogue.projectWorkspace.title': 'Localização e manutenção de obras',
};
const message_es: MessageType = {
  'section.projectCatalogue.recordList.title': 'Localizar obra',
  'organism.projectCatalogue.qryListProject.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.title': 'Listar Obra',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Project Id',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Name',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Address',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Excluir Obra',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir Obra',
  'section.projectCatalogue.recordForm.title': 'Criar ou corrigir obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Criar Obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Atualizar Obra',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Client Id',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Name',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Address',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Planned End Date',
  'organism.projectCatalogue.qryClientPicker.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Listar Cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Client Name',
  'intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label': 'Contact Email',
  'intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label': 'Contact Phone',
  'action.cmdCreateProject.success': 'Criar Obra: OK',
  'action.cmdCreateProject.error': 'Criar Obra: falhou',
  'action.cmdUpdateProject.success': 'Atualizar Obra: OK',
  'action.cmdUpdateProject.error': 'Atualizar Obra: falhou',
  'action.cmdDeleteProject.success': 'Excluir Obra: OK',
  'action.cmdDeleteProject.error': 'Excluir Obra: falhou',
  'section.projectCatalogue.projectWorkbench.title': 'Obras',
  'section.projectCatalogue.projectCreation.title': 'Nova obra',
  'section.projectCatalogue.projectWorkspace.title': 'Localização e manutenção de obras',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectCatalogue.status',
  'ui.projectCatalogue.action.qryListProject.status',
  'ui.projectCatalogue.data.qryListProject',
  'ui.projectCatalogue.action.cmdCreateProject.status',
  'ui.projectCatalogue.input.cmdCreateProject.clientId',
  'ui.projectCatalogue.input.cmdCreateProject.name',
  'ui.projectCatalogue.input.cmdCreateProject.address',
  'ui.projectCatalogue.input.cmdCreateProject.status',
  'ui.projectCatalogue.input.cmdCreateProject.authorizedBudget',
  'ui.projectCatalogue.input.cmdCreateProject.plannedStartDate',
  'ui.projectCatalogue.input.cmdCreateProject.plannedEndDate',
  'ui.projectCatalogue.output.cmdCreateProject',
  'ui.projectCatalogue.action.cmdCreateProject.error',
  'ui.projectCatalogue.action.cmdUpdateProject.status',
  'ui.projectCatalogue.input.cmdUpdateProject.projectId',
  'ui.projectCatalogue.input.cmdUpdateProject.clientId',
  'ui.projectCatalogue.input.cmdUpdateProject.name',
  'ui.projectCatalogue.input.cmdUpdateProject.address',
  'ui.projectCatalogue.input.cmdUpdateProject.status',
  'ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget',
  'ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate',
  'ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate',
  'ui.projectCatalogue.output.cmdUpdateProject',
  'ui.projectCatalogue.action.cmdUpdateProject.error',
  'ui.projectCatalogue.action.cmdDeleteProject.status',
  'ui.projectCatalogue.input.cmdDeleteProject.projectId',
  'ui.projectCatalogue.output.cmdDeleteProject',
  'ui.projectCatalogue.action.cmdDeleteProject.error',
  'ui.projectCatalogue.action.qryClientPicker.status',
  'ui.projectCatalogue.data.qryClientPicker',
];

export class BuildFlowFsmProjectCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListProjectState — actionStatus, values: idle|loading|success|error */
  @property() qryListProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListProjectData — queryResult, outputShape: array */
  @property() qryListProjectData: QryListProjectOutput[] = [];
  /** state cmdCreateProjectState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateProjectClientId — input */
  @property() cmdCreateProjectClientId: string = '';
  /** state cmdCreateProjectName — input */
  @property() cmdCreateProjectName: string = '';
  /** state cmdCreateProjectAddress — input */
  @property() cmdCreateProjectAddress: string = '';
  /** state cmdCreateProjectStatus — input */
  @property() cmdCreateProjectStatus: string = '';
  /** state cmdCreateProjectAuthorizedBudget — input */
  @property() cmdCreateProjectAuthorizedBudget: string = '';
  /** state cmdCreateProjectPlannedStartDate — input */
  @property() cmdCreateProjectPlannedStartDate: string = '';
  /** state cmdCreateProjectPlannedEndDate — input */
  @property() cmdCreateProjectPlannedEndDate: string = '';
  /** state cmdCreateProjectOutput — commandOutput */
  @property() cmdCreateProjectOutput: CmdCreateProjectOutput | null = null;
  /** state cmdCreateProjectError — actionError */
  @property() cmdCreateProjectError: string = '';
  /** state cmdUpdateProjectState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateProjectProjectId — input */
  @property() cmdUpdateProjectProjectId: string = '';
  /** state cmdUpdateProjectClientId — input */
  @property() cmdUpdateProjectClientId: string = '';
  /** state cmdUpdateProjectName — input */
  @property() cmdUpdateProjectName: string = '';
  /** state cmdUpdateProjectAddress — input */
  @property() cmdUpdateProjectAddress: string = '';
  /** state cmdUpdateProjectStatus — input */
  @property() cmdUpdateProjectStatus: string = '';
  /** state cmdUpdateProjectAuthorizedBudget — input */
  @property() cmdUpdateProjectAuthorizedBudget: string = '';
  /** state cmdUpdateProjectPlannedStartDate — input */
  @property() cmdUpdateProjectPlannedStartDate: string = '';
  /** state cmdUpdateProjectPlannedEndDate — input */
  @property() cmdUpdateProjectPlannedEndDate: string = '';
  /** state cmdUpdateProjectOutput — commandOutput */
  @property() cmdUpdateProjectOutput: CmdUpdateProjectOutput | null = null;
  /** state cmdUpdateProjectError — actionError */
  @property() cmdUpdateProjectError: string = '';
  /** state cmdDeleteProjectState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteProjectState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteProjectProjectId — input */
  @property() cmdDeleteProjectProjectId: string = '';
  /** state cmdDeleteProjectOutput — commandOutput */
  @property() cmdDeleteProjectOutput: CmdDeleteProjectOutput | null = null;
  /** state cmdDeleteProjectError — actionError */
  @property() cmdDeleteProjectError: string = '';
  /** state qryClientPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryClientPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryClientPickerData — queryResult, outputShape: array */
  @property() qryClientPickerData: QryClientPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectCatalogue.status', '');
    this.initStateValue('ui.projectCatalogue.action.qryListProject.status', 'idle');
    this.initStateValue('ui.projectCatalogue.data.qryListProject', []);
    this.initStateValue('ui.projectCatalogue.action.cmdCreateProject.status', 'idle');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.clientId', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.name', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.address', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.status', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.authorizedBudget', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.plannedStartDate', '');
    this.initStateValue('ui.projectCatalogue.input.cmdCreateProject.plannedEndDate', '');
    this.initStateValue('ui.projectCatalogue.output.cmdCreateProject', null);
    this.initStateValue('ui.projectCatalogue.action.cmdCreateProject.error', '');
    this.initStateValue('ui.projectCatalogue.action.cmdUpdateProject.status', 'idle');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.projectId', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.clientId', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.name', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.address', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.status', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate', '');
    this.initStateValue('ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate', '');
    this.initStateValue('ui.projectCatalogue.output.cmdUpdateProject', null);
    this.initStateValue('ui.projectCatalogue.action.cmdUpdateProject.error', '');
    this.initStateValue('ui.projectCatalogue.action.cmdDeleteProject.status', 'idle');
    this.initStateValue('ui.projectCatalogue.input.cmdDeleteProject.projectId', '');
    this.initStateValue('ui.projectCatalogue.output.cmdDeleteProject', null);
    this.initStateValue('ui.projectCatalogue.action.cmdDeleteProject.error', '');
    this.initStateValue('ui.projectCatalogue.action.qryClientPicker.status', 'idle');
    this.initStateValue('ui.projectCatalogue.data.qryClientPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListProject();
    void this.loadQryClientPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.qryListProject.status':
        this.qryListProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.data.qryListProject':
        this.qryListProjectData = (value as QryListProjectOutput[]) ?? [];
        break;
      case 'ui.projectCatalogue.action.cmdCreateProject.status':
        this.cmdCreateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.clientId':
        this.cmdCreateProjectClientId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.name':
        this.cmdCreateProjectName = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.address':
        this.cmdCreateProjectAddress = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.status':
        this.cmdCreateProjectStatus = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.authorizedBudget':
        this.cmdCreateProjectAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.plannedStartDate':
        this.cmdCreateProjectPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.plannedEndDate':
        this.cmdCreateProjectPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdCreateProject':
        this.cmdCreateProjectOutput = (value as CmdCreateProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdCreateProject.error':
        this.cmdCreateProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.cmdUpdateProject.status':
        this.cmdUpdateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.projectId':
        this.cmdUpdateProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.clientId':
        this.cmdUpdateProjectClientId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.name':
        this.cmdUpdateProjectName = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.address':
        this.cmdUpdateProjectAddress = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.status':
        this.cmdUpdateProjectStatus = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget':
        this.cmdUpdateProjectAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate':
        this.cmdUpdateProjectPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate':
        this.cmdUpdateProjectPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdUpdateProject':
        this.cmdUpdateProjectOutput = (value as CmdUpdateProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdUpdateProject.error':
        this.cmdUpdateProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.cmdDeleteProject.status':
        this.cmdDeleteProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdDeleteProject.projectId':
        this.cmdDeleteProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdDeleteProject':
        this.cmdDeleteProjectOutput = (value as CmdDeleteProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdDeleteProject.error':
        this.cmdDeleteProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.data.qryClientPicker':
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
      case 'ui.projectCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.qryListProject.status':
        this.qryListProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.data.qryListProject':
        this.qryListProjectData = (value as QryListProjectOutput[]) ?? [];
        break;
      case 'ui.projectCatalogue.action.cmdCreateProject.status':
        this.cmdCreateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.clientId':
        this.cmdCreateProjectClientId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.name':
        this.cmdCreateProjectName = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.address':
        this.cmdCreateProjectAddress = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.status':
        this.cmdCreateProjectStatus = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.authorizedBudget':
        this.cmdCreateProjectAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.plannedStartDate':
        this.cmdCreateProjectPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdCreateProject.plannedEndDate':
        this.cmdCreateProjectPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdCreateProject':
        this.cmdCreateProjectOutput = (value as CmdCreateProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdCreateProject.error':
        this.cmdCreateProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.cmdUpdateProject.status':
        this.cmdUpdateProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.projectId':
        this.cmdUpdateProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.clientId':
        this.cmdUpdateProjectClientId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.name':
        this.cmdUpdateProjectName = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.address':
        this.cmdUpdateProjectAddress = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.status':
        this.cmdUpdateProjectStatus = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget':
        this.cmdUpdateProjectAuthorizedBudget = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate':
        this.cmdUpdateProjectPlannedStartDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate':
        this.cmdUpdateProjectPlannedEndDate = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdUpdateProject':
        this.cmdUpdateProjectOutput = (value as CmdUpdateProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdUpdateProject.error':
        this.cmdUpdateProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.cmdDeleteProject.status':
        this.cmdDeleteProjectState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.input.cmdDeleteProject.projectId':
        this.cmdDeleteProjectProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.output.cmdDeleteProject':
        this.cmdDeleteProjectOutput = (value as CmdDeleteProjectOutput | null) ?? null;
        break;
      case 'ui.projectCatalogue.action.cmdDeleteProject.error':
        this.cmdDeleteProjectError = (value as string) ?? '';
        break;
      case 'ui.projectCatalogue.action.qryClientPicker.status':
        this.qryClientPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCatalogue.data.qryClientPicker':
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

  /** action qryListProject (query) — route buildFlowFsm.projectCatalogue.qryListProject; inputs: (none); writes ui.projectCatalogue.data.qryListProject; status ui.projectCatalogue.action.qryListProject.status */
  async loadQryListProject(): Promise<void> {
    this.qryListProjectState = 'loading';
    setState('ui.projectCatalogue.action.qryListProject.status', 'loading');
    const params: QryListProjectInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListProjectOutput[]>(qryListProjectRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListProjectData = data;
      setState('ui.projectCatalogue.data.qryListProject', data);
      this.qryListProjectState = 'success';
      setState('ui.projectCatalogue.action.qryListProject.status', 'success');
    } else {
      this.qryListProjectState = 'error';
      setState('ui.projectCatalogue.action.qryListProject.status', 'error');
      if (response.error) {
        console.error('qryListProject failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListProject — bind UI events here */
  handleQryListProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListProject();
  }

  /** action cmdCreateProject (command) — route buildFlowFsm.projectCatalogue.cmdCreateProject; inputs: clientId, name, address, status, authorizedBudget, plannedStartDate, plannedEndDate; writes ui.projectCatalogue.output.cmdCreateProject; status ui.projectCatalogue.action.cmdCreateProject.status; feedback keys action.cmdCreateProject.success / action.cmdCreateProject.error */
  async cmdCreateProject(): Promise<void> {
    this.cmdCreateProjectState = 'loading';
    setState('ui.projectCatalogue.action.cmdCreateProject.status', 'loading');
    this.cmdCreateProjectError = '';
    setState('ui.projectCatalogue.action.cmdCreateProject.error', '');
    const authorizedBudgetNum = Number(this.cmdCreateProjectAuthorizedBudget);
    const params: CmdCreateProjectInput = {
      clientId: this.cmdCreateProjectClientId,
      name: this.cmdCreateProjectName,
      address: this.cmdCreateProjectAddress,
      status: this.cmdCreateProjectStatus,
      authorizedBudget: Number.isNaN(authorizedBudgetNum) ? 0 : authorizedBudgetNum,
      plannedStartDate: this.cmdCreateProjectPlannedStartDate,
      plannedEndDate: this.cmdCreateProjectPlannedEndDate,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateProjectOutput>(cmdCreateProjectRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateProject.error');
      this.cmdCreateProjectError = errMsg;
      setState('ui.projectCatalogue.action.cmdCreateProject.error', errMsg);
      this.cmdCreateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdCreateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateProjectOutput | null = response.data ?? null;
    this.cmdCreateProjectOutput = data;
    setState('ui.projectCatalogue.output.cmdCreateProject', data);
    try {
      await this.loadQryListProject();
      if (this.qryListProjectState === 'error') {
        this.cmdCreateProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdCreateProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateProject refresh failed', refreshError);
      this.cmdCreateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdCreateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdCreateProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdCreateProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateProject refresh failed', refreshError);
      this.cmdCreateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdCreateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateProjectClientId = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.clientId', '');
    this.cmdCreateProjectName = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.name', '');
    this.cmdCreateProjectAddress = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.address', '');
    this.cmdCreateProjectStatus = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.status', '');
    this.cmdCreateProjectAuthorizedBudget = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.authorizedBudget', '');
    this.cmdCreateProjectPlannedStartDate = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.plannedStartDate', '');
    this.cmdCreateProjectPlannedEndDate = '';
    setState('ui.projectCatalogue.input.cmdCreateProject.plannedEndDate', '');
    this.cmdCreateProjectState = 'success';
    setState('ui.projectCatalogue.action.cmdCreateProject.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateProject — bind UI events here */
  handleCmdCreateProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateProject();
    });
  }

  /** action cmdUpdateProject (command) — route buildFlowFsm.projectCatalogue.cmdUpdateProject; inputs: projectId, clientId, name, address, status, authorizedBudget, plannedStartDate, plannedEndDate; writes ui.projectCatalogue.output.cmdUpdateProject; status ui.projectCatalogue.action.cmdUpdateProject.status; feedback keys action.cmdUpdateProject.success / action.cmdUpdateProject.error */
  async cmdUpdateProject(): Promise<void> {
    if (!this.cmdUpdateProjectProjectId) {
      this.cmdUpdateProjectState = 'idle';
      setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateProjectState = 'loading';
    setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'loading');
    this.cmdUpdateProjectError = '';
    setState('ui.projectCatalogue.action.cmdUpdateProject.error', '');
    const authorizedBudgetNum = Number(this.cmdUpdateProjectAuthorizedBudget);
    const params: CmdUpdateProjectInput = {
      projectId: this.cmdUpdateProjectProjectId,
      clientId: this.cmdUpdateProjectClientId,
      name: this.cmdUpdateProjectName,
      address: this.cmdUpdateProjectAddress,
      status: this.cmdUpdateProjectStatus,
      authorizedBudget: Number.isNaN(authorizedBudgetNum) ? 0 : authorizedBudgetNum,
      plannedStartDate: this.cmdUpdateProjectPlannedStartDate,
      plannedEndDate: this.cmdUpdateProjectPlannedEndDate,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateProjectOutput>(cmdUpdateProjectRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateProject.error');
      this.cmdUpdateProjectError = errMsg;
      setState('ui.projectCatalogue.action.cmdUpdateProject.error', errMsg);
      this.cmdUpdateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateProjectOutput | null = response.data ?? null;
    this.cmdUpdateProjectOutput = data;
    setState('ui.projectCatalogue.output.cmdUpdateProject', data);
    try {
      await this.loadQryListProject();
      if (this.qryListProjectState === 'error') {
        this.cmdUpdateProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateProject refresh failed', refreshError);
      this.cmdUpdateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdUpdateProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateProject refresh failed', refreshError);
      this.cmdUpdateProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateProjectProjectId = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.projectId', '');
    this.cmdUpdateProjectClientId = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.clientId', '');
    this.cmdUpdateProjectName = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.name', '');
    this.cmdUpdateProjectAddress = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.address', '');
    this.cmdUpdateProjectStatus = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.status', '');
    this.cmdUpdateProjectAuthorizedBudget = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget', '');
    this.cmdUpdateProjectPlannedStartDate = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate', '');
    this.cmdUpdateProjectPlannedEndDate = '';
    setState('ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate', '');
    this.cmdUpdateProjectState = 'success';
    setState('ui.projectCatalogue.action.cmdUpdateProject.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateProject — bind UI events here */
  handleCmdUpdateProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateProject();
    });
  }

  /** action cmdDeleteProject (command) — route buildFlowFsm.projectCatalogue.cmdDeleteProject; inputs: projectId; writes ui.projectCatalogue.output.cmdDeleteProject; status ui.projectCatalogue.action.cmdDeleteProject.status; feedback keys action.cmdDeleteProject.success / action.cmdDeleteProject.error */
  async cmdDeleteProject(): Promise<void> {
    if (!this.cmdDeleteProjectProjectId) {
      this.cmdDeleteProjectState = 'idle';
      setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteProjectState = 'loading';
    setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'loading');
    this.cmdDeleteProjectError = '';
    setState('ui.projectCatalogue.action.cmdDeleteProject.error', '');
    const params: CmdDeleteProjectInput = {
      projectId: this.cmdDeleteProjectProjectId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteProjectOutput>(cmdDeleteProjectRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteProject.error');
      this.cmdDeleteProjectError = errMsg;
      setState('ui.projectCatalogue.action.cmdDeleteProject.error', errMsg);
      this.cmdDeleteProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteProjectOutput | null = response.data ?? null;
    this.cmdDeleteProjectOutput = data;
    setState('ui.projectCatalogue.output.cmdDeleteProject', data);
    try {
      await this.loadQryListProject();
      if (this.qryListProjectState === 'error') {
        this.cmdDeleteProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteProject refresh failed', refreshError);
      this.cmdDeleteProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryClientPicker();
      if (this.qryClientPickerState === 'error') {
        this.cmdDeleteProjectState = 'error';
        setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteProject refresh failed', refreshError);
      this.cmdDeleteProjectState = 'error';
      setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteProjectProjectId = '';
    setState('ui.projectCatalogue.input.cmdDeleteProject.projectId', '');
    this.cmdDeleteProjectState = 'success';
    setState('ui.projectCatalogue.action.cmdDeleteProject.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteProject — bind UI events here */
  handleCmdDeleteProjectClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteProject();
    });
  }

  /** action qryClientPicker (query) — route buildFlowFsm.projectCatalogue.qryClientPicker; inputs: (none); writes ui.projectCatalogue.data.qryClientPicker; status ui.projectCatalogue.action.qryClientPicker.status */
  async loadQryClientPicker(): Promise<void> {
    this.qryClientPickerState = 'loading';
    setState('ui.projectCatalogue.action.qryClientPicker.status', 'loading');
    const params: QryClientPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryClientPickerOutput[]>(qryClientPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryClientPickerData = data;
      setState('ui.projectCatalogue.data.qryClientPicker', data);
      this.qryClientPickerState = 'success';
      setState('ui.projectCatalogue.action.qryClientPicker.status', 'success');
    } else {
      this.qryClientPickerState = 'error';
      setState('ui.projectCatalogue.action.qryClientPicker.status', 'error');
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

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.clientId */
  setCmdCreateProjectClientId(value: string): void {
    this.cmdCreateProjectClientId = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectClientId — bind UI events here */
  handleCmdCreateProjectClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectClientId(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.name */
  setCmdCreateProjectName(value: string): void {
    this.cmdCreateProjectName = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.name', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectName — bind UI events here */
  handleCmdCreateProjectNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectName(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.address */
  setCmdCreateProjectAddress(value: string): void {
    this.cmdCreateProjectAddress = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.address', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectAddress — bind UI events here */
  handleCmdCreateProjectAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectAddress(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.status */
  setCmdCreateProjectStatus(value: string): void {
    this.cmdCreateProjectStatus = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectStatus — bind UI events here */
  handleCmdCreateProjectStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectStatus(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.authorizedBudget */
  setCmdCreateProjectAuthorizedBudget(value: string): void {
    this.cmdCreateProjectAuthorizedBudget = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.authorizedBudget', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectAuthorizedBudget — bind UI events here */
  handleCmdCreateProjectAuthorizedBudgetChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectAuthorizedBudget(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.plannedStartDate */
  setCmdCreateProjectPlannedStartDate(value: string): void {
    this.cmdCreateProjectPlannedStartDate = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.plannedStartDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectPlannedStartDate — bind UI events here */
  handleCmdCreateProjectPlannedStartDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectPlannedStartDate(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdCreateProject.plannedEndDate */
  setCmdCreateProjectPlannedEndDate(value: string): void {
    this.cmdCreateProjectPlannedEndDate = value;
    setState('ui.projectCatalogue.input.cmdCreateProject.plannedEndDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectPlannedEndDate — bind UI events here */
  handleCmdCreateProjectPlannedEndDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectPlannedEndDate(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.projectId */
  setCmdUpdateProjectProjectId(value: string): void {
    this.cmdUpdateProjectProjectId = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.projectId', value);
    const collection =
      (getState('ui.projectCatalogue.data.qryListProject') as QryListProjectOutput[] | null | undefined) ?? this.qryListProjectData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListProjectOutput) => String(row.projectId) === String(value),
      );
      if (item) {
        this.cmdUpdateProjectClientId = item.clientId;
        setState('ui.projectCatalogue.input.cmdUpdateProject.clientId', item.clientId);
        this.cmdUpdateProjectName = item.name;
        setState('ui.projectCatalogue.input.cmdUpdateProject.name', item.name);
        this.cmdUpdateProjectAddress = item.address;
        setState('ui.projectCatalogue.input.cmdUpdateProject.address', item.address);
        this.cmdUpdateProjectStatus = item.status;
        setState('ui.projectCatalogue.input.cmdUpdateProject.status', item.status);
        this.cmdUpdateProjectAuthorizedBudget = String(item.authorizedBudget);
        setState('ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget', String(item.authorizedBudget));
        this.cmdUpdateProjectPlannedStartDate = item.plannedStartDate;
        setState('ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate', item.plannedStartDate);
        this.cmdUpdateProjectPlannedEndDate = item.plannedEndDate;
        setState('ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate', item.plannedEndDate);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectProjectId — bind UI events here */
  handleCmdUpdateProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectProjectId(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.clientId */
  setCmdUpdateProjectClientId(value: string): void {
    this.cmdUpdateProjectClientId = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectClientId — bind UI events here */
  handleCmdUpdateProjectClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectClientId(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.name */
  setCmdUpdateProjectName(value: string): void {
    this.cmdUpdateProjectName = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.name', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectName — bind UI events here */
  handleCmdUpdateProjectNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectName(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.address */
  setCmdUpdateProjectAddress(value: string): void {
    this.cmdUpdateProjectAddress = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.address', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectAddress — bind UI events here */
  handleCmdUpdateProjectAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectAddress(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.status */
  setCmdUpdateProjectStatus(value: string): void {
    this.cmdUpdateProjectStatus = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectStatus — bind UI events here */
  handleCmdUpdateProjectStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectStatus(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget */
  setCmdUpdateProjectAuthorizedBudget(value: string): void {
    this.cmdUpdateProjectAuthorizedBudget = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectAuthorizedBudget — bind UI events here */
  handleCmdUpdateProjectAuthorizedBudgetChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectAuthorizedBudget(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate */
  setCmdUpdateProjectPlannedStartDate(value: string): void {
    this.cmdUpdateProjectPlannedStartDate = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectPlannedStartDate — bind UI events here */
  handleCmdUpdateProjectPlannedStartDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectPlannedStartDate(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate */
  setCmdUpdateProjectPlannedEndDate(value: string): void {
    this.cmdUpdateProjectPlannedEndDate = value;
    setState('ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectPlannedEndDate — bind UI events here */
  handleCmdUpdateProjectPlannedEndDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectPlannedEndDate(value);
  }

  /** setter for state ui.projectCatalogue.input.cmdDeleteProject.projectId */
  setCmdDeleteProjectProjectId(value: string): void {
    this.cmdDeleteProjectProjectId = value;
    setState('ui.projectCatalogue.input.cmdDeleteProject.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteProjectProjectId — bind UI events here */
  handleCmdDeleteProjectProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteProjectProjectId(value);
  }
}
