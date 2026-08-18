/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectCatalogueBase } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';
import type { QryListProjectOutput, QryClientPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';

const collab_i18n_pt = {
  'section.projectCatalogue.recordList.title': 'Obras',
  'organism.projectCatalogue.qryListProject.title': 'Obras cadastradas',
  'intent.projectCatalogue.qryListProject.list.title': 'Lista de obras',
  'intent.projectCatalogue.qryListProject.list.empty': 'Nenhuma obra encontrada.',
  'intent.projectCatalogue.qryListProject.list.column.projectId.label': 'Identificação',
  'intent.projectCatalogue.qryListProject.list.column.clientId.label': 'Cliente',
  'intent.projectCatalogue.qryListProject.list.column.name.label': 'Nome',
  'intent.projectCatalogue.qryListProject.list.column.address.label': 'Endereço',
  'intent.projectCatalogue.qryListProject.list.column.status.label': 'Status',
  'intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.cmdDeleteProject.title': 'Remover obra',
  'intent.projectCatalogue.cmdDeleteProject.form.title': 'Ações da obra selecionada',
  'intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject': 'Excluir obra',
  'section.projectCatalogue.recordForm.title': 'Cadastro da obra',
  'organism.projectCatalogue.cmdCreateProject.title': 'Nova obra',
  'intent.projectCatalogue.cmdCreateProject.form.title': 'Dados da nova obra',
  'intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject': 'Criar obra',
  'intent.projectCatalogue.cmdCreateProject.form.field.clientId.label': 'Cliente',
  'intent.projectCatalogue.cmdCreateProject.form.field.name.label': 'Nome',
  'intent.projectCatalogue.cmdCreateProject.form.field.address.label': 'Endereço',
  'intent.projectCatalogue.cmdCreateProject.form.field.status.label': 'Status inicial',
  'intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.cmdUpdateProject.title': 'Editar obra',
  'intent.projectCatalogue.cmdUpdateProject.form.title': 'Dados da obra',
  'intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject': 'Salvar alterações',
  'intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label': 'Cliente',
  'intent.projectCatalogue.cmdUpdateProject.form.field.name.label': 'Nome',
  'intent.projectCatalogue.cmdUpdateProject.form.field.address.label': 'Endereço',
  'intent.projectCatalogue.cmdUpdateProject.form.field.status.label': 'Status',
  'intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label': 'Orçamento autorizado',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label': 'Início planejado',
  'intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label': 'Fim planejado',
  'organism.projectCatalogue.qryClientPicker.title': 'Clientes disponíveis',
  'intent.projectCatalogue.qryClientPicker.list.title': 'Escolha um cliente',
  'intent.projectCatalogue.qryClientPicker.list.empty': 'Nenhum cliente disponível.',
  'intent.projectCatalogue.qryClientPicker.list.column.clientId.label': 'Cliente',
  'intent.projectCatalogue.qryClientPicker.list.column.clientName.label': 'Nome',
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
  'section.projectCatalogue.projectWorkspace.title': 'Detalhes da obra'
} as const;

type CollabI18nKey = keyof typeof collab_i18n_pt;
const collab_i18n_en: Record<CollabI18nKey, string> = { ...collab_i18n_pt };
const collab_i18n_es: Record<CollabI18nKey, string> = { ...collab_i18n_pt };

@customElement('build-flow-fsm--web--desktop--page31--project-catalogue')
export class BuildFlowFsmDesktopPage31ProjectCataloguePage extends BuildFlowFsmProjectCatalogueBase {
  render() {
    const msg = this.msg;
    const projects: QryListProjectOutput[] = this.qryListProjectData ?? [];
    const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
    const selectedId = this.cmdUpdateProjectProjectId;
    const selected: QryListProjectOutput | undefined = projects.find((project: QryListProjectOutput) => project.projectId === selectedId);
    const field = (label: string, value: string, handler: (event: Event) => void, type: string = 'text', required: boolean = true) => html`
      <label class="flex flex-col gap-1 text-[var(--text-default,#0f172a)]">
        <span class="text-sm font-medium">${label}${required ? html`<span aria-hidden="true"> *</span>` : nothing}</span>
        <input class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type=${type} .value=${value} ?required=${required} @change=${handler} />
      </label>`;
    const clientOptions = (value: string, handler: (event: Event) => void) => html`
      <label class="flex flex-col gap-1 text-[var(--text-default,#0f172a)]">
        <span class="text-sm font-medium">${msg['intent.projectCatalogue.cmdCreateProject.form.field.clientId.label']} *</span>
        <select class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} @change=${handler} required>
          <option value="">${msg['intent.projectCatalogue.qryClientPicker.list.title']}</option>
          ${clients.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}
        </select>
      </label>`;
    const selectProject = (project: QryListProjectOutput): void => {
      this.setCmdUpdateProjectProjectId(String(project.projectId));
      this.setCmdDeleteProjectProjectId(String(project.projectId));
      this.setCmdUpdateProjectClientId(String(project.clientId));
      this.setCmdUpdateProjectName(String(project.name));
      this.setCmdUpdateProjectAddress(String(project.address));
      this.setCmdUpdateProjectStatus(String(project.status));
      this.setCmdUpdateProjectAuthorizedBudget(String(project.authorizedBudget));
      this.setCmdUpdateProjectPlannedStartDate(String(project.plannedStartDate));
      this.setCmdUpdateProjectPlannedEndDate(String(project.plannedEndDate));
    };
    return html`
      <main class="flex flex-col gap-6 bg-[var(--page-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]">
        <section class="grid gap-6 lg:grid-cols-3" aria-labelledby="project-list-title">
          <div class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
            <h2 id="project-list-title" class="mb-4 text-xl font-semibold">${msg['intent.projectCatalogue.qryListProject.list.title']}</h2>
            ${this.qryListProjectState === 'loading' ? html`<p>${msg['intent.projectCatalogue.qryListProject.title']}</p>` : projects.length === 0 ? html`<p>${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>` : html`
              <div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                <th class="px-2 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.name.label']}</th><th class="px-2 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.clientId.label']}</th><th class="px-2 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.status.label']}</th><th class="px-2 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label']}</th>
              </tr></thead><tbody>${projects.map((project: QryListProjectOutput) => html`
                <tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${project.projectId === selectedId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}" @click=${(): void => selectProject(project)}>
                  <td class="px-2 py-3 font-medium">${project.name}</td><td class="px-2 py-3">${project.clientId}</td><td class="px-2 py-3">${project.status}</td><td class="px-2 py-3">${project.authorizedBudget}</td>
                </tr>`)} </tbody></table></div>`}
          </div>
          <aside class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
            <h2 class="mb-4 text-xl font-semibold">${msg['section.projectCatalogue.projectWorkspace.title']}</h2>
            ${selected === undefined ? html`<p>${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>` : html`
              <div class="mb-4 space-y-1 text-sm"><p class="font-semibold">${selected.name}</p><p>${selected.address}</p><p>${selected.plannedStartDate} – ${selected.plannedEndDate}</p></div>
              <div class="grid gap-3">${field(msg['intent.projectCatalogue.cmdUpdateProject.form.field.name.label'], this.cmdUpdateProjectName, this.handleCmdUpdateProjectNameChange)}${clientOptions(this.cmdUpdateProjectClientId, this.handleCmdUpdateProjectClientIdChange)}${field(msg['intent.projectCatalogue.cmdUpdateProject.form.field.address.label'], this.cmdUpdateProjectAddress, this.handleCmdUpdateProjectAddressChange)}${field(msg['intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label'], this.cmdUpdateProjectAuthorizedBudget, this.handleCmdUpdateProjectAuthorizedBudgetChange, 'number')}${field(msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label'], this.cmdUpdateProjectPlannedStartDate, this.handleCmdUpdateProjectPlannedStartDateChange, 'date')}${field(msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label'], this.cmdUpdateProjectPlannedEndDate, this.handleCmdUpdateProjectPlannedEndDateChange, 'date')}</div>
              ${this.cmdUpdateProjectState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateProjectError || msg['action.cmdUpdateProject.error']}</p>` : this.cmdUpdateProjectState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdUpdateProject.success']}</p>` : nothing}
              <div class="mt-4 flex gap-2"><button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateProjectState === 'loading'} @click=${this.handleCmdUpdateProjectClick}>${this.cmdUpdateProjectState === 'loading' ? msg['intent.projectCatalogue.cmdUpdateProject.form.title'] : msg['intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject']}</button><button class="rounded bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteProjectState === 'loading'} @click=${(event: Event): void => { if (window.confirm(`${selected.name}?`)) this.handleCmdDeleteProjectClick(event); }}>${msg['intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject']}</button></div>`}
          </aside>
        </section>
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
          <h2 class="mb-4 text-xl font-semibold">${msg['section.projectCatalogue.projectCreation.title']}</h2>
          <div class="grid gap-4 md:grid-cols-2">${clientOptions(this.cmdCreateProjectClientId, this.handleCmdCreateProjectClientIdChange)}${field(msg['intent.projectCatalogue.cmdCreateProject.form.field.name.label'], this.cmdCreateProjectName, this.handleCmdCreateProjectNameChange)}${field(msg['intent.projectCatalogue.cmdCreateProject.form.field.address.label'], this.cmdCreateProjectAddress, this.handleCmdCreateProjectAddressChange)}${field(msg['intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label'], this.cmdCreateProjectAuthorizedBudget, this.handleCmdCreateProjectAuthorizedBudgetChange, 'number')}${field(msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label'], this.cmdCreateProjectPlannedStartDate, this.handleCmdCreateProjectPlannedStartDateChange, 'date')}${field(msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label'], this.cmdCreateProjectPlannedEndDate, this.handleCmdCreateProjectPlannedEndDateChange, 'date')}</div>
          <p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.cmdCreateProject.form.field.status.label']}: ${this.cmdCreateProjectStatus}</p>
          ${this.cmdCreateProjectState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateProjectError || msg['action.cmdCreateProject.error']}</p>` : this.cmdCreateProjectState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateProject.success']}</p>` : nothing}
          <button class="mt-4 rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateProjectState === 'loading'} @click=${this.handleCmdCreateProjectClick}>${this.cmdCreateProjectState === 'loading' ? msg['intent.projectCatalogue.cmdCreateProject.form.title'] : msg['intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject']}</button>
        </section>
      </main>`;
  }
}
