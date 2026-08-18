/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/recordWorkTime.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'worker.list.title': m['intent.recordWorkTime.qryLocateFieldWorker.list.title'],
'worker.empty': m['intent.recordWorkTime.qryLocateFieldWorker.list.empty'],
'worker.platformUserId': m['intent.recordWorkTime.qryLocateFieldWorker.list.column.platformUserId.label'],
'task.title': m['section.recordWorkTime.locateWorkTask.title'],
'task.organism': m['organism.recordWorkTime.qryLocateWorkTask.title'],
'task.list.title': m['intent.recordWorkTime.qryLocateWorkTask.list.title'],
'task.empty': m['intent.recordWorkTime.qryLocateWorkTask.list.empty'],
'task.workTaskId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.workTaskId.label'],
'task.projectId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.projectId.label'],
'task.assignedFieldWorkerId': m['intent.recordWorkTime.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
'task.description': m['intent.recordWorkTime.qryLocateWorkTask.list.column.description.label'],
'task.dueDate': m['intent.recordWorkTime.qryLocateWorkTask.list.column.dueDate.label'],
'task.status': m['intent.recordWorkTime.qryLocateWorkTask.list.column.status.label'],
'task.progressUpdate': m['intent.recordWorkTime.qryLocateWorkTask.list.column.progressUpdate.label'],
'create.title': m['section.recordWorkTime.createTimeLog.title'],
'create.organism': m['organism.recordWorkTime.cmdCreateTimeLog.title'],
'create.form': m['intent.recordWorkTime.cmdCreateTimeLog.form.title'],
'create.action': m['intent.recordWorkTime.cmdCreateTimeLog.form.action.cmdCreateTimeLog'],
'create.workDate': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.workDate.label'],
'create.hoursWorked': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hoursWorked.label'],
'create.hourlyLaborCost': m['intent.recordWorkTime.cmdCreateTimeLog.form.field.hourlyLaborCost.label'],
'handoff.title': m['section.recordWorkTime.handoffTimeLogToFieldCoordinator.title'],
'handoff.organism': m['organism.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.title'],
'handoff.form': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.title'],
'handoff.action': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.action.cmdHandoffTimeLogToFieldCoordinator'],
'handoff.workDate': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.workDate.label'],
'handoff.hoursWorked': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hoursWorked.label'],
'handoff.hourlyLaborCost': m['intent.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator.form.field.hourlyLaborCost.label'],
'create.success': m['action.cmdCreateTimeLog.success'],
'create.error': m['action.cmdCreateTimeLog.error'],
'handoff.success': m['action.cmdHandoffTimeLogToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffTimeLogToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
// The copy you invent, with short keys. Only this part repeats per language.
'required': 'Obrigatório',
'loading': 'Carregando…',
'chooseTask': 'Selecione a tarefa atribuída',
'taskRecap': 'Tarefa selecionada',
'timeLogRecap': 'Lançamento registrado',
'change': 'Alterar',
'createdId': 'Identificador do lançamento',
'confirmDetails': 'Confirme os dados do encaminhamento',
'workerContext': 'Trabalhador conectado',
'emptyValue': '—',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to pt-br.
'required': 'Obrigatório', 'loading': 'Carregando…', 'chooseTask': 'Selecione a tarefa atribuída', 'taskRecap': 'Tarefa selecionada', 'timeLogRecap': 'Lançamento registrado', 'change': 'Alterar', 'createdId': 'Identificador do lançamento', 'confirmDetails': 'Confirme os dados do encaminhamento', 'workerContext': 'Trabalhador conectado', 'emptyValue': '—',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to en.
'required': 'Required', 'loading': 'Loading…', 'chooseTask': 'Select the assigned task', 'taskRecap': 'Selected task', 'timeLogRecap': 'Recorded time entry', 'change': 'Change', 'createdId': 'Time entry identifier', 'confirmDetails': 'Confirm the handoff details', 'workerContext': 'Signed-in worker', 'emptyValue': '—',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
// The SAME invented keys as pageMessage_pt, translated to es.
'required': 'Obligatorio', 'loading': 'Cargando…', 'chooseTask': 'Seleccione la tarea asignada', 'taskRecap': 'Tarea seleccionada', 'timeLogRecap': 'Registro de tiempo creado', 'change': 'Cambiar', 'createdId': 'Identificador del registro', 'confirmDetails': 'Confirme los datos del envío', 'workerContext': 'Trabajador conectado', 'emptyValue': '—',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--record-work-time-102046')
export class BuildFlowFsmDesktopPage31RecordWorkTimePage extends BuildFlowFsmRecordWorkTimeBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-4 sm:p-6 space-y-5">
${this.renderWorker(msg)}
${this.renderTaskAndEntry(msg)}
${this.renderHandoff(msg)}
</main>`;
}
renderWorker(msg: PageMessageType) {
const workers: QryLocateFieldWorkerOutput[] = this.qryLocateFieldWorkerData ?? [];
const worker = workers[0];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4" aria-label="${msg['worker.title']}">
<div class="flex items-center justify-between gap-3"><h2 class="text-base font-semibold">${msg['workerContext']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryLocateFieldWorkerClick(event)}>${msg['worker.organism']}</button></div>
${this.qryLocateFieldWorkerState === 'loading' ? html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : worker ? html`<p class="mt-2 text-sm">${msg['worker.platformUserId']}: ${worker.platformUserId}</p>` : html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['worker.empty']}</p>`}
</section>`;
}
renderTaskAndEntry(msg: PageMessageType) {
const tasks: QryLocateWorkTaskOutput[] = this.qryLocateWorkTaskData ?? [];
const selected: QryLocateWorkTaskOutput | undefined = tasks.find((task: QryLocateWorkTaskOutput) => task.workTaskId === this.cmdCreateTimeLogWorkTaskWorkTaskId);
const created: CmdCreateTimeLogOutput | null = this.cmdCreateTimeLogOutput;
const complete = this.cmdCreateTimeLogState === 'success' && created !== null;
return html`<section class="grid gap-5 md:grid-cols-2" aria-label="${msg['task.title']}">
<div class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
<div class="flex items-center justify-between gap-3"><h2 class="text-lg font-semibold">${complete ? msg['taskRecap'] : msg['task.organism']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryLocateWorkTaskClick(event)}>${msg['task.organism']}</button></div>
${this.qryLocateWorkTaskState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : tasks.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['task.empty']}</p>` : html`<label class="block text-sm font-medium">${msg['chooseTask']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><select class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateTimeLogWorkTaskWorkTaskId} @change=${(event: Event) => this.handleCmdCreateTimeLogWorkTaskWorkTaskIdChange(event)}><option value="">${msg['chooseTask']}</option>${tasks.map((task: QryLocateWorkTaskOutput) => html`<option value=${task.workTaskId}>${task.description} — ${task.status}</option>`)}</select></label>`}
${selected ? html`<dl class="grid grid-cols-2 gap-2 text-sm"><dt>${msg['task.workTaskId']}</dt><dd>${selected.workTaskId}</dd><dt>${msg['task.projectId']}</dt><dd>${selected.projectId}</dd><dt>${msg['task.description']}</dt><dd>${selected.description}</dd><dt>${msg['task.status']}</dt><dd>${selected.status}</dd><dt>${msg['task.progressUpdate']}</dt><dd>${selected.progressUpdate}</dd></dl>` : nothing}
</div>
${complete ? html`<div class="rounded-lg border border-[var(--status-success-bg,#dcfce7)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['timeLogRecap']}</h2><p class="mt-2 text-sm">${msg['createdId']}: ${created?.timeLogId ?? msg['emptyValue']}</p><p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['create.success']}</p></div>` : this.renderCreateForm(msg)}
</section>`;
}
renderCreateForm(msg: PageMessageType) {
const ready = Boolean(this.cmdCreateTimeLogWorkTaskWorkTaskId && this.cmdCreateTimeLogWorkDate && this.cmdCreateTimeLogHoursWorked && this.cmdCreateTimeLogHourlyLaborCost);
return html`<div class="rounded-lg border border-[var(--selected-border,#94a3b8)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['create.form']}</h2><div class="mt-4 space-y-3">
${this.renderInput(msg['create.workDate'], 'date', this.cmdCreateTimeLogWorkDate, (event: Event) => this.handleCmdCreateTimeLogWorkDateChange(event))}
${this.renderInput(msg['create.hoursWorked'], 'number', this.cmdCreateTimeLogHoursWorked, (event: Event) => this.handleCmdCreateTimeLogHoursWorkedChange(event))}
${this.renderInput(msg['create.hourlyLaborCost'], 'number', this.cmdCreateTimeLogHourlyLaborCost, (event: Event) => this.handleCmdCreateTimeLogHourlyLaborCostChange(event))}
<button class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdCreateTimeLogState === 'loading'} @click=${(event: Event) => this.handleCmdCreateTimeLogClick(event)}>${this.cmdCreateTimeLogState === 'loading' ? msg['loading'] : msg['create.action']}</button>
${this.cmdCreateTimeLogState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateTimeLogError || msg['create.error']}</p>` : nothing}</div></div>`;
}
renderInput(label: string, type: string, value: string, handler: (event: Event) => void) {
return html`<label class="block text-sm font-medium">${label} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" type=${type} .value=${value} required @change=${handler}></label>`;
}
renderHandoff(msg: PageMessageType) {
if (this.cmdCreateTimeLogState !== 'success' || this.cmdCreateTimeLogOutput === null) return nothing;
const ready = Boolean(this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId && this.cmdHandoffTimeLogToFieldCoordinatorWorkDate && this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked && this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['handoff.organism']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['confirmDetails']}</p><div class="mt-4 grid gap-3 sm:grid-cols-3">
${this.renderInput(msg['handoff.workDate'], 'date', this.cmdHandoffTimeLogToFieldCoordinatorWorkDate, (event: Event) => this.handleCmdHandoffTimeLogToFieldCoordinatorWorkDateChange(event))}
${this.renderInput(msg['handoff.hoursWorked'], 'number', this.cmdHandoffTimeLogToFieldCoordinatorHoursWorked, (event: Event) => this.handleCmdHandoffTimeLogToFieldCoordinatorHoursWorkedChange(event))}
${this.renderInput(msg['handoff.hourlyLaborCost'], 'number', this.cmdHandoffTimeLogToFieldCoordinatorHourlyLaborCost, (event: Event) => this.handleCmdHandoffTimeLogToFieldCoordinatorHourlyLaborCostChange(event))}</div><label class="mt-3 block text-sm font-medium">${msg['createdId']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogId} @change=${(event: Event) => this.handleCmdHandoffTimeLogToFieldCoordinatorTimeLogTimeLogIdChange(event)}><option value="">${msg['createdId']}</option><option value=${this.cmdCreateTimeLogOutput.timeLogId}>${this.cmdCreateTimeLogOutput.timeLogId}</option></select></label><button class="mt-4 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdHandoffTimeLogToFieldCoordinatorState === 'loading'} @click=${(event: Event) => this.handleCmdHandoffTimeLogToFieldCoordinatorClick(event)}>${this.cmdHandoffTimeLogToFieldCoordinatorState === 'loading' ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffTimeLogToFieldCoordinatorState === 'success' ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffTimeLogToFieldCoordinatorState === 'error' ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffTimeLogToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}
