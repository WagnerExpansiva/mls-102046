/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/workTaskCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmWorkTaskCatalogueBase, messages as sharedMessages, type MessageType, type QryListWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'list.section': m['section.workTaskCatalogue.recordList.title'],
  'list.title': m['intent.workTaskCatalogue.qryListWorkTask.list.title'],
  'list.empty': m['intent.workTaskCatalogue.qryListWorkTask.list.empty'],
  'workTaskId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label'],
  'projectId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label'],
  'assignedWorker': m['intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label'],
  'description': m['intent.workTaskCatalogue.qryListWorkTask.list.column.description.label'],
  'dueDate': m['intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label'],
  'status': m['intent.workTaskCatalogue.qryListWorkTask.list.column.status.label'],
  'progress': m['intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label'],
  'deleteTitle': m['organism.workTaskCatalogue.cmdDeleteWorkTask.title'],
  'deleteFormTitle': m['intent.workTaskCatalogue.cmdDeleteWorkTask.form.title'],
  'deleteAction': m['intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask'],
  'formSection': m['section.workTaskCatalogue.recordForm.title'],
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
  'createSuccess': m['action.cmdCreateWorkTask.success'],
  'createError': m['action.cmdCreateWorkTask.error'],
  'updateSuccess': m['action.cmdUpdateWorkTask.success'],
  'updateError': m['action.cmdUpdateWorkTask.error'],
  'deleteSuccess': m['action.cmdDeleteWorkTask.success'],
  'deleteError': m['action.cmdDeleteWorkTask.error'],
  'workbench': m['section.workTaskCatalogue.taskWorkbench.title'],
  'detailWorkbench': m['section.workTaskCatalogue.workTaskWorkbench.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'newRecord': 'Nova tarefa',
  'selectRecord': 'Selecione uma tarefa para ver os detalhes',
  'required': 'Obrigatório',
  'confirmDelete': 'Confirma a exclusão desta tarefa?',
  'loading': 'Carregando…',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'newRecord': 'Nova tarefa',
  'selectRecord': 'Selecione uma tarefa para ver os detalhes',
  'required': 'Obrigatório',
  'confirmDelete': 'Confirma a exclusão desta tarefa?',
  'loading': 'Carregando…',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'newRecord': 'New task',
  'selectRecord': 'Select a task to view its details',
  'required': 'Required',
  'confirmDelete': 'Are you sure you want to delete this task?',
  'loading': 'Loading…',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'newRecord': 'Nueva tarea',
  'selectRecord': 'Seleccione una tarea para ver los detalles',
  'required': 'Obligatorio',
  'confirmDelete': '¿Confirma la eliminación de esta tarea?',
  'loading': 'Cargando…',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--work-task-catalogue-102046')
export class BuildFlowFsmDesktopPage21WorkTaskCataloguePage extends BuildFlowFsmWorkTaskCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
  <div class="mx-auto max-w-7xl">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workbench']}</p>
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.section']}</h1>
      </div>
      <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdCreateWorkTaskClick}>${msg['createAction']}</button>
    </div>
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
      ${this.renderList()}
      ${this.renderDetail()}
    </div>
  </div>
