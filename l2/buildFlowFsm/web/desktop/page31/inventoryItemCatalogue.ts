/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/inventoryItemCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInventoryItemCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.js';
import type { QryListInventoryItemOutput } from '/_102046_/l2/buildFlowFsm/web/shared/inventoryItemCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'list.section': m['section.inventoryItemCatalogue.recordList.title'],
'list.title': m['organism.inventoryItemCatalogue.qryListInventoryItem.title'],
'list.heading': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.title'],
'list.empty': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.empty'],
'list.id': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label'],
'list.name': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label'],
'list.description': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label'],
'list.unit': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label'],
'list.cost': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label'],
'list.status': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label'],
'delete.section': m['organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title'],
'delete.form': m['intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title'],
'delete.action': m['intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem'],
'form.section': m['section.inventoryItemCatalogue.recordForm.title'],
'create.section': m['organism.inventoryItemCatalogue.cmdCreateInventoryItem.title'],
'create.form': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title'],
'create.action': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem'],
'create.name': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label'],
'create.description': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label'],
'create.unit': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label'],
'create.cost': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label'],
'create.status': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label'],
'update.section': m['organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title'],
'update.form': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title'],
'update.action': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem'],
'update.name': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label'],
'update.description': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label'],
'update.unit': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label'],
'update.cost': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label'],
'update.status': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.status.label'],
'create.success': m['action.cmdCreateInventoryItem.success'],
'create.error': m['action.cmdCreateInventoryItem.error'],
'update.success': m['action.cmdUpdateInventoryItem.success'],
'update.error': m['action.cmdUpdateInventoryItem.error'],
'delete.success': m['action.cmdDeleteInventoryItem.success'],
'delete.error': m['action.cmdDeleteInventoryItem.error'],
'workbench.title': m['section.inventoryItemCatalogue.inventoryWorkbench.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'newItem': 'Novo item',
'emptySelection': 'Selecione um item para ver e editar os detalhes.',
'systemDefault': 'Definido pelo sistema',
'confirmDelete': 'Excluir este item de estoque?',
'loading': 'Carregando…',
'refresh': 'Atualizar lista',
'required': 'Obrigatório',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'newItem': 'Novo item',
'emptySelection': 'Selecione um item para ver e editar os detalhes.',
'systemDefault': 'Definido pelo sistema',
'confirmDelete': 'Excluir este item de estoque?',
'loading': 'Carregando…',
'refresh': 'Atualizar lista',
'required': 'Obrigatório',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'newItem': 'New item',
'emptySelection': 'Select an item to view and edit its details.',
'systemDefault': 'Set by the system',
'confirmDelete': 'Delete this inventory item?',
'loading': 'Loading…',
'refresh': 'Refresh list',
'required': 'Required',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'newItem': 'Nuevo artículo',
'emptySelection': 'Seleccione un artículo para ver y editar sus detalles.',
'systemDefault': 'Definido por el sistema',
'confirmDelete': '¿Eliminar este artículo de inventario?',
'loading': 'Cargando…',
'refresh': 'Actualizar lista',
'required': 'Obligatorio',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--inventory-item-catalogue-102046')
export class BuildFlowFsmDesktopPage31InventoryItemCataloguePage extends BuildFlowFsmInventoryItemCatalogueBase {
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
  ${this.renderHeader()}
  <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,1fr)]">
    ${this.renderList()}
    ${this.renderDetail()}
  </div>
  <details class="mt-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
    <summary class="cursor-pointer list-none px-5 py-4 font-semibold text-[var(--text-strong,#0f172a)]">${msg['newItem']}</summary>
    <div class="border-t border-[var(--border-subtle,#e2e8f0)] p-5">${this.renderCreateForm()}</div>
  </details>
