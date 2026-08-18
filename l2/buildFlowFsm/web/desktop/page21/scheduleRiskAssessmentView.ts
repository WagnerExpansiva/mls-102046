/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/scheduleRiskAssessmentView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmScheduleRiskAssessmentViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.js';
import type { QryScheduleRiskAssessmentViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.title': m['section.scheduleRiskAssessmentView.overview.title'],
  'assessment.title': m['organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title'],
  'list.title': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title'],
  'list.empty': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty'],
  'project.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label'],
  'task.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label'],
  'status.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label'],
  'due.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label'],
  'progress.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label'],
  'indicators.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label'],
  'explanation.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label'],
  'assessed.label': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'triage.headline': 'tarefas precisam de atenção',
  'triage.none': 'Nada precisa de atenção agora.',
  'health.title': 'Visão geral do cronograma',
  'project.context': 'Projeto em análise',
  'load': 'Atualizar avaliação',
  'loading': 'Carregando avaliação…',
  'retry': 'Tentar novamente',
  'unknown': 'Não informado',
  'count.label': 'tarefas em risco',
  'fact.label': 'Indicador decisivo',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'triage.headline': 'tarefas precisam de atenção',
  'triage.none': 'Nada precisa de atenção agora.',
  'health.title': 'Visão geral do cronograma',
  'project.context': 'Projeto em análise',
  'load': 'Atualizar avaliação',
  'loading': 'Carregando avaliação…',
  'retry': 'Tentar novamente',
  'unknown': 'Não informado',
  'count.label': 'tarefas em risco',
  'fact.label': 'Indicador decisivo',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
  'triage.headline': 'tasks need attention',
  'triage.none': 'Nothing needs attention right now.',
  'health.title': 'Schedule health',
  'project.context': 'Project under review',
  'load': 'Refresh assessment',
  'loading': 'Loading assessment…',
  'retry': 'Try again',
  'unknown': 'Not provided',
  'count.label': 'tasks at risk',
  'fact.label': 'Decisive indicator',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
  'triage.headline': 'tareas necesitan atención',
  'triage.none': 'Nada necesita atención ahora.',
  'health.title': 'Estado del cronograma',
  'project.context': 'Proyecto en revisión',
  'load': 'Actualizar evaluación',
  'loading': 'Cargando evaluación…',
  'retry': 'Intentar de nuevo',
  'unknown': 'No informado',
  'count.label': 'tareas en riesgo',
  'fact.label': 'Indicador decisivo',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--schedule-risk-assessment-view-102046')
export class BuildFlowFsmDesktopPage21ScheduleRiskAssessmentViewPage extends BuildFlowFsmScheduleRiskAssessmentViewBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6">
  <div class="mx-auto max-w-7xl">
    <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['section.title']}</p>
        <h1 class="mt-1 text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['assessment.title']}</h1>
      </div>
      <div class="flex items-center gap-3">
        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-2 text-sm">
          <span class="text-[var(--text-muted,#64748b)]">${msg['project.context']}: </span><span class="font-medium">${this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId || msg['unknown']}</span>
        </div>
        <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60" ?disabled=${this.qryScheduleRiskAssessmentViewState === 'loading'} @click=${(event: Event) => this.handleQryScheduleRiskAssessmentViewClick(event)}>${this.qryScheduleRiskAssessmentViewState === 'loading' ? msg['loading'] : msg['load']}</button>
      </div>
    </div>
    ${this.renderRiskBoard()}
  </div>
</main>`;
}
renderRiskBoard() {
const msg = this.msg;
const data: QryScheduleRiskAssessmentViewOutput | null = this.qryScheduleRiskAssessmentViewData;
if (this.qryScheduleRiskAssessmentViewState === 'loading') {
  return html`<section aria-busy="true" class="space-y-4"><div class="h-12 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="grid gap-4 md:grid-cols-2"><div class="h-48 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-48 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div></div></section>`;
}
const records: Array<Record<string, unknown>> = [];
if (data) {
  for (const value of Object.values(data)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === 'object' && item !== null) records.push(item as Record<string, unknown>);
      }
    }
  }
}
const valueFor = (record: Record<string, unknown>, names: string[]): unknown => {
  const name = names.find((candidate: string) => Object.prototype.hasOwnProperty.call(record, candidate));
  return name ? record[name] : undefined;
};
const display = (value: unknown): string => {
  if (value === null || value === undefined || value === '') return msg['unknown'];
  if (Array.isArray(value)) return value.map((entry: unknown) => display(entry)).join(', ');
  if (typeof value === 'object') return Object.values(value as Record<string, unknown>).map((entry: unknown) => display(entry)).join(', ');
  return String(value);
};
const headline = records.length === 0 ? msg['triage.none'] : `${records.length} ${msg['triage.headline']}`;
if (this.qryScheduleRiskAssessmentViewState === 'error') {
  return html`<section class="rounded-lg border border-[var(--status-error-bg,#fee2e2)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-sm text-[var(--status-error-text,#b91c1c)]">${msg['list.empty']}</p><button type="button" class="mt-3 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryScheduleRiskAssessmentViewClick(event)}>${msg['retry']}</button></section>`;
}
return html`<section aria-label=${msg['list.title']}>
  <p class="mb-5 text-lg font-medium text-[var(--text-strong,#0f172a)]">${headline}</p>
  ${records.length === 0 ? nothing : html`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">${records.map((record: Record<string, unknown>) => {
    const task = display(valueFor(record, ['workTaskId', 'taskId', 'name', 'title']));
    const status = display(valueFor(record, ['taskStatus', 'status']));
    const due = display(valueFor(record, ['dueDate']));
    const progress = display(valueFor(record, ['progressPercent', 'progress']));
    const indicators = display(valueFor(record, ['riskIndicators', 'indicators']));
    const explanation = display(valueFor(record, ['riskExplanation', 'explanation']));
    const assessed = display(valueFor(record, ['assessedAt']));
    return html`<article class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_3px_rgba(15,23,42,0.08))]">
      <div class="flex items-start justify-between gap-3"><h2 class="font-semibold text-[var(--text-strong,#0f172a)]">${task}</h2><span class="rounded-full bg-[var(--status-warning-bg,#fef3c7)] px-2 py-1 text-xs text-[var(--status-warning-text,#92400e)]">${status}</span></div>
      <dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['due.label']}</dt><dd class="font-medium">${due}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['progress.label']}</dt><dd class="font-medium">${progress}</dd></div></dl>
      <div class="mt-4 border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><p class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['indicators.label']}</p><p class="mt-1 text-sm font-medium text-[var(--status-warning-text,#92400e)]">${indicators}</p><p class="mt-3 text-sm text-[var(--text-default,#0f172a)]"><span class="font-medium">${msg['explanation.label']}: </span>${explanation}</p></div>
      <p class="mt-4 text-xs text-[var(--text-muted,#64748b)]">${msg['assessed.label']}: ${assessed}</p>
    </article>`;
  })}</div>`}
  <div class="mt-8 border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><h2 class="text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['health.title']}</h2><p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${records.length} ${msg['count.label']}</p></div>
</section>`;
}
}
