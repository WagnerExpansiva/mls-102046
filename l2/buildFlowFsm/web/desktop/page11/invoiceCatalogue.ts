/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/invoiceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.js';
import type { QryListInvoiceOutput, QryClientPickerOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'list.section': m['section.invoiceCatalogue.recordList.title'],
'list.organism': m['organism.invoiceCatalogue.qryListInvoice.title'],
'list.title': m['intent.invoiceCatalogue.qryListInvoice.list.title'],
'list.empty': m['intent.invoiceCatalogue.qryListInvoice.list.empty'],
'list.invoiceId': m['intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label'],
'list.clientId': m['intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label'],
'list.projectId': m['intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label'],
'list.reference': m['intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label'],
'list.amount': m['intent.invoiceCatalogue.qryListInvoice.list.column.amount.label'],
'list.status': m['intent.invoiceCatalogue.qryListInvoice.list.column.status.label'],
'create.organism': m['organism.invoiceCatalogue.cmdCreateInvoice.title'],
'create.title': m['intent.invoiceCatalogue.cmdCreateInvoice.form.title'],
'create.action': m['intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice'],
'create.reference': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label'],
'create.amount': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label'],
'client.organism': m['organism.invoiceCatalogue.qryClientPicker.title'],
'client.title': m['intent.invoiceCatalogue.qryClientPicker.list.title'],
'client.empty': m['intent.invoiceCatalogue.qryClientPicker.list.empty'],
'client.id': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label'],
'client.name': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label'],
'project.organism': m['organism.invoiceCatalogue.qryProjectPicker.title'],
'project.title': m['intent.invoiceCatalogue.qryProjectPicker.list.title'],
'project.empty': m['intent.invoiceCatalogue.qryProjectPicker.list.empty'],
'project.id': m['intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label'],
'project.name': m['intent.invoiceCatalogue.qryProjectPicker.list.column.name.label'],
'update.organism': m['organism.invoiceCatalogue.cmdUpdateInvoice.title'],
'update.title': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.title'],
'update.action': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice'],
'update.reference': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label'],
'update.amount': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label'],
'update.status': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label'],
'create.success': m['action.cmdCreateInvoice.success'],
'create.error': m['action.cmdCreateInvoice.error'],
'update.success': m['action.cmdUpdateInvoice.success'],
'update.error': m['action.cmdUpdateInvoice.error'],
'delete.success': m['action.cmdDeleteInvoice.success'],
'delete.error': m['action.cmdDeleteInvoice.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'page.title': 'Faturas', 'delete.title': 'Remover registro', 'delete.action': 'Excluir fatura', 'delete.confirm': 'Selecione uma fatura para excluir.', 'feedback.dismiss': 'Fechar mensagem', 'loading': 'Carregando…', 'select.client': 'Selecione um cliente', 'select.project': 'Selecione uma obra', 'select.invoice': 'Selecione uma fatura', 'create.project': 'Obra do contexto',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'page.title': 'Faturas', 'delete.title': 'Remover registro', 'delete.action': 'Excluir fatura', 'delete.confirm': 'Selecione uma fatura para excluir.', 'feedback.dismiss': 'Fechar mensagem', 'loading': 'Carregando…', 'select.client': 'Selecione um cliente', 'select.project': 'Selecione uma obra', 'select.invoice': 'Selecione uma fatura', 'create.project': 'Obra do contexto',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'page.title': 'Invoices', 'delete.title': 'Remove record', 'delete.action': 'Delete invoice', 'delete.confirm': 'Select an invoice to delete.', 'feedback.dismiss': 'Dismiss message', 'loading': 'Loading…', 'select.client': 'Select a client', 'select.project': 'Select a project', 'select.invoice': 'Select an invoice', 'create.project': 'Project from context',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'page.title': 'Facturas', 'delete.title': 'Eliminar registro', 'delete.action': 'Eliminar factura', 'delete.confirm': 'Seleccione una factura para eliminar.', 'feedback.dismiss': 'Cerrar mensaje', 'loading': 'Cargando…', 'select.client': 'Seleccione un cliente', 'select.project': 'Seleccione una obra', 'select.invoice': 'Seleccione una factura', 'create.project': 'Obra del contexto',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--invoice-catalogue-102046')
export class BuildFlowFsmDesktopPage11InvoiceCataloguePage extends BuildFlowFsmInvoiceCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6"><h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>${this.renderInvoiceList()}<div class="grid gap-6 lg:grid-cols-2">${this.renderCreateForm()}${this.renderUpdateForm()}</div>${this.renderPickers()}${this.renderDelete()}</div></main>`;
}
renderInvoiceList() {
const msg = this.msg;
const rows: QryListInvoiceOutput[] = this.qryListInvoiceData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.section']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListInvoiceClick(event)} ?disabled=${this.qryListInvoiceState === 'loading'}>${this.qryListInvoiceState === 'loading' ? msg['loading'] : msg['list.title']}</button></div>${this.qryListInvoiceState === 'loading' ? html`<p class="py-6 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="py-6 text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th>${msg['list.invoiceId']}</th><th>${msg['list.clientId']}</th><th>${msg['list.projectId']}</th><th>${msg['list.reference']}</th><th>${msg['list.amount']}</th><th>${msg['list.status']}</th></tr></thead><tbody>${rows.map((item: QryListInvoiceOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td><button class="text-[var(--link-text,#2563eb)]" @click=${() => { this.setCmdUpdateInvoiceInvoiceId(item.invoiceId); this.setCmdDeleteInvoiceInvoiceId(item.invoiceId); this.setCmdUpdateInvoiceClientId(item.clientId); this.setCmdUpdateInvoiceProjectId(item.projectId); this.setCmdUpdateInvoiceCommercialReference(item.commercialReference); this.setCmdUpdateInvoiceAmount(String(item.amount)); this.setCmdUpdateInvoiceStatus(item.status); }}>${item.invoiceId}</button></td><td>${item.clientId}</td><td>${item.projectId}</td><td>${item.commercialReference}</td><td>${item.amount}</td><td>${item.status}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['create.organism']}</h2><form class="mt-4 space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateInvoiceClick(event); }}><label class="block"><span>${msg['client.name']}</span><select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceClientClientId} @change=${(event: Event) => this.handleCmdCreateInvoiceClientClientIdChange(event)}><option value="">${msg['select.client']}</option>${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.project']}</p><label class="block"><span>${msg['create.reference']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdCreateInvoiceCommercialReferenceChange(event)} /></label><label class="block"><span>${msg['create.amount']}</span><input type="number" class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceAmountChange(event)} /></label><button type="submit" class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdCreateInvoiceState === 'loading'}>${this.cmdCreateInvoiceState === 'loading' ? msg['loading'] : msg['create.action']}</button>${this.renderCreateFeedback()}</form></section>`;
}
renderCreateFeedback() {
const msg = this.msg;
return this.cmdCreateInvoiceState === 'success' ? html`<div role="status" class="mt-3 rounded bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['create.success']} <button @click=${() => this.handleCmdCreateInvoiceClick()}>${msg['feedback.dismiss']}</button></div>` : this.cmdCreateInvoiceState === 'error' ? html`<div role="alert" class="mt-3 rounded bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceError || msg['create.error']} <button @click=${() => this.handleCmdCreateInvoiceClick()}>${msg['feedback.dismiss']}</button></div>` : nothing;
}
renderUpdateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['update.organism']}</h2><form class="mt-4 space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateInvoiceClick(event); }}><label class="block"><span>${msg['list.invoiceId']}</span><input readonly class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-2" .value=${this.cmdUpdateInvoiceInvoiceId} /></label><label class="block"><span>${msg['update.reference']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdUpdateInvoiceCommercialReferenceChange(event)} /></label><label class="block"><span>${msg['update.amount']}</span><input type="number" class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceAmount} @input=${(event: Event) => this.handleCmdUpdateInvoiceAmountChange(event)} /></label><label class="block"><span>${msg['update.status']}</span><input readonly class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-2" .value=${this.cmdUpdateInvoiceStatus} /></label><button type="submit" class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdUpdateInvoiceState === 'loading' || !this.cmdUpdateInvoiceInvoiceId}>${this.cmdUpdateInvoiceState === 'loading' ? msg['loading'] : msg['update.action']}</button>${this.cmdUpdateInvoiceState === 'success' ? html`<div role="status">${msg['update.success']} <button @click=${() => this.handleCmdUpdateInvoiceClick()}>${msg['feedback.dismiss']}</button></div>` : this.cmdUpdateInvoiceState === 'error' ? html`<div role="alert">${this.cmdUpdateInvoiceError || msg['update.error']} <button @click=${() => this.handleCmdUpdateInvoiceClick()}>${msg['feedback.dismiss']}</button></div>` : nothing}</form></section>`;
}
renderPickers() {
const msg = this.msg;
return html`<section class="grid gap-6 lg:grid-cols-2"><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><div class="flex justify-between"><h2 class="font-semibold">${msg['client.organism']}</h2><button @click=${(event: Event) => this.handleQryClientPickerClick(event)} ?disabled=${this.qryClientPickerState === 'loading'}>${msg['client.title']}</button></div>${(this.qryClientPickerData ?? []).length === 0 ? html`<p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['client.empty']}</p>` : html`<ul class="mt-2 space-y-1">${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<li><button class="text-[var(--link-text,#2563eb)]" @click=${() => { this.setCmdCreateInvoiceClientClientId(client.clientId); this.setCmdUpdateInvoiceClientId(client.clientId); }}>${client.clientName} (${client.clientId})</button></li>`)}</ul>`}</div><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><div class="flex justify-between"><h2 class="font-semibold">${msg['project.organism']}</h2><button @click=${(event: Event) => this.handleQryProjectPickerClick(event)} ?disabled=${this.qryProjectPickerState === 'loading'}>${msg['project.title']}</button></div>${(this.qryProjectPickerData ?? []).length === 0 ? html`<p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<ul class="mt-2 space-y-1">${(this.qryProjectPickerData ?? []).map((project: QryProjectPickerOutput) => html`<li><button class="text-[var(--link-text,#2563eb)]" @click=${() => { this.setCmdUpdateInvoiceProjectId(project.projectId); this.setCmdCreateInvoiceProjectProjectId(project.projectId); }}>${project.name} (${project.projectId})</button></li>`)}</ul>`}</div></section>`;
}
renderDelete() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['delete.title']}</h2><p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['delete.confirm']}</p><button class="mt-3 rounded px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]" ?disabled=${this.cmdDeleteInvoiceState === 'loading' || !this.cmdDeleteInvoiceInvoiceId} @click=${(event: Event) => { if (this.cmdDeleteInvoiceInvoiceId && window.confirm(`${msg['delete.action']}: ${this.cmdDeleteInvoiceInvoiceId}`)) this.handleCmdDeleteInvoiceClick(event); }}>${this.cmdDeleteInvoiceState === 'loading' ? msg['loading'] : msg['delete.action']}</button>${this.cmdDeleteInvoiceState === 'success' ? html`<div role="status">${msg['delete.success']}</div>` : this.cmdDeleteInvoiceState === 'error' ? html`<div role="alert">${this.cmdDeleteInvoiceError || msg['delete.error']}</div>` : nothing}</section>`;
}
}
