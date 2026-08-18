/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectTimelineView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectTimelineViewBase, messages as sharedMessages, type MessageType, type QryProjectTimelineViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'overview.title': m['section.projectTimelineView.overview.title'],
'query.title': m['organism.projectTimelineView.qryProjectTimelineView.title'],
'list.title': m['intent.projectTimelineView.qryProjectTimelineView.list.title'],
'list.empty': m['intent.projectTimelineView.qryProjectTimelineView.list.empty'],
'column.projectId': m['intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label'],
'column.workTasks': m['intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label'],
'column.scheduleEntries': m['intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'context.project': 'Obra selecionada',
'query.loading': 'Carregando cronograma',
'query.retry': 'Consultar novamente',
'query.error': 'Não foi possível consultar o cronograma.',
'query.idle': 'Consulte o cronograma da obra selecionada.',
'section.data': 'Visão do cronograma',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'context.project': 'Obra selecionada',
'query.loading': 'Carregando cronograma',
'query.retry': 'Consultar novamente',
'query.error': 'Não foi possível consultar o cronograma.',
'query.idle': 'Consulte o cronograma da obra selecionada.',
'section.data': 'Visão do cronograma',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'context.project': 'Selected project',
'query.loading': 'Loading timeline',
'query.retry': 'Query again',
'query.error': 'The timeline could not be loaded.',
'query.idle': 'Query the timeline for the selected project.',
'section.data': 'Timeline overview',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'context.project': 'Obra seleccionada',
'query.loading': 'Cargando cronograma',
'query.retry': 'Consultar nuevamente',
'query.error': 'No se pudo cargar el cronograma.',
'query.idle': 'Consulta el cronograma de la obra seleccionada.',
'section.data': 'Vista del cronograma',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--project-timeline-view-102046')
export class BuildFlowFsmDesktopPage31ProjectTimelineViewPage extends BuildFlowFsmProjectTimelineViewBase {
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
<section class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6" aria-labelledby="project-timeline-overview">
  <div class="mx-auto max-w-7xl space-y-6">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 id="project-timeline-overview" class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h1>
        <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['query.title']}</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['context.project']}</span>
        <span class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm font-medium">${this.qryProjectTimelineViewProjectTimelineProjectId || nothing}</span>
        <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event) => this.handleQryProjectTimelineViewClick(event)} ?disabled=${this.qryProjectTimelineViewState === 'loading' || !this.qryProjectTimelineViewProjectTimelineProjectId}>
          ${this.qryProjectTimelineViewState === 'loading' ? msg['query.loading'] : msg['query.retry']}
        </button>
      </div>
    </div>
    ${this.renderTimelineContent()}
  </div>
</section>`;
}
renderTimelineContent() {
const msg = this.msg;
if (this.qryProjectTimelineViewState === 'loading') {
return html`<div class="grid gap-4 md:grid-cols-3" aria-label=${msg['query.loading']}>
  ${[0, 1, 2].map(() => html`<div class="h-28 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f8fafc)]" aria-hidden="true"></div>`)}
</div>`;
}
if (this.qryProjectTimelineViewState === 'error') {
return html`<div class="rounded-lg border border-[var(--status-error-bg,#fee2e2)] bg-[var(--status-error-bg,#fee2e2)] p-4 text-[var(--status-error-text,#991b1b)]">${msg['query.error']}</div>`;
}
if (this.qryProjectTimelineViewState !== 'success' || !this.qryProjectTimelineViewData) {
return html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-sm text-[var(--text-muted,#64748b)]">${msg['query.idle']}</div>`;
}
const data: QryProjectTimelineViewOutput = this.qryProjectTimelineViewData;
const tasks: readonly unknown[] = Array.isArray(data.workTasks) ? data.workTasks : [];
const schedule: readonly unknown[] = Array.isArray(data.scheduleEntries) ? data.scheduleEntries : [];
const renderItems = (items: readonly unknown[]) => items.length === 0
  ? html`<p class="p-4 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>`
  : html`<div class="divide-y divide-[var(--border-subtle,#e2e8f0)]">${items.slice(0, 5).map((item: unknown) => html`<div class="px-4 py-3 text-sm">${JSON.stringify(item)}</div>`)}</div>`;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
  <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.data']}</h2></div>
  <div class="grid gap-6 p-4 md:grid-cols-3">
    <div><div class="mb-2 text-xs font-medium text-[var(--text-muted,#64748b)]">${msg['column.projectId']}</div><div class="text-lg font-semibold tabular-nums">${String(data.projectId ?? this.qryProjectTimelineViewProjectTimelineProjectId)}</div></div>
    <div><div class="mb-2 text-xs font-medium text-[var(--text-muted,#64748b)]">${msg['column.workTasks']}</div>${renderItems(tasks)}</div>
    <div><div class="mb-2 text-xs font-medium text-[var(--text-muted,#64748b)]">${msg['column.scheduleEntries']}</div>${renderItems(schedule)}</div>
  </div>
</section>`;
}
}
