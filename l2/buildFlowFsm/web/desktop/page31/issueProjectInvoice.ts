/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/issueProjectInvoice.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmIssueProjectInvoiceBase, messages as sharedMessages, type MessageType, type QryLocateClientOutput, type QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'client.title': m['section.issueProjectInvoice.locateClient.title'],
'client.list.title': m['intent.issueProjectInvoice.qryLocateClient.list.title'],
'client.empty': m['intent.issueProjectInvoice.qryLocateClient.list.empty'],
'client.id': m['intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label'],
'client.name': m['intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label'],
'client.email': m['intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label'],
'client.phone': m['intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label'],
'project.title': m['section.issueProjectInvoice.locateProject.title'],
'project.list.title': m['intent.issueProjectInvoice.qryLocateProject.list.title'],
'project.empty': m['intent.issueProjectInvoice.qryLocateProject.list.empty'],
'project.id': m['intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label'],
'project.client': m['intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.issueProjectInvoice.qryLocateProject.list.column.name.label'],
'project.address': m['intent.issueProjectInvoice.qryLocateProject.list.column.address.label'],
'project.status': m['intent.issueProjectInvoice.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label'],
'summary.title': m['section.issueProjectInvoice.inspectClientBillingSummary.title'],
'summary.list.title': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title'],
'summary.empty': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty'],
'summary.client': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label'],
'summary.project': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label'],
'summary.changes': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'summary.invoices': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'summary.changeAmount': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'summary.billable': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'summary.invoiced': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'summary.available': m['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
'issue.title': m['section.issueProjectInvoice.createInvoice.title'],
'issue.form.title': m['intent.issueProjectInvoice.cmdCreateInvoice.form.title'],
'issue.action': m['intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice'],
'issue.reference': m['intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label'],
'issue.amount': m['intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label'],
'handoff.title': m['section.issueProjectInvoice.handoffInvoiceToClient.title'],
'handoff.action': m['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient'],
'create.success': m['action.cmdCreateInvoice.success'],
'create.error': m['action.cmdCreateInvoice.error'],
'handoff.success': m['action.cmdHandoffInvoiceToClient.success'],
'handoff.error': m['action.cmdHandoffInvoiceToClient.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'choose.client': 'Selecione um cliente para começar.', 'choose.project': 'Selecione a obra correspondente.',
'loading': 'Carregando…', 'select': 'Selecionar', 'change': 'Alterar', 'required': 'Preenchimento obrigatório.',
'context': 'Contexto da emissão', 'review': 'Confira os valores antes de concluir.', 'invoice.created': 'Fatura emitida',
'available.hint': 'Saldo disponível para faturar', 'handoff.hint': 'Disponibilize esta fatura ao cliente.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'choose.client': 'Selecione um cliente para começar.', 'choose.project': 'Selecione a obra correspondente.',
'loading': 'Carregando…', 'select': 'Selecionar', 'change': 'Alterar', 'required': 'Preenchimento obrigatório.',
'context': 'Contexto da emissão', 'review': 'Confira os valores antes de concluir.', 'invoice.created': 'Fatura emitida',
'available.hint': 'Saldo disponível para faturar', 'handoff.hint': 'Disponibilize esta fatura ao cliente.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'choose.client': 'Select a client to begin.', 'choose.project': 'Select the matching project.',
'loading': 'Loading…', 'select': 'Select', 'change': 'Change', 'required': 'Required.',
'context': 'Issuance context', 'review': 'Review the amounts before finishing.', 'invoice.created': 'Invoice issued',
'available.hint': 'Available amount to invoice', 'handoff.hint': 'Make this invoice available to the client.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'choose.client': 'Seleccione un cliente para comenzar.', 'choose.project': 'Seleccione la obra correspondiente.',
'loading': 'Cargando…', 'select': 'Seleccionar', 'change': 'Cambiar', 'required': 'Obligatorio.',
'context': 'Contexto de emisión', 'review': 'Revise los valores antes de terminar.', 'invoice.created': 'Factura emitida',
'available.hint': 'Saldo disponible para facturar', 'handoff.hint': 'Ponga esta factura a disposición del cliente.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--issue-project-invoice-102046')
export class BuildFlowFsmDesktopPage31IssueProjectInvoicePage extends BuildFlowFsmIssueProjectInvoiceBase {
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
return html`<main class="mx-auto max-w-7xl space-y-6 bg-[var(--page-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]">
  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['context']}</p>
  ${this.renderClients()}
  ${this.renderProjects()}
  ${this.renderSummary()}
  ${this.renderIssuance()}
  ${this.renderHandoff()}
</main>`;
}
renderClients() {
const msg = this.msg;
const clients: QryLocateClientOutput[] = this.qryLocateClientData ?? [];
return html`<section class="space-y-3">
  <h2 class="text-xl font-bold">${msg['client.title']}</h2>
  ${this.qryLocateClientState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
  <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
  ${clients.length === 0 && this.qryLocateClientState === 'success' ? html`<p>${msg['client.empty']}</p>` : clients.map((client: QryLocateClientOutput) => {
    const row = client as unknown as Record<string, unknown>;
    const id = String(row['clientId'] ?? '');
    const selected = id !== '' && id === this.cmdCreateInvoiceClientClientId;
    return html`<button type="button" class="rounded-lg border p-4 text-left ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-default,#cbd5e1)]'}" @click=${() => { this.setCmdCreateInvoiceClientClientId(id); this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(id); }}>
      <strong>${String(row['clientName'] ?? '')}</strong><span class="block text-sm text-[var(--text-muted,#64748b)]">${String(row['contactEmail'] ?? '')}</span>
    </button>`;
  })}</div>
</section>`;
}
renderProjects() {
const msg = this.msg;
const projects: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
return html`<section class="space-y-3">
  <h2 class="text-xl font-bold">${msg['project.title']}</h2>
  ${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
  ${projects.length === 0 && this.qryLocateProjectState === 'success' ? html`<p>${msg['project.empty']}</p>` : nothing}
  <div class="overflow-x-auto"><table class="w-full border-collapse text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-3 text-left">${msg['project.name']}</th><th class="p-3 text-left">${msg['project.status']}</th><th class="p-3 text-left">${msg['project.budget']}</th></tr></thead><tbody>${projects.map((project: QryLocateProjectOutput) => { const row = project as unknown as Record<string, unknown>; const id = String(row['projectId'] ?? ''); const selected = id !== '' && id === this.cmdCreateInvoiceProjectProjectId; return html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${selected ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}"><td class="p-3"><button type="button" class="text-left font-semibold text-[var(--link-text,#2563eb)]" @click=${() => this.setCmdCreateInvoiceProjectProjectId(id)}>${String(row['name'] ?? '')}</button><span class="block text-xs text-[var(--text-muted,#64748b)]">${String(row['address'] ?? '')}</span></td><td class="p-3">${String(row['status'] ?? '')}</td><td class="p-3">${String(row['authorizedBudget'] ?? '')}</td></tr>`; })}</tbody></table></div>
