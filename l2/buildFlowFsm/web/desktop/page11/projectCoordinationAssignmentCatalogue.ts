/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectCoordinationAssignmentCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectCoordinationAssignmentCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
  'recordList.title': m['section.projectCoordinationAssignmentCatalogue.recordList.title'],
  'list.title': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title'],
  'list.empty': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty'],
  'list.id': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label'],
  'list.project': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label'],
  'list.coordinator': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label'],
  'list.status': m['intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label'],
  'delete.title': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title'],
  'delete.action': m['intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment'],
  'form.title': m['section.projectCoordinationAssignmentCatalogue.recordForm.title'],
  'picker.title': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title'],
  'picker.empty': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty'],
  'picker.id': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label'],
  'picker.client': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label'],
  'picker.name': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label'],
  'picker.address': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label'],
  'picker.status': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label'],
  'picker.budget': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label'],
  'picker.start': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label'],
  'picker.end': m['intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label'],
  'create.title': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title'],
  'create.action': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment'],
  'create.coordinator': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label'],
  'create.status': m['intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label'],
  'update.title': m['intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title'],
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
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--project-coordination-assignment-catalogue-102046')
export class BuildFlowFsmDesktopPage11ProjectCoordinationAssignmentCataloguePage extends BuildFlowFsmProjectCoordinationAssignmentCatalogueBase {
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
return html`
  <div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      ${this.renderWorkspace()}
      ${this.renderAssignments()}
      ${this.renderProjects()}
      ${this.renderCreateForm()}
      ${this.renderUpdateForm()}
      ${this.renderDeleteForm()}
    </div>
  </div>`;
}
renderWorkspace() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
  <h1 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
</section>`;
}
renderAssignments() {
const msg = this.msg;
const rows = this.qryListProjectCoordinationAssignmentData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
  <div class="mb-3 flex items-center justify-between gap-3"><h2 class="text-lg font-bold">${msg['recordList.title']}</h2>
  <button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListProjectCoordinationAssignmentClick(event)}>${msg['list.title']}</button></div>
  ${this.qryListProjectCoordinationAssignmentState === 'loading' ? html`<p>${msg['list.title']}…</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th>${msg['list.id']}</th><th>${msg['list.project']}</th><th>${msg['list.coordinator']}</th><th>${msg['list.status']}</th></tr></thead><tbody>${rows.map((item) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td>${item.projectCoordinationAssignmentId}</td><td>${item.projectId}</td><td>${item.fieldCoordinatorId}</td><td>${item.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderProjects() {
const msg = this.msg;
const rows = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 shadow-sm">
  <div class="mb-3 flex items-center justify-between"><h2 class="text-lg font-bold">${msg['picker.title']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryProjectPickerClick(event)}>${msg['picker.title']}</button></div>
  ${this.qryProjectPickerState === 'loading' ? html`<p>${msg['picker.title']}…</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['picker.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr><th>${msg['picker.id']}</th><th>${msg['picker.name']}</th><th>${msg['picker.client']}</th><th>${msg['picker.address']}</th><th>${msg['picker.status']}</th><th>${msg['picker.budget']}</th><th>${msg['picker.start']}</th><th>${msg['picker.end']}</th></tr></thead><tbody>${rows.map((item) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td>${item.projectId}</td><td>${item.name}</td><td>${item.clientId}</td><td>${item.address}</td><td>${item.status}</td><td>${item.authorizedBudget}</td><td>${item.plannedStartDate}</td><td>${item.plannedEndDate}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderCreateForm() {
const msg = this.msg;
const busy = this.cmdCreateProjectCoordinationAssignmentState === 'loading';
const projects = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-bold mb-4">${msg['create.title']}</h2><div class="grid gap-4 md:grid-cols-3"><label>${msg['create.coordinator']}<span class="block mt-1 text-[var(--text-muted,#64748b)]">${this.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId}</span></label><label>${msg['create.status']}<span class="block mt-1 text-[var(--text-muted,#64748b)]">${this.cmdCreateProjectCoordinationAssignmentStatus}</span></label><label>${msg['list.project']}<select class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateProjectCoordinationAssignmentProjectId} @change=${(event: Event) => this.handleCmdCreateProjectCoordinationAssignmentProjectIdChange(event)}>${projects.map((item) => html`<option value=${item.projectId}>${item.name}</option>`)}</select></label></div><button class="mt-4 rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy} @click=${(event: Event) => this.handleCmdCreateProjectCoordinationAssignmentClick(event)}>${busy ? msg['create.title'] : msg['create.action']}</button>${this.cmdCreateProjectCoordinationAssignmentState === 'success' ? html`<p role="status" class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateProjectCoordinationAssignmentState === 'error' ? html`<p role="alert" class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateProjectCoordinationAssignmentError || msg['create.error']}</p>` : nothing}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const busy = this.cmdUpdateProjectCoordinationAssignmentState === 'loading';
const rows = this.qryListProjectCoordinationAssignmentData ?? [];
const projects = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-bold mb-4">${msg['update.title']}</h2><div class="grid gap-4 md:grid-cols-4"><label>${msg['list.id']}<select class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId} @change=${(event: Event) => this.handleCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange(event)}>${rows.map((item) => html`<option value=${item.projectCoordinationAssignmentId}>${item.projectCoordinationAssignmentId}</option>`)}</select></label><label>${msg['list.project']}<select class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateProjectCoordinationAssignmentProjectId} @change=${(event: Event) => this.handleCmdUpdateProjectCoordinationAssignmentProjectIdChange(event)}>${projects.map((item) => html`<option value=${item.projectId}>${item.name}</option>`)}</select></label><label>${msg['update.coordinator']}<span class="block mt-1 text-[var(--text-muted,#64748b)]">${this.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId}</span></label><label>${msg['update.status']}<span class="block mt-1 text-[var(--text-muted,#64748b)]">${this.cmdUpdateProjectCoordinationAssignmentStatus}</span></label></div><button class="mt-4 rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${busy} @click=${(event: Event) => this.handleCmdUpdateProjectCoordinationAssignmentClick(event)}>${busy ? msg['update.title'] : msg['update.action']}</button>${this.cmdUpdateProjectCoordinationAssignmentState === 'success' ? html`<p role="status" class="mt-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateProjectCoordinationAssignmentState === 'error' ? html`<p role="alert" class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateProjectCoordinationAssignmentError || msg['update.error']}</p>` : nothing}</section>`;
}
renderDeleteForm() {
const msg = this.msg;
const busy = this.cmdDeleteProjectCoordinationAssignmentState === 'loading';
const rows = this.qryListProjectCoordinationAssignmentData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-bold mb-4">${msg['delete.title']}</h2><select class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId} @change=${(event: Event) => this.handleCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange(event)}>${rows.map((item) => html`<option value=${item.projectCoordinationAssignmentId}>${item.projectCoordinationAssignmentId}</option>`)}</select><button class="ml-2 rounded px-3 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]" ?disabled=${busy} @click=${(event: Event) => this.handleCmdDeleteProjectCoordinationAssignmentClick(event)}>${busy ? msg['delete.title'] : msg['delete.action']}</button>${this.cmdDeleteProjectCoordinationAssignmentState === 'success' ? html`<p role="status" class="mt-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteProjectCoordinationAssignmentState === 'error' ? html`<p role="alert" class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteProjectCoordinationAssignmentError || msg['delete.error']}</p>` : nothing}</section>`;
}
}
