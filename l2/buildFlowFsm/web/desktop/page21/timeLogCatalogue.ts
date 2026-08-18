/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/timeLogCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'list.title': m['organism.timeLogCatalogue.qryListTimeLog.title'],
  'list.intent': m['intent.timeLogCatalogue.qryListTimeLog.list.title'],
  'list.empty': m['intent.timeLogCatalogue.qryListTimeLog.list.empty'],
  'list.timeLogId': m['intent.timeLogCatalogue.qryListTimeLog.list.column.timeLogId.label'],
  'list.status': m['intent.timeLogCatalogue.qryListTimeLog.list.column.status.label'],
  'list.task': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workTaskId.label'],
  'list.worker': m['intent.timeLogCatalogue.qryListTimeLog.list.column.fieldWorkerId.label'],
  'list.date': m['intent.timeLogCatalogue.qryListTimeLog.list.column.workDate.label'],
  'list.hours': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hoursWorked.label'],
  'list.cost': m['intent.timeLogCatalogue.qryListTimeLog.list.column.hourlyLaborCost.label'],
  'task.section': m['organism.timeLogCatalogue.qryWorkTaskPicker.title'],
  'task.title': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.title'],
  'task.empty': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.empty'],
  'task.id': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.workTaskId.label'],
  'task.project': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.projectId.label'],
  'task.worker': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.assignedFieldWorkerId.label'],
  'task.description': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.description.label'],
  'task.due': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.dueDate.label'],
  'task.status': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.status.label'],
  'task.progress': m['intent.timeLogCatalogue.qryWorkTaskPicker.list.column.progressUpdate.label'],
  'create.section': m['section.timeLogCatalogue.recordForm.title'],
  'create.title': m['organism.timeLogCatalogue.cmdCreateTimeLog.title'],
  'create.form': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.title'],
  'create.action': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
  'create.date': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.workDate.label'],
  'create.hours': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hoursWorked.label'],
  'create.cost': m['intent.timeLogCatalogue.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
  'update.title': m['organism.timeLogCatalogue.cmdUpdateTimeLog.title'],
  'update.form': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.title'],
  'update.action': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.action.cmdUpdateTimeLog'],
  'update.status': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.status.label'],
  'update.worker': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.fieldWorkerId.label'],
  'update.date': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.workDate.label'],
  'update.hours': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hoursWorked.label'],
  'update.cost': m['intent.timeLogCatalogue.cmdUpdateTimeLog.form.field.hourlyLaborCost.label'],
  'delete.title': m['organism.timeLogCatalogue.cmdDeleteTimeLog.title'],
  'delete.form': m['intent.timeLogCatalogue.cmdDeleteTimeLog.form.title'],
  'delete.action': m['intent.timeLogCatalogue.cmdDeleteTimeLog.form.action.cmdDeleteTimeLog'],
  'create.success': m['action.cmdCreateTimeLog.success'],
  'create.error': m['action.cmdCreateTimeLog.error'],
  'update.success': m['action.cmdUpdateTimeLog.success'],
  'update.error': m['action.cmdUpdateTimeLog.error'],
  'delete.success': m['action.cmdDeleteTimeLog.success'],
  'delete.error': m['action.cmdDeleteTimeLog.error'],
  'workspace': m['section.timeLogCatalogue.recordWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
// The copy you invent, with short keys. Only this part repeats per language.
  'new.record': 'Novo registro de horas',
  'choose.task': 'Escolha uma tarefa',
  'select.record': 'Selecione um registro para revisar',
  'required': 'Obrigatório',
  'loading': 'Carregando…',
  'selected': 'Selecionado',
  'no.selection': 'Nenhum registro selecionado',
  'confirm.delete': 'Confirma a exclusão deste registro de horas?',
  'save.ready': 'Preencha os campos obrigatórios',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to pt-br.
  'new.record': 'Novo registro de horas', 'choose.task': 'Escolha uma tarefa', 'select.record': 'Selecione um registro para revisar', 'required': 'Obrigatório', 'loading': 'Carregando…', 'selected': 'Selecionado', 'no.selection': 'Nenhum registro selecionado', 'confirm.delete': 'Confirma a exclusão deste registro de horas?', 'save.ready': 'Preencha os campos obrigatórios',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to en.
  'new.record': 'New time log', 'choose.task': 'Choose a task', 'select.record': 'Select a record to review', 'required': 'Required', 'loading': 'Loading…', 'selected': 'Selected', 'no.selection': 'No record selected', 'confirm.delete': 'Confirm deletion of this time log?', 'save.ready': 'Complete the required fields',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to es.
  'new.record': 'Nuevo registro de horas', 'choose.task': 'Elija una tarea', 'select.record': 'Seleccione un registro para revisar', 'required': 'Obligatorio', 'loading': 'Cargando…', 'selected': 'Seleccionado', 'no.selection': 'No hay registro seleccionado', 'confirm.delete': '¿Confirma eliminar este registro de horas?', 'save.ready': 'Complete los campos obligatorios',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--time-log-catalogue-102046')
export class BuildFlowFsmDesktopPage21TimeLogCataloguePage extends BuildFlowFsmTimeLogCatalogueBase {
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
  <div class="mx-auto max-w-7xl space-y-6">
    <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.9fr)]">
      ${this.renderTaskPicker()}
      ${this.renderRecordList()}
    </section>
    <section aria-label=${msg['workspace']}>
      ${this.renderRecordForm()}
    </section>
  </div>
</main>`;
}
renderTaskPicker() {
const msg = this.msg;
const tasks: QryWorkTaskPickerOutput[] = this.qryWorkTaskPickerData ?? [];
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <div class="mb-4"><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['task.section']}</p><h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['task.title']}</h2></div>
  ${this.qryWorkTaskPickerState === 'loading' ? html`<p class="animate-pulse text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : tasks.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['task.empty']}</p>` : html`<div class="grid gap-3 sm:grid-cols-2">
    ${tasks.map((task: QryWorkTaskPickerOutput) => html`<button type="button" class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-left hover:border-[var(--selected-border,#2563eb)]" @click=${() => { this.setCmdCreateTimeLogWorkTaskWorkTaskId(task.workTaskId); this.setCmdUpdateTimeLogWorkTaskId(task.workTaskId); }}>
      <p class="font-medium">${task.description}</p><dl class="mt-2 space-y-1 text-sm text-[var(--text-muted,#64748b)]"><div><dt class="inline">${msg['task.due']}: </dt><dd class="inline">${task.dueDate}</dd></div><div><dt class="inline">${msg['task.status']}: </dt><dd class="inline">${task.status}</dd></div><div><dt class="inline">${msg['task.progress']}: </dt><dd class="inline">${task.progressUpdate}</dd></div></dl>
    </button>`)}
  </div>`}
</article>`;
}
renderRecordList() {
const msg = this.msg;
const records: QryListTimeLogOutput[] = this.qryListTimeLogData ?? [];
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <div class="mb-4"><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.section']}</p><h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2></div>
  ${this.qryListTimeLogState === 'loading' ? html`<div class="space-y-3 animate-pulse"><div class="h-10 rounded bg-[var(--surface-alt-bg,#f8fafc)]"></div><div class="h-10 rounded bg-[var(--surface-alt-bg,#f8fafc)]"></div></div>` : records.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['list.timeLogId'], msg['list.status'], msg['list.task'], msg['list.date'], msg['list.hours'], msg['list.cost']].map((label: string) => html`<th class="px-2 py-3 font-medium text-[var(--text-muted,#64748b)]">${label}</th>`)}</tr></thead><tbody>
    ${records.map((record: QryListTimeLogOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${this.cmdUpdateTimeLogTimeLogId === record.timeLogId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}"><td class="px-2 py-3"><button type="button" class="font-medium underline-offset-2 hover:underline" @click=${() => { this.setCmdUpdateTimeLogTimeLogId(record.timeLogId); this.setCmdUpdateTimeLogStatus(record.status); this.setCmdUpdateTimeLogWorkTaskId(record.workTaskId); this.setCmdUpdateTimeLogFieldWorkerId(record.fieldWorkerId); this.setCmdUpdateTimeLogWorkDate(record.workDate); this.setCmdUpdateTimeLogHoursWorked(String(record.hoursWorked)); this.setCmdUpdateTimeLogHourlyLaborCost(String(record.hourlyLaborCost)); this.setCmdDeleteTimeLogTimeLogId(record.timeLogId); }}>${record.timeLogId}</button></td><td class="px-2 py-3">${record.status}</td><td class="px-2 py-3">${record.workTaskId}</td><td class="px-2 py-3">${record.workDate}</td><td class="px-2 py-3">${record.hoursWorked}</td><td class="px-2 py-3">${record.hourlyLaborCost}</td></tr>`)}
  </tbody></table></div>`}
</article>`;
}
renderRecordForm() {
const msg = this.msg;
const hasTask = this.cmdCreateTimeLogWorkTaskWorkTaskId.length > 0;
const hasRecord = this.cmdUpdateTimeLogTimeLogId.length > 0;
const createReady = hasTask && this.cmdCreateTimeLogWorkDate.length > 0 && this.cmdCreateTimeLogHoursWorked.length > 0 && this.cmdCreateTimeLogHourlyLaborCost.length > 0;
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-sm">
  <div class="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--border-subtle,#e2e8f0)] pb-4"><div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.section']}</p><h2 class="text-2xl font-semibold">${hasRecord ? msg['update.title'] : msg['new.record']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${hasRecord ? `${msg['selected']}: ${this.cmdUpdateTimeLogTimeLogId}` : msg['select.record']}</p></div>${hasRecord ? html`<span class="rounded-full bg-[var(--status-info-bg,#e0f2fe)] px-3 py-1 text-sm text-[var(--status-info-text,#075985)]">${this.cmdUpdateTimeLogStatus}</span>` : nothing}</div>
  <div class="mt-5 max-w-3xl space-y-5">
    ${hasRecord ? html`<div><h3 class="mb-3 text-lg font-medium">${msg['update.form']}</h3><div class="grid gap-4 sm:grid-cols-2"><label class="space-y-1 text-sm"><span>${msg['update.status']}</span><output class="block rounded border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-2">${this.cmdUpdateTimeLogStatus}</output></label><label class="space-y-1 text-sm"><span>${msg['update.worker']}</span><output class="block rounded border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-2">${this.cmdUpdateTimeLogFieldWorkerId}</output></label>${this.renderUpdateFields()}</div></div>` : html`<div><h3 class="mb-3 text-lg font-medium">${msg['create.form']}</h3><label class="mb-4 block space-y-1 text-sm"><span>${msg['choose.task']} <b aria-label=${msg['required']}>*</b></span><select class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkTaskWorkTaskId} @change=${this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange}><option value="">${msg['choose.task']}</option>${(this.qryWorkTaskPickerData ?? []).map((task: QryWorkTaskPickerOutput) => html`<option value=${task.workTaskId}>${task.description}</option>`)}</select></label><div class="grid gap-4 sm:grid-cols-3">${this.renderCreateFields()}</div></div>`}
    ${this.renderFeedback()}
  </div>
</article>`;
}
renderCreateFields() {
const msg = this.msg;
return html`<label class="space-y-1 text-sm"><span>${msg['create.date']} *</span><input type="date" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkDate} @change=${this.handleCmdCreateTimeLogWorkDateChange}></label><label class="space-y-1 text-sm"><span>${msg['create.hours']} *</span><input type="number" min="0" step="0.25" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogHoursWorked} @change=${this.handleCmdCreateTimeLogHoursWorkedChange}></label><label class="space-y-1 text-sm"><span>${msg['create.cost']} *</span><input type="number" min="0" step="0.01" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogHourlyLaborCost} @change=${this.handleCmdCreateTimeLogHourlyLaborCostChange}></label>`;
}
renderUpdateFields() {
const msg = this.msg;
return html`<label class="space-y-1 text-sm"><span>${msg['update.date']}</span><input type="date" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateTimeLogWorkDate} @change=${this.handleCmdUpdateTimeLogWorkDateChange}></label><label class="space-y-1 text-sm"><span>${msg['update.hours']}</span><input type="number" min="0" step="0.25" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateTimeLogHoursWorked} @change=${this.handleCmdUpdateTimeLogHoursWorkedChange}></label><label class="space-y-1 text-sm"><span>${msg['update.cost']}</span><input type="number" min="0" step="0.01" class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateTimeLogHourlyLaborCost} @change=${this.handleCmdUpdateTimeLogHourlyLaborCostChange}></label><div class="sm:col-span-2"><button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateTimeLogState === 'loading'} @click=${this.handleCmdUpdateTimeLogClick}>${this.cmdUpdateTimeLogState === 'loading' ? msg['loading'] : msg['update.action']}</button><button type="button" class="ml-3 rounded bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteTimeLogState === 'loading'} @click=${(event: Event) => { if (window.confirm(msg['confirm.delete'])) this.handleCmdDeleteTimeLogClick(event); }}>${this.cmdDeleteTimeLogState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div>`;
}
renderFeedback() {
const msg = this.msg;
return html`<div class="space-y-2" aria-live="polite">${this.cmdCreateTimeLogState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateTimeLogState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateTimeLogError || msg['create.error']}</p>` : nothing}${this.cmdUpdateTimeLogState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateTimeLogState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateTimeLogError || msg['update.error']}</p>` : nothing}${this.cmdDeleteTimeLogState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteTimeLogState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteTimeLogError || msg['delete.error']}</p>` : nothing}<button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!((this.cmdCreateTimeLogWorkTaskWorkTaskId && this.cmdCreateTimeLogWorkDate && this.cmdCreateTimeLogHoursWorked && this.cmdCreateTimeLogHourlyLaborCost)) || this.cmdCreateTimeLogState === 'loading'} @click=${this.handleCmdCreateTimeLogClick}>${this.cmdCreateTimeLogState === 'loading' ? msg['loading'] : msg['create.action']}</button></div>`;
}
}
