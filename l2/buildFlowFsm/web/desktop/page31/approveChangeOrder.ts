/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/approveChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmApproveChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';
import type { QryLocateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'orders.title': m['organism.approveChangeOrder.qryLocateChangeOrder.title'],
  'orders.empty': m['intent.approveChangeOrder.qryLocateChangeOrder.list.empty'],
  'orders.id': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label'],
  'orders.client': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label'],
  'orders.project': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label'],
  'orders.description': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label'],
  'orders.scope': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label'],
  'orders.schedule': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label'],
  'orders.amount': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label'],
  'orders.submitted': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label'],
  'orders.forwarded': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
  'orders.status': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label'],
  'approval.title': m['section.approveChangeOrder.approveChangeOrderDecision.title'],
  'approval.action': m['intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision'],
  'approval.status': m['intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label'],
  'billing.title': m['section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title'],
  'billing.description': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label'],
  'billing.scope': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label'],
  'billing.schedule': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label'],
  'billing.amount': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label'],
  'billing.action': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling'],
  'approval.success': m['action.cmdApproveChangeOrderDecision.success'],
  'approval.error': m['action.cmdApproveChangeOrderDecision.error'],
  'billing.success': m['action.cmdHandoffApprovedChangeOrderToBilling.success'],
  'billing.error': m['action.cmdHandoffApprovedChangeOrderToBilling.error']
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'queue.loading': 'Carregando ordens pendentes…',
  'queue.count': 'ordens aguardam sua decisão',
  'queue.choose': 'Selecione uma ordem para revisar.',
  'queue.none': 'Não há nada aguardando sua decisão.',
  'detail.title': 'Revisão da ordem',
  'billing.caption': 'Confirme os dados antes de encaminhar ao faturamento.',
  'running': 'Processando…',
  'retry': 'Tentar novamente'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'queue.loading': 'Carregando ordens pendentes…', 'queue.count': 'ordens aguardam sua decisão', 'queue.choose': 'Selecione uma ordem para revisar.', 'queue.none': 'Não há nada aguardando sua decisão.', 'detail.title': 'Revisão da ordem', 'billing.caption': 'Confirme os dados antes de encaminhar ao faturamento.', 'running': 'Processando…', 'retry': 'Tentar novamente'
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'queue.loading': 'Loading pending change orders…', 'queue.count': 'orders are waiting for your decision', 'queue.choose': 'Select an order to review.', 'queue.none': 'Nothing is waiting for your decision.', 'detail.title': 'Order review', 'billing.caption': 'Confirm the details before forwarding to billing.', 'running': 'Processing…', 'retry': 'Try again'
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'queue.loading': 'Cargando órdenes pendientes…', 'queue.count': 'órdenes esperan su decisión', 'queue.choose': 'Seleccione una orden para revisar.', 'queue.none': 'No hay nada esperando su decisión.', 'detail.title': 'Revisión de la orden', 'billing.caption': 'Confirme los datos antes de enviar a facturación.', 'running': 'Procesando…', 'retry': 'Intentar de nuevo'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--approve-change-order-102046')
export class BuildFlowFsmDesktopPage31ApproveChangeOrderPage extends BuildFlowFsmApproveChangeOrderBase {
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
const orders = this.qryLocateChangeOrderData ?? [];
const selected = orders.find((order: QryLocateChangeOrderOutput) => order.changeOrderId === this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId);
return html`
  <div class="grid gap-6 lg:grid-cols-2">
    <section class="space-y-4" aria-label=${msg['orders.title']}>
      ${this.qryLocateChangeOrderState === 'loading' ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['queue.loading']}</p>` : nothing}
      ${this.qryLocateChangeOrderState !== 'loading' && orders.length === 0 ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['queue.none']}</p>` : nothing}
      ${orders.length > 0 ? html`<p class="text-[var(--text-strong,#334155)]">${orders.length} ${msg['queue.count']}</p>` : nothing}
      <div class="space-y-3">${orders.map((order: QryLocateChangeOrderOutput) => this.renderOrderCard(order, selected?.changeOrderId ?? ''))}</div>
      ${this.qryLocateChangeOrderState === 'error' ? html`<button class="rounded-lg bg-[var(--button-secondary-bg,#fff)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryLocateChangeOrderClick(event)}>${msg['retry']}</button>` : nothing}
    </section>
    <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#fff)] p-5" aria-label=${msg['detail.title']}>
      ${selected ? this.renderDetail(selected, msg) : html`<p class="text-[var(--text-muted,#64748b)]">${msg['queue.choose']}</p>`}
    </section>
  </div>`;
}
renderOrderCard(order: QryLocateChangeOrderOutput, selectedId: string) {
const msg = this.msg;
const isSelected = order.changeOrderId === selectedId;
return html`<article class="rounded-lg border p-4 ${isSelected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#fff)]'}">
  <button class="w-full text-left" @click=${() => { this.setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId(order.changeOrderId); this.setCmdApproveChangeOrderDecisionClientClientId(order.clientRef); this.setCmdApproveChangeOrderDecisionProjectProjectId(order.projectRef); this.setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId(order.changeOrderId); this.setCmdHandoffApprovedChangeOrderToBillingDescription(order.description); this.setCmdHandoffApprovedChangeOrderToBillingScopeImpact(order.scopeImpact); this.setCmdHandoffApprovedChangeOrderToBillingScheduleImpact(order.scheduleImpact); this.setCmdHandoffApprovedChangeOrderToBillingChangeAmount(String(order.changeAmount)); }}>
    <div class="flex items-start justify-between gap-4"><span class="font-semibold text-[var(--link-text,#2563eb)]">${order.changeOrderId}</span><span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-1 text-[var(--status-neutral-text,#475569)]">${order.status}</span></div>
    <div class="mt-3 grid grid-cols-2 gap-2 text-sm"><span class="text-[var(--text-muted,#64748b)]">${msg['orders.client']}</span><span>${order.clientRef}</span><span class="text-[var(--text-muted,#64748b)]">${msg['orders.project']}</span><span>${order.projectRef}</span><span class="text-[var(--text-muted,#64748b)]">${msg['orders.amount']}</span><span class="text-right">${order.changeAmount}</span></div>
  </button>
</article>`;
}
renderDetail(order: QryLocateChangeOrderOutput, msg: PageMessageType) {
const approved = order.status.toLowerCase() === 'approved' || this.cmdApproveChangeOrderDecisionState === 'success';
const approving = this.cmdApproveChangeOrderDecisionState === 'loading';
const handingOff = this.cmdHandoffApprovedChangeOrderToBillingState === 'loading';
return html`<div class="space-y-5">
  <div><h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['detail.title']}</h2><p class="mt-1 text-[var(--text-muted,#64748b)]">${order.description}</p></div>
  <dl class="grid gap-3 sm:grid-cols-2"><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['orders.scope']}</dt><dd>${order.scopeImpact}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['orders.schedule']}</dt><dd>${order.scheduleImpact}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['orders.submitted']}</dt><dd>${order.submittedAt}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['orders.forwarded']}</dt><dd>${order.forwardedForClientApprovalAt}</dd></div></dl>
  ${!approved ? html`<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><p class="mb-3 font-medium">${msg['approval.title']}</p><button class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#fff)] disabled:opacity-50" ?disabled=${approving} @click=${(event: Event) => { this.setCmdApproveChangeOrderDecisionStatus('approved'); this.handleCmdApproveChangeOrderDecisionClick(event); }}>${approving ? msg['running'] : msg['approval.action']}</button>${this.cmdApproveChangeOrderDecisionState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdApproveChangeOrderDecisionError || msg['approval.error']}</p>` : nothing}</div>` : nothing}
  ${approved ? html`<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><p class="mb-2 font-medium">${msg['billing.title']}</p><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['billing.caption']}</p><div class="space-y-3"><label class="block text-sm">${msg['billing.description']}<textarea class="mt-1 w-full rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#fff)] p-2]" .value=${this.cmdHandoffApprovedChangeOrderToBillingDescription} @change=${(event: Event) => this.handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange(event)}></textarea></label><label class="block text-sm">${msg['billing.scope']}<input class="mt-1 w-full rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScopeImpact} @change=${(event: Event) => this.handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange(event)} /></label><label class="block text-sm">${msg['billing.schedule']}<input class="mt-1 w-full rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact} @change=${(event: Event) => this.handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange(event)} /></label><label class="block text-sm">${msg['billing.amount']}<input class="mt-1 w-full rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingChangeAmount} @change=${(event: Event) => this.handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange(event)} /></label></div><button class="mt-4 rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#fff)] disabled:opacity-50" ?disabled=${handingOff} @click=${(event: Event) => this.handleCmdHandoffApprovedChangeOrderToBillingClick(event)}>${handingOff ? msg['running'] : msg['billing.action']}</button>${this.cmdHandoffApprovedChangeOrderToBillingState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['billing.success']}</p>` : nothing}${this.cmdHandoffApprovedChangeOrderToBillingState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffApprovedChangeOrderToBillingError || msg['billing.error']}</p>` : nothing}</div>` : nothing}
</div>`;
}
}
