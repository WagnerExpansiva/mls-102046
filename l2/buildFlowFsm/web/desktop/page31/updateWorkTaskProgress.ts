/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/updateWorkTaskProgress.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmUpdateWorkTaskProgressBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'workspace.title': m['section.updateWorkTaskProgress.taskProgressWorkspace.title'],
'locate.title': m['section.updateWorkTaskProgress.locateWorkTask.title'],
'list.title': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.title'],
'list.empty': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty'],
'workTaskId.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label'],
'projectId.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label'],
'assignedWorkerId.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
'description.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label'],
'dueDate.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label'],
'status.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label'],
'progress.label': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label'],
'update.title': m['section.updateWorkTaskProgress.updateWorkTask.title'],
'update.form.title': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title'],
'update.action': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
'update.description': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label'],
'update.dueDate': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label'],
'update.progress': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label'],
'handoff.title': m['section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title'],
'handoff.form.title': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title'],
'handoff.action': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator'],
'handoff.description': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.description.label'],
'handoff.dueDate': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.dueDate.label'],
'handoff.progress': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.field.progressUpdate.label'],
'update.success': m['action.cmdUpdateWorkTask.success'],
'update.error': m['action.cmdUpdateWorkTask.error'],
'handoff.success': m['action.cmdHandoffWorkTaskProgressToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffWorkTaskProgressToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando tarefas...',
'chooseTask': 'Selecione uma tarefa para continuar.',
'required': 'Obrigatório',
'selectedTask': 'Tarefa selecionada',
'change': 'Alterar',
'update.running': 'Salvando andamento...',
'handoff.running': 'Comunicando progresso...',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando tarefas...',
'chooseTask': 'Selecione uma tarefa para continuar.',
'required': 'Obrigatório',
'selectedTask': 'Tarefa selecionada',
'change': 'Alterar',
'update.running': 'Salvando andamento...',
'handoff.running': 'Comunicando progresso...',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading tasks...',
'chooseTask': 'Select a task to continue.',
'required': 'Required',
'selectedTask': 'Selected task',
'change': 'Change',
'update.running': 'Saving progress...',
'handoff.running': 'Sending progress...',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando tareas...',
'chooseTask': 'Seleccione una tarea para continuar.',
'required': 'Obligatorio',
'selectedTask': 'Tarea seleccionada',
'change': 'Cambiar',
'update.running': 'Guardando progreso...',
'handoff.running': 'Comunicando progreso...',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--update-work-task-progress-102046')
export class BuildFlowFsmDesktopPage31UpdateWorkTaskProgressPage extends BuildFlowFsmUpdateWorkTaskProgressBase {
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
return html`<main class="mx-auto flex max-w-7xl flex-col gap-6 p-6 bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
<h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
${this.renderLocate(msg)}
${this.renderProgressDocument(msg)}
</main>`;
}
renderLocate(msg: PageMessageType) {
if (this.qryLocateWorkTaskState === 'loading') {
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5" aria-busy="true"><p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p></section>`;
}
const rows = this.qryLocateWorkTaskData ?? [];
if (this.qryLocateWorkTaskState === 'error') {
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-[var(--status-error-text,#b91c1c)]">${msg['list.empty']}</p></section>`;
}
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
<h2 class="mb-4 text-lg font-semibold">${msg['locate.title']}</h2>
${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
${rows.map((row) => {
const selected = row.workTaskId === this.cmdUpdateWorkTaskWorkTaskWorkTaskId;
return html`<button type="button" class="rounded-lg border p-4 text-left transition ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)]'}" aria-pressed="${selected}" @click=${() => this.selectTask(row.workTaskId)}>
<div class="mb-2 flex items-center justify-between gap-3"><strong>${row.description}</strong><span class="rounded-full px-2 py-1 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#475569)]">${row.status}</span></div>
<dl class="space-y-1 text-sm text-[var(--text-muted,#64748b)]"><div><dt class="inline font-medium">${msg['workTaskId.label']}: </dt><dd class="inline">${row.workTaskId}</dd></div><div><dt class="inline font-medium">${msg['dueDate.label']}: </dt><dd class="inline">${row.dueDate}</dd></div><div><dt class="inline font-medium">${msg['assignedWorkerId.label']}: </dt><dd class="inline">${row.assignedFieldWorkerId}</dd></div></dl>
</button>`;
})}</div>`}
</section>`;
}
selectTask(id: string) {
this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(id);
this.setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId(id);
}
renderProgressDocument(msg: PageMessageType) {
const selected = (this.qryLocateWorkTaskData ?? []).find((row) => row.workTaskId === this.cmdUpdateWorkTaskWorkTaskWorkTaskId);
if (!selected) return html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['chooseTask']}</p>`;
const updateComplete = this.cmdUpdateWorkTaskState === 'success';
return html`<section class="flex flex-col gap-4" aria-label="${msg['selectedTask']}">
<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-sm text-[var(--text-muted,#64748b)]"><span class="font-medium">${msg['selectedTask']}: </span>${selected.description} · ${selected.status} · ${selected.dueDate}</div>
${updateComplete ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-sm text-[var(--text-muted,#64748b)]"><p>${selected.description} — ${this.cmdUpdateWorkTaskProgressUpdate || selected.progressUpdate}</p><button type="button" class="mt-2 text-[var(--link-text,#2563eb)] underline" @click=${() => this.reopenUpdate()}>${msg['change']}</button></div>` : this.renderUpdateForm(msg, selected)}
${updateComplete ? this.renderHandoffForm(msg) : nothing}
</section>`;
}
renderUpdateForm(msg: PageMessageType, selected: { workTaskId: string; description: string; dueDate: string; progressUpdate: string }) {
const busy = this.cmdUpdateWorkTaskState === 'loading';
const valid = Boolean(this.cmdUpdateWorkTaskDescription && this.cmdUpdateWorkTaskDueDate && selected.workTaskId && this.cmdUpdateWorkTaskProjectProjectId);
return html`<section class="rounded-lg border-2 border-[var(--selected-border,#2563eb)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['update.form.title']}</h2><div class="grid gap-4 md:grid-cols-2">
<label class="flex flex-col gap-1">${msg['update.description']} <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['required']}</span><textarea required .value=${this.cmdUpdateWorkTaskDescription} @input=${(event: Event) => { this.handleCmdUpdateWorkTaskDescriptionChange(event); this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange(event); }}></textarea></label>
<label class="flex flex-col gap-1">${msg['update.dueDate']} <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['required']}</span><input required type="date" .value=${this.cmdUpdateWorkTaskDueDate} @change=${(event: Event) => { this.handleCmdUpdateWorkTaskDueDateChange(event); this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange(event); }} /></label>
<label class="flex flex-col gap-1 md:col-span-2">${msg['update.progress']}<textarea .value=${this.cmdUpdateWorkTaskProgressUpdate} @input=${(event: Event) => { this.handleCmdUpdateWorkTaskProgressUpdateChange(event); this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange(event); }}></textarea></label>
</div><button type="button" class="mt-4 rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 text-[var(--button-primary-text,#ffffff)]" ?disabled=${busy || !valid} @click=${(event: Event) => this.handleCmdUpdateWorkTaskClick(event)}>${busy ? msg['update.running'] : msg['update.action']}</button>
${this.cmdUpdateWorkTaskState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#15803d)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateWorkTaskState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateWorkTaskError || msg['update.error']}</p>` : nothing}</section>`;
}
renderHandoffForm(msg: PageMessageType) {
const busy = this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'loading';
const valid = Boolean(this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription && this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate && this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['handoff.form.title']}</h2><div class="grid gap-4 md:grid-cols-2">
<label class="flex flex-col gap-1">${msg['handoff.description']}<textarea required .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription} @input=${(event: Event) => this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange(event)}></textarea></label>
<label class="flex flex-col gap-1">${msg['handoff.dueDate']}<input required type="date" .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange(event)} /></label>
<label class="flex flex-col gap-1 md:col-span-2">${msg['handoff.progress']}<textarea .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate} @input=${(event: Event) => this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange(event)}></textarea></label>
</div><button type="button" class="mt-4 rounded-lg bg-[var(--button-secondary-bg,#ffffff)] px-4 py-3 text-[var(--button-secondary-text,#0f172a)]" ?disabled=${busy || !valid} @click=${(event: Event) => this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick(event)}>${busy ? msg['handoff.running'] : msg['handoff.action']}</button>
${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#15803d)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffWorkTaskProgressToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</section>`;
}
reopenUpdate() {
this.cmdUpdateWorkTaskState = 'idle';
}
}