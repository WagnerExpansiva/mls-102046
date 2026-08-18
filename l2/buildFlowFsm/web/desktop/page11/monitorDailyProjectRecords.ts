/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/monitorDailyProjectRecords.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmMonitorDailyProjectRecordsBase,
  messages,
} from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';
import type { MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';

const collab_i18n_pt = messages['pt'];
const collab_i18n_en = messages['en'];
type CollabI18n = MessageType;
const collab_i18n: { pt: CollabI18n; en: CollabI18n } = {
  pt: collab_i18n_pt,
  en: collab_i18n_en,
};

function displayValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  try {
    return JSON.stringify(value);
  } catch (_error: unknown) {
    return '';
  }
}

@customElement('build-flow-fsm--web--desktop--page11--monitor-daily-project-records-102046')
export class BuildFlowFsmDesktopPage11MonitorDailyProjectRecordsPage extends BuildFlowFsmMonitorDailyProjectRecordsBase {
  get msg(): CollabI18n {
    return collab_i18n.pt;
  }

  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderProjectSelection()}
          ${this.renderExecutionMonitoring()}
          ${this.renderDailyRecords()}
        </div>
      </main>
    `;
  }

  renderProjectSelection(): TemplateResult {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
        <h1 class="text-[var(--font-size-24,1.5rem)] font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.monitorDailyProjectRecords.project-selection.title']}
        </h1>
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-[var(--font-size-20,1.25rem)] font-semibold">
            ${msg['organism.monitorDailyProjectRecords.qryLocateProject.title']}
          </h2>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]"
            @click=${(event: Event) => this.handleQryLocateProjectClick(event)}
            ?disabled=${this.qryLocateProjectState === 'loading'}
          >
            ${msg['intent.monitorDailyProjectRecords.qryLocateProject.list.title']}
          </button>
        </div>
        ${this.qryLocateProjectState === 'loading'
          ? html`<div class="h-16 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]" aria-busy="true"></div>`
          : this.renderTable(
              this.qryLocateProjectData,
              [
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.clientId.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label'],
                msg['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label'],
              ],
              msg['intent.monitorDailyProjectRecords.qryLocateProject.list.empty'],
            )}
      </section>
    `;
  }

  renderExecutionMonitoring(): TemplateResult {
    const msg = this.msg;
    const data = this.qryInspectProjectExecutionOverviewData;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
        <h2 class="text-[var(--font-size-20,1.25rem)] font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.monitorDailyProjectRecords.execution-monitoring.title']}
        </h2>
        <div class="flex items-center justify-between gap-4">
          <h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title']}</h3>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${(event: Event) => this.handleQryInspectProjectExecutionOverviewClick(event)}
            ?disabled=${this.qryInspectProjectExecutionOverviewState === 'loading'}
          >
            ${msg['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title']}
          </button>
        </div>
        ${this.qryInspectProjectExecutionOverviewState === 'loading'
          ? html`<div class="h-24 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]" aria-busy="true"></div>`
          : data === null
            ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.empty']}</p>`
            : html`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${Object.values(data).map((value: unknown) => html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 break-words">${displayValue(value)}</div>`)}</div>`}
      </section>
    `;
  }

  renderDailyRecords(): TemplateResult {
    const msg = this.msg;
    const timeLogs = this.qryInspectProjectTimeLogsData;
    const materials = this.qryInspectProjectMaterialUsagesData;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-6">
        <h2 class="text-[var(--font-size-20,1.25rem)] font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.monitorDailyProjectRecords.daily-records-inspection.title']}
        </h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title']}</h3>
            <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryInspectProjectTimeLogsClick(event)} ?disabled=${this.qryInspectProjectTimeLogsState === 'loading'}>${msg['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title']}</button>
          </div>
          ${timeLogs === null
            ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty']}</p>`
            : this.renderObjectValues(timeLogs)}
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title']}</h3>
            <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryInspectProjectMaterialUsagesClick(event)} ?disabled=${this.qryInspectProjectMaterialUsagesState === 'loading'}>${msg['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title']}</button>
          </div>
          ${materials === null
            ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty']}</p>`
            : this.renderObjectValues(materials)}
        </div>
      </section>
    `;
  }

  renderObjectValues(value: object): TemplateResult {
    return html`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${Object.values(value).map((item: unknown) => html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 break-words">${displayValue(item)}</div>`)}</div>`;
  }

  renderTable(rows: unknown[], headers: string[], empty: string): TemplateResult {
    if (rows.length === 0) {
      return html`<p class="text-[var(--text-muted,#64748b)]">${empty}</p>`;
    }
    return html`<div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead><tr>${headers.map((header: string) => html`<th class="border-b border-[var(--border-subtle,#e2e8f0)] px-3 py-2 font-semibold">${header}</th>`)}</tr></thead><tbody>${rows.map((row: unknown) => html`<tr>${Object.values(row as object).slice(0, headers.length).map((value: unknown) => html`<td class="border-b border-[var(--border-subtle,#e2e8f0)] px-3 py-2">${displayValue(value)}</td>`)}</tr>`)}</tbody></table></div>`;
  }
}
