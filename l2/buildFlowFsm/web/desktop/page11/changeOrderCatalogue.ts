/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.js';
import type { QryListChangeOrderOutput, QryClientPickerOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'recordList.title': m['section.changeOrderCatalogue.recordList.title'],
  'list.title': m['intent.changeOrderCatalogue.qryListChangeOrder.list.title'],
  'list.empty': m['intent.changeOrderCatalogue.qryListChangeOrder.list.empty'],
  'list.changeOrderId': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label'],
  'list.clientRef': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label'],
  'list.projectRef': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label'],
  'list.description': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label'],
  'list.scopeImpact': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label'],
  'list.scheduleImpact': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label'],
  'list.changeAmount': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label'],
  'list.submittedAt': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label'],
  'list.forwardedAt': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label'],
  'list.status': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label'],
  'delete.title': m['organism.changeOrderCatalogue.cmdDeleteChangeOrder.title'],
  'delete.formTitle': m['intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.title'],
  'delete.action': m['intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder'],
  'create.title': m['organism.changeOrderCatalogue.cmdCreateChangeOrder.title'],
  'create.formTitle': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title'],
  'create.action': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.description': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label'],
  'create.scopeImpact': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label'],
  'create.scheduleImpact': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label'],
  'create.changeAmount': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label'],
  'update.title': m['organism.changeOrderCatalogue.cmdUpdateChangeOrder.title'],
  'update.formTitle': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title'],
  'update.action': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'update.description': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label'],
  'update.scopeImpact': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label'],
  'update.scheduleImpact': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label'],
  'update.changeAmount': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label'],
  'update.submittedAt': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label'],
  'update.forwardedAt': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label'],
  'update.status': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label'],
  'clients.title': m['organism.changeOrderCatalogue.qryClientPicker.title'],
  'clients.listTitle': m['intent.changeOrderCatalogue.qryClientPicker.list.title'],
  'clients.empty': m['intent.changeOrderCatalogue.qryClientPicker.list.empty'],
  'clients.id': m['intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label'],
  'clients.name': m['intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label'],
  'projects.title': m['organism.changeOrderCatalogue.qryProjectPicker.title'],
  'projects.listTitle': m['intent.changeOrderCatalogue.qryProjectPicker.list.title'],
  'projects.empty': m['intent.changeOrderCatalogue.qryProjectPicker.list.empty'],
  'projects.id': m['intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label'],
  'projects.name': m['intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label'],
  'action.create.success': m['action.cmdCreateChangeOrder.success'],
  'action.create.error': m['action.cmdCreateChangeOrder.error'],
  'action.update.success': m['action.cmdUpdateChangeOrder.success'],
  'action.update.error': m['action.cmdUpdateChangeOrder.error'],
  'action.delete.success': m['action.cmdDeleteChangeOrder.success'],
  'action.delete.error': m['action.cmdDeleteChangeOrder.error'],
  'workspace.title': m['section.changeOrderCatalogue.changeOrderWorkspace.title'],
  'creation.title': m['section.changeOrderCatalogue.changeOrderCreation.title'],
  'registration.title': m['section.changeOrderCatalogue.changeOrderRegistration.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage11ChangeOrderCataloguePage extends BuildFlowFsmChangeOrderCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
  <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
    <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
    ${this.renderList()}
    ${this.renderPickers()}
    ${this.renderCreateForm()}
    ${this.renderUpdateForm()}
    ${this.renderDeleteAction()}
  </div>
</main>`;
}
renderList() {
const msg = this.msg;
const rows = this.qryListChangeOrderData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
  <div class="flex items-center justify-between gap-4"><h2 class="text-lg font-semibold">${msg['recordList.title']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryListChangeOrderClick}>${msg['list.title']}</button></div>
  ${this.qryListChangeOrderState === 'loading' ? html`<div class="animate-pulse text-[var(--text-muted,#64748b)]">${msg['list.title']}</div>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="min-w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['list.changeOrderId'],msg['list.clientRef'],msg['list.projectRef'],msg['list.description'],msg['list.scopeImpact'],msg['list.scheduleImpact'],msg['list.changeAmount'],msg['list.submittedAt'],msg['list.forwardedAt'],msg['list.status']].map((label: string) => html`<th class="text-left p-2">${label}</th>`)}</tr></thead><tbody>${rows.map((item: QryListChangeOrderOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${item.changeOrderId}</td><td class="p-2">${item.clientRef}</td><td class="p-2">${item.projectRef}</td><td class="p-2">${item.description}</td><td class="p-2">${item.scopeImpact}</td><td class="p-2">${item.scheduleImpact}</td><td class="p-2">${item.changeAmount}</td><td class="p-2">${item.submittedAt}</td><td class="p-2">${item.forwardedForClientApprovalAt}</td><td class="p-2">${item.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderPickers() {
const msg = this.msg;
const clients = this.qryClientPickerData ?? [];
const projects = this.qryProjectPickerData ?? [];
return html`<section class="grid gap-4 md:grid-cols-2"><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h2 class="font-semibold">${msg['clients.title']}</h2><p class="mt-2 text-sm">${clients.length ? clients.map((item: QryClientPickerOutput) => html`<span class="mr-3">${item.clientId} — ${item.clientName}</span>`) : msg['clients.empty']}</p><button class="mt-3 rounded px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryClientPickerClick}>${msg['clients.listTitle']}</button></div><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h2 class="font-semibold">${msg['projects.title']}</h2><p class="mt-2 text-sm">${projects.length ? projects.map((item: QryProjectPickerOutput) => html`<span class="mr-3">${item.projectId} — ${item.name}</span>`) : msg['projects.empty']}</p><button class="mt-3 rounded px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryProjectPickerClick}>${msg['projects.listTitle']}</button></div></section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['creation.title']}</h2><form class="grid gap-4 md:grid-cols-2" @submit=${this.handleCmdCreateChangeOrderClick}><label>${msg['create.formTitle']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderClientClientId} @change=${this.handleCmdCreateChangeOrderClientClientIdChange}><option value="">${msg['clients.title']}</option>${(this.qryClientPickerData ?? []).map((item: QryClientPickerOutput) => html`<option value=${item.clientId}>${item.clientName}</option>`)}</select></label><label>${msg['create.description']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateChangeOrderDescription} @input=${this.handleCmdCreateChangeOrderDescriptionChange} required></label><label>${msg['create.scopeImpact']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateChangeOrderScopeImpact} @input=${this.handleCmdCreateChangeOrderScopeImpactChange} required></label><label>${msg['create.scheduleImpact']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateChangeOrderScheduleImpact} @input=${this.handleCmdCreateChangeOrderScheduleImpactChange} required></label><label>${msg['create.changeAmount']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdCreateChangeOrderChangeAmount} @input=${this.handleCmdCreateChangeOrderChangeAmountChange} required></label><button type="submit" class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdCreateChangeOrderState === 'loading'}>${msg['create.action']}</button></form>${this.cmdCreateChangeOrderState === 'success' ? html`<p class="rounded p-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">${msg['action.create.success']}</p>` : this.cmdCreateChangeOrderState === 'error' ? html`<p class="rounded p-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">${this.cmdCreateChangeOrderError || msg['action.create.error']}</p>` : nothing}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['update.title']}</h2><form class="grid gap-4 md:grid-cols-2" @submit=${this.handleCmdUpdateChangeOrderClick}><label>${msg['list.changeOrderId']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderChangeOrderId} @change=${this.handleCmdUpdateChangeOrderChangeOrderIdChange}><option value="">${msg['delete.formTitle']}</option>${(this.qryListChangeOrderData ?? []).map((item: QryListChangeOrderOutput) => html`<option value=${item.changeOrderId}>${item.changeOrderId}</option>`)}</select></label><label>${msg['update.description']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderDescription} @input=${this.handleCmdUpdateChangeOrderDescriptionChange} required></label><label>${msg['update.scopeImpact']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderScopeImpact} @input=${this.handleCmdUpdateChangeOrderScopeImpactChange} required></label><label>${msg['update.scheduleImpact']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderScheduleImpact} @input=${this.handleCmdUpdateChangeOrderScheduleImpactChange} required></label><label>${msg['update.changeAmount']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderChangeAmount} @input=${this.handleCmdUpdateChangeOrderChangeAmountChange} required></label><label>${msg['update.status']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] p-2" .value=${this.cmdUpdateChangeOrderStatus} @input=${this.handleCmdUpdateChangeOrderStatusChange} readonly></label><button type="submit" class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdUpdateChangeOrderState === 'loading'}>${msg['update.action']}</button></form>${this.cmdUpdateChangeOrderState === 'success' ? html`<p class="rounded p-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">${msg['action.update.success']}</p>` : this.cmdUpdateChangeOrderState === 'error' ? html`<p class="rounded p-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateChangeOrderError || msg['action.update.error']}</p>` : nothing}</section>`;
}
renderDeleteAction() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"><h2 class="text-lg font-semibold">${msg['delete.title']}</h2><p>${msg['delete.formTitle']}</p><button class="rounded px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]" ?disabled=${!this.cmdDeleteChangeOrderChangeOrderId || this.cmdDeleteChangeOrderState === 'loading'} @click=${this.handleCmdDeleteChangeOrderClick}>${msg['delete.action']}</button>${this.cmdDeleteChangeOrderState === 'success' ? html`<p class="rounded p-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">${msg['action.delete.success']}</p>` : this.cmdDeleteChangeOrderState === 'error' ? html`<p class="rounded p-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteChangeOrderError || msg['action.delete.error']}</p>` : nothing}</section>`;
}
}