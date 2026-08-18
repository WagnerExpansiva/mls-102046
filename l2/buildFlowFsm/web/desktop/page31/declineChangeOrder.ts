/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/declineChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDeclineChangeOrderBase } from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';

@customElement('build-flow-fsm--web--desktop--page31--decline-change-order--102046')
export class BuildFlowFsmDesktopPage31DeclineChangeOrderPage extends BuildFlowFsmDeclineChangeOrderBase {
  render() {
    const msg = this.msg;
    const orders = this.qryLocateChangeOrderData ?? [];
    const clients = this.qryClientPickerData ?? [];
    const queryLoading = this.qryLocateChangeOrderState === 'loading';
    const declineLoading = this.cmdDeclineChangeOrderDecisionState === 'loading';
    const handoffLoading = this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'loading';
    const selectedOrderId = this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId;

    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
        <section class="mx-auto max-w-7xl space-y-6" aria-labelledby="decline-queue-title">
          <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#e2e8f0)] pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p id="decline-queue-title" class="text-xl font-bold text-[var(--text-strong,#0f172a)]">
                ${msg['section.declineChangeOrder.decisionQueue.title']}
              </p>
              <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
                ${orders.length === 0 && !queryLoading
                  ? msg['intent.declineChangeOrder.qryLocateChangeOrder.list.empty']
                  : `${orders.length}`}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryClientPicker.list.title']}</span>
              <select
                class="rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdDeclineChangeOrderDecisionClientClientId}
                @change=${this.handleCmdDeclineChangeOrderDecisionClientClientIdChange}
                aria-label=${msg['intent.declineChangeOrder.qryClientPicker.list.column.clientName.label']}
              >
                <option value="">${msg['intent.declineChangeOrder.qryClientPicker.list.empty']}</option>
                ${clients.map((client) => html`
                  <option value=${client.clientId}>${client.clientName}</option>
                `)}
              </select>
            </div>
          </div>

          ${queryLoading ? html`
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-sm text-[var(--text-muted,#64748b)]" role="status">
              ${msg['organism.declineChangeOrder.qryLocateChangeOrder.title']}
            </div>
          ` : orders.length === 0 ? nothing : html`
            <div class="grid gap-4 lg:grid-cols-2">
              ${orders.map((order) => html`
                <article class="rounded-lg border ${selectedOrderId === order.changeOrderId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)]'} p-5 shadow-[var(--shadow-small,0 1px 2px rgba(0,0,0,.08))]">
                  <div class="flex items-start justify-between gap-4">
                    <a class="font-semibold text-[var(--link-text,#2563eb)] underline" href=${`/change-orders/${order.changeOrderId}`}>
                      ${order.changeOrderId}
                    </a>
                    <span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2.5 py-1 text-xs text-[var(--status-neutral-text,#475569)]">${order.status}</span>
                  </div>
                  <dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label']}</dt><dd>${order.clientRef}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label']}</dt><dd>${order.projectRef}</dd></div>
                    <div class="col-span-2"><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label']}</dt><dd>${order.description}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label']}</dt><dd>${order.scopeImpact}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label']}</dt><dd>${order.scheduleImpact}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label']}</dt><dd>${order.changeAmount}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label']}</dt><dd>${order.submittedAt}</dd></div>
                    <div class="col-span-2"><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label']}</dt><dd>${order.forwardedForClientApprovalAt}</dd></div>
                  </dl>
                  <div class="mt-5 border-t border-[var(--border-subtle,#e2e8f0)] pt-4">
                    <button
                      class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-sm font-semibold text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
                      ?disabled=${declineLoading}
                      @click=${(event: Event) => {
                        this.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(order.changeOrderId);
                        this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId(order.changeOrderId);
                        this.setCmdDeclineChangeOrderDecisionStatus(order.status);
                        this.handleCmdDeclineChangeOrderDecisionClick(event);
                      }}
                    >${declineLoading && selectedOrderId === order.changeOrderId ? msg['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title'] : msg['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision']}</button>
                    ${this.cmdDeclineChangeOrderDecisionState === 'error' && selectedOrderId === order.changeOrderId ? html`<p class="mt-2 text-sm text-[var(--status-error-text,#b91c1c)]" role="alert">${this.cmdDeclineChangeOrderDecisionError || msg['action.cmdDeclineChangeOrderDecision.error']}</p>` : nothing}
                    ${this.cmdDeclineChangeOrderDecisionState === 'success' && selectedOrderId === order.changeOrderId ? html`<p class="mt-2 text-sm text-[var(--status-success-text,#166534)]" role="status">${msg['action.cmdDeclineChangeOrderDecision.success']}</p>` : nothing}
                  </div>
                </article>
              `)}
            </div>
          `}

          <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5" aria-labelledby="handoff-title">
            <h2 id="handoff-title" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.declineChangeOrder.handoffOutcome.title']}</h2>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              <label class="text-sm">${msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label']}<textarea class="mt-1 min-h-24 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange}></textarea></label>
              <label class="text-sm">${msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange} /></label>
              <label class="text-sm">${msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange} /></label>
              <label class="text-sm">${msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange} /></label>
            </div>
            <button class="mt-5 rounded-md bg-[var(--button-primary-bg,#1d4ed8)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${handoffLoading || !selectedOrderId} @click=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick}>
              ${handoffLoading ? msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title'] : msg['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator']}
            </button>
            ${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'error' ? html`<p class="mt-2 text-sm text-[var(--status-error-text,#b91c1c)]" role="alert">${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError || msg['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error']}</p>` : nothing}
            ${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'success' ? html`<p class="mt-2 text-sm text-[var(--status-success-text,#166534)]" role="status">${msg['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success']}</p>` : nothing}
          </section>
        </section>
      </main>
    `;
  }
}
