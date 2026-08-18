/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryBalanceCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInventoryBalanceCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.js';
import type { QryListInventoryBalanceOutput, QryInventoryItemPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryBalanceCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'records.title': m['section.inventoryBalanceCatalogue.recordList.title'],
  'balance.list.title': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.title'],
  'balance.empty': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.empty'],
  'balance.id': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryBalanceId.label'],
  'balance.item': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.inventoryItemId.label'],
  'balance.quantity': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.physicalQuantity.label'],
  'balance.cost': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.applicableUnitCost.label'],
  'balance.status': m['intent.inventoryBalanceCatalogue.qryListInventoryBalance.list.column.status.label'],
  'items.title': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.title'],
  'items.empty': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.empty'],
  'items.id': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label'],
  'items.name': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.name.label'],
  'items.description': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.description.label'],
  'items.unit': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.unitOfMeasure.label'],
  'items.cost': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.referenceUnitCost.label'],
  'items.status': m['intent.inventoryBalanceCatalogue.qryInventoryItemPicker.list.column.status.label'],
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
  'page.loading': 'Carregando…',
  'page.refresh': 'Atualizar',
  'page.chooseItem': 'Selecione um item de estoque',
  'page.chooseBalance': 'Selecione um saldo de estoque',
  'page.noSelection': 'Nenhum saldo selecionado',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'page.loading': 'Carregando…',
  'page.refresh': 'Atualizar',
  'page.chooseItem': 'Selecione um item de estoque',
  'page.chooseBalance': 'Selecione um saldo de estoque',
  'page.noSelection': 'Nenhum saldo selecionado',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'page.loading': 'Loading…',
  'page.refresh': 'Refresh',
  'page.chooseItem': 'Select an inventory item',
  'page.chooseBalance': 'Select an inventory balance',
  'page.noSelection': 'No balance selected',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'page.loading': 'Cargando…',
  'page.refresh': 'Actualizar',
  'page.chooseItem': 'Seleccione un artículo de inventario',
  'page.chooseBalance': 'Seleccione un saldo de inventario',
  'page.noSelection': 'Ningún saldo seleccionado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--inventory-balance-catalogue-102046')
