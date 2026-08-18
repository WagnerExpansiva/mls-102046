/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectCoordinationAssignmentCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectCoordinationAssignmentCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'record.list.title': m['section.projectCoordinationAssignmentCatalogue.recordList.title'],
'list.title': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title'],
'list.empty': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty'],
'list.assignmentId': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label'],
'list.projectId': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label'],
'list.coordinator': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label'],
'list.status': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label'],
'delete.title': m['organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title'],
'delete.formTitle': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title'],
'delete.action': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment'],
'form.title': m['section.projectCoordinationAssignmentCatalogue.recordForm.title'],
'picker.title': m['organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title'],
'picker.listTitle': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title'],
'picker.empty': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty'],
'picker.projectId': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label'],
'picker.clientId': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label'],
'picker.name': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label'],
'picker.address': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label'],
'picker.status': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label'],
'picker.budget': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label'],
'picker.start': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label'],
'picker.end': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label'],
'create.title': m['organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title'],
'create.formTitle': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title'],
'create.action': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment'],
'create.coordinator': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label'],
'create.status': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label'],
'update.title': m['organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title'],
'update.formTitle': m['intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title'],
'update.action': m['intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment'],
'update.coordinator': m['intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label'],
'update.status': m['intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label'],
'create.success': m['action.cmdCreateProjectCoordinationAssignment.success'],
'create.error': m['action.cmdCreateProjectCoordinationAssignment.error'],
'update.success': m['action.cmdUpdateProjectCoordinationAssignment.success'],
'update.error': m['action.cmdUpdateProjectCoordinationAssignment.error'],
'delete.success': m['action.cmdDeleteProjectCoordinationAssignment.success'],
'delete.error': m['action.cmdDeleteProjectCoordinationAssignment.error'],
'workspace.title': m['section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'workspace.chooseProject': 'Selecione uma obra para iniciar uma nova atribuição.',
'workspace.selectedProject': 'Obra selecionada',
'workspace.sessionCoordinator': 'Coordenador de campo da sessão',
'workspace.defaultStatus': 'O estado inicial é definido pelo sistema.',
'workspace.required': 'Obrigatório',
'workspace.loading': 'Carregando…',
'workspace.retry': 'Tentar novamente',
'workspace.confirmDelete': 'Confirma a exclusão desta atribuição?',
'workspace.new': 'Nova atribuição',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'workspace.chooseProject': 'Selecione uma obra para iniciar uma nova atribuição.',
'workspace.selectedProject': 'Obra selecionada',
'workspace.sessionCoordinator': 'Coordenador de campo da sessão',
'workspace.defaultStatus': 'O status inicial é definido pelo sistema.',
'workspace.required': 'Obrigatório',
'workspace.loading': 'Carregando…',
'workspace.retry': 'Tentar novamente',
'workspace.confirmDelete': 'Confirma a exclusão desta atribuição?',
'workspace.new': 'Nova atribuição',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'workspace.chooseProject': 'Select a project to start a new assignment.',
'workspace.selectedProject': 'Selected project',
'workspace.sessionCoordinator': 'Session field coordinator',
'workspace.defaultStatus': 'The initial status is set by the system.',
'workspace.required': 'Required',
'workspace.loading': 'Loading…',
'workspace.retry': 'Try again',
'workspace.confirmDelete': 'Do you confirm deleting this assignment?',
'workspace.new': 'New assignment',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'workspace.chooseProject': 'Seleccione una obra para iniciar una nueva asignación.',
'workspace.selectedProject': 'Obra seleccionada',
'workspace.sessionCoordinator': 'Coordinador de campo de la sesión',
'workspace.defaultStatus': 'El estado inicial lo define el sistema.',
'workspace.required': 'Obligatorio',
'workspace.loading': 'Cargando…',
'workspace.retry': 'Intentar de nuevo',
'workspace.confirmDelete': '¿Confirma eliminar esta asignación?',
'workspace.new': 'Nueva asignación',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--project-coordination-assignment-catalogue-102046')
export class BuildFlowFsmDesktopPage21ProjectCoordinationAssignmentCataloguePage extends BuildFlowFsmProjectCoordinationAssignmentCatalogueBase {
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
return html`<main class="mx-auto max-w-6xl space-y-6 p-6 text-[var(--text-default,#0f172a)]">
<h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['record.list.title']}</h1>
${this.renderList()}
${this.renderWorkspace()}
</main>`;
}
renderList() {
const msg = this.msg;
const rows = this.qryListProjectCoordinationAssignmentData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="mb-4 flex items-center justify-between gap-4"><h2 class="text-lg font-semibold">${msg['list.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryListProjectCoordinationAssignmentClick}>${this.qryListProjectCoordinationAssignmentState === 'loading' ? msg['workspace.loading'] : msg['workspace.retry']}</button></div>
${this.qryListProjectCoordinationAssignmentState === 'loading' ? html`<div class="animate-pulse text-[var(--text-muted,#64748b)]">${msg['workspace.loading']}</div>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-3">${msg['list.assignmentId']}</th><th class="p-3">${msg['list.projectId']}</th><th class="p-3">${msg['list.coordinator']}</th><th class="p-3">${msg['list.status']}</th><th class="p-3"></th></tr></thead><tbody>${rows.map((row) => html`<tr class=${row.projectCoordinationAssignmentId === this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}><td class="p-3">${row.projectCoordinationAssignmentId}</td><td class="p-3">${row.projectId}</td><td class="p-3">${row.fieldCoordinatorId}</td><td class="p-3"><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-sm text-[var(--status-info-text,#1e3a8a)]">${row.status}</span></td><td class="p-3"><div class="flex gap-2"><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1 text-[var(--button-secondary-text,#0f172a)]" @click=${() => { this.setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId(row.projectCoordinationAssignmentId); this.setCmdUpdateProjectCoordinationAssignmentProjectId(row.projectId); }}>${msg['update.title']}</button><button class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-3 py-1 text-[var(--button-danger-text,#ffffff)]" @click=${(event: Event) => { if (confirm(msg['workspace.confirmDelete'])) { this.setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId(row.projectCoordinationAssignmentId); this.handleCmdDeleteProjectCoordinationAssignmentClick(event); } }}>${msg['delete.action']}</button></div></td></tr>`)}</tbody></table></div>`}
${this.cmdDeleteProjectCoordinationAssignmentState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteProjectCoordinationAssignmentState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteProjectCoordinationAssignmentError || msg['delete.error']}</p>` : nothing}</section>`;
}
renderWorkspace() {
const msg = this.msg;
const selected = this.qryProjectPickerData.find((project) => project.projectId === this.cmdUpdateProjectCoordinationAssignmentProjectId || project.projectId === this.cmdCreateProjectCoordinationAssignmentProjectId);
const editing = this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId.length > 0;
return html`<section class="grid gap-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 md:grid-cols-2"><div><h2 class="mb-4 text-lg font-semibold">${msg['workspace.title']}</h2>${this.renderPicker()}${selected ? html`<div class="mt-4 rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] p-3"><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.selectedProject']}</p><p class="font-semibold">${selected.name}</p><p class="text-sm">${selected.address}</p></div>` : nothing}</div>${editing ? this.renderUpdateForm() : this.renderCreateForm()}</section>`;
}
renderPicker() {
const msg = this.msg;
return html`<div><h3 class="mb-2 font-medium">${msg['picker.title']}</h3>${this.qryProjectPickerState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['workspace.loading']}</p>` : this.qryProjectPickerData.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['picker.empty']}</p>` : html`<div class="max-h-72 space-y-2 overflow-y-auto">${this.qryProjectPickerData.map((project) => html`<button class="block w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 text-left hover:bg-[var(--selected-bg,#eff6ff)]" @click=${() => { this.setCmdCreateProjectCoordinationAssignmentProjectId(project.projectId); this.setCmdUpdateProjectCoordinationAssignmentProjectId(project.projectId); }}><span class="font-medium">${project.name}</span><span class="block text-sm text-[var(--text-muted,#64748b)]">${project.address}</span></button>`)}</div>`}<button class="mt-3 text-sm text-[var(--link-text,#2563eb)]" @click=${this.handleQryProjectPickerClick}>${msg['workspace.retry']}</button></div>`;
}
renderCreateForm() {
const msg = this.msg;
const ready = this.cmdCreateProjectCoordinationAssignmentProjectId.length > 0 && this.cmdCreateProjectCoordinationAssignmentState !== 'loading';
return html`<div class="space-y-4"><h2 class="text-lg font-semibold">${msg['create.formTitle']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.chooseProject']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.sessionCoordinator']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.defaultStatus']}</p><button ?disabled=${!ready} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${this.handleCmdCreateProjectCoordinationAssignmentClick}>${this.cmdCreateProjectCoordinationAssignmentState === 'loading' ? msg['workspace.loading'] : msg['create.action']}</button>${this.cmdCreateProjectCoordinationAssignmentState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateProjectCoordinationAssignmentState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateProjectCoordinationAssignmentError || msg['create.error']}</p>` : nothing}</div>`;
}
renderUpdateForm() {
const msg = this.msg;
const ready = this.cmdUpdateProjectCoordinationAssignmentProjectId.length > 0 && this.cmdUpdateProjectCoordinationAssignmentState !== 'loading';
return html`<div class="space-y-4"><h2 class="text-lg font-semibold">${msg['update.formTitle']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.sessionCoordinator']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.defaultStatus']}</p><button ?disabled=${!ready} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${this.handleCmdUpdateProjectCoordinationAssignmentClick}>${this.cmdUpdateProjectCoordinationAssignmentState === 'loading' ? msg['workspace.loading'] : msg['update.action']}</button>${this.cmdUpdateProjectCoordinationAssignmentState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateProjectCoordinationAssignmentState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateProjectCoordinationAssignmentError || msg['update.error']}</p>` : nothing}</div>`;
}
}