/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/declineChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmDeclineChangeOrderBase,
  messages,
  type MessageType,
} from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';

const collab_i18n_pt: MessageType = messages['pt'];
const collab_i18n_en: MessageType = messages['en'];
const collab_i18n_messages = { pt: collab_i18n_pt, en: collab_i18n_en };
type CollabI18nLocale = keyof typeof collab_i18n_messages;

function valueOf(item: object, key: string): string {
  const record: Record<string, unknown> = item as Record<string, unknown>;
  const value = record[key];
  return value === null || value === undefined ? '' : String(value);
}

@customElement('build-flow-fsm--web--desktop--page11--decline-change-order-102046')
export class BuildFlowFsmDesktopPage11DeclineChangeOrderPage extends BuildFlowFsmDeclineChangeOrderBase {
  get msg(): MessageType {
    const locale: CollabI18nLocale = 'pt';
    return collab_i18n_messages[locale];
  }

  render() {
    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderQueue()}
          ${this.renderDecision()}
          ${this.renderHandoff()}
        </div>
      </main>
    `;
  }

  renderQueue() {
    const msg = this.msg;
    const rows = this.qryLocateChangeOrderData ?? [];
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <div class="mb-4 flex items-center justify-between gap-4">
          <div>
            <h1 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.declineChangeOrder.locateChangeOrder.title']}</h1>
            <h2 class="mt-1 text-base font-medium">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.title']}</h2>
          </div>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]"
            @click=${this.handleQryLocateChangeOrderClick}
            ?disabled=${this.qryLocateChangeOrderState === 'loading'}
          >${this.qryLocateChangeOrderState === 'loading' ? '…' : msg['intent.declineChangeOrder.qryLocateChangeOrder.list.title']}</button>
        </div>
        ${this.qryLocateChangeOrderState === 'loading'
          ? html`<div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.title']}…</div>`
          : rows.length === 0
            ? html`<p class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.empty']}</p>`
            : html`
              <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                  <thead class="border-b border-[var(--border-subtle,#e2e8f0)]">
                    <tr>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label']}</th>
                      <th class="px-3 py-2">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label']}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map((row) => html`
                      <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                        ${['changeOrderId', 'clientRef', 'projectRef', 'description', 'scopeImpact', 'scheduleImpact', 'changeAmount', 'submittedAt', 'forwardedForClientApprovalAt', 'status'].map((key) => html`<td class="px-3 py-2">${valueOf(row, key)}</td>`)}
                      </tr>
                    `)}
                  </tbody>
                </table>
              </div>
            `}
      </section>
    `;
  }

  renderDecision() {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold">${msg['section.declineChangeOrder.declineChangeOrderDecision.title']}</h2>
        <form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdDeclineChangeOrderDecisionClick(event); }}>
          <h3 class="text-base font-medium">${msg['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title']}</h3>
          <label class="block text-sm">
            <span class="mb-1 block">${msg['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label']}</span>
            <input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdDeclineChangeOrderDecisionStatus} @input=${this.handleCmdDeclineChangeOrderDecisionStatusChange} required />
          </label>
          <button type="submit" class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-[var(--button-danger-text,#ffffff)]" ?disabled=${this.cmdDeclineChangeOrderDecisionState === 'loading'}>
            ${this.cmdDeclineChangeOrderDecisionState === 'loading' ? '…' : msg['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision']}
          </button>
          ${this.cmdDeclineChangeOrderDecisionState === 'success' ? html`<p role="status" class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdDeclineChangeOrderDecision.success']}</p>` : nothing}
          ${this.cmdDeclineChangeOrderDecisionState === 'error' ? html`<p role="alert" class="mt-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdDeclineChangeOrderDecisionError || msg['action.cmdDeclineChangeOrderDecision.error']}</p>` : nothing}
        </form>
      </section>
    `;
  }

  renderHandoff() {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold">${msg['section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title']}</h2>
        <form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick(event); }}>
          <h3 class="text-base font-medium">${msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title']}</h3>
          ${this.renderTextField('description', msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label'], this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription, this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange)}
          ${this.renderTextField('scopeImpact', msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label'], this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact, this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange)}
          ${this.renderTextField('scheduleImpact', msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label'], this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact, this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange)}
          ${this.renderTextField('changeAmount', msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label'], this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount, this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange)}
          <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'loading'}>
            ${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'loading' ? '…' : msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator']}
          </button>
          ${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'success' ? html`<p role="status" class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success']}</p>` : nothing}
          ${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'error' ? html`<p role="alert" class="mt-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError || msg['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error']}</p>` : nothing}
        </form>
      </section>
    `;
  }

  renderTextField(name: string, label: string, value: string, handler: (event: Event) => void) {
    return html`
      <label class="block text-sm" for=${name}>
        <span class="mb-1 block">${label}</span>
        <input id=${name} class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} @input=${handler} required />
      </label>
    `;
  }
}
