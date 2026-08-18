/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientBillingSummaryView.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'client.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label'],
'project.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label'],
'approvedReferences.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label'],
'invoiceReferences.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label'],
'approved.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label'],
'billable.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label'],
'invoiced.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label'],
'available.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando resumo',
'load': 'Consultar resumo',
'error': 'Não foi possível carregar o resumo.',
'retry': 'Tentar novamente',
'notAvailable': 'Não informado',
'references': 'Referências de suporte',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando resumo',
'load': 'Consultar resumo',
'error': 'Não foi possível carregar o resumo.',
'retry': 'Tentar novamente',
'notAvailable': 'Não informado',
'references': 'Referências de suporte',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading summary',
'load': 'Load summary',
'error': 'Unable to load the summary.',
'retry': 'Try again',
'notAvailable': 'Not available',
'references': 'Supporting references',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando resumen',
'load': 'Consultar resumen',
'error': 'No se pudo cargar el resumen.',
'retry': 'Intentar de nuevo',
'notAvailable': 'No informado',
'references': 'Referencias de soporte',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--client-billing-summary-view-102046')
export class BuildFlowFsmDesktopPage31ClientBillingSummaryViewPage extends BuildFlowFsmClientBillingSummaryViewBase {
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
const hasClient = this.qryClientBillingSummaryViewClientBillingSummaryClientId.trim().length > 0;
return html`
<section class="space-y-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
  <div class="flex flex-wrap items-center justify-between gap-4">
    <div>
      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['summary.title']}</p>
      <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['overview.title']}</h2>
    </div>
    <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!hasClient || this.qryClientBillingSummaryViewState === 'loading'} @click=${this.handleQryClientBillingSummaryViewClick}>
      ${this.qryClientBillingSummaryViewState === 'loading' ? msg['loading'] : msg['load']}
    </button>
  </div>
  ${this.renderSummary()}
</section>`;
}
/** Summary surface for the consolidated billing position. */
renderSummary() {
const msg = this.msg;
if (this.qryClientBillingSummaryViewState === 'loading') {
return html`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
${[0, 1, 2, 3].map((_index: number) => html`<div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#e2e8f0)]"></div>`)}
</div>`;
}
if (this.qryClientBillingSummaryViewState === 'error') {
return html`<div class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--status-error-bg,#fee2e2)] p-4 text-[var(--status-error-text,#991b1b)]">
<p>${msg['error']}</p><button type="button" class="mt-3 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryClientBillingSummaryViewClick}>${msg['retry']}</button>
</div>`;
}
const data: QryClientBillingSummaryViewOutput | null = this.qryClientBillingSummaryViewData;
if (data === null) {
return html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 text-[var(--text-muted,#64748b)]">${msg['list.empty']}</div>`;
}
const values = data as unknown as Record<string, unknown>;
const amount = (key: string): string => {
const value = values[key];
return typeof value === 'number' ? value.toLocaleString() : typeof value === 'string' && value.length > 0 ? value : msg['notAvailable'];
};
const text = (key: string): string => {
const value = values[key];
return typeof value === 'string' || typeof value === 'number' ? String(value) : msg['notAvailable'];
};
const refs = (key: string): unknown[] => {
const value = values[key];
return Array.isArray(value) ? value : [];
};
const renderRefs = (key: string) => {
const items = refs(key);
return items.length === 0 ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['notAvailable']}</span>` : html`<ul class="space-y-1">${items.map((item: unknown) => html`<li class="text-sm text-[var(--text-muted,#64748b)]">${typeof item === 'string' || typeof item === 'number' ? String(item) : JSON.stringify(item)}</li>`)}</ul>`;
};
return html`
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
${this.renderMetric(msg['available.label'], amount('clientAvailableAmount'), 'text-[var(--status-success-text,#166534)]')}
${this.renderMetric(msg['invoiced.label'], amount('invoicedAmount'), 'text-[var(--text-strong,#0f172a)]')}
${this.renderMetric(msg['billable.label'], amount('billableAmount'), 'text-[var(--text-strong,#0f172a)]')}
${this.renderMetric(msg['approved.label'], amount('approvedChangeOrderAmount'), 'text-[var(--text-strong,#0f172a)]')}
</div>
<div class="mt-4 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['client.label']}</dt><dd class="mt-1 font-medium">${text('clientId')}</dd></div>
<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['project.label']}</dt><dd class="mt-1 font-medium">${text('projectId')}</dd></div>
</div>
<div class="mt-5 border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><h3 class="text-base font-medium">${msg['references']}</h3><div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2"><div><p class="text-sm font-medium">${msg['approvedReferences.label']}</p>${renderRefs('approvedChangeOrderReferences')}</div><div><p class="text-sm font-medium">${msg['invoiceReferences.label']}</p>${renderRefs('invoiceReferences')}</div></div></div>
</div>`;
}
renderMetric(label: string, value: string, valueClass: string) {
return html`<div class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><div class="text-sm text-[var(--text-muted,#64748b)]">${label}</div><div class="mt-2 text-2xl font-semibold tabular-nums ${valueClass}">${value}</div></div>`;
}
}
