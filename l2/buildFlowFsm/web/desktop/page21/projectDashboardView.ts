/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectDashboardView.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'query.title': m['organism.projectDashboardView.qryProjectDashboardView.title'],
'list.title': m['intent.projectDashboardView.qryProjectDashboardView.list.title'],
'list.empty': m['intent.projectDashboardView.qryProjectDashboardView.list.empty'],
'activeProjects.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjects.label'],
'activeProjectCount.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.activeProjectCount.label'],
'totalBudget.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.totalBudget.label'],
'totalActualCost.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.totalActualCost.label'],
'budgetVariance.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.budgetVariance.label'],
'costAttentionProjects.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.costAttentionProjects.label'],
'upcomingTasks.label': m['intent.projectDashboardView.qryProjectDashboardView.list.column.upcomingTasks.label']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'headline.attention': 'itens precisam de atenção',
'headline.clear': 'Nada precisa de atenção agora',
'health.title': 'Saúde do portfólio',
'attention.title': 'Desvios que pedem investigação',
'projects.title': 'Obras ativas',
'tasks.title': 'Próximas tarefas',
'loading': 'Carregando dados do portfólio…',
'error': 'Não foi possível carregar este painel.',
'retry': 'Tentar novamente',
'value.empty': '—',
'item.name': 'Obra',
'item.detail': 'Detalhe'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'headline.attention': 'itens precisam de atenção',
'headline.clear': 'Nada precisa de atenção agora',
'health.title': 'Saúde do portfólio',
'attention.title': 'Desvios que pedem investigação',
'projects.title': 'Obras ativas',
'tasks.title': 'Próximas tarefas',
'loading': 'Carregando dados do portfólio…',
'error': 'Não foi possível carregar este painel.',
'retry': 'Tentar novamente',
'value.empty': '—',
'item.name': 'Obra',
'item.detail': 'Detalhe'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'headline.attention': 'items need attention',
'headline.clear': 'Nothing needs attention right now',
'health.title': 'Portfolio health',
'attention.title': 'Variances needing investigation',
'projects.title': 'Active projects',
'tasks.title': 'Upcoming tasks',
'loading': 'Loading portfolio data…',
'error': 'This dashboard could not be loaded.',
'retry': 'Try again',
'value.empty': '—',
'item.name': 'Project',
'item.detail': 'Detail'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'headline.attention': 'elementos requieren atención',
'headline.clear': 'Nada requiere atención ahora',
'health.title': 'Salud de la cartera',
'attention.title': 'Desviaciones que requieren investigación',
'projects.title': 'Proyectos activos',
'tasks.title': 'Próximas tareas',
'loading': 'Cargando datos de la cartera…',
'error': 'No se pudo cargar este panel.',
'retry': 'Intentar de nuevo',
'value.empty': '—',
'item.name': 'Proyecto',
'item.detail': 'Detalle'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--project-dashboard-view-102046')
export class BuildFlowFsmDesktopPage21ProjectDashboardViewPage extends BuildFlowFsmProjectDashboardViewBase {
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
return html`<section class="space-y-4" aria-busy="true"><div class="h-8 w-64 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div><p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p><div class="grid gap-3 md:grid-cols-3"><div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div></div></section>`;
}
if (this.qryProjectDashboardViewState === 'error') {
return html`<section class="space-y-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-[var(--text-default,#0f172a)]">${msg['error']}</p><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryProjectDashboardViewClick(event)}>${msg['retry']}</button></section>`;
}
return this.renderDashboard();
}
renderDashboard() {
const msg = this.msg;
const data: QryProjectDashboardViewOutput | null = this.qryProjectDashboardViewData;
const read = (value: unknown, key: string): unknown => {
if (typeof value === 'object' && value !== null && key in value) return (value as Record<string, unknown>)[key];
return undefined;
};
const entries = data === null ? [] : Object.entries(data as object);
const valueFor = (key: string): unknown => entries.find(([name]) => name === key)?.[1];
const asItems = (value: unknown): unknown[] => Array.isArray(value) ? value : [];
const attention = asItems(valueFor('costAttentionProjects'));
const tasks = asItems(valueFor('upcomingTasks'));
const activeProjects = asItems(valueFor('activeProjects'));
const attentionCount = attention.length + tasks.length;
const display = (value: unknown): string => value === null || value === undefined || value === '' ? msg['value.empty'] : String(value);
const scalar = (key: string) => display(valueFor(key));
return html`<main class="space-y-6 text-[var(--text-default,#0f172a)]">
<section aria-labelledby="portfolio-attention" class="space-y-2"><p id="portfolio-attention" class="text-xl font-semibold">${attentionCount === 0 ? msg['headline.clear'] : html`${attentionCount} ${msg['headline.attention']}`}</p></section>
${this.renderExceptions(attention, tasks, read, display)}
${this.renderHealth(scalar, msg)}
${activeProjects.length > 0 ? html`<section class="space-y-3" aria-labelledby="active-projects"><h2 id="active-projects" class="text-base font-semibold">${msg['projects.title']}</h2><div class="divide-y divide-[var(--border-subtle,#e5e7eb)] rounded-lg border border-[var(--border-subtle,#e5e7eb)] bg-[var(--surface-bg,#ffffff)]">${activeProjects.map((item: unknown) => html`<div class="flex items-center justify-between gap-4 p-3"><span class="font-medium">${display(read(item, 'name') ?? read(item, 'title'))}</span><span class="text-sm text-[var(--text-muted,#64748b)]">${display(read(item, 'status'))}</span></div>`)}</div></section>` : nothing}
${activeProjects.length === 0 && attention.length === 0 && tasks.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : nothing}
</main>`;
}
renderExceptions(attention: unknown[], tasks: unknown[], read: (value: unknown, key: string) => unknown, display: (value: unknown) => string) {
const msg = this.msg;
const lane = (items: unknown[], title: string, detailKey: string) => items.length === 0 ? nothing : html`<section class="space-y-3" aria-label="${title}"><h2 class="text-base font-semibold">${title}</h2><div class="space-y-2">${items.map((item: unknown) => html`<div class="flex items-center justify-between gap-4 rounded-lg border border-[var(--border-subtle,#e5e7eb)] bg-[var(--surface-bg,#ffffff)] p-3"><span class="font-medium">${display(read(item, 'name') ?? read(item, 'title'))}</span><span class="text-right tabular-nums text-[var(--status-warning-text,#92400e)]">${display(read(item, detailKey) ?? read(item, 'dueDate') ?? read(item, 'date'))}</span></div>`)}</div></section>`;
return html`<div class="space-y-5">${lane(attention, msg['attention.title'], 'budgetVariance')}${lane(tasks, msg['tasks.title'], 'dueDate')}</div>`;
}
renderHealth(scalar: (key: string) => string, msg: PageMessageType) {
return html`<section class="border-y border-[var(--border-subtle,#e5e7eb)] py-3" aria-labelledby="portfolio-health"><h2 id="portfolio-health" class="sr-only">${msg['health.title']}</h2><div class="flex flex-wrap gap-x-6 gap-y-2 text-sm"><span><strong class="font-semibold">${scalar('activeProjectCount')}</strong> <span class="text-[var(--text-muted,#64748b)]">${msg['activeProjectCount.label']}</span></span><span><strong class="font-semibold">${scalar('totalBudget')}</strong> <span class="text-[var(--text-muted,#64748b)]">${msg['totalBudget.label']}</span></span><span><strong class="font-semibold">${scalar('totalActualCost')}</strong> <span class="text-[var(--text-muted,#64748b)]">${msg['totalActualCost.label']}</span></span><span><strong class="font-semibold">${scalar('budgetVariance')}</strong> <span class="text-[var(--text-muted,#64748b)]">${msg['budgetVariance.label']}</span></span></div></section>`;
}
}
