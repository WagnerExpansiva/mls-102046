/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/changeOrderDecisionCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderDecisionCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
  'record.title': m['section.changeOrderDecisionCatalogue.recordList.title'],
  'decision.list.title': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title'],
  'decision.empty': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty'],
  'decision.id': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label'],
  'decision.order': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label'],
  'decision.user': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label'],
  'decision.value': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label'],
  'decision.date': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label'],
  'update.title': m['organism.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.title'],
  'update.form': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title'],
  'update.save': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision'],
  'update.decision': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label'],
  'update.date': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label'],
  'delete.title': m['organism.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.title'],
  'delete.action': m['intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision'],
  'create.title': m['organism.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.title'],
  'create.form': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title'],
  'create.save': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision'],
  'create.decision': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label'],
  'create.date': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label'],
  'picker.title': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title'],
  'picker.empty': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty'],
  'picker.id': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
  'picker.client': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label'],
  'picker.project': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label'],
  'picker.description': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label'],
  'picker.scope': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scopeImpact.label'],
  'picker.schedule': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.scheduleImpact.label'],
  'picker.amount': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeAmount.label'],
  'picker.status': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label'],
  'create.success': m['action.cmdCreateChangeOrderDecision.success'],
  'create.error': m['action.cmdCreateChangeOrderDecision.error'],
  'update.success': m['action.cmdUpdateChangeOrderDecision.success'],
  'update.error': m['action.cmdUpdateChangeOrderDecision.error'],
  'delete.success': m['action.cmdDeleteChangeOrderDecision.success'],
  'delete.error': m['action.cmdDeleteChangeOrderDecision.error'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'choose.order': 'Selecione uma ordem de mudança',
  'context.title': 'Contexto da ordem selecionada',
  'selected.title': 'Decisão selecionada',
  'required': 'Obrigatório',
  'loading': 'Carregando…',
  'saving': 'Salvando…',
  'deleting': 'Excluindo…',
  'delete.confirm': 'Confirma a exclusão da decisão selecionada?',
  'no.selection': 'Selecione uma decisão para corrigir ou excluir.',
  'no.orders': 'Nenhuma ordem de mudança disponível.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'choose.order': 'Selecione uma ordem de mudança',
  'context.title': 'Contexto da ordem selecionada',
  'selected.title': 'Decisão selecionada',
  'required': 'Obrigatório',
  'loading': 'Carregando…',
  'saving': 'Salvando…',
  'deleting': 'Excluindo…',
  'delete.confirm': 'Confirma a exclusão da decisão selecionada?',
  'no.selection': 'Selecione uma decisão para corrigir ou excluir.',
  'no.orders': 'Nenhuma ordem de mudança disponível.',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'choose.order': 'Select a change order',
  'context.title': 'Selected order context',
  'selected.title': 'Selected decision',
  'required': 'Required',
  'loading': 'Loading…',
  'saving': 'Saving…',
  'deleting': 'Deleting…',
  'delete.confirm': 'Confirm deletion of the selected decision?',
  'no.selection': 'Select a decision to correct or delete.',
  'no.orders': 'No change orders are available.',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'choose.order': 'Seleccione una orden de cambio',
  'context.title': 'Contexto de la orden seleccionada',
  'selected.title': 'Decisión seleccionada',
  'required': 'Obligatorio',
  'loading': 'Cargando…',
  'saving': 'Guardando…',
  'deleting': 'Eliminando…',
  'delete.confirm': '¿Confirma eliminar la decisión seleccionada?',
  'no.selection': 'Seleccione una decisión para corregir o eliminar.',
  'no.orders': 'No hay órdenes de cambio disponibles.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--change-order-decision-catalogue-102046')
export class BuildFlowFsmDesktopPage31ChangeOrderDecisionCataloguePage extends BuildFlowFsmChangeOrderDecisionCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) {
this.#msgLang = lang;
this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
}
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
  ${this.renderIdentity()}
  <section class="grid gap-6 lg:grid-cols-2" aria-label=${msg['context.title']}>
    ${this.renderDecisionList()}
    ${this.renderOrderPicker()}
  </section>
  <section class="grid gap-6 lg:grid-cols-2">
    ${this.renderUpdateForm()}
    ${this.renderCreateForm()}
  </section>
</main>`;
}
renderIdentity() {
const msg = this.msg;
const selected = this.qryListChangeOrderDecisionData.find((item) => item.changeOrderDecisionId === this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId);
return html`<header class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['record.title']}</p>
  ${selected ? html`<div class="mt-2 flex flex-wrap items-center gap-3"><strong>${msg['decision.order']}: ${selected.changeOrder}</strong><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-[var(--status-info-text,#1e40af)]">${msg['decision.value']}: ${selected.decision}</span><span>${msg['decision.date']}: ${selected.decidedAt}</span></div>` : html`<p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['no.selection']}</p>`}
