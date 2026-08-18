/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/approveChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmApproveChangeOrderBase } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';

type PageMessageType = {
  'section.approveChangeOrder.locateChangeOrder.title': string;
  'organism.approveChangeOrder.qryLocateChangeOrder.title': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': string;
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': string;
  'section.approveChangeOrder.approveChangeOrderDecision.title': string;
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': string;
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': string;
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': string;
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': string;
  'organism.approveChangeOrder.qryClientPicker.title': string;
  'intent.approveChangeOrder.qryClientPicker.list.title': string;
  'intent.approveChangeOrder.qryClientPicker.list.empty': string;
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': string;
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': string;
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': string;
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': string;
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': string;
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': string;
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': string;
  'action.cmdApproveChangeOrderDecision.success': string;
  'action.cmdApproveChangeOrderDecision.error': string;
  'action.cmdHandoffApprovedChangeOrderToBilling.success': string;
  'action.cmdHandoffApprovedChangeOrderToBilling.error': string;
  'section.approveChangeOrder.change-order-workspace.title': string;
  'section.approveChangeOrder.billing-handoff.title': string;
  'page21.chooseOrder': string;
  'page21.loading': string;
  'page21.identity': string;
  'page21.facts': string;
  'page21.narrative': string;
  'page21.trail': string;
  'page21.approveConfirm': string;
  'page21.noSelection': string;
  'page21.approved': string;
  'page21.clientLookup': string;
  'page21.billingReady': string;
};

const collab_i18n_pt: PageMessageType = {
  'section.approveChangeOrder.locateChangeOrder.title': 'Localizar ordem de mudança',
  'organism.approveChangeOrder.qryLocateChangeOrder.title': 'Ordens de mudança',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.title': 'Ordens pendentes',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.empty': 'Nenhuma ordem de mudança encontrada.',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label': 'Ordem',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label': 'Cliente',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label': 'Projeto',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label': 'Descrição',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label': 'Impacto no escopo',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label': 'Impacto no cronograma',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label': 'Valor da alteração',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label': 'Data de submissão',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label': 'Enviada para aprovação do cliente',
  'intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label': 'Status',
  'section.approveChangeOrder.approveChangeOrderDecision.title': 'Decisão',
  'organism.approveChangeOrder.cmdApproveChangeOrderDecision.title': 'Aprovação',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title': 'Escolha a transição',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision': 'Aprovar ordem',
  'intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label': 'Próximo status',
  'organism.approveChangeOrder.qryClientPicker.title': 'Referência do cliente',
  'intent.approveChangeOrder.qryClientPicker.list.title': 'Clientes',
  'intent.approveChangeOrder.qryClientPicker.list.empty': 'Nenhum cliente encontrado.',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientId.label': 'Identificador do cliente',
  'intent.approveChangeOrder.qryClientPicker.list.column.clientName.label': 'Nome do cliente',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label': 'E-mail',
  'intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label': 'Telefone',
  'section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title': 'Encaminhamento ao faturamento',
  'organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title': 'Dados para faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title': 'Impactos registrados',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling': 'Encaminhar ao faturamento',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label': 'Descrição',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label': 'Impacto no escopo',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label': 'Impacto no cronograma',
  'intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label': 'Valor da alteração',
  'action.cmdApproveChangeOrderDecision.success': 'A ordem de mudança foi aprovada.',
  'action.cmdApproveChangeOrderDecision.error': 'Não foi possível aprovar a ordem de mudança.',
  'action.cmdHandoffApprovedChangeOrderToBilling.success': 'A ordem aprovada foi encaminhada ao faturamento.',
  'action.cmdHandoffApprovedChangeOrderToBilling.error': 'Não foi possível encaminhar a ordem ao faturamento.',
  'section.approveChangeOrder.change-order-workspace.title': 'Revisão da ordem',
  'section.approveChangeOrder.billing-handoff.title': 'Próximo encaminhamento',
  'page21.chooseOrder': 'Selecione uma ordem para iniciar a revisão.',
  'page21.loading': 'Carregando…',
  'page21.identity': 'Identificação',
  'page21.facts': 'Fatos decisivos',
  'page21.narrative': 'Descrição e impactos',
  'page21.trail': 'Histórico',
  'page21.approveConfirm': 'Confirme a aprovação desta ordem para continuar.',
  'page21.noSelection': 'Nenhuma ordem selecionada.',
  'page21.approved': 'A decisão foi registrada. A ordem está aprovada.',
  'page21.clientLookup': 'Consultar clientes',
  'page21.billingReady': 'A ordem aprovada pode ser encaminhada ao faturamento.'
};

