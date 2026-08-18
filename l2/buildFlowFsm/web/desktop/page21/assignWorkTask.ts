/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/assignWorkTask.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmAssignWorkTaskBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
import type { QryLocateProjectOutput, QryInspectProjectTimelineOutput, QryLocateFieldWorkerOutput, CmdCreateWorkTaskOutput, CmdHandoffWorkTaskToFieldWorkerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'planning.title': m['section.assignWorkTask.planningContext.title'],
'projects.title': m['organism.assignWorkTask.qryLocateProject.title'],
'projects.list': m['intent.assignWorkTask.qryLocateProject.list.title'],
'projects.empty': m['intent.assignWorkTask.qryLocateProject.list.empty'],
'project.id': m['intent.assignWorkTask.qryLocateProject.list.column.projectId.label'],
'project.name': m['intent.assignWorkTask.qryLocateProject.list.column.name.label'],
'project.address': m['intent.assignWorkTask.qryLocateProject.list.column.address.label'],
'project.status': m['intent.assignWorkTask.qryLocateProject.list.column.status.label'],
'project.start': m['intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label'],
'timeline.title': m['organism.assignWorkTask.qryInspectProjectTimeline.title'],
'timeline.list': m['intent.assignWorkTask.qryInspectProjectTimeline.list.title'],
'timeline.empty': m['intent.assignWorkTask.qryInspectProjectTimeline.list.empty'],
'timeline.tasks': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label'],
'timeline.entries': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label'],
'workers.title': m['organism.assignWorkTask.qryLocateFieldWorker.title'],
'workers.list': m['intent.assignWorkTask.qryLocateFieldWorker.list.title'],
'workers.empty': m['intent.assignWorkTask.qryLocateFieldWorker.list.empty'],
'worker.id': m['intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label'],
'task.title': m['organism.assignWorkTask.cmdCreateWorkTask.title'],
'task.form': m['intent.assignWorkTask.cmdCreateWorkTask.form.title'],
'task.create': m['intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
'task.description': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label'],
'task.due': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label'],
'task.progress': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label'],
'handoff.title': m['organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title'],
'handoff.form': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title'],
'handoff.action': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker'],
'handoff.description': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label'],
'handoff.due': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label'],
'handoff.progress': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label'],
'create.success': m['action.cmdCreateWorkTask.success'],
'create.error': m['action.cmdCreateWorkTask.error'],
'handoff.success': m['action.cmdHandoffWorkTaskToFieldWorker.success'],
'handoff.error': m['action.cmdHandoffWorkTaskToFieldWorker.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'rail.project': 'Obra','rail.context': 'Cronograma','rail.worker': 'Trabalhador','rail.task': 'Tarefa','rail.review': 'Confirmação',
'choose.project': 'Selecione uma obra','choose.worker': 'Trabalhador disponível','loading': 'Carregando…','required': 'Obrigatório','route.context': 'Obra definida pelo contexto da página','created': 'Tarefa criada; confirme o encaminhamento','not.created': 'Crie a tarefa para liberar o encaminhamento','summary': 'Resumo do encaminhamento','next': 'Continuar','step.done': 'Concluído','status.loading': 'Em andamento',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'rail.project': 'Obra','rail.context': 'Cronograma','rail.worker': 'Trabalhador','rail.task': 'Tarefa','rail.review': 'Confirmação','choose.project': 'Selecione uma obra','choose.worker': 'Trabalhador disponível','loading': 'Carregando…','required': 'Obrigatório','route.context': 'Obra definida pelo contexto da página','created': 'Tarefa criada; confirme o encaminhamento','not.created': 'Crie a tarefa para liberar o encaminhamento','summary': 'Resumo do encaminhamento','next': 'Continuar','step.done': 'Concluído','status.loading': 'Em andamento',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'rail.project': 'Project','rail.context': 'Schedule','rail.worker': 'Worker','rail.task': 'Task','rail.review': 'Confirmation','choose.project': 'Select a project','choose.worker': 'Available worker','loading': 'Loading…','required': 'Required','route.context': 'Project provided by page context','created': 'Task created; confirm dispatch','not.created': 'Create the task to enable dispatch','summary': 'Dispatch summary','next': 'Continue','step.done': 'Complete','status.loading': 'In progress',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'rail.project': 'Obra','rail.context': 'Cronograma','rail.worker': 'Trabajador','rail.task': 'Tarea','rail.review': 'Confirmación','choose.project': 'Seleccione una obra','choose.worker': 'Trabajador disponible','loading': 'Cargando…','required': 'Obligatorio','route.context': 'Obra proporcionada por el contexto','created': 'Tarea creada; confirme el envío','not.created': 'Cree la tarea para habilitar el envío','summary': 'Resumen del envío','next': 'Continuar','step.done': 'Completado','status.loading': 'En curso',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--assign-work-task-102046')
export class BuildFlowFsmDesktopPage21AssignWorkTaskPage extends BuildFlowFsmAssignWorkTaskBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
  <nav aria-label=${msg['summary']} class="grid grid-cols-5 gap-2 text-sm">
    ${[msg['rail.project'], msg['rail.context'], msg['rail.worker'], msg['rail.task'], msg['rail.review']].map((label: string, index: number) => html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-3 ${index === 0 ? 'bg-[var(--selected-bg,#eef2ff)] text-[var(--selected-text,#1e293b)]' : 'text-[var(--text-muted,#64748b)]'}"><span class="font-bold">${index + 1}</span> ${label}</div>`)}</nav>
  ${this.renderPlanning()}<div class="grid gap-6 lg:grid-cols-2">${this.renderTaskForm()}${this.renderHandoff()}</div>
</main>`;
}
renderPlanning() {
const msg = this.msg;
const projects = this.qryLocateProjectData as unknown as Array<Record<string, unknown>>;
const selectedId = this.qryInspectProjectTimelineProjectTimelineProjectId;
const timeline = this.qryInspectProjectTimelineData as unknown as Record<string, unknown> | null;
return html`<section class="space-y-4"><h2 class="text-xl font-bold">${msg['planning.title']}</h2><div class="grid gap-6 lg:grid-cols-2">
<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h3 class="font-bold">${msg['projects.list']}</h3>${this.qryLocateProjectState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : projects.length === 0 ? html`<p>${msg['projects.empty']}</p>` : html`<div class="mt-3 space-y-2">${projects.map((project: Record<string, unknown>) => html`<button type="button" class="block w-full rounded-lg border p-3 text-left ${String(project['projectId'] ?? '') === selectedId ? 'border-[var(--selected-border,#4f46e5)] bg-[var(--selected-bg,#eef2ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${(event: Event) => { this.setQryInspectProjectTimelineProjectTimelineProjectId(String(project['projectId'] ?? '')); this.handleQryInspectProjectTimelineClick(event); }}><strong>${String(project['name'] ?? '')}</strong><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${String(project['status'] ?? '')}</span><div class="text-sm">${String(project['address'] ?? '')}</div><div class="text-xs text-[var(--text-muted,#64748b)]">${msg['project.start']}: ${String(project['plannedStartDate'] ?? '')} · ${msg['project.end']}: ${String(project['plannedEndDate'] ?? '')}</div></button>`)}</div>`}</section>
<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h3 class="font-bold">${msg['timeline.list']}</h3>${this.qryInspectProjectTimelineState === 'loading' ? html`<p>${msg['loading']}</p>` : timeline === null ? html`<p>${msg['timeline.empty']}</p>` : html`<dl class="mt-3 space-y-3"><div><dt class="font-semibold">${msg['timeline.tasks']}</dt><dd>${String(timeline['workTasks'] ?? '')}</dd></div><div><dt class="font-semibold">${msg['timeline.entries']}</dt><dd>${String(timeline['scheduleEntries'] ?? '')}</dd></div></dl>`}</section></div></section>`;
}
renderTaskForm() {
const msg = this.msg;
const busy = this.cmdCreateWorkTaskState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4"><h2 class="text-xl font-bold">${msg['task.form']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['route.context']}: ${this.cmdCreateWorkTaskProjectProjectId}</p><label class="block">${msg['task.description']} <span aria-label=${msg['required']}>*</span><textarea required class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDescription} @change=${(event: Event) => this.handleCmdCreateWorkTaskDescriptionChange(event)}></textarea></label><label class="block">${msg['task.due']} <span aria-label=${msg['required']}>*</span><input required type="date" class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDueDate} @change=${(event: Event) => this.handleCmdCreateWorkTaskDueDateChange(event)} /></label><label class="block">${msg['task.progress']}<textarea class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskProgressUpdate} @change=${(event: Event) => this.handleCmdCreateWorkTaskProgressUpdateChange(event)}></textarea></label><button type="button" class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !this.cmdCreateWorkTaskProjectProjectId || !this.cmdCreateWorkTaskDescription || !this.cmdCreateWorkTaskDueDate} @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}>${busy ? msg['status.loading'] : msg['task.create']}</button>${this.cmdCreateWorkTaskState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateWorkTaskState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateWorkTaskError || msg['create.error']}</p>` : nothing}</section>`;
}
renderHandoff() {
const msg = this.msg;
const busy = this.cmdHandoffWorkTaskToFieldWorkerState === 'loading';
const workers = this.qryLocateFieldWorkerData as unknown as Array<Record<string, unknown>>;
const output = this.cmdCreateWorkTaskOutput as unknown as Record<string, unknown> | null;
const created = output !== null;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 space-y-4"><h2 class="text-xl font-bold">${msg['handoff.form']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${created ? msg['created'] : msg['not.created']}</p><h3 class="font-semibold">${msg['workers.list']}</h3>${this.qryLocateFieldWorkerState === 'loading' ? html`<p>${msg['loading']}</p>` : workers.length === 0 ? html`<p>${msg['workers.empty']}</p>` : html`<ul class="space-y-2">${workers.map((worker: Record<string, unknown>) => html`<li class="rounded border bg-[var(--surface-bg,#ffffff)] p-3">${msg['worker.id']}: ${String(worker['platformUserId'] ?? '')}</li>`)}</ul>`}<label class="block">${msg['handoff.description']} <span aria-label=${msg['required']}>*</span><textarea required class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerDescription} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange(event)}></textarea></label><label class="block">${msg['handoff.due']} <span aria-label=${msg['required']}>*</span><input required type="date" class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerDueDate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDueDateChange(event)} /></label><label class="block">${msg['handoff.progress']}<textarea class="mt-1 w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange(event)}></textarea></label><button type="button" class="rounded-lg bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50" ?disabled=${busy || !created || !this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId || !this.cmdHandoffWorkTaskToFieldWorkerDescription || !this.cmdHandoffWorkTaskToFieldWorkerDueDate} @click=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerClick(event)}>${busy ? msg['status.loading'] : msg['handoff.action']}</button>${this.cmdHandoffWorkTaskToFieldWorkerState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffWorkTaskToFieldWorkerState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffWorkTaskToFieldWorkerError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}