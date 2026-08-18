/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/invoiceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'records.title': m['section.invoiceCatalogue.recordList.title'],
'records.listTitle': m['intent.invoiceCatalogue.qryListInvoice.list.title'],
'records.empty': m['intent.invoiceCatalogue.qryListInvoice.list.empty'],
'records.invoiceId': m['intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label'],
'records.clientId': m['intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label'],
'records.projectId': m['intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label'],
'records.reference': m['intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label'],
'records.amount': m['intent.invoiceCatalogue.qryListInvoice.list.column.amount.label'],
'records.status': m['intent.invoiceCatalogue.qryListInvoice.list.column.status.label'],
'create.title': m['organism.invoiceCatalogue.cmdCreateInvoice.title'],
'create.formTitle': m['intent.invoiceCatalogue.cmdCreateInvoice.form.title'],
'create.action': m['intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice'],
'create.reference': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label'],
'create.amount': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label'],
'client.title': m['organism.invoiceCatalogue.qryClientPicker.title'],
'client.listTitle': m['intent.invoiceCatalogue.qryClientPicker.list.title'],
'client.empty': m['intent.invoiceCatalogue.qryClientPicker.list.empty'],
'client.id': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label'],
'client.name': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label'],
'project.title': m['organism.invoiceCatalogue.qryProjectPicker.title'],
'project.listTitle': m['intent.invoiceCatalogue.qryProjectPicker.list.title'],
'project.empty': m['intent.invoiceCatalogue.qryProjectPicker.list.empty'],
'project.id': m['intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label'],
'project.name': m['intent.invoiceCatalogue.qryProjectPicker.list.column.name.label'],
'update.title': m['organism.invoiceCatalogue.cmdUpdateInvoice.title'],
'update.formTitle': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.title'],
'update.action': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice'],
'update.reference': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label'],
'update.amount': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label'],
'update.status': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label'],
'delete.title': m['organism.invoiceCatalogue.cmdDeleteInvoice.title'],
'delete.action': m['intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice'],
'create.success': m['action.cmdCreateInvoice.success'],
'create.error': m['action.cmdCreateInvoice.error'],
'update.success': m['action.cmdUpdateInvoice.success'],
'update.error': m['action.cmdUpdateInvoice.error'],
'delete.success': m['action.cmdDeleteInvoice.success'],
'delete.error': m['action.cmdDeleteInvoice.error'],
'workbench.title': m['section.invoiceCatalogue.invoiceWorkbench.title'],
'issuance.title': m['section.invoiceCatalogue.invoiceIssuance.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'editor.chooseClient': 'Selecione o cliente',
'editor.chooseProject': 'Selecione a obra',
'editor.noSelection': 'Selecione uma fatura para editar.',
'editor.required': 'Obrigatório',
'editor.selected': 'Fatura selecionada',
'editor.new': 'Nova emissão',
'feedback.loading': 'Processando…',
'feedback.retry': 'Tentar novamente',
'delete.confirm': 'Confirma a exclusão desta fatura?'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'editor.chooseClient': 'Selecione o cliente', 'editor.chooseProject': 'Selecione a obra', 'editor.noSelection': 'Selecione uma fatura para editar.', 'editor.required': 'Obrigatório', 'editor.selected': 'Fatura selecionada', 'editor.new': 'Nova emissão', 'feedback.loading': 'Processando…', 'feedback.retry': 'Tentar novamente', 'delete.confirm': 'Confirma a exclusão desta fatura?'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'editor.chooseClient': 'Choose a client', 'editor.chooseProject': 'Choose a project', 'editor.noSelection': 'Select an invoice to edit.', 'editor.required': 'Required', 'editor.selected': 'Selected invoice', 'editor.new': 'New invoice', 'feedback.loading': 'Processing…', 'feedback.retry': 'Retry', 'delete.confirm': 'Do you want to delete this invoice?'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'editor.chooseClient': 'Seleccione el cliente', 'editor.chooseProject': 'Seleccione la obra', 'editor.noSelection': 'Seleccione una factura para editar.', 'editor.required': 'Obligatorio', 'editor.selected': 'Factura seleccionada', 'editor.new': 'Nueva factura', 'feedback.loading': 'Procesando…', 'feedback.retry': 'Intentar de nuevo', 'delete.confirm': '¿Confirma la eliminación de esta factura?'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--invoice-catalogue-102046')
export class BuildFlowFsmDesktopPage31InvoiceCataloguePage extends BuildFlowFsmInvoiceCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderList(msg)}
<div class="grid gap-6 lg:grid-cols-2">${this.renderEditor(msg)}${this.renderCreate(msg)}</div>
</div>`;
}
renderList(msg: PageMessageType) {
const rows: QryListInvoiceOutput[] = this.qryListInvoiceData ?? [];
return html`<section class="space-y-3" aria-labelledby="invoice-list-title">
<div class="flex items-center justify-between"><h2 id="invoice-list-title" class="text-xl font-bold">${msg['records.title']}</h2>
<button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-4 py-2" @click=${(event: Event) => this.handleQryListInvoiceClick(event)} ?disabled=${this.qryListInvoiceState === 'loading'}>${this.qryListInvoiceState === 'loading' ? msg['feedback.loading'] : msg['records.listTitle']}</button></div>
${this.qryListInvoiceState === 'loading' ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6">${msg['feedback.loading']}</div>` : rows.length === 0 ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6">${msg['records.empty']}</div>` : html`<div class="overflow-x-auto rounded-lg border border-[var(--border-default,#e2e8f0)]"><table class="min-w-full"><thead class="bg-[var(--surface-alt-bg,#f8fafc)]"><tr>${['records.invoiceId','records.clientId','records.projectId','records.reference','records.amount','records.status'].map((key: string) => html`<th class="px-4 py-3 text-left font-bold">${msg[key as keyof PageMessageType]}</th>`)}<th></th></tr></thead><tbody>${rows.map((row: QryListInvoiceOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)] ${this.cmdUpdateInvoiceInvoiceId === row.invoiceId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}"><td class="px-4 py-3">${row.invoiceId}</td><td class="px-4 py-3">${row.clientId}</td><td class="px-4 py-3">${row.projectId}</td><td class="px-4 py-3">${row.commercialReference}</td><td class="px-4 py-3">${row.amount}</td><td class="px-4 py-3">${row.status}</td><td class="px-4 py-3"><button class="text-[var(--link-text,#2563eb)]" @click=${() => { this.setCmdUpdateInvoiceInvoiceId(row.invoiceId); this.setCmdUpdateInvoiceClientId(row.clientId); this.setCmdUpdateInvoiceProjectId(row.projectId); this.setCmdUpdateInvoiceCommercialReference(row.commercialReference); this.setCmdUpdateInvoiceAmount(String(row.amount)); this.setCmdUpdateInvoiceStatus(row.status); this.setCmdDeleteInvoiceInvoiceId(row.invoiceId); }}>${msg['editor.selected']}</button></td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderEditor(msg: PageMessageType) {
const selected = this.cmdUpdateInvoiceInvoiceId.length > 0;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-labelledby="invoice-editor-title"><h2 id="invoice-editor-title" class="text-xl font-bold">${msg['workbench.title']}</h2>${selected ? html`<div class="space-y-4"><p class="text-[var(--text-muted,#64748b)]">${msg['editor.selected']}: ${this.cmdUpdateInvoiceInvoiceId}</p><div class="grid gap-4 sm:grid-cols-2"><label>${msg['update.reference']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdUpdateInvoiceCommercialReferenceChange(event)} required></label><label>${msg['update.amount']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceAmount} @input=${(event: Event) => this.handleCmdUpdateInvoiceAmountChange(event)} required></label></div><div class="grid gap-4 sm:grid-cols-2"><label>${msg['client.name']}<select class="mt-1 w-full rounded-md border p-2" .value=${this.cmdUpdateInvoiceClientId} @change=${(event: Event) => this.handleCmdUpdateInvoiceClientIdChange(event)}>${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><label>${msg['project.name']}<select class="mt-1 w-full rounded-md border p-2" .value=${this.cmdUpdateInvoiceProjectId} @change=${(event: Event) => this.handleCmdUpdateInvoiceProjectIdChange(event)}>${(this.qryProjectPickerData ?? []).map((project: QryProjectPickerOutput) => html`<option value=${project.projectId}>${project.name}</option>`)}</select></label></div><p class="text-[var(--text-muted,#64748b)]">${msg['update.status']}: ${this.cmdUpdateInvoiceStatus}</p>${this.cmdUpdateInvoiceState === 'error' ? html`<p>${this.cmdUpdateInvoiceError || msg['update.error']}</p>` : this.cmdUpdateInvoiceState === 'success' ? html`<p>${msg['update.success']}</p>` : nothing}<div class="flex gap-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${(event: Event) => this.handleCmdUpdateInvoiceClick(event)} ?disabled=${this.cmdUpdateInvoiceState === 'loading'}>${this.cmdUpdateInvoiceState === 'loading' ? msg['feedback.loading'] : msg['update.action']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" @click=${(event: Event) => { if (window.confirm(msg['delete.confirm'])) this.handleCmdDeleteInvoiceClick(event); }} ?disabled=${this.cmdDeleteInvoiceState === 'loading'}>${this.cmdDeleteInvoiceState === 'loading' ? msg['feedback.loading'] : msg['delete.action']}</button></div>${this.cmdDeleteInvoiceState === 'error' ? html`<p>${this.cmdDeleteInvoiceError || msg['delete.error']}</p>` : this.cmdDeleteInvoiceState === 'success' ? html`<p>${msg['delete.success']}</p>` : nothing}</div>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['editor.noSelection']}</p>`}</section>`;
}
renderCreate(msg: PageMessageType) {
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-labelledby="invoice-create-title"><h2 id="invoice-create-title" class="text-xl font-bold">${msg['issuance.title']}</h2><h3 class="font-bold">${msg['create.formTitle']}</h3><div class="grid gap-4 sm:grid-cols-2"><label>${msg['client.name']}<select class="mt-1 w-full rounded-md border p-2" .value=${this.cmdCreateInvoiceClientClientId} @change=${(event: Event) => this.handleCmdCreateInvoiceClientClientIdChange(event)} required><option value="">${msg['editor.chooseClient']}</option>${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><span class="text-[var(--text-muted,#64748b)]">${msg['project.name']}</span><label>${msg['create.reference']}<input class="mt-1 w-full rounded-md border p-2" .value=${this.cmdCreateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdCreateInvoiceCommercialReferenceChange(event)} required></label><label>${msg['create.amount']}<input class="mt-1 w-full rounded-md border p-2" .value=${this.cmdCreateInvoiceAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceAmountChange(event)} required></label></div>${this.cmdCreateInvoiceState === 'error' ? html`<p>${this.cmdCreateInvoiceError || msg['create.error']}</p>` : this.cmdCreateInvoiceState === 'success' ? html`<p>${msg['create.success']}</p>` : nothing}<button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${(event: Event) => this.handleCmdCreateInvoiceClick(event)} ?disabled=${this.cmdCreateInvoiceState === 'loading'}>${this.cmdCreateInvoiceState === 'loading' ? msg['feedback.loading'] : msg['create.action']}</button></section>`;
}
}
