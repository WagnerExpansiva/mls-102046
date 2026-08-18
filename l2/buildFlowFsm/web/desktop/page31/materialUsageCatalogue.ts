/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/materialUsageCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMaterialUsageCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.js';
import type {
  QryListMaterialUsageOutput,
  QryInventoryBalancePickerOutput,
  QryInventoryItemPickerOutput,
  QryProjectPickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'workbench.title': m['section.materialUsageCatalogue.usageWorkbench.title'],
  'list.title': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.title'],
  'list.empty': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.empty'],
  'list.id': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label'],
  'list.status': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label'],
  'list.project': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label'],
  'list.item': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label'],
  'list.balance': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label'],
  'list.quantity': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label'],
  'list.description': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label'],
  'list.date': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label'],
  'list.cost': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label'],
  'create.title': m['organism.materialUsageCatalogue.cmdCreateMaterialUsage.title'],
  'create.form': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title'],
  'create.save': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage'],
  'create.quantity': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label'],
  'create.description': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label'],
  'create.date': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label'],
  'create.cost': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label'],
  'balance.title': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.title'],
  'balance.empty': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.empty'],
  'balance.id': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label'],
  'balance.item': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label'],
  'balance.quantity': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label'],
  'balance.cost': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.applicableUnitCost.label'],
  'item.title': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.title'],
  'item.empty': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.empty'],
  'item.id': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label'],
  'item.name': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label'],
  'project.title': m['intent.materialUsageCatalogue.qryProjectPicker.list.title'],
  'project.empty': m['intent.materialUsageCatalogue.qryProjectPicker.list.empty'],
  'project.id': m['intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label'],
  'project.name': m['intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label'],
  'update.title': m['organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title'],
  'update.form': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title'],
  'update.save': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage'],
  'update.status': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label'],
  'update.quantity': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label'],
  'update.description': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label'],
  'update.date': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label'],
  'update.cost': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label'],
  'delete.title': m['organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title'],
  'delete.action': m['intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage'],
  'create.success': m['action.cmdCreateMaterialUsage.success'],
  'create.error': m['action.cmdCreateMaterialUsage.error'],
  'update.success': m['action.cmdUpdateMaterialUsage.success'],
  'update.error': m['action.cmdUpdateMaterialUsage.error'],
  'delete.success': m['action.cmdDeleteMaterialUsage.success'],
  'delete.error': m['action.cmdDeleteMaterialUsage.error'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'choose.item': 'Selecione o item',
  'choose.balance': 'Selecione o saldo',
  'choose.project': 'Selecione a obra',
  'select.record': 'Selecione um consumo para corrigir',
  'loading': 'Carregando…',
  'saving': 'Salvando…',
  'deleting': 'Excluindo…',
  'required': 'Obrigatório',
  'notSelected': 'Nenhum consumo selecionado',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'choose.item': 'Selecione o item', 'choose.balance': 'Selecione o saldo', 'choose.project': 'Selecione a obra',
  'select.record': 'Selecione um consumo para corrigir', 'loading': 'Carregando…', 'saving': 'Salvando…', 'deleting': 'Excluindo…', 'required': 'Obrigatório', 'notSelected': 'Nenhum consumo selecionado',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'choose.item': 'Select the item', 'choose.balance': 'Select the balance', 'choose.project': 'Select the project',
  'select.record': 'Select a usage record to correct', 'loading': 'Loading…', 'saving': 'Saving…', 'deleting': 'Deleting…', 'required': 'Required', 'notSelected': 'No usage selected',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'choose.item': 'Seleccione el artículo', 'choose.balance': 'Seleccione el saldo', 'choose.project': 'Seleccione la obra',
  'select.record': 'Seleccione un consumo para corregir', 'loading': 'Cargando…', 'saving': 'Guardando…', 'deleting': 'Eliminando…', 'required': 'Obligatorio', 'notSelected': 'Ningún consumo seleccionado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--material-usage-catalogue-102046')
export class BuildFlowFsmDesktopPage31MaterialUsageCataloguePage extends BuildFlowFsmMaterialUsageCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
  <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workbench.title']}</h1>
  ${this.renderRecordList()}
  <div class="grid gap-6 lg:grid-cols-2">${this.renderCreatePanel()}${this.renderDetailPanel()}</div>
  <div class="grid gap-6 lg:grid-cols-3">${this.renderProjectPicker()}${this.renderItemPicker()}${this.renderBalancePicker()}</div>
</main>`;
}
renderRecordList() {
const msg = this.msg;
const rows: QryListMaterialUsageOutput[] = this.qryListMaterialUsageData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
  <div class="mb-3 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['list.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryListMaterialUsageClick}>${msg['list.title']}</button></div>
  ${this.qryListMaterialUsageState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left">${[msg['list.id'],msg['list.status'],msg['list.project'],msg['list.item'],msg['list.balance'],msg['list.quantity'],msg['list.date'],msg['list.cost']].map((label: string) => html`<th class="p-2">${label}</th>`)}</tr></thead><tbody>${rows.map((item: QryListMaterialUsageOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => this.selectRecord(item)}><td class="p-2">${item.materialUsageId}</td><td class="p-2">${item.status}</td><td class="p-2">${item.projectId}</td><td class="p-2">${item.inventoryItemId}</td><td class="p-2">${item.inventoryBalanceId}</td><td class="p-2">${item.quantity}</td><td class="p-2">${item.consumedOn}</td><td class="p-2">${item.unitCostBasis}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderCreatePanel() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['create.form']}</p>
  <div class="space-y-3">${this.renderCreateLookups()}${this.renderField(msg['create.quantity'], this.cmdCreateMaterialUsageQuantity, this.handleCmdCreateMaterialUsageQuantityChange, 'number')}${this.renderField(msg['create.description'], this.cmdCreateMaterialUsageUsageDescription, this.handleCmdCreateMaterialUsageUsageDescriptionChange, 'text')}${this.renderField(msg['create.date'], this.cmdCreateMaterialUsageConsumedOn, this.handleCmdCreateMaterialUsageConsumedOnChange, 'date')}${this.renderField(msg['create.cost'], this.cmdCreateMaterialUsageUnitCostBasis, this.handleCmdCreateMaterialUsageUnitCostBasisChange, 'number')}
  <button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateMaterialUsageState === 'loading'} @click=${this.handleCmdCreateMaterialUsageClick}>${this.cmdCreateMaterialUsageState === 'loading' ? msg['saving'] : msg['create.save']}</button>${this.cmdCreateMaterialUsageState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateMaterialUsageState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateMaterialUsageError || msg['create.error']}</p>` : nothing}</div></section>`;
}
renderCreateLookups() {
const msg = this.msg;
return html`<div class="grid gap-3 sm:grid-cols-2"><label class="text-sm">${msg['choose.item']}<select class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageInventoryItemInventoryItemId} @change=${this.handleCmdCreateMaterialUsageInventoryItemInventoryItemIdChange}><option value="">${msg['choose.item']}</option>${(this.qryInventoryItemPickerData ?? []).map((item: QryInventoryItemPickerOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label><label class="text-sm">${msg['choose.balance']}<select class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId} @change=${this.handleCmdCreateMaterialUsageInventoryBalanceInventoryBalanceIdChange}><option value="">${msg['choose.balance']}</option>${(this.qryInventoryBalancePickerData ?? []).map((balance: QryInventoryBalancePickerOutput) => html`<option value=${balance.inventoryBalanceId}>${balance.inventoryBalanceId} — ${balance.physicalQuantity} / ${balance.applicableUnitCost}</option>`)}</select></label></div>`;
}
renderField(label: string, value: string, handler: (event: Event) => void, type: string) {
return html`<label class="block text-sm">${label}<span class="text-[var(--status-error-text,#b91c1c)]"> *</span><input class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" required type=${type} .value=${value} @input=${handler}></label>`;
}
renderDetailPanel() {
const msg = this.msg;
const selectedId = this.cmdUpdateMaterialUsageMaterialUsageId;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['update.title']}</h2>${selectedId ? html`<p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">${msg['update.form']}: ${selectedId}</p><div class="space-y-3"><div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm">${msg['update.status']}: ${this.cmdUpdateMaterialUsageStatus}</div>${this.renderUpdateLookups()}${this.renderField(msg['update.quantity'], this.cmdUpdateMaterialUsageQuantity, this.handleCmdUpdateMaterialUsageQuantityChange, 'number')}${this.renderField(msg['update.description'], this.cmdUpdateMaterialUsageUsageDescription, this.handleCmdUpdateMaterialUsageUsageDescriptionChange, 'text')}${this.renderField(msg['update.date'], this.cmdUpdateMaterialUsageConsumedOn, this.handleCmdUpdateMaterialUsageConsumedOnChange, 'date')}${this.renderField(msg['update.cost'], this.cmdUpdateMaterialUsageUnitCostBasis, this.handleCmdUpdateMaterialUsageUnitCostBasisChange, 'number')}<div class="flex flex-wrap gap-2"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateMaterialUsageState === 'loading'} @click=${this.handleCmdUpdateMaterialUsageClick}>${this.cmdUpdateMaterialUsageState === 'loading' ? msg['saving'] : msg['update.save']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteMaterialUsageState === 'loading'} @click=${(event: Event) => { if (window.confirm(`${msg['delete.action']}: ${selectedId}?`)) this.handleCmdDeleteMaterialUsageClick(event); }}>${this.cmdDeleteMaterialUsageState === 'loading' ? msg['deleting'] : msg['delete.action']}</button></div>${this.cmdUpdateMaterialUsageState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateMaterialUsageState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateMaterialUsageError || msg['update.error']}</p>` : nothing}${this.cmdDeleteMaterialUsageState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}</div>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['select.record']}</p>`}</section>`;
}
renderUpdateLookups() {
const msg = this.msg;
return html`<div class="grid gap-3 sm:grid-cols-2"><label class="text-sm">${msg['list.project']}<select class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageProjectId} @change=${this.handleCmdUpdateMaterialUsageProjectIdChange}><option value="">${msg['choose.project']}</option>${(this.qryProjectPickerData ?? []).map((project: QryProjectPickerOutput) => html`<option value=${project.projectId}>${project.name}</option>`)}</select></label><label class="text-sm">${msg['list.item']}<select class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageInventoryItemId} @change=${this.handleCmdUpdateMaterialUsageInventoryItemIdChange}><option value="">${msg['choose.item']}</option>${(this.qryInventoryItemPickerData ?? []).map((item: QryInventoryItemPickerOutput) => html`<option value=${item.inventoryItemId}>${item.name}</option>`)}</select></label><label class="text-sm">${msg['list.balance']}<select class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageInventoryBalanceId} @change=${this.handleCmdUpdateMaterialUsageInventoryBalanceIdChange}><option value="">${msg['choose.balance']}</option>${(this.qryInventoryBalancePickerData ?? []).map((balance: QryInventoryBalancePickerOutput) => html`<option value=${balance.inventoryBalanceId}>${balance.inventoryBalanceId}</option>`)}</select></label></div>`;
}
renderProjectPicker() {
const msg = this.msg;
const rows: QryProjectPickerOutput[] = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><h2 class="font-semibold">${msg['project.title']}</h2>${this.qryProjectPickerState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length ? html`<ul class="mt-2 space-y-1 text-sm">${rows.map((project: QryProjectPickerOutput) => html`<li>${project.name} <span class="text-[var(--text-muted,#64748b)]">(${project.projectId})</span></li>`)}</ul>` : html`<p>${msg['project.empty']}</p>`}</section>`;
}
renderItemPicker() {
const msg = this.msg;
const rows: QryInventoryItemPickerOutput[] = this.qryInventoryItemPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><h2 class="font-semibold">${msg['item.title']}</h2>${this.qryInventoryItemPickerState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length ? html`<ul class="mt-2 space-y-1 text-sm">${rows.map((item: QryInventoryItemPickerOutput) => html`<li>${item.name} <span class="text-[var(--text-muted,#64748b)]">(${item.unitOfMeasure})</span></li>`)}</ul>` : html`<p>${msg['item.empty']}</p>`}</section>`;
}
renderBalancePicker() {
const msg = this.msg;
const rows: QryInventoryBalancePickerOutput[] = this.qryInventoryBalancePickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><h2 class="font-semibold">${msg['balance.title']}</h2>${this.qryInventoryBalancePickerState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length ? html`<ul class="mt-2 space-y-1 text-sm">${rows.map((balance: QryInventoryBalancePickerOutput) => html`<li>${balance.inventoryBalanceId}: ${balance.physicalQuantity} / ${balance.applicableUnitCost}</li>`)}</ul>` : html`<p>${msg['balance.empty']}</p>`}</section>`;
}
selectRecord(item: QryListMaterialUsageOutput) {
this.setCmdUpdateMaterialUsageMaterialUsageId(item.materialUsageId);
this.setCmdDeleteMaterialUsageMaterialUsageId(item.materialUsageId);
this.setCmdUpdateMaterialUsageStatus(item.status);
this.setCmdUpdateMaterialUsageProjectId(item.projectId);
this.setCmdUpdateMaterialUsageInventoryItemId(item.inventoryItemId);
this.setCmdUpdateMaterialUsageInventoryBalanceId(item.inventoryBalanceId);
this.setCmdUpdateMaterialUsageQuantity(String(item.quantity));
this.setCmdUpdateMaterialUsageUsageDescription(item.usageDescription);
this.setCmdUpdateMaterialUsageConsumedOn(String(item.consumedOn));
this.setCmdUpdateMaterialUsageUnitCostBasis(String(item.unitCostBasis));
}
}
