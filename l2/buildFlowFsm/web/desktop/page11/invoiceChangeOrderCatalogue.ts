/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/invoiceChangeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceChangeOrderCatalogueBase, messages as sharedMessages, type MessageType, type QryListInvoiceChangeOrderOutput, type QryInvoicePickerOutput, type QryChangeOrderPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'recordList.title': m['section.invoiceChangeOrderCatalogue.recordList.title'],
'list.title': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title'],
'list.empty': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty'],
'list.invoiceChangeOrderId': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label'],
'list.invoiceId': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label'],
'list.changeOrderId': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label'],
'list.billedAmount': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label'],
'delete.organism': m['organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title'],
'delete.form': m['intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title'],
'delete.action': m['intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder'],
'recordForm.title': m['section.invoiceChangeOrderCatalogue.recordForm.title'],
'invoice.organism': m['organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title'],
'invoice.list.title': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title'],
'invoice.empty': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty'],
'invoice.id': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label'],
'invoice.client': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label'],
'invoice.project': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label'],
'invoice.reference': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label'],
'invoice.amount': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label'],
'invoice.status': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label'],
'change.organism': m['organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title'],
'change.list.title': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title'],
'change.empty': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty'],
'change.id': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
'change.client': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label'],
'change.project': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label'],
'change.description': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label'],
'change.scope': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label'],
'change.schedule': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label'],
'change.amount': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label'],
'change.submitted': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label'],
'change.approval': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label'],
'change.status': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label'],
'create.organism': m['organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title'],
'create.form': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title'],
'create.action': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder'],
'create.amount': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label'],
'update.organism': m['organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title'],
'update.form': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title'],
'update.action': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder'],
'update.amount': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label'],
'create.success': m['action.cmdCreateInvoiceChangeOrder.success'],
'create.error': m['action.cmdCreateInvoiceChangeOrder.error'],
'update.success': m['action.cmdUpdateInvoiceChangeOrder.success'],
'update.error': m['action.cmdUpdateInvoiceChangeOrder.error'],
'delete.success': m['action.cmdDeleteInvoiceChangeOrder.success'],
'delete.error': m['action.cmdDeleteInvoiceChangeOrder.error'],
'workbench.title': m['section.invoiceChangeOrderCatalogue.recordWorkbench.title'],
'newAssociation.title': m['section.invoiceChangeOrderCatalogue.newAssociation.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--invoice-change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage11InvoiceChangeOrderCataloguePage extends BuildFlowFsmInvoiceChangeOrderCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
<h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['recordList.title']}</h1>
${this.renderList()} ${this.renderPickers()} ${this.renderCreate()} ${this.renderUpdate()} ${this.renderDelete()}
</div></main>`;
}
renderList() {
const msg = this.msg;
const rows: QryListInvoiceChangeOrderOutput[] = this.qryListInvoiceChangeOrderData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
<div class="mb-3 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListInvoiceChangeOrderClick(event)}>${msg['workbench.title']}</button></div>
${this.qryListInvoiceChangeOrderState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.title']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['list.invoiceChangeOrderId']}</th><th class="p-2">${msg['list.invoiceId']}</th><th class="p-2">${msg['list.changeOrderId']}</th><th class="p-2">${msg['list.billedAmount']}</th></tr></thead><tbody>${rows.map((row: QryListInvoiceChangeOrderOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${row.invoiceChangeOrderId}</td><td class="p-2">${row.invoiceId}</td><td class="p-2">${row.changeOrderId}</td><td class="p-2">${row.billedAmount}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderPickers() {
const msg = this.msg;
const invoices: QryInvoicePickerOutput[] = this.qryInvoicePickerData ?? [];
const changes: QryChangeOrderPickerOutput[] = this.qryChangeOrderPickerData ?? [];
return html`<section class="grid gap-6 md:grid-cols-2"><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h2 class="mb-3 text-lg font-semibold">${msg['invoice.organism']}</h2><button class="mb-3 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryInvoicePickerClick(event)}>${msg['invoice.list.title']}</button>${invoices.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['invoice.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th class="p-2">${msg['invoice.id']}</th><th class="p-2">${msg['invoice.client']}</th><th class="p-2">${msg['invoice.reference']}</th><th class="p-2">${msg['invoice.amount']}</th><th class="p-2">${msg['invoice.status']}</th></tr></thead><tbody>${invoices.map((row: QryInvoicePickerOutput) => html`<tr><td class="p-2">${row.invoiceId}</td><td class="p-2">${row.clientId}</td><td class="p-2">${row.commercialReference}</td><td class="p-2">${row.amount}</td><td class="p-2">${row.status}</td></tr>`)}</tbody></table></div>`}</article><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h2 class="mb-3 text-lg font-semibold">${msg['change.organism']}</h2><button class="mb-3 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryChangeOrderPickerClick(event)}>${msg['change.list.title']}</button>${changes.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['change.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th class="p-2">${msg['change.id']}</th><th class="p-2">${msg['change.description']}</th><th class="p-2">${msg['change.amount']}</th><th class="p-2">${msg['change.status']}</th></tr></thead><tbody>${changes.map((row: QryChangeOrderPickerOutput) => html`<tr><td class="p-2">${row.changeOrderId}</td><td class="p-2">${row.description}</td><td class="p-2">${row.changeAmount}</td><td class="p-2">${row.status}</td></tr>`)}</tbody></table></div>`}</article></section>`;
}
renderCreate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['newAssociation.title']}</h2><div class="grid gap-4 md:grid-cols-3"><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderInvoiceId} @change=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderInvoiceIdChange(event)}>${(this.qryInvoicePickerData ?? []).map((row: QryInvoicePickerOutput) => html`<option value=${row.invoiceId}>${row.invoiceId}</option>`)}</select><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderChangeOrderId} @change=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderChangeOrderIdChange(event)}>${(this.qryChangeOrderPickerData ?? []).map((row: QryChangeOrderPickerOutput) => html`<option value=${row.changeOrderId}>${row.changeOrderId}</option>`)}</select><label class="flex flex-col gap-1"><span>${msg['create.amount']}</span><input class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderBilledAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderBilledAmountChange(event)} /></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateInvoiceChangeOrderState === 'loading'} @click=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderClick(event)}>${msg['create.action']}</button>${this.cmdCreateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceChangeOrderError || msg['create.error']}</p>` : nothing}</section>`;
}
renderUpdate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['update.form']}</h2><div class="grid gap-4 md:grid-cols-4"><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId} @change=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderInvoiceChangeOrderIdChange(event)}>${(this.qryListInvoiceChangeOrderData ?? []).map((row: QryListInvoiceChangeOrderOutput) => html`<option value=${row.invoiceChangeOrderId}>${row.invoiceChangeOrderId}</option>`)}</select><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceChangeOrderInvoiceId} @change=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderInvoiceIdChange(event)}>${(this.qryInvoicePickerData ?? []).map((row: QryInvoicePickerOutput) => html`<option value=${row.invoiceId}>${row.invoiceId}</option>`)}</select><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceChangeOrderChangeOrderId} @change=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderChangeOrderIdChange(event)}>${(this.qryChangeOrderPickerData ?? []).map((row: QryChangeOrderPickerOutput) => html`<option value=${row.changeOrderId}>${row.changeOrderId}</option>`)}</select><label class="flex flex-col gap-1"><span>${msg['update.amount']}</span><input class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceChangeOrderBilledAmount} @input=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderBilledAmountChange(event)} /></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateInvoiceChangeOrderState === 'loading'} @click=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderClick(event)}>${msg['update.action']}</button>${this.cmdUpdateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateInvoiceChangeOrderError || msg['update.error']}</p>` : nothing}</section>`;
}
renderDelete() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="mb-4 text-lg font-semibold">${msg['delete.form']}</h2><div class="flex flex-wrap items-center gap-3"><select class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId} @change=${(event: Event) => this.handleCmdDeleteInvoiceChangeOrderInvoiceChangeOrderIdChange(event)}>${(this.qryListInvoiceChangeOrderData ?? []).map((row: QryListInvoiceChangeOrderOutput) => html`<option value=${row.invoiceChangeOrderId}>${row.invoiceChangeOrderId}</option>`)}</select><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteInvoiceChangeOrderState === 'loading'} @click=${(event: Event) => this.handleCmdDeleteInvoiceChangeOrderClick(event)}>${msg['delete.action']}</button></div>${this.cmdDeleteInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteInvoiceChangeOrderError || msg['delete.error']}</p>` : nothing}</section>`;
}
}
