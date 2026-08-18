/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/monitorDailyProjectRecords.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';
import { BuildFlowFsmMonitorDailyProjectRecordsBase } from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';

@customElement('build-flow-fsm--web--desktop--page31--monitor-daily-project-records-102046')
export class MonitorDailyProjectRecordsDesktopPage31MonitorDailyProjectRecordsPage extends BuildFlowFsmMonitorDailyProjectRecordsBase {
  render() {
    const msg = this.msg;
    type Entry = readonly [string, keyof MessageType];
    type RecordValue = Record<string, unknown>;

    const asRecord = (value: object | null | undefined): RecordValue => value as RecordValue;
    const asArray = (value: unknown): unknown[] => Array.isArray(value) ? value : [];
    const displayValue = (value: unknown): string => {
      if (value === null || value === undefined) return '';
      if (Array.isArray(value)) return value.join(', ');
      if (typeof value === 'object') return JSON.stringify(value);
      return String(value);
    };
    const collection = (value: object | null | undefined, names: string[]): unknown[] => {
      const record = asRecord(value);
      for (const name of names) {
        const found = record[name];
        if (Array.isArray(found)) return found;
      }
      return [];
    };
    const ids = (value: object | null | undefined, names: string[]): string[] =>
      collection(value, names).map((item: unknown): string => String(item));

    const projectRows: unknown[] = this.qryLocateProjectData ?? [];
    const overview = this.qryInspectProjectExecutionOverviewData;
    const overviewRecord = asRecord(overview);
    const timeLogIds = ids(overview, ['timeLogIds']);
    const materialUsageIds = ids(overview, ['materialUsageIds']);
    const timeLogRows = collection(this.qryInspectProjectTimeLogsData, ['timeLogs', 'items', 'records']);
    const materialRows = collection(this.qryInspectProjectMaterialUsagesData, ['materialUsages', 'items', 'records']);

    const projectFields: Entry[] = [
      ['name', 'intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label'],
      ['status', 'intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label'],
      ['plannedStartDate', 'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label'],
      ['plannedEndDate', 'intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label'],
      ['authorizedBudget', 'intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label'],
    ];
    const overviewFields: Entry[] = [
      ['projectName', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label'],
      ['projectStatus', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label'],
      ['taskSummary', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label'],
      ['upcomingCommitments', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label'],
      ['totalLoggedHours', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label'],
      ['materialUsageSummary', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label'],
      ['actualLaborCost', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label'],
      ['actualMaterialCost', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label'],
      ['actualCost', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label'],
      ['budgetAmount', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'],
      ['costVariance', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label'],
      ['changeOrderImpactSummary', 'intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label'],
    ];
    const timeLogFields: Entry[] = [
      ['status', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label'],
      ['workTaskId', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workTaskId.label'],
      ['fieldWorkerId', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.fieldWorkerId.label'],
      ['workDate', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label'],
      ['hoursWorked', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label'],
      ['hourlyLaborCost', 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label'],
    ];
    const materialFields: Entry[] = [
      ['status', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label'],
      ['projectId', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.projectId.label'],
      ['inventoryItemId', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryItemId.label'],
      ['inventoryBalanceId', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.inventoryBalanceId.label'],
      ['quantity', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label'],
      ['usageDescription', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label'],
      ['consumedOn', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label'],
      ['unitCostBasis', 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label'],
    ];

    const renderFields = (record: RecordValue, fields: Entry[]) => html`
      <dl class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        ${fields.map((entry: Entry) => {
          const field = entry[0];
          const labelKey = entry[1];
          const value = record[field];
          return value === undefined || value === null
            ? nothing
            : html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                <dt class="text-sm text-[var(--text-muted,#64748b)]">${msg[labelKey]}</dt>
                <dd class="mt-1 text-sm text-[var(--text-default,#0f172a)]">${displayValue(value)}</dd>
              </div>`;
        })}
      </dl>
    `;

    return html`
      <main class="space-y-6 bg-[var(--page-bg,#f8fafc)] p-4 text-[var(--text-default,#0f172a)] md:p-6">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_3px_rgba(0,0,0,0.1))]">
          <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.monitorDailyProjectRecords.project-selection.title']}</h2>
          ${this.qryLocateProjectState === 'loading'
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['organism.monitorDailyProjectRecords.qryLocateProject.title']}</p>`
            : html`
              <p class="mb-3 text-base font-medium">${msg['intent.monitorDailyProjectRecords.qryLocateProject.list.title']}</p>
              ${projectRows.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryLocateProject.list.empty']}</p>`
                : html`<div class="space-y-2">
                    ${projectRows.map((item: unknown) => {
                      const project = asRecord(item);
                      const projectId = String(project['projectId'] ?? '');
                      return html`<button type="button" class="block w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#eff6ff)]" .value=${projectId} @click=${() => {
                        if (projectId) this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(projectId);
                      }}>
                        ${renderFields(project, projectFields)}
                      </button>`;
                    })}
                  </div>`}
              <button type="button" class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId || this.qryInspectProjectExecutionOverviewState === 'loading'} @click=${this.handleQryInspectProjectExecutionOverviewClick}>${msg['organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title']}</button>
            `}
          ${this.qryLocateProjectState !== 'success' && projectRows.length === 0
            ? html`<button type="button" class="mt-4 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryLocateProjectClick}>${msg['organism.monitorDailyProjectRecords.qryLocateProject.title']}</button>`
            : nothing}
        </section>

        ${overview
          ? html`<section class="space-y-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_3px_rgba(0,0,0,0.1))]">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.monitorDailyProjectRecords.execution-monitoring.title']}</h2>
              <p class="text-base font-medium">${msg['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title']}</p>
              ${renderFields(overviewRecord, overviewFields)}
              <div class="grid gap-4 md:grid-cols-2">
                <section class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4">
                  <h3 class="mb-3 font-medium">${msg['organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title']}</h3>
                  <select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectProjectTimeLogsTimeLogTimeLogId} @change=${this.handleQryInspectProjectTimeLogsTimeLogTimeLogIdChange}>
                    <option value="">${msg['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title']}</option>
                    ${timeLogIds.map((id: string) => html`<option value=${id}>${id}</option>`)}
                  </select>
                  <button type="button" class="mt-3 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)]" ?disabled=${!this.qryInspectProjectTimeLogsTimeLogTimeLogId || this.qryInspectProjectTimeLogsState === 'loading'} @click=${this.handleQryInspectProjectTimeLogsClick}>${msg['organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title']}</button>
                  ${this.qryInspectProjectTimeLogsData ? renderFields(asRecord(this.qryInspectProjectTimeLogsData), timeLogFields) : nothing}
                  ${timeLogRows.map((item: unknown) => renderFields(asRecord(item), timeLogFields))}
                </section>
                <section class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4">
                  <h3 class="mb-3 font-medium">${msg['organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title']}</h3>
                  <select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId} @change=${this.handleQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageIdChange}>
                    <option value="">${msg['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title']}</option>
                    ${materialUsageIds.map((id: string) => html`<option value=${id}>${id}</option>`)}
                  </select>
                  <button type="button" class="mt-3 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)]" ?disabled=${!this.qryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId || this.qryInspectProjectMaterialUsagesState === 'loading'} @click=${this.handleQryInspectProjectMaterialUsagesClick}>${msg['organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title']}</button>
                  ${this.qryInspectProjectMaterialUsagesData ? renderFields(asRecord(this.qryInspectProjectMaterialUsagesData), materialFields) : nothing}
                  ${materialRows.map((item: unknown) => renderFields(asRecord(item), materialFields))}
                </section>
              </div>
            </section>`
          : nothing}
      </main>
    `;
  }
}
