/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryBalanceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'list.title': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title'],
'list.empty': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty'],
'list.balanceId': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label'],
'list.itemId': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label'],
'list.quantity': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label'],
'list.cost': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label'],
'list.status': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label'],
'picker.title': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title'],
'picker.empty': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty'],
'picker.itemId': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label'],
'picker.name': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label'],
'picker.description': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label'],
'picker.unit': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label'],
'picker.referenceCost': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label'],
'picker.status': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label'],
'delete.title': m['intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.title'],
'delete.action': m['intent.inventoryBalanceCatalogue.cmdDeleteInventoryBalance.form.action.cmdDeleteInventoryBalance'],
'form.title': m['section.inventoryBalanceCatalogue.recordForm.title'],
'create.title': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.title'],
'create.action': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.action.cmdCreateInventoryBalance'],
'create.quantity': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.physicalQuantity.label'],
'create.cost': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.applicableUnitCost.label'],
'create.status': m['intent.inventoryBalanceCatalogue.cmdCreateInventoryBalance.form.field.status.label'],
'update.title': m['intent.inventoryBalanceCatalogue.cmdUpdateInventoryBalance.form.title'],
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
'creation.title': m['section.inventoryBalanceCatalogue.inventoryBalanceCreation.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'choose.item': 'Selecione um item de estoque',
'no.selection': 'Selecione um saldo para revisar ou editar.',
'confirm.delete': 'Confirma a exclusão deste saldo de estoque?',
'loading': 'Carregando…',
'creating': 'Salvando…',
'updating': 'Salvando alterações…',
'deleting': 'Excluindo…',
'record.selected': 'Saldo selecionado',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'choose.item': 'Selecione um item de estoque',
'no.selection': 'Selecione um saldo para revisar ou editar.',
'confirm.delete': 'Confirma a exclusão deste saldo de estoque?',
'loading': 'Carregando…',
'creating': 'Salvando…',
'updating': 'Salvando alterações…',
'deleting': 'Excluindo…',
'record.selected': 'Saldo selecionado',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'choose.item': 'Select an inventory item',
'no.selection': 'Select a balance to review or edit.',
'confirm.delete': 'Confirm deletion of this inventory balance?',
'loading': 'Loading…',
'creating': 'Saving…',
'updating': 'Saving changes…',
'deleting': 'Deleting…',
'record.selected': 'Selected balance',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'choose.item': 'Seleccione un artículo de inventario',
'no.selection': 'Seleccione un saldo para revisar o editar.',
'confirm.delete': '¿Confirma la eliminación de este saldo de inventario?',
'loading': 'Cargando…',
'creating': 'Guardando…',
'updating': 'Guardando cambios…',
'deleting': 'Eliminando…',
'record.selected': 'Saldo seleccionado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--inventory-balance-catalogue-102046')
export class BuildFlowFsmDesktopPage31InventoryBalanceCataloguePage extends BuildFlowFsmInventoryBalanceCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
  ${this.renderWorkbench()}
  ${this.renderCreation()}
