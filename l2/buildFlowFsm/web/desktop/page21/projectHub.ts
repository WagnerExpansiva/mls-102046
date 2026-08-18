/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectHub.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectHubBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectHub.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'projects.title': m['organism.projectHub.qryListProject.title'],
  'projects.empty': m['intent.projectHub.qryListProject.list.empty'],
  'project.name': m['intent.projectHub.qryListProject.list.column.name.label'],
  'project.status': m['intent.projectHub.qryListProject.list.column.status.label'],
  'project.budget': m['intent.projectHub.qryListProject.list.column.authorizedBudget.label'],
  'project.start': m['intent.projectHub.qryListProject.list.column.plannedStartDate.label'],
  'project.end': m['intent.projectHub.qryListProject.list.column.plannedEndDate.label'],
  'dashboard.active': m['intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label'],
  'dashboard.variance': m['intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label'],
  'dashboard.attention': m['intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label'],
  'dashboard.tasks': m['intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label'],
  'execution.title': m['organism.projectHub.qryProjectExecutionOverviewView.title'],
  'execution.tasks': m['intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label'],
  'execution.commitments': m['intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label'],
  'execution.actual': m['intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label'],
  'execution.budget': m['intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label'],
  'execution.costVariance': m['intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label'],
  'risk.title': m['organism.projectHub.qryScheduleRiskAssessmentView.title'],
  'risk.task': m['intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label'],
  'risk.due': m['intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label'],
  'risk.indicator': m['intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label'],
  'risk.explanation': m['intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label'],
  'timeline.title': m['organism.projectHub.qryProjectTimelineView.title'],
  'timeline.tasks': m['intent.projectHub.qryProjectTimelineView.list.column.workTasks.label'],
  'timeline.entries': m['intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label'],
  'billing.title': m['organism.projectHub.qryClientBillingSummaryView.title'],
  'billing.approved': m['intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label'],
  'billing.billable': m['intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label'],
  'billing.invoiced': m['intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label'],
  'billing.available': m['intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'triage.headline': 'obras precisam de atenção',
  'triage.clear': 'Nada precisa de atenção agora.',
  'triage.select': 'Selecione uma obra para ver o contexto.',
  'triage.error': 'Não foi possível carregar esta área.',
  'triage.loading': 'Carregando informações…',
  'selected.context': 'Contexto da obra selecionada',
  'support.title': 'Registros de apoio',
  'support.open': 'Consultar registros de apoio',
  'support.project': 'Obra selecionada',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'triage.headline': 'obras precisam de atenção', 'triage.clear': 'Nada precisa de atenção agora.', 'triage.select': 'Selecione uma obra para ver o contexto.', 'triage.error': 'Não foi possível carregar esta área.', 'triage.loading': 'Carregando informações…', 'selected.context': 'Contexto da obra selecionada', 'support.title': 'Registros de apoio', 'support.open': 'Consultar registros de apoio', 'support.project': 'Obra selecionada',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'triage.headline': 'projects need attention', 'triage.clear': 'Nothing needs attention right now.', 'triage.select': 'Select a project to see its context.', 'triage.error': 'This area could not be loaded.', 'triage.loading': 'Loading information…', 'selected.context': 'Selected project context', 'support.title': 'Supporting records', 'support.open': 'View supporting records', 'support.project': 'Selected project',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'triage.headline': 'obras necesitan atención', 'triage.clear': 'Nada necesita atención ahora.', 'triage.select': 'Seleccione una obra para ver el contexto.', 'triage.error': 'No fue posible cargar esta área.', 'triage.loading': 'Cargando información…', 'selected.context': 'Contexto de la obra seleccionada', 'support.title': 'Registros de apoyo', 'support.open': 'Consultar registros de apoyo', 'support.project': 'Obra seleccionada',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--project-hub-102046')
export class BuildFlowFsmDesktopPage21ProjectHubPage extends BuildFlowFsmProjectHubBase {
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
return html`${this.renderProjects()}${this.renderSelectedContext()}${this.renderHealth()}${this.renderSupportingRecords()}`;
}
renderProjects() {
const msg = this.msg;
const value = (row: Record<string, unknown>, key: string): string => {
  const item = row[key];
  return item === null || item === undefined ? '—' : String(item);
};
const projects = this.qryListProjectData as unknown as Record<string, unknown>[];
const selected = this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId;
const attention = projects.filter((project: Record<string, unknown>) => Boolean(project['riskIndicators'] ?? project['overdue'] ?? project['hasAlert']));
return html`<section class="space-y-4" aria-label=${msg['projects.title']}>
  <p class="text-lg font-semibold text-[var(--text-strong,#172033)]">${attention.length > 0 ? html`${attention.length} ${msg['triage.headline']}` : msg['triage.clear']}</p>
  ${this.qryListProjectState === 'loading' ? html`<div class="space-y-2" aria-live="polite"><div class="h-16 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-16 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div></div>` : nothing}
  ${this.qryListProjectState === 'error' ? html`<p class="text-[var(--status-error-text,#b42318)]">${msg['triage.error']}</p>` : nothing}
  ${this.qryListProjectState !== 'loading' && projects.length === 0 ? html`<p class="text-[var(--text-muted,#667085)]">${msg['projects.empty']}</p>` : nothing}
  <div class="grid gap-3 md:grid-cols-2">
  ${projects.map((project: Record<string, unknown>) => { const id = value(project, 'projectId'); const isSelected = id === selected; return html`<button type="button" class="w-full rounded-lg border p-4 text-left ${isSelected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e4e7ec)] bg-[var(--surface-bg,#ffffff)]'}" @click=${() => { this.setQryClientBillingSummaryViewClientBillingSummaryClientId(id); this.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(id); this.setQryProjectTimelineViewProjectTimelineProjectId(id); this.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(id); void this.loadQryClientBillingSummaryView(); void this.loadQryProjectExecutionOverviewView(); void this.loadQryProjectTimelineView(); void this.loadQryScheduleRiskAssessmentView(); }}>
    <div class="flex items-start justify-between gap-3"><strong class="text-[var(--text-strong,#172033)]">${value(project, 'name')}</strong><span class="text-sm text-[var(--text-muted,#667085)]">${value(project, 'status')}</span></div>
    <dl class="mt-3 grid grid-cols-2 gap-2 text-sm"><div><dt class="text-[var(--text-muted,#667085)]">${msg['project.budget']}</dt><dd class="tabular-nums">${value(project, 'authorizedBudget')}</dd></div><div><dt class="text-[var(--text-muted,#667085)]">${msg['project.start']}</dt><dd>${value(project, 'plannedStartDate')}</dd></div><div><dt class="text-[var(--text-muted,#667085)]">${msg['project.end']}</dt><dd>${value(project, 'plannedEndDate')}</dd></div></dl>
  </button>`; })}
  </div>
</section>`;
}
renderSelectedContext() {
const msg = this.msg;
const execution = this.qryProjectExecutionOverviewViewData as unknown as Record<string, unknown> | null;
const timeline = this.qryProjectTimelineViewData as unknown as Record<string, unknown> | null;
const riskRows = (this.qryScheduleRiskAssessmentViewData ? [this.qryScheduleRiskAssessmentViewData] : []) as unknown as Record<string, unknown>[];
const value = (row: Record<string, unknown> | null, key: string): string => { const item = row?.[key]; return item === null || item === undefined ? '—' : String(item); };
const selected = this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId;
if (!selected) return html`<p class="mt-6 text-[var(--text-muted,#667085)]">${msg['triage.select']}</p>`;
return html`<section class="mt-8 space-y-4" aria-label=${msg['selected.context']}><h2 class="text-xl font-semibold text-[var(--text-strong,#172033)]">${msg['selected.context']}</h2>
<div class="grid gap-4 lg:grid-cols-3"><article class="rounded-lg border border-[var(--border-subtle,#e4e7ec)] bg-[var(--surface-bg,#ffffff)] p-4"><h3 class="font-semibold">${msg['execution.title']}</h3><dl class="mt-3 space-y-2 text-sm"><div><dt class="text-[var(--text-muted,#667085)]">${msg['execution.tasks']}</dt><dd>${value(execution, 'taskSummary')}</dd></div><div><dt class="text-[var(--text-muted,#667085)]">${msg['execution.commitments']}</dt><dd>${value(execution, 'upcomingCommitments')}</dd></div><div><dt class="text-[var(--text-muted,#667085)]">${msg['execution.costVariance']}</dt><dd class="tabular-nums">${value(execution, 'costVariance')}</dd></div></dl></article>
<article class="rounded-lg border border-[var(--border-subtle,#e4e7ec)] bg-[var(--surface-bg,#ffffff)] p-4"><h3 class="font-semibold">${msg['risk.title']}</h3>${this.qryScheduleRiskAssessmentViewState === 'loading' ? html`<p class="mt-3 text-sm text-[var(--text-muted,#667085)]">${msg['triage.loading']}</p>` : riskRows.length === 0 ? html`<p class="mt-3 text-sm text-[var(--text-muted,#667085)]">${msg['triage.clear']}</p>` : riskRows.map((risk: Record<string, unknown>) => html`<div class="mt-3 border-l-2 border-[var(--status-warning-bg,#f79009)] pl-3"><p class="font-medium">${value(risk, 'workTaskId')}</p><p class="text-sm text-[var(--status-warning-text,#b54708)]">${value(risk, 'riskExplanation')}</p><p class="text-sm text-[var(--text-muted,#667085)]">${value(risk, 'dueDate')}</p></div>`)}</article>
<article class="rounded-lg border border-[var(--border-subtle,#e4e7ec)] bg-[var(--surface-bg,#ffffff)] p-4"><h3 class="font-semibold">${msg['timeline.title']}</h3><dl class="mt-3 space-y-2 text-sm"><div><dt class="text-[var(--text-muted,#667085)]">${msg['timeline.tasks']}</dt><dd>${value(timeline, 'workTasks')}</dd></div><div><dt class="text-[var(--text-muted,#667085)]">${msg['timeline.entries']}</dt><dd>${value(timeline, 'scheduleEntries')}</dd></div></dl></article></div></section>`;
}
renderHealth() {
const msg = this.msg;
const dashboard = this.qryProjectDashboardViewData as unknown as Record<string, unknown> | null;
const value = (key: string): string => { const item = dashboard?.[key]; return item === null || item === undefined ? '—' : String(item); };
return html`<section class="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-[var(--border-subtle,#e4e7ec)] py-4" aria-label=${msg['dashboard.active']}><span><strong class="tabular-nums">${value('activeProjectCount')}</strong> <span class="text-sm text-[var(--text-muted,#667085)]">${msg['dashboard.active']}</span></span><span><strong class="tabular-nums">${value('budgetVariance')}</strong> <span class="text-sm text-[var(--text-muted,#667085)]">${msg['dashboard.variance']}</span></span><span><strong class="tabular-nums">${value('costAttentionProjects')}</strong> <span class="text-sm text-[var(--text-muted,#667085)]">${msg['dashboard.attention']}</span></span><span><strong class="tabular-nums">${value('upcomingTasks')}</strong> <span class="text-sm text-[var(--text-muted,#667085)]">${msg['dashboard.tasks']}</span></span></section>`;
}
renderSupportingRecords() {
const msg = this.msg;
return html`<details class="mt-8"><summary class="cursor-pointer text-[var(--link-text,#175cd3)]">${msg['support.open']}</summary><section class="mt-3 rounded-lg border border-[var(--border-subtle,#e4e7ec)] p-4"><h2 class="font-semibold">${msg['support.title']}</h2><p class="mt-2 text-sm text-[var(--text-muted,#667085)]">${msg['support.project']}: ${this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId || '—'}</p></section></details>`;
}
}