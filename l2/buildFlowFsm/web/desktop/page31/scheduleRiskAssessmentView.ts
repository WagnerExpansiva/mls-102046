/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/scheduleRiskAssessmentView.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'overview.title': m['section.scheduleRiskAssessmentView.overview.title'],
'assessment.title': m['organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title'],
'list.title': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title'],
'list.empty': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty'],
'column.projectId': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label'],
'column.workTaskId': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label'],
'column.taskStatus': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label'],
'column.dueDate': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label'],
'column.progressPercent': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label'],
'column.riskIndicators': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label'],
'column.riskExplanation': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label'],
'column.assessedAt': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'project.context': 'Projeto selecionado',
'query.action': 'Consultar riscos',
'query.loading': 'Consultando riscos…',
'query.error': 'Não foi possível consultar os riscos.',
'detail.title': 'Fatores que exigem atenção',
'summary.title': 'Indicadores do cronograma',
'unknown': '—'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'project.context': 'Projeto selecionado',
'query.action': 'Consultar riscos',
'query.loading': 'Consultando riscos…',
'query.error': 'Não foi possível consultar os riscos.',
'detail.title': 'Fatores que exigem atenção',
'summary.title': 'Indicadores do cronograma',
'unknown': '—'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'project.context': 'Selected project',
'query.action': 'Check risks',
'query.loading': 'Checking risks…',
'query.error': 'Risks could not be retrieved.',
'detail.title': 'Factors requiring attention',
'summary.title': 'Schedule indicators',
'unknown': '—'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'project.context': 'Proyecto seleccionado',
'query.action': 'Consultar riesgos',
'query.loading': 'Consultando riesgos…',
'query.error': 'No fue posible consultar los riesgos.',
'detail.title': 'Factores que requieren atención',
'summary.title': 'Indicadores del cronograma',
'unknown': '—'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--schedule-risk-assessment-view-102046')
export class BuildFlowFsmDesktopPage31ScheduleRiskAssessmentViewPage extends BuildFlowFsmScheduleRiskAssessmentViewBase {
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
<section class="min-h-full bg-[var(--page-bg,#f8fafc)] p-6 text-[var(--text-default,#0f172a)]">
  ${this.renderContext(msg)}
  ${this.renderAssessment(msg)}
</section>`;
}
renderContext(msg: PageMessageType) {
const loading = this.qryScheduleRiskAssessmentViewState === 'loading';
return html`<div class="mb-6 flex flex-wrap items-end justify-between gap-4">
  <div>
    <p class="mb-1 text-sm text-[var(--text-muted,#64748b)]">${msg['project.context']}</p>
    <p class="font-semibold">${this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId || msg['unknown']}</p>
  </div>
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading || !this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId} @click=${(event: Event) => this.handleQryScheduleRiskAssessmentViewClick(event)}>
    ${loading ? msg['query.loading'] : msg['query.action']}
  </button>
</div>`;
}
renderAssessment(msg: PageMessageType) {
const state = this.qryScheduleRiskAssessmentViewState;
if (state === 'loading') {
return html`<div class="space-y-4" aria-busy="true">
  <div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
  <div class="h-64 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
</div>`;
}
if (state === 'error') {
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6">
  <p class="text-[var(--status-error-text,#b91c1c)]">${msg['query.error']}</p>
</section>`;
}
const raw: Record<string, unknown> = (this.qryScheduleRiskAssessmentViewData ?? {}) as unknown as Record<string, unknown>;
const arrays: unknown[][] = Object.values(raw).filter((value: unknown): value is unknown[] => Array.isArray(value));
const rows: Record<string, unknown>[] = (arrays[0] ?? []).filter((value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value));
const first = rows[0];
const labels: Record<string, string> = {
projectId: msg['column.projectId'], workTaskId: msg['column.workTaskId'], taskStatus: msg['column.taskStatus'],
dueDate: msg['column.dueDate'], progressPercent: msg['column.progressPercent'], riskIndicators: msg['column.riskIndicators'],
riskExplanation: msg['column.riskExplanation'], assessedAt: msg['column.assessedAt']
};
const scalarStats = Object.entries(raw).filter(([key, value]: [string, unknown]) => typeof value === 'number' && key in labels);
return html`<section class="space-y-5">
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    ${scalarStats.map(([key, value]: [string, unknown]) => html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
      <p class="text-sm text-[var(--text-muted,#64748b)]">${labels[key]}</p><p class="mt-2 text-3xl font-bold tabular-nums">${String(value)}</p>
    </article>`)}
  </div>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,1fr)]">
    <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5">
      <div class="mb-4 flex items-center justify-between gap-3"><h2 class="text-lg font-semibold">${msg['list.title']}</h2><span class="text-sm text-[var(--text-muted,#64748b)]">${rows.length}</span></div>
      ${rows.length === 0 ? html`<p class="py-8 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="space-y-2">${rows.map((row: Record<string, unknown>) => this.renderRow(row, labels, msg))}</div>`}
    </section>
    <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5">
      <h2 class="mb-4 text-lg font-semibold">${msg['detail.title']}</h2>
      ${first ? this.renderDetail(first, labels, msg) : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>`}
    </section>
  </div>
</section>`;
}
renderRow(row: Record<string, unknown>, labels: Record<string, string>, msg: PageMessageType) {
const risky = String(row['taskStatus'] ?? '').toLowerCase() !== 'completed';
return html`<article class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 ${risky ? 'border-l-4 border-l-[var(--status-warning-bg,#f59e0b)]' : ''}">
  <div class="flex flex-wrap items-start justify-between gap-3"><div><p class="font-medium">${String(row['workTaskId'] ?? msg['unknown'])}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${labels['taskStatus']}: ${String(row['taskStatus'] ?? msg['unknown'])}</p></div>
  <span class="rounded-full bg-[var(--status-warning-bg,#fef3c7)] px-2 py-1 text-xs text-[var(--status-warning-text,#92400e)]">${String(row['progressPercent'] ?? msg['unknown'])}%</span></div>
  <div class="mt-2 grid gap-1 text-sm text-[var(--text-muted,#64748b)] sm:grid-cols-2"><span>${labels['dueDate']}: ${String(row['dueDate'] ?? msg['unknown'])}</span><span>${labels['riskIndicators']}: ${String(row['riskIndicators'] ?? msg['unknown'])}</span></div>
</article>`;
}
renderDetail(row: Record<string, unknown>, labels: Record<string, string>, msg: PageMessageType) {
const detailKeys = ['riskExplanation', 'riskIndicators', 'dueDate', 'progressPercent', 'assessedAt'];
return html`<dl class="space-y-4">${detailKeys.map((key: string) => html`<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${labels[key]}</dt><dd class="mt-1 font-medium">${String(row[key] ?? msg['unknown'])}</dd></div>`)}</dl>`;
}
}