</div>`;
}
renderWorkbench() {
const msg = this.msg;
const rows = this.qryListInventoryBalanceData ?? [];
const selectedId = this.cmdUpdateInventoryBalanceInventoryBalanceId;
return html`<section class="space-y-4" aria-label=${msg['workbench.title']}>
  <div class="flex items-center justify-between gap-4">
    <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['recordList.title']}</h2>
    <button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-4 py-2" @click=${this.handleQryListInventoryBalanceClick} ?disabled=${this.qryListInventoryBalanceState === 'loading'}>
      ${this.qryListInventoryBalanceState === 'loading' ? msg['loading'] : msg['list.title']}
    </button>
  </div>
  ${this.qryListInventoryBalanceState === 'loading' ? html`<p class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4">${msg['loading']}</p>` : nothing}
  <div class="grid gap-6 lg:grid-cols-3">
    <div class="overflow-auto rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] lg:col-span-2">
      ${rows.length === 0 && this.qryListInventoryBalanceState !== 'loading' ? html`<p class="p-4 text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
        <th class="p-3">${msg['list.balanceId']}</th><th class="p-3">${msg['list.itemId']}</th><th class="p-3">${msg['list.quantity']}</th><th class="p-3">${msg['list.cost']}</th><th class="p-3">${msg['list.status']}</th>
      </tr></thead><tbody>${rows.map((row) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${row.inventoryBalanceId === selectedId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}" @click=${() => { this.setCmdUpdateInventoryBalanceInventoryBalanceId(String(row.inventoryBalanceId)); this.setCmdDeleteInventoryBalanceInventoryBalanceId(String(row.inventoryBalanceId)); this.setCmdUpdateInventoryBalanceInventoryItemId(String(row.inventoryItemId)); }}>
        <td class="p-3">${row.inventoryBalanceId}</td><td class="p-3">${row.inventoryItemId}</td><td class="p-3">${row.physicalQuantity}</td><td class="p-3">${row.applicableUnitCost}</td><td class="p-3">${row.status}</td>
      </tr>`)}</tbody></table>`}
    </div>
    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">${selectedId ? this.renderUpdateForm() : html`<p class="text-[var(--text-muted,#64748b)]">${msg['no.selection']}</p>`}</div>
  </div>
</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const busy = this.cmdUpdateInventoryBalanceState === 'loading';
return html`<form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateInventoryBalanceClick(event); }}>
  <h3 class="text-lg font-semibold">${msg['update.title']}</h3>
  <label class="block"><span class="mb-1 block">${msg['update.quantity']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdUpdateInventoryBalancePhysicalQuantity} @input=${this.handleCmdUpdateInventoryBalancePhysicalQuantityChange}></label>
  <label class="block"><span class="mb-1 block">${msg['update.cost']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdUpdateInventoryBalanceApplicableUnitCost} @input=${this.handleCmdUpdateInventoryBalanceApplicableUnitCostChange}></label>
  ${this.cmdUpdateInventoryBalanceState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['update.success']}</p>` : nothing}
  ${this.cmdUpdateInventoryBalanceState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdUpdateInventoryBalanceError || msg['update.error']}</p>` : nothing}
  <div class="flex flex-wrap gap-2"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" type="submit" ?disabled=${busy}>${busy ? msg['updating'] : msg['update.action']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" type="button" ?disabled=${this.cmdDeleteInventoryBalanceState === 'loading'} @click=${(event: Event) => { if (window.confirm(msg['confirm.delete'])) this.handleCmdDeleteInventoryBalanceClick(event); }}>${this.cmdDeleteInventoryBalanceState === 'loading' ? msg['deleting'] : msg['delete.action']}</button></div>
  ${this.cmdDeleteInventoryBalanceState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['delete.success']}</p>` : nothing}
  ${this.cmdDeleteInventoryBalanceState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdDeleteInventoryBalanceError || msg['delete.error']}</p>` : nothing}
</form>`;
}
renderCreation() {
const msg = this.msg;
const busy = this.cmdCreateInventoryBalanceState === 'loading';
const items = this.qryInventoryItemPickerData ?? [];
return html`<section class="mt-8 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5" aria-label=${msg['creation.title']}>
  <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['creation.title']}</h2>
  <form class="mt-4 grid gap-4 md:grid-cols-3" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateInventoryBalanceClick(event); }}>
    <label class="block"><span class="mb-1 block">${msg['picker.title']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateInventoryBalanceInventoryItemId} @change=${this.handleCmdCreateInventoryBalanceInventoryItemIdChange}><option value="">${msg['choose.item']}</option>${items.map((item) => html`<option value=${String(item.inventoryItemId)}>${item.name} — ${item.unitOfMeasure}</option>`)}</select></label>
    <label class="block"><span class="mb-1 block">${msg['create.quantity']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateInventoryBalancePhysicalQuantity} @input=${this.handleCmdCreateInventoryBalancePhysicalQuantityChange}></label>
    <label class="block"><span class="mb-1 block">${msg['create.cost']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateInventoryBalanceApplicableUnitCost} @input=${this.handleCmdCreateInventoryBalanceApplicableUnitCostChange}></label>
    <div class="md:col-span-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" type="submit" ?disabled=${busy}>${busy ? msg['creating'] : msg['create.action']}</button></div>
    ${this.cmdCreateInventoryBalanceState === 'success' ? html`<p class="md:col-span-3 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['create.success']}</p>` : nothing}
    ${this.cmdCreateInventoryBalanceState === 'error' ? html`<p class="md:col-span-3 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdCreateInventoryBalanceError || msg['create.error']}</p>` : nothing}
  </form>
</section>`;
}
}