const collab_i18n_en: PageMessageType = collab_i18n_pt;
const collab_i18n: Record<string, PageMessageType> = { pt: collab_i18n_pt, en: collab_i18n_en };

@customElement('build-flow-fsm--web--desktop--page21--approve-change-order-102046')
export class BuildFlowFsmDesktopPage21ApproveChangeOrderPage extends BuildFlowFsmApproveChangeOrderBase {
  get msg(): PageMessageType {
    return collab_i18n['pt'];
  }

  render() {
    const msg = this.msg;
    const rows = this.qryLocateChangeOrderData ?? [];
    const asRecord = (value: unknown): Record<string, unknown> =>
      value !== null && typeof value === 'object' ? value as Record<string, unknown> : {};
    const text = (value: unknown): string => value === null || value === undefined ? '' : String(value);
    const selectedId = this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId;
    const selected = rows.find((item): boolean => text(asRecord(item)['changeOrderId']) === selectedId);
    const selectedRow = selected === undefined ? {} : asRecord(selected);
    const isApproved = text(selectedRow['status']).toLowerCase() === 'approved' || this.cmdApproveChangeOrderDecisionState === 'success';
    const canApprove = selected !== undefined && !isApproved && this.cmdApproveChangeOrderDecisionState !== 'loading';
    const canBill = selected !== undefined && isApproved && this.cmdHandoffApprovedChangeOrderToBillingState !== 'loading';

    return html`
      <main class="mx-auto grid max-w-7xl gap-6 p-6 text-[var(--text-default,#0f172a)] lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
        <section class="space-y-4" aria-labelledby="change-order-workspace">
          <h2 id="change-order-workspace" class="text-xl font-semibold">${msg['section.approveChangeOrder.change-order-workspace.title']}</h2>
          ${this.qryLocateChangeOrderState === 'loading' ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['page21.loading']}</p>` : nothing}
          <div class="overflow-x-auto rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
            <table class="w-full text-left text-sm">
              <thead class="border-b border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]">
                <tr>${['changeOrderId','clientRef','projectRef','status'].map((key: string) => html`<th class="px-4 py-3 font-semibold">${msg[`intent.approveChangeOrder.qryLocateChangeOrder.list.column.${key}.label` as keyof PageMessageType]}</th>`)}</tr>
              </thead>
              <tbody>
                ${rows.length === 0 && this.qryLocateChangeOrderState !== 'loading' ? html`<tr><td colspan="4" class="px-4 py-6 text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.empty']}</td></tr>` : rows.map((item): unknown => {
                  const row = asRecord(item);
                  const id = text(row['changeOrderId']);
                  const select = (event: Event): void => {
                    this.handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange(event);
                    this.handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange(event);
                    this.setCmdApproveChangeOrderDecisionClientClientId(text(row['clientId'] ?? row['clientRef']));
                    this.setCmdApproveChangeOrderDecisionProjectProjectId(text(row['projectId'] ?? row['projectRef']));
                    this.setCmdHandoffApprovedChangeOrderToBillingDescription(text(row['description']));
                    this.setCmdHandoffApprovedChangeOrderToBillingScopeImpact(text(row['scopeImpact']));
                    this.setCmdHandoffApprovedChangeOrderToBillingScheduleImpact(text(row['scheduleImpact']));
                    this.setCmdHandoffApprovedChangeOrderToBillingChangeAmount(text(row['changeAmount']));
                  };
                  return html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${id === selectedId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}" @click=${select}>
                    <td class="px-4 py-3 font-medium">${text(row['changeOrderId'])}</td><td class="px-4 py-3">${text(row['clientRef'] ?? row['clientName'])}</td><td class="px-4 py-3">${text(row['projectRef'] ?? row['projectName'])}</td><td class="px-4 py-3">${text(row['status'])}</td>
                  </tr>`;
                })}
              </tbody>
            </table>
          </div>
          <button class="rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event): void => this.handleQryLocateChangeOrderClick(event)}>${msg['organism.approveChangeOrder.qryLocateChangeOrder.title']}</button>
        </section>

        <section class="space-y-5" aria-live="polite">
          ${selected === undefined ? html`<p class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5 text-[var(--text-muted,#64748b)]">${msg['page21.chooseOrder']}</p>` : html`
            <article class="space-y-5 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6) ">
              <div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page21.identity']}</p><h3 class="text-2xl font-semibold">${text(selectedRow['changeOrderId'])}</h3><p>${text(selectedRow['clientRef'] ?? selectedRow['clientName'])} · ${text(selectedRow['projectRef'] ?? selectedRow['projectName'])}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${text(selectedRow['status'])}</p></div>
              <div><h3 class="mb-3 font-semibold">${msg['page21.facts']}</h3><dl class="grid grid-cols-2 gap-4 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label']}</dt><dd class="text-lg font-semibold">${text(selectedRow['changeAmount'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label']}</dt><dd>${text(selectedRow['submittedAt'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label']}</dt><dd>${text(selectedRow['forwardedForClientApprovalAt'])}</dd></div></dl></div>
              <div><h3 class="mb-2 font-semibold">${msg['page21.narrative']}</h3><dl class="space-y-2 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label']}</dt><dd>${text(selectedRow['description'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label']}</dt><dd>${text(selectedRow['scopeImpact'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label']}</dt><dd>${text(selectedRow['scheduleImpact'])}</dd></div></dl></div>
              <div><h3 class="mb-2 font-semibold">${msg['page21.trail']}</h3><p class="text-sm text-[var(--text-muted,#64748b)]">${text(selectedRow['submittedAt'])}</p></div>
              <div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-5">
                <h3 class="mb-2 font-semibold">${msg['section.approveChangeOrder.approveChangeOrderDecision.title']}</h3>
                ${this.cmdApproveChangeOrderDecisionState === 'success' ? html`<p class="rounded-lg bg-[var(--status-success-bg,#ecfdf5)] p-3 text-[var(--status-success-text,#166534)]">${msg['page21.approved']} ${msg['action.cmdApproveChangeOrderDecision.success']}</p>` : html`<p class="mb-3 text-sm">${msg['page21.approveConfirm']}</p><button ?disabled=${!canApprove} class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event): void => { if (confirm(msg['page21.approveConfirm'])) { this.setCmdApproveChangeOrderDecisionStatus('approved'); this.handleCmdApproveChangeOrderDecisionClick(event); } }}>${this.cmdApproveChangeOrderDecisionState === 'loading' ? msg['page21.loading'] : msg['intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision']}</button>`}
                ${this.cmdApproveChangeOrderDecisionState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdApproveChangeOrderDecisionError || msg['action.cmdApproveChangeOrderDecision.error']}</p>` : nothing}
              </div>
            </article>
            ${isApproved ? html`<section class="space-y-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><h2 class="text-xl font-semibold">${msg['section.approveChangeOrder.billing-handoff.title']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page21.billingReady']}</p><div class="space-y-3"><label class="block text-sm font-medium">${msg['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label']}<textarea class="mt-1 w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingDescription} @change=${(event: Event): void => this.handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange(event)}></textarea></label><label class="block text-sm font-medium">${msg['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label']}<textarea class="mt-1 w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScopeImpact} @change=${(event: Event): void => this.handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange(event)}></textarea></label><label class="block text-sm font-medium">${msg['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label']}<textarea class="mt-1 w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact} @change=${(event: Event): void => this.handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange(event)}></textarea></label><label class="block text-sm font-medium">${msg['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label']}<input class="mt-1 w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingChangeAmount} @change=${(event: Event): void => this.handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange(event)} /></label></div><button ?disabled=${!canBill} class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event): void => this.handleCmdHandoffApprovedChangeOrderToBillingClick(event)}>${this.cmdHandoffApprovedChangeOrderToBillingState === 'loading' ? msg['page21.loading'] : msg['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling']}</button>${this.cmdHandoffApprovedChangeOrderToBillingState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['action.cmdHandoffApprovedChangeOrderToBilling.success']}</p>` : nothing}${this.cmdHandoffApprovedChangeOrderToBillingState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffApprovedChangeOrderToBillingError || msg['action.cmdHandoffApprovedChangeOrderToBilling.error']}</p>` : nothing}</section>` : nothing}
          `}
        </section>
      </main>
    `;
  }
}
