/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/declineChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDeclineChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';
import type { QryLocateChangeOrderOutput, QryClientPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'orders.section': m['section.declineChangeOrder.locateChangeOrder.title'],
'orders.title': m['organism.declineChangeOrder.qryLocateChangeOrder.title'],
'orders.list': m['intent.declineChangeOrder.qryLocateChangeOrder.list.title'],
'orders.empty': m['intent.declineChangeOrder.qryLocateChangeOrder.list.empty'],
'orders.id': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label'],
'orders.client': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label'],
'orders.project': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label'],
'orders.description': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label'],
'orders.scope': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label'],
'orders.schedule': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label'],
'orders.amount': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label'],
'orders.submitted': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label'],
'orders.forwarded': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
'orders.status': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label'],
'decline.section': m['section.declineChangeOrder.declineChangeOrderDecision.title'],
'decline.title': m['organism.declineChangeOrder.cmdDeclineChangeOrderDecision.title'],
'decline.action': m['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision'],
'decline.status': m['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label'],
'clients.title': m['organism.declineChangeOrder.qryClientPicker.title'],
'clients.list': m['intent.declineChangeOrder.qryClientPicker.list.title'],
'clients.empty': m['intent.declineChangeOrder.qryClientPicker.list.empty'],
'clients.id': m['intent.declineChangeOrder.qryClientPicker.list.column.clientId.label'],
'clients.name': m['intent.declineChangeOrder.qryClientPicker.list.column.clientName.label'],
'clients.email': m['intent.declineChangeOrder.qryClientPicker.list.column.contactEmail.label'],
'clients.phone': m['intent.declineChangeOrder.qryClientPicker.list.column.contactPhone.label'],
'handoff.section': m['section.declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator.title'],
'handoff.title': m['organism.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.title'],
'handoff.action': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator'],
'handoff.description': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label'],
'handoff.scope': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label'],
'handoff.schedule': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label'],
'handoff.amount': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label'],
'action.decline.success': m['action.cmdDeclineChangeOrderDecision.success'],
'action.decline.error': m['action.cmdDeclineChangeOrderDecision.error'],
'action.handoff.success': m['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success'],
'action.handoff.error': m['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error'],
'feedback.retry': m['action.cmdDeclineChangeOrderDecision.error'],
'page.selected': m['section.declineChangeOrder.decisionQueue.title'],
'page.outcome': m['section.declineChangeOrder.handoffOutcome.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'select': 'Selecionar', 'chooseClient': 'Escolha o cliente', 'selected': 'Ordem selecionada', 'declined': 'Ordem recusada.', 'running': 'Processando…', 'required': 'Preencha este campo.', 'retry': 'Tentar novamente', 'handoffReady': 'Registre os impactos para devolver a decisão ao campo.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'select': 'Selecionar', 'chooseClient': 'Escolha o cliente', 'selected': 'Ordem selecionada', 'declined': 'Ordem recusada.', 'running': 'Processando…', 'required': 'Preencha este campo.', 'retry': 'Tentar novamente', 'handoffReady': 'Registre os impactos para devolver a decisão ao campo.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'select': 'Select', 'chooseClient': 'Choose the client', 'selected': 'Selected order', 'declined': 'Order declined.', 'running': 'Processing…', 'required': 'Complete this field.', 'retry': 'Retry', 'handoffReady': 'Record the impacts before returning the decision to the field.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'select': 'Seleccionar', 'chooseClient': 'Elija el cliente', 'selected': 'Orden seleccionada', 'declined': 'Orden rechazada.', 'running': 'Procesando…', 'required': 'Complete este campo.', 'retry': 'Reintentar', 'handoffReady': 'Registre los impactos antes de devolver la decisión al campo.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--decline-change-order-102046')
export class BuildFlowFsmDesktopPage21DeclineChangeOrderPage extends BuildFlowFsmDeclineChangeOrderBase {
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
const orders: QryLocateChangeOrderOutput[] = this.qryLocateChangeOrderData ?? [];
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
const selected = orders.find((order: QryLocateChangeOrderOutput) => order.changeOrderId === this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId);
const declineBusy = this.cmdDeclineChangeOrderDecisionState === 'loading';
const handoffBusy = this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'loading';
const declineDone = this.cmdDeclineChangeOrderDecisionState === 'success';
const handoffDone = this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'success';
const canHandoff = Boolean(selected) && declineDone && Boolean(this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription.trim()) && Boolean(this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact.trim()) && Boolean(this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact.trim()) && Boolean(this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount.trim());
return html`
<section class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-8">
  <div class="grid gap-6 lg:grid-cols-3">
    <div class="lg:col-span-2 space-y-4">
      <h2 class="text-xl font-semibold">${msg['orders.section']}</h2>
      ${this.qryLocateChangeOrderState === 'loading' ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4">${msg['loading']}</p>` : orders.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>` : html`<div class="overflow-x-auto rounded-lg border border-[var(--border-subtle,#e2e8f0)]"><table class="w-full text-sm"><caption class="p-4 text-left font-medium">${msg['orders.list']}</caption><thead><tr class="border-b border-[var(--border-default,#cbd5e1)] text-left"><th class="p-3">${msg['orders.id']}</th><th class="p-3">${msg['orders.client']}</th><th class="p-3">${msg['orders.project']}</th><th class="p-3">${msg['orders.status']}</th></tr></thead><tbody>${orders.map((order: QryLocateChangeOrderOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#eff6ff)] ${order.changeOrderId === this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}" @click=${() => { this.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(order.changeOrderId); this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId(order.changeOrderId); }}><td class="p-3">${order.changeOrderId}</td><td class="p-3">${order.clientRef}</td><td class="p-3">${order.projectRef}</td><td class="p-3">${order.status}</td></tr>`)}</tbody></table></div>`}
    </div>
    <aside class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4">
      <h2 class="text-xl font-semibold">${msg['selected']}</h2>
      ${selected ? html`<p class="font-medium">${msg['orders.id']}: ${selected.changeOrderId}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${selected.description}</p><dl class="grid grid-cols-2 gap-3 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.scope']}</dt><dd>${selected.scopeImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.schedule']}</dt><dd>${selected.scheduleImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.amount']}</dt><dd>${selected.changeAmount}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.status']}</dt><dd>${selected.status}</dd></div></dl>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>`}
    </aside>
  </div>
  <section class="space-y-4"><h2 class="text-xl font-semibold">${msg['decline.section']}</h2><div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5 space-y-4">${this.cmdDeclineChangeOrderDecisionError ? html`<p role="alert">${this.cmdDeclineChangeOrderDecisionError}</p>` : nothing}${declineDone ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['declined']}</p>` : html`<button class="rounded-lg bg-[var(--button-danger-bg,#b91c1c)] px-4 py-3 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${!selected || declineBusy} @click=${() => { if (selected) { this.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(selected.changeOrderId); this.setCmdDeclineChangeOrderDecisionClientClientId(selected.clientRef); this.setCmdDeclineChangeOrderDecisionStatus('DECLINED'); this.handleCmdDeclineChangeOrderDecisionClick(); } }}>${declineBusy ? msg['running'] : msg['decline.action']}</button>`}</div></section>
  ${declineDone ? html`<section class="space-y-4"><h2 class="text-xl font-semibold">${msg['handoff.section']}</h2><div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5 space-y-4">${msg['handoffReady']}<textarea class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" aria-label=${msg['handoff.description']} .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange}></textarea><textarea class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" aria-label=${msg['handoff.scope']} .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange}></textarea><textarea class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" aria-label=${msg['handoff.schedule']} .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange}></textarea><input class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" aria-label=${msg['handoff.amount']} .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount} @input=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange}>${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError ? html`<p role="alert">${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError}</p>` : nothing}${handoffDone ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['action.handoff.success']}</p>` : html`<button class="rounded-lg bg-[var(--button-primary-bg,#1d4ed8)] px-4 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!canHandoff || handoffBusy} @click=${this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick}>${handoffBusy ? msg['running'] : msg['handoff.action']}</button>`}</div></section>` : nothing}
  <section class="space-y-4"><h2 class="text-xl font-semibold">${msg['clients.title']}</h2>${this.qryClientPickerState === 'loading' ? html`<p>${msg['loading']}</p>` : clients.length === 0 ? html`<p>${msg['clients.empty']}</p>` : html`<select class="rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-3" aria-label=${msg['clients.list']} .value=${this.cmdDeclineChangeOrderDecisionClientClientId} @change=${this.handleCmdDeclineChangeOrderDecisionClientClientIdChange}><option value="">${msg['chooseClient']}</option>${clients.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select>`}</section>
</section>`;
}
}