export class BuildFlowFsmDesktopPage11InventoryBalanceCataloguePage extends BuildFlowFsmInventoryBalanceCatalogueBase {
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
  <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
    <main class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['workbench.title']}</h1>
      ${this.renderBalanceList()}
      ${this.renderCreationForm()}
      ${this.renderUpdateForm()}
      ${this.renderDeleteForm()}
      ${this.renderItemPicker()}
    </main>
  </div>`;
}
renderBalanceList() {
const msg = this.msg;
const rows: QryListInventoryBalanceOutput[] = this.qryListInventoryBalanceData ?? [];
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['records.title']}</h2>
      <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryListInventoryBalanceClick}>${msg['page.refresh']}</button>
    </div>
    ${this.qryListInventoryBalanceState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['page.loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['balance.empty']}</p>` : html`
      <div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left">
        <th class="px-3 py-2">${msg['balance.id']}</th><th class="px-3 py-2">${msg['balance.item']}</th><th class="px-3 py-2">${msg['balance.quantity']}</th><th class="px-3 py-2">${msg['balance.cost']}</th><th class="px-3 py-2">${msg['balance.status']}</th>
      </tr></thead><tbody>${rows.map((item: QryListInventoryBalanceOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${item.inventoryBalanceId}</td><td class="px-3 py-2">${item.inventoryItemId}</td><td class="px-3 py-2">${item.physicalQuantity}</td><td class="px-3 py-2">${item.applicableUnitCost}</td><td class="px-3 py-2">${item.status}</td></tr>`)}</tbody></table></div>`}
  </section>`;
}
renderCreationForm() {
const msg = this.msg;
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['creation.title']}</h2>
    <div class="grid gap-4 md:grid-cols-3">
      <label class="space-y-1"><span>${msg['balance.item']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdCreateInventoryBalanceInventoryItemId} @change=${this.handleCmdCreateInventoryBalanceInventoryItemIdChange}><option value="">${msg['page.chooseItem']}</option>${(this.qryInventoryItemPickerData ?? []).map((item: QryInventoryItemPickerOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label>
      <label class="space-y-1"><span>${msg['create.quantity']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" .value=${this.cmdCreateInventoryBalancePhysicalQuantity} @input=${this.handleCmdCreateInventoryBalancePhysicalQuantityChange}></label>
      <label class="space-y-1"><span>${msg['create.cost']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" step="any" .value=${this.cmdCreateInventoryBalanceApplicableUnitCost} @input=${this.handleCmdCreateInventoryBalanceApplicableUnitCostChange}></label>
    </div>
    <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdCreateInventoryBalanceState === 'loading'} @click=${this.handleCmdCreateInventoryBalanceClick}>${this.cmdCreateInventoryBalanceState === 'loading' ? msg['page.loading'] : msg['create.action']}</button>
    ${this.cmdCreateInventoryBalanceState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3">${msg['create.success']}</p>` : nothing}
    ${this.cmdCreateInventoryBalanceState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3">${this.cmdCreateInventoryBalanceError || msg['create.error']}</p>` : nothing}
  </section>`;
}
renderUpdateForm() {
const msg = this.msg;
const rows: QryListInventoryBalanceOutput[] = this.qryListInventoryBalanceData ?? [];
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['update.title']}</h2>
    <div class="grid gap-4 md:grid-cols-3">
      <label class="space-y-1"><span>${msg['balance.id']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdUpdateInventoryBalanceInventoryBalanceId} @change=${this.handleCmdUpdateInventoryBalanceInventoryBalanceIdChange}><option value="">${msg['page.chooseBalance']}</option>${rows.map((item: QryListInventoryBalanceOutput) => html`<option value=${item.inventoryBalanceId}>${item.inventoryBalanceId}</option>`)}</select></label>
      <label class="space-y-1"><span>${msg['balance.item']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdUpdateInventoryBalanceInventoryItemId} @change=${this.handleCmdUpdateInventoryBalanceInventoryItemIdChange}><option value="">${msg['page.chooseItem']}</option>${(this.qryInventoryItemPickerData ?? []).map((item: QryInventoryItemPickerOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label>
      <label class="space-y-1"><span>${msg['update.quantity']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" .value=${this.cmdUpdateInventoryBalancePhysicalQuantity} @input=${this.handleCmdUpdateInventoryBalancePhysicalQuantityChange}></label>
      <label class="space-y-1"><span>${msg['update.cost']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" step="any" .value=${this.cmdUpdateInventoryBalanceApplicableUnitCost} @input=${this.handleCmdUpdateInventoryBalanceApplicableUnitCostChange}></label>
    </div>
    <button type="button" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdUpdateInventoryBalanceState === 'loading'} @click=${this.handleCmdUpdateInventoryBalanceClick}>${this.cmdUpdateInventoryBalanceState === 'loading' ? msg['page.loading'] : msg['update.action']}</button>
    ${this.cmdUpdateInventoryBalanceState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3">${msg['update.success']}</p>` : nothing}
    ${this.cmdUpdateInventoryBalanceState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3">${this.cmdUpdateInventoryBalanceError || msg['update.error']}</p>` : nothing}
  </section>`;
}
renderDeleteForm() {
const msg = this.msg;
const rows: QryListInventoryBalanceOutput[] = this.qryListInventoryBalanceData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['delete.title']}</h2><div class="flex flex-wrap items-end gap-3"><label class="space-y-1"><span>${msg['balance.id']}</span><select class="block rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdDeleteInventoryBalanceInventoryBalanceId} @change=${this.handleCmdDeleteInventoryBalanceInventoryBalanceIdChange}><option value="">${msg['page.chooseBalance']}</option>${rows.map((item: QryListInventoryBalanceOutput) => html`<option value=${item.inventoryBalanceId}>${item.inventoryBalanceId}</option>`)}</select></label><button type="button" class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdDeleteInventoryBalanceState === 'loading'} @click=${this.handleCmdDeleteInventoryBalanceClick}>${this.cmdDeleteInventoryBalanceState === 'loading' ? msg['page.loading'] : msg['delete.action']}</button></div>${this.cmdDeleteInventoryBalanceState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteInventoryBalanceState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3">${this.cmdDeleteInventoryBalanceError || msg['delete.error']}</p>` : nothing}</section>`;
}
renderItemPicker() {
const msg = this.msg;
const items: QryInventoryItemPickerOutput[] = this.qryInventoryItemPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['items.title']}</h2><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryInventoryItemPickerClick}>${msg['page.refresh']}</button></div>${this.qryInventoryItemPickerState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['page.loading']}</p>` : items.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['items.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left"><th class="px-3 py-2">${msg['items.id']}</th><th class="px-3 py-2">${msg['items.name']}</th><th class="px-3 py-2">${msg['items.description']}</th><th class="px-3 py-2">${msg['items.unit']}</th><th class="px-3 py-2">${msg['items.cost']}</th><th class="px-3 py-2">${msg['items.status']}</th></tr></thead><tbody>${items.map((item: QryInventoryItemPickerOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${item.inventoryItemId}</td><td class="px-3 py-2">${item.name}</td><td class="px-3 py-2">${item.description}</td><td class="px-3 py-2">${item.unitOfMeasure}</td><td class="px-3 py-2">${item.referenceUnitCost}</td><td class="px-3 py-2">${item.status}</td></tr>`)}</tbody></table></div>`}</section>`;
}
}
