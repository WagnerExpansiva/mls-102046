/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceChangeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'records.list.title': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.title'],
'records.empty': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.empty'],
'records.id': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceChangeOrderId.label'],
'records.invoice': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.invoiceId.label'],
'records.changeOrder': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.changeOrderId.label'],
'records.billed': m['intent.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.list.column.billedAmount.label'],
'invoices.title': m['organism.invoiceChangeOrderCatalogue.qryInvoicePicker.title'],
'invoices.list.title': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.title'],
'invoices.empty': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.empty'],
'invoices.id': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.invoiceId.label'],
'invoices.reference': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.commercialReference.label'],
'invoices.amount': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.amount.label'],
'invoices.status': m['intent.invoiceChangeOrderCatalogue.qryInvoicePicker.list.column.status.label'],
'orders.title': m['organism.invoiceChangeOrderCatalogue.qryChangeOrderPicker.title'],
'orders.list.title': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.title'],
'orders.empty': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.empty'],
'orders.id': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
'orders.description': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.description.label'],
'orders.scope': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label'],
'orders.schedule': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label'],
'orders.amount': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.changeAmount.label'],
'orders.status': m['intent.invoiceChangeOrderCatalogue.qryChangeOrderPicker.list.column.status.label'],
'create.title': m['organism.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.title'],
'create.form': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.title'],
'create.action': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.action.cmdCreateInvoiceChangeOrder'],
'create.billed': m['intent.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.form.field.billedAmount.label'],
'update.title': m['organism.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.title'],
'update.form': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.title'],
'update.action': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.action.cmdUpdateInvoiceChangeOrder'],
'update.billed': m['intent.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.form.field.billedAmount.label'],
'delete.action': m['intent.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.form.action.cmdDeleteInvoiceChangeOrder'],
'create.success': m['action.cmdCreateInvoiceChangeOrder.success'],
'create.error': m['action.cmdCreateInvoiceChangeOrder.error'],
'update.success': m['action.cmdUpdateInvoiceChangeOrder.success'],
'update.error': m['action.cmdUpdateInvoiceChangeOrder.error'],
'delete.success': m['action.cmdDeleteInvoiceChangeOrder.success'],
'delete.error': m['action.cmdDeleteInvoiceChangeOrder.error'],
'workbench.title': m['section.invoiceChangeOrderCatalogue.recordWorkbench.title'],
'new.title': m['section.invoiceChangeOrderCatalogue.newAssociation.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'feedback.saving': 'Salvando…',
'feedback.loading': 'Carregando…',
'feedback.required': 'Preencha os campos obrigatórios.',
'feedback.selectRecord': 'Selecione uma aplicação para editar.',
'feedback.deleteConfirm': 'Confirma a exclusão desta aplicação?',
'picker.chooseInvoice': 'Escolha a fatura',
'picker.chooseOrder': 'Escolha a ordem de mudança',
'context.invoice': 'Fatura selecionada',
'context.order': 'Ordem de mudança selecionada',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'feedback.saving': 'Salvando…', 'feedback.loading': 'Carregando…', 'feedback.required': 'Preencha os campos obrigatórios.', 'feedback.selectRecord': 'Selecione uma aplicação para editar.', 'feedback.deleteConfirm': 'Confirma a exclusão desta aplicação?', 'picker.chooseInvoice': 'Escolha a fatura', 'picker.chooseOrder': 'Escolha a ordem de mudança', 'context.invoice': 'Fatura selecionada', 'context.order': 'Ordem de mudança selecionada',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'feedback.saving': 'Saving…', 'feedback.loading': 'Loading…', 'feedback.required': 'Complete the required fields.', 'feedback.selectRecord': 'Select an application to edit.', 'feedback.deleteConfirm': 'Confirm deletion of this application?', 'picker.chooseInvoice': 'Choose an invoice', 'picker.chooseOrder': 'Choose a change order', 'context.invoice': 'Selected invoice', 'context.order': 'Selected change order',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'feedback.saving': 'Guardando…', 'feedback.loading': 'Cargando…', 'feedback.required': 'Complete los campos obligatorios.', 'feedback.selectRecord': 'Seleccione una aplicación para editar.', 'feedback.deleteConfirm': '¿Confirma eliminar esta aplicación?', 'picker.chooseInvoice': 'Elija una factura', 'picker.chooseOrder': 'Elija una orden de cambio', 'context.invoice': 'Factura seleccionada', 'context.order': 'Orden de cambio seleccionada',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--invoice-change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage31InvoiceChangeOrderCataloguePage extends BuildFlowFsmInvoiceChangeOrderCatalogueBase {
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
return html`<main class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6">
<section class="mx-auto max-w-7xl space-y-6">
<h1 class="sr-only">${msg['records.title']}</h1>
${this.renderRecordList()}
<div class="grid gap-6 lg:grid-cols-2">
${this.renderCreateForm()}
${this.renderUpdateForm()}
</div>
${this.renderPickers()}
</section></main>`;
}
renderRecordList() {
const msg = this.msg;
const rows: QryListInvoiceChangeOrderOutput[] = this.qryListInvoiceChangeOrderData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['records.list.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#1e293b)]" @click=${(event: Event) => this.handleQryListInvoiceChangeOrderClick(event)}>${msg['records.title']}</button></div>
${this.qryListInvoiceChangeOrderState === 'loading' ? html`<p>${msg['feedback.loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['records.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['records.id']}</th><th class="p-2">${msg['records.invoice']}</th><th class="p-2">${msg['records.changeOrder']}</th><th class="p-2">${msg['records.billed']}</th><th class="p-2"></th></tr></thead><tbody>${rows.map((row: QryListInvoiceChangeOrderOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${row.invoiceChangeOrderId}</td><td class="p-2">${row.invoiceId}</td><td class="p-2">${row.changeOrderId}</td><td class="p-2">${row.billedAmount}</td><td class="p-2"><div class="flex gap-2"><button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1 text-[var(--button-secondary-text,#1e293b)]" @click=${() => { this.setCmdUpdateInvoiceChangeOrderInvoiceChangeOrderId(row.invoiceChangeOrderId); this.setCmdUpdateInvoiceChangeOrderInvoiceId(row.invoiceId); this.setCmdUpdateInvoiceChangeOrderChangeOrderId(row.changeOrderId); this.setCmdUpdateInvoiceChangeOrderBilledAmount(String(row.billedAmount)); }}>${msg['update.title']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-3 py-1 text-[var(--button-danger-text,#ffffff)]" @click=${() => { if (window.confirm(msg['feedback.deleteConfirm'])) { this.setCmdDeleteInvoiceChangeOrderInvoiceChangeOrderId(row.invoiceChangeOrderId); this.handleCmdDeleteInvoiceChangeOrderClick(); } }}>${msg['delete.action']}</button></div></td></tr>`)}</tbody></table></div>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
const ready = Boolean(this.cmdCreateInvoiceChangeOrderInvoiceId && this.cmdCreateInvoiceChangeOrderChangeOrderId && this.cmdCreateInvoiceChangeOrderBilledAmount);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-lg font-semibold">${msg['new.title']}</h2><h3 class="mt-4 text-base font-medium">${msg['create.form']}</h3>${this.renderCreateFeedback()}<label class="mt-4 block text-sm">${msg['create.billed']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdCreateInvoiceChangeOrderBilledAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderBilledAmountChange(event)} required /></label><p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${this.cmdCreateInvoiceChangeOrderInvoiceId ? msg['context.invoice'] : msg['picker.chooseInvoice']} · ${this.cmdCreateInvoiceChangeOrderChangeOrderId ? msg['context.order'] : msg['picker.chooseOrder']}</p><button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdCreateInvoiceChangeOrderState === 'loading'} @click=${(event: Event) => this.handleCmdCreateInvoiceChangeOrderClick(event)}>${this.cmdCreateInvoiceChangeOrderState === 'loading' ? msg['feedback.saving'] : msg['create.action']}</button></section>`;
}
renderCreateFeedback() {
const msg = this.msg;
return this.cmdCreateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceChangeOrderError || msg['create.error']}</p>` : nothing;
}
renderUpdateForm() {
const msg = this.msg;
const ready = Boolean(this.cmdUpdateInvoiceChangeOrderInvoiceChangeOrderId && this.cmdUpdateInvoiceChangeOrderInvoiceId && this.cmdUpdateInvoiceChangeOrderChangeOrderId && this.cmdUpdateInvoiceChangeOrderBilledAmount);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-lg font-semibold">${msg['workbench.title']}</h2><h3 class="mt-4 text-base font-medium">${msg['update.form']}</h3>${this.renderUpdateFeedback()}<p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${ready ? `${msg['context.invoice']} · ${msg['context.order']}` : msg['feedback.selectRecord']}</p><label class="mt-4 block text-sm">${msg['update.billed']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdUpdateInvoiceChangeOrderBilledAmount} @input=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderBilledAmountChange(event)} required /></label><button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdUpdateInvoiceChangeOrderState === 'loading'} @click=${(event: Event) => this.handleCmdUpdateInvoiceChangeOrderClick(event)}>${this.cmdUpdateInvoiceChangeOrderState === 'loading' ? msg['feedback.saving'] : msg['update.action']}</button></section>`;
}
renderUpdateFeedback() {
const msg = this.msg;
return this.cmdUpdateInvoiceChangeOrderState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateInvoiceChangeOrderState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateInvoiceChangeOrderError || msg['update.error']}</p>` : nothing;
}
renderPickers() {
const msg = this.msg;
const invoices: QryInvoicePickerOutput[] = this.qryInvoicePickerData ?? [];
const orders: QryChangeOrderPickerOutput[] = this.qryChangeOrderPickerData ?? [];
return html`<section class="grid gap-6 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-alt-bg,#f1f5f9)] p-5 md:grid-cols-2"><div><h2 class="text-lg font-semibold">${msg['invoices.title']}</h2><p class="mt-2 text-sm">${msg['invoices.list.title']}</p>${this.qryInvoicePickerState === 'loading' ? html`<p>${msg['feedback.loading']}</p>` : invoices.length === 0 ? html`<p>${msg['invoices.empty']}</p>` : html`<div class="mt-3 space-y-2">${invoices.map((invoice: QryInvoicePickerOutput) => html`<button class="block w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-3 text-left" @click=${() => { this.setCmdCreateInvoiceChangeOrderInvoiceId(invoice.invoiceId); this.setCmdUpdateInvoiceChangeOrderInvoiceId(invoice.invoiceId); }}><span class="font-medium">${invoice.commercialReference}</span><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${invoice.amount} · ${invoice.status}</span></button>`)}</div>`}</div><div><h2 class="text-lg font-semibold">${msg['orders.title']}</h2><p class="mt-2 text-sm">${msg['orders.list.title']}</p>${this.qryChangeOrderPickerState === 'loading' ? html`<p>${msg['feedback.loading']}</p>` : orders.length === 0 ? html`<p>${msg['orders.empty']}</p>` : html`<div class="mt-3 space-y-2">${orders.map((order: QryChangeOrderPickerOutput) => html`<button class="block w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-3 text-left" @click=${() => { this.setCmdCreateInvoiceChangeOrderChangeOrderId(order.changeOrderId); this.setCmdUpdateInvoiceChangeOrderChangeOrderId(order.changeOrderId); }}><span class="font-medium">${order.description}</span><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${order.changeAmount} · ${order.status}</span></button>`)}</div>`}</div></section>`;
}
}
