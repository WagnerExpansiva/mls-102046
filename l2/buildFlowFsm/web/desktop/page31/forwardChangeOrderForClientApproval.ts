/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/forwardChangeOrderForClientApproval.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmForwardChangeOrderForClientApprovalBase,
  messages,
} from '/_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.js';

@customElement('build-flow-fsm--web--desktop--page31--forward-change-order-for-client-approval-102046')
export class BuildFlowFsmDesktopPage31ForwardChangeOrderForClientApprovalPage extends BuildFlowFsmForwardChangeOrderForClientApprovalBase {
  render() {
    const msg = messages['pt'];
    const rows = this.qryLocateChangeOrderData ?? [];
    const read = (item: unknown, key: string): string => {
      const record = item as Record<string, unknown>;
      const value = record[key];
      return value === null || value === undefined ? '' : String(value);
    };
    const selectedId = this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId;
    const selected = rows.find((item: unknown) => read(item, 'changeOrderId') === selectedId);
    const selectedStatus = selected === undefined ? '' : read(selected, 'status');
    const canForward = selected !== undefined
      && selectedStatus.toLowerCase() === 'submitted'
      && this.cmdHandoffChangeOrderToClientDescription.trim().length > 0
      && this.cmdHandoffChangeOrderToClientScopeImpact.trim().length > 0
      && this.cmdHandoffChangeOrderToClientScheduleImpact.trim().length > 0
      && this.cmdHandoffChangeOrderToClientChangeAmount.trim().length > 0;
    const isLoading = this.qryLocateChangeOrderState === 'loading';
    const isSending = this.cmdHandoffChangeOrderToClientState === 'loading';

    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]">
        <section class="mx-auto max-w-7xl">
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
              ${msg['section.forwardChangeOrderForClientApproval.locateChangeOrder.title']}
            </h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${msg['organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title']}
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-5">
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm md:col-span-3">
              <div class="mb-4 flex items-center justify-between gap-4">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                  ${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title']}
                </h2>
                ${isLoading ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty']}</span>` : nothing}
              </div>

              ${isLoading
                ? html`<div class="animate-pulse rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-8 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title']}</div>`
                : rows.length === 0
                  ? html`<p class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty']}</p>`
                  : html`
                    <div class="overflow-x-auto">
                      <table class="w-full border-collapse text-left text-sm">
                        <thead>
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-[var(--text-muted,#64748b)]">
                            <th class="px-3 py-3 font-medium">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label']}</th>
                            <th class="px-3 py-3 font-medium">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label']}</th>
                            <th class="px-3 py-3 font-medium">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label']}</th>
                            <th class="px-3 py-3 font-medium">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label']}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${rows.map((item: unknown) => {
                            const id = read(item, 'changeOrderId');
                            const isSelected = id === selectedId;
                            return html`
                              <tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${isSelected ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}" @click=${(): void => this.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(id)}>
                                <td class="px-3 py-3 font-medium text-[var(--text-strong,#0f172a)]">${id}</td>
                                <td class="px-3 py-3">${read(item, 'clientRef')}</td>
                                <td class="px-3 py-3">${read(item, 'projectRef')}</td>
                                <td class="px-3 py-3">${read(item, 'status')}</td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}
              ${this.qryLocateChangeOrderState === 'error'
                ? html`<button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm text-[var(--button-secondary-text,#334155)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event): void => this.handleQryLocateChangeOrderClick(event)}>${msg['organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title']}</button>`
                : nothing}
            </section>

            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm md:col-span-2">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title']}</h2>
              ${selected === undefined
                ? html`<p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty']}</p>`
                : html`
                  <dl class="mt-4 space-y-3 text-sm">
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label']}</dt><dd>${read(selected, 'description')}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label']}</dt><dd>${read(selected, 'scopeImpact')}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label']}</dt><dd>${read(selected, 'scheduleImpact')}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label']}</dt><dd>${read(selected, 'changeAmount')}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label']}</dt><dd>${read(selected, 'submittedAt')}</dd></div>
                    <div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label']}</dt><dd>${read(selected, 'forwardedForClientApprovalAt')}</dd></div>
                  </dl>

                  <div class="mt-6 border-t border-[var(--border-subtle,#e2e8f0)] pt-5">
                    <h3 class="text-base font-semibold">${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title']}</h3>
                    <div class="mt-4 space-y-4">
                      <label class="block text-sm font-medium">${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label']}<textarea required rows="3" .value=${this.cmdHandoffChangeOrderToClientDescription} @change=${(event: Event): void => this.handleCmdHandoffChangeOrderToClientDescriptionChange(event)} class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2"></textarea></label>
                      <label class="block text-sm font-medium">${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label']}<textarea required rows="2" .value=${this.cmdHandoffChangeOrderToClientScopeImpact} @change=${(event: Event): void => this.handleCmdHandoffChangeOrderToClientScopeImpactChange(event)} class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2"></textarea></label>
                      <label class="block text-sm font-medium">${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label']}<textarea required rows="2" .value=${this.cmdHandoffChangeOrderToClientScheduleImpact} @change=${(event: Event): void => this.handleCmdHandoffChangeOrderToClientScheduleImpactChange(event)} class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2"></textarea></label>
                      <label class="block text-sm font-medium">${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label']}<input required type="text" .value=${this.cmdHandoffChangeOrderToClientChangeAmount} @change=${(event: Event): void => this.handleCmdHandoffChangeOrderToClientChangeAmountChange(event)} class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
                      ${this.cmdHandoffChangeOrderToClientState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fef2f2)] p-3 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">${this.cmdHandoffChangeOrderToClientError || msg['action.cmdHandoffChangeOrderToClient.error']}</p>` : nothing}
                      ${this.cmdHandoffChangeOrderToClientState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#f0fdf4)] p-3 text-sm text-[var(--status-success-text,#166534)]" role="status">${msg['action.cmdHandoffChangeOrderToClient.success']}</p>` : nothing}
                      <button ?disabled=${!canForward || isSending} class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-50" @click=${(event: Event): void => this.handleCmdHandoffChangeOrderToClientClick(event)}>${isSending ? msg['action.cmdHandoffChangeOrderToClient.success'] : msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient']}</button>
                    </div>
                  </div>
                `}
            </section>
          </div>
        </section>
      </main>
    `;
  }
}
