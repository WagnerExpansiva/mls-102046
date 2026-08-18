/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/invoiceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.js';
import type { QryListInvoiceOutput, QryClientPickerOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/invoiceCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'recordList': m['section.invoiceCatalogue.recordList.title'],
'invoiceList': m['organism.invoiceCatalogue.qryListInvoice.title'],
'invoiceListTitle': m['intent.invoiceCatalogue.qryListInvoice.list.title'],
'invoiceListEmpty': m['intent.invoiceCatalogue.qryListInvoice.list.empty'],
'invoiceId': m['intent.invoiceCatalogue.qryListInvoice.list.column.invoiceId.label'],
'clientId': m['intent.invoiceCatalogue.qryListInvoice.list.column.clientId.label'],
'projectId': m['intent.invoiceCatalogue.qryListInvoice.list.column.projectId.label'],
'commercialReference': m['intent.invoiceCatalogue.qryListInvoice.list.column.commercialReference.label'],
'amount': m['intent.invoiceCatalogue.qryListInvoice.list.column.amount.label'],
'status': m['intent.invoiceCatalogue.qryListInvoice.list.column.status.label'],
'deleteTitle': m['organism.invoiceCatalogue.cmdDeleteInvoice.title'],
'deleteAction': m['intent.invoiceCatalogue.cmdDeleteInvoice.form.action.cmdDeleteInvoice'],
'recordForm': m['section.invoiceCatalogue.recordForm.title'],
'createTitle': m['organism.invoiceCatalogue.cmdCreateInvoice.title'],
'createForm': m['intent.invoiceCatalogue.cmdCreateInvoice.form.title'],
'createAction': m['intent.invoiceCatalogue.cmdCreateInvoice.form.action.cmdCreateInvoice'],
'createReference': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.commercialReference.label'],
'createAmount': m['intent.invoiceCatalogue.cmdCreateInvoice.form.field.amount.label'],
'clients': m['organism.invoiceCatalogue.qryClientPicker.title'],
'clientList': m['intent.invoiceCatalogue.qryClientPicker.list.title'],
'clientEmpty': m['intent.invoiceCatalogue.qryClientPicker.list.empty'],
'clientOptionId': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientId.label'],
'clientName': m['intent.invoiceCatalogue.qryClientPicker.list.column.clientName.label'],
'projects': m['organism.invoiceCatalogue.qryProjectPicker.title'],
'projectList': m['intent.invoiceCatalogue.qryProjectPicker.list.title'],
'projectEmpty': m['intent.invoiceCatalogue.qryProjectPicker.list.empty'],
'projectOptionId': m['intent.invoiceCatalogue.qryProjectPicker.list.column.projectId.label'],
'projectName': m['intent.invoiceCatalogue.qryProjectPicker.list.column.name.label'],
'updateTitle': m['organism.invoiceCatalogue.cmdUpdateInvoice.title'],
'updateForm': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.title'],
'updateAction': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.action.cmdUpdateInvoice'],
'updateReference': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.commercialReference.label'],
'updateAmount': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.amount.label'],
'updateStatus': m['intent.invoiceCatalogue.cmdUpdateInvoice.form.field.status.label'],
'createSuccess': m['action.cmdCreateInvoice.success'],
'createError': m['action.cmdCreateInvoice.error'],
'updateSuccess': m['action.cmdUpdateInvoice.success'],
'updateError': m['action.cmdUpdateInvoice.error'],
'deleteSuccess': m['action.cmdDeleteInvoice.success'],
'deleteError': m['action.cmdDeleteInvoice.error'],
'workbench': m['section.invoiceCatalogue.invoiceWorkbench.title'],
'issuance': m['section.invoiceCatalogue.invoiceIssuance.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'newRecord': 'Nova fatura','chooseClient': 'Selecione um cliente','loading': 'Carregando…','selected': 'Fatura selecionada','required': 'Obrigatório','confirmDelete': 'Confirma a exclusão desta fatura?','retry': 'Tentar novamente','saving': 'Salvando…','creating': 'Emitindo…','selectRecord': 'Selecione uma fatura para corrigir ou remover','routeContext': 'A obra será definida pelo contexto atual'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'newRecord': 'Nova fatura','chooseClient': 'Selecione um cliente','loading': 'Carregando…','selected': 'Fatura selecionada','required': 'Obrigatório','confirmDelete': 'Confirma a exclusão desta fatura?','retry': 'Tentar novamente','saving': 'Salvando…','creating': 'Emitindo…','selectRecord': 'Selecione uma fatura para corrigir ou remover','routeContext': 'A obra será definida pelo contexto atual'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'newRecord': 'New invoice','chooseClient': 'Select a client','loading': 'Loading…','selected': 'Selected invoice','required': 'Required','confirmDelete': 'Confirm deletion of this invoice?','retry': 'Try again','saving': 'Saving…','creating': 'Issuing…','selectRecord': 'Select an invoice to correct or remove','routeContext': 'The project will be defined by the current context'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'newRecord': 'Nueva factura','chooseClient': 'Seleccione un cliente','loading': 'Cargando…','selected': 'Factura seleccionada','required': 'Obligatorio','confirmDelete': '¿Confirma eliminar esta factura?','retry': 'Intentar de nuevo','saving': 'Guardando…','creating': 'Emitiendo…','selectRecord': 'Seleccione una factura para corregir o eliminar','routeContext': 'La obra se definirá por el contexto actual'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--invoice-catalogue-102046')
export class BuildFlowFsmDesktopPage21InvoiceCataloguePage extends BuildFlowFsmInvoiceCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderWorkbench()}${this.renderCreate()}${this.renderClientPicker()}${this.renderProjectPicker()}
</main>`;
}
renderWorkbench() {
const msg = this.msg;
return html`<section class="space-y-4" aria-label=${msg['workbench']}>
<div class="flex items-center justify-between"><h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['recordList']}</h2>
<button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-4 py-2" @click=${(event: Event) => this.handleQryListInvoiceClick(event)}>${msg['invoiceList']}</button></div>
${this.qryListInvoiceState === 'loading' ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : nothing}
${this.qryListInvoiceState !== 'loading' && this.qryListInvoiceData.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['invoiceListEmpty']}</p>` : nothing}
<div class="grid gap-4 md:grid-cols-2">
<div class="overflow-auto rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
<table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['invoiceId'],msg['clientId'],msg['projectId'],msg['commercialReference'],msg['amount'],msg['status']].map((label: string) => html`<th class="px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">${label}</th>`)}</tr></thead><tbody>
${this.qryListInvoiceData.map((invoice: QryListInvoiceOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#eef2ff)]" @click=${() => { this.setCmdUpdateInvoiceInvoiceId(String(invoice.invoiceId)); this.setCmdUpdateInvoiceClientId(String(invoice.clientId)); this.setCmdUpdateInvoiceProjectId(String(invoice.projectId)); this.setCmdUpdateInvoiceCommercialReference(String(invoice.commercialReference)); this.setCmdUpdateInvoiceAmount(String(invoice.amount)); this.setCmdUpdateInvoiceStatus(String(invoice.status)); this.setCmdDeleteInvoiceInvoiceId(String(invoice.invoiceId)); }}><td class="px-3 py-2">${invoice.invoiceId}</td><td class="px-3 py-2">${invoice.clientId}</td><td class="px-3 py-2">${invoice.projectId}</td><td class="px-3 py-2">${invoice.commercialReference}</td><td class="px-3 py-2">${invoice.amount}</td><td class="px-3 py-2">${invoice.status}</td></tr>`)}</tbody></table>
</div>${this.renderDetail()}
</div></section>`;
}
renderDetail() {
const msg = this.msg;
const selected = this.cmdUpdateInvoiceInvoiceId.length > 0;
return selected ? html`<section class="rounded-lg border border-[var(--selected-border,#6366f1)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-label=${msg['selected']}>
<h3 class="text-lg font-semibold">${msg['updateTitle']}</h3>
<div class="grid gap-4"><label>${msg['updateReference']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceCommercialReference} required aria-required="true" @input=${(event: Event) => this.handleCmdUpdateInvoiceCommercialReferenceChange(event)}></label>
<label>${msg['updateAmount']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInvoiceAmount} required aria-required="true" @input=${(event: Event) => this.handleCmdUpdateInvoiceAmountChange(event)}></label></div>
<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['updateStatus']}: ${this.cmdUpdateInvoiceStatus}</p>
${this.cmdUpdateInvoiceState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateInvoiceError || msg['updateError']}</p><button @click=${(event: Event) => this.handleCmdUpdateInvoiceClick(event)}>${msg['retry']}</button>` : nothing}
${this.cmdUpdateInvoiceState === 'success' ? html`<p class="text-[var(--status-success-text,#15803d)]">${msg['updateSuccess']}</p>` : nothing}
<div class="flex gap-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdUpdateInvoiceState === 'loading'} @click=${(event: Event) => this.handleCmdUpdateInvoiceClick(event)}>${this.cmdUpdateInvoiceState === 'loading' ? msg['saving'] : msg['updateAction']}</button>
<button class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" ?disabled=${this.cmdDeleteInvoiceState === 'loading'} @click=${(event: Event) => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteInvoiceClick(event); }}>${this.cmdDeleteInvoiceState === 'loading' ? msg['loading'] : msg['deleteAction']}</button></div>
${this.cmdDeleteInvoiceState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteInvoiceError || msg['deleteError']}</p>` : nothing}${this.cmdDeleteInvoiceState === 'success' ? html`<p class="text-[var(--status-success-text,#15803d)]">${msg['deleteSuccess']}</p>` : nothing}
</section>` : html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5 text-[var(--text-muted,#64748b)]">${msg['selectRecord']}</section>`;
}
renderCreate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-label=${msg['issuance']}><h2 class="text-xl font-semibold">${msg['createTitle']}</h2><h3 class="text-base font-medium">${msg['createForm']}</h3>
<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['routeContext']}</p><label>${msg['clientId']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceClientClientId} required @change=${(event: Event) => this.handleCmdCreateInvoiceClientClientIdChange(event)}><option value="">${msg['chooseClient']}</option>${this.qryClientPickerData.map((client: QryClientPickerOutput) => html`<option value=${String(client.clientId)}>${client.clientName}</option>`)}</select></label>
<label>${msg['createReference']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceCommercialReference} required @input=${(event: Event) => this.handleCmdCreateInvoiceCommercialReferenceChange(event)}></label><label>${msg['createAmount']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceAmount} required @input=${(event: Event) => this.handleCmdCreateInvoiceAmountChange(event)}></label>
${this.cmdCreateInvoiceState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateInvoiceError || msg['createError']}</p>` : nothing}${this.cmdCreateInvoiceState === 'success' ? html`<p class="text-[var(--status-success-text,#15803d)]">${msg['createSuccess']}</p>` : nothing}<button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdCreateInvoiceState === 'loading'} @click=${(event: Event) => this.handleCmdCreateInvoiceClick(event)}>${this.cmdCreateInvoiceState === 'loading' ? msg['creating'] : msg['createAction']}</button></section>`;
}
renderClientPicker() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><h3 class="font-medium">${msg['clients']}</h3>${this.qryClientPickerData.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['clientEmpty']}</p>` : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['clientList']}</p>`}</section>`;
}
renderProjectPicker() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><h3 class="font-medium">${msg['projects']}</h3>${this.qryProjectPickerData.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['projectEmpty']}</p>` : html`<ul class="mt-2 grid gap-2 sm:grid-cols-2">${this.qryProjectPickerData.map((project: QryProjectPickerOutput) => html`<li class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3"><span class="font-medium">${project.name}</span><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${project.projectId}</span></li>`)}</ul>`}</section>`;
}
}
