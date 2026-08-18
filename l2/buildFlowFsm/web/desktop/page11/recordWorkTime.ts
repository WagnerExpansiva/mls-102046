/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/recordWorkTime.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordWorkTimeBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.js';
import type { QryLocateFieldWorkerOutput, QryLocateWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'workspace.title': m['section.recordWorkTime.workLogWorkspace.title'],
'worker.section': m['section.recordWorkTime.locateFieldWorker.title'],
'worker.title': m['intent.recordWorkTime.qryLocateFieldWorker.list.title'],
'worker.empty': m['intent.recordWorkTime.qryLocateFieldWorker.list.empty'],
'worker.platformUserId': m['intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label'],
'task.section': m['section.recordWorkTime.locateWorkTask.title'],
'task.title': m['intent.recordWorkTime.qryLocateWorkTask.list.title'],
'task.empty': m['intent.recordWorkTime.qryLocateWorkTask.list.empty'],
'task.workTaskId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label'],
'task.projectId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label'],
'task.workerId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
'task.description': m['intent.recordWorkTime.qryLocateWorkTask.list.column.description.label'],
'task.dueDate': m['intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label'],
'task.status': m['intent.recordWorkTime.qryLocateWorkTask.list.column.status.label'],
'task.progress': m['intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label'],
'create.section': m['section.recordWorkTime.createTimeLog.title'],
'create.title': m['intent.recordWorkTime.cmdCreateTimeLog.form.title'],
'create.action': m['intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
'create.workDate': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label'],
'create.hours': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label'],
'create.cost': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
'handoff.section': m['section.recordWorkTime.handoffTimeLogToFieldCoordinator.title'],
'handoff.title': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title'],
'handoff.action': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator'],
'handoff.workDate': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label'],
'handoff.hours': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label'],
'handoff.cost': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label'],
'create.success': m['action.cmdCreateTimeLog.success'],
'create.error': m['action.cmdCreateTimeLog.error'],
'handoff.success': m['action.cmdHandoffTimeLogToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffTimeLogToFieldCoordinator.error']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…',
'chooseTask': 'Selecione uma tarefa',
'noSelection': 'Selecione uma tarefa para registrar as horas.',
'noTimeLog': 'Nenhum registro de horas disponível para encaminhamento.',
'submitLoading': 'Registrando…',
'handoffLoading': 'Encaminhando…',
'errorDetails': 'Não foi possível concluir esta ação.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…',
'chooseTask': 'Selecione uma tarefa',
'noSelection': 'Selecione uma tarefa para registrar as horas.',
'noTimeLog': 'Nenhum registro de horas disponível para encaminhamento.',
'submitLoading': 'Registrando…',
'handoffLoading': 'Encaminhando…',
'errorDetails': 'Não foi possível concluir esta ação.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…',
'chooseTask': 'Select a task',
'noSelection': 'Select a task to record the hours.',
'noTimeLog': 'No time log is available for handoff.',
'submitLoading': 'Recording…',
'handoffLoading': 'Handing off…',
'errorDetails': 'This action could not be completed.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…',
'chooseTask': 'Seleccione una tarea',
'noSelection': 'Seleccione una tarea para registrar las horas.',
'noTimeLog': 'No hay registro de horas disponible para enviar.',
'submitLoading': 'Registrando…',
'handoffLoading': 'Enviando…',
'errorDetails': 'No se pudo completar esta acción.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--record-work-time-102046')
export class BuildFlowFsmDesktopPage11RecordWorkTimePage extends BuildFlowFsmRecordWorkTimeBase {
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
    ${this.renderWorker()}
    ${this.renderTask()}
    ${this.renderCreateForm()}
    ${this.renderHandoffForm()}
  </div>
</main>`;
}
renderWorker() {
const msg = this.msg;
const rows: QryLocateFieldWorkerOutput[] = this.qryLocateFieldWorkerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
  <h2 class="text-lg font-semibold">${msg['worker.section']}</h2>
  <div class="mt-3 flex items-center justify-between">
    <h3 class="font-medium">${msg['worker.title']}</h3>
    <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryLocateFieldWorkerClick} ?disabled=${this.qryLocateFieldWorkerState === 'loading'}>${this.qryLocateFieldWorkerState === 'loading' ? msg['loading'] : msg['worker.title']}</button>
  </div>
  ${this.qryLocateFieldWorkerState === 'loading' ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['worker.empty']}</p>` : html`<ul class="mt-3 divide-y divide-[var(--border-subtle,#e2e8f0)]">${rows.map((worker: QryLocateFieldWorkerOutput) => html`<li class="py-2">${worker.platformUserId}</li>`)}</ul>`}
