/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/updateWorkTaskProgress.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmUpdateWorkTaskProgressBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.js';
import type { QryLocateWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'workspace.title': m['section.updateWorkTaskProgress.taskProgressWorkspace.title'],
  'locate.title': m['section.updateWorkTaskProgress.locateWorkTask.title'],
  'locate.organism': m['organism.updateWorkTaskProgress.qryLocateWorkTask.title'],
  'locate.list.title': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.title'],
  'locate.empty': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty'],
  'column.workTaskId': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label'],
  'column.projectId': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label'],
  'column.workerId': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
  'column.description': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label'],
  'column.dueDate': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label'],
  'column.status': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label'],
  'column.progress': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label'],
  'update.section': m['section.updateWorkTaskProgress.updateWorkTask.title'],
  'update.organism': m['organism.updateWorkTaskProgress.cmdUpdateWorkTask.title'],
  'update.form.title': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title'],
  'update.action': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'update.description': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label'],
  'update.dueDate': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label'],
  'update.progress': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label'],
  'handoff.section': m['section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title'],
  'handoff.organism': m['organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title'],
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
  'selectedTask': 'Tarefa selecionada',
  'routeProject': 'Projeto do contexto',
  'loading': 'Carregando tarefas…',
  'saving': 'Salvando…',
  'sending': 'Enviando…',
  'chooseTask': 'Selecione uma tarefa',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'selectedTask': 'Tarefa selecionada',
  'routeProject': 'Projeto do contexto',
  'loading': 'Carregando tarefas…',
  'saving': 'Salvando…',
  'sending': 'Enviando…',
  'chooseTask': 'Selecione uma tarefa',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'selectedTask': 'Selected task',
  'routeProject': 'Project from context',
  'loading': 'Loading tasks…',
  'saving': 'Saving…',
  'sending': 'Sending…',
  'chooseTask': 'Select a task',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'selectedTask': 'Tarea seleccionada',
  'routeProject': 'Proyecto del contexto',
  'loading': 'Cargando tareas…',
  'saving': 'Guardando…',
  'sending': 'Enviando…',
  'chooseTask': 'Seleccione una tarea',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--update-work-task-progress-102046')
export class BuildFlowFsmDesktopPage11UpdateWorkTaskProgressPage extends BuildFlowFsmUpdateWorkTaskProgressBase {
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
    <header>
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
    </header>
    ${this.renderTaskList()}
    ${this.renderUpdateForm()}
    ${this.renderHandoffForm()}
  </div>
</main>`;
}
renderTaskList() {
const msg = this.msg;
const rows: QryLocateWorkTaskOutput[] = this.qryLocateWorkTaskData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
  <div><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['locate.title']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['locate.organism']}</p></div>
  ${this.qryLocateWorkTaskState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['locate.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><caption class="sr-only">${msg['locate.list.title']}</caption><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-[var(--text-muted,#64748b)]"><th class="p-2">${msg['column.workTaskId']}</th><th class="p-2">${msg['column.projectId']}</th><th class="p-2">${msg['column.workerId']}</th><th class="p-2">${msg['column.description']}</th><th class="p-2">${msg['column.dueDate']}</th><th class="p-2">${msg['column.status']}</th><th class="p-2">${msg['column.progress']}</th></tr></thead><tbody>${rows.map((row: QryLocateWorkTaskOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${row.workTaskId}</td><td class="p-2">${row.projectId}</td><td class="p-2">${row.assignedFieldWorkerId}</td><td class="p-2">${row.description}</td><td class="p-2">${row.dueDate}</td><td class="p-2">${row.status}</td><td class="p-2">${row.progressUpdate}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const busy = this.cmdUpdateWorkTaskState === 'loading';
const selected = this.cmdUpdateWorkTaskWorkTaskWorkTaskId;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
  <div><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['update.section']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.organism']}</p></div>
  <form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateWorkTaskClick(event); }}>
    <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['routeProject']}: ${this.cmdUpdateWorkTaskProjectProjectId}</p>
    <label class="block text-sm">${msg['selectedTask']}<select class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${selected} @change=${this.handleCmdUpdateWorkTaskWorkTaskWorkTaskIdChange}><option value="">${msg['chooseTask']}</option>${(this.qryLocateWorkTaskData ?? []).map((row: QryLocateWorkTaskOutput) => html`<option value=${row.workTaskId}>${row.description}</option>`)}</select></label>
    <label class="block text-sm">${msg['update.description']}<input required class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskDescription} @input=${this.handleCmdUpdateWorkTaskDescriptionChange}></label>
    <label class="block text-sm">${msg['update.dueDate']}<input required type="date" class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskDueDate} @change=${this.handleCmdUpdateWorkTaskDueDateChange}></label>
    <label class="block text-sm">${msg['update.progress']}<textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdUpdateWorkTaskProgressUpdateChange}>${this.cmdUpdateWorkTaskProgressUpdate}</textarea></label>
    <button type="submit" ?disabled=${busy} class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-60">${busy ? msg['saving'] : msg['update.action']}</button>
    ${this.cmdUpdateWorkTaskState === 'success' ? html`<p role="status" class="rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}
    ${this.cmdUpdateWorkTaskState === 'error' ? html`<p role="alert" class="rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateWorkTaskError || msg['update.error']}</p>` : nothing}
  </form>
</section>`;
}
renderHandoffForm() {
const msg = this.msg;
const busy = this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
  <div><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['handoff.section']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['handoff.organism']}</p></div>
  <form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick(event); }}>
    <label class="block text-sm">${msg['selectedTask']}<select class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId} @change=${this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskIdChange}><option value="">${msg['chooseTask']}</option>${(this.qryLocateWorkTaskData ?? []).map((row: QryLocateWorkTaskOutput) => html`<option value=${row.workTaskId}>${row.description}</option>`)}</select></label>
    <label class="block text-sm">${msg['handoff.description']}<input required class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription} @input=${this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDescriptionChange}></label>
    <label class="block text-sm">${msg['handoff.dueDate']}<input required type="date" class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate} @change=${this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorDueDateChange}></label>
    <label class="block text-sm">${msg['handoff.progress']}<textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdateChange}>${this.cmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate}</textarea></label>
    <button type="submit" ?disabled=${busy} class="rounded bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60">${busy ? msg['sending'] : msg['handoff.action']}</button>
    ${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'success' ? html`<p role="status" class="rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}
    ${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'error' ? html`<p role="alert" class="rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffWorkTaskProgressToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}
  </form>
</section>`;
}
}
