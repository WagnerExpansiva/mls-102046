/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/assignWorkTask.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmAssignWorkTaskBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
import type { QryLocateProjectOutput, QryInspectProjectTimelineOutput, QryLocateFieldWorkerOutput, CmdCreateWorkTaskOutput, CmdHandoffWorkTaskToFieldWorkerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'planning.title': m['section.assignWorkTask.planningContext.title'],
'project.title': m['organism.assignWorkTask.qryLocateProject.title'],
'project.list.title': m['intent.assignWorkTask.qryLocateProject.list.title'],
'project.empty': m['intent.assignWorkTask.qryLocateProject.list.empty'],
'project.projectId': m['intent.assignWorkTask.qryLocateProject.list.column.projectId.label'],
'project.clientId': m['intent.assignWorkTask.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.assignWorkTask.qryLocateProject.list.column.name.label'],
'project.address': m['intent.assignWorkTask.qryLocateProject.list.column.address.label'],
'project.status': m['intent.assignWorkTask.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label'],
'timeline.title': m['organism.assignWorkTask.qryInspectProjectTimeline.title'],
'timeline.list.title': m['intent.assignWorkTask.qryInspectProjectTimeline.list.title'],
'timeline.empty': m['intent.assignWorkTask.qryInspectProjectTimeline.list.empty'],
'timeline.projectId': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label'],
'timeline.tasks': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label'],
'timeline.entries': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label'],
'worker.title': m['organism.assignWorkTask.qryLocateFieldWorker.title'],
'worker.list.title': m['intent.assignWorkTask.qryLocateFieldWorker.list.title'],
'worker.empty': m['intent.assignWorkTask.qryLocateFieldWorker.list.empty'],
'worker.id': m['intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label'],
'execution.title': m['section.assignWorkTask.taskExecution.title'],
'create.title': m['organism.assignWorkTask.cmdCreateWorkTask.title'],
'create.form.title': m['intent.assignWorkTask.cmdCreateWorkTask.form.title'],
'create.action': m['intent.assignWorkTask.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
'create.description': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.description.label'],
'create.dueDate': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.dueDate.label'],
'create.progress': m['intent.assignWorkTask.cmdCreateWorkTask.form.field.progressUpdate.label'],
'handoff.title': m['organism.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.title'],
'handoff.form.title': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.title'],
'handoff.action': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.action.cmdHandoffWorkTaskToFieldWorker'],
'handoff.description': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.description.label'],
'handoff.dueDate': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.dueDate.label'],
'handoff.progress': m['intent.assignWorkTask.cmdHandoffWorkTaskToFieldWorker.form.field.progressUpdate.label'],
'create.success': m['action.cmdCreateWorkTask.success'],
'create.error': m['action.cmdCreateWorkTask.error'],
'handoff.success': m['action.cmdHandoffWorkTaskToFieldWorker.success'],
'handoff.error': m['action.cmdHandoffWorkTaskToFieldWorker.error'],
'workspace.project': m['section.assignWorkTask.workPlanningWorkspace.title'],
'workspace.task': m['section.assignWorkTask.taskPlanningWorkspace.title'],
'workspace.worker': m['section.assignWorkTask.fieldAssignmentWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'choose.project': 'Selecione a obra',
'choose.worker': 'Selecione o trabalhador',
'choose.task': 'Selecione a tarefa criada',
'confirm.create': 'Criar tarefa',
'confirm.handoff': 'Encaminhar tarefa',
'loading': 'Carregando…',
'noSelection': 'Selecione uma obra para consultar o cronograma.',
'created': 'Tarefa criada com sucesso.',
'failed': 'Não foi possível concluir esta ação.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'choose.project': 'Selecione a obra',
'choose.worker': 'Selecione o trabalhador',
'choose.task': 'Selecione a tarefa criada',
'confirm.create': 'Criar tarefa',
'confirm.handoff': 'Encaminhar tarefa',
'loading': 'Carregando…',
'noSelection': 'Selecione uma obra para consultar o cronograma.',
'created': 'Tarefa criada com sucesso.',
'failed': 'Não foi possível concluir esta ação.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'choose.project': 'Select the project',
'choose.worker': 'Select the worker',
'choose.task': 'Select the created task',
'confirm.create': 'Create task',
'confirm.handoff': 'Send task',
'loading': 'Loading…',
'noSelection': 'Select a project to inspect its timeline.',
'created': 'Task created successfully.',
'failed': 'This action could not be completed.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'choose.project': 'Seleccione la obra',
'choose.worker': 'Seleccione al trabajador',
'choose.task': 'Crear tarea',
'confirm.create': 'Crear tarea',
'confirm.handoff': 'Enviar tarea',
'loading': 'Cargando…',
'noSelection': 'Seleccione una obra para consultar el cronograma.',
'created': 'Tarea creada correctamente.',
'failed': 'No fue posible completar esta acción.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--assign-work-task-102046')
export class BuildFlowFsmDesktopPage31AssignWorkTaskPage extends BuildFlowFsmAssignWorkTaskBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) {
this.#msgLang = lang;
this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
}
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`
  <div class="min-h-full space-y-6 bg-[var(--page-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]">
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['planning.title']}</h2>
      ${this.renderProjectWorkspace(msg)}
    </section>
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['execution.title']}</h2>
      ${this.renderTaskWorkspace(msg)}
    </section>
  </div>`;
}
renderProjectWorkspace(msg: PageMessageType) {
const projects: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
const selected = projects.find((project: QryLocateProjectOutput) => project.projectId === this.qryInspectProjectTimelineProjectTimelineProjectId);
const timeline: QryInspectProjectTimelineOutput | null = this.qryInspectProjectTimelineData;
return html`<div class="grid gap-4 md:grid-cols-2">
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
    <div class="mb-3 flex items-center justify-between"><h3 class="font-medium">${msg['project.title']}</h3><button class="rounded px-3 py-2 text-[var(--link-text,#2563eb)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${this.qryLocateProjectState === 'loading' ? msg['loading'] : msg['project.list.title']}</button></div>
    ${projects.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="space-y-2">${projects.map((project: QryLocateProjectOutput) => html`<button class="block w-full rounded border border-[var(--border-subtle,#e2e8f0)] p-3 text-left ${selected?.projectId === project.projectId ? 'bg-[var(--selected-bg,#eff6ff)]' : 'bg-[var(--surface-bg,#ffffff)]'}" @click=${() => { this.setQryInspectProjectTimelineProjectTimelineProjectId(project.projectId); this.setCmdCreateWorkTaskProjectProjectId(project.projectId); }}><div class="font-medium">${project.name}</div><div class="text-sm text-[var(--text-muted,#64748b)]">${msg['project.status']}: ${project.status}</div><div class="text-sm">${msg['project.start']}: ${project.plannedStartDate} · ${msg['project.end']}: ${project.plannedEndDate}</div></button>`)}</div>`}
  </article>
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
    <div class="mb-3 flex items-center justify-between"><h3 class="font-medium">${msg['timeline.title']}</h3><button class="rounded bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" ?disabled=${!selected || this.qryInspectProjectTimelineState === 'loading'} @click=${(event: Event) => this.handleQryInspectProjectTimelineClick(event)}>${this.qryInspectProjectTimelineState === 'loading' ? msg['loading'] : msg['timeline.list.title']}</button></div>
    ${selected ? html`<div class="space-y-2"><p>${msg['timeline.projectId']}: ${timeline?.projectId ?? selected.projectId}</p><p>${msg['timeline.tasks']}: ${JSON.stringify(timeline?.workTasks ?? [])}</p><p>${msg['timeline.entries']}: ${JSON.stringify(timeline?.scheduleEntries ?? [])}</p></div>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p>`}
  </article>