</section>`;
}
renderTask() {
const msg = this.msg;
const rows: QryLocateWorkTaskOutput[] = this.qryLocateWorkTaskData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
  <h2 class="text-lg font-semibold">${msg['task.section']}</h2>
  <div class="mt-3 flex items-center justify-between"><h3 class="font-medium">${msg['task.title']}</h3><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryLocateWorkTaskClick} ?disabled=${this.qryLocateWorkTaskState === 'loading'}>${this.qryLocateWorkTaskState === 'loading' ? msg['loading'] : msg['task.title']}</button></div>
  ${this.qryLocateWorkTaskState === 'loading' ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['task.empty']}</p>` : html`<div class="mt-3 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left"><th class="p-2">${msg['task.workTaskId']}</th><th class="p-2">${msg['task.projectId']}</th><th class="p-2">${msg['task.workerId']}</th><th class="p-2">${msg['task.description']}</th><th class="p-2">${msg['task.dueDate']}</th><th class="p-2">${msg['task.status']}</th><th class="p-2">${msg['task.progress']}</th></tr></thead><tbody>${rows.map((task: QryLocateWorkTaskOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${task.workTaskId}</td><td class="p-2">${task.projectId}</td><td class="p-2">${task.assignedFieldWorkerId}</td><td class="p-2">${task.description}</td><td class="p-2">${task.dueDate}</td><td class="p-2">${task.status}</td><td class="p-2">${task.progressUpdate}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderCreateForm() {
const msg = this.msg;
const busy = this.cmdCreateTimeLogState === 'loading';
const selected = this.cmdCreateTimeLogWorkTaskWorkTaskId;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['create.section']}</h2><h3 class="mt-3 font-medium">${msg['create.title']}</h3><div class="mt-4 grid gap-4 sm:grid-cols-3"><label class="flex flex-col gap-1 sm:col-span-3">${msg['task.title']}<select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${selected} @change=${this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange}><option value="">${msg['chooseTask']}</option>${(this.qryLocateWorkTaskData ?? []).map((task: QryLocateWorkTaskOutput) => html`<option value=${task.workTaskId}>${task.description}</option>`)}</select></label><label class="flex flex-col gap-1">${msg['create.workDate']}<input type="date" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkDate} @change=${this.handleCmdCreateTimeLogWorkDateChange}></label><label class="flex flex-col gap-1">${msg['create.hours']}<input type="number" min="0" step="0.01" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogHoursWorked} @change=${this.handleCmdCreateTimeLogHoursWorkedChange}></label><label class="flex flex-col gap-1">${msg['create.cost']}<input type="number" min="0" step="0.01" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogHourlyLaborCost} @change=${this.handleCmdCreateTimeLogHourlyLaborCostChange}></label></div>${!selected ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p>` : nothing}<button type="button" class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdCreateTimeLogClick} ?disabled=${busy || !selected}>${busy ? msg['submitLoading'] : msg['create.action']}</button>${this.cmdCreateTimeLogState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateTimeLogState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateTimeLogError || msg['create.error'] || msg['errorDetails']}</p>` : nothing}</section>`;
}
renderHandoffForm() {
const msg = this.msg;
const busy = this.cmdHandoffTimeLogToFieldCoordinatorState === 'loading';
const hasTimeLog = Boolean(this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId);
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['handoff.section']}</h2><h3 class="mt-3 font-medium">${msg['handoff.title']}</h3><div class="mt-4 grid gap-4 sm:grid-cols-3"><label class="flex flex-col gap-1">${msg['handoff.workDate']}<input type="date" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffTimeLogToFieldCoordinatorWorkDate} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange}></label><label class="flex flex-col gap-1">${msg['handoff.hours']}<input type="number" min="0" step="0.01" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange}></label><label class="flex flex-col gap-1">${msg['handoff.cost']}<input type="number" min="0" step="0.01" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange}></label></div>${!hasTimeLog ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['noTimeLog']}</p>` : nothing}<button type="button" class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdHandoffTimeLogToFieldCoordinatorClick} ?disabled=${busy || !hasTimeLog}>${busy ? msg['handoffLoading'] : msg['handoff.action']}</button>${this.cmdHandoffTimeLogToFieldCoordinatorState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffTimeLogToFieldCoordinatorState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffTimeLogToFieldCoordinatorError || msg['handoff.error'] || msg['errorDetails']}</p>` : nothing}</section>`;
}
}
