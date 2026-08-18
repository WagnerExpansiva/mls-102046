/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/approveChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmApproveChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';
import type { QryLocateChangeOrderOutput, QryClientPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'workspace.title': m['section.approveChangeOrder.change-order-workspace.title'],
'locate.title': m['organism.approveChangeOrder.qryLocateChangeOrder.title'],
'locate.empty': m['intent.approveChangeOrder.qryLocateChangeOrder.list.empty'],
'locate.changeOrderId': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label'],
'locate.clientRef': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label'],
'locate.projectRef': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label'],
'locate.description': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label'],
'locate.scopeImpact': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label'],
'locate.scheduleImpact': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label'],
'locate.changeAmount': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label'],
'locate.submittedAt': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label'],
'locate.forwardedAt': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
'locate.status': m['intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label'],
'approve.title': m['organism.approveChangeOrder.cmdApproveChangeOrderDecision.title'],
'approve.action': m['intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision'],
'approve.status': m['intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label'],
'clients.title': m['organism.approveChangeOrder.qryClientPicker.title'],
'clients.empty': m['intent.approveChangeOrder.qryClientPicker.list.empty'],
'clients.id': m['intent.approveChangeOrder.qryClientPicker.list.column.clientId.label'],
'clients.name': m['intent.approveChangeOrder.qryClientPicker.list.column.clientName.label'],
'clients.email': m['intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label'],
'clients.phone': m['intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label'],
'billing.title': m['section.approveChangeOrder.billing-handoff.title'],
'handoff.title': m['organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title'],
'handoff.action': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling'],
'handoff.description': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label'],
'handoff.scopeImpact': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label'],
'handoff.scheduleImpact': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label'],
'handoff.changeAmount': m['intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label'],
'approve.success': m['action.cmdApproveChangeOrderDecision.success'],
'approve.error': m['action.cmdApproveChangeOrderDecision.error'],
'handoff.success': m['action.cmdHandoffApprovedChangeOrderToBilling.success'],
'handoff.error': m['action.cmdHandoffApprovedChangeOrderToBilling.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…',
'refresh': 'Atualizar',
'selectOrder': 'Selecionar ordem de mudança',
'selectClient': 'Selecionar cliente',
'projectContext': 'Projeto atual',
'pending': 'Pendente',
'approved': 'Aprovada',
'choose': 'Escolha uma opção',
'noSelection': 'Selecione uma ordem de mudança para continuar.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…',
'refresh': 'Atualizar',
'selectOrder': 'Selecionar ordem de mudança',
'selectClient': 'Selecionar cliente',
'projectContext': 'Projeto atual',
'pending': 'Pendente',
'approved': 'Aprovada',
'choose': 'Escolha uma opção',
'noSelection': 'Selecione uma ordem de mudança para continuar.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…',
'refresh': 'Refresh',
'selectOrder': 'Select change order',
'selectClient': 'Select client',
'projectContext': 'Current project',
'pending': 'Pending',
'approved': 'Approved',
'choose': 'Choose an option',
'noSelection': 'Select a change order to continue.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…',
'refresh': 'Actualizar',
'selectOrder': 'Seleccionar orden de cambio',
'selectClient': 'Seleccionar cliente',
'projectContext': 'Proyecto actual',
'pending': 'Pendiente',
'approved': 'Aprobada',
'choose': 'Elija una opción',
'noSelection': 'Seleccione una orden de cambio para continuar.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--approve-change-order-102046')
export class BuildFlowFsmDesktopPage11ApproveChangeOrderPage extends BuildFlowFsmApproveChangeOrderBase {
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
return html`
  <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
      ${this.renderLocateChangeOrder()}
      ${this.renderApproval()}
      ${this.renderBillingHandoff()}
    </div>
  </main>`;
}
renderLocateChangeOrder() {
const msg = this.msg;
const rows: QryLocateChangeOrderOutput[] = this.qryLocateChangeOrderData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
  <div class="flex items-center justify-between gap-4"><h2 class="text-lg font-semibold">${msg['locate.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryLocateChangeOrderClick} ?disabled=${this.qryLocateChangeOrderState === 'loading'}>${this.qryLocateChangeOrderState === 'loading' ? msg['loading'] : msg['refresh']}</button></div>
  ${this.qryLocateChangeOrderState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['locate.empty']}</p>` : html`<div class="overflow-x-auto"><table class="min-w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['locate.changeOrderId'], msg['locate.clientRef'], msg['locate.projectRef'], msg['locate.description'], msg['locate.scopeImpact'], msg['locate.scheduleImpact'], msg['locate.changeAmount'], msg['locate.submittedAt'], msg['locate.forwardedAt'], msg['locate.status']].map((heading: string) => html`<th class="px-3 py-2 text-left font-semibold">${heading}</th>`)}</tr></thead><tbody>${rows.map((item: QryLocateChangeOrderOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${item.changeOrderId}</td><td class="px-3 py-2">${item.clientRef}</td><td class="px-3 py-2">${item.projectRef}</td><td class="px-3 py-2">${item.description}</td><td class="px-3 py-2">${item.scopeImpact}</td><td class="px-3 py-2">${item.scheduleImpact}</td><td class="px-3 py-2">${item.changeAmount}</td><td class="px-3 py-2">${item.submittedAt}</td><td class="px-3 py-2">${item.forwardedForClientApprovalAt}</td><td class="px-3 py-2">${item.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderApproval() {
const msg = this.msg;
const clients: QryClientPickerOutput[] = this.qryClientPickerData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['approve.title']}</h2>
  <div class="grid gap-4 md:grid-cols-3"><label class="space-y-1"><span class="block text-sm font-medium">${msg['selectOrder']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId} @change=${this.handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange}><option value="">${msg['choose']}</option>${this.qryLocateChangeOrderData.map((item: QryLocateChangeOrderOutput) => html`<option value=${item.changeOrderId}>${item.changeOrderId}</option>`)}</select></label><label class="space-y-1"><span class="block text-sm font-medium">${msg['selectClient']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdApproveChangeOrderDecisionClientClientId} @change=${this.handleCmdApproveChangeOrderDecisionClientClientIdChange}><option value="">${msg['choose']}</option>${clients.map((item: QryClientPickerOutput) => html`<option value=${item.clientId}>${item.clientName}</option>`)}</select></label><div><span class="block text-sm font-medium">${msg['projectContext']}</span><output class="block pt-2 text-[var(--text-muted,#64748b)]">${this.cmdApproveChangeOrderDecisionProjectProjectId}</output></div></div>
  <label class="block space-y-1"><span class="block text-sm font-medium">${msg['approve.status']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdApproveChangeOrderDecisionStatus} @change=${this.handleCmdApproveChangeOrderDecisionStatusChange}><option value="">${msg['choose']}</option><option value="pending">${msg['pending']}</option><option value="approved">${msg['approved']}</option></select></label>
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${this.handleCmdApproveChangeOrderDecisionClick} ?disabled=${this.cmdApproveChangeOrderDecisionState === 'loading'}>${this.cmdApproveChangeOrderDecisionState === 'loading' ? msg['loading'] : msg['approve.action']}</button>
  ${this.cmdApproveChangeOrderDecisionState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3">${msg['approve.success']}</p>` : this.cmdApproveChangeOrderDecisionState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3">${this.cmdApproveChangeOrderDecisionError || msg['approve.error']}</p>` : nothing}
</section>`;
}
renderBillingHandoff() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['billing.title']}</h2><h3 class="text-base font-semibold">${msg['handoff.title']}</h3>
  <label class="space-y-1 block"><span class="block text-sm font-medium">${msg['selectOrder']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId} @change=${this.handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange}><option value="">${msg['choose']}</option>${this.qryLocateChangeOrderData.map((item: QryLocateChangeOrderOutput) => html`<option value=${item.changeOrderId}>${item.changeOrderId}</option>`)}</select></label>
  <div class="grid gap-4 md:grid-cols-2"><label class="space-y-1"><span class="block text-sm font-medium">${msg['handoff.description']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingDescription} @input=${this.handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange}></textarea></label><label class="space-y-1"><span class="block text-sm font-medium">${msg['handoff.scopeImpact']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScopeImpact} @input=${this.handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange}></textarea></label><label class="space-y-1"><span class="block text-sm font-medium">${msg['handoff.scheduleImpact']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingScheduleImpact} @input=${this.handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange}></textarea></label><label class="space-y-1"><span class="block text-sm font-medium">${msg['handoff.changeAmount']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffApprovedChangeOrderToBillingChangeAmount} @input=${this.handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange} /></label></div>
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${this.handleCmdHandoffApprovedChangeOrderToBillingClick} ?disabled=${this.cmdHandoffApprovedChangeOrderToBillingState === 'loading'}>${this.cmdHandoffApprovedChangeOrderToBillingState === 'loading' ? msg['loading'] : msg['handoff.action']}</button>
  ${this.cmdHandoffApprovedChangeOrderToBillingState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3">${msg['handoff.success']}</p>` : this.cmdHandoffApprovedChangeOrderToBillingState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3">${this.cmdHandoffApprovedChangeOrderToBillingError || msg['handoff.error']}</p>` : nothing}
</section>`;
}
}
