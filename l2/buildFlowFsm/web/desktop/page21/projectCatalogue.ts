/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';
import { BuildFlowFsmProjectCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';

const collab_i18n_pt: MessageType = {
  'section.projectCatalogue.recordList.title': 'Obras',
  'organism.projectCatalogue.qryListProject.title': 'Obras cadastradas',
  'intent.projectCatalogue.qryListProject.list.title': 'Selecione uma obra',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhuma obra encontrada.',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Código',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Cliente',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Nome',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Endereço',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Remover obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Remoção da obra selecionada',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir obra',
  'section.projectCatalogue.recordForm.title': 'Cadastro de obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Nova obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Dados da nova obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Salvar obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Cliente',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Nome',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Endereço',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Editar obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Dados da obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Atualizar obra',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Cliente',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Nome',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Endereço',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.qryClientPicker.title': 'Clientes',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Escolha um cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum cliente encontrado.',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Código do cliente',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Cliente',
  'intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label': 'E-mail',
  'intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label': 'Telefone',
  'action.cmdCreateProject.success': 'Obra criada com sucesso.',
  'action.cmdCreateProject.error': 'Não foi possível criar a obra.',
  'action.cmdUpdateProject.success': 'Obra atualizada com sucesso.',
  'action.cmdUpdateProject.error': 'Não foi possível atualizar a obra.',
  'action.cmdDeleteProject.success': 'Obra excluída com sucesso.',
  'action.cmdDeleteProject.error': 'Não foi possível excluir a obra.',
  'section.projectCatalogue.projectWorkbench.title': 'Manutenção de obras',
  'section.projectCatalogue.projectCreation.title': 'Criar uma obra',
  'section.projectCatalogue.projectWorkspace.title': 'Obra selecionada'
};

const collab_i18n: { pt: MessageType } = { pt: collab_i18n_pt };

@customElement('build-flow-fsm--desktop--page21--project-catalogue-102046')
export class BuildFlowFsmDesktopPage21ProjectCataloguePage extends BuildFlowFsmProjectCatalogueBase {
  get msg(): MessageType {
    return collab_i18n.pt;
  }

  render() {
    const msg = this.msg;
    const projects = this.qryListProjectData ?? [];
    const clients = this.qryClientPickerData ?? [];
    const selectedProject = projects.find((project) => project.projectId === this.cmdUpdateProjectProjectId);
    const createReady = Boolean(
      this.cmdCreateProjectClientId && this.cmdCreateProjectName && this.cmdCreateProjectAddress &&
      this.cmdCreateProjectAuthorizedBudget && this.cmdCreateProjectPlannedStartDate &&
      this.cmdCreateProjectPlannedEndDate
    );
    const updateReady = Boolean(
      selectedProject && this.cmdUpdateProjectClientId && this.cmdUpdateProjectName &&
      this.cmdUpdateProjectAddress && this.cmdUpdateProjectAuthorizedBudget &&
      this.cmdUpdateProjectPlannedStartDate && this.cmdUpdateProjectPlannedEndDate
    );

    const selectProject = (project: typeof projects[number]): void => {
      this.setCmdUpdateProjectProjectId(project.projectId);
      this.setCmdDeleteProjectProjectId(project.projectId);
      this.setCmdUpdateProjectClientId(project.clientId);
      this.setCmdUpdateProjectName(project.name);
      this.setCmdUpdateProjectAddress(project.address);
      this.setCmdUpdateProjectStatus(project.status);
      this.setCmdUpdateProjectAuthorizedBudget(String(project.authorizedBudget));
      this.setCmdUpdateProjectPlannedStartDate(String(project.plannedStartDate));
      this.setCmdUpdateProjectPlannedEndDate(String(project.plannedEndDate));
    };
    const selectClient = (event: Event): void => {
      this.handleCmdCreateProjectClientIdChange(event);
      this.handleCmdUpdateProjectClientIdChange(event);
    };
    const confirmDelete = (): void => {
      if (selectedProject && window.confirm(`${msg['intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject']}: ${selectedProject.name}?`)) {
        this.handleCmdDeleteProjectClick();
      }
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] p-6 text-[var(--text-default,#0f172a)]">
        <div class="mx-auto max-w-7xl space-y-6">
          <section class="grid gap-6 lg:grid-cols-5">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm lg:col-span-2">
              <div class="mb-4 flex items-center justify-between gap-3">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['intent.projectCatalogue.qryListProject.list.title']}</h2>
                <button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryListProjectClick}>
                  ${msg['organism.projectCatalogue.qryListProject.title']}
                </button>
              </div>
              ${this.qryListProjectState === 'loading' ? html`<div class="animate-pulse text-sm text-[var(--text-muted,#64748b)]">${msg['organism.projectCatalogue.qryListProject.title']}</div>` : projects.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>` : html`
                <div class="space-y-2">
                  ${projects.map((project) => html`
                    <button class="w-full rounded-md border px-4 py-3 text-left ${project.projectId === this.cmdUpdateProjectProjectId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]'}" @click=${(): void => selectProject(project)}>
                      <div class="flex items-start justify-between gap-3">
                        <span class="font-medium">${project.name}</span>
                        <span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-1 text-xs text-[var(--status-neutral-text,#475569)]">${project.status}</span>
                      </div>
                      <div class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${project.address}</div>
                      <div class="mt-2 text-xs text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.qryListProject.list.column.clientId.label']}: ${project.clientId}</div>
                    </button>
                  `)}
                </div>
              `}
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm lg:col-span-3">
              ${selectedProject ? html`
                <div class="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${selectedProject.name}</h2>
                    <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${selectedProject.address}</p>
                  </div>
                  <span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-sm text-[var(--status-info-text,#1e40af)]">${selectedProject.status}</span>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="text-sm">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateProjectClientId} @change=${selectClient}>${clients.map((client) => html`<option value=${client.clientId}>${client.clientId}</option>`)}</select></label>
                  <label class="text-sm">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.name.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateProjectName} @input=${this.handleCmdUpdateProjectNameChange}></label>
                  <label class="text-sm sm:col-span-2">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.address.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateProjectAddress} @input=${this.handleCmdUpdateProjectAddressChange}></label>
                  <div class="text-sm"><span class="text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.status.label']}</span><div class="mt-1">${selectedProject.status}</div></div>
                  <label class="text-sm">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateProjectAuthorizedBudget} @input=${this.handleCmdUpdateProjectAuthorizedBudgetChange}></label>
                  <label class="text-sm">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label']}<input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateProjectPlannedStartDate} @input=${this.handleCmdUpdateProjectPlannedStartDateChange}></label>
                  <label class="text-sm">${msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label']}<input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateProjectPlannedEndDate} @input=${this.handleCmdUpdateProjectPlannedEndDateChange}></label>
                </div>
                ${this.cmdUpdateProjectState === 'error' ? html`<p class="mt-4 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateProjectError || msg['action.cmdUpdateProject.error']}</p>` : nothing}
                ${this.cmdUpdateProjectState === 'success' ? html`<p class="mt-4 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdUpdateProject.success']}</p>` : nothing}
                <div class="mt-5 flex flex-wrap gap-3">
                  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!updateReady || this.cmdUpdateProjectState === 'loading'} @click=${this.handleCmdUpdateProjectClick}>${this.cmdUpdateProjectState === 'loading' ? msg['intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject'] : msg['intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject']}</button>
                  <button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteProjectState === 'loading'} @click=${confirmDelete}>${msg['intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject']}</button>
                </div>
                ${this.cmdDeleteProjectState === 'error' ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteProjectError || msg['action.cmdDeleteProject.error']}</p>` : nothing}
                ${this.cmdDeleteProjectState === 'success' ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdDeleteProject.success']}</p>` : nothing}
              ` : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>`}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
            <h2 class="mb-5 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.projectCatalogue.projectCreation.title']}</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <label class="text-sm">${msg['intent.projectCatalogue.cmdCreateProject.form.field.clientId.label']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateProjectClientId} @change=${selectClient}><option value="">${msg['intent.projectCatalogue.qryClientPicker.list.title']}</option>${clients.map((client) => html`<option value=${client.clientId}>${client.clientId}</option>`)}</select></label>
              <label class="text-sm">${msg['intent.projectCatalogue.cmdCreateProject.form.field.name.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateProjectName} @input=${this.handleCmdCreateProjectNameChange}></label>
              <label class="text-sm md:col-span-2">${msg['intent.projectCatalogue.cmdCreateProject.form.field.address.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateProjectAddress} @input=${this.handleCmdCreateProjectAddressChange}></label>
              <div class="text-sm"><span class="text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.cmdCreateProject.form.field.status.label']}</span><div class="mt-1">${this.cmdCreateProjectStatus}</div></div>
              <label class="text-sm">${msg['intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateProjectAuthorizedBudget} @input=${this.handleCmdCreateProjectAuthorizedBudgetChange}></label>
              <label class="text-sm">${msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label']}<input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateProjectPlannedStartDate} @input=${this.handleCmdCreateProjectPlannedStartDateChange}></label>
              <label class="text-sm">${msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label']}<input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateProjectPlannedEndDate} @input=${this.handleCmdCreateProjectPlannedEndDateChange}></label>
            </div>
            ${this.cmdCreateProjectState === 'error' ? html`<p class="mt-4 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateProjectError || msg['action.cmdCreateProject.error']}</p>` : nothing}
            ${this.cmdCreateProjectState === 'success' ? html`<p class="mt-4 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateProject.success']}</p>` : nothing}
            <button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!createReady || this.cmdCreateProjectState === 'loading'} @click=${this.handleCmdCreateProjectClick}>${msg['intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject']}</button>
          </section>
        </div>
      </div>
    `;
  }
}
