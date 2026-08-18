/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/inventoryItemCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'recordList.title': m['section.inventoryItemCatalogue.recordList.title'],
'list.title': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.title'],
'list.empty': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.empty'],
'list.inventoryItemId': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label'],
'list.name': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label'],
'list.description': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label'],
'list.unitOfMeasure': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label'],
'list.referenceUnitCost': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label'],
'list.status': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label'],
'delete.title': m['organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title'],
'delete.action': m['intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem'],
'form.title': m['section.inventoryItemCatalogue.recordForm.title'],
'create.title': m['organism.inventoryItemCatalogue.cmdCreateInventoryItem.title'],
'create.formTitle': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.title'],
'create.action': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.action.cmdCreateInventoryItem'],
'create.name': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.name.label'],
'create.description': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.description.label'],
'create.unitOfMeasure': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.unitOfMeasure.label'],
'create.referenceUnitCost': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.referenceUnitCost.label'],
'create.status': m['intent.inventoryItemCatalogue.cmdCreateInventoryItem.form.field.status.label'],
'update.title': m['organism.inventoryItemCatalogue.cmdUpdateInventoryItem.title'],
'update.formTitle': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.title'],
'update.action': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.action.cmdUpdateInventoryItem'],
'update.name': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.name.label'],
'update.description': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.description.label'],
'update.unitOfMeasure': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.unitOfMeasure.label'],
'update.referenceUnitCost': m['intent.inventoryItemCatalogue.cmdUpdateInventoryItem.form.field.referenceUnitCost.label'],
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
'newRecord': 'Novo item de estoque',
'chooseRecord': 'Selecione um item para editar',
'required': 'Obrigatório',
'loading': 'Carregando…',
'saving': 'Salvando…',
'deleting': 'Excluindo…',
'confirmDelete': 'Excluir este item de estoque? Esta ação não pode ser desfeita.',
'noSelection': 'Nenhum item selecionado.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'newRecord': 'Novo item de estoque',
'chooseRecord': 'Selecione um item para editar',
'required': 'Obrigatório',
'loading': 'Carregando…',
'saving': 'Salvando…',
'deleting': 'Excluindo…',
'confirmDelete': 'Excluir este item de estoque? Esta ação não pode ser desfeita.',
'noSelection': 'Nenhum item selecionado.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'newRecord': 'New inventory item',
'chooseRecord': 'Select an item to edit',
'required': 'Required',
'loading': 'Loading…',
'saving': 'Saving…',
'deleting': 'Deleting…',
'confirmDelete': 'Delete this inventory item? This action cannot be undone.',
'noSelection': 'No item selected.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'newRecord': 'Nuevo artículo de inventario',
'chooseRecord': 'Seleccione un artículo para editar',
'required': 'Obligatorio',
'loading': 'Cargando…',
'saving': 'Guardando…',
'deleting': 'Eliminando…',
'confirmDelete': '¿Eliminar este artículo de inventario? Esta acción no se puede deshacer.',
'noSelection': 'No hay ningún artículo seleccionado.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--inventory-item-catalogue-102046')
export class BuildFlowFsmDesktopPage21InventoryItemCataloguePage extends BuildFlowFsmInventoryItemCatalogueBase {
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
  ${this.renderList()}
  <div class="mt-6">${this.renderForm()}</div>
</main>`;
}
renderList() {
const msg = this.msg;
const rows: QryListInventoryItemOutput[] = this.qryListInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
  <div class="mb-4 flex items-center justify-between gap-4">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['recordList.title']}</h2>
    <button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryListInventoryItemClick} ?disabled=${this.qryListInventoryItemState === 'loading'}>
      ${this.qryListInventoryItemState === 'loading' ? msg['loading'] : msg['list.title']}
    </button>
  </div>
  ${this.qryListInventoryItemState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-sm text-[var(--text-muted,#64748b)]">
    <th class="p-3">${msg['list.name']}</th><th class="p-3">${msg['list.unitOfMeasure']}</th><th class="p-3">${msg['list.referenceUnitCost']}</th><th class="p-3">${msg['list.status']}</th><th class="p-3">${msg['delete.title']}</th>
  </tr></thead><tbody>${rows.map((item: QryListInventoryItemOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${item.inventoryItemId === this.cmdUpdateInventoryItemInventoryItemId ? 'bg-[var(--selected-bg,#eef2ff)]' : ''}">
    <td class="p-3"><button class="text-left font-medium underline-offset-2 hover:underline" @click=${() => { this.setCmdUpdateInventoryItemInventoryItemId(item.inventoryItemId); this.setCmdDeleteInventoryItemInventoryItemId(item.inventoryItemId); this.setCmdUpdateInventoryItemName(item.name); this.setCmdUpdateInventoryItemDescription(item.description ?? ''); this.setCmdUpdateInventoryItemUnitOfMeasure(item.unitOfMeasure); this.setCmdUpdateInventoryItemReferenceUnitCost(String(item.referenceUnitCost)); this.setCmdUpdateInventoryItemStatus(item.status); }}>${item.name}</button></td>
    <td class="p-3">${item.unitOfMeasure}</td><td class="p-3">${item.referenceUnitCost}</td><td class="p-3">${item.status}</td>
    <td class="p-3"><button class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-3 py-2 text-[var(--button-danger-text,#ffffff)]" @click=${() => { if (window.confirm(`${msg['confirmDelete']} ${item.name}`)) { this.setCmdDeleteInventoryItemInventoryItemId(item.inventoryItemId); this.handleCmdDeleteInventoryItemClick(); } }} ?disabled=${this.cmdDeleteInventoryItemState === 'loading'}>${this.cmdDeleteInventoryItemState === 'loading' ? msg['deleting'] : msg['delete.action']}</button></td>
  </tr>`)}</tbody></table></div>`}
</section>`;
}
renderForm() {
const msg = this.msg;
const hasSelection = this.cmdUpdateInventoryItemInventoryItemId.length > 0;
const createReady = this.cmdCreateInventoryItemName.trim().length > 0 && this.cmdCreateInventoryItemUnitOfMeasure.trim().length > 0 && this.cmdCreateInventoryItemReferenceUnitCost.trim().length > 0;
const updateReady = hasSelection && this.cmdUpdateInventoryItemName.trim().length > 0 && this.cmdUpdateInventoryItemUnitOfMeasure.trim().length > 0 && this.cmdUpdateInventoryItemReferenceUnitCost.trim().length > 0;
return html`<section class="grid gap-6 md:grid-cols-2">
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
    <h2 class="mb-4 text-lg font-semibold">${msg['create.formTitle']}</h2>
    ${this.cmdCreateInventoryItemState === 'success' ? html`<p class="mb-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}
    ${this.cmdCreateInventoryItemState === 'error' ? html`<p class="mb-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateInventoryItemError || msg['create.error']}</p>` : nothing}
    ${this.renderFields('create', msg)}
    <button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdCreateInventoryItemClick} ?disabled=${!createReady || this.cmdCreateInventoryItemState === 'loading'}>${this.cmdCreateInventoryItemState === 'loading' ? msg['saving'] : msg['create.action']}</button>
  </article>
  <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
    <h2 class="mb-4 text-lg font-semibold">${hasSelection ? msg['update.formTitle'] : msg['chooseRecord']}</h2>
    ${hasSelection ? html`${this.cmdUpdateInventoryItemState === 'success' ? html`<p class="mb-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateInventoryItemState === 'error' ? html`<p class="mb-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateInventoryItemError || msg['update.error']}</p>` : nothing}${this.renderFields('update', msg)}<button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdUpdateInventoryItemClick} ?disabled=${!updateReady || this.cmdUpdateInventoryItemState === 'loading'}>${this.cmdUpdateInventoryItemState === 'loading' ? msg['saving'] : msg['update.action']}</button>` : nothing}
  </article>
