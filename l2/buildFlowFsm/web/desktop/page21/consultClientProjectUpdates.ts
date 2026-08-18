/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/consultClientProjectUpdates.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultClientProjectUpdatesBase } from '/_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.js';

const collab_i18n_pt = {
  'section.consultClientProjectUpdates.locateProject.title': 'Obra selecionada',
  'organism.consultClientProjectUpdates.qryLocateProject.title': 'Escolha uma obra',
  'intent.consultClientProjectUpdates.qryLocateProject.list.title': 'Obras associadas ao cliente',
  'intent.consultClientProjectUpdates.qryLocateProject.list.empty': 'Nenhuma obra associada foi encontrada.',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.projectId.label': 'Identificador da obra',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.clientId.label': 'Cliente',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label': 'Obra',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.address.label': 'Endereço',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.status.label': 'Status',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.authorizedBudget.label': 'Orçamento aprovado',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedStartDate.label': 'Início planejado',
  'intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedEndDate.label': 'Fim planejado',
  'section.consultClientProjectUpdates.inspectStatusReport.title': 'Atualização da obra',
  'organism.consultClientProjectUpdates.qryInspectStatusReport.title': 'Relatório publicado',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.title': 'Andamento comunicado',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.empty': 'Ainda não há relatório publicado para esta obra.',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.statusReportId.label': 'Relatório',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.projectId.label': 'Obra',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.status.label': 'Status',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.title.label': 'Título',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.content.label': 'Atualização',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.communicatedRisks.label': 'Riscos comunicados',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedAt.label': 'Gerado em',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedByUserId.label': 'Gerado por',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedAt.label': 'Publicado em',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedByUserId.label': 'Publicado por',
  'intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.withdrawnAt.label': 'Retirado em',
  'section.consultClientProjectUpdates.inspectClientBillingSummary.title': 'Faturamento da obra',
  'organism.consultClientProjectUpdates.qryInspectClientBillingSummary.title': 'Resumo financeiro',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.title': 'Valores da obra',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.empty': 'Ainda não há resumo de faturamento para esta obra.',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientId.label': 'Cliente',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.projectId.label': 'Obra',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label': 'Alterações aprovadas',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoiceReferences.label': 'Faturas',
  'intent.consultClientProjectUpdates.qryInspectClientProjectUpdates.list.column.approvedChangeOrderAmount.label': 'Alterações aprovadas',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label': 'Valor aprovado',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.billableAmount.label': 'Valor faturável',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoicedAmount.label': 'Valor faturado',
  'intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label': 'Valor disponível',
  'section.consultClientProjectUpdates.projectContextSection.title': 'Contexto da obra',
  'section.consultClientProjectUpdates.projectUpdatesSection.title': 'Atualizações publicadas',
  'section.consultClientProjectUpdates.projectOverview.title': 'Visão geral',
  'section.consultClientProjectUpdates.projectInsights.title': 'Indicadores principais',
  'ui.consultClientProjectUpdates.chooseProject': 'Selecione uma obra',
  'ui.consultClientProjectUpdates.load': 'Consultar',
  'ui.consultClientProjectUpdates.loading': 'Carregando…',
  'ui.consultClientProjectUpdates.noSelection': 'Selecione uma obra para consultar seus dados.',
  'ui.consultClientProjectUpdates.notAvailable': 'Não informado',
} as const;

type MessageType = typeof collab_i18n_pt;
const collab_i18n_messages: { pt: MessageType } = { pt: collab_i18n_pt };

@customElement('build-flow-fsm--web--desktop--page21--consult-client-project-updates--102046')
export class BuildFlowFsmConsultClientProjectUpdatesDesktopPage21ConsultClientProjectUpdatesPage extends BuildFlowFsmConsultClientProjectUpdatesBase {
  get msg(): MessageType {
    return collab_i18n_messages.pt;
  }

