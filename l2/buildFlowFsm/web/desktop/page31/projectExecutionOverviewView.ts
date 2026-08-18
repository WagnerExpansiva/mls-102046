/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectExecutionOverviewView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectExecutionOverviewViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.js';
import type { QryProjectExecutionOverviewViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'overview.title': m['section.projectExecutionOverviewView.overview.title'],
  'overview.query.title': m['organism.projectExecutionOverviewView.qryProjectExecutionOverviewView.title'],
  'overview.list.title': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.title'],
  'overview.empty': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty'],
  'projectId': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectId.label'],
  'projectName': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label'],
  'projectStatus': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label'],
  'taskSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label'],
  'upcomingCommitments': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label'],
  'totalLoggedHours': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label'],
  'materialUsageSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label'],
  'actualLaborCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label'],
  'actualMaterialCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label'],
  'actualCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label'],
  'budgetAmount': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label'],
  'costVariance': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label'],
  'changeOrderImpactSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label'],
  'calculatedAt': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'context.project': 'Obra em contexto',
  'action.load': 'Atualizar visão',
  'action.loading': 'Atualizando…',
  'state.loading': 'Carregando consolidação',
  'state.error': 'Não foi possível carregar a consolidação.',
  'state.success': 'Consolidação atualizada.',
  'value.unknown': '—',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'context.project': 'Obra em contexto',
  'action.load': 'Atualizar visão',
  'action.loading': 'Atualizando…',
  'state.loading': 'Carregando consolidação',
  'state.error': 'Não foi possível carregar a consolidação.',
  'state.success': 'Consolidação atualizada.',
  'value.unknown': '—',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'context.project': 'Project in context',
  'action.load': 'Refresh overview',
  'action.loading': 'Refreshing…',
  'state.loading': 'Loading execution overview',
  'state.error': 'The overview could not be loaded.',
  'state.success': 'Overview refreshed.',
  'value.unknown': '—',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'context.project': 'Obra en contexto',
  'action.load': 'Actualizar visión',
  'action.loading': 'Actualizando…',
  'state.loading': 'Cargando consolidación',
  'state.error': 'No se pudo cargar la consolidación.',
  'state.success': 'Consolidación actualizada.',
  'value.unknown': '—',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--project-execution-overview-view-102046')
export class BuildFlowFsmDesktopPage31ProjectExecutionOverviewViewPage extends BuildFlowFsmProjectExecutionOverviewViewBase {
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
  <div class="space-y-6">
    ${this.renderContext(msg)}
    ${this.renderOverview(msg)}
  </div>`;
}
renderContext(msg: PageMessageType) {
const projectId = this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId;
const loading = this.qryProjectExecutionOverviewViewState === 'loading';
return html`<section class="flex flex-col gap-3 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 sm:flex-row sm:items-end sm:justify-between" aria-label=${msg['context.project']}>
  <div class="min-w-0">
    <div class="text-sm text-[var(--text-muted,#64748b)]">${msg['context.project']}</div>
    <div class="truncate text-base font-semibold text-[var(--text-strong,#0f172a)]">${projectId || msg['value.unknown']}</div>
  </div>
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60" ?disabled=${!projectId || loading} @click=${this.handleQryProjectExecutionOverviewViewClick}>
    ${loading ? msg['action.loading'] : msg['action.load']}
  </button>
</section>`;
}
renderOverview(msg: PageMessageType) {
const data: QryProjectExecutionOverviewViewOutput | null = this.qryProjectExecutionOverviewViewData;
const loading = this.qryProjectExecutionOverviewViewState === 'loading';
const value = (item: unknown): unknown => item === null || item === undefined || item === '' ? msg['value.unknown'] : item;
return html`<section class="space-y-4" aria-labelledby="execution-overview-title">
  <div class="flex items-center justify-between gap-4">
    <h1 id="execution-overview-title" class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h1>
    ${loading ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['state.loading']}</span>` : nothing}
  </div>
  ${loading ? html`<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"><div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div></div>` : data ? html`
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      ${this.renderStat(msg['totalLoggedHours'], data.totalLoggedHours)}
      ${this.renderStat(msg['actualCost'], data.actualCost)}
      ${this.renderStat(msg['budgetAmount'], data.budgetAmount)}
      ${this.renderStat(msg['costVariance'], data.costVariance, true)}
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-3 text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['taskSummary']}</h2><p class="text-sm text-[var(--text-default,#0f172a)]">${value(data.taskSummary)}</p><div class="mt-4"><div class="mb-1 text-sm text-[var(--text-muted,#64748b)]">${msg['upcomingCommitments']}</div><p class="text-sm">${value(data.upcomingCommitments)}</p></div></article>
      <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-3 text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['materialUsageSummary']}</h2><p class="text-sm">${value(data.materialUsageSummary)}</p><dl class="mt-4 grid grid-cols-2 gap-3 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['actualLaborCost']}</dt><dd>${value(data.actualLaborCost)}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['actualMaterialCost']}</dt><dd>${value(data.actualMaterialCost)}</dd></div></dl></article>
      <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 lg:col-span-2"><h2 class="mb-3 text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['changeOrderImpactSummary']}</h2><p class="text-sm">${value(data.changeOrderImpactSummary)}</p><div class="mt-3 flex flex-wrap gap-4 text-sm"><span><span class="text-[var(--text-muted,#64748b)]">${msg['projectName']}</span> ${value(data.projectName)}</span><span><span class="text-[var(--text-muted,#64748b)]">${msg['projectStatus']}</span> ${value(data.projectStatus)}</span><span><span class="text-[var(--text-muted,#64748b)]">${msg['calculatedAt']}</span> ${value(data.calculatedAt)}</span></div></article>
    </div>` : html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-sm text-[var(--text-muted,#64748b)]">${this.qryProjectExecutionOverviewViewState === 'error' ? msg['state.error'] : msg['overview.empty']}</div>`}
  ${this.qryProjectExecutionOverviewViewState === 'success' ? html`<div class="text-sm text-[var(--status-success-text,#166534)]" role="status">${msg['state.success']}</div>` : nothing}
</section>`;
}
renderStat(label: string, rawValue: unknown, emphasize = false) {
const msg = this.msg;
const display = rawValue === null || rawValue === undefined || rawValue === '' ? msg['value.unknown'] : String(rawValue);
return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><div class="text-sm text-[var(--text-muted,#64748b)]">${label}</div><div class="mt-2 tabular-nums text-2xl font-bold ${emphasize ? 'text-[var(--status-warning-text,#92400e)]' : 'text-[var(--text-strong,#0f172a)]'}">${display}</div></article>`;
}
}