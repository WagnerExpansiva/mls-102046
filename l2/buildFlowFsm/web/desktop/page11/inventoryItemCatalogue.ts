/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/inventoryItemCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'page.title': m['section.inventoryItemCatalogue.recordList.title'],
'list.title': m['organism.inventoryItemCatalogue.qryListInventoryItem.title'],
'list.empty': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.empty'],
'list.inventoryItemId': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.inventoryItemId.label'],
'list.name': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.name.label'],
'list.description': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.description.label'],
'list.unitOfMeasure': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.unitOfMeasure.label'],
'list.referenceUnitCost': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.referenceUnitCost.label'],
'list.status': m['intent.inventoryItemCatalogue.qryListInventoryItem.list.column.status.label'],
'delete.title': m['organism.inventoryItemCatalogue.cmdDeleteInventoryItem.title'],
'delete.formTitle': m['intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.title'],
'delete.action': m['intent.inventoryItemCatalogue.cmdDeleteInventoryItem.form.action.cmdDeleteInventoryItem'],
'form.sectionTitle': m['section.inventoryItemCatalogue.recordForm.title'],
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
'loading': 'Carregando…',
'create.namePlaceholder': 'Informe o nome',
'create.descriptionPlaceholder': 'Informe a descrição',
'create.unitPlaceholder': 'Informe a unidade de medida',
'create.costPlaceholder': 'Informe o custo unitário',
'update.choose': 'Selecione um item',
'update.namePlaceholder': 'Informe o nome',
'update.descriptionPlaceholder': 'Informe a descrição',
'update.unitPlaceholder': 'Informe a unidade de medida',
'update.costPlaceholder': 'Informe o custo unitário',
'feedback.dismiss': 'Fechar',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…',
'create.namePlaceholder': 'Informe o nome',
'create.descriptionPlaceholder': 'Informe a descrição',
'create.unitPlaceholder': 'Informe a unidade de medida',
'create.costPlaceholder': 'Informe o custo unitário',
'update.choose': 'Selecione um item',
'update.namePlaceholder': 'Informe o nome',
'update.descriptionPlaceholder': 'Informe a descrição',
'update.unitPlaceholder': 'Informe a unidade de medida',
'update.costPlaceholder': 'Informe o custo unitário',
'feedback.dismiss': 'Fechar',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…',
'create.namePlaceholder': 'Enter the name',
'create.descriptionPlaceholder': 'Enter the description',
'create.unitPlaceholder': 'Enter the unit of measure',
'create.costPlaceholder': 'Enter the unit cost',
'update.choose': 'Select an item',
'update.namePlaceholder': 'Enter the name',
'update.descriptionPlaceholder': 'Enter the description',
'update.unitPlaceholder': 'Enter the unit of measure',
'update.costPlaceholder': 'Enter the unit cost',
'feedback.dismiss': 'Close',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…',
'create.namePlaceholder': 'Ingrese el nombre',
'create.descriptionPlaceholder': 'Ingrese la descripción',
'create.unitPlaceholder': 'Ingrese la unidad de medida',
'create.costPlaceholder': 'Ingrese el costo unitario',
'update.choose': 'Seleccione un artículo',
'update.namePlaceholder': 'Ingrese el nombre',
'update.descriptionPlaceholder': 'Ingrese la descripción',
'update.unitPlaceholder': 'Ingrese la unidad de medida',
'update.costPlaceholder': 'Ingrese el costo unitario',
'feedback.dismiss': 'Cerrar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--inventory-item-catalogue-102046')
export class BuildFlowFsmDesktopPage11InventoryItemCataloguePage extends BuildFlowFsmInventoryItemCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
<h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
${this.renderList()}
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
${this.renderCreateForm()}${this.renderUpdateForm()}
</div>
${this.renderDeletePanel()}
</div></div>`;
}
renderList() {
const msg = this.msg;
const rows: QryListInventoryItemOutput[] = this.qryListInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
<div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.title']}</h2>
<button class="rounded-md px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryListInventoryItemClick(event)}>${this.qryListInventoryItemState === 'loading' ? msg['loading'] : msg['workbench.title']}</button></div>
${this.qryListInventoryItemState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left"><th class="p-2">${msg['list.inventoryItemId']}</th><th class="p-2">${msg['list.name']}</th><th class="p-2">${msg['list.description']}</th><th class="p-2">${msg['list.unitOfMeasure']}</th><th class="p-2">${msg['list.referenceUnitCost']}</th><th class="p-2">${msg['list.status']}</th></tr></thead><tbody>${rows.map((item: QryListInventoryItemOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${item.inventoryItemId}</td><td class="p-2">${item.name}</td><td class="p-2">${item.description}</td><td class="p-2">${item.unitOfMeasure}</td><td class="p-2">${item.referenceUnitCost}</td><td class="p-2">${item.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><form class="space-y-3" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateInventoryItemClick(event); }}>
<label class="block text-sm">${msg['create.name']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemName} placeholder=${msg['create.namePlaceholder']} @input=${(event: Event) => this.handleCmdCreateInventoryItemNameChange(event)}></label>
<label class="block text-sm">${msg['create.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" placeholder=${msg['create.descriptionPlaceholder']} @input=${(event: Event) => this.handleCmdCreateInventoryItemDescriptionChange(event)}>${this.cmdCreateInventoryItemDescription}</textarea></label>
<label class="block text-sm">${msg['create.unitOfMeasure']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemUnitOfMeasure} placeholder=${msg['create.unitPlaceholder']} @input=${(event: Event) => this.handleCmdCreateInventoryItemUnitOfMeasureChange(event)}></label>
<label class="block text-sm">${msg['create.referenceUnitCost']}<input required type="number" step="any" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateInventoryItemReferenceUnitCost} placeholder=${msg['create.costPlaceholder']} @input=${(event: Event) => this.handleCmdCreateInventoryItemReferenceUnitCostChange(event)}></label>
<button ?disabled=${this.cmdCreateInventoryItemState === 'loading'} class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]">${this.cmdCreateInventoryItemState === 'loading' ? msg['loading'] : msg['create.action']}</button></form>${this.cmdCreateInventoryItemState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['create.success']}</p>` : this.cmdCreateInventoryItemState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdCreateInventoryItemError || msg['create.error']}</p>` : nothing}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
const rows: QryListInventoryItemOutput[] = this.qryListInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4"><h2 class="text-lg font-semibold">${msg['update.title']}</h2><form class="space-y-3" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateInventoryItemClick(event); }}>
<label class="block text-sm">${msg['list.inventoryItemId']}<select required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemInventoryItemId} @change=${(event: Event) => this.handleCmdUpdateInventoryItemInventoryItemIdChange(event)}><option value="">${msg['update.choose']}</option>${rows.map((item: QryListInventoryItemOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label>
<label class="block text-sm">${msg['update.name']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemName} placeholder=${msg['update.namePlaceholder']} @input=${(event: Event) => this.handleCmdUpdateInventoryItemNameChange(event)}></label>
<label class="block text-sm">${msg['update.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" placeholder=${msg['update.descriptionPlaceholder']} @input=${(event: Event) => this.handleCmdUpdateInventoryItemDescriptionChange(event)}>${this.cmdUpdateInventoryItemDescription}</textarea></label>
<label class="block text-sm">${msg['update.unitOfMeasure']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemUnitOfMeasure} placeholder=${msg['update.unitPlaceholder']} @input=${(event: Event) => this.handleCmdUpdateInventoryItemUnitOfMeasureChange(event)}></label>
<label class="block text-sm">${msg['update.referenceUnitCost']}<input required type="number" step="any" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateInventoryItemReferenceUnitCost} placeholder=${msg['update.costPlaceholder']} @input=${(event: Event) => this.handleCmdUpdateInventoryItemReferenceUnitCostChange(event)}></label>
<button ?disabled=${this.cmdUpdateInventoryItemState === 'loading' || this.cmdUpdateInventoryItemInventoryItemId.length === 0} class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]">${this.cmdUpdateInventoryItemState === 'loading' ? msg['loading'] : msg['update.action']}</button></form>${this.cmdUpdateInventoryItemState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['update.success']}</p>` : this.cmdUpdateInventoryItemState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdUpdateInventoryItemError || msg['update.error']}</p>` : nothing}</section>`;
}
renderDeletePanel() {
const msg = this.msg;
const rows: QryListInventoryItemOutput[] = this.qryListInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4"><h2 class="text-lg font-semibold">${msg['delete.title']}</h2><label class="block text-sm">${msg['list.inventoryItemId']}<select required class="mt-1 max-w-md w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdDeleteInventoryItemInventoryItemId} @change=${(event: Event) => this.handleCmdDeleteInventoryItemInventoryItemIdChange(event)}><option value="">${msg['update.choose']}</option>${rows.map((item: QryListInventoryItemOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label><button ?disabled=${this.cmdDeleteInventoryItemState === 'loading' || this.cmdDeleteInventoryItemInventoryItemId.length === 0} class="rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]" @click=${(event: Event) => this.handleCmdDeleteInventoryItemClick(event)}>${this.cmdDeleteInventoryItemState === 'loading' ? msg['loading'] : msg['delete.action']}</button>${this.cmdDeleteInventoryItemState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['delete.success']}</p>` : this.cmdDeleteInventoryItemState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdDeleteInventoryItemError || msg['delete.error']}</p>` : nothing}</section>`;
}
}