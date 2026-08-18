/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectDashboardView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDashboardViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.js';
import type { QryProjectDashboardViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'overview.title': m['section.projectDashboardView.overview.title'],
'dashboard.title': m['organism.projectDashboardView.qryProjectDashboardView.title'],
'list.title': m['intent.projectDashboardView.qryProjectDashboardView.list.title'],
'list.empty': m['intent.projectDashboardView.qryProjectDashboardView.list.empty'],
'activeProjects': m['intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label'],
'activeProjectCount': m['intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label'],
'totalBudget': m['intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label'],
'totalActualCost': m['intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label'],
'budgetVariance': m['intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label'],
'costAttentionProjects': m['intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label'],
'upcomingTasks': m['intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'A carregar o painel…',
'error': 'Não foi possível carregar o painel.',
'refresh': 'Atualizar painel',
'currency': '€',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando o painel…',
'error': 'Não foi possível carregar o painel.',
'refresh': 'Atualizar painel',
'currency': 'R$',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading dashboard…',
'error': 'The dashboard could not be loaded.',
'refresh': 'Refresh dashboard',
'currency': '$',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando el panel…',
'error': 'No se pudo cargar el panel.',
'refresh': 'Actualizar panel',
'currency': '€',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

const displayValue = (value: unknown): string => {
if (value === null || value === undefined) return '—';
if (typeof value === 'number') return value.toLocaleString();
if (typeof value === 'string') return value;
const serialized = JSON.stringify(value);
return serialized ?? '—';
};

@customElement('build-flow-fsm--web--desktop--page11--project-dashboard-view-102046')
export class BuildFlowFsmDesktopPage11ProjectDashboardViewPage extends BuildFlowFsmProjectDashboardViewBase {
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
  <main class="max-w-6xl mx-auto px-4 py-6 space-y-6">
    <header class="flex items-center justify-between gap-4">
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h1>
      <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryProjectDashboardViewClick} ?disabled=${this.qryProjectDashboardViewState === 'loading'}>
        ${this.qryProjectDashboardViewState === 'loading' ? msg['loading'] : msg['refresh']}
      </button>
    </header>
    ${this.renderDashboard()}
  </main>
</div>`;
}
renderDashboard() {
const msg = this.msg;
const data: QryProjectDashboardViewOutput | null = this.qryProjectDashboardViewData;
if (this.qryProjectDashboardViewState === 'loading') {
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-default,#e2e8f0)] p-6" aria-live="polite"><p>${msg['loading']}</p></section>`;
}
if (this.qryProjectDashboardViewState === 'error') {
return html`<section class="rounded-lg bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] border border-[var(--border-default,#e2e8f0)] p-6" role="alert"><p>${msg['error']}</p></section>`;
}
if (data === null) {
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-default,#e2e8f0)] p-6"><p>${msg['list.empty']}</p></section>`;
}
return html`
<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-default,#e2e8f0)] p-6 space-y-5">
  <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['dashboard.title']}</h2>
  <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    ${this.renderMetric(msg['activeProjects'], data.activeProjects)}
    ${this.renderMetric(msg['activeProjectCount'], data.activeProjectCount)}
    ${this.renderMetric(msg['totalBudget'], data.totalBudget)}
    ${this.renderMetric(msg['totalActualCost'], data.totalActualCost)}
    ${this.renderMetric(msg['budgetVariance'], data.budgetVariance)}
  </dl>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    ${this.renderCollection(msg['costAttentionProjects'], data.costAttentionProjects)}
    ${this.renderCollection(msg['upcomingTasks'], data.upcomingTasks)}
  </div>
</section>`;
}
renderMetric(label: string, value: unknown) {
return html`<div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${label}</dt><dd class="mt-1 text-xl font-semibold text-[var(--text-strong,#0f172a)]">${displayValue(value)}</dd></div>`;
}
renderCollection(title: string, value: unknown) {
const rows: unknown[] = Array.isArray(value) ? value : [];
return html`<section class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><h3 class="font-medium text-[var(--text-strong,#0f172a)]">${title}</h3>${rows.length === 0 ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${this.msg['list.empty']}</p>` : html`<ul class="mt-3 space-y-2">${rows.map((item: unknown) => html`<li class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm">${displayValue(item)}</li>`)}</ul>`}</section>`;
}
}
