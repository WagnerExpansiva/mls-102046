/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/timeLogCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTimeLogCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.js';
import type { QryListTimeLogOutput, QryWorkTaskPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'list.section': m['section.timeLogCatalogue.recordList.title'],
'list.title': m['intent.timeLogCatalogue.qryListTimeLog.list.title'],
'list.empty': m['intent.timeLogCatalogue.qryListTimeLog.list.empty'],
'list.timeLogId': m['intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label'],
'list.status': m['intent.timeLogCatalogue.qryListTimeLog.list.column.status.label'],
'list.workTaskId': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label'],
'list.fieldWorkerId': m['intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label'],
'list.workDate': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label'],
'list.hoursWorked': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label'],
'list.hourlyLaborCost': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label'],
'delete.title': m['organism.timeLogCatalogue.cmdDeleteTimeLog.title'],
'delete.form': m['intent.timeLogCatalogue.cmdDeleteTimeLog.form.title'],
'delete.action': m['intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog'],
'form.section': m['section.timeLogCatalogue.recordForm.title'],
'picker.title': m['organism.timeLogCatalogue.qryWorkTaskPicker.title'],
'picker.list': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.title'],
'picker.empty': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.empty'],
'picker.workTaskId': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label'],
'picker.projectId': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label'],
'picker.assignedFieldWorkerId': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label'],
'picker.description': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label'],
'picker.dueDate': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label'],
'picker.status': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label'],
'picker.progressUpdate': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label'],
'create.title': m['organism.timeLogCatalogue.cmdCreateTimeLog.title'],
'create.form': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.title'],
'create.action': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
'create.workDate': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label'],
'create.hoursWorked': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label'],
'create.hourlyLaborCost': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
'update.title': m['organism.timeLogCatalogue.cmdUpdateTimeLog.title'],
'update.form': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.title'],
'update.action': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog'],
'update.status': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label'],
'update.fieldWorkerId': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label'],
'update.workDate': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label'],
'update.hoursWorked': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label'],
'update.hourlyLaborCost': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label'],
'create.success': m['action.cmdCreateTimeLog.success'],
'create.error': m['action.cmdCreateTimeLog.error'],
'update.success': m['action.cmdUpdateTimeLog.success'],
'update.error': m['action.cmdUpdateTimeLog.error'],
'delete.success': m['action.cmdDeleteTimeLog.success'],
'delete.error': m['action.cmdDeleteTimeLog.error'],
'workspace.title': m['section.timeLogCatalogue.recordWorkspace.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'page.loading': 'Carregando…',
'create.submit': 'Registrar horas',
'update.submit': 'Salvar alterações',
'picker.choose': 'Selecione uma tarefa',
'delete.choose': 'Selecione um registro',
'feedback.dismiss': 'Fechar mensagem',
'noSelection': 'Selecione um registro para editar ou excluir.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'page.loading': 'Carregando…', 'create.submit': 'Registrar horas', 'update.submit': 'Salvar alterações', 'picker.choose': 'Selecione uma tarefa', 'delete.choose': 'Selecione um registro', 'feedback.dismiss': 'Fechar mensagem', 'noSelection': 'Selecione um registro para editar ou excluir.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'page.loading': 'Loading…', 'create.submit': 'Log hours', 'update.submit': 'Save changes', 'picker.choose': 'Select a task', 'delete.choose': 'Select a record', 'feedback.dismiss': 'Dismiss message', 'noSelection': 'Select a record to edit or delete.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'page.loading': 'Cargando…', 'create.submit': 'Registrar horas', 'update.submit': 'Guardar cambios', 'picker.choose': 'Seleccione una tarea', 'delete.choose': 'Seleccione un registro', 'feedback.dismiss': 'Cerrar mensaje', 'noSelection': 'Seleccione un registro para editar o eliminar.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--time-log-catalogue-102046')
export class BuildFlowFsmDesktopPage11TimeLogCataloguePage extends BuildFlowFsmTimeLogCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
<h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
${this.renderList()}
${this.renderTaskPicker()}
${this.renderCreateForm()}
${this.renderUpdateForm()}
${this.renderDeleteForm()}
</div></main>`;
}
renderList() {
const msg = this.msg;
const rows = this.qryListTimeLogData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
<div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.section']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListTimeLogClick(event)}>${msg['list.title']}</button></div>
${this.qryListTimeLogState === 'loading' ? html`<p>${msg['page.loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['list.timeLogId'],msg['list.status'],msg['list.workTaskId'],msg['list.fieldWorkerId'],msg['list.workDate'],msg['list.hoursWorked'],msg['list.hourlyLaborCost']].map((label: string) => html`<th class="px-2 py-2">${label}</th>`)}</tr></thead><tbody>${rows.map((item: QryListTimeLogOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-2 py-2">${item.timeLogId}</td><td class="px-2 py-2">${item.status}</td><td class="px-2 py-2">${item.workTaskId}</td><td class="px-2 py-2">${item.fieldWorkerId}</td><td class="px-2 py-2">${item.workDate}</td><td class="px-2 py-2">${item.hoursWorked}</td><td class="px-2 py-2">${item.hourlyLaborCost}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderTaskPicker() {
const msg = this.msg;
const rows = this.qryWorkTaskPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><div class="mb-3 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['picker.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryWorkTaskPickerClick(event)}>${msg['picker.list']}</button></div>${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['picker.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr>${[msg['picker.workTaskId'],msg['picker.projectId'],msg['picker.description'],msg['picker.dueDate'],msg['picker.status']].map((label: string) => html`<th class="px-2 py-2">${label}</th>`)}</tr></thead><tbody>${rows.map((item: QryWorkTaskPickerOutput) => html`<tr><td class="px-2 py-2">${item.workTaskId}</td><td class="px-2 py-2">${item.projectId}</td><td class="px-2 py-2">${item.description}</td><td class="px-2 py-2">${item.dueDate}</td><td class="px-2 py-2">${item.status}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['create.title']}</h2><div class="grid gap-4 md:grid-cols-3"><label>${msg['picker.workTaskId']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkTaskWorkTaskId} @change=${(event: Event) => this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange(event)}><option value="">${msg['picker.choose']}</option>${(this.qryWorkTaskPickerData ?? []).map((item: QryWorkTaskPickerOutput) => html`<option value=${item.workTaskId}>${item.description}</option>`)}</select></label><label>${msg['create.workDate']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="date" .value=${this.cmdCreateTimeLogWorkDate} @change=${(event: Event) => this.handleCmdCreateTimeLogWorkDateChange(event)} /></label><label>${msg['create.hoursWorked']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="number" .value=${this.cmdCreateTimeLogHoursWorked} @change=${(event: Event) => this.handleCmdCreateTimeLogHoursWorkedChange(event)} /></label><label>${msg['create.hourlyLaborCost']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="number" .value=${this.cmdCreateTimeLogHourlyLaborCost} @change=${(event: Event) => this.handleCmdCreateTimeLogHourlyLaborCostChange(event)} /></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateTimeLogState === 'loading'} @click=${(event: Event) => this.handleCmdCreateTimeLogClick(event)}>${this.cmdCreateTimeLogState === 'loading' ? msg['page.loading'] : msg['create.submit']}</button>${this.renderFeedback(this.cmdCreateTimeLogState, this.cmdCreateTimeLogError, msg['create.success'], msg['create.error'])}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['update.title']}</h2><div class="grid gap-4 md:grid-cols-3"><label>${msg['list.timeLogId']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateTimeLogTimeLogId} @change=${(event: Event) => this.handleCmdUpdateTimeLogTimeLogIdChange(event)}><option value="">${msg['delete.choose']}</option>${(this.qryListTimeLogData ?? []).map((item: QryListTimeLogOutput) => html`<option value=${item.timeLogId}>${item.timeLogId}</option>`)}</select></label><label>${msg['picker.workTaskId']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateTimeLogWorkTaskId} @change=${(event: Event) => this.handleCmdUpdateTimeLogWorkTaskIdChange(event)}><option value="">${msg['picker.choose']}</option>${(this.qryWorkTaskPickerData ?? []).map((item: QryWorkTaskPickerOutput) => html`<option value=${item.workTaskId}>${item.description}</option>`)}</select></label><label>${msg['update.workDate']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="date" .value=${this.cmdUpdateTimeLogWorkDate} @change=${(event: Event) => this.handleCmdUpdateTimeLogWorkDateChange(event)} /></label><label>${msg['update.hoursWorked']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="number" .value=${this.cmdUpdateTimeLogHoursWorked} @change=${(event: Event) => this.handleCmdUpdateTimeLogHoursWorkedChange(event)} /></label><label>${msg['update.hourlyLaborCost']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" type="number" .value=${this.cmdUpdateTimeLogHourlyLaborCost} @change=${(event: Event) => this.handleCmdUpdateTimeLogHourlyLaborCostChange(event)} /></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateTimeLogState === 'loading'} @click=${(event: Event) => this.handleCmdUpdateTimeLogClick(event)}>${this.cmdUpdateTimeLogState === 'loading' ? msg['page.loading'] : msg['update.submit']}</button>${this.renderFeedback(this.cmdUpdateTimeLogState, this.cmdUpdateTimeLogError, msg['update.success'], msg['update.error'])}</section>`;
}
renderDeleteForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['delete.title']}</h2><label>${msg['list.timeLogId']}<select class="mt-1 w-full max-w-sm rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdDeleteTimeLogTimeLogId} @change=${(event: Event) => this.handleCmdDeleteTimeLogTimeLogIdChange(event)}><option value="">${msg['delete.choose']}</option>${(this.qryListTimeLogData ?? []).map((item: QryListTimeLogOutput) => html`<option value=${item.timeLogId}>${item.timeLogId}</option>`)}</select></label><button class="mt-4 rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteTimeLogState === 'loading' || !this.cmdDeleteTimeLogTimeLogId} @click=${(event: Event) => this.handleCmdDeleteTimeLogClick(event)}>${this.cmdDeleteTimeLogState === 'loading' ? msg['page.loading'] : msg['delete.action']}</button>${this.renderFeedback(this.cmdDeleteTimeLogState, this.cmdDeleteTimeLogError, msg['delete.success'], msg['delete.error'])}</section>`;
}
renderFeedback(state: 'idle' | 'loading' | 'success' | 'error', error: string, success: string, failure: string) {
const msg = this.msg;
return state === 'success' ? html`<div class="mt-3 rounded bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]" role="status">${success}<button class="ml-3 underline" aria-label=${msg['feedback.dismiss']}>${msg['feedback.dismiss']}</button></div>` : state === 'error' ? html`<div class="mt-3 rounded bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]" role="alert">${error || failure}<button class="ml-3 underline" aria-label=${msg['feedback.dismiss']}>${msg['feedback.dismiss']}</button></div>` : nothing;
}
}
