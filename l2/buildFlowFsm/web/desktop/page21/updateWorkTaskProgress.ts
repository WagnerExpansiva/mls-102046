/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/updateWorkTaskProgress.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'task.section': m['section.updateWorkTaskProgress.locateWorkTask.title'],
  'task.title': m['organism.updateWorkTaskProgress.qryLocateWorkTask.title'],
  'task.list': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.title'],
  'task.empty': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.empty'],
  'task.id': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.workTaskId.label'],
  'task.project': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.projectId.label'],
  'task.worker': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.assignedFieldWorkerId.label'],
  'task.description': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.description.label'],
  'task.due': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.dueDate.label'],
  'task.status': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.status.label'],
  'task.progress': m['intent.updateWorkTaskProgress.qryLocateWorkTask.list.column.progressUpdate.label'],
  'update.section': m['section.updateWorkTaskProgress.updateWorkTask.title'],
  'update.title': m['organism.updateWorkTaskProgress.cmdUpdateWorkTask.title'],
  'update.form': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.title'],
  'update.action': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'update.description': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.description.label'],
  'update.due': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.dueDate.label'],
  'update.progress': m['intent.updateWorkTaskProgress.cmdUpdateWorkTask.form.field.progressUpdate.label'],
  'handoff.section': m['section.updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator.title'],
  'handoff.title': m['organism.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.title'],
  'handoff.form': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.title'],
  'handoff.action': m['intent.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator.form.action.cmdHandoffWorkTaskProgressToFieldCoordinator'],
  'handoff.success': m['action.cmdHandoffWorkTaskProgressToFieldCoordinator.success'],
  'handoff.error': m['action.cmdHandoffWorkTaskProgressToFieldCoordinator.error'],
  'update.success': m['action.cmdUpdateWorkTask.success'],
  'update.error': m['action.cmdUpdateWorkTask.error'],
  'workspace.title': m['section.updateWorkTaskProgress.taskProgressWorkspace.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'step.choose': 'Escolher tarefa', 'step.record': 'Registrar andamento', 'step.review': 'Revisar e encaminhar',
  'selected': 'Tarefa selecionada', 'choose': 'Selecione uma tarefa para continuar', 'required': 'Obrigatório',
  'next': 'Continuar', 'back': 'Voltar', 'retry': 'Tentar novamente', 'loading': 'Carregando…',
  'saving': 'Registrando…', 'sending': 'Encaminhando…', 'noSelection': 'Nenhuma tarefa selecionada',
  'emptyProgress': 'Nenhum andamento registrado', 'sent': 'Atualização encaminhada ao coordenador',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'step.choose': 'Escolher tarefa', 'step.record': 'Registrar andamento', 'step.review': 'Revisar e encaminhar',
  'selected': 'Tarefa selecionada', 'choose': 'Selecione uma tarefa para continuar', 'required': 'Obrigatório',
  'next': 'Continuar', 'back': 'Voltar', 'retry': 'Tentar novamente', 'loading': 'Carregando…',
  'saving': 'Registrando…', 'sending': 'Encaminhando…', 'noSelection': 'Nenhuma tarefa selecionada',
  'emptyProgress': 'Nenhum andamento registrado', 'sent': 'Atualização encaminhada ao coordenador',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'step.choose': 'Choose task', 'step.record': 'Record progress', 'step.review': 'Review and send',
  'selected': 'Selected task', 'choose': 'Select a task to continue', 'required': 'Required',
  'next': 'Continue', 'back': 'Back', 'retry': 'Try again', 'loading': 'Loading…',
  'saving': 'Recording…', 'sending': 'Sending…', 'noSelection': 'No task selected',
  'emptyProgress': 'No progress recorded', 'sent': 'Update sent to the coordinator',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'step.choose': 'Elegir tarea', 'step.record': 'Registrar avance', 'step.review': 'Revisar y enviar',
  'selected': 'Tarea seleccionada', 'choose': 'Seleccione una tarea para continuar', 'required': 'Obligatorio',
  'next': 'Continuar', 'back': 'Volver', 'retry': 'Intentar de nuevo', 'loading': 'Cargando…',
  'saving': 'Registrando…', 'sending': 'Enviando…', 'noSelection': 'Ninguna tarea seleccionada',
  'emptyProgress': 'No hay avance registrado', 'sent': 'Actualización enviada al coordinador',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--update-work-task-progress-102046')
export class BuildFlowFsmDesktopPage21UpdateWorkTaskProgressPage extends BuildFlowFsmUpdateWorkTaskProgressBase {
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
return html`<main class="min-h-screen bg-[var(--page-bg,#f8fafc)] p-4 text-[var(--text-default,#0f172a)] md:p-8">
  <div class="mx-auto max-w-7xl">
    <div class="mb-6 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
      <h1 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
      <div class="mt-4 grid grid-cols-3 gap-2 text-sm">
        ${[msg['step.choose'], msg['step.record'], msg['step.review']].map((label: string, index: number) => html`<div class="border-b-2 ${index === 0 || (index === 1 && this.cmdUpdateWorkTaskWorkTaskWorkTaskId) ? 'border-[var(--button-primary-bg,#2563eb)] text-[var(--text-strong,#0f172a)]' : 'border-[var(--border-subtle,#e2e8f0)] text-[var(--text-muted,#64748b)]'} pb-2"><span class="mr-2 font-bold">${index + 1}</span>${label}</div>`)}</div>
    </div>
    ${this.renderTaskList(msg)}
  </div>
</main>`;
}
renderTaskList(msg: PageMessageType) {
const rows: QryLocateWorkTaskOutput[] = this.qryLocateWorkTaskData ?? [];
return html`<section class="grid gap-6 md:grid-cols-5" aria-label=${msg['task.section']}>
  <div class="md:col-span-3 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
    <div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['task.list']}</h2>${this.qryLocateWorkTaskState === 'loading' ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</span>` : nothing}</div>
    ${this.qryLocateWorkTaskState === 'error' ? html`<div class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]"><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-sm" @click=${this.handleQryLocateWorkTaskClick}>${msg['retry']}</button></div>` : nothing}
    ${rows.length === 0 && this.qryLocateWorkTaskState !== 'loading' ? html`<p class="py-8 text-center text-[var(--text-muted,#64748b)]">${msg['task.empty']}</p>` : nothing}
    <div class="space-y-2">${rows.map((item: QryLocateWorkTaskOutput) => {
      const id = String(item.workTaskId);
      const selected = id === this.cmdUpdateWorkTaskWorkTaskWorkTaskId;
      return html`<button class="w-full rounded-md border p-3 text-left ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => { this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(id); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorWorkTaskWorkTaskId(id); this.setCmdUpdateWorkTaskDescription(String(item.description ?? '')); this.setCmdUpdateWorkTaskDueDate(String(item.dueDate ?? '')); this.setCmdUpdateWorkTaskProgressUpdate(String(item.progressUpdate ?? '')); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription(String(item.description ?? '')); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate(String(item.dueDate ?? '')); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate(String(item.progressUpdate ?? '')); }}>
        <div class="grid gap-2 sm:grid-cols-2"><strong>${item.description}</strong><span>${msg['task.status']}: ${item.status}</span><span>${msg['task.due']}: ${item.dueDate}</span><span>${msg['task.worker']}: ${item.assignedFieldWorkerId}</span></div>
      </button>`;
    })}</div>
  </div>
  ${this.renderEditor(msg)}
</section>`;
}
renderEditor(msg: PageMessageType) {
const hasSelection = this.cmdUpdateWorkTaskWorkTaskWorkTaskId.length > 0;
const updateBusy = this.cmdUpdateWorkTaskState === 'loading';
const handoffBusy = this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'loading';
const onDescription = (event: Event) => { const value = (event.target as HTMLInputElement).value; this.setCmdUpdateWorkTaskDescription(value); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDescription(value); };
const onDueDate = (event: Event) => { const value = (event.target as HTMLInputElement).value; this.setCmdUpdateWorkTaskDueDate(value); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorDueDate(value); };
const onProgress = (event: Event) => { const value = (event.target as HTMLTextAreaElement).value; this.setCmdUpdateWorkTaskProgressUpdate(value); this.setCmdHandoffWorkTaskProgressToFieldCoordinatorProgressUpdate(value); };
return html`<aside class="md:col-span-2 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <h2 class="text-lg font-semibold">${hasSelection ? msg['selected'] : msg['choose']}</h2>
  ${hasSelection ? html`<form class="mt-5 space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateWorkTaskClick(event); }}>
    <label class="block text-sm font-medium">${msg['update.description']} <span class="text-[var(--status-error-text,#991b1b)]">*</span><input required class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdUpdateWorkTaskDescription} @input=${onDescription}></label>
    <label class="block text-sm font-medium">${msg['update.due']} <span class="text-[var(--status-error-text,#991b1b)]">*</span><input required type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdUpdateWorkTaskDueDate} @input=${onDueDate}></label>
    <label class="block text-sm font-medium">${msg['update.progress']}<textarea class="mt-1 min-h-24 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdUpdateWorkTaskProgressUpdate} @input=${onProgress}></textarea></label>
    <button type="submit" ?disabled=${updateBusy || !this.cmdUpdateWorkTaskDescription || !this.cmdUpdateWorkTaskDueDate} class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${updateBusy ? msg['saving'] : msg['update.action']}</button>
    ${this.cmdUpdateWorkTaskState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}
    ${this.cmdUpdateWorkTaskState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateWorkTaskError || msg['update.error']}</p>` : nothing}
    <button type="button" ?disabled=${handoffBusy || !this.cmdHandoffWorkTaskProgressToFieldCoordinatorDescription || !this.cmdHandoffWorkTaskProgressToFieldCoordinatorDueDate} @click=${this.handleCmdHandoffWorkTaskProgressToFieldCoordinatorClick} class="w-full rounded-md border border-[var(--button-secondary-border,#94a3b8)] bg-[var(--button-secondary-bg,#ffffff)] px-4 py-3 font-semibold text-[var(--button-secondary-text,#334155)] disabled:opacity-50">${handoffBusy ? msg['sending'] : msg['handoff.action']}</button>
    ${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}
    ${this.cmdHandoffWorkTaskProgressToFieldCoordinatorState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffWorkTaskProgressToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}
  </form>` : nothing}
</aside>`;
}
}