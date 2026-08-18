/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/changeOrderDecisionCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderDecisionCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.js';
import type { QryListChangeOrderDecisionOutput, QryChangeOrderPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'records.title': m['section.changeOrderDecisionCatalogue.recordList.title'],
'records.listTitle': m['organism.changeOrderDecisionCatalogue.qryListChangeOrderDecision.title'],
'records.empty': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty'],
'records.id': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label'],
'records.order': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label'],
'records.author': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label'],
'records.decision': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label'],
'records.date': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label'],
'update.title': m['organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title'],
'update.form': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title'],
'update.save': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision'],
'update.author': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label'],
'update.decision': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label'],
'update.date': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label'],
'delete.title': m['organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title'],
'delete.form': m['intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title'],
'delete.action': m['intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision'],
'form.title': m['section.changeOrderDecisionCatalogue.recordForm.title'],
'create.title': m['organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title'],
'create.form': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title'],
'create.save': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision'],
'create.author': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label'],
'create.decision': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label'],
'create.date': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label'],
'orders.title': m['organism.changeOrderDecisionCatalogue.qryChangeOrderPicker.title'],
'orders.listTitle': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title'],
'orders.empty': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty'],
'orders.id': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
'orders.client': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label'],
'orders.project': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label'],
'orders.description': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label'],
'orders.scope': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label'],
'orders.schedule': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label'],
'orders.amount': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label'],
'orders.submitted': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.submittedAt.label'],
'orders.forwarded': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.forwardedForClientApprovalAt.label'],
'orders.status': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label'],
'create.success': m['action.cmdCreateChangeOrderDecision.success'],
'create.error': m['action.cmdCreateChangeOrderDecision.error'],
'update.success': m['action.cmdUpdateChangeOrderDecision.success'],
'update.error': m['action.cmdUpdateChangeOrderDecision.error'],
'delete.success': m['action.cmdDeleteChangeOrderDecision.success'],
'delete.error': m['action.cmdDeleteChangeOrderDecision.error'],
'workbench.title': m['section.changeOrderDecisionCatalogue.decisionWorkbench.title'],
'creation.title': m['section.changeOrderDecisionCatalogue.decisionCreation.title'],
'newDecision.title': m['section.changeOrderDecisionCatalogue.newDecision.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'chooseOrder': 'Selecione a ordem de mudança',
'noSelection': 'Selecione uma decisão para revisar ou uma ordem para registrar uma decisão.',
'required': 'Obrigatório',
'loading': 'Carregando…',
'updateHint': 'Revise a decisão selecionada e salve a correção.',
'deleteConfirm': 'Excluir esta decisão? Esta ação removerá o registro selecionado.',
'createdBySession': 'Preenchido pela sessão atual',
'systemDate': 'Definido pelo sistema',
'createError': 'Não foi possível registrar a decisão.',
'updateError': 'Não foi possível corrigir a decisão.',
'deleteError': 'Não foi possível excluir a decisão.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'chooseOrder': 'Selecione a ordem de mudança','noSelection': 'Selecione uma decisão para revisar ou uma ordem para registrar uma decisão.','required': 'Obrigatório','loading': 'Carregando…','updateHint': 'Revise a decisão selecionada e salve a correção.','deleteConfirm': 'Excluir esta decisão? Esta ação removerá o registro selecionado.','createdBySession': 'Preenchido pela sessão atual','systemDate': 'Definido pelo sistema','createError': 'Não foi possível registrar a decisão.','updateError': 'Não foi possível corrigir a decisão.','deleteError': 'Não foi possível excluir a decisão.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'chooseOrder': 'Select the change order','noSelection': 'Select a decision to review or an order for a new decision.','required': 'Required','loading': 'Loading…','updateHint': 'Review the selected decision and save the correction.','deleteConfirm': 'Delete this decision? This removes the selected record.','createdBySession': 'Filled from the current session','systemDate': 'Set by the system','createError': 'The decision could not be recorded.','updateError': 'The decision could not be corrected.','deleteError': 'The decision could not be deleted.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'chooseOrder': 'Seleccione la orden de cambio','noSelection': 'Seleccione una decisión para revisar o una orden para registrar una decisión.','required': 'Obligatorio','loading': 'Cargando…','updateHint': 'Revise la decisión seleccionada y guarde la corrección.','deleteConfirm': '¿Eliminar esta decisión? Se quitará el registro seleccionado.','createdBySession': 'Completado desde la sesión actual','systemDate': 'Definido por el sistema','createError': 'No se pudo registrar la decisión.','updateError': 'No se pudo corregir la decisión.','deleteError': 'No se pudo eliminar la decisión.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--change-order-decision-catalogue-102046')
export class BuildFlowFsmDesktopPage21ChangeOrderDecisionCataloguePage extends BuildFlowFsmChangeOrderDecisionCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderOrderPicker(msg)}
<div class="grid gap-6 lg:grid-cols-2">
${this.renderDecisionList(msg)}
${this.renderDecisionForm(msg)}
</div>
</div>`;
}
renderOrderPicker(msg: PageMessageType) {
const orders: QryChangeOrderPickerOutput[] = this.qryChangeOrderPickerData ?? [];
return html`<section class="space-y-3" aria-labelledby="order-picker-title"><div class="flex items-center justify-between"><h2 id="order-picker-title" class="text-lg font-semibold">${msg['orders.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#cbd5e1)] px-4 py-2" @click=${(event: Event) => this.handleQryChangeOrderPickerClick(event)}>${msg['orders.listTitle']}</button></div>${this.qryChangeOrderPickerState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : orders.length === 0 ? html`<p class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>` : html`<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">${orders.map((order: QryChangeOrderPickerOutput) => html`<button class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-4 text-left hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => this.selectOrder(order)}><div class="font-semibold">${String(order.changeOrderId)}</div><div class="text-sm text-[var(--text-muted,#64748b)]">${String(order.clientRef)} · ${String(order.projectRef)}</div><div class="mt-2 text-sm">${String(order.description)}</div><div class="mt-2 text-xs text-[var(--text-muted,#64748b)]">${msg['orders.status']}: ${String(order.status)} · ${msg['orders.amount']}: ${String(order.changeAmount)}</div></button>`)}</div>`}</section>`;
}
renderDecisionList(msg: PageMessageType) {
const records: QryListChangeOrderDecisionOutput[] = this.qryListChangeOrderDecisionData ?? [];
return html`<section class="space-y-3" aria-labelledby="records-title"><h2 id="records-title" class="text-lg font-semibold">${msg['records.listTitle']}</h2>${this.qryListChangeOrderDecisionState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : records.length === 0 ? html`<p class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 text-[var(--text-muted,#64748b)]">${msg['records.empty']}</p>` : html`<div class="space-y-2">${records.map((record: QryListChangeOrderDecisionOutput) => html`<button class="block w-full rounded-lg border p-4 text-left ${this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId === String(record.changeOrderDecisionId) ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)]'}" @click=${() => this.selectRecord(record)}><div class="flex justify-between gap-3"><span class="font-semibold">${String(record.changeOrder)}</span><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-xs text-[var(--status-info-text,#1e40af)]">${String(record.decision)}</span></div><dl class="mt-2 grid grid-cols-2 gap-2 text-sm text-[var(--text-muted,#64748b)]"><div><dt>${msg['records.author']}</dt><dd>${String(record.madeByPlatformUser)}</dd></div><div><dt>${msg['records.date']}</dt><dd>${String(record.decidedAt)}</dd></div></dl></button>`)}</div>`}</section>`;
}
renderDecisionForm(msg: PageMessageType) {
const selected = this.qryListChangeOrderDecisionData.find((record: QryListChangeOrderDecisionOutput) => String(record.changeOrderDecisionId) === this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId);
const hasSelection = selected !== undefined;
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-alt-bg,#f8fafc)] p-5" aria-labelledby="form-title"><div class="mb-5 flex items-start justify-between gap-4"><div><h2 id="form-title" class="text-lg font-semibold">${hasSelection ? msg['update.form'] : msg['create.form']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${hasSelection ? msg['updateHint'] : msg['noSelection']}</p></div>${hasSelection ? html`<span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-xs text-[var(--status-info-text,#1e40af)]">${String(selected.decision)}</span>` : nothing}</div>${hasSelection ? this.renderUpdateForm(msg, selected) : this.renderCreateForm(msg)}${this.renderFeedback(msg)}</section>`;
}
renderCreateForm(msg: PageMessageType) {
const orders: QryChangeOrderPickerOutput[] = this.qryChangeOrderPickerData ?? [];
return html`<form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateChangeOrderDecisionClick(event); }}><label class="block text-sm font-medium">${msg['orders.title']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionChangeOrder} @change=${(event: Event) => this.handleCmdCreateChangeOrderDecisionChangeOrderChange(event)} required><option value="">${msg['chooseOrder']}</option>${orders.map((order: QryChangeOrderPickerOutput) => html`<option value=${String(order.changeOrderId)}>${String(order.clientRef)} · ${String(order.projectRef)} · ${String(order.description)}</option>`)}</select></label><label class="block text-sm font-medium">${msg['create.decision']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionDecision} @input=${(event: Event) => this.handleCmdCreateChangeOrderDecisionDecisionChange(event)} required /></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.author']}: ${msg['createdBySession']} · ${msg['create.date']}: ${msg['systemDate']}</p><button type="submit" class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateChangeOrderDecisionState === 'loading' || this.cmdCreateChangeOrderDecisionChangeOrder.length === 0 || this.cmdCreateChangeOrderDecisionDecision.length === 0}>${this.cmdCreateChangeOrderDecisionState === 'loading' ? msg['loading'] : msg['create.save']}</button></form>`;
}
renderUpdateForm(msg: PageMessageType, selected: QryListChangeOrderDecisionOutput) {
return html`<form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateChangeOrderDecisionClick(event); }}><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.author']}: ${msg['createdBySession']} · ${msg['update.date']}: ${String(selected.decidedAt)}</p><label class="block text-sm font-medium">${msg['update.decision']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDecisionDecision} @input=${(event: Event) => this.handleCmdUpdateChangeOrderDecisionDecisionChange(event)} required /></label><button type="submit" class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateChangeOrderDecisionState === 'loading' || this.cmdUpdateChangeOrderDecisionDecision.length === 0}>${this.cmdUpdateChangeOrderDecisionState === 'loading' ? msg['loading'] : msg['update.save']}</button><button type="button" class="w-full rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-3 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteChangeOrderDecisionState === 'loading'} @click=${(event: Event) => this.confirmDelete(event)}>${this.cmdDeleteChangeOrderDecisionState === 'loading' ? msg['loading'] : msg['delete.action']}</button></form>`;
}
renderFeedback(msg: PageMessageType) {
return html`${this.cmdCreateChangeOrderDecisionState === 'success' ? html`<p class="mt-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdUpdateChangeOrderDecisionState === 'success' ? html`<p class="mt-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdDeleteChangeOrderDecisionState === 'success' ? html`<p class="mt-4 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdCreateChangeOrderDecisionState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateChangeOrderDecisionError || msg['create.error']}</p>` : nothing}${this.cmdUpdateChangeOrderDecisionState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateChangeOrderDecisionError || msg['update.error']}</p>` : nothing}${this.cmdDeleteChangeOrderDecisionState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteChangeOrderDecisionError || msg['delete.error']}</p>` : nothing}`;
}
selectOrder(order: QryChangeOrderPickerOutput) { this.setCmdCreateChangeOrderDecisionChangeOrder(String(order.changeOrderId)); this.setCmdUpdateChangeOrderDecisionChangeOrder(String(order.changeOrderId)); }
selectRecord(record: QryListChangeOrderDecisionOutput) { this.setCmdUpdateChangeOrderDecisionChangeOrderDecisionId(String(record.changeOrderDecisionId)); this.setCmdUpdateChangeOrderDecisionChangeOrder(String(record.changeOrder)); this.setCmdUpdateChangeOrderDecisionDecision(String(record.decision)); this.setCmdDeleteChangeOrderDecisionChangeOrderDecisionId(String(record.changeOrderDecisionId)); }
confirmDelete(event: Event) { if (confirm(this.msg['deleteConfirm'])) this.handleCmdDeleteChangeOrderDecisionClick(event); }
}
