/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectHub.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectHubBase, messages } from '/_102046_/l2/buildFlowFsm/web/shared/projectHub.js';

@customElement('build-flow-fsm--web--desktop--page31--project-hub')
export class BuildFlowFsmDesktopPage31ProjectHubPage extends BuildFlowFsmProjectHubBase {
  render() {
    const msg = messages['pt'];
    const record = (value: unknown): Record<string, unknown> =>
      value !== null && typeof value === 'object' ? value as Record<string, unknown> : {};
    const text = (value: unknown): string => value === null || value === undefined || value === '' ? '—' : String(value);
    const projects = this.qryListProjectData as unknown as Array<Record<string, unknown>>;
    const dashboard = record(this.qryProjectDashboardViewData);
    const execution = record(this.qryProjectExecutionOverviewViewData);
    const timeline = record(this.qryProjectTimelineViewData);
    const risks = record(this.qryScheduleRiskAssessmentViewData);
    const billing = record(this.qryClientBillingSummaryViewData);
    const selectedProjectId = this.qryProjectExecutionOverviewViewProjectExecutionOverviewProjectId;
    const selectedProject = projects.find((project: Record<string, unknown>) =>
      String(project['projectId'] ?? '') === selectedProjectId
    );
    const statDefinitions: Array<[string, unknown]> = [
      [msg['intent.projectHub.qryProjectDashboardView.list.column.activeProjectCount.label'], dashboard['activeProjectCount']],
      [msg['intent.projectHub.qryProjectDashboardView.list.column.totalBudget.label'], dashboard['totalBudget']],
      [msg['intent.projectHub.qryProjectDashboardView.list.column.totalActualCost.label'], dashboard['totalActualCost']],
      [msg['intent.projectHub.qryProjectDashboardView.list.column.budgetVariance.label'], dashboard['budgetVariance']],
      [msg['intent.projectHub.qryProjectDashboardView.list.column.costAttentionProjects.label'], dashboard['costAttentionProjects']],
      [msg['intent.projectHub.qryProjectDashboardView.list.column.upcomingTasks.label'], dashboard['upcomingTasks']]
    ];
    const chooseProject = (project: Record<string, unknown>): void => {
      const projectId = text(project['projectId']);
      const clientId = text(project['clientId']);
      if (projectId !== '—') {
        this.setQryProjectExecutionOverviewViewProjectExecutionOverviewProjectId(projectId);
        this.setQryProjectTimelineViewProjectTimelineProjectId(projectId);
        this.setQryScheduleRiskAssessmentViewScheduleRiskAssessmentProjectId(projectId);
        void this.loadQryProjectExecutionOverviewView();
        void this.loadQryProjectTimelineView();
        void this.loadQryScheduleRiskAssessmentView();
      }
      if (clientId !== '—') {
        this.setQryClientBillingSummaryViewClientBillingSummaryClientId(clientId);
        void this.loadQryClientBillingSummaryView();
      }
    };
    const renderProjectRow = (project: Record<string, unknown>) => html`
      <button type="button" class="w-full rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 text-left shadow-sm hover:bg-[var(--selected-bg,#f1f5f9)] ${String(project['projectId'] ?? '') === selectedProjectId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#f1f5f9)]' : ''}"
        @click=${(): void => chooseProject(project)}>
        <div class="flex items-start justify-between gap-4">
          <span class="font-semibold text-[var(--text-strong,#0f172a)]">${text(project['name'])}</span>
          <span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-1 text-xs text-[var(--status-neutral-text,#475569)]">${text(project['status'])}</span>
        </div>
        <div class="mt-3 grid grid-cols-2 gap-3 text-sm text-[var(--text-muted,#64748b)]">
          <span>${msg['intent.projectHub.qryListProject.list.column.authorizedBudget.label']}: ${text(project['authorizedBudget'])}</span>
          <span>${msg['intent.projectHub.qryListProject.list.column.plannedStartDate.label']}: ${text(project['plannedStartDate'])}</span>
          <span>${msg['intent.projectHub.qryListProject.list.column.plannedEndDate.label']}: ${text(project['plannedEndDate'])}</span>
          <span>${msg['intent.projectHub.qryListProject.list.column.address.label']}: ${text(project['address'])}</span>
        </div>
      </button>`;
    const renderFields = (value: Record<string, unknown>, labels: Record<string, string>) => html`
      <div class="grid gap-3 sm:grid-cols-2">
        ${Object.entries(labels).map(([field, label]: [string, string]) => html`
          <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <div class="text-xs text-[var(--text-muted,#64748b)]">${label}</div>
            <div class="mt-1 font-medium tabular-nums text-[var(--text-default,#0f172a)]">${text(value[field])}</div>
          </div>`)}
      </div>`;
    const section = (title: string, body: unknown) => html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${title}</h2>
        ${body}
      </section>`;

    return html`
      <main class="min-h-full bg-[var(--page-bg,#f8fafc)] p-6 text-[var(--text-default,#0f172a)]">
        <div class="mx-auto max-w-7xl space-y-6">
          <section class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" aria-label=${msg['organism.projectHub.qryProjectDashboardView.title']}>
            ${this.qryProjectDashboardViewState === 'loading'
              ? Array.from({ length: 6 }, () => html`<div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div>`)
              : statDefinitions.map(([label, value]: [string, unknown]) => html`
                <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
                  <div class="text-right text-2xl font-bold tabular-nums text-[var(--text-strong,#0f172a)]">${this.qryProjectDashboardViewState === 'error' ? '—' : text(value)}</div>
                  <div class="mt-2 text-xs text-[var(--text-muted,#64748b)]">${label}</div>
                </div>`)}
          </section>

          ${section(msg['section.projectHub.collection.title'], html`
            ${this.qryListProjectState === 'loading'
              ? html`<div class="space-y-3"><div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div><div class="h-20 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div></div>`
              : projects.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectHub.qryListProject.list.empty']}</p>`
                : html`<div class="grid gap-3 md:grid-cols-2">${projects.slice(0, 6).map((project: Record<string, unknown>) => renderProjectRow(project))}</div>`}`)}

          ${selectedProject ? section(msg['section.projectHub.selected-project.title'], html`
            <div class="mb-5 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4">
              <h3 class="font-semibold">${text(selectedProject['name'])}</h3>
              <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectHub.qryListProject.list.column.status.label']}: ${text(selectedProject['status'])}</p>
            </div>
            <div class="grid gap-5 lg:grid-cols-2">
              ${section(msg['organism.projectHub.qryProjectExecutionOverviewView.title'], this.qryProjectExecutionOverviewViewState === 'loading' ? html`<div class="h-28 animate-pulse rounded-md bg-[var(--surface-alt-bg,#e2e8f0)]"></div>` : renderFields(execution, {
                projectStatus: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.projectStatus.label'], taskSummary: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.taskSummary.label'], upcomingCommitments: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.upcomingCommitments.label'], totalLoggedHours: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.totalLoggedHours.label'], actualCost: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.actualCost.label'], budgetAmount: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.budgetAmount.label'], costVariance: msg['intent.projectHub.qryProjectExecutionOverviewView.list.column.costVariance.label']
              }))}
              ${section(msg['organism.projectHub.qryProjectTimelineView.title'], this.qryProjectTimelineViewState === 'loading' ? html`<div class="h-28 animate-pulse rounded-md bg-[var(--surface-alt-bg,#e2e8f0)]"></div>` : renderFields(timeline, { workTasks: msg['intent.projectHub.qryProjectTimelineView.list.column.workTasks.label'], scheduleEntries: msg['intent.projectHub.qryProjectTimelineView.list.column.scheduleEntries.label'] }))}
              ${section(msg['organism.projectHub.qryScheduleRiskAssessmentView.title'], this.qryScheduleRiskAssessmentViewState === 'loading' ? html`<div class="h-28 animate-pulse rounded-md bg-[var(--surface-alt-bg,#e2e8f0)]"></div>` : renderFields(risks, { workTaskId: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.workTaskId.label'], taskStatus: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.taskStatus.label'], dueDate: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.dueDate.label'], progressPercent: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.progressPercent.label'], riskIndicators: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskIndicators.label'], riskExplanation: msg['intent.projectHub.qryScheduleRiskAssessmentView.list.column.riskExplanation.label'] }))}
              ${section(msg['organism.projectHub.qryClientBillingSummaryView.title'], this.qryClientBillingSummaryViewState === 'loading' ? html`<div class="h-28 animate-pulse rounded-md bg-[var(--surface-alt-bg,#e2e8f0)]"></div>` : renderFields(billing, { approvedChangeOrderAmount: msg['intent.projectHub.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label'], billableAmount: msg['intent.projectHub.qryClientBillingSummaryView.list.column.billableAmount.label'], invoicedAmount: msg['intent.projectHub.qryClientBillingSummaryView.list.column.invoicedAmount.label'], clientAvailableAmount: msg['intent.projectHub.qryClientBillingSummaryView.list.column.clientAvailableAmount.label'] }))}
            </div>`)
          : nothing}
        </div>
      </main>`;
  }
}
