/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';
import type { QryListProjectOutput, QryClientPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'list.title': m['section.projectCatalogue.recordList.title'],
'list.organismTitle': m['organism.projectCatalogue.qryListProject.title'],
'list.intentTitle': m['intent.projectCatalogue.qryListProject.list.title'],
'list.empty': m['intent.projectCatalogue.qryListProject.list.empty'],
'list.projectId': m['intent.projectCatalogue.qryListProject.list.column.projectId.label'],
'list.clientId': m['intent.projectCatalogue.qryListProject.list.column.clientId.label'],
'list.name': m['intent.projectCatalogue.qryListProject.list.column.name.label'],
'list.address': m['intent.projectCatalogue.qryListProject.list.column.address.label'],
'list.status': m['intent.projectCatalogue.qryListProject.list.column.status.label'],
'list.budget': m['intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label'],
'list.start': m['intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label'],
'list.end': m['intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label'],
'delete.organismTitle': m['organism.projectCatalogue.cmdDeleteProject.title'],
'delete.title': m['intent.projectCatalogue.cmdDeleteProject.form.title'],
'delete.action': m['intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject'],
'form.sectionTitle': m['section.projectCatalogue.recordForm.title'],
'create.organismTitle': m['organism.projectCatalogue.cmdCreateProject.title'],
'create.title': m['intent.projectCatalogue.cmdCreateProject.form.title'],
'create.action': m['intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject'],
'create.clientId': m['intent.projectCatalogue.cmdCreateProject.form.field.clientId.label'],
'create.name': m['intent.projectCatalogue.cmdCreateProject.form.field.name.label'],
'create.address': m['intent.projectCatalogue.cmdCreateProject.form.field.address.label'],
'create.status': m['intent.projectCatalogue.cmdCreateProject.form.field.status.label'],
'create.budget': m['intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label'],
'create.start': m['intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label'],
'create.end': m['intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label'],
'update.organismTitle': m['organism.projectCatalogue.cmdUpdateProject.title'],
'update.title': m['intent.projectCatalogue.cmdUpdateProject.form.title'],
'update.action': m['intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject'],
'update.clientId': m['intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label'],
'update.name': m['intent.projectCatalogue.cmdUpdateProject.form.field.name.label'],
'update.address': m['intent.projectCatalogue.cmdUpdateProject.form.field.address.label'],
'update.status': m['intent.projectCatalogue.cmdUpdateProject.form.field.status.label'],
'update.budget': m['intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label'],
'update.start': m['intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label'],
'update.end': m['intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label'],
'clients.title': m['organism.projectCatalogue.qryClientPicker.title'],
'clients.intentTitle': m['intent.projectCatalogue.qryClientPicker.list.title'],
'clients.empty': m['intent.projectCatalogue.qryClientPicker.list.empty'],
'clients.id': m['intent.projectCatalogue.qryClientPicker.list.column.clientId.label'],
'clients.name': m['intent.projectCatalogue.qryClientPicker.list.column.clientName.label'],
'clients.email': m['intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label'],
'clients.phone': m['intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label'],
'create.success': m['action.cmdCreateProject.success'],
'create.error': m['action.cmdCreateProject.error'],
'update.success': m['action.cmdUpdateProject.success'],
'update.error': m['action.cmdUpdateProject.error'],
'delete.success': m['action.cmdDeleteProject.success'],
'delete.error': m['action.cmdDeleteProject.error'],
'workbench.title': m['section.projectCatalogue.projectWorkbench.title'],
'creation.title': m['section.projectCatalogue.projectCreation.title'],
'workspace.title': m['section.projectCatalogue.projectWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra', 'selectClient': 'Selecione um cliente', 'required': 'Obrigatório', 'statusDefault': 'Ativo', 'deleteConfirm': 'Confirme a exclusão da obra selecionada.', 'noSelection': 'Selecione uma obra para editar ou excluir.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra', 'selectClient': 'Selecione um cliente', 'required': 'Obrigatório', 'statusDefault': 'Ativo', 'deleteConfirm': 'Confirme a exclusão da obra selecionada.', 'noSelection': 'Selecione uma obra para editar ou excluir.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'selectProject': 'Select a project', 'selectClient': 'Select a client', 'required': 'Required', 'statusDefault': 'Active', 'deleteConfirm': 'Confirm deletion of the selected project.', 'noSelection': 'Select a project to edit or delete.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'selectProject': 'Seleccione una obra', 'selectClient': 'Seleccione una obra', 'required': 'Obligatorio', 'statusDefault': 'Activo', 'deleteConfirm': 'Confirme la eliminación de la obra seleccionada.', 'noSelection': 'Seleccione una obra para editar o eliminar.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--project-catalogue-102046')
export class BuildFlowFsmDesktopPage11ProjectCataloguePage extends BuildFlowFsmProjectCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
/** i18n catalog — resolved once per language, refreshed only when the document language changes. */
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) {
this.#msgLang = lang;
this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
}
return this.#msgCache;
}
/** Main render. Split the page into render<Name>() methods and call them from here. */
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6">${this.renderList()}${this.renderForms()}${this.renderClients()}</div></main>`;
}
renderList() {
const msg = this.msg;
const projects: QryListProjectOutput[] = this.qryListProjectData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5"><div class="flex items-center justify-between gap-4"><div><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.organismTitle']}</p></div><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryListProjectClick}>${this.qryListProjectState === 'loading' ? msg['loading'] : msg['list.intentTitle']}</button></div>${this.qryListProjectState === 'loading' ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : projects.length === 0 ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto mt-4"><table class="min-w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left">${[msg['list.projectId'],msg['list.clientId'],msg['list.name'],msg['list.address'],msg['list.status'],msg['list.budget'],msg['list.start'],msg['list.end']].map((label: string) => html`<th class="px-3 py-2 font-semibold">${label}</th>`)}</tr></thead><tbody>${projects.map((project: QryListProjectOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${project.projectId}</td><td class="px-3 py-2">${project.clientId}</td><td class="px-3 py-2">${project.name}</td><td class="px-3 py-2">${project.address}</td><td class="px-3 py-2">${project.status}</td><td class="px-3 py-2">${project.authorizedBudget}</td><td class="px-3 py-2">${project.plannedStartDate}</td><td class="px-3 py-2">${project.plannedEndDate}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderClients() {
const msg = this.msg;
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-5"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['clients.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryClientPickerClick}>${this.qryClientPickerState === 'loading' ? msg['loading'] : msg['clients.intentTitle']}</button></div>${clients.length === 0 ? html`<p class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['clients.empty']}</p>` : html`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-4">${clients.map((client: QryClientPickerOutput) => html`<article class="rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#e2e8f0)] p-3"><p class="font-medium">${client.clientName}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${client.clientId}</p><p class="text-sm">${client.contactEmail}</p><p class="text-sm">${client.contactPhone}</p></article>`)}</div>`}</section>`;
}
renderForms() {
const msg = this.msg;
const createLoading = this.cmdCreateProjectState === 'loading';
const updateLoading = this.cmdUpdateProjectState === 'loading';
const deleteLoading = this.cmdDeleteProjectState === 'loading';
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
const projects: QryListProjectOutput[] = this.qryListProjectData ?? [];
const clientOptions = (value: string, setter: (value: string) => void) => html`<select class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} @change=${(event: Event) => setter((event.currentTarget as HTMLSelectElement).value)}><option value="">${msg['selectClient']}</option>${clients.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select>`;
const field = (label: string, value: string, setter: (value: string) => void, type = 'text') => html`<label class="space-y-1"><span class="block text-sm font-medium">${label}</span><input required .type=${type} .value=${value} @input=${(event: Event) => setter((event.currentTarget as HTMLInputElement).value)} class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" /></label>`;
return html`<section class="space-y-6"><h2 class="text-xl font-semibold">${msg['form.sectionTitle']}</h2><div class="grid gap-6 lg:grid-cols-2"><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="text-lg font-semibold">${msg['creation.title']}</h3><p class="text-sm text-[var(--text-muted,#64748b)] mb-4">${msg['create.title']}</p><div class="grid gap-3">${html`<label class="space-y-1"><span class="block text-sm font-medium">${msg['create.clientId']}</span>${clientOptions(this.cmdCreateProjectClientId, (value: string) => this.setCmdCreateProjectClientId(value))}</label>`}${field(msg['create.name'],this.cmdCreateProjectName,(value: string) => this.setCmdCreateProjectName(value))}${field(msg['create.address'],this.cmdCreateProjectAddress,(value: string) => this.setCmdCreateProjectAddress(value))}${field(msg['create.status'],this.cmdCreateProjectStatus || msg['statusDefault'],(value: string) => this.setCmdCreateProjectStatus(value))}${field(msg['create.budget'],this.cmdCreateProjectAuthorizedBudget,(value: string) => this.setCmdCreateProjectAuthorizedBudget(value),'number')}${field(msg['create.start'],this.cmdCreateProjectPlannedStartDate,(value: string) => this.setCmdCreateProjectPlannedStartDate(value),'date')}${field(msg['create.end'],this.cmdCreateProjectPlannedEndDate,(value: string) => this.setCmdCreateProjectPlannedEndDate(value),'date')}<button ?disabled=${createLoading} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${this.handleCmdCreateProjectClick}>${createLoading ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateProjectState === 'success' ? html`<p role="status" class="text-sm text-[var(--status-success-text,#166534)] bg-[var(--status-success-bg,#dcfce7)] p-2">${msg['create.success']}</p>` : nothing}${this.cmdCreateProjectState === 'error' ? html`<p role="alert" class="text-sm text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)] p-2">${this.cmdCreateProjectError || msg['create.error']}</p>` : nothing}</div></article><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="text-lg font-semibold">${msg['workspace.title']}</h3><p class="text-sm text-[var(--text-muted,#64748b)] mb-4">${msg['update.title']}</p><div class="grid gap-3"><label class="space-y-1"><span class="block text-sm font-medium">${msg['list.projectId']}</span><select class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdUpdateProjectProjectId} @change=${(event: Event) => this.setCmdUpdateProjectProjectId((event.currentTarget as HTMLSelectElement).value)}><option value="">${msg['selectProject']}</option>${projects.map((project: QryListProjectOutput) => html`<option value=${project.projectId}>${project.name}</option>`)}</select></label>${html`<label class="space-y-1"><span class="block text-sm font-medium">${msg['update.clientId']}</span>${clientOptions(this.cmdUpdateProjectClientId, (value: string) => this.setCmdUpdateProjectClientId(value))}</label>`}${field(msg['update.name'],this.cmdUpdateProjectName,(value: string) => this.setCmdUpdateProjectName(value))}${field(msg['update.address'],this.cmdUpdateProjectAddress,(value: string) => this.setCmdUpdateProjectAddress(value))}${field(msg['update.status'],this.cmdUpdateProjectStatus || msg['statusDefault'],(value: string) => this.setCmdUpdateProjectStatus(value))}${field(msg['update.budget'],this.cmdUpdateProjectAuthorizedBudget,(value: string) => this.setCmdUpdateProjectAuthorizedBudget(value),'number')}${field(msg['update.start'],this.cmdUpdateProjectPlannedStartDate,(value: string) => this.setCmdUpdateProjectPlannedStartDate(value),'date')}${field(msg['update.end'],this.cmdUpdateProjectPlannedEndDate,(value: string) => this.setCmdUpdateProjectPlannedEndDate(value),'date')}<button ?disabled=${updateLoading} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${this.handleCmdUpdateProjectClick}>${updateLoading ? msg['loading'] : msg['update.action']}</button>${this.cmdUpdateProjectState === 'success' ? html`<p role="status" class="text-sm text-[var(--status-success-text,#166534)] bg-[var(--status-success-bg,#dcfce7)] p-2">${msg['update.success']}</p>` : nothing}${this.cmdUpdateProjectState === 'error' ? html`<p role="alert" class="text-sm text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)] p-2">${this.cmdUpdateProjectError || msg['update.error']}</p>` : nothing}</div></article></div><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="text-lg font-semibold">${msg['delete.title']}</h3><p class="text-sm text-[var(--text-muted,#64748b)] mb-3">${msg['deleteConfirm']}</p><select class="w-full max-w-md rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdDeleteProjectProjectId} @change=${(event: Event) => this.setCmdDeleteProjectProjectId((event.currentTarget as HTMLSelectElement).value)}><option value="">${msg['selectProject']}</option>${projects.map((project: QryListProjectOutput) => html`<option value=${project.projectId}>${project.name}</option>`)}</select><button ?disabled=${deleteLoading || !this.cmdDeleteProjectProjectId} class="ml-3 rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" @click=${this.handleCmdDeleteProjectClick}>${deleteLoading ? msg['loading'] : msg['delete.action']}</button>${this.cmdDeleteProjectState === 'success' ? html`<p role="status" class="mt-3 text-sm text-[var(--status-success-text,#166534)] bg-[var(--status-success-bg,#dcfce7)] p-2">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteProjectState === 'error' ? html`<p role="alert" class="mt-3 text-sm text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)] p-2">${this.cmdDeleteProjectError || msg['delete.error']}</p>` : nothing}</article></section>`;
}
}
