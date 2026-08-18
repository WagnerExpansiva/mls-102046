/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryBalanceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInventoryBalanceCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'recordList.title': m['section.inventoryBalanceCatalogue.recordList.title'],
'balances.title': m['organism.inventoryBalanceCatalogue.qryListInventoryBalance.title'],
'balances.list.title': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title'],
'balances.empty': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty'],
'balances.id': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label'],
'balances.item': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label'],
'balances.quantity': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label'],
'balances.cost': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label'],
'balances.status': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label'],
'picker.title': m['organism.inventoryBalanceCatalogue.qryInventoryItemPicker.title'],
'picker.list.title': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title'],
'picker.empty': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty'],
'picker.id': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label'],
'picker.name': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label'],
'picker.description': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label'],
'picker.unit': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label'],
'picker.cost': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label'],
'picker.status': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label'],
'delete.title': m['organism.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.title'],
'delete.form.title': m['intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title'],
'delete.action': m['intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance'],
'form.title': m['section.inventoryBalanceCatalogue.recordForm.title'],
'create.title': m['organism.inventoryBalanceCatalogue.cmdCreateInventoryBalance.title'],
'create.form.title': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title'],
'create.action': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance'],
'create.quantity': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label'],
'create.cost': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label'],
'create.status': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label'],
'update.title': m['organism.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.title'],
'update.form.title': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title'],
'update.action': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.action.cmdUpdateInventoryBalance'],
'update.quantity': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.physicalQuantity.label'],
'update.cost': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.applicableUnitCost.label'],
'update.status': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.field.status.label'],
'create.success': m['action.cmdCreateInventoryBalance.success'],
'create.error': m['action.cmdCreateInventoryBalance.error'],
'update.success': m['action.cmdUpdateInventoryBalance.success'],
'update.error': m['action.cmdUpdateInventoryBalance.error'],
'delete.success': m['action.cmdDeleteInventoryBalance.success'],
'delete.error': m['action.cmdDeleteInventoryBalance.error'],
'workbench.title': m['section.inventoryBalanceCatalogue.inventoryBalanceWorkbench.title'],
'creation.title': m['section.inventoryBalanceCatalogue.inventoryBalanceCreation.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'new.record': 'Novo saldo de estoque',
'select.item': 'Selecione um item de estoque',
'choose.item': 'Escolha um item',
'current.record': 'Saldo selecionado',
'confirm.delete': 'Excluir o saldo de ',
'loading': 'Carregando…',
'required': 'Obrigatório',
'not.selected': 'Selecione um saldo para editar ou excluir'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'new.record': 'Novo saldo de estoque', 'select.item': 'Selecione um item de estoque', 'choose.item': 'Escolha um item', 'current.record': 'Saldo selecionado', 'confirm.delete': 'Excluir o saldo de ', 'loading': 'Carregando…', 'required': 'Obrigatório', 'not.selected': 'Selecione um saldo para editar ou excluir'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'new.record': 'New inventory balance', 'select.item': 'Select an inventory item', 'choose.item': 'Choose an item', 'current.record': 'Selected balance', 'confirm.delete': 'Delete the balance for ', 'loading': 'Loading…', 'required': 'Required', 'not.selected': 'Select a balance to edit or delete'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'new.record': 'Nuevo saldo de inventario', 'select.item': 'Seleccione un artículo de inventario', 'choose.item': 'Elija un artículo', 'current.record': 'Saldo seleccionado', 'confirm.delete': 'Eliminar el saldo de ', 'loading': 'Cargando…', 'required': 'Obligatorio', 'not.selected': 'Seleccione un saldo para editar o eliminar'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--inventory-balance-catalogue-102046')
export class BuildFlowFsmDesktopPage21InventoryBalanceCataloguePage extends BuildFlowFsmInventoryBalanceCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
<section class="mx-auto max-w-6xl">
<h1 class="sr-only">${msg['workbench.title']}</h1>
${this.renderBalances()}
<div class="mt-6 grid gap-6 lg:grid-cols-2">${this.renderPicker()}${this.renderForms()}</div>
</section></main>`;
}
renderBalances() {
const msg = this.msg;
const rows = this.qryListInventoryBalanceData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['balances.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryListInventoryBalanceClick} ?disabled=${this.qryListInventoryBalanceState === 'loading'}>${this.qryListInventoryBalanceState === 'loading' ? msg['loading'] : msg['balances.list.title']}</button></div>
${this.qryListInventoryBalanceState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['balances.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['balances.item'], msg['balances.quantity'], msg['balances.cost'], msg['balances.status']].map((label: string) => html`<th class="px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">${label}</th>`)}</tr></thead><tbody>${rows.map((row) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => { this.setCmdUpdateInventoryBalanceInventoryBalanceId(row.inventoryBalanceId); this.setCmdUpdateInventoryBalanceInventoryItemId(row.inventoryItemId); this.setCmdUpdateInventoryBalancePhysicalQuantity(String(row.physicalQuantity)); this.setCmdUpdateInventoryBalanceApplicableUnitCost(String(row.applicableUnitCost)); this.setCmdDeleteInventoryBalanceInventoryBalanceId(row.inventoryBalanceId); }}><td class="px-3 py-3">${row.inventoryItemId}</td><td class="px-3 py-3">${row.physicalQuantity}</td><td class="px-3 py-3">${row.applicableUnitCost}</td><td class="px-3 py-3">${row.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderPicker() {
const msg = this.msg;
const items = this.qryInventoryItemPickerData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['picker.title']}</h2><label class="mb-2 block text-sm font-medium">${msg['select.item']}</label><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdCreateInventoryBalanceInventoryItemId} @change=${this.handleCmdCreateInventoryBalanceInventoryItemIdChange}><option value="">${msg['choose.item']}</option>${items.map((item) => html`<option value=${item.inventoryItemId}>${item.name} — ${item.description}</option>`)}</select><button class="mt-3 rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryInventoryItemPickerClick} ?disabled=${this.qryInventoryItemPickerState === 'loading'}>${this.qryInventoryItemPickerState === 'loading' ? msg['loading'] : msg['picker.list.title']}</button>${items.length === 0 && this.qryInventoryItemPickerState !== 'loading' ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['picker.empty']}</p>` : nothing}</section>`;
}
renderForms() {
const msg = this.msg;
const createReady = this.cmdCreateInventoryBalanceInventoryItemId !== '' && this.cmdCreateInventoryBalancePhysicalQuantity !== '' && this.cmdCreateInventoryBalanceApplicableUnitCost !== '';
const updateReady = this.cmdUpdateInventoryBalanceInventoryBalanceId !== '' && this.cmdUpdateInventoryBalancePhysicalQuantity !== '' && this.cmdUpdateInventoryBalanceApplicableUnitCost !== '';
return html`<section class="space-y-6"><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['form.title']}</h2><h3 class="mb-3 font-medium">${msg['update.form.title']}</h3><div class="grid gap-4 sm:grid-cols-2"><label>${msg['update.quantity']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryBalancePhysicalQuantity} @change=${this.handleCmdUpdateInventoryBalancePhysicalQuantityChange}></label><label>${msg['update.cost']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryBalanceApplicableUnitCost} @change=${this.handleCmdUpdateInventoryBalanceApplicableUnitCostChange}></label></div><p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['update.status']}: ${this.cmdUpdateInventoryBalanceStatus || msg['not.selected']}</p>${this.cmdUpdateInventoryBalanceState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateInventoryBalanceState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateInventoryBalanceError || msg['update.error']}</p>` : nothing}<button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdUpdateInventoryBalanceClick} ?disabled=${!updateReady || this.cmdUpdateInventoryBalanceState === 'loading'}>${this.cmdUpdateInventoryBalanceState === 'loading' ? msg['loading'] : msg['update.action']}</button></div>
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="mb-3 font-medium">${msg['creation.title']}</h3><p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">${msg['create.status']}: ${this.cmdCreateInventoryBalanceStatus}</p><div class="grid gap-4 sm:grid-cols-2"><label>${msg['create.quantity']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryBalancePhysicalQuantity} @change=${this.handleCmdCreateInventoryBalancePhysicalQuantityChange}></label><label>${msg['create.cost']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span><input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryBalanceApplicableUnitCost} @change=${this.handleCmdCreateInventoryBalanceApplicableUnitCostChange}></label></div>${this.cmdCreateInventoryBalanceState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateInventoryBalanceState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateInventoryBalanceError || msg['create.error']}</p>` : nothing}<button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdCreateInventoryBalanceClick} ?disabled=${!createReady || this.cmdCreateInventoryBalanceState === 'loading'}>${this.cmdCreateInventoryBalanceState === 'loading' ? msg['loading'] : msg['create.action']}</button></div>
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="mb-3 font-medium">${msg['delete.form.title']}</h3>${this.cmdDeleteInventoryBalanceState === 'success' ? html`<p class="mb-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteInventoryBalanceState === 'error' ? html`<p class="mb-3 text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteInventoryBalanceError || msg['delete.error']}</p>` : nothing}<button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)]" @click=${() => { const selected = this.cmdUpdateInventoryBalanceInventoryItemId || this.cmdDeleteInventoryBalanceInventoryBalanceId; if (selected && window.confirm(msg['confirm.delete'] + selected)) this.handleCmdDeleteInventoryBalanceClick(); }} ?disabled=${this.cmdDeleteInventoryBalanceInventoryBalanceId === '' || this.cmdDeleteInventoryBalanceState === 'loading'}>${this.cmdDeleteInventoryBalanceState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div></section>`;
}
}