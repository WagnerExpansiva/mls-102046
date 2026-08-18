/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectExecutionOverviewView.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'workTaskIds': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.workTaskIds.label'],
'taskSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.taskSummary.label'],
'upcomingCommitments': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label'],
'timeLogIds': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.timeLogIds.label'],
'totalLoggedHours': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label'],
'materialUsageIds': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageIds.label'],
'materialUsageSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.materialUsageSummary.label'],
'actualLaborCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualLaborCost.label'],
'actualMaterialCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualMaterialCost.label'],
'actualCost': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.actualCost.label'],
'budgetAmount': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.budgetAmount.label'],
'costVariance': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.costVariance.label'],
'changeOrderIds': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderIds.label'],
'changeOrderImpactSummary': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.changeOrderImpactSummary.label'],
'calculatedAt': m['intent.projectExecutionOverviewView.qryProjectExecutionOverviewView.list.column.calculatedAt.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'project.choose': 'Obra selecionada no contexto',
'project.load': 'Atualizar visão da obra',
'project.loading': 'Carregando visão da obra…',
'project.notSelected': 'Selecione uma obra para consultar a execução.',
'project.noData': 'Não há dados de execução para esta obra.',
'project.summary': 'Resumo operacional',
'project.costs': 'Custos realizados',
'project.activity': 'Atividade e compromissos',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'project.choose': 'Obra selecionada no contexto', 'project.load': 'Atualizar visão da obra', 'project.loading': 'Carregando visão da obra…', 'project.notSelected': 'Selecione uma obra para consultar a execução.', 'project.noData': 'Não há dados de execução para esta obra.', 'project.summary': 'Resumo operacional', 'project.costs': 'Custos realizados', 'project.activity': 'Atividade e compromissos',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'project.choose': 'Project selected from context', 'project.load': 'Refresh project overview', 'project.loading': 'Loading project overview…', 'project.notSelected': 'Select a project to view its execution.', 'project.noData': 'There is no execution data for this project.', 'project.summary': 'Operational summary', 'project.costs': 'Actual costs', 'project.activity': 'Activity and commitments',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'project.choose': 'Obra seleccionada del contexto', 'project.load': 'Actualizar visión de la obra', 'project.loading': 'Cargando visión de la obra…', 'project.notSelected': 'Seleccione una obra para consultar la ejecución.', 'project.noData': 'No hay datos de ejecución para esta obra.', 'project.summary': 'Resumen operativo', 'project.costs': 'Costes realizados', 'project.activity': 'Actividad y compromisos',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--project-execution-overview-view-102046')
export class BuildFlowFsmDesktopPage11ProjectExecutionOverviewViewPage extends BuildFlowFsmProjectExecutionOverviewViewBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
${this.renderHeader()}
${this.renderOverview(msg)}
</div>
</main>`;
}
renderHeader() {
const msg = this.msg;
return html`<header class="space-y-2"><h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h1>
<div class="flex flex-wrap items-center gap-3"><label class="text-sm text-[var(--text-muted,#475569)]" for="project-context">${msg['project.choose']}</label>
<input id="project-context" class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId} readonly disabled>
<button class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.qryProjectExecutionOverviewViewState === 'loading' || !this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId} @click=${(event: Event) => this.handleQryProjectExecutionOverviewViewClick(event)}>${this.qryProjectExecutionOverviewViewState === 'loading' ? msg['project.loading'] : msg['project.load']}</button></div></header>`;
}
renderOverview(msg: PageMessageType) {
const data: QryProjectExecutionOverviewViewOutput | null = this.qryProjectExecutionOverviewViewData;
const record = data as unknown as Record<string, unknown> | null;
const value = (key: string): string => { const item = record?.[key]; return item === null || item === undefined ? '—' : Array.isArray(item) ? item.join(', ') : String(item); };
const hasData = record !== null;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-5">
<h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['overview.query.title']}</h2>
${this.qryProjectExecutionOverviewViewState === 'loading' ? html`<p class="rounded bg-[var(--status-info-bg,#e0f2fe)] px-4 py-3 text-[var(--status-info-text,#075985)]" role="status">${msg['project.loading']}</p>` : !hasData ? html`<p class="text-[var(--text-muted,#475569)]">${this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId ? msg['project.noData'] : msg['project.notSelected']}</p>` : html`
<h3 class="text-base font-semibold">${msg['project.summary']}</h3>
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${this.renderMetric(msg['projectId'], value('projectId'))}${this.renderMetric(msg['projectName'], value('projectName'))}${this.renderMetric(msg['projectStatus'], value('projectStatus'))}${this.renderMetric(msg['totalLoggedHours'], value('totalLoggedHours'))}${this.renderMetric(msg['calculatedAt'], value('calculatedAt'))}</div>
<div class="grid gap-5 lg:grid-cols-2"><div><h3 class="mb-3 text-base font-semibold">${msg['project.activity']}</h3><dl class="space-y-2">${this.renderMetric(msg['workTaskIds'], value('workTaskIds'))}${this.renderMetric(msg['taskSummary'], value('taskSummary'))}${this.renderMetric(msg['upcomingCommitments'], value('upcomingCommitments'))}${this.renderMetric(msg['timeLogIds'], value('timeLogIds'))}${this.renderMetric(msg['materialUsageSummary'], value('materialUsageSummary'))}</dl></div><div><h3 class="mb-3 text-base font-semibold">${msg['project.costs']}</h3><dl class="space-y-2">${this.renderMetric(msg['actualLaborCost'], value('actualLaborCost'))}${this.renderMetric(msg['actualMaterialCost'], value('actualMaterialCost'))}${this.renderMetric(msg['actualCost'], value('actualCost'))}${this.renderMetric(msg['budgetAmount'], value('budgetAmount'))}${this.renderMetric(msg['costVariance'], value('costVariance'))}${this.renderMetric(msg['changeOrderImpactSummary'], value('changeOrderImpactSummary'))}</dl></div></div>`}
</section>`;
}
renderMetric(label: string, content: string) {
return html`<div class="rounded border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3"><dt class="text-sm text-[var(--text-muted,#475569)]">${label}</dt><dd class="mt-1 break-words text-[var(--text-default,#0f172a)]">${content}</dd></div>`;
}
}
