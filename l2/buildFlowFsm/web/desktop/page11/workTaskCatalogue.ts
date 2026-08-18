/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/workTaskCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmWorkTaskCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.js';
import type { QryListWorkTaskOutput } from '/_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'recordList.title': m['section.workTaskCatalogue.recordList.title'],
  'list.title': m['organism.workTaskCatalogue.qryListWorkTask.title'],
  'list.intentTitle': m['intent.workTaskCatalogue.qryListWorkTask.list.title'],
  'list.empty': m['intent.workTaskCatalogue.qryListWorkTask.list.empty'],
  'list.workTaskId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.workTaskId.label'],
  'list.projectId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.projectId.label'],
  'list.assignedFieldWorkerId': m['intent.workTaskCatalogue.qryListWorkTask.list.column.assignedFieldWorkerId.label'],
  'list.description': m['intent.workTaskCatalogue.qryListWorkTask.list.column.description.label'],
  'list.dueDate': m['intent.workTaskCatalogue.qryListWorkTask.list.column.dueDate.label'],
  'list.status': m['intent.workTaskCatalogue.qryListWorkTask.list.column.status.label'],
  'list.progressUpdate': m['intent.workTaskCatalogue.qryListWorkTask.list.column.progressUpdate.label'],
  'delete.title': m['organism.workTaskCatalogue.cmdDeleteWorkTask.title'],
  'delete.formTitle': m['intent.workTaskCatalogue.cmdDeleteWorkTask.form.title'],
  'delete.action': m['intent.workTaskCatalogue.cmdDeleteWorkTask.form.action.cmdDeleteWorkTask'],
  'recordForm.title': m['section.workTaskCatalogue.recordForm.title'],
  'create.title': m['organism.workTaskCatalogue.cmdCreateWorkTask.title'],
  'create.formTitle': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.title'],
  'create.action': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  'create.description': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.description.label'],
  'create.dueDate': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.progressUpdate': m['intent.workTaskCatalogue.cmdCreateWorkTask.form.field.progressUpdate.label'],
  'update.title': m['organism.workTaskCatalogue.cmdUpdateWorkTask.title'],
  'update.formTitle': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.title'],
  'update.action': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'update.description': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.description.label'],
  'update.dueDate': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.dueDate.label'],
  'update.progressUpdate': m['intent.workTaskCatalogue.cmdUpdateWorkTask.form.field.progressUpdate.label'],
  'create.success': m['action.cmdCreateWorkTask.success'],
  'create.error': m['action.cmdCreateWorkTask.error'],
  'update.success': m['action.cmdUpdateWorkTask.success'],
  'update.error': m['action.cmdUpdateWorkTask.error'],
  'delete.success': m['action.cmdDeleteWorkTask.success'],
  'delete.error': m['action.cmdDeleteWorkTask.error'],
  'taskWorkbench.title': m['section.workTaskCatalogue.taskWorkbench.title'],
  'workTaskWorkbench.title': m['section.workTaskCatalogue.workTaskWorkbench.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'loading': 'Carregando tarefas…',
  'selectTask': 'Selecionar tarefa',
  'noSelection': 'Selecione uma tarefa na lista para atualizar ou excluir.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'loading': 'Carregando tarefas…',
  'selectTask': 'Selecionar tarefa',
  'noSelection': 'Selecione uma tarefa na lista para atualizar ou excluir.',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'loading': 'Loading tasks…',
  'selectTask': 'Select task',
  'noSelection': 'Select a task from the list to update or delete it.',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'loading': 'Cargando tareas…',
  'selectTask': 'Seleccionar tarea',
  'noSelection': 'Seleccione una tarea de la lista para actualizarla o eliminarla.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--work-task-catalogue-102046')
