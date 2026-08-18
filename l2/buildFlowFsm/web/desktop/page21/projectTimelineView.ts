/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectTimelineView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmProjectTimelineViewBase,
  messages,
  type MessageType,
} from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';

const collab_i18n_pt: MessageType = messages['pt'];
type CollabI18n = { pt: MessageType };
const collab_i18n: CollabI18n = { pt: collab_i18n_pt };

@customElement('build-flow-fsm--web--desktop--page21--project-timeline-view-build-flow-fsm')
export class BuildFlowFsmDesktopPage21ProjectTimelineViewPage extends BuildFlowFsmProjectTimelineViewBase {
  get msg(): MessageType {
    return collab_i18n.pt;
  }

  render() {
    const msg = this.msg;
    const data = this.qryProjectTimelineViewData;
    const isLoading = this.qryProjectTimelineViewState === 'loading';
    const isError = this.qryProjectTimelineViewState === 'error';
    const output = data as unknown as Record<string, unknown> | null;
    const projectId = typeof output?.['projectId'] === 'string' ? output['projectId'] : this.qryProjectTimelineViewProjectTimelineProjectId;
    const workTasks = Array.isArray(output?.['workTasks']) ? output['workTasks'] : [];
    const scheduleEntries = Array.isArray(output?.['scheduleEntries']) ? output['scheduleEntries'] : [];
    const recordValue = (record: unknown, keys: string[]): unknown => {
      if (record === null || typeof record !== 'object') return undefined;
      const item = record as Record<string, unknown>;
      for (const key of keys) {
        if (item[key] !== undefined && item[key] !== null && item[key] !== '') return item[key];
      }
      return undefined;
    };
    const textValue = (value: unknown): string => {
      if (typeof value === 'string' || typeof value === 'number') return String(value);
      if (value instanceof Date) return value.toLocaleDateString();
      return value === undefined || value === null ? '' : String(value);
    };
    const sortByDate = (items: unknown[]): unknown[] => items.slice().sort((left: unknown, right: unknown) => {
      const leftDate = textValue(recordValue(left, ['dueDate', 'startDate', 'scheduledDate', 'date']));
      const rightDate = textValue(recordValue(right, ['dueDate', 'startDate', 'scheduledDate', 'date']));
      return (leftDate || '9999').localeCompare(rightDate || '9999');
    });
    const orderedTasks = sortByDate(workTasks);
    const orderedSchedule = sortByDate(scheduleEntries);

    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
        <section class="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.projectTimelineView.overview.title']}</h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label']}: ${projectId || nothing}
            </p>
          </div>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${isLoading || !projectId}
            @click=${(event: Event) => this.handleQryProjectTimelineViewClick(event)}
          >
            ${isLoading ? msg['organism.projectTimelineView.qryProjectTimelineView.title'] : msg['organism.projectTimelineView.qryProjectTimelineView.title']}
          </button>
        </section>

        ${isLoading ? html`
          <div class="grid gap-4 md:grid-cols-2" aria-busy="true">
            <div class="h-32 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-32 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          </div>
        ` : isError ? html`
          <p class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-4 text-[var(--status-error-text,#991b1b)]" role="alert">
            ${msg['intent.projectTimelineView.qryProjectTimelineView.list.empty']}
          </p>
        ` : data === null ? html`
          <p class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-[var(--text-muted,#64748b)]">
            ${msg['intent.projectTimelineView.qryProjectTimelineView.list.empty']}
          </p>
        ` : nothing}

        ${!isLoading && !isError && data !== null ? html`
          <div class="grid gap-6 lg:grid-cols-2">
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
              <h2 class="mb-4 text-lg font-semibold">${msg['intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label']}</h2>
              ${orderedTasks.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectTimelineView.qryProjectTimelineView.list.empty']}</p>` : html`
                <ol class="space-y-3">
                  ${orderedTasks.map((task: unknown) => {
                    const name = textValue(recordValue(task, ['name', 'title', 'taskName', 'description']));
                    const date = textValue(recordValue(task, ['dueDate', 'startDate', 'scheduledDate', 'date']));
                    const status = textValue(recordValue(task, ['status', 'state', 'progress']));
                    return html`<li class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3">
                      <div class="flex items-start justify-between gap-4">
                        <span class="font-medium">${name}</span>
                        <span class="text-right text-sm tabular-nums text-[var(--text-muted,#64748b)]">${date}</span>
                      </div>
                      ${status ? html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${status}</p>` : nothing}
                    </li>`;
                  })}
                </ol>
              `}
            </section>
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
              <h2 class="mb-4 text-lg font-semibold">${msg['intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label']}</h2>
              ${orderedSchedule.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectTimelineView.qryProjectTimelineView.list.empty']}</p>` : html`
                <ul class="space-y-3">
                  ${orderedSchedule.map((entry: unknown) => {
                    const name = textValue(recordValue(entry, ['name', 'title', 'entryName', 'description']));
                    const date = textValue(recordValue(entry, ['dueDate', 'startDate', 'scheduledDate', 'date']));
                    const status = textValue(recordValue(entry, ['status', 'state', 'progress']));
                    return html`<li class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3">
                      <div class="flex items-start justify-between gap-4">
                        <span class="font-medium">${name}</span>
                        <span class="text-right text-sm tabular-nums text-[var(--text-muted,#64748b)]">${date}</span>
                      </div>
                      ${status ? html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${status}</p>` : nothing}
                    </li>`;
                  })}
                </ul>
              `}
            </section>
          </div>
        ` : nothing}
      </main>
    `;
  }
}
