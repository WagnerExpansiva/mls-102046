/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceChangeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceChangeOrderCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.js';
import type { QryListInvoiceChangeOrderOutput, QryInvoicePickerOutput, QryChangeOrderPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceChangeOrderCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'records.title': m['section.invoiceChangeOrderCatalogue.recordList.title'],
'records.organismTitle': m['organism.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.title'],
'records.listTitle': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title'],
'records.empty': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty'],
'records.id': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label'],
'records.invoice': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label'],
'records.changeOrder': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label'],
'records.amount': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label'],
'invoice.title': m['organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title'],
'invoice.listTitle': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title'],
'invoice.empty': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty'],
'invoice.id': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label'],
'invoice.client': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.clientId.label'],
'invoice.project': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.projectId.label'],
'invoice.reference': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label'],
'invoice.amount': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label'],
'invoice.status': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label'],
'change.title': m['organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title'],
'change.listTitle': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title'],
'change.empty': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty'],
'change.id': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
'change.client': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.clientRef.label'],
'change.project': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.projectRef.label'],
'change.description': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label'],
'change.scope': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label'],
'change.schedule': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label'],
'change.amount': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label'],
'change.submitted': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.submittedAt.label'],
'change.forwarded': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label'],
'change.status': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label'],
'create.title': m['organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title'],
'create.formTitle': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title'],
'create.save': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder'],
'create.amount': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label'],
'update.title': m['organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title'],
'update.formTitle': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title'],
'update.save': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder'],
'update.amount': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label'],
'delete.title': m['organism.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.title'],
'delete.formTitle': m['intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.title'],
'delete.action': m['intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder'],
'create.success': m['action.cmdCreateInvoiceChangeOrder.success'],
'create.error': m['action.cmdCreateInvoiceChangeOrder.error'],
'update.success': m['action.cmdUpdateInvoiceChangeOrder.success'],
'update.error': m['action.cmdUpdateInvoiceChangeOrder.error'],
'delete.success': m['action.cmdDeleteInvoiceChangeOrder.success'],
'delete.error': m['action.cmdDeleteInvoiceChangeOrder.error'],
'workbench.title': m['section.invoiceChangeOrderCatalogue.recordWorkbench.title'],
'new.title': m['section.invoiceChangeOrderCatalogue.newAssociation.title']
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
@customElement('build-flow-fsm--web--desktop--page21--invoice-change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage21InvoiceChangeOrderCataloguePage extends BuildFlowFsmInvoiceChangeOrderCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
  ${this.renderRecords()}
  ${this.renderWorkbench()}
</main>`;
}
renderRecords() {
const msg = this.msg;
const records: QryListInvoiceChangeOrderOutput[] = this.qryListInvoiceChangeOrderData ?? [];
return html`<section class="mb-6" aria-labelledby="invoice-change-order-records">
  <h2 id="invoice-change-order-records" class="text-xl font-semibold mb-3">${msg['records.title']}</h2>
  ${this.qryListInvoiceChangeOrderState === 'loading' ? html`<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-6" role="status">${msg['records.listTitle']}…</div>` : records.length === 0 ? html`<p class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6 text-[var(--text-muted,#64748b)]">${msg['records.empty']}</p>` : html`<div class="overflow-x-auto rounded-lg border border-[var(--border-default,#cbd5e1)]"><table class="w-full text-left"><caption class="sr-only">${msg['records.listTitle']}</caption><thead class="bg-[var(--surface-alt-bg,#f8fafc)]"><tr>
    <th class="p-3">${msg['records.id']}</th><th class="p-3">${msg['records.invoice']}</th><th class="p-3">${msg['records.changeOrder']}</th><th class="p-3">${msg['records.amount']}</th>
  </tr></thead><tbody>${records.map((item: QryListInvoiceChangeOrderOutput) => html`<tr class="cursor-pointer border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#eff6ff)]" @click=${() => this.selectRecord(item)}>
    <td class="p-3">${item.invoiceChangeOrderId}</td><td class="p-3">${item.invoiceId}</td><td class="p-3">${item.changeOrderId}</td><td class="p-3">${item.billedAmount}</td>
  </tr>`)}</tbody></table></div>`}
</section>`;
}
selectRecord(item: QryListInvoiceChangeOrderOutput) {
this.setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId(item.invoiceChangeOrderId);
this.setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId(item.invoiceChangeOrderId);
this.setCmdUpdateInvoiceChangeOrderInvoiceId(item.invoiceId);
this.setCmdUpdateInvoiceChangeOrderChangeOrderId(item.changeOrderId);
this.setCmdUpdateInvoiceChangeOrderBilledAmount(String(item.billedAmount));
}
renderWorkbench() {
const msg = this.msg;
return html`<section aria-labelledby="invoice-change-order-workbench"><h2 id="invoice-change-order-workbench" class="text-xl font-semibold mb-4">${msg['workbench.title']}</h2>
<div class="grid gap-6 lg:grid-cols-2">
  <div class="space-y-6">${this.renderInvoicePicker()}${this.renderChangeOrderPicker()}</div>
  <div class="space-y-6">${this.renderUpdateForm()}${this.renderCreateForm()}${this.renderDeleteAction()}</div>
</div></section>`;
}
renderInvoicePicker() {
const msg = this.msg;
const invoices: QryInvoicePickerOutput[] = this.qryInvoicePickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-4"><h3 class="font-semibold mb-3">${msg['invoice.title']}</h3>
${this.qryInvoicePickerState === 'loading' ? html`<p role="status">${msg['invoice.listTitle']}…</p>` : invoices.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['invoice.empty']}</p>` : html`<label class="block"><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoice.reference']}</span><select class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderInvoiceId} @change=${this.handleCmdCreateInvoiceChangeOrderInvoiceIdChange}><option value=""></option>${invoices.map((item: QryInvoicePickerOutput) => html`<option value=${item.invoiceId}>${item.commercialReference} — ${item.amount} — ${item.status}</option>`)}</select></label>`}</section>`;
}
renderChangeOrderPicker() {
const msg = this.msg;
const orders: QryChangeOrderPickerOutput[] = this.qryChangeOrderPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-4"><h3 class="font-semibold mb-3">${msg['change.title']}</h3>
${this.qryChangeOrderPickerState === 'loading' ? html`<p role="status">${msg['change.listTitle']}…</p>` : orders.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['change.empty']}</p>` : html`<label class="block"><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['change.description']}</span><select class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderChangeOrderId} @change=${this.handleCmdCreateInvoiceChangeOrderChangeOrderIdChange}><option value=""></option>${orders.map((item: QryChangeOrderPickerOutput) => html`<option value=${item.changeOrderId}>${item.description} — ${item.changeAmount} — ${item.status}</option>`)}</select></label>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
const disabled = this.cmdCreateInvoiceChangeOrderState === 'loading' || !this.cmdCreateInvoiceChangeOrderInvoiceId || !this.cmdCreateInvoiceChangeOrderChangeOrderId || !this.cmdCreateInvoiceChangeOrderBilledAmount;
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-4"><h3 class="font-semibold mb-3">${msg['new.title']}</h3><label class="block"><span>${msg['create.amount']} *</span><input required type="number" step="any" class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceChangeOrderBilledAmount} @input=${this.handleCmdCreateInvoiceChangeOrderBilledAmountChange}></label>
${this.cmdCreateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateInvoiceChangeOrderError || msg['create.error']}</p>` : nothing}<button class="mt-4 rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${disabled} @click=${this.handleCmdCreateInvoiceChangeOrderClick}>${this.cmdCreateInvoiceChangeOrderState === 'loading' ? '…' : msg['create.save']}</button></section>`;
}
renderUpdateForm() {
const msg = this.msg;
const disabled = this.cmdUpdateInvoiceChangeOrderState === 'loading' || !this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId || !this.cmdUpdateInvoiceChangeOrderInvoiceId || !this.cmdUpdateInvoiceChangeOrderChangeOrderId || !this.cmdUpdateInvoiceChangeOrderBilledAmount;
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-4"><h3 class="font-semibold mb-3">${msg['update.formTitle']}</h3><p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">${msg['records.id']}: ${this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId || '—'}</p><label class="block"><span>${msg['update.amount']} *</span><input required type="number" step="any" class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceChangeOrderBilledAmount} @input=${this.handleCmdUpdateInvoiceChangeOrderBilledAmountChange}></label>${this.cmdUpdateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateInvoiceChangeOrderError || msg['update.error']}</p>` : nothing}<button class="mt-4 rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${disabled} @click=${this.handleCmdUpdateInvoiceChangeOrderClick}>${this.cmdUpdateInvoiceChangeOrderState === 'loading' ? '…' : msg['update.save']}</button></section>`;
}
renderDeleteAction() {
const msg = this.msg;
const disabled = this.cmdDeleteInvoiceChangeOrderState === 'loading' || !this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId;
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-4"><h3 class="font-semibold mb-3">${msg['delete.formTitle']}</h3><p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">${msg['records.id']}: ${this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId || '—'}</p>${this.cmdDeleteInvoiceChangeOrderState === 'success' ? html`<p class="mb-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteInvoiceChangeOrderState === 'error' ? html`<p class="mb-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteInvoiceChangeOrderError || msg['delete.error']}</p>` : nothing}<button class="rounded bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${disabled} @click=${this.confirmDelete}>${this.cmdDeleteInvoiceChangeOrderState === 'loading' ? '…' : msg['delete.action']}</button></section>`;
}
confirmDelete() {
const id = this.cmdDeleteInvoiceChangeOrderInvoiceChangeOrderId;
if (id && window.confirm(`${this.msg['delete.action']}: ${id}`)) this.handleCmdDeleteInvoiceChangeOrderClick();
}
}
