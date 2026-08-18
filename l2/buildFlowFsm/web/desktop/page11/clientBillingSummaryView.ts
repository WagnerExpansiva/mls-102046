/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientBillingSummaryView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingSummaryViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';
import type { QryClientBillingSummaryViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'overview.title': m['section.clientBillingSummaryView.overview.title'],
'summary.title': m['organism.clientBillingSummaryView.qryClientBillingSummaryView.title'],
'list.title': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title'],
'list.empty': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty'],
'clientId.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label'],
'projectId.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label'],
'approvedChanges.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label'],
'invoices.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label'],
'approvedAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label'],
'billableAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label'],
'invoicedAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label'],
'availableAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'context.client': 'Cliente selecionado',
'load': 'Consultar resumo',
'loading': 'Consultando o resumo de faturamento…',
'error': 'Não foi possível consultar o resumo de faturamento.',
'noSelection': 'Selecione um cliente no contexto para consultar o resumo.',
'amount.empty': '—',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'context.client': 'Cliente selecionado',
'load': 'Consultar resumo',
'loading': 'Consultando o resumo de faturamento…',
'error': 'Não foi possível consultar o resumo de faturamento.',
'noSelection': 'Selecione um cliente no contexto para consultar o resumo.',
'amount.empty': '—',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'context.client': 'Selected client',
'load': 'View summary',
'loading': 'Loading billing summary…',
'error': 'The billing summary could not be loaded.',
'noSelection': 'Select a client from the current context to view the summary.',
'amount.empty': '—',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'context.client': 'Cliente seleccionado',
'load': 'Consultar resumen',
'loading': 'Consultando el resumen de facturación…',
'error': 'No se pudo consultar el resumen de facturación.',
'noSelection': 'Seleccione un cliente del contexto actual para consultar el resumen.',
'amount.empty': '—',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
const displayValue = (value: unknown, empty: string): string => {
if (value === null || value === undefined || value === '') return empty;
if (Array.isArray(value)) return value.length > 0 ? value.map((entry: unknown) => String(entry)).join(', ') : empty;
return String(value);
};
@customElement('build-flow-fsm--web--desktop--page11--client-billing-summary-view-102046')
export class BuildFlowFsmDesktopPage11ClientBillingSummaryViewPage extends BuildFlowFsmClientBillingSummaryViewBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
/** i18n catalog — resolved once per language, refreshed only when the document language changes. */
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) {
this.#msgLang = lang;
this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
}
return this.#msgCache;
}
/** Main render. Split the page into render<Name>() methods and call them from here. */
render() {
const msg = this.msg;
return html`
<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
  <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
    <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h1>
      <button
        type="button"
        class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
        ?disabled=${this.qryClientBillingSummaryViewState === 'loading' || !this.qryClientBillingSummaryViewClientBillingSummaryClientId}
        @click=${this.handleQryClientBillingSummaryViewClick}
      >${this.qryClientBillingSummaryViewState === 'loading' ? msg['loading'] : msg['load']}</button>
    </header>
    ${this.renderSummary()}
  </div>
</div>`;
}
renderSummary() {
const msg = this.msg;
const data: QryClientBillingSummaryViewOutput | null = this.qryClientBillingSummaryViewData;
const hasClient = this.qryClientBillingSummaryViewClientBillingSummaryClientId.length > 0;
return html`
<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['summary.title']}</h2>
    <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">
      ${hasClient ? html`${msg['context.client']}: ${this.qryClientBillingSummaryViewClientBillingSummaryClientId}` : msg['noSelection']}
    </div>
  </div>
  ${this.qryClientBillingSummaryViewState === 'loading' ? html`<p class="rounded-md bg-[var(--status-info-bg,#eff6ff)] px-4 py-3 text-[var(--status-info-text,#1d4ed8)]" role="status">${msg['loading']}</p>` : nothing}
  ${this.qryClientBillingSummaryViewState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fef2f2)] px-4 py-3 text-[var(--status-error-text,#b91c1c)]" role="alert">${msg['error']}</p>` : nothing}
  ${data ? html`
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['clientId.label']}</dt><dd class="mt-1 font-medium">${displayValue(data.clientId, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['projectId.label']}</dt><dd class="mt-1 font-medium">${displayValue(data.projectId, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['approvedChanges.label']}</dt><dd class="mt-1 font-medium">${displayValue(data.approvedChangeOrderReferences, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoices.label']}</dt><dd class="mt-1 font-medium">${displayValue(data.invoiceReferences, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['approvedAmount.label']}</dt><dd class="mt-1 text-lg font-semibold">${displayValue(data.approvedChangeOrderAmount, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['billableAmount.label']}</dt><dd class="mt-1 text-lg font-semibold">${displayValue(data.billableAmount, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoicedAmount.label']}</dt><dd class="mt-1 text-lg font-semibold">${displayValue(data.invoicedAmount, msg['amount.empty'])}</dd></div>
    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['availableAmount.label']}</dt><dd class="mt-1 text-lg font-semibold">${displayValue(data.clientAvailableAmount, msg['amount.empty'])}</dd></div>
  </div>` : this.qryClientBillingSummaryViewState !== 'loading' && this.qryClientBillingSummaryViewState !== 'error' ? html`<p class="py-8 text-center text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : nothing}
</section>`;
}
}
