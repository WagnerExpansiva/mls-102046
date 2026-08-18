/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/timeLogCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'records.title': m['section.timeLogCatalogue.recordList.title'],
'records.listTitle': m['intent.timeLogCatalogue.qryListTimeLog.list.title'],
'records.empty': m['intent.timeLogCatalogue.qryListTimeLog.list.empty'],
'records.timeLogId': m['intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label'],
'records.status': m['intent.timeLogCatalogue.qryListTimeLog.list.column.status.label'],
'records.task': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label'],
'records.worker': m['intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label'],
'records.date': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label'],
'records.hours': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label'],
'records.cost': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label'],
'picker.title': m['organism.timeLogCatalogue.qryWorkTaskPicker.title'],
'picker.listTitle': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.title'],
'picker.empty': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.empty'],
'picker.id': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label'],
'picker.description': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label'],
'create.title': m['organism.timeLogCatalogue.cmdCreateTimeLog.title'],
'create.formTitle': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.title'],
'create.save': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
'create.date': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label'],
'create.hours': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label'],
'create.cost': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
'update.title': m['organism.timeLogCatalogue.cmdUpdateTimeLog.title'],
'update.formTitle': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.title'],
'update.save': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog'],
'update.worker': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label'],
'update.date': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label'],
'update.hours': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label'],
'update.cost': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label'],
'delete.title': m['organism.timeLogCatalogue.cmdDeleteTimeLog.title'],
'delete.action': m['intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog'],
'create.success': m['action.cmdCreateTimeLog.success'],
'create.error': m['action.cmdCreateTimeLog.error'],
'update.success': m['action.cmdUpdateTimeLog.success'],
'update.error': m['action.cmdUpdateTimeLog.error'],
'delete.success': m['action.cmdDeleteTimeLog.success'],
'delete.error': m['action.cmdDeleteTimeLog.error'],
'workspace.title': m['section.timeLogCatalogue.recordWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'create.chooseTask': 'Selecione uma tarefa',
'create.required': 'Obrigatório',
'create.loading': 'Salvando…',
'update.noSelection': 'Selecione um registro para editar.',
'update.loading': 'Salvando…',
'delete.confirm': 'Confirma a exclusão deste registro de horas?',
'delete.loading': 'Excluindo…',
'loading': 'Carregando…',
'selected': 'Registro selecionado',
'clear': 'Limpar seleção',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'create.chooseTask': 'Selecione uma tarefa', 'create.required': 'Obrigatório', 'create.loading': 'Salvando…', 'update.noSelection': 'Selecione um registro para editar.', 'update.loading': 'Salvando…', 'delete.confirm': 'Confirma a exclusão deste registro de horas?', 'delete.loading': 'Excluindo…', 'loading': 'Carregando…', 'selected': 'Registro selecionado', 'clear': 'Limpar seleção',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'create.chooseTask': 'Choose a task', 'create.required': 'Required', 'create.loading': 'Saving…', 'update.noSelection': 'Select a record to edit.', 'update.loading': 'Saving…', 'delete.confirm': 'Delete this time log?', 'delete.loading': 'Deleting…', 'loading': 'Loading…', 'selected': 'Selected record', 'clear': 'Clear selection',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'create.chooseTask': 'Seleccione una tarea', 'create.required': 'Obligatorio', 'create.loading': 'Guardando…', 'update.noSelection': 'Seleccione un registro para editar.', 'update.loading': 'Guardando…', 'delete.confirm': '¿Eliminar este registro de horas?', 'delete.loading': 'Eliminando…', 'loading': 'Cargando…', 'selected': 'Registro seleccionado', 'clear': 'Limpiar selección',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--time-log-catalogue-102046')
export class BuildFlowFsmDesktopPage31TimeLogCataloguePage extends BuildFlowFsmTimeLogCatalogueBase {
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
return html`<main class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderHeader(msg)}
${this.renderRecords(msg)}
<div class="grid gap-6 lg:grid-cols-2">${this.renderCreate(msg)}${this.renderUpdate(msg)}</div>
</main>`;
}
renderHeader(msg: PageMessageType) {
return html`<header class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h1 class="text-xl font-bold">${msg['workspace.title']}</h1><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['records.title']}</p></header>`;
}
renderRecords(msg: PageMessageType) {
const rows: QryListTimeLogOutput[] = this.qryListTimeLogData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['records.listTitle']}</h2>${this.qryListTimeLogState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['records.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['records.task']}</th><th class="p-2">${msg['records.date']}</th><th class="p-2">${msg['records.hours']}</th><th class="p-2">${msg['records.cost']}</th><th class="p-2">${msg['records.status']}</th><th class="p-2">${msg['delete.title']}</th></tr></thead><tbody>${rows.map((row: QryListTimeLogOutput) => html`<tr class=${row.timeLogId === this.cmdUpdateTimeLogTimeLogId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}><td class="p-2"><button class="underline" @click=${() => { this.setCmdUpdateTimeLogTimeLogId(row.timeLogId); this.setCmdDeleteTimeLogTimeLogId(row.timeLogId); this.setCmdUpdateTimeLogWorkTaskId(row.workTaskId); this.setCmdUpdateTimeLogStatus(row.status); this.setCmdUpdateTimeLogFieldWorkerId(row.fieldWorkerId); this.setCmdUpdateTimeLogWorkDate(row.workDate); this.setCmdUpdateTimeLogHoursWorked(String(row.hoursWorked)); this.setCmdUpdateTimeLogHourlyLaborCost(String(row.hourlyLaborCost)); }}>${row.workTaskId}</button></td><td class="p-2">${row.workDate}</td><td class="p-2">${row.hoursWorked}</td><td class="p-2">${row.hourlyLaborCost}</td><td class="p-2">${row.status}</td><td class="p-2"><button class="rounded bg-[var(--button-danger-bg,#b91c1c)] px-3 py-1 text-[var(--button-danger-text,#ffffff)]" @click=${() => { if (window.confirm(msg['delete.confirm'])) { this.setCmdDeleteTimeLogTimeLogId(row.timeLogId); this.handleCmdDeleteTimeLogClick(); } }} ?disabled=${this.cmdDeleteTimeLogState === 'loading'}>${this.cmdDeleteTimeLogState === 'loading' && this.cmdDeleteTimeLogTimeLogId === row.timeLogId ? msg['delete.loading'] : msg['delete.action']}</button></td></tr>`)}</tbody></table></div>`}</section>`;
}
renderCreate(msg: PageMessageType) {
const tasks: QryWorkTaskPickerOutput[] = this.qryWorkTaskPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['create.title']}</h2><form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateTimeLogClick(event); }}><label class="block text-sm">${msg['picker.title']}<select class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkTaskWorkTaskId} @change=${this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange}><option value="">${msg['create.chooseTask']}</option>${tasks.map((task: QryWorkTaskPickerOutput) => html`<option value=${task.workTaskId}>${task.description}</option>`)}</select></label>${this.renderCreateFields(msg)}<button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdCreateTimeLogState === 'loading'}>${this.cmdCreateTimeLogState === 'loading' ? msg['create.loading'] : msg['create.save']}</button>${this.cmdCreateTimeLogState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateTimeLogState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdCreateTimeLogError || msg['create.error']}</p>` : nothing}</form></section>`;
}
renderCreateFields(msg: PageMessageType) {
return html`<label class="block text-sm">${msg['create.date']}<input required type="date" class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateTimeLogWorkDate} @input=${this.handleCmdCreateTimeLogWorkDateChange}></label><label class="block text-sm">${msg['create.hours']}<input required type="number" step="0.01" class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateTimeLogHoursWorked} @input=${this.handleCmdCreateTimeLogHoursWorkedChange}></label><label class="block text-sm">${msg['create.cost']}<input required type="number" step="0.01" class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateTimeLogHourlyLaborCost} @input=${this.handleCmdCreateTimeLogHourlyLaborCostChange}></label>`;
}
renderUpdate(msg: PageMessageType) {
const selected = this.cmdUpdateTimeLogTimeLogId !== '';
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['update.formTitle']}</h2>${selected ? html`<form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateTimeLogClick(event); }}><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['selected']}: ${this.cmdUpdateTimeLogTimeLogId}</p><label class="block text-sm">${msg['update.date']}<input required type="date" class="mt-1 w-full rounded border p-2" .value=${this.cmdUpdateTimeLogWorkDate} @input=${this.handleCmdUpdateTimeLogWorkDateChange}></label><label class="block text-sm">${msg['update.hours']}<input required type="number" step="0.01" class="mt-1 w-full rounded border p-2" .value=${this.cmdUpdateTimeLogHoursWorked} @input=${this.handleCmdUpdateTimeLogHoursWorkedChange}></label><label class="block text-sm">${msg['update.cost']}<input required type="number" step="0.01" class="mt-1 w-full rounded border p-2" .value=${this.cmdUpdateTimeLogHourlyLaborCost} @input=${this.handleCmdUpdateTimeLogHoursWorkedChange}></label><button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdUpdateTimeLogState === 'loading'}>${this.cmdUpdateTimeLogState === 'loading' ? msg['update.loading'] : msg['update.save']}</button>${this.cmdUpdateTimeLogState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateTimeLogState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateTimeLogError || msg['update.error']}</p>` : nothing}</form>` : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.noSelection']}</p>`}</section>`;
}
}
