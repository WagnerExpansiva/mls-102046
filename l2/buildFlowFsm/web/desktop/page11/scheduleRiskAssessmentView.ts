/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/scheduleRiskAssessmentView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmScheduleRiskAssessmentViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/scheduleRiskAssessmentView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'page.title': m['section.scheduleRiskAssessmentView.overview.title'],
  'assessment.title': m['organism.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.title'],
  'assessment.list.title': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.title'],
  'assessment.empty': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.empty'],
  'assessment.project': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.projectId.label'],
  'assessment.task': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.workTaskId.label'],
  'assessment.status': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.taskStatus.label'],
  'assessment.due': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.dueDate.label'],
  'assessment.progress': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.progressPercent.label'],
  'assessment.indicators': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskIndicators.label'],
  'assessment.explanation': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.riskExplanation.label'],
  'assessment.assessedAt': m['intent.scheduleRiskAssessmentView.qryScheduleRiskAssessmentView.list.column.assessedAt.label'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'project.context': 'Projeto selecionado',
  'project.missing': 'Selecione um projeto no contexto para consultar a avaliação.',
  'load': 'Consultar avaliação',
  'loading': 'Carregando avaliação de risco…',
  'error': 'Não foi possível carregar a avaliação de risco.',
  'details': 'Indicadores da avaliação',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'project.context': 'Projeto selecionado',
  'project.missing': 'Selecione um projeto no contexto para consultar a avaliação.',
  'load': 'Consultar avaliação',
  'loading': 'Carregando avaliação de risco…',
  'error': 'Não foi possível carregar a avaliação de risco.',
  'details': 'Indicadores da avaliação',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'project.context': 'Selected project',
  'project.missing': 'Select a project in the context to view the assessment.',
  'load': 'Load assessment',
  'loading': 'Loading risk assessment…',
  'error': 'The risk assessment could not be loaded.',
  'details': 'Assessment indicators',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'project.context': 'Proyecto seleccionado',
  'project.missing': 'Seleccione un proyecto en el contexto para consultar la evaluación.',
  'load': 'Consultar evaluación',
  'loading': 'Cargando evaluación de riesgo…',
  'error': 'No se pudo cargar la evaluación de riesgo.',
  'details': 'Indicadores de la evaluación',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--schedule-risk-assessment-view-102046')
export class BuildFlowFsmDesktopPage11ScheduleRiskAssessmentViewPage extends BuildFlowFsmScheduleRiskAssessmentViewBase {
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
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      ${this.renderAssessment()}
    </div>
  </div>`;
}
renderAssessment() {
const msg = this.msg;
const projectId = this.qryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId;
const state = this.qryScheduleRiskAssessmentViewState;
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-5" aria-labelledby="schedule-risk-assessment-title">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 id="schedule-risk-assessment-title" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['assessment.title']}</h2>
        <div class="mt-3">
          <div class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['project.context']}</div>
          ${projectId
            ? html`<div class="mt-1 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--text-muted,#475569)]">${projectId}</div>`
            : html`<div class="mt-1 text-sm text-[var(--status-warning-text,#92400e)]">${msg['project.missing']}</div>`}
        </div>
      </div>
      <button
        type="button"
        class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
        ?disabled=${!projectId || state === 'loading'}
        @click=${(event: Event) => this.handleQryScheduleRiskAssessmentViewClick(event)}>
        ${state === 'loading' ? msg['loading'] : msg['load']}
      </button>
    </div>
    ${state === 'loading'
      ? html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-sm text-[var(--text-muted,#475569)]" role="status">${msg['loading']}</div>`
      : state === 'error'
        ? html`<div class="rounded-md border border-[var(--status-error-bg,#fee2e2)] bg-[var(--status-error-bg,#fee2e2)] p-4 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">${msg['error']}</div>`
        : this.qryScheduleRiskAssessmentViewData
          ? html`<div class="space-y-3">
              <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">${msg['details']}</h3>
              <pre class="overflow-auto rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-sm text-[var(--text-default,#0f172a)]">${JSON.stringify(this.qryScheduleRiskAssessmentViewData, null, 2)}</pre>
            </div>`
          : html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-6 text-sm text-[var(--text-muted,#475569)]">${msg['assessment.empty']}</div>`}
  </section>`;
}
}
