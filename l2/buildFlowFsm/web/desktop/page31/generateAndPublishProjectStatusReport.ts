/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/generateAndPublishProjectStatusReport.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmGenerateAndPublishProjectStatusReportBase,
  messages,
} from '/_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.js';

type MessageType = (typeof messages)[string];
const collab_i18n_pt = messages['pt'] as MessageType;
const collab_i18n_en = messages['en'] as MessageType;
const collab_i18n = { pt: collab_i18n_pt, en: collab_i18n_en };

type ValueRecord = Record<string, unknown>;

@customElement('build-flow-fsm--web--desktop--page31--generate-and-publish-project-status-report-102046')
export class BuildFlowFsmGenerateAndPublishProjectStatusReportDesktopPage31GenerateAndPublishProjectStatusReportPage
  extends BuildFlowFsmGenerateAndPublishProjectStatusReportBase {
  protected get msg(): MessageType {
    const locale = (this as unknown as { locale?: string }).locale;
    return collab_i18n[locale === 'en' ? 'en' : 'pt'];
  }

  render() {
    const msg = this.msg;
    const record = (value: unknown): ValueRecord =>
      value !== null && typeof value === 'object' ? value as ValueRecord : {};
    const text = (value: unknown): string => value === null || value === undefined ? '' : String(value);
    const projects = this.qryLocateProjectData ?? [];
    const selectedId = this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId;
    const selectedProject = projects.find((project): boolean => {
      const item = record(project);
      return text(item['projectId']) === selectedId;
    });
    const execution = record(this.qryInspectProjectExecutionOverviewData);
    const riskData = record(this.qryInspectScheduleRiskAssessmentData);
    const risks = Array.isArray(riskData['risks'])
      ? riskData['risks']
      : Array.isArray(riskData['scheduleRisks']) ? riskData['scheduleRisks'] : [];
    const report = record(this.cmdCreateStatusReportOutput);
    const reportId = text(report['statusReportId'] ?? report['id']);
    const reportStatus = text(report['status'] ?? this.status);
    const loadingExecution = this.qryInspectProjectExecutionOverviewState === 'loading';
    const loadingRisks = this.qryInspectScheduleRiskAssessmentState === 'loading';
    const createLoading = this.cmdCreateStatusReportState === 'loading';
    const publishLoading = this.cmdPublishStatusReportState === 'loading';
    const handoffLoading = this.cmdHandoffStatusReportToClientState === 'loading';
    const selectProject = (project: unknown): void => {
      const id = text(record(project)['projectId']);
      this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(id);
      this.setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId(id);
      this.setCmdCreateStatusReportProjectProjectId(id);
      this.setCmdCreateStatusReportProjectExecutionOverviewProjectId(id);
      this.setCmdPublishStatusReportProjectProjectId(id);
      this.setCmdPublishStatusReportProjectExecutionOverviewProjectId(id);
      void this.loadQryInspectProjectExecutionOverview();
      void this.loadQryInspectScheduleRiskAssessment();
    };
    const feedback = (state: string, successKey: keyof MessageType, errorKey: keyof MessageType, error: string) =>
      state === 'success'
        ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg[successKey]}</p>`
        : state === 'error'
          ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${error || msg[errorKey]}</p>`
          : nothing;

    return html`
      <main class="min-h-full bg-[var(--page-bg,#f8fafc)] p-6 text-[var(--text-default,#0f172a)]">
        <section class="mx-auto max-w-7xl space-y-6">
          <div>
            <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.generateAndPublishProjectStatusReport.projectContext.title']}</h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['organism.generateAndPublishProjectStatusReport.qryLocateProject.title']}</p>
          </div>
          <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
              <h2 class="mb-3 text-lg font-semibold">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title']}</h2>
              ${this.qryLocateProjectState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['organism.generateAndPublishProjectStatusReport.qryLocateProject.title']}</p>` : nothing}
              ${projects.length === 0 && this.qryLocateProjectState !== 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty']}</p>` : nothing}
              <div class="space-y-2">
                ${projects.map((project): unknown => {
                  const item = record(project);
                  const id = text(item['projectId']);
                  return html`<button type="button" class="w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${(): void => selectProject(project)}>
                    <span class="block font-medium">${text(item['name'])}</span>
                    <span class="text-sm text-[var(--text-muted,#64748b)]">${text(item['status'])} · ${id}</span>
                  </button>`;
                })}
              </div>
            </section>
            <section class="space-y-6">
              ${selectedProject ? html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div><h2 class="text-xl font-semibold">${text(record(selectedProject)['name'])}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label']}: ${text(record(selectedProject)['status'])}</p></div>
                </div>
                <h3 class="mt-5 text-base font-semibold">${msg['section.generateAndPublishProjectStatusReport.projectAssessment.title']}</h3>
                ${loadingExecution ? html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title']}</p>` : nothing}
                <dl class="mt-3 grid gap-3 sm:grid-cols-2">
                  ${[['taskSummary', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label'], ['upcomingCommitments', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label'], ['totalLoggedHours', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label'], ['actualCost', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label'], ['budgetAmount', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'], ['costVariance', 'intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label']].map((entry): unknown => html`<div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3"><dt class="text-xs text-[var(--text-muted,#64748b)]">${msg[entry[1] as keyof MessageType]}</dt><dd class="mt-1 font-medium">${text(execution[entry[0]])}</dd></div>`)}
                </dl>
                <h3 class="mt-5 text-base font-semibold">${msg['organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title']}</h3>
                ${loadingRisks ? html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title']}</p>` : nothing}
                ${risks.length === 0 && !loadingRisks ? html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty']}</p>` : nothing}
                <div class="mt-3 space-y-2">${risks.map((risk): unknown => { const item = record(risk); return html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3"><div class="flex justify-between gap-3"><span class="font-medium">${text(item['workTaskId'])}</span><span class="text-sm text-[var(--text-muted,#64748b)]">${text(item['dueDate'])} · ${text(item['progressPercent'])}</span></div><p class="mt-1 text-sm">${text(item['riskExplanation'])}</p></div>`; })}</div>
              </article>` : html`<p class="rounded-lg bg-[var(--surface-bg,#ffffff)] p-5 text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty']}</p>`}
            </section>
          </div>
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
            <h2 class="text-lg font-semibold">${msg['section.generateAndPublishProjectStatusReport.reportPreparation.title']}</h2>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              <label class="text-sm">${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportTitle} @input=${this.handleCmdCreateStatusReportTitleChange}></label>
              <label class="text-sm">${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportGeneratedByUserId} @input=${this.handleCmdCreateStatusReportGeneratedByUserIdChange}></label>
              <label class="text-sm md:col-span-2">${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label']}<textarea class="mt-1 min-h-32 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdCreateStatusReportContentChange}>${this.cmdCreateStatusReportContent}</textarea></label>
              <label class="text-sm md:col-span-2">${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label']}<textarea class="mt-1 min-h-20 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdCreateStatusReportCommunicatedRisksChange}>${this.cmdCreateStatusReportCommunicatedRisks}</textarea></label>
            </div>
            <button type="button" class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${createLoading || !selectedId} @click=${this.handleCmdCreateStatusReportClick}>${createLoading ? msg['organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport']}</button>
            <div class="mt-3">${feedback(this.cmdCreateStatusReportState, 'action.cmdCreateStatusReport.success', 'action.cmdCreateStatusReport.error', this.cmdCreateStatusReportError)}</div>
          </section>
          ${reportId ? html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-lg font-semibold">${msg['section.generateAndPublishProjectStatusReport.publicationAndHandoff.title']}</h2><p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label']}: ${reportStatus}</p><div class="mt-4 flex flex-wrap gap-3"><button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${publishLoading} @click=${(): void => { this.setCmdPublishStatusReportStatus('published'); this.setCmdPublishStatusReportStatusReportStatusReportId(reportId); this.handleCmdPublishStatusReportClick(); }}>${publishLoading ? msg['organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport']}</button><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" ?disabled=${handoffLoading} @click=${(): void => { this.setCmdHandoffStatusReportToClientStatusReportStatusReportId(reportId); this.setCmdHandoffStatusReportToClientTitle(this.cmdCreateStatusReportTitle); this.setCmdHandoffStatusReportToClientContent(this.cmdCreateStatusReportContent); this.setCmdHandoffStatusReportToClientCommunicatedRisks(this.cmdCreateStatusReportCommunicatedRisks); this.handleCmdHandoffStatusReportToClientClick(); }}>${handoffLoading ? msg['organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient']}</button></div><div class="mt-3">${feedback(this.cmdPublishStatusReportState, 'action.cmdPublishStatusReport.success', 'action.cmdPublishStatusReport.error', this.cmdPublishStatusReportError)}${feedback(this.cmdHandoffStatusReportToClientState, 'action.cmdHandoffStatusReportToClient.success', 'action.cmdHandoffStatusReportToClient.error', this.cmdHandoffStatusReportToClientError)}</div></section>` : nothing}
        </section>
      </main>`;
  }
}
