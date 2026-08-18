/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/generateAndPublishProjectStatusReport.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmGenerateAndPublishProjectStatusReportBase,
  messages,
  type MessageType,
} from '/_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.js';

const collab_i18n_pt = messages['pt'];
const collab_i18n_en = messages['en'];
type CollabI18n = MessageType;
const collab_i18n: Record<string, CollabI18n> = {
  pt: collab_i18n_pt,
  en: collab_i18n_en,
};

@customElement('build-flow-fsm--web--desktop--page21--generate-and-publish-project-status-report-102046')
export class BuildFlowFsmDesktopPage21GenerateAndPublishProjectStatusReportPage extends BuildFlowFsmGenerateAndPublishProjectStatusReportBase {
  protected get msg(): MessageType {
    return collab_i18n['pt'];
  }

  render() {
    const msg = this.msg;
    const text = (value: unknown): string => value === null || value === undefined ? '' : String(value);
    const field = (value: unknown, name: string): unknown => {
      if (typeof value !== 'object' || value === null) return undefined;
      return (value as Record<string, unknown>)[name];
    };
    const projects = this.qryLocateProjectData;
    const selectedProjectId = this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId;
    const selectedProject = projects.find((project) => text(field(project, 'projectId')) === selectedProjectId);
    const overview = this.qryInspectProjectExecutionOverviewData;
    const risks = this.qryInspectScheduleRiskAssessmentData;
    const riskRows = Array.isArray(field(risks, 'riskAssessments'))
      ? field(risks, 'riskAssessments') as unknown[]
      : Array.isArray(field(risks, 'items'))
        ? field(risks, 'items') as unknown[]
        : [];
    const report = this.cmdCreateStatusReportOutput;
    const reportId = text(field(report, 'statusReportId')) || text(field(field(report, 'statusReport'), 'statusReportId'));
    const reportStatus = text(field(report, 'status')) || text(field(field(report, 'statusReport'), 'status'));
    const hasReport = report !== null;
    const canPublish = hasReport && (reportStatus === '' || reportStatus.toLowerCase() !== 'published');
    const canHandoff = reportStatus.toLowerCase() === 'published';

    return html`
      <main class="min-h-screen bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
          <h2 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.generateAndPublishProjectStatusReport.projectContext.title']}</h2>
          ${this.qryLocateProjectState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title']}</p>` : nothing}
          ${this.qryLocateProjectState !== 'loading' && projects.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty']}</p>` : nothing}
          <div class="mt-4 grid gap-3 md:grid-cols-2">
            ${projects.map((project) => {
              const id = text(field(project, 'projectId'));
              const selected = id === selectedProjectId;
              return html`
                <button type="button" class="rounded-lg border p-4 text-left ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]'}" @click=${() => {
                  this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(id);
                  this.setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId(id);
                  this.setCmdCreateStatusReportProjectExecutionOverviewProjectId(id);
                  this.setCmdPublishStatusReportProjectExecutionOverviewProjectId(id);
                  void this.loadQryInspectProjectExecutionOverview();
                  void this.loadQryInspectScheduleRiskAssessment();
                }}>
                  <span class="block font-semibold">${text(field(project, 'name'))}</span>
                  <span class="mt-1 block text-sm text-[var(--text-muted,#64748b)]">${text(field(project, 'status'))}</span>
                  <span class="mt-2 block text-sm">${msg['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label']}: ${text(field(project, 'address'))}</span>
                </button>`;
            })}
          </div>
        </section>

        ${selectedProject ? html`
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
            <h2 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.generateAndPublishProjectStatusReport.projectAssessment.title']}</h2>
            <p class="mt-2 text-lg font-semibold">${text(field(selectedProject, 'name'))} · ${text(field(selectedProject, 'status'))}</p>
            ${this.qryInspectProjectExecutionOverviewState === 'loading' || this.qryInspectScheduleRiskAssessmentState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title']}</p>` : nothing}
            <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              ${[
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label', 'taskSummary'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label', 'upcomingCommitments'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label', 'totalLoggedHours'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label', 'actualCost'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label', 'budgetAmount'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label', 'costVariance'],
                ['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label', 'changeOrderImpactSummary'],
              ].map(([key, name]) => html`<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg[key as keyof MessageType]}</dt><dd class="mt-2 font-semibold">${text(field(overview, name))}</dd></div>`)}
            </div>
            <h3 class="mt-6 font-semibold">${msg['organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title']}</h3>
            <div class="mt-3 space-y-2">
              ${riskRows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty']}</p>` : nothing}
              ${riskRows.map((risk) => html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-3"><div class="flex flex-wrap gap-4 font-medium"><span>${msg['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label']}: ${text(field(risk, 'workTaskId'))}</span><span>${msg['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label']}: ${text(field(risk, 'dueDate'))}</span><span>${msg['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label']}: ${text(field(risk, 'progressPercent'))}</span></div><p class="mt-2 text-sm">${text(field(risk, 'riskExplanation'))}</p></article>`)}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
            <h2 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.generateAndPublishProjectStatusReport.reportPreparation.title']}</h2>
            <div class="mt-4 grid gap-4">
              <label class="grid gap-2"><span>${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label']}</span><input class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportTitle} @input=${this.handleCmdCreateStatusReportTitleChange}></label>
              <label class="grid gap-2"><span>${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label']}</span><textarea class="min-h-32 rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportContent} @input=${this.handleCmdCreateStatusReportContentChange}></textarea></label>
              <label class="grid gap-2"><span>${msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label']}</span><textarea class="min-h-20 rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportCommunicatedRisks} @input=${this.handleCmdCreateStatusReportCommunicatedRisksChange}></textarea></label>
            </div>
            <button type="button" class="mt-4 rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateStatusReportState === 'loading' || !selectedProjectId || !this.cmdCreateStatusReportTitle || !this.cmdCreateStatusReportContent} @click=${this.handleCmdCreateStatusReportClick}>${this.cmdCreateStatusReportState === 'loading' ? msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport']}</button>
            ${this.cmdCreateStatusReportState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateStatusReport.success']}</p>` : nothing}
            ${this.cmdCreateStatusReportState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateStatusReportError || msg['action.cmdCreateStatusReport.error']}</p>` : nothing}
          </section>

          ${hasReport ? html`
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
              <h2 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.generateAndPublishProjectStatusReport.publicationAndHandoff.title']}</h2>
              <p class="mt-3">${text(field(report, 'title'))} · ${reportStatus}</p>
              <p class="mt-2 whitespace-pre-wrap">${text(field(report, 'content'))}</p>
              <div class="mt-5 flex flex-wrap gap-3">
                <button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!canPublish || this.cmdPublishStatusReportState === 'loading'} @click=${() => { this.setCmdPublishStatusReportStatusReportStatusReportId(reportId); this.setCmdPublishStatusReportStatus('published'); this.handleCmdPublishStatusReportClick(); }}>${this.cmdPublishStatusReportState === 'loading' ? msg['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport']}</button>
                <button type="button" class="rounded bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50" ?disabled=${!canHandoff || this.cmdHandoffStatusReportToClientState === 'loading'} @click=${() => { if (window.confirm(text(field(report, 'title')))) { this.setCmdHandoffStatusReportToClientStatusReportStatusReportId(reportId); this.handleCmdHandoffStatusReportToClientClick(); } }}>${this.cmdHandoffStatusReportToClientState === 'loading' ? msg['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title'] : msg['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient']}</button>
              </div>
              ${this.cmdPublishStatusReportState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdPublishStatusReportError || msg['action.cmdPublishStatusReport.error']}</p>` : nothing}
              ${this.cmdHandoffStatusReportToClientState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffStatusReportToClientError || msg['action.cmdHandoffStatusReportToClient.error']}</p>` : nothing}
              ${this.cmdHandoffStatusReportToClientState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdHandoffStatusReportToClient.success']}</p>` : nothing}
            </section>` : nothing}
        ` : nothing}
      </main>`;
  }
}
