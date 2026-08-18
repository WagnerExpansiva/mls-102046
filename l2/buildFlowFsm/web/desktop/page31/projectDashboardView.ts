/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectDashboardView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDashboardViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectDashboardView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
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
  'loading': 'Carregando painel',
  'error': 'Não foi possível carregar este painel.',
  'retry': 'Tentar novamente',
  'seeAll': 'Ver todos',
  'unknown': 'Sem informação',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'loading': 'Carregando painel',
  'error': 'Não foi possível carregar este painel.',
  'retry': 'Tentar novamente',
  'seeAll': 'Ver todos',
  'unknown': 'Sem informação',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'loading': 'Loading dashboard',
  'error': 'This dashboard could not be loaded.',
  'retry': 'Try again',
  'seeAll': 'See all',
  'unknown': 'No information',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'loading': 'Cargando panel',
  'error': 'No se pudo cargar este panel.',
  'retry': 'Intentar de nuevo',
  'seeAll': 'Ver todos',
  'unknown': 'Sin información',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--project-dashboard-view-102046')
export class BuildFlowFsmDesktopPage31ProjectDashboardViewPage extends BuildFlowFsmProjectDashboardViewBase {
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
if (this.qryProjectDashboardViewState === 'loading') {
  return html`<main class="min-h-[16rem] p-6" aria-busy="true">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
      ${[1, 2, 3, 4, 5].map(() => html`<div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}
    </div>
    <p class="mt-6 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
  </main>`;
}
if (this.qryProjectDashboardViewState === 'error') {
  return html`<main class="p-6">
    <div class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6">
      <p class="text-[var(--status-error-text,#b91c1c)]">${msg['error']}</p>
      <button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#334155)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryProjectDashboardViewClick(event)}>${msg['retry']}</button>
    </div>
  </main>`;
}
return html`<main class="space-y-6 p-6">
  ${this.renderDashboard()}
</main>`;
}
renderDashboard() {
const msg = this.msg;
const data = this.qryProjectDashboardViewData;
if (!data) {
  return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p></section>`;
}
const entries = Object.entries(data as object);
const labelFor = (key: string): string | null => {
  switch (key) {
    case 'activeProjects': return msg['activeProjects'];
    case 'activeProjectCount': return msg['activeProjectCount'];
    case 'totalBudget': return msg['totalBudget'];
    case 'totalActualCost': return msg['totalActualCost'];
    case 'budgetVariance': return msg['budgetVariance'];
    case 'costAttentionProjects': return msg['costAttentionProjects'];
    case 'upcomingTasks': return msg['upcomingTasks'];
    default: return null;
  }
};
const scalarEntries = entries.filter(([key, value]) => labelFor(key) !== null && !Array.isArray(value));
const collectionEntries = entries.filter(([key, value]) => labelFor(key) !== null && Array.isArray(value));
const formatValue = (key: string, value: unknown): string => {
  if (typeof value !== 'number') return value == null || value === '' ? msg['unknown'] : String(value);
  const locale = (document.documentElement.lang || 'pt-BR').toLowerCase();
  if (key === 'totalBudget' || key === 'totalActualCost' || key === 'budgetVariance') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(value);
  }
  return new Intl.NumberFormat(locale).format(value);
};
return html`
  <section aria-labelledby="dashboard-overview" class="space-y-4">
    <h2 id="dashboard-overview" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h2>
    ${scalarEntries.length > 0 ? html`<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
      ${scalarEntries.map(([key, value]) => html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
        <p class="text-sm text-[var(--text-muted,#64748b)]">${labelFor(key)}</p>
        <p class="mt-2 text-right text-2xl font-bold tabular-nums text-[var(--text-strong,#0f172a)]">${formatValue(key, value)}</p>
      </article>`)}
    </div>` : nothing}
  </section>
  <div class="grid gap-6 md:grid-cols-2">
    ${collectionEntries.map(([key, value]) => this.renderCollection(key, value, labelFor(key) ?? msg['dashboard.title'], formatValue))}
  </div>`;
}
renderCollection(key: string, value: unknown, title: string, formatValue: (key: string, value: unknown) => string) {
const msg = this.msg;
const rows = Array.isArray(value) ? value.slice(0, 5) : [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5" aria-labelledby=${`section-${key}`}>
  <div class="flex items-center justify-between gap-4">
    <h3 id=${`section-${key}`} class="font-semibold text-[var(--text-strong,#0f172a)]">${title}</h3>
    <button class="rounded-md px-2 py-1 text-sm text-[var(--link-text,#2563eb)] disabled:cursor-not-allowed disabled:text-[var(--text-muted,#64748b)]" disabled>${msg['seeAll']}</button>
  </div>
  ${rows.length === 0 ? html`<p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="mt-4 divide-y divide-[var(--border-subtle,#e2e8f0)]">
    ${rows.map((row: unknown) => {
      if (typeof row !== 'object' || row === null) return html`<div class="py-3 text-sm text-[var(--text-default,#0f172a)]">${formatValue(key, row)}</div>`;
      const fields = Object.entries(row as object).filter(([field, fieldValue]) => fieldValue !== null && fieldValue !== undefined && typeof fieldValue !== 'object');
      return html`<div class="py-3">
        ${fields.map(([field, fieldValue]) => field.endsWith('imageUrl') || field.endsWith('photoUrl') || field.endsWith('logoUrl') || field.endsWith('avatarUrl') || field.endsWith('pictureUrl') || field.endsWith('thumbnailUrl')
          ? (typeof fieldValue === 'string' && fieldValue ? html`<img class="h-10 w-10 rounded-md object-cover" src=${fieldValue} alt="" loading="lazy">` : nothing)
          : html`<span class="mr-3 text-sm text-[var(--text-default,#0f172a)]">${formatValue(field, fieldValue)}</span>`)}
      </div>`;
    })}
  </div>`}
</section>`;
}
}