</section>`;
}
renderSummary() {
const msg = this.msg;
const summary = this.qryInspectClientBillingSummaryData as unknown as Record<string, unknown> | null;
if (!this.cmdCreateInvoiceClientClientId) return html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['choose.client']}</p>`;
return html`<section class="space-y-3 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-alt-bg,#f8fafc)] p-5"><h2 class="text-xl font-bold">${msg['summary.title']}</h2><button type="button" class="rounded-lg bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryInspectClientBillingSummaryClick(event)}>${this.qryInspectClientBillingSummaryState === 'loading' ? msg['loading'] : msg['select']}</button>${summary ? html`<dl class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><div><dt>${msg['summary.changeAmount']}</dt><dd class="font-semibold">${String(summary['approvedChangeOrderAmount'] ?? '')}</dd></div><div><dt>${msg['summary.billable']}</dt><dd class="font-semibold">${String(summary['billableAmount'] ?? '')}</dd></div><div><dt>${msg['summary.invoiced']}</dt><dd class="font-semibold">${String(summary['invoicedAmount'] ?? '')}</dd></div><div><dt>${msg['available.hint']}</dt><dd class="font-semibold text-[var(--status-success-text,#166534)]">${String(summary['clientAvailableAmount'] ?? '')}</dd></div></dl>` : html`<p>${msg['summary.empty']}</p>`}</section>`;
}
renderIssuance() {
const msg = this.msg;
if (!this.cmdCreateInvoiceClientClientId || !this.cmdCreateInvoiceProjectProjectId) return nothing;
const busy = this.cmdCreateInvoiceState === 'loading';
const valid = this.cmdCreateInvoiceCommercialReference.trim() !== '' && this.cmdCreateInvoiceAmount.trim() !== '';
return html`<section class="space-y-4 rounded-lg border border-[var(--border-default,#cbd5e1)] p-5"><h2 class="text-xl font-bold">${msg['issue.title']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['review']}</p><label class="block">${msg['issue.reference']}<input class="mt-1 w-full rounded-lg border bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdCreateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdCreateInvoiceCommercialReferenceChange(event)} required></label><label class="block">${msg['issue.amount']}<input class="mt-1 w-full rounded-lg border bg-[var(--input-bg,#ffffff)] p-3" type="number" min="0" .value=${this.cmdCreateInvoiceAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceAmountChange(event)} required></label><button type="button" class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-5 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !valid} @click=${(event: Event) => this.handleCmdCreateInvoiceClick(event)}>${busy ? msg['loading'] : msg['issue.action']}</button>${this.cmdCreateInvoiceState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateInvoiceState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceError || msg['create.error']}</p>` : nothing}</section>`;
}
renderHandoff() {
const msg = this.msg;
const invoice = this.cmdCreateInvoiceOutput as unknown as Record<string, unknown> | null;
if (!invoice) return nothing;
const invoiceId = String(invoice['invoiceId'] ?? '');
const reference = String(invoice['commercialReference'] ?? this.cmdCreateInvoiceCommercialReference);
const amount = String(invoice['amount'] ?? this.cmdCreateInvoiceAmount);
const busy = this.cmdHandoffInvoiceToClientState === 'loading';
return html`<section class="space-y-4 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-alt-bg,#f8fafc)] p-5"><h2 class="text-xl font-bold">${msg['invoice.created']}</h2><p>${reference} · ${amount}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['handoff.hint']}</p><button type="button" class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-5 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || invoiceId === ''} @click=${() => { this.setCmdHandoffInvoiceToClientInvoiceInvoiceId(invoiceId); this.setCmdHandoffInvoiceToClientCommercialReference(reference); this.setCmdHandoffInvoiceToClientAmount(amount); this.handleCmdHandoffInvoiceToClientClick(); }}>${busy ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffInvoiceToClientState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffInvoiceToClientState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffInvoiceToClientError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}
