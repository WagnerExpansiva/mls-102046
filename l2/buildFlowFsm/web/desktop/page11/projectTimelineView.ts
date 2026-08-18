/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectTimelineView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectTimelineViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'page.title': m['section.projectTimelineView.overview.title'],
'overview.title': m['organism.projectTimelineView.qryProjectTimelineView.title'],
'list.title': m['intent.projectTimelineView.qryProjectTimelineView.list.title'],
'list.empty': m['intent.projectTimelineView.qryProjectTimelineView.list.empty'],
'column.projectId': m['intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label'],
'column.workTasks': m['intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label'],
'column.scheduleEntries': m['intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'project.context': 'Obra selecionada',
'refresh': 'Atualizar cronograma',
'loading': 'Carregando cronograma…',
'error': 'Não foi possível carregar o cronograma.',
'workTasks.count': 'tarefas',
'scheduleEntries.count': 'eventos programados',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'project.context': 'Obra selecionada',
'refresh': 'Atualizar cronograma',
'loading': 'Carregando cronograma…',
'error': 'Não foi possível carregar o cronograma.',
'workTasks.count': 'tarefas',
'scheduleEntries.count': 'eventos programados',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'project.context': 'Selected project',
'refresh': 'Refresh timeline',
'loading': 'Loading timeline…',
'error': 'The timeline could not be loaded.',
'workTasks.count': 'tasks',
'scheduleEntries.count': 'scheduled events',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'project.context': 'Obra seleccionada',
'refresh': 'Actualizar cronograma',
'loading': 'Cargando cronograma…',
'error': 'No fue posible cargar el cronograma.',
'workTasks.count': 'tareas',
'scheduleEntries.count': 'eventos programados',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--project-timeline-view-102046')
export class BuildFlowFsmDesktopPage11ProjectTimelineViewPage extends BuildFlowFsmProjectTimelineViewBase {
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
    ${this.renderHeader()}
    ${this.renderTimeline()}
  </div>
</div>`;
}
renderHeader() {
const msg = this.msg;
const loading = this.qryProjectTimelineViewState === 'loading';
return html`
<header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div>
    <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
    <div class="mt-2 inline-flex items-center rounded-full border border-[var(--selected-border,#cbd5e1)] bg-[var(--selected-bg,#f1f5f9)] px-3 py-1 text-sm text-[var(--selected-text,#334155)]">
      <span>${msg['project.context']}: ${this.qryProjectTimelineViewProjectTimelineProjectId || '—'}</span>
    </div>
  </div>
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60" ?disabled=${loading} @click=${this.handleQryProjectTimelineViewClick}>
    ${loading ? msg['loading'] : msg['refresh']}
  </button>
</header>`;
}
renderTimeline() {
const msg = this.msg;
const data = this.qryProjectTimelineViewData;
const loading = this.qryProjectTimelineViewState === 'loading';
const failed = this.qryProjectTimelineViewState === 'error';
const workTaskCount = data && Array.isArray(data.workTasks) ? data.workTasks.length : 0;
const scheduleEntryCount = data && Array.isArray(data.scheduleEntries) ? data.scheduleEntries.length : 0;
return html`
<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
  <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#e2e8f0)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h2>
    ${failed ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">${msg['error']}</p>` : nothing}
  </div>
  ${loading ? html`
    <div class="grid gap-4 p-5 sm:grid-cols-2" aria-busy="true">
      <div class="h-24 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
      <div class="h-24 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
    </div>` : data ? html`
    <div class="grid gap-4 p-5 sm:grid-cols-2">
      <article class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
        <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['column.workTasks']}</h3>
        <p class="mt-2 text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${workTaskCount}</p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workTasks.count']}</p>
      </article>
      <article class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
        <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['column.scheduleEntries']}</h3>
        <p class="mt-2 text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${scheduleEntryCount}</p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['scheduleEntries.count']}</p>
      </article>
    </div>
    <div class="overflow-x-auto px-5 pb-5">
      <table class="min-w-full divide-y divide-[var(--border-subtle,#e2e8f0)] text-left text-sm">
        <thead><tr>
          <th class="px-3 py-3 font-semibold text-[var(--text-muted,#64748b)]">${msg['column.projectId']}</th>
          <th class="px-3 py-3 font-semibold text-[var(--text-muted,#64748b)]">${msg['column.workTasks']}</th>
          <th class="px-3 py-3 font-semibold text-[var(--text-muted,#64748b)]">${msg['column.scheduleEntries']}</th>
        </tr></thead>
        <tbody><tr>
          <td class="px-3 py-3 text-[var(--text-default,#0f172a)]">${data.projectId}</td>
          <td class="px-3 py-3 text-[var(--text-default,#0f172a)]">${workTaskCount}</td>
          <td class="px-3 py-3 text-[var(--text-default,#0f172a)]">${scheduleEntryCount}</td>
        </tr></tbody>
      </table>
    </div>` : html`
    <div class="px-5 py-10 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</div>`}
</section>`;
}
}
