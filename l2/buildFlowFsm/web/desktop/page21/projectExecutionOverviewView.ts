/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectExecutionOverviewView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectExecutionOverviewViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'project.name': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectName.label'],
  'project.status': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.projectStatus.label'],
  'tasks': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label'],
  'commitments': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label'],
  'hours': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label'],
  'materials': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label'],
  'laborCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label'],
  'materialCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label'],
  'actualCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label'],
  'budget': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label'],
  'variance': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label'],
  'changes': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label'],
  'calculated': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label'],
  'empty': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.empty'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'attention.none': 'Nada precisa de atenção agora.',
  'attention.some': 'Há itens que precisam de atenção.',
  'loading': 'Carregando os dados da execução.',
  'error': 'Não foi possível carregar os dados da execução.',
  'health': 'Estado atual da execução',
  'details': 'Registros consolidados',
  'updated': 'Dados calculados em',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'attention.none': 'Nada precisa de atenção agora.',
  'attention.some': 'Há itens que precisam de atenção.',
  'loading': 'Carregando os dados da execução.',
  'error': 'Não foi possível carregar os dados da execução.',
  'health': 'Estado atual da execução',
  'details': 'Registros consolidados',
  'updated': 'Dados calculados em',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'attention.none': 'Nothing needs attention right now.',
  'attention.some': 'Some items need attention.',
  'loading': 'Loading execution data.',
  'error': 'The execution data could not be loaded.',
  'health': 'Current execution status',
  'details': 'Consolidated records',
  'updated': 'Data calculated at',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'attention.none': 'Nada necesita atención ahora.',
  'attention.some': 'Hay elementos que necesitan atención.',
  'loading': 'Cargando los datos de ejecución.',
  'error': 'No se pudieron cargar los datos de ejecución.',
  'health': 'Estado actual de la ejecución',
  'details': 'Registros consolidados',
  'updated': 'Datos calculados a las',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--project-execution-overview-view-102046')
export class BuildFlowFsmDesktopPage21ProjectExecutionOverviewViewPage extends BuildFlowFsmProjectExecutionOverviewViewBase {
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
  ${this.qryProjectExecutionOverviewViewState === 'loading' ? html`
    <section class="space-y-4" aria-busy="true">
      <div class="h-8 w-2/5 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
      <div class="grid gap-3 md:grid-cols-3">
        ${[1, 2, 3].map(() => html`<div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}
      </div>
    </section>` : nothing}
  ${this.qryProjectExecutionOverviewViewState === 'error' ? html`
    <p class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-4 text-[var(--status-error-text,#991b1b)]">${msg['error']}</p>` : nothing}
  ${this.qryProjectExecutionOverviewViewState === 'success' && this.qryProjectExecutionOverviewViewData ? this.renderOverview(this.qryProjectExecutionOverviewViewData) : nothing}
`;
}
renderOverview(data: import('/_102046_/l2/buildFlowFsm/web/shared/projectExecutionOverviewView.js').QryProjectExecutionOverviewViewOutput) {
const msg = this.msg;
const attention = data.costVariance !== null && data.costVariance !== undefined && Number(data.costVariance) > 0;
const serialize = (value: unknown): string => value === null || value === undefined ? '—' : typeof value === 'string' ? value : JSON.stringify(value) ?? '—';
return html`
  <section class="space-y-6" aria-label="${msg['health']}">
    <p class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${attention ? msg['attention.some'] : msg['attention.none']}</p>
    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['project.name']}</p>
          <h2 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${serialize(data.projectName)}</h2>
        </div>
        <span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-1 text-sm text-[var(--status-neutral-text,#475569)]">${serialize(data.projectStatus)}</span>
      </div>
      <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        ${this.renderMetric(msg['tasks'], data.taskSummary, false)}
        ${this.renderMetric(msg['commitments'], data.upcomingCommitments, false)}
        ${this.renderMetric(msg['hours'], data.totalLoggedHours, false)}
        ${this.renderMetric(msg['materials'], data.materialUsageSummary, false)}
      </div>
    </div>
    <div class="grid gap-6 lg:grid-cols-2">
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
        <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['actualCost']}</h2>
        <div class="grid gap-3 sm:grid-cols-3">
          ${this.renderMetric(msg['actualCost'], data.actualCost, attention)}
          ${this.renderMetric(msg['budget'], data.budgetAmount, false)}
          ${this.renderMetric(msg['variance'], data.costVariance, attention)}
        </div>
        <div class="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-[var(--text-muted,#64748b)]">
          <span>${msg['laborCost']}: ${serialize(data.actualLaborCost)}</span>
          <span>${msg['materialCost']}: ${serialize(data.actualMaterialCost)}</span>
        </div>
      </section>
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
        <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['details']}</h2>
        <dl class="space-y-3 text-sm">
          <div class="flex justify-between gap-4"><dt class="text-[var(--text-muted,#64748b)]">${msg['changes']}</dt><dd class="text-right text-[var(--text-default,#0f172a)]">${serialize(data.changeOrderImpactSummary)}</dd></div>
          <div class="flex justify-between gap-4"><dt class="text-[var(--text-muted,#64748b)]">${msg['updated']}</dt><dd class="text-right text-[var(--text-default,#0f172a)]">${serialize(data.calculatedAt)}</dd></div>
        </dl>
      </section>
    </div>
  </section>
`;
}
renderMetric(label: string, value: unknown, alert: boolean) {
const display = value === null || value === undefined ? '—' : typeof value === 'string' ? value : JSON.stringify(value) ?? '—';
return html`<div class="min-w-0"><dt class="text-sm text-[var(--text-muted,#64748b)]">${label}</dt><dd class="mt-1 break-words text-lg font-semibold ${alert ? 'text-[var(--status-error-text,#991b1b)]' : 'text-[var(--text-default,#0f172a)]'}">${display}</dd></div>`;
}
}