  render() {
    const msg = this.msg;
    const projects = this.qryLocateProjectData ?? [];
    const selectedProjectId = this.qryInspectStatusReportStatusReportStatusReportId;
    const toRecord = (value: unknown): Record<string, unknown> =>
      typeof value === 'object' && value !== null ? value as Record<string, unknown> : {};
    const text = (value: unknown): string => value === null || value === undefined || value === '' ? msg['ui.consultClientProjectUpdates.notAvailable'] : String(value);
    const money = (value: unknown): string => typeof value === 'number' ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : text(value);
    const project = projects.find((item: unknown) => {
      const row = toRecord(item);
      return String(row['projectId'] ?? '') === selectedProjectId;
    });
    const projectRecord = toRecord(project);
    const report = toRecord(this.qryInspectStatusReportData);
    const billing = toRecord(this.qryInspectClientBillingSummaryData);
    const projectLabel = text(projectRecord['name']);
    const reportLoading = this.qryInspectStatusReportState === 'loading';
    const billingLoading = this.qryInspectClientBillingSummaryState === 'loading';
    const canConsult = selectedProjectId.length > 0;

    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4" aria-labelledby="project-selection">
          <h2 id="project-selection" class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.consultClientProjectUpdates.locateProject.title']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['organism.consultClientProjectUpdates.qryLocateProject.title']}</p>
          ${this.qryLocateProjectState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['ui.consultClientProjectUpdates.loading']}</p>` : nothing}
          ${projects.length === 0 && this.qryLocateProjectState === 'success' ? html`<p>${msg['intent.consultClientProjectUpdates.qryLocateProject.list.empty']}</p>` : nothing}
          <div class="flex flex-col gap-3 md:flex-row md:items-end">
            <label class="flex-1 text-sm font-medium">${msg['intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label']}
              <select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${selectedProjectId} @change=${(event: Event) => this.handleQryInspectStatusReportStatusReportStatusReportIdChange(event)}>
                <option value="">${msg['ui.consultClientProjectUpdates.chooseProject']}</option>
                ${projects.map((item: unknown) => { const row = toRecord(item); const id = String(row['projectId'] ?? ''); return html`<option value=${id}>${text(row['name'])}</option>`; })}
              </select>
            </label>
            <button class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!canConsult || reportLoading} @click=${(event: Event) => this.handleQryInspectStatusReportClick(event)}>${reportLoading ? msg['ui.consultClientProjectUpdates.loading'] : msg['ui.consultClientProjectUpdates.load']}</button>
            <button class="rounded bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50" ?disabled=${!canConsult || billingLoading} @click=${(event: Event) => this.handleQryInspectClientBillingSummaryClick(event)}>${billingLoading ? msg['ui.consultClientProjectUpdates.loading'] : msg['ui.consultClientProjectUpdates.load']}</button>
          </div>
          ${canConsult ? html`<div class="grid gap-3 md:grid-cols-3"><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label']}</dt><dd>${projectLabel}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryLocateProject.list.column.status.label']}</dt><dd>${text(projectRecord['status'])}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryLocateProject.list.column.address.label']}</dt><dd>${text(projectRecord['address'])}</dd></div></div>` : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['ui.consultClientProjectUpdates.noSelection']}</p>`}
        </section>

        <div class="grid gap-6 lg:grid-cols-2">
          <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 space-y-4">
            <h2 class="text-xl font-semibold">${msg['section.consultClientProjectUpdates.inspectStatusReport.title']}</h2>
            ${this.qryInspectStatusReportState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${msg['intent.consultClientProjectUpdates.qryInspectStatusReport.list.empty']}</p>` : nothing}
            ${this.qryInspectStatusReportState === 'loading' ? html`<div class="animate-pulse space-y-2"><div class="h-5 rounded bg-[var(--selected-bg,#e2e8f0)]"></div><div class="h-16 rounded bg-[var(--selected-bg,#e2e8f0)]"></div></div>` : nothing}
            ${this.qryInspectStatusReportData && !reportLoading ? html`<article class="space-y-3"><h3 class="text-lg font-semibold">${text(report['title'])}</h3><p class="whitespace-pre-wrap">${text(report['content'])}</p><div class="rounded border border-[var(--border-subtle,#e2e8f0)] p-3"><strong>${msg['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.communicatedRisks.label']}</strong><p>${text(report['communicatedRisks'])}</p></div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedAt.label']}: ${text(report['publishedAt'])}</p></article>` : nothing}
          </section>
          <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 space-y-4">
            <h2 class="text-xl font-semibold">${msg['section.consultClientProjectUpdates.inspectClientBillingSummary.title']}</h2>
            ${this.qryInspectClientBillingSummaryState === 'loading' ? html`<div class="animate-pulse space-y-2"><div class="h-5 rounded bg-[var(--selected-bg,#e2e8f0)]"></div><div class="h-16 rounded bg-[var(--selected-bg,#e2e8f0)]"></div></div>` : nothing}
            ${this.qryInspectClientBillingSummaryData && !billingLoading ? html`<dl class="grid gap-4 sm:grid-cols-2"><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label']}</dt><dd class="text-lg font-semibold">${money(billing['approvedChangeOrderAmount'])}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.billableAmount.label']}</dt><dd class="text-lg font-semibold">${money(billing['billableAmount'])}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoicedAmount.label']}</dt><dd class="text-lg font-semibold">${money(billing['invoicedAmount'])}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label']}</dt><dd class="text-lg font-semibold">${money(billing['clientAvailableAmount'])}</dd></div><div class="sm:col-span-2"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label']}</dt><dd>${text(billing['approvedChangeOrderReferences'])}</dd></div><div class="sm:col-span-2"><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoiceReferences.label']}</dt><dd>${text(billing['invoiceReferences'])}</dd></div></dl>` : nothing}
          </section>
        </div>
      </main>
    `;
  }
}
