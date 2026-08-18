/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/issueProjectInvoice.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmIssueProjectInvoiceBase } from '/_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.js';

const collab_i18n_pt = {
  'section.issueProjectInvoice.locateClient.title': 'Cliente',
  'organism.issueProjectInvoice.qryLocateClient.title': 'Selecione o cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.title': 'Clientes disponíveis',
  'intent.issueProjectInvoice.qryLocateClient.list.empty': 'Nenhum cliente encontrado.',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label': 'Identificador',
  'intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label': 'Cliente',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label': 'E-mail',
  'intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label': 'Telefone',
  'section.issueProjectInvoice.locateProject.title': 'Obra',
  'organism.issueProjectInvoice.qryLocateProject.title': 'Selecione a obra',
  'intent.issueProjectInvoice.qryLocateProject.list.title': 'Obras disponíveis',
  'intent.issueProjectInvoice.qryLocateProject.list.empty': 'Nenhuma obra encontrada.',
  'intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label': 'Identificador',
  'intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label': 'Cliente',
  'intent.issueProjectInvoice.qryLocateProject.list.column.name.label': 'Obra',
  'intent.issueProjectInvoice.qryLocateProject.list.column.address.label': 'Endereço',
  'intent.issueProjectInvoice.qryLocateProject.list.column.status.label': 'Status',
  'intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label': 'Orçamento autorizado',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label': 'Início previsto',
  'intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label': 'Término previsto',
  'section.issueProjectInvoice.inspectClientBillingSummary.title': 'Resumo de faturamento',
  'organism.issueProjectInvoice.qryInspectClientBillingSummary.title': 'Confira os valores da obra',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title': 'Resumo financeiro',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty': 'Resumo de faturamento indisponível.',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label': 'Cliente',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label': 'Obra',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Aditivos aprovados',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Faturas',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Aditivos aprovados',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Valor faturável',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Valor já faturado',
  'intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Saldo disponível do cliente',
  'section.issueProjectInvoice.createInvoice.title': 'Emissão',
  'organism.issueProjectInvoice.cmdCreateInvoice.title': 'Prepare a nova fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.title': 'Dados da fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice': 'Emitir a fatura',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label': 'Referência comercial',
  'intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label': 'Valor da fatura',
  'section.issueProjectInvoice.handoffInvoiceToClient.title': 'Disponibilização',
  'organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title': 'Disponibilize a fatura ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title': 'Próximo passo',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient': 'Disponibilizar ao cliente',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label': 'Referência comercial',
  'intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label': 'Valor da fatura',
  'action.cmdCreateInvoice.success': 'Fatura emitida com sucesso.',
  'action.cmdCreateInvoice.error': 'Não foi possível emitir a fatura.',
  'action.cmdHandoffInvoiceToClient.success': 'Fatura disponibilizada ao cliente.',
  'action.cmdHandoffInvoiceToClient.error': 'Não foi possível disponibilizar a fatura.',
  'section.issueProjectInvoice.billing-context.title': 'Contexto de faturamento',
  'section.issueProjectInvoice.invoice-issuance.title': 'Emitir fatura',
  'section.issueProjectInvoice.invoice-handoff.title': 'Disponibilizar fatura',
  'section.issueProjectInvoice.invoicePreparation.title': 'Preparação da emissão',
  'section.issueProjectInvoice.invoiceHandoff.title': 'Entrega ao cliente'
} as const;

type CollabI18nMessage = typeof collab_i18n_pt;
const collab_i18n: Record<string, CollabI18nMessage> = {
  pt: collab_i18n_pt,
  'pt-BR': collab_i18n_pt,
  en: collab_i18n_pt,
  es: collab_i18n_pt
};

@customElement('build-flow-fsm--web--desktop--page21--issue-project-invoice-102046')
export class BuildFlowFsmIssueProjectInvoiceDesktopPage21IssueProjectInvoicePage extends BuildFlowFsmIssueProjectInvoiceBase {
  get msg(): CollabI18nMessage {
    return collab_i18n_pt;
  }