</header>`;
}
renderDecisionList() {
const msg = this.msg;
const rows = this.qryListChangeOrderDecisionData;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
  <h2 class="mb-4 text-lg font-semibold">${msg['decision.list.title']}</h2>
  ${this.qryListChangeOrderDecisionState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['decision.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['decision.order']}</th><th class="p-2">${msg['decision.value']}</th><th class="p-2">${msg['decision.date']}</th><th class="p-2">${msg['decision.id']}</th></tr></thead><tbody>${rows.map((item) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#eff6ff)]" @click=${() => { this.setCmdUpdateChangeOrderDecisionChangeOrderDecisionId(item.changeOrderDecisionId); this.setCmdUpdateChangeOrderDecisionChangeOrder(String(item.changeOrder)); this.setCmdUpdateChangeOrderDecisionDecision(item.decision); this.setCmdUpdateChangeOrderDecisionDecidedAt(item.decidedAt); this.setCmdDeleteChangeOrderDecisionChangeOrderDecisionId(item.changeOrderDecisionId); }}><td class="p-2">${item.changeOrder}</td><td class="p-2">${item.decision}</td><td class="p-2">${item.decidedAt}</td><td class="p-2">${item.changeOrderDecisionId}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderOrderPicker() {
const msg = this.msg;
const orders = this.qryChangeOrderPickerData;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['picker.title']}</h2>
${this.qryChangeOrderPickerState === 'loading' ? html`<p>${msg['loading']}</p>` : orders.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['no.orders']}</p>` : html`<div class="space-y-3">${orders.map((order) => html`<button type="button" class="block w-full rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#eff6ff)]" @click=${() => { this.setCmdCreateChangeOrderDecisionChangeOrder(order.changeOrderId); this.setCmdUpdateChangeOrderDecisionChangeOrder(order.changeOrderId); }}><strong>${order.description}</strong><span class="mt-1 block text-sm text-[var(--text-muted,#64748b)]">${msg['picker.status']}: ${order.status} · ${msg['picker.amount']}: ${order.changeAmount}</span></button>`)}</div>`}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const busy = this.cmdUpdateChangeOrderDecisionState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['update.form']}</h2>${this.cmdUpdateChangeOrderDecisionError ? html`<p class="mb-3 rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateChangeOrderDecisionError}</p>` : nothing}${this.cmdUpdateChangeOrderDecisionState === 'success' ? html`<p class="mb-3 rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}<label class="block"><span class="mb-1 block">${msg['update.decision']} <small>(${msg['required']})</small></span><input class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDecisionDecision} @input=${this.handleCmdUpdateChangeOrderDecisionDecisionChange} required></label><label class="mt-3 block"><span class="mb-1 block">${msg['update.date']}</span><input type="datetime-local" class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDecisionDecidedAt} @input=${this.handleCmdUpdateChangeOrderDecisionDecidedAtChange}></label><div class="mt-4 flex gap-3"><button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" .disabled=${busy || !this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId || !this.cmdUpdateChangeOrderDecisionDecision} @click=${this.handleCmdUpdateChangeOrderDecisionClick}>${busy ? msg['saving'] : msg['update.save']}</button><button type="button" class="rounded bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" .disabled=${busy || !this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId} @click=${(event: Event) => { if (window.confirm(msg['delete.confirm'])) this.handleCmdDeleteChangeOrderDecisionClick(event); }}>${this.cmdDeleteChangeOrderDecisionState === 'loading' ? msg['deleting'] : msg['delete.action']}</button></div></section>`;
}
renderCreateForm() {
const msg = this.msg;
const busy = this.cmdCreateChangeOrderDecisionState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['create.form']}</h2>${this.cmdCreateChangeOrderDecisionError ? html`<p class="mb-3 rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateChangeOrderDecisionError}</p>` : nothing}${this.cmdCreateChangeOrderDecisionState === 'success' ? html`<p class="mb-3 rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}<label class="block"><span class="mb-1 block">${msg['create.decision']} <small>(${msg['required']})</small></span><input class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionDecision} @input=${this.handleCmdCreateChangeOrderDecisionDecisionChange} required></label><label class="mt-3 block"><span class="mb-1 block">${msg['create.date']}</span><input type="datetime-local" class="w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionDecidedAt} @input=${this.handleCmdCreateChangeOrderDecisionDecidedAtChange}></label><button type="button" class="mt-4 rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" .disabled=${busy || !this.cmdCreateChangeOrderDecisionChangeOrder || !this.cmdCreateChangeOrderDecisionDecision} @click=${this.handleCmdCreateChangeOrderDecisionClick}>${busy ? msg['saving'] : msg['create.save']}</button></section>`;
}
}
