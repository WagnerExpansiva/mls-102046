/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/forwardChangeOrderForClientApproval.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmForwardChangeOrderForClientApprovalBase, messages as sharedMessages, type MessageType, type QryLocateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'orders.section': m['section.forwardChangeOrderForClientApproval.locateChangeOrder.title'],
'orders.organism': m['organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title'],
'orders.title': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title'],
'orders.empty': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty'],
'orders.changeOrderId': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label'],
'orders.clientRef': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label'],
'orders.projectRef': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label'],
'orders.description': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label'],
'orders.scopeImpact': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label'],
'orders.scheduleImpact': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label'],
'orders.changeAmount': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label'],
'orders.submittedAt': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label'],
'orders.forwardedAt': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
'orders.status': m['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label'],
'handoff.section': m['section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title'],
'handoff.organism': m['organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title'],
'handoff.title': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title'],
'handoff.action': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient'],
'handoff.description': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label'],
'handoff.scopeImpact': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label'],
'handoff.scheduleImpact': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label'],
'handoff.changeAmount': m['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label'],
'action.success': m['action.cmdHandoffChangeOrderToClient.success'],
'action.error': m['action.cmdHandoffChangeOrderToClient.error'],
'workspace.title': m['section.forwardChangeOrderForClientApproval.change-order-workspace.title'],
'approval.workspace': m['section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'choose': 'Selecionar', 'loading': 'Carregando ordens de mudança…', 'required': 'Obrigatório', 'notAvailable': '—', 'sending': 'Enviando…', 'selectPrompt': 'Selecione uma ordem para revisar.', 'dismiss': 'Fechar', 'submitted': 'Submetida', 'alreadyForwarded': 'Já encaminhada'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'choose': 'Selecionar', 'loading': 'Carregando ordens de mudança…', 'required': 'Obrigatório', 'notAvailable': '—', 'sending': 'Enviando…', 'selectPrompt': 'Selecione uma ordem para revisar.', 'dismiss': 'Fechar', 'submitted': 'Submetida', 'alreadyForwarded': 'Já encaminhada'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'choose': 'Select', 'loading': 'Loading change orders…', 'required': 'Required', 'notAvailable': '—', 'sending': 'Sending…', 'selectPrompt': 'Select an order to review.', 'dismiss': 'Dismiss', 'submitted': 'Submitted', 'alreadyForwarded': 'Already forwarded'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'choose': 'Seleccionar', 'loading': 'Cargando órdenes de cambio…', 'required': 'Obligatorio', 'notAvailable': '—', 'sending': 'Enviando…', 'selectPrompt': 'Seleccione una orden para revisar.', 'dismiss': 'Cerrar', 'submitted': 'Enviada', 'alreadyForwarded': 'Ya enviada'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--forward-change-order-for-client-approval-102046')
export class BuildFlowFsmDesktopPage21ForwardChangeOrderForClientApprovalPage extends BuildFlowFsmForwardChangeOrderForClientApprovalBase {
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
return html`<div class="space-y-6 bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
  ${this.renderOrderRail(msg)}
  <div class="grid gap-6 md:grid-cols-2">
    ${this.renderOrderList(msg)}
    ${this.renderSelectedOrder(msg)}
  </div>
</div>`;
}
renderOrderRail(msg: PageMessageType) {
return html`<nav aria-label=${msg['orders.section']} class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
  <div class="flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--selected-bg,#e0f2fe)] text-[var(--selected-text,#075985)]">1</span><span class="font-semibold">${msg['orders.title']}</span><span class="text-[var(--text-muted,#64748b)]">›</span><span class="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#475569)]">2</span><span class="text-[var(--text-muted,#64748b)]">${msg['handoff.title']}</span></div>
</nav>`;
}
renderOrderList(msg: PageMessageType) {
const rows: QryLocateChangeOrderOutput[] = this.qryLocateChangeOrderData ?? [];
if (this.qryLocateChangeOrderState === 'loading') return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6" aria-busy="true"><p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p></section>`;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 2px rgb(0_0_0_/_0.08))]">
  <h2 class="mb-4 text-lg font-semibold">${msg['orders.title']}</h2>
  ${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>` : html`<div class="space-y-3">${rows.map((row: QryLocateChangeOrderOutput) => html`<button type="button" class="block w-full rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-left hover:border-[var(--selected-border,#0284c7)]" @click=${() => { this.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(row.changeOrderId); this.setCmdHandoffChangeOrderToClientDescription(row.description); this.setCmdHandoffChangeOrderToClientScopeImpact(row.scopeImpact); this.setCmdHandoffChangeOrderToClientScheduleImpact(row.scheduleImpact); this.setCmdHandoffChangeOrderToClientChangeAmount(String(row.changeAmount)); }}>
    <div class="flex items-start justify-between gap-3"><strong>${row.changeOrderId}</strong><span class="rounded-full bg-[var(--status-info-bg,#e0f2fe)] px-2 py-1 text-sm text-[var(--status-info-text,#075985)]">${row.status}</span></div>
    <div class="mt-2 grid grid-cols-2 gap-2 text-sm"><span><b>${msg['orders.clientRef']}:</b> ${row.clientRef}</span><span><b>${msg['orders.projectRef']}:</b> ${row.projectRef}</span><span class="col-span-2"><b>${msg['orders.description']}:</b> ${row.description}</span></div>
  </button>`)}</div>`}
</section>`;
}
renderSelectedOrder(msg: PageMessageType) {
const selectedId = this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId;
const row = (this.qryLocateChangeOrderData ?? []).find((item: QryLocateChangeOrderOutput) => item.changeOrderId === selectedId);
const hasInputs = Boolean(selectedId && this.cmdHandoffChangeOrderToClientDescription && this.cmdHandoffChangeOrderToClientScopeImpact && this.cmdHandoffChangeOrderToClientScheduleImpact && this.cmdHandoffChangeOrderToClientChangeAmount);
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 2px rgb(0_0_0_/_0.08))]">
  <h2 class="mb-4 text-lg font-semibold">${msg['approval.workspace']}</h2>
  ${row ? html`<div class="mb-5 space-y-3 rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4"><div class="flex justify-between"><strong>${row.changeOrderId}</strong><span>${row.status}</span></div><dl class="grid gap-3 text-sm sm:grid-cols-2"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.clientRef']}</dt><dd>${row.clientRef}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.projectRef']}</dt><dd>${row.projectRef}</dd></div><div class="sm:col-span-2"><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.description']}</dt><dd>${row.description}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.scopeImpact']}</dt><dd>${row.scopeImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.scheduleImpact']}</dt><dd>${row.scheduleImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.changeAmount']}</dt><dd>${row.changeAmount}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.submittedAt']}</dt><dd>${row.submittedAt}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.forwardedAt']}</dt><dd>${row.forwardedForClientApprovalAt || msg['notAvailable']}</dd></div></dl></div>` : html`<p class="mb-5 text-[var(--text-muted,#64748b)]">${msg['selectPrompt']}</p>`}
  <div class="space-y-4">${this.renderField(msg['handoff.description'], this.cmdHandoffChangeOrderToClientDescription, this.handleCmdHandoffChangeOrderToClientDescriptionChange, 'text')}${this.renderField(msg['handoff.scopeImpact'], this.cmdHandoffChangeOrderToClientScopeImpact, this.handleCmdHandoffChangeOrderToClientScopeImpactChange, 'text')}${this.renderField(msg['handoff.scheduleImpact'], this.cmdHandoffChangeOrderToClientScheduleImpact, this.handleCmdHandoffChangeOrderToClientScheduleImpactChange, 'text')}${this.renderField(msg['handoff.changeAmount'], this.cmdHandoffChangeOrderToClientChangeAmount, this.handleCmdHandoffChangeOrderToClientChangeAmountChange, 'number')}</div>
  ${this.cmdHandoffChangeOrderToClientState === 'success' ? html`<div class="mt-4 flex justify-between rounded-lg bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]" role="status">${msg['action.success']}<button type="button" @click=${() => this.handleQryLocateChangeOrderClick()}>${msg['dismiss']}</button></div>` : nothing}
  ${this.cmdHandoffChangeOrderToClientState === 'error' ? html`<div class="mt-4 flex justify-between rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]" role="alert">${this.cmdHandoffChangeOrderToClientError || msg['action.error']}<button type="button" @click=${() => this.handleQryLocateChangeOrderClick()}>${msg['dismiss']}</button></div>` : nothing}
  <button type="button" class="mt-5 w-full rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!hasInputs || this.cmdHandoffChangeOrderToClientState === 'loading'} @click=${(event: Event) => this.handleCmdHandoffChangeOrderToClientClick(event)}>${this.cmdHandoffChangeOrderToClientState === 'loading' ? msg['sending'] : msg['handoff.action']}</button>
</section>`;
}
renderField(label: string, value: string, handler: (event: Event) => void, type: string) {
return html`<label class="block"><span class="mb-1 block font-medium">${label} <span class="text-[var(--status-error-text,#991b1b)]" aria-label=${this.msg['required']}>*</span></span><input class="w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type=${type} .value=${value} required @change=${handler}></label>`;
}
}
