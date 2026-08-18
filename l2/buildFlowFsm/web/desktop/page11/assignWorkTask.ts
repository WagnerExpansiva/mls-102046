/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/assignWorkTask.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmAssignWorkTaskBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
  'planning.title': m['section.assignWorkTask.planningContext.title'],
  'projects.title': m['organism.assignWorkTask.qryLocateProject.title'],
  'projects.list.title': m['intent.assignWorkTask.qryLocateProject.list.title'],
  'projects.empty': m['intent.assignWorkTask.qryLocateProject.list.empty'],
  'projects.projectId': m['intent.assignWorkTask.qryLocateProject.list.column.projectId.label'],
  'projects.clientId': m['intent.assignWorkTask.qryLocateProject.list.column.clientId.label'],
  'projects.name': m['intent.assignWorkTask.qryLocateProject.list.column.name.label'],
  'projects.address': m['intent.assignWorkTask.qryLocateProject.list.column.address.label'],
  'projects.status': m['intent.assignWorkTask.qryLocateProject.list.column.status.label'],
  'projects.budget': m['intent.assignWorkTask.qryLocateProject.list.column.authorizedBudget.label'],
  'projects.start': m['intent.assignWorkTask.qryLocateProject.list.column.plannedStartDate.label'],
  'projects.end': m['intent.assignWorkTask.qryLocateProject.list.column.plannedEndDate.label'],
  'timeline.title': m['organism.assignWorkTask.qryInspectProjectTimeline.title'],
  'timeline.list.title': m['intent.assignWorkTask.qryInspectProjectTimeline.list.title'],
  'timeline.empty': m['intent.assignWorkTask.qryInspectProjectTimeline.list.empty'],
  'timeline.projectId': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.projectId.label'],
  'timeline.tasks': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.workTasks.label'],
  'timeline.entries': m['intent.assignWorkTask.qryInspectProjectTimeline.list.column.scheduleEntries.label'],
  'workers.title': m['organism.assignWorkTask.qryLocateFieldWorker.title'],
  'workers.list.title': m['intent.assignWorkTask.qryLocateFieldWorker.list.title'],
  'workers.empty': m['intent.assignWorkTask.qryLocateFieldWorker.list.empty'],
  'workers.platformUserId': m['intent.assignWorkTask.qryLocateFieldWorker.list.column.platformUserId.label'],
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
  'workspace.planning': m['section.assignWorkTask.workPlanningWorkspace.title'],
  'workspace.task': m['section.assignWorkTask.taskPlanningWorkspace.title'],
  'workspace.assignment': m['section.assignWorkTask.fieldAssignmentWorkspace.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'page.title': 'Planejar e atribuir tarefa de campo',
  'projects.refresh': 'Atualizar obras',
  'timeline.choose': 'Escolha uma obra para consultar o cronograma',
  'workers.refresh': 'Atualizar trabalhadores',
  'route.project': 'Obra vinculada pelo contexto',
  'handoff.selectionMissing': 'Selecione uma tarefa existente para encaminhá-la.',
  'form.submit': 'Salvar',
  'form.sending': 'Salvando…',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'page.title': 'Planejar e atribuir tarefa de campo',
  'projects.refresh': 'Atualizar obras',
  'timeline.choose': 'Escolha uma obra para consultar o cronograma',
  'workers.refresh': 'Atualizar trabalhadores',
  'route.project': 'Obra vinculada pelo contexto',
  'handoff.selectionMissing': 'Selecione uma tarefa existente para encaminhá-la.',
  'form.submit': 'Salvar',
  'form.sending': 'Salvando…',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'page.title': 'Plan and assign field task',
  'projects.refresh': 'Refresh projects',
  'timeline.choose': 'Choose a project to inspect its timeline',
  'workers.refresh': 'Refresh workers',
  'route.project': 'Project linked by context',
  'handoff.selectionMissing': 'Select an existing task before handing it off.',
  'form.submit': 'Save',
  'form.sending': 'Saving…',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'page.title': 'Planificar y asignar tarea de campo',
  'projects.refresh': 'Actualizar obras',
  'timeline.choose': 'Elija una obra para consultar su cronograma',
  'workers.refresh': 'Actualizar trabajadores',
  'route.project': 'Obra vinculada por el contexto',
  'handoff.selectionMissing': 'Seleccione una tarea existente antes de enviarla.',
  'form.submit': 'Guardar',
  'form.sending': 'Guardando…',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--assign-work-task-102046')
export class BuildFlowFsmDesktopPage11AssignWorkTaskPage extends BuildFlowFsmAssignWorkTaskBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
  const msg = this.msg;
  return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      ${this.renderPlanning()}
      ${this.renderExecution()}
    </div>
  </main>`;
}
renderPlanning() {
  const msg = this.msg;
  return html`<section class="space-y-4" aria-labelledby="planning-title">
    <h2 id="planning-title" class="text-xl font-bold">${msg['planning.title']}</h2>
    ${this.renderProjects()}
    ${this.renderTimeline()}
    ${this.renderWorkers()}
  </section>`;
}
renderProjects() {
  const msg = this.msg;
  return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-3">
    <div class="flex items-center justify-between"><h3 class="text-lg font-semibold">${msg['projects.title']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['projects.refresh']}</button></div>
    <h4 class="font-medium">${msg['projects.list.title']}</h4>
    ${this.qryLocateProjectState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['form.sending']}</p>` : this.qryLocateProjectData.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr>${[msg['projects.projectId'], msg['projects.clientId'], msg['projects.name'], msg['projects.address'], msg['projects.status'], msg['projects.budget'], msg['projects.start'], msg['projects.end']].map((label: string) => html`<th class="p-2 text-left">${label}</th>`)}</tr></thead><tbody>${this.qryLocateProjectData.map((item) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${item.projectId}</td><td class="p-2">${item.clientId}</td><td class="p-2">${item.name}</td><td class="p-2">${item.address}</td><td class="p-2">${item.status}</td><td class="p-2">${item.authorizedBudget}</td><td class="p-2">${item.plannedStartDate}</td><td class="p-2">${item.plannedEndDate}</td></tr>`)}</tbody></table></div>`}
  </article>`;
}
renderTimeline() {
  const msg = this.msg;
  return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-3"><h3 class="text-lg font-semibold">${msg['timeline.title']}</h3><label class="block text-sm"><span class="block mb-1">${msg['timeline.choose']}</span><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectProjectTimelineProjectTimelineProjectId} @change=${(event: Event) => this.handleQryInspectProjectTimelineProjectTimelineProjectIdChange(event)}><option value="">${msg['timeline.choose']}</option>${this.qryLocateProjectData.map((item) => html`<option value=${item.projectId}>${item.name}</option>`)}</select></label><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${(event: Event) => this.handleQryInspectProjectTimelineClick(event)}>${msg['timeline.list.title']}</button>${this.qryInspectProjectTimelineState === 'loading' ? html`<p>${msg['form.sending']}</p>` : this.qryInspectProjectTimelineData === null ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['timeline.empty']}</p>` : html`<dl class="grid gap-2 sm:grid-cols-3"><div><dt class="font-medium">${msg['timeline.projectId']}</dt><dd>${this.qryInspectProjectTimelineData.projectId}</dd></div><div><dt class="font-medium">${msg['timeline.tasks']}</dt><dd>${this.qryInspectProjectTimelineData.workTasks.length}</dd></div><div><dt class="font-medium">${msg['timeline.entries']}</dt><dd>${this.qryInspectProjectTimelineData.scheduleEntries.length}</dd></div></dl>`}</article>`;
}
renderWorkers() {
  const msg = this.msg;
  return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-3"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold">${msg['workers.title']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryLocateFieldWorkerClick(event)}>${msg['workers.refresh']}</button></div><h4 class="font-medium">${msg['workers.list.title']}</h4>${this.qryLocateFieldWorkerState === 'loading' ? html`<p>${msg['form.sending']}</p>` : this.qryLocateFieldWorkerData.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['workers.empty']}</p>` : html`<ul class="space-y-2">${this.qryLocateFieldWorkerData.map((item) => html`<li class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-2">${msg['workers.platformUserId']}: ${item.platformUserId}</li>`)}</ul>`}</article>`;
}
renderExecution() {
  const msg = this.msg;
  const creating = this.cmdCreateWorkTaskState === 'loading';
  const handingOff = this.cmdHandoffWorkTaskToFieldWorkerState === 'loading';
  return html`<section class="space-y-4" aria-labelledby="execution-title"><h2 id="execution-title" class="text-xl font-bold">${msg['execution.title']}</h2>${this.renderCreateForm(creating, msg)}${this.renderHandoffForm(handingOff, msg)}</section>`;
}
renderCreateForm(creating: boolean, msg: PageMessageType) {
  return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-3"><h3 class="text-lg font-semibold">${msg['create.title']}</h3><h4 class="font-medium">${msg['create.form.title']}</h4><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['route.project']}: ${this.cmdCreateWorkTaskProjectProjectId}</p><label class="block text-sm">${msg['create.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDescription} @input=${(event: Event) => this.handleCmdCreateWorkTaskDescriptionChange(event)}></textarea></label><label class="block text-sm">${msg['create.dueDate']}<input type="date" class="mt-1 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDueDate} @change=${(event: Event) => this.handleCmdCreateWorkTaskDueDateChange(event)} /></label><label class="block text-sm">${msg['create.progress']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskProgressUpdate} @input=${(event: Event) => this.handleCmdCreateWorkTaskProgressUpdateChange(event)}></textarea></label><button ?disabled=${creating} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}>${creating ? msg['form.sending'] : msg['create.action']}</button>${this.cmdCreateWorkTaskState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateWorkTaskState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateWorkTaskError || msg['create.error']}</p>` : nothing}</article>`;
}
renderHandoffForm(handingOff: boolean, msg: PageMessageType) {
  return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-3"><h3 class="text-lg font-semibold">${msg['handoff.title']}</h3><h4 class="font-medium">${msg['handoff.form.title']}</h4><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['handoff.selectionMissing']}</p><label class="block text-sm">${msg['handoff.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerDescription} @input=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDescriptionChange(event)}></textarea></label><label class="block text-sm">${msg['handoff.dueDate']}<input type="date" class="mt-1 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerDueDate} @change=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerDueDateChange(event)} /></label><label class="block text-sm">${msg['handoff.progress']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffWorkTaskToFieldWorkerProgressUpdate} @input=${(event: Event) => this.handleCmdHandoffWorkTaskToFieldWorkerProgressUpdateChange(event)}></textarea></label><button disabled class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] opacity-50">${handingOff ? msg['form.sending'] : msg['handoff.action']}</button>${this.cmdHandoffWorkTaskToFieldWorkerState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffWorkTaskToFieldWorkerState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffWorkTaskToFieldWorkerError || msg['handoff.error']}</p>` : nothing}</article>`;
}
}