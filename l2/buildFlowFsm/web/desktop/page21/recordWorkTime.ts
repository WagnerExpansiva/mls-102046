/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/recordWorkTime.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordWorkTimeBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.js';
import type { QryLocateFieldWorkerOutput, QryLocateWorkTaskOutput, CmdCreateTimeLogOutput } from '/_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'worker.title': m['section.recordWorkTime.locateFieldWorker.title'],
'worker.organism': m['organism.recordWorkTime.qryLocateFieldWorker.title'],
'task.title': m['section.recordWorkTime.locateWorkTask.title'],
'task.organism': m['organism.recordWorkTime.qryLocateWorkTask.title'],
'task.list.title': m['intent.recordWorkTime.qryLocateWorkTask.list.title'],
'task.empty': m['intent.recordWorkTime.qryLocateWorkTask.list.empty'],
'task.workTaskId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label'],
'task.projectId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label'],
'task.workerId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
'task.description': m['intent.recordWorkTime.qryLocateWorkTask.list.column.description.label'],
'task.dueDate': m['intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label'],
'task.status': m['intent.recordWorkTime.qryLocateWorkTask.list.column.status.label'],
'task.progress': m['intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label'],
'timeLog.title': m['section.recordWorkTime.createTimeLog.title'],
'timeLog.organism': m['organism.recordWorkTime.cmdCreateTimeLog.title'],
'timeLog.form': m['intent.recordWorkTime.cmdCreateTimeLog.form.title'],
'timeLog.submit': m['intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
'timeLog.date': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label'],
'timeLog.hours': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label'],
'timeLog.cost': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
'handoff.title': m['section.recordWorkTime.handoffTimeLogToFieldCoordinator.title'],
'handoff.organism': m['organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title'],
'handoff.form': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title'],
'handoff.submit': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator'],
'handoff.date': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label'],
'handoff.hours': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label'],
'handoff.cost': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label'],
'create.success': m['action.cmdCreateTimeLog.success'],
'create.error': m['action.cmdCreateTimeLog.error'],
'handoff.success': m['action.cmdHandoffTimeLogToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffTimeLogToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'rail.worker': 'Trabalhador', 'rail.task': 'Tarefa', 'rail.hours': 'Horas', 'rail.review': 'Revisão',
'loading': 'Carregando…', 'required': 'Obrigatório', 'chooseTask': 'Selecione uma tarefa', 'recordCreated': 'Registro criado', 'recordReady': 'Registro pronto para encaminhar', 'success': 'Concluído', 'retry': 'Tentar novamente'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'rail.worker': 'Trabalhador', 'rail.task': 'Tarefa', 'rail.hours': 'Horas', 'rail.review': 'Revisão',
'loading': 'Carregando…', 'required': 'Obrigatório', 'chooseTask': 'Selecione uma tarefa', 'recordCreated': 'Registro criado', 'recordReady': 'Registro pronto para encaminhar', 'success': 'Concluído', 'retry': 'Tentar novamente'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'rail.worker': 'Worker', 'rail.task': 'Task', 'rail.hours': 'Hours', 'rail.review': 'Review',
'loading': 'Loading…', 'required': 'Required', 'chooseTask': 'Select a task', 'recordCreated': 'Record created', 'recordReady': 'Record ready to hand off', 'success': 'Completed', 'retry': 'Try again'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'rail.worker': 'Trabajador', 'rail.task': 'Tarea', 'rail.hours': 'Horas', 'rail.review': 'Revisión',
'loading': 'Cargando…', 'required': 'Obligatorio', 'chooseTask': 'Seleccione una tarea', 'recordCreated': 'Registro creado', 'recordReady': 'Registro listo para enviar', 'retry': 'Intentar de nuevo', 'success': 'Completado'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--record-work-time-102046')
export class BuildFlowFsmDesktopPage21RecordWorkTimePage extends BuildFlowFsmRecordWorkTimeBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-8">
  <ol class="mb-6 grid grid-cols-4 gap-2" aria-label=${msg['timeLog.title']}>
    ${[msg['rail.worker'], msg['rail.task'], msg['rail.hours'], msg['rail.review']].map((label: string, index: number) => html`<li class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 text-sm ${index === 0 || (index === 1 && !!this.cmdCreateTimeLogWorkTaskWorkTaskId) || (index === 2 && !!this.cmdCreateTimeLogHoursWorked) ? 'text-[var(--selected-text,#0f172a)]' : 'text-[var(--text-muted,#64748b)]'}"><span class="mr-2 font-bold">${index + 1}</span>${label}</li>`)}</ol>
  ${this.renderWorkerAndTask()}
  ${this.renderTimeLogForm()}
  ${this.renderHandoff()}
</div>`;
}
renderWorkerAndTask() {
const msg = this.msg;
const workers: QryLocateFieldWorkerOutput[] = this.qryLocateFieldWorkerData ?? [];
const tasks: QryLocateWorkTaskOutput[] = this.qryLocateWorkTaskData ?? [];
return html`<section class="grid gap-6 md:grid-cols-2" aria-labelledby="work-context">
  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
    <h2 id="work-context" class="mb-4 text-lg font-bold">${msg['worker.organism']}</h2>
    ${this.qryLocateFieldWorkerState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : workers.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['task.empty']}</p>` : workers.map((worker: QryLocateFieldWorkerOutput) => html`<div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3"><span class="font-medium">${worker.platformUserId}</span></div>`)}</div>
  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
    <h2 class="mb-4 text-lg font-bold">${msg['task.organism']}</h2>
    ${this.qryLocateWorkTaskState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : html`<label class="mb-4 block text-sm font-medium">${msg['task.list.title']} <span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span>
      <select class="mt-2 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdCreateTimeLogWorkTaskWorkTaskId} @change=${this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange}>
        <option value="">${msg['chooseTask']}</option>
        ${tasks.map((task: QryLocateWorkTaskOutput) => html`<option value=${task.workTaskId}>${task.description} — ${task.status}</option>`)}
      </select></label>`}
  </div>
</section>`;
}
renderTimeLogForm() {
const msg = this.msg;
const valid = !!this.cmdCreateTimeLogWorkTaskWorkTaskId && !!this.cmdCreateTimeLogWorkDate && !!this.cmdCreateTimeLogHoursWorked && !!this.cmdCreateTimeLogHourlyLaborCost;
return html`<section class="mt-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
  <h2 class="mb-1 text-lg font-bold">${msg['timeLog.title']}</h2><p class="mb-5 text-[var(--text-muted,#64748b)]">${msg['timeLog.form']}</p>
  ${this.cmdCreateTimeLogState === 'success' ? html`<p class="mb-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}
  ${this.cmdCreateTimeLogState === 'error' ? html`<p class="mb-4 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateTimeLogError || msg['create.error']}</p>` : nothing}
  <div class="grid gap-4 md:grid-cols-3">
    <label class="text-sm font-medium">${msg['timeLog.date']} <span class="text-[var(--status-error-text,#991b1b)]">*</span><input type="date" required .value=${this.cmdCreateTimeLogWorkDate} @change=${this.handleCmdCreateTimeLogWorkDateChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
    <label class="text-sm font-medium">${msg['timeLog.hours']} <span class="text-[var(--status-error-text,#991b1b)]">*</span><input type="number" min="0" step="0.25" required .value=${this.cmdCreateTimeLogHoursWorked} @change=${this.handleCmdCreateTimeLogHoursWorkedChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
    <label class="text-sm font-medium">${msg['timeLog.cost']} <span class="text-[var(--status-error-text,#991b1b)]">*</span><input type="number" min="0" step="0.01" required .value=${this.cmdCreateTimeLogHourlyLaborCost} @change=${this.handleCmdCreateTimeLogHourlyLaborCostChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
  </div>
  <button class="mt-6 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-5 py-3 font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!valid || this.cmdCreateTimeLogState === 'loading'} @click=${this.handleCmdCreateTimeLogClick}>${this.cmdCreateTimeLogState === 'loading' ? msg['loading'] : msg['timeLog.submit']}</button>
</section>`;
}
renderHandoff() {
const msg = this.msg;
const output: CmdCreateTimeLogOutput | null = this.cmdCreateTimeLogOutput;
const timeLogId = output?.timeLogId ?? '';
const valid = !!timeLogId && !!this.cmdHandoffTimeLogToFieldCoordinatorWorkDate && !!this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked && !!this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost;
return output ? html`<section class="mt-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
  <h2 class="mb-1 text-lg font-bold">${msg['handoff.title']}</h2><p class="mb-5 text-[var(--text-muted,#64748b)]">${msg['recordReady']}</p>
  ${this.cmdHandoffTimeLogToFieldCoordinatorState === 'success' ? html`<p class="mb-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}
  ${this.cmdHandoffTimeLogToFieldCoordinatorState === 'error' ? html`<p class="mb-4 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffTimeLogToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}
  <div class="mb-4 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3 text-sm"><span class="font-medium">${msg['recordCreated']}:</span> ${timeLogId}</div>
  <div class="grid gap-4 md:grid-cols-3">
    <label class="text-sm font-medium">${msg['handoff.date']}<input type="date" required .value=${this.cmdHandoffTimeLogToFieldCoordinatorWorkDate} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
    <label class="text-sm font-medium">${msg['handoff.hours']}<input type="number" min="0" step="0.25" required .value=${this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
    <label class="text-sm font-medium">${msg['handoff.cost']}<input type="number" min="0" step="0.01" required .value=${this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost} @change=${this.handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange} class="mt-2 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3"></label>
  </div>
  <button class="mt-6 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-5 py-3 font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!valid || this.cmdHandoffTimeLogToFieldCoordinatorState === 'loading'} @click=${(event: Event) => { this.setCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId(timeLogId); this.handleCmdHandoffTimeLogToFieldCoordinatorClick(event); }}>${this.cmdHandoffTimeLogToFieldCoordinatorState === 'loading' ? msg['loading'] : msg['handoff.submit']}</button>
</section>` : nothing;
}
}