  render() {
    const msg = this.msg;
    const clients = this.qryLocateClientData;
    const projects = this.qryLocateProjectData;
    const summary = this.qryInspectClientBillingSummaryData as unknown as Record<string, unknown> | null;
    const invoice = this.cmdCreateInvoiceOutput as unknown as Record<string, unknown> | null;
    const summaryRows = summary ? [summary] : [];
    const invoiceId = invoice?.['invoiceId'];
    const canIssue = this.cmdCreateInvoiceClientClientId.length > 0 &&
      this.cmdCreateInvoiceProjectProjectId.length > 0 &&
      this.cmdCreateInvoiceCommercialReference.trim().length > 0 &&
      this.cmdCreateInvoiceAmount.trim().length > 0;
    const canHandoff = typeof invoiceId === 'string' && invoiceId.length > 0 &&
      this.cmdHandoffInvoiceToClientCommercialReference.trim().length > 0 &&
      this.cmdHandoffInvoiceToClientAmount.trim().length > 0;

    return html`
      <main class="min-h-screen bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
        <div class="mx-auto max-w-7xl space-y-6">
          <div class="grid gap-6 lg:grid-cols-[16rem_1fr]">
            <aside class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
              <ol class="space-y-4">
                ${[
                  msg['section.issueProjectInvoice.locateClient.title'],
                  msg['section.issueProjectInvoice.locateProject.title'],
                  msg['section.issueProjectInvoice.inspectClientBillingSummary.title'],
                  msg['section.issueProjectInvoice.invoicePreparation.title'],
                  msg['section.issueProjectInvoice.invoiceHandoff.title']
                ].map((title: string, index: number) => html`
                  <li class="flex items-start gap-3 ${index === 0 ? 'text-[var(--selected-text,#0f172a)]' : 'text-[var(--text-muted,#64748b)]'}">
                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${index === 0 ? 'bg-[var(--selected-bg,#e2e8f0)]' : 'bg-[var(--surface-bg,#ffffff)]'} font-semibold">${index + 1}</span>
                    <span class="pt-1 text-sm">${title}</span>
                  </li>
                `)}
              </ol>
            </aside>

            <div class="space-y-6">
              <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
                <h2 class="mb-4 text-xl font-semibold">${msg['organism.issueProjectInvoice.qryLocateClient.title']}</h2>
                <div class="mb-4 flex justify-end">
                  <button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateClientClick(event)}>${msg['intent.issueProjectInvoice.qryLocateClient.list.title']}</button>
                </div>
                ${this.qryLocateClientState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['intent.issueProjectInvoice.qryLocateClient.list.title']}</p>` : nothing}
                ${clients.length === 0 && this.qryLocateClientState === 'success' ? html`<p>${msg['intent.issueProjectInvoice.qryLocateClient.list.empty']}</p>` : nothing}
                ${clients.length > 0 ? html`
                  <div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label']}</th><th class="p-2">${msg['intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label']}</th><th class="p-2"></th></tr></thead><tbody>
                    ${clients.map((client: unknown) => { const row = client as unknown as Record<string, unknown>; const id = String(row['clientId'] ?? ''); return html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${String(row['clientName'] ?? '')}</td><td class="p-2">${String(row['contactEmail'] ?? '')}</td><td class="p-2"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" value=${id} @click=${(event: Event) => { this.setCmdCreateInvoiceClientClientId(id); this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(id); this.handleQryInspectClientBillingSummaryClick(event); }}>Selecionar</button></td></tr>`; })}
                  </tbody></table></div>` : nothing}
              </section>

              <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
                <h2 class="mb-4 text-xl font-semibold">${msg['organism.issueProjectInvoice.qryLocateProject.title']}</h2>
                <button class="mb-4 rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['intent.issueProjectInvoice.qryLocateProject.list.title']}</button>
                ${projects.length === 0 && this.qryLocateProjectState === 'success' ? html`<p>${msg['intent.issueProjectInvoice.qryLocateProject.list.empty']}</p>` : nothing}
                <div class="grid gap-3 md:grid-cols-2">${projects.map((project: unknown) => { const row = project as unknown as Record<string, unknown>; const id = String(row['projectId'] ?? ''); return html`<button class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-left ${this.cmdCreateInvoiceProjectProjectId === id ? 'bg-[var(--selected-bg,#e2e8f0)]' : 'bg-[var(--surface-bg,#ffffff)]'}" @click=${() => this.setCmdCreateInvoiceProjectProjectId(id)}><strong>${String(row['name'] ?? '')}</strong><span class="mt-1 block text-sm text-[var(--text-muted,#64748b)]">${String(row['status'] ?? '')}</span></button>`; })}</div>
              </section>

              ${this.qryInspectClientBillingSummaryState === 'loading' ? html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-5"><h2>${msg['organism.issueProjectInvoice.qryInspectClientBillingSummary.title']}</h2><p>${msg['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title']}</p></section>` : nothing}
              ${summaryRows.length > 0 ? html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="mb-4 text-xl font-semibold">${msg['organism.issueProjectInvoice.qryInspectClientBillingSummary.title']}</h2><div class="grid gap-4 sm:grid-cols-3"><div><span class="block text-sm text-[var(--text-muted,#64748b)]">${msg['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label']}</span><strong>${String(summary?.['billableAmount'] ?? '')}</strong></div><div><span class="block text-sm text-[var(--text-muted,#64748b)]">${msg['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label']}</span><strong>${String(summary?.['invoicedAmount'] ?? '')}</strong></div><div><span class="block text-sm text-[var(--text-muted,#64748b)]">${msg['intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label']}</span><strong>${String(summary?.['clientAvailableAmount'] ?? '')}</strong></div></div></section>` : nothing}

              <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="mb-4 text-xl font-semibold">${msg['organism.issueProjectInvoice.cmdCreateInvoice.title']}</h2><div class="grid gap-4 md:grid-cols-2"><label class="space-y-1"><span>${msg['intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceCommercialReference} @input=${(event: Event) => this.handleCmdCreateInvoiceCommercialReferenceChange(event)} required></label><label class="space-y-1"><span>${msg['intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInvoiceAmount} @input=${(event: Event) => this.handleCmdCreateInvoiceAmountChange(event)} required></label></div><button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!canIssue || this.cmdCreateInvoiceState === 'loading'} @click=${(event: Event) => this.handleCmdCreateInvoiceClick(event)}>${msg['intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice']}</button>${this.cmdCreateInvoiceState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateInvoice.success']}</p>` : nothing}${this.cmdCreateInvoiceState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInvoiceError || msg['action.cmdCreateInvoice.error']}</p>` : nothing}</section>

              ${invoice ? html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="mb-4 text-xl font-semibold">${msg['organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title']}</h2><p class="mb-4">${msg['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title']}: ${String(invoice['commercialReference'] ?? this.cmdCreateInvoiceCommercialReference)} — ${String(invoice['amount'] ?? this.cmdCreateInvoiceAmount)}</p><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!canHandoff || this.cmdHandoffInvoiceToClientState === 'loading'} @click=${(event: Event) => this.handleCmdHandoffInvoiceToClientClick(event)}>${msg['intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient']}</button>${this.cmdHandoffInvoiceToClientState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['action.cmdHandoffInvoiceToClient.success']}</p>` : nothing}${this.cmdHandoffInvoiceToClientState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffInvoiceToClientError || msg['action.cmdHandoffInvoiceToClient.error']}</p>` : nothing}</section>` : nothing}
            </div>
          </div>
        </div>
      </main>`;
  }
}
