/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientBillingSummaryView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingSummaryViewBase } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';

@customElement('build-flow-fsm--web--desktop--page21--client-billing-summary-view-102046')
export class BuildFlowFsmDesktopPage21ClientBillingSummaryViewPage extends BuildFlowFsmClientBillingSummaryViewBase {
  render() {
    const msg = this.msg;
    const data = this.qryClientBillingSummaryViewData;
    const isLoading = this.qryClientBillingSummaryViewState === 'loading';
    const hasClient = this.qryClientBillingSummaryViewClientBillingSummaryClientId.trim().length > 0;
    const formatAmount = (value: number): string =>
      new Intl.NumberFormat(undefined, { style: 'currency', currency: 'BRL' }).format(value);

    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
        <h1 class="sr-only">${msg['section.clientBillingSummaryView.overview.title']}</h1>
        <section class="mx-auto max-w-6xl space-y-6" aria-labelledby="billing-summary-title">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 id="billing-summary-title" class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
                ${msg['organism.clientBillingSummaryView.qryClientBillingSummaryView.title']}
              </h2>
              ${hasClient
                ? html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label]}</p>`
                : nothing}
            </div>
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
              ?disabled=${isLoading || !hasClient}
              @click=${(event: Event) => this.handleQryClientBillingSummaryViewClick(event)}
            >
              ${isLoading ? msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title'] : msg['organism.clientBillingSummaryView.qryClientBillingSummaryView.title']}
            </button>
          </div>

          ${isLoading
            ? html`
                <div class="grid gap-4 md:grid-cols-4" aria-busy="true">
                  ${[0, 1, 2, 3].map(
                    (index: number) => html`<div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]" aria-label=${String(index)}></div>`,
                  )}
                </div>
              `
            : data
              ? html`
                  <div class="grid gap-4 md:grid-cols-4">
                    <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
                      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label']}</p>
                      <p class="mt-2 text-2xl font-bold text-[var(--status-success-text,#166534)]">${formatAmount(data.clientAvailableAmount)}</p>
                    </article>
                    <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
                      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label']}</p>
                      <p class="mt-2 text-2xl font-bold text-[var(--text-strong,#0f172a)]">${formatAmount(data.invoicedAmount)}</p>
                    </article>
                    <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
                      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label']}</p>
                      <p class="mt-2 text-2xl font-bold text-[var(--text-strong,#0f172a)]">${formatAmount(data.billableAmount)}</p>
                    </article>
                    <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
                      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label']}</p>
                      <p class="mt-2 text-2xl font-bold text-[var(--text-strong,#0f172a)]">${formatAmount(data.approvedChangeOrderAmount)}</p>
                    </article>
                  </div>

                  <div class="grid gap-6 md:grid-cols-2">
                    <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
                      <h3 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label']}</h3>
                      <p class="mt-3 break-words text-sm text-[var(--text-muted,#64748b)]">${data.approvedChangeOrderReferences || msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty']}</p>
                    </section>
                    <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
                      <h3 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label']}</h3>
                      <p class="mt-3 break-words text-sm text-[var(--text-muted,#64748b)]">${data.invoiceReferences || msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty']}</p>
                    </section>
                  </div>
                `
              : html`<p class="rounded-lg bg-[var(--status-neutral-bg,#f1f5f9)] p-4 text-sm text-[var(--status-neutral-text,#475569)]">${msg['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty']}</p>`}
        </section>
      </main>
    `;
  }
}