</div>`;
}
renderList() {
const msg = this.msg;
const rows: QryListWorkTaskOutput[] = this.qryListWorkTaskData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm" aria-label=${msg['list.title']}>
  <div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.title']}</h2>${this.qryListWorkTaskState === 'loading' ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</span>` : nothing}</div>
  ${rows.length === 0 && this.qryListWorkTaskState !== 'loading' ? html`<p class="py-8 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : nothing}
  <div class="space-y-3">${rows.map((item: QryListWorkTaskOutput) => html`<button type="button" class="block w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4 text-left hover:bg-[var(--surface-alt-bg,#f8fafc)]" @click=${() => { this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(item.workTaskId); this.setCmdUpdateWorkTaskDescription(item.description); this.setCmdUpdateWorkTaskDueDate(item.dueDate); this.setCmdUpdateWorkTaskProgressUpdate(item.progressUpdate ?? ''); }}>
    <div class="flex flex-wrap items-start justify-between gap-3"><strong>${item.description}</strong><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-xs text-[var(--status-info-text,#1e3a8a)]">${item.status}</span></div>
    <dl class="mt-3 grid grid-cols-2 gap-2 text-sm text-[var(--text-muted,#64748b)]"><div><dt>${msg['dueDate']}</dt><dd>${item.dueDate}</dd></div><div><dt>${msg['progress']}</dt><dd>${item.progressUpdate ?? ''}</dd></div><div><dt>${msg['assignedWorker']}</dt><dd>${item.assignedFieldWorkerId ?? ''}</dd></div><div><dt>${msg['projectId']}</dt><dd>${item.projectId}</dd></div></dl>
  </button>`)}</div>
</section>`;
}
renderDetail() {
const msg = this.msg;
const selectedId = this.cmdUpdateWorkTaskWorkTaskWorkTaskId;
const selected = (this.qryListWorkTaskData ?? []).find((item: QryListWorkTaskOutput) => item.workTaskId === selectedId);
const updateReady = selectedId.length > 0 && this.cmdUpdateWorkTaskDescription.trim().length > 0 && this.cmdUpdateWorkTaskDueDate.length > 0;
const createReady = this.cmdCreateWorkTaskDescription.trim().length > 0 && this.cmdCreateWorkTaskDueDate.length > 0 && this.cmdCreateWorkTaskProjectProjectId.length > 0;
return html`<section class="space-y-6" aria-label=${msg['detailWorkbench']}>
  ${selected ? html`<div class="rounded-lg border border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] p-5"><div class="flex items-start justify-between gap-3"><div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['updateTitle']}</p><h2 class="text-xl font-semibold">${selected.description}</h2></div><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-xs text-[var(--status-info-text,#1e3a8a)]">${selected.status}</span></div>
    <div class="mt-5 space-y-4"><label class="block text-sm font-medium">${msg['updateDescription']} <span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskDescription} @input=${this.handleCmdUpdateWorkTaskDescriptionChange}></label><label class="block text-sm font-medium">${msg['updateDueDate']} <span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span><input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskDueDate} @input=${this.handleCmdUpdateWorkTaskDueDateChange}></label><label class="block text-sm font-medium">${msg['updateProgress']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdUpdateWorkTaskProgressUpdateChange}>${this.cmdUpdateWorkTaskProgressUpdate}</textarea></label>
      ${this.cmdUpdateWorkTaskState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateWorkTaskError || msg['updateError']}</p>` : nothing}${this.cmdUpdateWorkTaskState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['updateSuccess']}</p>` : nothing}
      <div class="flex flex-wrap gap-3"><button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!updateReady || this.cmdUpdateWorkTaskState === 'loading'} @click=${this.handleCmdUpdateWorkTaskClick}>${this.cmdUpdateWorkTaskState === 'loading' ? msg['loading'] : msg['updateAction']}</button><button type="button" class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteWorkTaskState === 'loading'} @click=${(event: Event) => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteWorkTaskClick(event); }}>${this.cmdDeleteWorkTaskState === 'loading' ? msg['loading'] : msg['deleteAction']}</button></div>
      ${this.cmdDeleteWorkTaskState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteWorkTaskError || msg['deleteError']}</p>` : nothing}${this.cmdDeleteWorkTaskState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['deleteSuccess']}</p>` : nothing}
    </div></div>` : html`<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-sm text-[var(--text-muted,#64748b)]">${msg['selectRecord']}</div>`}
  ${this.renderCreate()}
</section>`;
}
renderCreate() {
const msg = this.msg;
const ready = this.cmdCreateWorkTaskDescription.trim().length > 0 && this.cmdCreateWorkTaskDueDate.length > 0 && this.cmdCreateWorkTaskProjectProjectId.length > 0;
return html`<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['createFormTitle']}</h2><div class="space-y-4"><label class="block text-sm font-medium">${msg['createDescription']} <span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDescription} @input=${this.handleCmdCreateWorkTaskDescriptionChange}></label><label class="block text-sm font-medium">${msg['createDueDate']} <span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span><input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDueDate} @input=${this.handleCmdCreateWorkTaskDueDateChange}></label><label class="block text-sm font-medium">${msg['createProgress']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdCreateWorkTaskProgressUpdateChange}>${this.cmdCreateWorkTaskProgressUpdate}</textarea></label>${this.cmdCreateWorkTaskState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateWorkTaskError || msg['createError']}</p>` : nothing}${this.cmdCreateWorkTaskState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['createSuccess']}</p>` : nothing}<button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdCreateWorkTaskState === 'loading'} @click=${this.handleCmdCreateWorkTaskClick}>${this.cmdCreateWorkTaskState === 'loading' ? msg['loading'] : msg['createAction']}</button></div></div>`;
}
}