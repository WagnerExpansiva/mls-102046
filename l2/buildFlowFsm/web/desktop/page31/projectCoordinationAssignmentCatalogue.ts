/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectCoordinationAssignmentCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectCoordinationAssignmentCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.js';
import type { QryListProjectCoordinationAssignmentOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'recordList.title': m['section.projectCoordinationAssignmentCatalogue.recordList.title'],
'list.title': m['organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title'],
'list.empty': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty'],
'list.assignmentId': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label'],
'list.projectId': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label'],
'list.coordinator': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label'],
'list.status': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label'],
'delete.title': m['organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title'],
'delete.formTitle': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title'],
'delete.action': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment'],
'picker.title': m['organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title'],
'picker.listTitle': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title'],
'picker.empty': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty'],
'picker.projectId': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label'],
'picker.name': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label'],
'picker.address': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label'],
'picker.status': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label'],
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
'workspace.title': m['section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'chooseProject': 'Selecione uma obra',
'currentAssignment': 'Atribuição atual',
'noSelection': 'Selecione uma obra ou uma atribuição para continuar.',
'actorValue': 'Coordenador da sessão atual',
'defaultValue': 'Status padrão do sistema',
'confirmDelete': 'Confirma a exclusão da atribuição desta obra?',
'loading': 'Carregando…',
'failed': 'Não foi possível concluir a operação.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'chooseProject': 'Selecione uma obra',
'currentAssignment': 'Atribuição atual',
'noSelection': 'Selecione uma obra ou uma atribuição para continuar.',
'actorValue': 'Coordenador da sessão atual',
'defaultValue': 'Status padrão do sistema',
'confirmDelete': 'Confirma a exclusão da atribuição desta obra?',
'loading': 'Carregando…',
'failed': 'Não foi possível concluir a operação.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'chooseProject': 'Select a project',
'currentAssignment': 'Current assignment',
'noSelection': 'Select a project or an assignment to continue.',
'actorValue': 'Coordinator from the current session',
'defaultValue': 'System default status',
'confirmDelete': 'Do you want to delete this project assignment?',
'loading': 'Loading…',
'failed': 'The operation could not be completed.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'chooseProject': 'Seleccione una obra',
'currentAssignment': 'Asignación actual',
'noSelection': 'Seleccione una obra o una asignación para continuar.',
'actorValue': 'Coordinador de la sesión actual',
'defaultValue': 'Estado predeterminado del sistema',
'confirmDelete': '¿Desea eliminar esta asignación de obra?',
'loading': 'Cargando…',
'failed': 'No se pudo completar la operación.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--project-coordination-assignment-catalogue-102046')
export class BuildFlowFsmDesktopPage31ProjectCoordinationAssignmentCataloguePage extends BuildFlowFsmProjectCoordinationAssignmentCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
  <div class="sticky top-0 z-10 mb-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
    <h1 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
    ${this.renderHeader(msg)}
  </div>
  <div class="grid gap-6 lg:grid-cols-2">
    ${this.renderProjectPicker(msg)}
    ${this.renderAssignments(msg)}
  </div>
</main>`;
}
renderHeader(msg: PageMessageType) {
const selected = this.qryProjectPickerData.find((project: QryProjectPickerOutput) => project.projectId === this.cmdUpdateProjectCoordinationAssignmentProjectId);
return html`<div class="mt-3 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted,#64748b)]">
  ${selected ? html`<span>${selected.name}</span><span>${selected.address}</span><span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-1 text-[var(--status-neutral-text,#475569)]">${selected.status}</span>` : html`<span>${msg['noSelection']}</span>`}
</div>`;
}
renderProjectPicker(msg: PageMessageType) {
const projects = this.qryProjectPickerData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
  <h2 class="mb-4 text-lg font-semibold">${msg['picker.title']}</h2>
  ${this.qryProjectPickerState === 'loading' ? html`<p>${msg['loading']}</p>` : projects.length === 0 ? html`<p>${msg['picker.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['picker.name']}</th><th class="p-2">${msg['picker.address']}</th><th class="p-2">${msg['picker.status']}</th></tr></thead><tbody>${projects.map((project: QryProjectPickerOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => { this.setCmdCreateProjectCoordinationAssignmentProjectId(project.projectId); this.setCmdUpdateProjectCoordinationAssignmentProjectId(project.projectId); }}><td class="p-2 font-medium">${project.name}</td><td class="p-2">${project.address}</td><td class="p-2">${project.status}</td></tr>`)}</tbody></table></div>`}
  ${this.renderCreateForm(msg)}
</section>`;
}
renderCreateForm(msg: PageMessageType) {
const loading = this.cmdCreateProjectCoordinationAssignmentState === 'loading';
return html`<div class="mt-6 border-t border-[var(--border-subtle,#e2e8f0)] pt-5"><h3 class="mb-3 text-base font-semibold">${msg['create.formTitle']}</h3><dl class="mb-4 grid gap-2 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['create.coordinator']}</dt><dd>${msg['actorValue']}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['create.status']}</dt><dd>${msg['defaultValue']}</dd></div></dl><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading || !this.cmdCreateProjectCoordinationAssignmentProjectId} @click=${this.handleCmdCreateProjectCoordinationAssignmentClick}>${loading ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateProjectCoordinationAssignmentState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateProjectCoordinationAssignmentState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateProjectCoordinationAssignmentError || msg['create.error']}</p>` : nothing}</div>`;
}
renderAssignments(msg: PageMessageType) {
const rows = this.qryListProjectCoordinationAssignmentData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['list.title']}</h2>${this.qryListProjectCoordinationAssignmentState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p>${msg['list.empty']}</p>` : html`<div class="space-y-3">${rows.map((row: QryListProjectCoordinationAssignmentOutput) => this.renderAssignmentRow(row, msg))}</div>`}${this.renderUpdateForm(msg)}</section>`;
}
renderAssignmentRow(row: QryListProjectCoordinationAssignmentOutput, msg: PageMessageType) {
const project = this.qryProjectPickerData.find((item: QryProjectPickerOutput) => item.projectId === row.projectId);
return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><button class="w-full text-left" @click=${() => { this.setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId(row.projectCoordinationAssignmentId); this.setCmdUpdateProjectCoordinationAssignmentProjectId(row.projectId); this.setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId(row.fieldCoordinatorId); this.setCmdUpdateProjectCoordinationAssignmentStatus(row.status); }}><div class="font-medium">${project?.name || row.projectId}</div><div class="mt-2 grid gap-1 text-sm text-[var(--text-muted,#64748b)]"><span>${msg['list.assignmentId']}: ${row.projectCoordinationAssignmentId}</span><span>${msg['list.coordinator']}: ${row.fieldCoordinatorId}</span><span>${msg['list.status']}: ${row.status}</span></div></button><button class="mt-3 rounded-md bg-[var(--button-danger-bg,#dc2626)] px-3 py-2 text-sm text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteProjectCoordinationAssignmentState === 'loading'} @click=${(event: Event) => { event.stopPropagation(); if (window.confirm(`${msg['confirmDelete']} ${project?.name || row.projectId}`)) { this.setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId(row.projectCoordinationAssignmentId); this.handleCmdDeleteProjectCoordinationAssignmentClick(event); } }}>${msg['delete.action']}</button></article>`;
}
renderUpdateForm(msg: PageMessageType) {
const selected = this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId !== '';
const loading = this.cmdUpdateProjectCoordinationAssignmentState === 'loading';
return html`<div class="mt-6 border-t border-[var(--border-subtle,#e2e8f0)] pt-5"><h3 class="mb-3 text-base font-semibold">${msg['update.formTitle']}</h3><dl class="mb-4 grid gap-2 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['update.coordinator']}</dt><dd>${selected ? msg['actorValue'] : msg['noSelection']}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['update.status']}</dt><dd>${selected ? this.cmdUpdateProjectCoordinationAssignmentStatus : msg['noSelection']}</dd></div></dl><button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50" ?disabled=${loading || !selected} @click=${this.handleCmdUpdateProjectCoordinationAssignmentClick}>${loading ? msg['loading'] : msg['update.action']}</button>${this.cmdUpdateProjectCoordinationAssignmentState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateProjectCoordinationAssignmentState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateProjectCoordinationAssignmentError || msg['update.error']}</p>` : nothing}</div>`;
}
}
