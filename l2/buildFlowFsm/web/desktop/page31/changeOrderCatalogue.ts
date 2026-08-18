/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/changeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderCatalogueBase, messages as sharedMessages, type MessageType, type QryListChangeOrderOutput, type QryClientPickerOutput, type QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'orders.title': m['section.changeOrderCatalogue.recordList.title'],
'orders.list.title': m['intent.changeOrderCatalogue.qryListChangeOrder.list.title'],
'orders.empty': m['intent.changeOrderCatalogue.qryListChangeOrder.list.empty'],
'orders.id': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label'],
'orders.client': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label'],
'orders.project': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label'],
'orders.description': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label'],
'orders.scope': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label'],
'orders.schedule': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label'],
'orders.amount': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label'],
'orders.submitted': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label'],
'orders.forwarded': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label'],
'orders.status': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label'],
'delete.title': m['organism.changeOrderCatalogue.cmdDeleteChangeOrder.title'],
'delete.action': m['intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder'],
'create.title': m['organism.changeOrderCatalogue.cmdCreateChangeOrder.title'],
'create.action': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
'create.description': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label'],
'create.scope': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label'],
'create.schedule': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label'],
'create.amount': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label'],
'update.title': m['organism.changeOrderCatalogue.cmdUpdateChangeOrder.title'],
'update.action': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
'update.description': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label'],
'update.scope': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label'],
'update.schedule': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label'],
'update.amount': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label'],
'update.submitted': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.submittedAt.label'],
'update.forwarded': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.forwardedForClientApprovalAt.label'],
'update.status': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.status.label'],
'client.title': m['organism.changeOrderCatalogue.qryClientPicker.title'],
'client.id': m['intent.changeOrderCatalogue.qryClientPicker.list.column.clientId.label'],
'client.name': m['intent.changeOrderCatalogue.qryClientPicker.list.column.clientName.label'],
'project.title': m['organism.changeOrderCatalogue.qryProjectPicker.title'],
'project.id': m['intent.changeOrderCatalogue.qryProjectPicker.list.column.projectId.label'],
'project.name': m['intent.changeOrderCatalogue.qryProjectPicker.list.column.name.label'],
'create.success': m['action.cmdCreateChangeOrder.success'],
'create.error': m['action.cmdCreateChangeOrder.error'],
'update.success': m['action.cmdUpdateChangeOrder.success'],
'update.error': m['action.cmdUpdateChangeOrder.error'],
'delete.success': m['action.cmdDeleteChangeOrder.success'],
'delete.error': m['action.cmdDeleteChangeOrder.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'choose.client': 'Selecione um cliente', 'choose.project': 'Selecione uma obra', 'selected': 'Selecionada', 'loading': 'Carregando…', 'noSelection': 'Selecione uma ordem para ver os detalhes.', 'confirmDelete': 'Confirma a exclusão desta ordem de mudança?', 'context.project': 'Obra atual', 'retry': 'Tentar novamente'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'choose.client': 'Selecione um cliente', 'choose.project': 'Selecione uma obra', 'selected': 'Selecionada', 'loading': 'Carregando…', 'noSelection': 'Selecione uma ordem para ver os detalhes.', 'confirmDelete': 'Confirma a exclusão desta ordem de mudança?', 'context.project': 'Obra atual', 'retry': 'Tentar novamente'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'choose.client': 'Choose a client', 'choose.project': 'Choose a project', 'selected': 'Selected', 'loading': 'Loading…', 'noSelection': 'Select a change order to see its details.', 'confirmDelete': 'Confirm deletion of this change order?', 'context.project': 'Current project', 'retry': 'Try again'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'choose.client': 'Seleccione un cliente', 'choose.project': 'Seleccione una obra', 'selected': 'Seleccionada', 'loading': 'Cargando…', 'noSelection': 'Seleccione una orden de cambio para ver los detalles.', 'confirmDelete': '¿Confirma la eliminación de esta orden de cambio?', 'context.project': 'Obra actual', 'retry': 'Intentar de nuevo'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage31ChangeOrderCataloguePage extends BuildFlowFsmChangeOrderCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-screen bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderOrders(msg)}
<div class="grid gap-6 lg:grid-cols-2">${this.renderSelected(msg)}${this.renderCreate(msg)}</div>
</main>`;
}
renderOrders(msg: PageMessageType) {
const rows: QryListChangeOrderOutput[] = this.qryListChangeOrderData ?? [];
return html`<section class="space-y-4" aria-labelledby="orders-heading">
<div class="flex items-center justify-between"><h2 id="orders-heading" class="text-xl font-bold">${msg['orders.title']}</h2><button class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-3" @click=${(event: Event) => this.handleQryListChangeOrderClick(event)} ?disabled=${this.qryListChangeOrderState === 'loading'}>${this.qryListChangeOrderState === 'loading' ? msg['loading'] : msg['orders.list.title']}</button></div>
${this.qryListChangeOrderState === 'loading' ? html`<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-8">${msg['loading']}</div>` : rows.length === 0 ? html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-8">${msg['orders.empty']}</div>` : html`<div class="overflow-x-auto rounded-lg border border-[var(--border-default,#cbd5e1)]"><table class="w-full text-left"><thead class="bg-[var(--surface-alt-bg,#f8fafc)]"><tr>${[msg['orders.id'],msg['orders.client'],msg['orders.project'],msg['orders.description'],msg['orders.amount'],msg['orders.status']].map((label: string) => html`<th class="p-3 font-bold">${label}</th>`)}</tr></thead><tbody>${rows.map((row: QryListChangeOrderOutput) => html`<tr class="cursor-pointer border-t border-[var(--border-subtle,#e2e8f0)] ${this.cmdUpdateChangeOrderChangeOrderId === row.changeOrderId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}" @click=${() => this.selectOrder(row)}><td class="p-3">${row.changeOrderId}</td><td class="p-3">${row.clientRef}</td><td class="p-3">${row.projectRef}</td><td class="p-3">${row.description}</td><td class="p-3">${row.changeAmount}</td><td class="p-3"><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e3a8a)] px-2 py-1">${row.status}</span></td></tr>`)}</tbody></table></div>`}
</section>`;
}
selectOrder(row: QryListChangeOrderOutput) {
this.setCmdUpdateChangeOrderChangeOrderId(String(row.changeOrderId)); this.setCmdDeleteChangeOrderChangeOrderId(String(row.changeOrderId)); this.setCmdUpdateChangeOrderClientRef(String(row.clientRef)); this.setCmdUpdateChangeOrderProjectRef(String(row.projectRef)); this.setCmdUpdateChangeOrderDescription(String(row.description)); this.setCmdUpdateChangeOrderScopeImpact(String(row.scopeImpact)); this.setCmdUpdateChangeOrderScheduleImpact(String(row.scheduleImpact)); this.setCmdUpdateChangeOrderChangeAmount(String(row.changeAmount)); this.setCmdUpdateChangeOrderSubmittedAt(String(row.submittedAt ?? '')); this.setCmdUpdateChangeOrderForwardedForClientApprovalAt(String(row.forwardedForClientApprovalAt ?? '')); this.setCmdUpdateChangeOrderStatus(String(row.status));
}
renderSelected(msg: PageMessageType) {
const selected: QryListChangeOrderOutput | undefined = (this.qryListChangeOrderData ?? []).find((row: QryListChangeOrderOutput) => String(row.changeOrderId) === this.cmdUpdateChangeOrderChangeOrderId);
if (!selected) return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6">${msg['noSelection']}</section>`;
return html`<section class="sticky top-4 self-start rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"><div class="flex items-start justify-between"><div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['selected']}</p><p class="text-lg font-bold">${selected.description}</p></div><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e3a8a)] px-3 py-1">${selected.status}</span></div><dl class="grid grid-cols-2 gap-3 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.scope']}</dt><dd>${selected.scopeImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.schedule']}</dt><dd>${selected.scheduleImpact}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.amount']}</dt><dd>${selected.changeAmount}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['orders.submitted']}</dt><dd>${selected.submittedAt}</dd></div></dl>${this.renderUpdateForm(msg)}<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><button class="rounded-lg bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-3" @click=${(event: Event) => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteChangeOrderClick(event); }} ?disabled=${this.cmdDeleteChangeOrderState === 'loading'}>${this.cmdDeleteChangeOrderState === 'loading' ? msg['loading'] : msg['delete.action']}</button>${this.cmdDeleteChangeOrderState === 'success' ? html`<p class="mt-2 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteChangeOrderState === 'error' ? html`<p class="mt-2 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteChangeOrderError || msg['delete.error']}</p>` : nothing}</div></section>`;
}
renderUpdateForm(msg: PageMessageType) {
return html`<form class="space-y-3" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateChangeOrderClick(event); }}><label class="block"><span>${msg['update.description']}</span><textarea class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDescription} @input=${(event: Event) => this.handleCmdUpdateChangeOrderDescriptionChange(event)} required></textarea></label><label class="block"><span>${msg['update.scope']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateChangeOrderScopeImpact} @input=${(event: Event) => this.handleCmdUpdateChangeOrderScopeImpactChange(event)} required></label><label class="block"><span>${msg['update.schedule']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateChangeOrderScheduleImpact} @input=${(event: Event) => this.handleCmdUpdateChangeOrderScheduleImpactChange(event)} required></label><label class="block"><span>${msg['update.amount']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateChangeOrderChangeAmount} @input=${(event: Event) => this.handleCmdUpdateChangeOrderChangeAmountChange(event)} required></label><button class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-3" type="submit" ?disabled=${this.cmdUpdateChangeOrderState === 'loading'}>${this.cmdUpdateChangeOrderState === 'loading' ? msg['loading'] : msg['update.action']}</button>${this.cmdUpdateChangeOrderState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateChangeOrderState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateChangeOrderError || msg['update.error']}</p>` : nothing}</form>`;
}
renderCreate(msg: PageMessageType) {
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? []; const projects: QryProjectPickerOutput[] = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] p-6 space-y-4"><h2 class="text-xl font-bold">${msg['create.title']}</h2><label class="block"><span>${msg['client.title']}</span><select class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderClientClientId} @change=${(event: Event) => this.handleCmdCreateChangeOrderClientClientIdChange(event)} required><option value="">${msg['choose.client']}</option>${clients.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['context.project']}: ${this.cmdCreateChangeOrderProjectProjectId || '—'}</p><label class="block"><span>${msg['create.description']}</span><textarea class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateChangeOrderDescription} @input=${(event: Event) => this.handleCmdCreateChangeOrderDescriptionChange(event)} required></textarea></label><label class="block"><span>${msg['create.scope']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateChangeOrderScopeImpact} @input=${(event: Event) => this.handleCmdCreateChangeOrderScopeImpactChange(event)} required></label><label class="block"><span>${msg['create.schedule']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateChangeOrderScheduleImpact} @input=${(event: Event) => this.handleCmdCreateChangeOrderScheduleImpactChange(event)} required></label><label class="block"><span>${msg['create.amount']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateChangeOrderChangeAmount} @input=${(event: Event) => this.handleCmdCreateChangeOrderChangeAmountChange(event)} required></label><button class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-3" @click=${(event: Event) => this.handleCmdCreateChangeOrderClick(event)} ?disabled=${this.cmdCreateChangeOrderState === 'loading'}>${this.cmdCreateChangeOrderState === 'loading' ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateChangeOrderState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateChangeOrderState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateChangeOrderError || msg['create.error']}</p>` : nothing}</section>`;
}
}