export class BuildFlowFsmDesktopPage11WorkTaskCataloguePage extends BuildFlowFsmWorkTaskCatalogueBase {
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
return html`
  <div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['recordList.title']}</h1>
      ${this.renderTaskList()}
      ${this.renderCreateForm()}
      ${this.renderUpdateForm()}
    </div>
  </div>`;
}
renderTaskList() {
const msg = this.msg;
const rows: QryListWorkTaskOutput[] = this.qryListWorkTaskData ?? [];
const loading = this.qryListWorkTaskState === 'loading';
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-lg font-semibold">${msg['list.title']}</h2>
      <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-3 py-2" @click=${this.handleQryListWorkTaskClick}>${msg['list.intentTitle']}</button>
    </div>
    ${loading ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left">
            <th class="p-2">${msg['list.workTaskId']}</th><th class="p-2">${msg['list.projectId']}</th><th class="p-2">${msg['list.assignedFieldWorkerId']}</th><th class="p-2">${msg['list.description']}</th><th class="p-2">${msg['list.dueDate']}</th><th class="p-2">${msg['list.status']}</th><th class="p-2">${msg['list.progressUpdate']}</th><th class="p-2">${msg['selectTask']}</th>
          </tr></thead>
          <tbody>${rows.map((item: QryListWorkTaskOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
            <td class="p-2">${item.workTaskId}</td><td class="p-2">${item.projectId}</td><td class="p-2">${item.assignedFieldWorkerId}</td><td class="p-2">${item.description}</td><td class="p-2">${item.dueDate}</td><td class="p-2">${item.status}</td><td class="p-2">${item.progressUpdate}</td>
            <td class="p-2"><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-2 py-1" @click=${() => { this.setCmdUpdateWorkTaskWorkTaskWorkTaskId(item.workTaskId); this.setCmdDeleteWorkTaskWorkTaskId(item.workTaskId); }}>${msg['selectTask']}</button></td>
          </tr>`)}</tbody>
        </table>
      </div>`}
  </section>`;
}
renderCreateForm() {
const msg = this.msg;
const loading = this.cmdCreateWorkTaskState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
  <h2 class="text-lg font-semibold">${msg['create.title']}</h2>
  <h3 class="font-medium">${msg['create.formTitle']}</h3>
  <label class="block">${msg['create.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskDescription} @input=${this.handleCmdCreateWorkTaskDescriptionChange}></textarea></label>
  <label class="block">${msg['create.dueDate']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdCreateWorkTaskDueDate} @input=${this.handleCmdCreateWorkTaskDueDateChange}></label>
  <label class="block">${msg['create.progressUpdate']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateWorkTaskProgressUpdate} @input=${this.handleCmdCreateWorkTaskProgressUpdateChange}></textarea></label>
  <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-60" ?disabled=${loading} @click=${this.handleCmdCreateWorkTaskClick}>${loading ? msg['loading'] : msg['create.action']}</button>
  ${this.cmdCreateWorkTaskState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['create.success']}</p>` : nothing}
  ${this.cmdCreateWorkTaskState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdCreateWorkTaskError || msg['create.error']}</p>` : nothing}
</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const loading = this.cmdUpdateWorkTaskState === 'loading';
const selected = this.cmdUpdateWorkTaskWorkTaskWorkTaskId.length > 0;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
  <h2 class="text-lg font-semibold">${msg['update.title']}</h2>
  ${selected ? html`<h3 class="font-medium">${msg['update.formTitle']}</h3>
    <label class="block">${msg['update.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskDescription} @input=${this.handleCmdUpdateWorkTaskDescriptionChange}></textarea></label>
    <label class="block">${msg['update.dueDate']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdUpdateWorkTaskDueDate} @input=${this.handleCmdUpdateWorkTaskDueDateChange}></label>
    <label class="block">${msg['update.progressUpdate']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateWorkTaskProgressUpdate} @input=${this.handleCmdUpdateWorkTaskProgressUpdateChange}></textarea></label>
    <div class="flex gap-3"><button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-60" ?disabled=${loading} @click=${this.handleCmdUpdateWorkTaskClick}>${loading ? msg['loading'] : msg['update.action']}</button><button type="button" class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" ?disabled=${this.cmdDeleteWorkTaskState === 'loading'} @click=${this.handleCmdDeleteWorkTaskClick}>${this.cmdDeleteWorkTaskState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div>
    ${this.cmdUpdateWorkTaskState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['update.success']}</p>` : nothing}
    ${this.cmdUpdateWorkTaskState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdUpdateWorkTaskError || msg['update.error']}</p>` : nothing}
    ${this.cmdDeleteWorkTaskState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['delete.success']}</p>` : nothing}
    ${this.cmdDeleteWorkTaskState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdDeleteWorkTaskError || msg['delete.error']}</p>` : nothing}` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p>`}
</section>`;
}
}