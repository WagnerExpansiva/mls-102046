/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/workTaskCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmWorkTaskCatalogueBase, messages as sharedMessages, type MessageType, type QryListWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'records.heading': m['section.workTaskCatalogue.recordList.title'],
'records.title': m['organism.workTaskCatalogue.qryListWorkTask.title'],
'records.empty': m['intent.workTaskCatalogue.qryListWorkTask.list.empty'],
'workTaskId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label'],
'projectId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label'],
'workerId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label'],
'description': m['intent.workTaskCatalogue.qryListWorkTask.list.column.description.label'],
'dueDate': m['intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label'],
'status': m['intent.workTaskCatalogue.qryListWorkTask.list.column.status.label'],
'progress': m['intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label'],
'createTitle': m['organism.workTaskCatalogue.cmdCreateWorkTask.title'],
'createFormTitle': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.title'],
'createAction': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
'createDescription': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label'],
'createDueDate': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label'],
'createProgress': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label'],
'updateTitle': m['organism.workTaskCatalogue.cmdUpdateWorkTask.title'],
'updateFormTitle': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.title'],
'updateAction': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
'updateDescription': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label'],
'updateDueDate': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label'],
'updateProgress': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label'],
'deleteTitle': m['organism.workTaskCatalogue.cmdDeleteWorkTask.title'],
'deleteAction': m['intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask'],
'createSuccess': m['action.cmdCreateWorkTask.success'],
'createError': m['action.cmdCreateWorkTask.error'],
'updateSuccess': m['action.cmdUpdateWorkTask.success'],
'updateError': m['action.cmdUpdateWorkTask.error'],
'deleteSuccess': m['action.cmdDeleteWorkTask.success'],
'deleteError': m['action.cmdDeleteWorkTask.error'],
'workbench': m['section.workTaskCatalogue.taskWorkbench.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando tarefas…','selectPrompt': 'Selecione uma tarefa para revisar','required': 'Campo obrigatório','newTask': 'Nova tarefa atribuída','selectedTask': 'Tarefa selecionada','saveProgress': 'Salvar alterações da tarefa','removeConfirm': 'Confirma a exclusão desta tarefa?','noSelection': 'Nenhuma tarefa selecionada','created': 'Tarefa criada com sucesso','updated': 'Andamento atualizado com sucesso','deleted': 'Tarefa excluída com sucesso','failed': 'Não foi possível concluir a operação','discard': 'Descartar alterações','createHint': 'Preencha os dados para registrar uma nova atribuição','updateHint': 'Atualize a descrição, o prazo ou o andamento da tarefa selecionada'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando tarefas…','selectPrompt': 'Selecione uma tarefa para revisar','required': 'Campo obrigatório','newTask': 'Nova tarefa atribuída','selectedTask': 'Tarefa selecionada','saveProgress': 'Salvar alterações da tarefa','removeConfirm': 'Confirma a exclusão desta tarefa?','noSelection': 'Nenhuma tarefa selecionada','created': 'Tarefa criada com sucesso','updated': 'Andamento atualizado com sucesso','deleted': 'Tarefa excluída com sucesso','failed': 'Não foi possível concluir a operação','discard': 'Descartar alterações','createHint': 'Preencha os dados para registrar uma nova atribuição','updateHint': 'Atualize a descrição, o prazo ou o andamento da tarefa selecionada'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading tasks…','selectPrompt': 'Select a task to review','required': 'Required field','newTask': 'New assigned task','selectedTask': 'Selected task','saveProgress': 'Save task changes','removeConfirm': 'Are you sure you want to delete this task?','noSelection': 'No task selected','created': 'Task created successfully','updated': 'Progress updated successfully','deleted': 'Task deleted successfully','failed': 'The operation could not be completed','discard': 'Discard changes','createHint': 'Complete the details to register a new assignment','updateHint': 'Update the description, due date, or progress of the selected task'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando tareas…','selectPrompt': 'Seleccione una tarea para revisar','required': 'Campo obligatorio','newTask': 'Nueva tarea asignada','selectedTask': 'Tarea seleccionada','saveProgress': 'Guardar cambios de la tarea','removeConfirm': '¿Confirma que desea eliminar esta tarea?','noSelection': 'Ninguna tarea seleccionada','created': 'Tarea creada correctamente','updated': 'Progreso actualizado correctamente','deleted': 'Tarea eliminada correctamente','failed': 'No se pudo completar la operación','discard': 'Descartar cambios','createHint': 'Complete los datos para registrar una nueva asignación','updateHint': 'Actualice la descripción, el plazo o el progreso de la tarea seleccionada'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--work-task-catalogue-102046')
export class BuildFlowFsmDesktopPage31WorkTaskCataloguePage extends BuildFlowFsmWorkTaskCatalogueBase {
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
    ${this.renderTaskList(msg)}
    <div class="grid gap-6 lg:grid-cols-2">
      ${this.renderUpdatePanel(msg)}
      ${this.renderCreatePanel(msg)}
    </div>
  </div>
</main>`;
}
renderTaskList(msg: PageMessageType) {
const rows: QryListWorkTaskOutput[] = this.qryListWorkTaskData ?? [];
return html`<section class="space-y-3" aria-labelledby="work-tasks-heading">
  <div class="flex items-center justify-between gap-4"><h2 id="work-tasks-heading" class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['records.heading']}</h2><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListWorkTaskClick(event)}>${msg['records.title']}</button></div>
  ${this.qryListWorkTaskState === 'loading' ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6 text-[var(--text-muted,#64748b)]" role="status">${msg['loading']}</div>` : rows.length === 0 ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6">${msg['records.empty']}</div>` : html`<div class="overflow-x-auto rounded-lg border border-[var(--border-default,#cbd5e1)]"><table class="min-w-full divide-y divide-[var(--border-subtle,#e2e8f0)]"><thead class="bg-[var(--surface-alt-bg,#f8fafc)]"><tr>${[msg['workTaskId'],msg['description'],msg['status'],msg['dueDate'],msg['progress']].map((label: string) => html`<th class="px-4 py-3 text-left text-sm font-semibold">${label}</th>`)}</tr></thead><tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)]">${rows.map((item: QryListWorkTaskOutput) => html`<tr class="cursor-pointer hover:bg-[var(--selected-bg,#eff6ff)]" @click=${() => { this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(String(item.workTaskId)); this.setCmdDeleteWorkTaskWorkTaskId(String(item.workTaskId)); }}><td class="px-4 py-3 text-sm">${String(item.workTaskId ?? '')}</td><td class="px-4 py-3 text-sm">${String(item.description ?? '')}</td><td class="px-4 py-3 text-sm">${String(item.status ?? '')}</td><td class="px-4 py-3 text-sm">${String(item.dueDate ?? '')}</td><td class="px-4 py-3 text-sm">${String(item.progressUpdate ?? '')}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderUpdatePanel(msg: PageMessageType) {
const selected = this.cmdUpdateWorkTaskWorkTaskWorkTaskId;
const busy = this.cmdUpdateWorkTaskState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-labelledby="selected-task-heading">
<h2 id="selected-task-heading" class="text-lg font-semibold">${msg['selectedTask']}</h2>
${selected ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['updateHint']}</p><div class="space-y-3"><label class="block text-sm font-medium">${msg['updateDescription']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdUpdateWorkTaskDescription} @input=${(event: Event) => this.handleCmdUpdateWorkTaskDescriptionChange(event)}></textarea></label><label class="block text-sm font-medium">${msg['updateDueDate']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" type="date" required .value=${this.cmdUpdateWorkTaskDueDate} @change=${(event: Event) => this.handleCmdUpdateWorkTaskDueDateChange(event)}></label><label class="block text-sm font-medium">${msg['updateProgress']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskProgressUpdate} @input=${(event: Event) => this.handleCmdUpdateWorkTaskProgressUpdateChange(event)}></label><button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !this.cmdUpdateWorkTaskDescription || !this.cmdUpdateWorkTaskDueDate} @click=${(event: Event) => this.handleCmdUpdateWorkTaskClick(event)}>${busy ? msg['loading'] : msg['saveProgress']}</button></div>${this.cmdUpdateWorkTaskState === 'success' ? html`<p role="status" class="text-[var(--status-success-text,#166534)]">${msg['updated']}</p>` : nothing}${this.cmdUpdateWorkTaskState === 'error' ? html`<p role="alert" class="text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateWorkTaskError || msg['updateError']}</p>` : nothing}<button type="button" class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteWorkTaskState === 'loading'} @click=${() => { if (window.confirm(msg['removeConfirm'])) this.cmdDeleteWorkTask(); }}>${this.cmdDeleteWorkTaskState === 'loading' ? msg['loading'] : msg['deleteAction']}</button>${this.cmdDeleteWorkTaskState === 'success' ? html`<p role="status">${msg['deleted']}</p>` : nothing}${this.cmdDeleteWorkTaskState === 'error' ? html`<p role="alert">${this.cmdDeleteWorkTaskError || msg['deleteError']}</p>` : nothing}` : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['selectPrompt']}</p>`}
</section>`;
}
renderCreatePanel(msg: PageMessageType) {
const busy = this.cmdCreateWorkTaskState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-labelledby="new-task-heading"><h2 id="new-task-heading" class="text-lg font-semibold">${msg['newTask']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['createHint']}</p><label class="block text-sm font-medium">${msg['createDescription']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateWorkTaskDescription} @input=${(event: Event) => this.handleCmdCreateWorkTaskDescriptionChange(event)}></textarea></label><label class="block text-sm font-medium">${msg['createDueDate']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" type="date" required .value=${this.cmdCreateWorkTaskDueDate} @change=${(event: Event) => this.handleCmdCreateWorkTaskDueDateChange(event)}></label><label class="block text-sm font-medium">${msg['createProgress']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskProgressUpdate} @input=${(event: Event) => this.handleCmdCreateWorkTaskProgressUpdateChange(event)}></label><button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !this.cmdCreateWorkTaskDescription || !this.cmdCreateWorkTaskDueDate} @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}>${busy ? msg['loading'] : msg['createAction']}</button>${this.cmdCreateWorkTaskState === 'success' ? html`<p role="status">${msg['created']}</p>` : nothing}${this.cmdCreateWorkTaskState === 'error' ? html`<p role="alert">${this.cmdCreateWorkTaskError || msg['createError']}</p>` : nothing}</section>`;
}
}