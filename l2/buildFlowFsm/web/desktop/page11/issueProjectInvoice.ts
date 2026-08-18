/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/issueProjectInvoice.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmIssueProjectInvoiceBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.js';
import type { QryLocateClientOutput, QryLocateProjectOutput, QryInspectClientBillingSummaryOutput } from '/_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'clientSectionTitle': m['section.issueProjectInvoice.locateClient.title'],
'clientOrganismTitle': m['organism.issueProjectInvoice.qryLocateClient.title'],
'clientListTitle': m['intent.issueProjectInvoice.qryLocateClient.list.title'],
'clientEmpty': m['intent.issueProjectInvoice.qryLocateClient.list.empty'],
'clientId': m['intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label'],
'clientName': m['intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label'],
'clientEmail': m['intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label'],
'clientPhone': m['intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label'],
'projectSectionTitle': m['section.issueProjectInvoice.locateProject.title'],
'projectOrganismTitle': m['organism.issueProjectInvoice.qryLocateProject.title'],
'projectListTitle': m['intent.issueProjectInvoice.qryLocateProject.list.title'],
'projectEmpty': m['intent.issueProjectInvoice.qryLocateProject.list.empty'],
'projectId': m['intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label'],
'projectClientId': m['intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label'],
'projectName': m['intent.issueProjectInvoice.qryLocateProject.list.column.name.label'],
'projectAddress': m['intent.issueProjectInvoice.qryLocateProject.list.column.address.label'],
'projectStatus': m['intent.issueProjectInvoice.qryLocateProject.list.column.status.label'],
'projectBudget': m['intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label'],
'projectStart': m['intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label'],
'projectEnd': m['intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label'],
'summarySectionTitle': m['section.issueProjectInvoice.inspectClientBillingSummary.title'],
'summaryOrganismTitle': m['organism.issueProjectInvoice.qryInspectClientBillingSummary.title'],
'summaryListTitle': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title'],
'summaryEmpty': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty'],
'summaryClientId': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label'],
'summaryProjectId': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label'],
'summaryChanges': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'summaryInvoices': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'summaryChangeAmount': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'summaryBillable': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'summaryInvoiced': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'summaryAvailable': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
'createSectionTitle': m['section.issueProjectInvoice.createInvoice.title'],
'createOrganismTitle': m['organism.issueProjectInvoice.cmdCreateInvoice.title'],
'createFormTitle': m['intent.issueProjectInvoice.cmdCreateInvoice.form.title'],
'createAction': m['intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice'],
'createReference': m['intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label'],
'createAmount': m['intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label'],
'handoffSectionTitle': m['section.issueProjectInvoice.handoffInvoiceToClient.title'],
'handoffOrganismTitle': m['organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title'],
'handoffFormTitle': m['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title'],
'handoffAction': m['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient'],
'handoffReference': m['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label'],
'handoffAmount': m['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label'],
'createSuccess': m['action.cmdCreateInvoice.success'],
'createError': m['action.cmdCreateInvoice.error'],
'handoffSuccess': m['action.cmdHandoffInvoiceToClient.success'],
'handoffError': m['action.cmdHandoffInvoiceToClient.error']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'pageTitle': 'Emissão de fatura', 'refresh': 'Atualizar', 'chooseClient': 'Selecione um cliente', 'routeProject': 'Obra em contexto', 'invoiceId': 'Fatura selecionada', 'loading': 'Carregando…'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'pageTitle': 'Emissão de fatura', 'refresh': 'Atualizar', 'chooseClient': 'Selecione um cliente', 'routeProject': 'Obra em contexto', 'invoiceId': 'Fatura selecionada', 'loading': 'Carregando…'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'pageTitle': 'Invoice issuance', 'refresh': 'Refresh', 'chooseClient': 'Select a client', 'routeProject': 'Project in context', 'invoiceId': 'Selected invoice', 'loading': 'Loading…'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'pageTitle': 'Emisión de factura', 'refresh': 'Actualizar', 'chooseClient': 'Seleccione un cliente', 'routeProject': 'Obra en contexto', 'invoiceId': 'Factura seleccionada', 'loading': 'Cargando…'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--issue-project-invoice-102046')
export class BuildFlowFsmDesktopPage11IssueProjectInvoicePage extends BuildFlowFsmIssueProjectInvoiceBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><main class="max-w-6xl mx-auto px-4 py-6 space-y-6"><h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['pageTitle']}</h1>${this.renderClients()}${this.renderProjects()}${this.renderSummary()}${this.renderCreate()}${this.renderHandoff()}</main></div>`;
}
renderClients() {
const msg = this.msg;
const rows: QryLocateClientOutput[] = this.qryLocateClientData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['clientSectionTitle']}</h2><div class="flex items-center justify-between"><h3 class="font-medium">${msg['clientListTitle']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryLocateClientClick}>${msg['refresh']}</button></div>${this.qryLocateClientState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="py-3 text-[var(--text-muted,#64748b)]">${msg['clientEmpty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr><th>${msg['clientId']}</th><th>${msg['clientName']}</th><th>${msg['clientEmail']}</th><th>${msg['clientPhone']}</th></tr></thead><tbody>${rows.map((row: QryLocateClientOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td>${row.clientId}</td><td>${row.clientName}</td><td>${row.contactEmail}</td><td>${row.contactPhone}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderProjects() {
const msg = this.msg;
const rows: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['projectSectionTitle']}</h2><div class="flex items-center justify-between"><h3 class="font-medium">${msg['projectListTitle']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryLocateProjectClick}>${msg['refresh']}</button></div>${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="py-3 text-[var(--text-muted,#64748b)]">${msg['projectEmpty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr><th>${msg['projectId']}</th><th>${msg['projectClientId']}</th><th>${msg['projectName']}</th><th>${msg['projectAddress']}</th><th>${msg['projectStatus']}</th><th>${msg['projectBudget']}</th><th>${msg['projectStart']}</th><th>${msg['projectEnd']}</th></tr></thead><tbody>${rows.map((row: QryLocateProjectOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td>${row.projectId}</td><td>${row.clientId}</td><td>${row.name}</td><td>${row.address}</td><td>${row.status}</td><td>${row.authorizedBudget}</td><td>${row.plannedStartDate}</td><td>${row.plannedEndDate}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderSummary() {
const msg = this.msg;
const data: QryInspectClientBillingSummaryOutput | null = this.qryInspectClientBillingSummaryData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['summarySectionTitle']}</h2><h3 class="font-medium">${msg['summaryListTitle']}</h3><div class="mb-4"><label class="block text-sm">${msg['chooseClient']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectClientBillingSummaryClientBillingSummaryClientId} @change=${this.handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange}><option value="">${msg['chooseClient']}</option>${(this.qryLocateClientData ?? []).map((row: QryLocateClientOutput) => html`<option value=${row.clientId}>${row.clientName}</option>`)}</select></label><button class="mt-2 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryInspectClientBillingSummaryClick}>${msg['refresh']}</button></div>${this.qryInspectClientBillingSummaryState === 'loading' ? html`<p>${msg['loading']}</p>` : data === null ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['summaryEmpty']}</p>` : html`<dl class="grid gap-3 sm:grid-cols-2"><div><dt>${msg['summaryClientId']}</dt><dd>${data.clientId}</dd></div><div><dt>${msg['summaryProjectId']}</dt><dd>${data.projectId}</dd></div><div><dt>${msg['summaryChanges']}</dt><dd>${data.approvedChangeOrderReferences}</dd></div><div><dt>${msg['summaryInvoices']}</dt><dd>${data.invoiceReferences}</dd></div><div><dt>${msg['summaryChangeAmount']}</dt><dd>${data.approvedChangeOrderAmount}</dd></div><div><dt>${msg['summaryBillable']}</dt><dd>${data.billableAmount}</dd></div><div><dt>${msg['summaryInvoiced']}</dt><dd>${data.invoicedAmount}</dd></div><div><dt>${msg['summaryAvailable']}</dt><dd>${data.clientAvailableAmount}</dd></div></dl>`}</section>`;
}
renderCreate() {
const msg = this.msg;
const loading = this.cmdCreateInvoiceState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['createSectionTitle']}</h2><h3 class="font-medium">${msg['createFormTitle']}</h3><div class="grid gap-4 sm:grid-cols-2"><div><label class="block text-sm">${msg['chooseClient']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceClientClientId} @change=${this.handleCmdCreateInvoiceClientClientIdChange}><option value="">${msg['chooseClient']}</option>${(this.qryLocateClientData ?? []).map((row: QryLocateClientOutput) => html`<option value=${row.clientId}>${row.clientName}</option>`)}</select></label></div><div><span class="block text-sm">${msg['routeProject']}</span><span class="block rounded-md border border-[var(--border-subtle,#e2e8f0)] p-2">${this.cmdCreateInvoiceProjectProjectId || nothing}</span></div><label class="block text-sm">${msg['createReference']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceCommercialReference} @input=${this.handleCmdCreateInvoiceCommercialReferenceChange}></label><label class="block text-sm">${msg['createAmount']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceAmount} @input=${this.handleCmdCreateInvoiceAmountChange}></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading} @click=${this.handleCmdCreateInvoiceClick}>${loading ? msg['loading'] : msg['createAction']}</button>${this.cmdCreateInvoiceState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['createSuccess']}</p>` : this.cmdCreateInvoiceState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceError || msg['createError']}</p>` : nothing}</section>`;
}
renderHandoff() {
const msg = this.msg;
const loading = this.cmdHandoffInvoiceToClientState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['handoffSectionTitle']}</h2><h3 class="font-medium">${msg['handoffFormTitle']}</h3><div class="grid gap-4 sm:grid-cols-2"><div><span class="block text-sm">${msg['invoiceId']}</span><span class="block rounded-md border border-[var(--border-subtle,#e2e8f0)] p-2">${this.cmdHandoffInvoiceToClientInvoiceInvoiceId || nothing}</span></div><label class="block text-sm">${msg['handoffReference']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffInvoiceToClientCommercialReference} @input=${this.handleCmdHandoffInvoiceToClientCommercialReferenceChange}></label><label class="block text-sm">${msg['handoffAmount']}<input type="number" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffInvoiceToClientAmount} @input=${this.handleCmdHandoffInvoiceToClientAmountChange}></label></div><button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading} @click=${this.handleCmdHandoffInvoiceToClientClick}>${loading ? msg['loading'] : msg['handoffAction']}</button>${this.cmdHandoffInvoiceToClientState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['handoffSuccess']}</p>` : this.cmdHandoffInvoiceToClientState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffInvoiceToClientError || msg['handoffError']}</p>` : nothing}</section>`;
}
}
