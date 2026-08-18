/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/changeOrderCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'list.section': m['section.changeOrderCatalogue.recordList.title'],
  'list.title': m['intent.changeOrderCatalogue.qryListChangeOrder.list.title'],
  'list.empty': m['intent.changeOrderCatalogue.qryListChangeOrder.list.empty'],
  'list.id': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeOrderId.label'],
  'list.client': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.clientRef.label'],
  'list.project': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.projectRef.label'],
  'list.description': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.description.label'],
  'list.scope': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scopeImpact.label'],
  'list.schedule': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.scheduleImpact.label'],
  'list.amount': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.changeAmount.label'],
  'list.submitted': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.submittedAt.label'],
  'list.forwarded': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.forwardedForClientApprovalAt.label'],
  'list.status': m['intent.changeOrderCatalogue.qryListChangeOrder.list.column.status.label'],
  'create.section': m['section.changeOrderCatalogue.changeOrderCreation.title'],
  'create.title': m['organism.changeOrderCatalogue.cmdCreateChangeOrder.title'],
  'create.form': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.title'],
  'create.save': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.description': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.description.label'],
  'create.scope': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scopeImpact.label'],
  'create.schedule': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.scheduleImpact.label'],
  'create.amount': m['intent.changeOrderCatalogue.cmdCreateChangeOrder.form.field.changeAmount.label'],
  'update.section': m['section.changeOrderCatalogue.changeOrderRegistration.title'],
  'update.title': m['organism.changeOrderCatalogue.cmdUpdateChangeOrder.title'],
  'update.form': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.title'],
  'update.save': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'update.description': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.description.label'],
  'update.scope': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scopeImpact.label'],
  'update.schedule': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.scheduleImpact.label'],
  'update.amount': m['intent.changeOrderCatalogue.cmdUpdateChangeOrder.form.field.changeAmount.label'],
  'delete.title': m['organism.changeOrderCatalogue.cmdDeleteChangeOrder.title'],
  'delete.action': m['intent.changeOrderCatalogue.cmdDeleteChangeOrder.form.action.cmdDeleteChangeOrder'],
  'client.title': m['organism.changeOrderCatalogue.qryClientPicker.title'],
  'client.empty': m['intent.changeOrderCatalogue.qryClientPicker.list.empty'],
  'project.title': m['organism.changeOrderCatalogue.qryProjectPicker.title'],
  'project.empty': m['intent.changeOrderCatalogue.qryProjectPicker.list.empty'],
  'success.create': m['action.cmdCreateChangeOrder.success'],
  'error.create': m['action.cmdCreateChangeOrder.error'],
  'success.update': m['action.cmdUpdateChangeOrder.success'],
  'error.update': m['action.cmdUpdateChangeOrder.error'],
  'success.delete': m['action.cmdDeleteChangeOrder.success'],
  'error.delete': m['action.cmdDeleteChangeOrder.error'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'new.record': 'Nova ordem de mudança', 'selected.record': 'Ordem selecionada',
  'choose.client': 'Escolha o cliente', 'choose.project': 'Escolha a obra',
  'required': 'Obrigatório', 'loading': 'Carregando…', 'review': 'Revise os impactos antes de salvar',
  'delete.confirm': 'Excluir esta ordem de mudança?', 'no.selection': 'Selecione uma ordem para revisar',
  'system.value': 'Controlado pelo sistema', 'retry': 'Tentar novamente',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = { ...fromShared(sharedMessages['pt-br'] ?? sharedFallback), 'new.record': 'Nova ordem de mudança', 'selected.record': 'Ordem selecionada', 'choose.client': 'Escolha o cliente', 'choose.project': 'Escolha a obra', 'required': 'Obrigatório', 'loading': 'Carregando…', 'review': 'Revise os impactos antes de salvar', 'delete.confirm': 'Excluir esta ordem de mudança?', 'no.selection': 'Selecione uma ordem para revisar', 'system.value': 'Controlado pelo sistema', 'retry': 'Tentar novamente' };
const pageMessage_en: PageMessageType = { ...fromShared(sharedMessages['en'] ?? sharedFallback), 'new.record': 'New change order', 'selected.record': 'Selected change order', 'choose.client': 'Choose a client', 'choose.project': 'Choose a project', 'required': 'Required', 'loading': 'Loading…', 'review': 'Review impacts before saving', 'delete.confirm': 'Delete this change order?', 'no.selection': 'Select an order to review', 'system.value': 'Controlled by the system', 'retry': 'Try again' };
const pageMessage_es: PageMessageType = { ...fromShared(sharedMessages['es'] ?? sharedFallback), 'new.record': 'Nueva orden de cambio', 'selected.record': 'Orden seleccionada', 'choose.client': 'Elija el cliente', 'choose.project': 'Elija la obra', 'required': 'Obligatorio', 'loading': 'Cargando…', 'review': 'Revise los impactos antes de guardar', 'delete.confirm': '¿Eliminar esta orden de cambio?', 'no.selection': 'Seleccione una orden para revisar', 'system.value': 'Controlado por el sistema', 'retry': 'Reintentar' };
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--change-order-catalogue-102046')
export class BuildFlowFsmDesktopPage21ChangeOrderCataloguePage extends BuildFlowFsmChangeOrderCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
  ${this.renderList()} ${this.renderDetail()} ${this.renderCreate()}
</div>`;
}
renderList() {
const msg = this.msg;
const rows = this.qryListChangeOrderData ?? [];
if (this.qryListChangeOrderState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p></section>`;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4">
  <div class="flex items-center justify-between"><h2 class="text-xl font-semibold">${msg['list.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#334155)] px-4 py-2" @click=${this.handleQryListChangeOrderClick}>${msg['retry']}</button></div>
  ${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-3 text-left">${msg['list.description']}</th><th class="p-3 text-left">${msg['list.client']}</th><th class="p-3 text-left">${msg['list.project']}</th><th class="p-3 text-left">${msg['list.status']}</th><th class="p-3 text-left">${msg['list.amount']}</th><th class="p-3 text-left">${msg['delete.title']}</th></tr></thead><tbody>${rows.map((row: unknown) => { const r = row as Record<string, unknown>; const id = String(r['changeOrderId'] ?? ''); return html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${id === this.cmdUpdateChangeOrderChangeOrderId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}"><td class="p-3"><button class="text-left underline" @click=${() => { this.setCmdUpdateChangeOrderChangeOrderId(id); this.setCmdDeleteChangeOrderChangeOrderId(id); this.setCmdUpdateChangeOrderClientRef(String(r['clientRef'] ?? '')); this.setCmdUpdateChangeOrderProjectRef(String(r['projectRef'] ?? '')); this.setCmdUpdateChangeOrderDescription(String(r['description'] ?? '')); this.setCmdUpdateChangeOrderScopeImpact(String(r['scopeImpact'] ?? '')); this.setCmdUpdateChangeOrderScheduleImpact(String(r['scheduleImpact'] ?? '')); this.setCmdUpdateChangeOrderChangeAmount(String(r['changeAmount'] ?? '')); }}>${String(r['description'] ?? '')}</button></td><td class="p-3">${String(r['clientRef'] ?? '')}</td><td class="p-3">${String(r['projectRef'] ?? '')}</td><td class="p-3">${String(r['status'] ?? '')}</td><td class="p-3">${String(r['changeAmount'] ?? '')}</td><td class="p-3"><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-3 py-1" @click=${() => { if (window.confirm(msg['delete.confirm'] + ' ' + String(r['description'] ?? ''))) { this.setCmdDeleteChangeOrderChangeOrderId(id); this.cmdDeleteChangeOrder(); } }}>${msg['delete.action']}</button></td></tr>`; })}</tbody></table></div>`}
</section>`;
}
renderDetail() {
const msg = this.msg;
if (!this.cmdUpdateChangeOrderChangeOrderId) return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-[var(--text-muted,#64748b)]">${msg['no.selection']}</p></section>`;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-5"><div class="flex items-center justify-between"><div><h2 class="text-xl font-semibold">${msg['selected.record']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['review']}</p></div><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e3a8a)] px-3 py-1">${this.cmdUpdateChangeOrderStatus || msg['system.value']}</span></div>${this.renderUpdateForm()}${this.cmdUpdateChangeOrderState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateChangeOrderError || msg['error.update']}</p>` : nothing}${this.cmdUpdateChangeOrderState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['success.update']}</p>` : nothing}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
return html`<form class="max-w-3xl space-y-5" @submit=${(event: Event) => { event.preventDefault(); this.cmdUpdateChangeOrder(); }}><div class="grid gap-4 md:grid-cols-2"><label class="space-y-1"><span>${msg['list.client']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderClientRef} @change=${this.handleCmdUpdateChangeOrderClientRefChange}><option value="">${msg['choose.client']}</option>${(this.qryClientPickerData ?? []).map((client: unknown) => { const c = client as Record<string, unknown>; return html`<option value=${String(c['clientId'] ?? '')}>${String(c['clientName'] ?? '')}</option>`; })}</select></label><label class="space-y-1"><span>${msg['list.project']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderProjectRef} @change=${this.handleCmdUpdateChangeOrderProjectRefChange}><option value="">${msg['choose.project']}</option>${(this.qryProjectPickerData ?? []).map((project: unknown) => { const p = project as Record<string, unknown>; return html`<option value=${String(p['projectId'] ?? '')}>${String(p['name'] ?? '')}</option>`; })}</select></label></div>${this.renderField(msg['update.description'], this.cmdUpdateChangeOrderDescription, this.handleCmdUpdateChangeOrderDescriptionChange, 'text', true)}${this.renderField(msg['update.scope'], this.cmdUpdateChangeOrderScopeImpact, this.handleCmdUpdateChangeOrderScopeImpactChange, 'text', true)}${this.renderField(msg['update.schedule'], this.cmdUpdateChangeOrderScheduleImpact, this.handleCmdUpdateChangeOrderScheduleImpactChange, 'text', true)}${this.renderField(msg['update.amount'], this.cmdUpdateChangeOrderChangeAmount, this.handleCmdUpdateChangeOrderChangeAmountChange, 'number', true)}<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['system.value']}</p><button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-5 py-2" ?disabled=${this.cmdUpdateChangeOrderState === 'loading'}>${this.cmdUpdateChangeOrderState === 'loading' ? msg['loading'] : msg['update.save']}</button></form>`;
}
renderCreate() {
const msg = this.msg;
return html`<details class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><summary class="cursor-pointer text-xl font-semibold">${msg['create.title']}</summary><div class="pt-5">${this.renderCreateForm()}</div></details>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<form class="max-w-3xl space-y-5" @submit=${(event: Event) => { event.preventDefault(); this.cmdCreateChangeOrder(); }}><div class="grid gap-4 md:grid-cols-2"><label class="space-y-1"><span>${msg['list.client']}</span><select required class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderClientClientId} @change=${this.handleCmdCreateChangeOrderClientClientIdChange}><option value="">${msg['choose.client']}</option>${(this.qryClientPickerData ?? []).map((client: unknown) => { const c = client as Record<string, unknown>; return html`<option value=${String(c['clientId'] ?? '')}>${String(c['clientName'] ?? '')}</option>`; })}</select></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['system.value']}</p></div>${this.renderField(msg['create.description'], this.cmdCreateChangeOrderDescription, this.handleCmdCreateChangeOrderDescriptionChange, 'text', true)}${this.renderField(msg['create.scope'], this.cmdCreateChangeOrderScopeImpact, this.handleCmdCreateChangeOrderScopeImpactChange, 'text', true)}${this.renderField(msg['create.schedule'], this.cmdCreateChangeOrderScheduleImpact, this.handleCmdCreateChangeOrderScheduleImpactChange, 'text', true)}${this.renderField(msg['create.amount'], this.cmdCreateChangeOrderChangeAmount, this.handleCmdCreateChangeOrderChangeAmountChange, 'number', true)}${this.cmdCreateChangeOrderState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateChangeOrderError || msg['error.create']}</p>` : nothing}${this.cmdCreateChangeOrderState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['success.create']}</p>` : nothing}<button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-5 py-2" ?disabled=${this.cmdCreateChangeOrderState === 'loading' || !this.cmdCreateChangeOrderClientClientId}>${this.cmdCreateChangeOrderState === 'loading' ? msg['loading'] : msg['create.save']}</button></form>`;
}
renderField(label: string, value: string, handler: (event: Event) => void, type: string, required: boolean) {
const msg = this.msg;
return html`<label class="block space-y-1"><span>${label} ${required ? html`<span class="text-[var(--text-muted,#64748b)]">(${msg['required']})</span>` : nothing}</span><input required=${required} type=${type} .value=${value} @input=${handler} class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>`;
}
}