</div>`;
}
renderTaskWorkspace(msg: PageMessageType) {
const workers: QryLocateFieldWorkerOutput[] = this.qryLocateFieldWorkerData ?? [];
const created: CmdCreateWorkTaskOutput | null = this.cmdCreateWorkTaskOutput;
const handoff: CmdHandoffWorkTaskToFieldWorkerOutput | null = this.cmdHandoffWorkTaskToFieldWorkerOutput;
return html`<div class="grid gap-4 md:grid-cols-2">
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
    <div class="mb-3 flex items-center justify-between"><h3 class="font-medium">${msg['create.title']}</h3><button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdCreateWorkTaskState === 'loading' || !this.cmdCreateWorkTaskProjectProjectId || !this.cmdCreateWorkTaskDescription || !this.cmdCreateWorkTaskDueDate} @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}>${this.cmdCreateWorkTaskState === 'loading' ? msg['loading'] : msg['confirm.create']}</button></div>
    <h4 class="mb-3 text-sm font-medium">${msg['create.form.title']}</h4>
    <div class="space-y-3"><label class="block">${msg['create.description']}<span class="text-[var(--status-error-text,#b91c1c)]"> *</span><textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDescription} @change=${(event: Event) => this.handleCmdCreateWorkTaskDescriptionChange(event)}></textarea></label><label class="block">${msg['create.dueDate']}<span class="text-[var(--status-error-text,#b91c1c)]"> *</span><input class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdCreateWorkTaskDueDate} @change=${(event: Event) => this.handleCmdCreateWorkTaskDueDateChange(event)} /></label><label class="block">${msg['create.progress']}<textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskProgressUpdate} @change=${(event: Event) => this.handleCmdCreateWorkTaskProgressUpdateChange(event)}></textarea></label></div>
    ${this.cmdCreateWorkTaskState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#15803d)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateWorkTaskState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateWorkTaskError || msg['create.error']}</p>` : nothing}
  </article>
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
    <div class="mb-3 flex items-center justify-between"><h3 class="font-medium">${msg['handoff.title']}</h3><button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdHandoffWorkTaskToFieldWorkerState === 'loading' || !this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId || !this.cmdHandoffWorkTaskToFieldWorkerDescription || !this.cmdHandoffWorkTaskToFieldWorkerDueDate} @click=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerClick(event)}>${this.cmdHandoffWorkTaskToFieldWorkerState === 'loading' ? msg['loading'] : msg['confirm.handoff']}</button></div>
    <h4 class="mb-3 text-sm font-medium">${msg['handoff.form.title']}</h4>
    <div class="space-y-3"><select class="block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskId} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerWorkTaskWorkTaskIdChange(event)}><option value="">${msg['choose.task']}</option>${created ? html`<option value=${created.workTaskId}>${created.workTaskId}</option>` : nothing}</select><select class="block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @change=${(event: Event) => { const value = (event.target as HTMLSelectElement).value; this.setCmdHandoffWorkTaskToFieldWorkerDescription(value); }}><option value="">${msg['choose.worker']}</option>${workers.map((worker: QryLocateFieldWorkerOutput) => html`<option value=${worker.platformUserId}>${worker.platformUserId}</option>`)}</select><label class="block">${msg['handoff.description']}<textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerDescription} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange(event)}></textarea></label><label class="block">${msg['handoff.dueDate']}<input class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdHandoffWorkTaskToFieldWorkerDueDate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDueDateChange(event)} /></label><label class="block">${msg['handoff.progress']}<textarea class="mt-1 block w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange(event)}></textarea></label></div>
    ${this.cmdHandoffWorkTaskToFieldWorkerState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#15803d)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffWorkTaskToFieldWorkerState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffWorkTaskToFieldWorkerError || msg['handoff.error']}</p>` : nothing}
  </article>
</div>`;
}
}