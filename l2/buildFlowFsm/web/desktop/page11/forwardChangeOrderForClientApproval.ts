/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmForwardChangeOrderForClientApprovalBase } from '/_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.js';

const formatDate = (value: string | null | undefined): string => {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
};

@customElement('build-flow-fsm--web--desktop--page11--forward-change-order-for-client-approval-102046')
export class BuildFlowFsmDesktopPage11ForwardChangeOrderForClientApprovalPage extends BuildFlowFsmForwardChangeOrderForClientApprovalBase {
  render() {
    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderChangeOrderList()}
          ${this.renderHandoffForm()}
        </div>
      </main>
    `;
  }

  renderChangeOrderList() {
    const msg = this.msg;
    const rows = this.qryLocateChangeOrderData ?? [];
    const loading = this.qryLocateChangeOrderState === 'loading';
    return html`
      <section class="space-y-4">
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.forwardChangeOrderForClientApproval.locateChangeOrder.title']}
        </h1>
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.08))] overflow-x-auto">
          <div class="p-4 border-b border-[var(--border-subtle,#e2e8f0)] flex items-center justify-between gap-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${msg['organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title']}
            </h2>
            <button
              type="button"
              class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2"
              ?disabled=${loading}
              @click=${(event: Event) => this.handleQryLocateChangeOrderClick(event)}
            >
              ${loading ? msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title'] : msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title']}
            </button>
          </div>
          ${loading
            ? html`<div class="p-6 text-[var(--text-muted,#64748b)]" role="status">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title']}</div>`
            : rows.length === 0
              ? html`<div class="p-6 text-[var(--text-muted,#64748b)]">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty']}</div>`
              : html`
                <table class="min-w-full text-sm">
                  <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-left">
                    <tr>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label']}</th>
                      <th class="p-3">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label']}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map((row) => html`
                      <tr
                        class="border-t border-[var(--border-subtle,#e2e8f0)] cursor-pointer hover:bg-[var(--selected-bg,#f1f5f9)]"
                        @click=${() => this.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(row.changeOrderId)}
                      >
                        <td class="p-3 font-medium">${row.changeOrderId}</td>
                        <td class="p-3">${row.clientRef}</td>
                        <td class="p-3">${row.projectRef}</td>
                        <td class="p-3">${row.description}</td>
                        <td class="p-3">${row.scopeImpact}</td>
                        <td class="p-3">${row.scheduleImpact}</td>
                        <td class="p-3">${row.changeAmount}</td>
                        <td class="p-3">${formatDate(row.submittedAt)}</td>
                        <td class="p-3">${formatDate(row.forwardedForClientApprovalAt)}</td>
                        <td class="p-3">${row.status}</td>
                      </tr>
                    `)}
                  </tbody>
                </table>
              `}
        </div>
      </section>
    `;
  }

  renderHandoffForm() {
    const msg = this.msg;
    const loading = this.cmdHandoffChangeOrderToClientState === 'loading';
    const success = this.cmdHandoffChangeOrderToClientState === 'success';
    const error = this.cmdHandoffChangeOrderToClientState === 'error';
    const selectedId = this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId;
    return html`
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title']}
        </h2>
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.08))]">
          <h3 class="text-lg font-semibold text-[var(--text-strong,#0f172a)] mb-4">
            ${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title']}
          </h3>
          <form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdHandoffChangeOrderToClientClick(event); }}>
            <div>
              <label class="block text-sm font-medium mb-1">${msg['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label']}</label>
              <select
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${selectedId}
                required
                @change=${(event: Event) => this.handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange(event)}
              >
                <option value=""></option>
                ${rowsForSelection(this.qryLocateChangeOrderData).map((row) => html`<option value=${row.changeOrderId}>${row.changeOrderId}</option>`)}
              </select>
            </div>
            <label class="block text-sm font-medium">
              ${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label']}
              <textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" required .value=${this.cmdHandoffChangeOrderToClientDescription} @input=${(event: Event) => this.handleCmdHandoffChangeOrderToClientDescriptionChange(event)}></textarea>
            </label>
            <label class="block text-sm font-medium">
              ${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label']}
              <textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" required .value=${this.cmdHandoffChangeOrderToClientScopeImpact} @input=${(event: Event) => this.handleCmdHandoffChangeOrderToClientScopeImpactChange(event)}></textarea>
            </label>
            <label class="block text-sm font-medium">
              ${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label']}
              <textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" required .value=${this.cmdHandoffChangeOrderToClientScheduleImpact} @input=${(event: Event) => this.handleCmdHandoffChangeOrderToClientScheduleImpactChange(event)}></textarea>
            </label>
            <label class="block text-sm font-medium">
              ${msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label']}
              <input type="text" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" required .value=${this.cmdHandoffChangeOrderToClientChangeAmount} @input=${(event: Event) => this.handleCmdHandoffChangeOrderToClientChangeAmountChange(event)} />
            </label>
            <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" ?disabled=${loading || !selectedId}>
              ${loading ? msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title'] : msg['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient']}
            </button>
          </form>
          ${success ? html`<p class="mt-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3" role="status">${msg['action.cmdHandoffChangeOrderToClient.success']}</p>` : nothing}
          ${error ? html`<p class="mt-4 rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3" role="alert">${this.cmdHandoffChangeOrderToClientError || msg['action.cmdHandoffChangeOrderToClient.error']}</p>` : nothing}
        </div>
      </section>
    `;
  }
}

const rowsForSelection = <T extends { changeOrderId: string }>(rows: T[] | null | undefined): T[] => rows ?? [];
