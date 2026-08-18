/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  QryListProjectCoordinationAssignmentInput,
  QryListProjectCoordinationAssignmentOutput,
  CmdCreateProjectCoordinationAssignmentInput,
  CmdCreateProjectCoordinationAssignmentOutput,
  CmdUpdateProjectCoordinationAssignmentInput,
  CmdUpdateProjectCoordinationAssignmentOutput,
  CmdDeleteProjectCoordinationAssignmentInput,
  CmdDeleteProjectCoordinationAssignmentOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.js';
import {
  qryListProjectCoordinationAssignmentRoute,
  cmdCreateProjectCoordinationAssignmentRoute,
  cmdUpdateProjectCoordinationAssignmentRoute,
  cmdDeleteProjectCoordinationAssignmentRoute,
  qryProjectPickerRoute,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.js';

export type {
  QryListProjectCoordinationAssignmentInput,
  QryListProjectCoordinationAssignmentOutput,
  CmdCreateProjectCoordinationAssignmentInput,
  CmdCreateProjectCoordinationAssignmentOutput,
  CmdUpdateProjectCoordinationAssignmentInput,
  CmdUpdateProjectCoordinationAssignmentOutput,
  CmdDeleteProjectCoordinationAssignmentInput,
  CmdDeleteProjectCoordinationAssignmentOutput,
  QryProjectPickerInput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.js';

/// **collab_i18n_start**
const message_pt = {
  'section.projectCoordinationAssignmentCatalogue.recordList.title': 'Localização de atribuições',
  'organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment': 'Excluir Atribuição de coordenação da obra',
  'section.projectCoordinationAssignmentCatalogue.recordForm.title': 'Criação e correção da atribuição',
  'organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'action.cmdCreateProjectCoordinationAssignment.success': 'Criar Atribuição de coordenação da obra: OK',
  'action.cmdCreateProjectCoordinationAssignment.error': 'Criar Atribuição de coordenação da obra: falhou',
  'action.cmdUpdateProjectCoordinationAssignment.success': 'Atualizar Atribuição de coordenação da obra: OK',
  'action.cmdUpdateProjectCoordinationAssignment.error': 'Atualizar Atribuição de coordenação da obra: falhou',
  'action.cmdDeleteProjectCoordinationAssignment.success': 'Excluir Atribuição de coordenação da obra: OK',
  'action.cmdDeleteProjectCoordinationAssignment.error': 'Excluir Atribuição de coordenação da obra: falhou',
  'section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title': 'Atribuições de coordenação',
};
export type MessageType = typeof message_pt;
const message_pt_br: MessageType = {
  'section.projectCoordinationAssignmentCatalogue.recordList.title': 'Localização de atribuições',
  'organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment': 'Excluir Atribuição de coordenação da obra',
  'section.projectCoordinationAssignmentCatalogue.recordForm.title': 'Criação e correção da atribuição',
  'organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'action.cmdCreateProjectCoordinationAssignment.success': 'Criar Atribuição de coordenação da obra: OK',
  'action.cmdCreateProjectCoordinationAssignment.error': 'Criar Atribuição de coordenação da obra: falhou',
  'action.cmdUpdateProjectCoordinationAssignment.success': 'Atualizar Atribuição de coordenação da obra: OK',
  'action.cmdUpdateProjectCoordinationAssignment.error': 'Atualizar Atribuição de coordenação da obra: falhou',
  'action.cmdDeleteProjectCoordinationAssignment.success': 'Excluir Atribuição de coordenação da obra: OK',
  'action.cmdDeleteProjectCoordinationAssignment.error': 'Excluir Atribuição de coordenação da obra: falhou',
  'section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title': 'Atribuições de coordenação',
};
const message_en: MessageType = {
  'section.projectCoordinationAssignmentCatalogue.recordList.title': 'Localização de atribuições',
  'organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment': 'Excluir Atribuição de coordenação da obra',
  'section.projectCoordinationAssignmentCatalogue.recordForm.title': 'Criação e correção da atribuição',
  'organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'action.cmdCreateProjectCoordinationAssignment.success': 'Criar Atribuição de coordenação da obra: OK',
  'action.cmdCreateProjectCoordinationAssignment.error': 'Criar Atribuição de coordenação da obra: falhou',
  'action.cmdUpdateProjectCoordinationAssignment.success': 'Atualizar Atribuição de coordenação da obra: OK',
  'action.cmdUpdateProjectCoordinationAssignment.error': 'Atualizar Atribuição de coordenação da obra: falhou',
  'action.cmdDeleteProjectCoordinationAssignment.success': 'Excluir Atribuição de coordenação da obra: OK',
  'action.cmdDeleteProjectCoordinationAssignment.error': 'Excluir Atribuição de coordenação da obra: falhou',
  'section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title': 'Atribuições de coordenação',
};
const message_es: MessageType = {
  'section.projectCoordinationAssignmentCatalogue.recordList.title': 'Localização de atribuições',
  'organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title': 'Listar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label': 'Project Coordination Assignment Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title': 'Excluir Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment': 'Excluir Atribuição de coordenação da obra',
  'section.projectCoordinationAssignmentCatalogue.recordForm.title': 'Criação e correção da atribuição',
  'organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title': 'Listar Obra',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty': 'Nenhum registro encontrado',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label': 'Project Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label': 'Client Id',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label': 'Name',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label': 'Address',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label': 'Status',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label': 'Authorized Budget',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label': 'Planned Start Date',
  'intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label': 'Planned End Date',
  'organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment': 'Criar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment': 'Atualizar Atribuição de coordenação da obra',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label': 'Field Coordinator Id',
  'intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label': 'Status',
  'action.cmdCreateProjectCoordinationAssignment.success': 'Criar Atribuição de coordenação da obra: OK',
  'action.cmdCreateProjectCoordinationAssignment.error': 'Criar Atribuição de coordenação da obra: falhou',
  'action.cmdUpdateProjectCoordinationAssignment.success': 'Atualizar Atribuição de coordenação da obra: OK',
  'action.cmdUpdateProjectCoordinationAssignment.error': 'Atualizar Atribuição de coordenação da obra: falhou',
  'action.cmdDeleteProjectCoordinationAssignment.success': 'Excluir Atribuição de coordenação da obra: OK',
  'action.cmdDeleteProjectCoordinationAssignment.error': 'Excluir Atribuição de coordenação da obra: falhou',
  'section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title': 'Atribuições de coordenação',
};
export const messages: { [key: string]: MessageType } = { 'pt': message_pt, 'pt-br': message_pt_br, 'en': message_en, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectCoordinationAssignmentCatalogue.status',
  'ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status',
  'ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId',
  'ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment',
  'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error',
  'ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status',
  'ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker',
];

export class BuildFlowFsmProjectCoordinationAssignmentCatalogueBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state qryListProjectCoordinationAssignmentState — actionStatus, values: idle|loading|success|error */
  @property() qryListProjectCoordinationAssignmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryListProjectCoordinationAssignmentData — queryResult, outputShape: array */
  @property() qryListProjectCoordinationAssignmentData: QryListProjectCoordinationAssignmentOutput[] = [];
  /** state cmdCreateProjectCoordinationAssignmentState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateProjectCoordinationAssignmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateProjectCoordinationAssignmentProjectId — input */
  @property() cmdCreateProjectCoordinationAssignmentProjectId: string = '';
  /** state cmdCreateProjectCoordinationAssignmentFieldCoordinatorId — input */
  @property() cmdCreateProjectCoordinationAssignmentFieldCoordinatorId: string = '';
  /** state cmdCreateProjectCoordinationAssignmentStatus — input */
  @property() cmdCreateProjectCoordinationAssignmentStatus: string = '';
  /** state cmdCreateProjectCoordinationAssignmentOutput — commandOutput */
  @property() cmdCreateProjectCoordinationAssignmentOutput: CmdCreateProjectCoordinationAssignmentOutput | null = null;
  /** state cmdCreateProjectCoordinationAssignmentError — actionError */
  @property() cmdCreateProjectCoordinationAssignmentError: string = '';
  /** state cmdUpdateProjectCoordinationAssignmentState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateProjectCoordinationAssignmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId — input */
  @property() cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId: string = '';
  /** state cmdUpdateProjectCoordinationAssignmentProjectId — input */
  @property() cmdUpdateProjectCoordinationAssignmentProjectId: string = '';
  /** state cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId — input */
  @property() cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId: string = '';
  /** state cmdUpdateProjectCoordinationAssignmentStatus — input */
  @property() cmdUpdateProjectCoordinationAssignmentStatus: string = '';
  /** state cmdUpdateProjectCoordinationAssignmentOutput — commandOutput */
  @property() cmdUpdateProjectCoordinationAssignmentOutput: CmdUpdateProjectCoordinationAssignmentOutput | null = null;
  /** state cmdUpdateProjectCoordinationAssignmentError — actionError */
  @property() cmdUpdateProjectCoordinationAssignmentError: string = '';
  /** state cmdDeleteProjectCoordinationAssignmentState — actionStatus, values: idle|loading|success|error */
  @property() cmdDeleteProjectCoordinationAssignmentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId — input */
  @property() cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId: string = '';
  /** state cmdDeleteProjectCoordinationAssignmentOutput — commandOutput */
  @property() cmdDeleteProjectCoordinationAssignmentOutput: CmdDeleteProjectCoordinationAssignmentOutput | null = null;
  /** state cmdDeleteProjectCoordinationAssignmentError — actionError */
  @property() cmdDeleteProjectCoordinationAssignmentError: string = '';
  /** state qryProjectPickerState — actionStatus, values: idle|loading|success|error */
  @property() qryProjectPickerState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state qryProjectPickerData — queryResult, outputShape: array */
  @property() qryProjectPickerData: QryProjectPickerOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.status', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status', 'idle');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment', []);
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'idle');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment', null);
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'idle');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment', null);
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'idle');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment', null);
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error', '');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status', 'idle');
    this.initStateValue('ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker', []);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadQryListProjectCoordinationAssignment();
    void this.loadQryProjectPicker();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectCoordinationAssignmentCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status':
        this.qryListProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment':
        this.qryListProjectCoordinationAssignmentData = (value as QryListProjectCoordinationAssignmentOutput[]) ?? [];
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status':
        this.cmdCreateProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId':
        this.cmdCreateProjectCoordinationAssignmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId':
        this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status':
        this.cmdCreateProjectCoordinationAssignmentStatus = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment':
        this.cmdCreateProjectCoordinationAssignmentOutput = (value as CmdCreateProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error':
        this.cmdCreateProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status':
        this.cmdUpdateProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId':
        this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId':
        this.cmdUpdateProjectCoordinationAssignmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId':
        this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status':
        this.cmdUpdateProjectCoordinationAssignmentStatus = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment':
        this.cmdUpdateProjectCoordinationAssignmentOutput = (value as CmdUpdateProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error':
        this.cmdUpdateProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status':
        this.cmdDeleteProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId':
        this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment':
        this.cmdDeleteProjectCoordinationAssignmentOutput = (value as CmdDeleteProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error':
        this.cmdDeleteProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker':
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
      case 'ui.projectCoordinationAssignmentCatalogue.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status':
        this.qryListProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment':
        this.qryListProjectCoordinationAssignmentData = (value as QryListProjectCoordinationAssignmentOutput[]) ?? [];
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status':
        this.cmdCreateProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId':
        this.cmdCreateProjectCoordinationAssignmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId':
        this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status':
        this.cmdCreateProjectCoordinationAssignmentStatus = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment':
        this.cmdCreateProjectCoordinationAssignmentOutput = (value as CmdCreateProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error':
        this.cmdCreateProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status':
        this.cmdUpdateProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId':
        this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId':
        this.cmdUpdateProjectCoordinationAssignmentProjectId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId':
        this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status':
        this.cmdUpdateProjectCoordinationAssignmentStatus = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment':
        this.cmdUpdateProjectCoordinationAssignmentOutput = (value as CmdUpdateProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error':
        this.cmdUpdateProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status':
        this.cmdDeleteProjectCoordinationAssignmentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId':
        this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment':
        this.cmdDeleteProjectCoordinationAssignmentOutput = (value as CmdDeleteProjectCoordinationAssignmentOutput | null) ?? null;
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error':
        this.cmdDeleteProjectCoordinationAssignmentError = (value as string) ?? '';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status':
        this.qryProjectPickerState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker':
        this.qryProjectPickerData = (value as QryProjectPickerOutput[]) ?? [];
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

  /** action qryListProjectCoordinationAssignment (query) — route buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment; inputs: (none); writes ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment; status ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status */
  async loadQryListProjectCoordinationAssignment(): Promise<void> {
    this.qryListProjectCoordinationAssignmentState = 'loading';
    setState('ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status', 'loading');
    const params: QryListProjectCoordinationAssignmentInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryListProjectCoordinationAssignmentOutput[]>(qryListProjectCoordinationAssignmentRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryListProjectCoordinationAssignmentData = data;
      setState('ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment', data);
      this.qryListProjectCoordinationAssignmentState = 'success';
      setState('ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status', 'success');
    } else {
      this.qryListProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status', 'error');
      if (response.error) {
        console.error('qryListProjectCoordinationAssignment failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action qryListProjectCoordinationAssignment — bind UI events here */
  handleQryListProjectCoordinationAssignmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadQryListProjectCoordinationAssignment();
  }

  /** action cmdCreateProjectCoordinationAssignment (command) — route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment; inputs: projectId, fieldCoordinatorId, status; writes ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment; status ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status; feedback keys action.cmdCreateProjectCoordinationAssignment.success / action.cmdCreateProjectCoordinationAssignment.error */
  async cmdCreateProjectCoordinationAssignment(): Promise<void> {
    if (!this.cmdCreateProjectCoordinationAssignmentProjectId) {
      this.cmdCreateProjectCoordinationAssignmentState = 'idle';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateProjectCoordinationAssignmentState = 'loading';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'loading');
    this.cmdCreateProjectCoordinationAssignmentError = '';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error', '');
    const params: CmdCreateProjectCoordinationAssignmentInput = {
      projectId: this.cmdCreateProjectCoordinationAssignmentProjectId,
      fieldCoordinatorId: this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId,
      status: this.cmdCreateProjectCoordinationAssignmentStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateProjectCoordinationAssignmentOutput>(cmdCreateProjectCoordinationAssignmentRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateProjectCoordinationAssignment.error');
      this.cmdCreateProjectCoordinationAssignmentError = errMsg;
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error', errMsg);
      this.cmdCreateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateProjectCoordinationAssignmentOutput | null = response.data ?? null;
    this.cmdCreateProjectCoordinationAssignmentOutput = data;
    setState('ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment', data);
    try {
      await this.loadQryListProjectCoordinationAssignment();
      if (this.qryListProjectCoordinationAssignmentState === 'error') {
        this.cmdCreateProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdCreateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdCreateProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdCreateProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdCreateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdCreateProjectCoordinationAssignmentProjectId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId', '');
    this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId', '');
    this.cmdCreateProjectCoordinationAssignmentStatus = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status', '');
    this.cmdCreateProjectCoordinationAssignmentState = 'success';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateProjectCoordinationAssignment — bind UI events here */
  handleCmdCreateProjectCoordinationAssignmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateProjectCoordinationAssignment();
    });
  }

  /** action cmdUpdateProjectCoordinationAssignment (command) — route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment; inputs: projectCoordinationAssignmentId, projectId, fieldCoordinatorId, status; writes ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment; status ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status; feedback keys action.cmdUpdateProjectCoordinationAssignment.success / action.cmdUpdateProjectCoordinationAssignment.error */
  async cmdUpdateProjectCoordinationAssignment(): Promise<void> {
    if (!this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId) {
      this.cmdUpdateProjectCoordinationAssignmentState = 'idle';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.cmdUpdateProjectCoordinationAssignmentProjectId) {
      this.cmdUpdateProjectCoordinationAssignmentState = 'idle';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateProjectCoordinationAssignmentState = 'loading';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'loading');
    this.cmdUpdateProjectCoordinationAssignmentError = '';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error', '');
    const params: CmdUpdateProjectCoordinationAssignmentInput = {
      projectCoordinationAssignmentId: this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId,
      projectId: this.cmdUpdateProjectCoordinationAssignmentProjectId,
      fieldCoordinatorId: this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId,
      status: this.cmdUpdateProjectCoordinationAssignmentStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateProjectCoordinationAssignmentOutput>(cmdUpdateProjectCoordinationAssignmentRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateProjectCoordinationAssignment.error');
      this.cmdUpdateProjectCoordinationAssignmentError = errMsg;
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error', errMsg);
      this.cmdUpdateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateProjectCoordinationAssignmentOutput | null = response.data ?? null;
    this.cmdUpdateProjectCoordinationAssignmentOutput = data;
    setState('ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment', data);
    try {
      await this.loadQryListProjectCoordinationAssignment();
      if (this.qryListProjectCoordinationAssignmentState === 'error') {
        this.cmdUpdateProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdUpdateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdUpdateProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdUpdateProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdUpdateProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId', '');
    this.cmdUpdateProjectCoordinationAssignmentProjectId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId', '');
    this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId', '');
    this.cmdUpdateProjectCoordinationAssignmentStatus = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status', '');
    this.cmdUpdateProjectCoordinationAssignmentState = 'success';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateProjectCoordinationAssignment — bind UI events here */
  handleCmdUpdateProjectCoordinationAssignmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateProjectCoordinationAssignment();
    });
  }

  /** action cmdDeleteProjectCoordinationAssignment (command) — route buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment; inputs: projectCoordinationAssignmentId; writes ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment; status ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status; feedback keys action.cmdDeleteProjectCoordinationAssignment.success / action.cmdDeleteProjectCoordinationAssignment.error */
  async cmdDeleteProjectCoordinationAssignment(): Promise<void> {
    if (!this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId) {
      this.cmdDeleteProjectCoordinationAssignmentState = 'idle';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteProjectCoordinationAssignmentState = 'loading';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'loading');
    this.cmdDeleteProjectCoordinationAssignmentError = '';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error', '');
    const params: CmdDeleteProjectCoordinationAssignmentInput = {
      projectCoordinationAssignmentId: this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdDeleteProjectCoordinationAssignmentOutput>(cmdDeleteProjectCoordinationAssignmentRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdDeleteProjectCoordinationAssignment.error');
      this.cmdDeleteProjectCoordinationAssignmentError = errMsg;
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error', errMsg);
      this.cmdDeleteProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdDeleteProjectCoordinationAssignmentOutput | null = response.data ?? null;
    this.cmdDeleteProjectCoordinationAssignmentOutput = data;
    setState('ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment', data);
    try {
      await this.loadQryListProjectCoordinationAssignment();
      if (this.qryListProjectCoordinationAssignmentState === 'error') {
        this.cmdDeleteProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdDeleteProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadQryProjectPicker();
      if (this.qryProjectPickerState === 'error') {
        this.cmdDeleteProjectCoordinationAssignmentState = 'error';
        setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('cmdDeleteProjectCoordinationAssignment refresh failed', refreshError);
      this.cmdDeleteProjectCoordinationAssignmentState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'error');
      this.requestUpdate();
      return;
    }
    this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = '';
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId', '');
    this.cmdDeleteProjectCoordinationAssignmentState = 'success';
    setState('ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdDeleteProjectCoordinationAssignment — bind UI events here */
  handleCmdDeleteProjectCoordinationAssignmentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdDeleteProjectCoordinationAssignment();
    });
  }

  /** action qryProjectPicker (query) — route buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker; inputs: (none); writes ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker; status ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status */
  async loadQryProjectPicker(): Promise<void> {
    this.qryProjectPickerState = 'loading';
    setState('ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status', 'loading');
    const params: QryProjectPickerInput = {
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<QryProjectPickerOutput[]>(qryProjectPickerRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.qryProjectPickerData = data;
      setState('ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker', data);
      this.qryProjectPickerState = 'success';
      setState('ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status', 'success');
    } else {
      this.qryProjectPickerState = 'error';
      setState('ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status', 'error');
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

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId */
  setCmdCreateProjectCoordinationAssignmentProjectId(value: string): void {
    this.cmdCreateProjectCoordinationAssignmentProjectId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId', value);
    const collection =
      (getState('ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment') as QryListProjectCoordinationAssignmentOutput[] | null | undefined) ?? this.qryListProjectCoordinationAssignmentData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListProjectCoordinationAssignmentOutput) => String(row.projectId) === String(value),
      );
      if (item) {
        this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = item.fieldCoordinatorId;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId', item.fieldCoordinatorId);
        this.cmdCreateProjectCoordinationAssignmentStatus = item.status;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectCoordinationAssignmentProjectId — bind UI events here */
  handleCmdCreateProjectCoordinationAssignmentProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectCoordinationAssignmentProjectId(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId */
  setCmdCreateProjectCoordinationAssignmentFieldCoordinatorId(value: string): void {
    this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId — bind UI events here */
  handleCmdCreateProjectCoordinationAssignmentFieldCoordinatorIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectCoordinationAssignmentFieldCoordinatorId(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status */
  setCmdCreateProjectCoordinationAssignmentStatus(value: string): void {
    this.cmdCreateProjectCoordinationAssignmentStatus = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateProjectCoordinationAssignmentStatus — bind UI events here */
  handleCmdCreateProjectCoordinationAssignmentStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateProjectCoordinationAssignmentStatus(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId */
  setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId(value: string): void {
    this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId', value);
    const collection =
      (getState('ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment') as QryListProjectCoordinationAssignmentOutput[] | null | undefined) ?? this.qryListProjectCoordinationAssignmentData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListProjectCoordinationAssignmentOutput) => String(row.projectCoordinationAssignmentId) === String(value),
      );
      if (item) {
        this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = item.fieldCoordinatorId;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId', item.fieldCoordinatorId);
        this.cmdUpdateProjectCoordinationAssignmentStatus = item.status;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId — bind UI events here */
  handleCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId */
  setCmdUpdateProjectCoordinationAssignmentProjectId(value: string): void {
    this.cmdUpdateProjectCoordinationAssignmentProjectId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId', value);
    const collection =
      (getState('ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment') as QryListProjectCoordinationAssignmentOutput[] | null | undefined) ?? this.qryListProjectCoordinationAssignmentData;
    if (Array.isArray(collection) && collection.length > 0) {
      const item = collection.find(
        (row: QryListProjectCoordinationAssignmentOutput) => String(row.projectId) === String(value),
      );
      if (item) {
        this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = item.fieldCoordinatorId;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId', item.fieldCoordinatorId);
        this.cmdUpdateProjectCoordinationAssignmentStatus = item.status;
        setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status', item.status);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectCoordinationAssignmentProjectId — bind UI events here */
  handleCmdUpdateProjectCoordinationAssignmentProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectCoordinationAssignmentProjectId(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId */
  setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId(value: string): void {
    this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId — bind UI events here */
  handleCmdUpdateProjectCoordinationAssignmentFieldCoordinatorIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status */
  setCmdUpdateProjectCoordinationAssignmentStatus(value: string): void {
    this.cmdUpdateProjectCoordinationAssignmentStatus = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateProjectCoordinationAssignmentStatus — bind UI events here */
  handleCmdUpdateProjectCoordinationAssignmentStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateProjectCoordinationAssignmentStatus(value);
  }

  /** setter for state ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId */
  setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId(value: string): void {
    this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId = value;
    setState('ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId — bind UI events here */
  handleCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId(value);
  }
}