</section>`;
}
renderFields(mode: 'create' | 'update', msg: PageMessageType) {
const create = mode === 'create';
const values = create ? { name: this.cmdCreateInventoryItemName, description: this.cmdCreateInventoryItemDescription, unit: this.cmdCreateInventoryItemUnitOfMeasure, cost: this.cmdCreateInventoryItemReferenceUnitCost } : { name: this.cmdUpdateInventoryItemName, description: this.cmdUpdateInventoryItemDescription, unit: this.cmdUpdateInventoryItemUnitOfMeasure, cost: this.cmdUpdateInventoryItemReferenceUnitCost };
return html`<div class="space-y-4">
  <label class="block"><span class="mb-1 block">${create ? msg['create.name'] : msg['update.name']} <span aria-hidden="true">*</span></span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${values.name} @change=${create ? this.handleCmdCreateInventoryItemNameChange : this.handleCmdUpdateInventoryItemNameChange} required /></label>
  <label class="block"><span class="mb-1 block">${create ? msg['create.unitOfMeasure'] : msg['update.unitOfMeasure']} <span aria-hidden="true">*</span></span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${values.unit} @change=${create ? this.handleCmdCreateInventoryItemUnitOfMeasureChange : this.handleCmdUpdateInventoryItemUnitOfMeasureChange} required /></label>
  <label class="block"><span class="mb-1 block">${create ? msg['create.referenceUnitCost'] : msg['update.referenceUnitCost']} <span aria-hidden="true">*</span></span><input type="number" step="any" class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${values.cost} @change=${create ? this.handleCmdCreateInventoryItemReferenceUnitCostChange : this.handleCmdUpdateInventoryItemReferenceUnitCostChange} required /></label>
  <label class="block"><span class="mb-1 block">${create ? msg['create.description'] : msg['update.description']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${values.description} @change=${create ? this.handleCmdCreateInventoryItemDescriptionChange : this.handleCmdUpdateInventoryItemDescriptionChange}></textarea></label>
  <p class="text-sm text-[var(--text-muted,#64748b)]">${create ? msg['create.status'] : msg['update.status']}: ${create ? this.cmdCreateInventoryItemStatus : this.cmdUpdateInventoryItemStatus}</p>
</div>`;
}
}