</div>`;
}
renderHeader() {
const msg = this.msg;
return html`<header class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
  <div class="flex flex-wrap items-start justify-between gap-4">
    <div>
      <h1 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workbench.title']}</h1>
      <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['form.section']}</p>
    </div>
    <div class="flex items-center gap-2">
      <span class="rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-3 py-1 text-sm text-[var(--status-neutral-text,#334155)]">${this.status}</span>
      <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-sm text-[var(--button-secondary-text,#334155)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryListInventoryItemClick(event)}>${msg['refresh']}</button>
    </div>
  </div>
</header>`;
}
renderList() {
const msg = this.msg;
const items: QryListInventoryItemOutput[] = this.qryListInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]" aria-labelledby="inventory-list-heading">
  <div class="mb-4 flex items-center justify-between gap-3"><h2 id="inventory-list-heading" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.heading']}</h2>${this.qryListInventoryItemState === 'loading' ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</span>` : nothing}</div>
  ${this.qryListInventoryItemState === 'error' ? html`<p class="mb-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-sm text-[var(--status-error-text,#991b1b)]">${msg['list.title']}</p>` : nothing}
  ${items.length === 0 && this.qryListInventoryItemState !== 'loading' ? html`<p class="py-8 text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-[var(--text-muted,#64748b)]"><th class="px-3 py-3">${msg['list.name']}</th><th class="px-3 py-3">${msg['list.description']}</th><th class="px-3 py-3">${msg['list.unit']}</th><th class="px-3 py-3">${msg['list.cost']}</th><th class="px-3 py-3">${msg['list.status']}</th></tr></thead><tbody>${items.map((item: QryListInventoryItemOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)] ${item.inventoryItemId === this.cmdUpdateInventoryItemInventoryItemId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}" @click=${() => { this.setCmdUpdateInventoryItemInventoryItemId(item.inventoryItemId); this.setCmdDeleteInventoryItemInventoryItemId(item.inventoryItemId); }}><td class="px-3 py-3 font-medium text-[var(--text-strong,#0f172a)]">${item.name}</td><td class="max-w-xs truncate px-3 py-3 text-[var(--text-muted,#64748b)]">${item.description}</td><td class="px-3 py-3">${item.unitOfMeasure}</td><td class="px-3 py-3">${item.referenceUnitCost}</td><td class="px-3 py-3">${item.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderDetail() {
const msg = this.msg;
const selected: QryListInventoryItemOutput | undefined = (this.qryListInventoryItemData ?? []).find((item: QryListInventoryItemOutput) => item.inventoryItemId === this.cmdUpdateInventoryItemInventoryItemId);
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">${selected ? html`<div class="mb-5"><p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['update.section']}</p><h2 class="mt-1 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${selected.name}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${selected.inventoryItemId}</p></div>${this.renderUpdateForm(selected)}` : html`<div class="flex min-h-64 items-center justify-center text-center"><p class="max-w-xs text-sm text-[var(--text-muted,#64748b)]">${msg['emptySelection']}</p></div>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<form class="grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateInventoryItemClick(event); }}><label class="grid gap-1 text-sm">${msg['create.name']} <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['required']}</span><input required class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemName} @input=${(event: Event) => this.handleCmdCreateInventoryItemNameChange(event)}></label><label class="grid gap-1 text-sm">${msg['create.description']}<textarea class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemDescription} @input=${(event: Event) => this.handleCmdCreateInventoryItemDescriptionChange(event)}></textarea></label><label class="grid gap-1 text-sm">${msg['create.unit']}<input required class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemUnitOfMeasure} @input=${(event: Event) => this.handleCmdCreateInventoryItemUnitOfMeasureChange(event)}></label><label class="grid gap-1 text-sm">${msg['create.cost']}<input required type="number" step="any" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemReferenceUnitCost} @input=${(event: Event) => this.handleCmdCreateInventoryItemReferenceUnitCostChange(event)}></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.status']}: ${msg['systemDefault']}</p><button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateInventoryItemState === 'loading'}>${this.cmdCreateInventoryItemState === 'loading' ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateInventoryItemState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateInventoryItemState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInventoryItemError || msg['create.error']}</p>` : nothing}</form>`;
}
renderUpdateForm(selected: QryListInventoryItemOutput) {
const msg = this.msg;
return html`<form class="grid gap-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateInventoryItemClick(event); }}><label class="grid gap-1 text-sm">${msg['update.name']}<input required class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemName || selected.name} @input=${(event: Event) => this.handleCmdUpdateInventoryItemNameChange(event)}></label><label class="grid gap-1 text-sm">${msg['update.description']}<textarea class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemDescription || selected.description} @input=${(event: Event) => this.handleCmdUpdateInventoryItemDescriptionChange(event)}></textarea></label><label class="grid gap-1 text-sm">${msg['update.unit']}<input required class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemUnitOfMeasure || selected.unitOfMeasure} @input=${(event: Event) => this.handleCmdUpdateInventoryItemUnitOfMeasureChange(event)}></label><label class="grid gap-1 text-sm">${msg['update.cost']}<input required type="number" step="any" class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemReferenceUnitCost || String(selected.referenceUnitCost)} @input=${(event: Event) => this.handleCmdUpdateInventoryItemReferenceUnitCostChange(event)}></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.status']}: ${msg['systemDefault']}</p><div class="flex flex-wrap gap-2"><button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateInventoryItemState === 'loading'}>${this.cmdUpdateInventoryItemState === 'loading' ? msg['loading'] : msg['update.action']}</button><button type="button" class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 font-semibold text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteInventoryItemState === 'loading'} @click=${(event: Event) => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteInventoryItemClick(event); }}>${this.cmdDeleteInventoryItemState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div>${this.cmdUpdateInventoryItemState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateInventoryItemState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateInventoryItemError || msg['update.error']}</p>` : nothing}${this.cmdDeleteInventoryItemState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}${this.cmdDeleteInventoryItemState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteInventoryItemError || msg['delete.error']}</p>` : nothing}</form>`;
}
}