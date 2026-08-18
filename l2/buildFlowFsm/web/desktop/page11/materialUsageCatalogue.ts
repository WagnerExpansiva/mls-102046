/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/materialUsageCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMaterialUsageCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
  'list.title': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.title'],
  'list.empty': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.empty'],
  'list.materialUsageId': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label'],
  'list.status': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label'],
  'list.projectId': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label'],
  'list.inventoryItemId': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label'],
  'list.inventoryBalanceId': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label'],
  'list.quantity': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label'],
  'list.usageDescription': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label'],
  'list.consumedOn': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label'],
  'list.unitCostBasis': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label'],
  'create.title': m['organism.materialUsageCatalogue.cmdCreateMaterialUsage.title'],
  'create.form': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title'],
  'create.action': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage'],
  'create.quantity': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label'],
  'create.description': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label'],
  'create.date': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label'],
  'create.cost': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label'],
  'update.title': m['organism.materialUsageCatalogue.cmdUpdateMaterialUsage.title'],
  'update.form': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title'],
  'update.action': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage'],
  'update.status': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.status.label'],
  'update.quantity': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label'],
  'update.description': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label'],
  'update.date': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label'],
  'update.cost': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label'],
  'delete.title': m['organism.materialUsageCatalogue.cmdDeleteMaterialUsage.title'],
  'delete.action': m['intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage'],
  'balance.title': m['organism.materialUsageCatalogue.qryInventoryBalancePicker.title'],
  'balance.id': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryBalanceId.label'],
  'balance.item': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.inventoryItemId.label'],
  'balance.quantity': m['intent.materialUsageCatalogue.qryInventoryBalancePicker.list.column.physicalQuantity.label'],
  'item.title': m['organism.materialUsageCatalogue.qryInventoryItemPicker.title'],
  'item.id': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.inventoryItemId.label'],
  'item.name': m['intent.materialUsageCatalogue.qryInventoryItemPicker.list.column.name.label'],
  'project.title': m['organism.materialUsageCatalogue.qryProjectPicker.title'],
  'project.id': m['intent.materialUsageCatalogue.qryProjectPicker.list.column.projectId.label'],
  'project.name': m['intent.materialUsageCatalogue.qryProjectPicker.list.column.name.label'],
  'create.success': m['action.cmdCreateMaterialUsage.success'], 'create.error': m['action.cmdCreateMaterialUsage.error'],
  'update.success': m['action.cmdUpdateMaterialUsage.success'], 'update.error': m['action.cmdUpdateMaterialUsage.error'],
  'delete.success': m['action.cmdDeleteMaterialUsage.success'], 'delete.error': m['action.cmdDeleteMaterialUsage.error']
});
const pageMessage_pt = { ...fromShared(sharedMessages['pt'] ?? sharedFallback) };
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = { ...fromShared(sharedMessages['pt-br'] ?? sharedFallback) };
const pageMessage_en: PageMessageType = { ...fromShared(sharedMessages['en'] ?? sharedFallback) };
const pageMessage_es: PageMessageType = { ...fromShared(sharedMessages['es'] ?? sharedFallback) };
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--material-usage-catalogue-102046')
export class BuildFlowFsmDesktopPage11MaterialUsageCataloguePage extends BuildFlowFsmMaterialUsageCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
${this.renderList()} ${this.renderPickers()} ${this.renderCreate()} ${this.renderUpdate()} ${this.renderDelete()}
</div></main>`;
}
renderList() {
const msg = this.msg; const rows = this.qryListMaterialUsageData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-3">
<div class="flex items-center justify-between"><h1 class="text-xl font-semibold">${msg['list.title']}</h1><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(e: Event) => this.handleQryListMaterialUsageClick(e)}>${msg['list.title']}</button></div>
${this.qryListMaterialUsageState === 'loading' ? html`<p>${msg['list.title']}</p>` : rows.length === 0 ? html`<p>${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr>${['list.materialUsageId','list.status','list.projectId','list.inventoryItemId','list.inventoryBalanceId','list.quantity','list.usageDescription','list.consumedOn','list.unitCostBasis'].map((key) => html`<th class="text-left p-2 border-b border-[var(--border-subtle,#e2e8f0)]">${msg[key as keyof typeof msg]}</th>`)}</tr></thead><tbody>${rows.map((row) => html`<tr class="cursor-pointer" @click=${() => { this.setCmdUpdateMaterialUsageMaterialUsageId(row.materialUsageId); this.setCmdDeleteMaterialUsageMaterialUsageId(row.materialUsageId); }}>${[row.materialUsageId,row.status,row.projectId,row.inventoryItemId,row.inventoryBalanceId,row.quantity,row.usageDescription,row.consumedOn,row.unitCostBasis].map((value) => html`<td class="p-2 border-b border-[var(--border-subtle,#e2e8f0)]">${value}</td>`)}</tr>`)}</tbody></table></div>`}
</section>`;
}
renderPickers() {
const msg = this.msg; const balances = this.qryInventoryBalancePickerData ?? []; const items = this.qryInventoryItemPickerData ?? []; const projects = this.qryProjectPickerData ?? [];
return html`<section class="grid md:grid-cols-3 gap-4"><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="font-semibold">${msg['balance.title']}</h2><button class="mt-2 rounded px-2 py-1 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(e: Event) => this.handleQryInventoryBalancePickerClick(e)}>${msg['balance.title']}</button><ul>${balances.map((row) => html`<li class="py-1 cursor-pointer" @click=${() => { this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(row.inventoryBalanceId); this.setCmdUpdateMaterialUsageInventoryBalanceId(row.inventoryBalanceId); }}>${row.inventoryBalanceId} — ${row.physicalQuantity}</li>`)}</ul></div><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="font-semibold">${msg['item.title']}</h2><button class="mt-2 rounded px-2 py-1 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(e: Event) => this.handleQryInventoryItemPickerClick(e)}>${msg['item.title']}</button><ul>${items.map((row) => html`<li class="py-1 cursor-pointer" @click=${() => { this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(row.inventoryItemId); this.setCmdUpdateMaterialUsageInventoryItemId(row.inventoryItemId); }}>${row.inventoryItemId} — ${row.name}</li>`)}</ul></div><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="font-semibold">${msg['project.title']}</h2><button class="mt-2 rounded px-2 py-1 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)]" @click=${(e: Event) => this.handleQryProjectPickerClick(e)}>${msg['project.title']}</button><ul>${projects.map((row) => html`<li class="py-1 cursor-pointer" @click=${() => this.setCmdUpdateMaterialUsageProjectId(row.projectId)}>${row.projectId} — ${row.name}</li>`)}</ul></div></section>`;
}
renderCreate() {
const msg = this.msg; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"><h2>${msg['create.title']}</h2><div class="grid md:grid-cols-4 gap-3"><label>${msg['create.quantity']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageQuantity} @input=${(e: Event) => this.handleCmdCreateMaterialUsageQuantityChange(e)}></label><label>${msg['create.description']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageUsageDescription} @input=${(e: Event) => this.handleCmdCreateMaterialUsageUsageDescriptionChange(e)}></label><label>${msg['create.date']}<input type="date" class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageConsumedOn} @input=${(e: Event) => this.handleCmdCreateMaterialUsageConsumedOnChange(e)}></label><label>${msg['create.cost']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageUnitCostBasis} @input=${(e: Event) => this.handleCmdCreateMaterialUsageUnitCostBasisChange(e)}></label></div><button class="rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateMaterialUsageState === 'loading'} @click=${(e: Event) => this.handleCmdCreateMaterialUsageClick(e)}>${msg['create.action']}</button>${this.cmdCreateMaterialUsageState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateMaterialUsageState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateMaterialUsageError || msg['create.error']}</p>` : nothing}</section>`;
}
renderUpdate() {
const msg = this.msg; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"><h2>${msg['update.title']}</h2><div class="grid md:grid-cols-4 gap-3"><label>${msg['update.status']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageStatus} @input=${(e: Event) => this.handleCmdUpdateMaterialUsageStatusChange(e)}></label><label>${msg['update.quantity']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageQuantity} @input=${(e: Event) => this.handleCmdUpdateMaterialUsageQuantityChange(e)}></label><label>${msg['update.description']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageUsageDescription} @input=${(e: Event) => this.handleCmdUpdateMaterialUsageUsageDescriptionChange(e)}></label><label>${msg['update.date']}<input type="date" class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageConsumedOn} @input=${(e: Event) => this.handleCmdUpdateMaterialUsageConsumedOnChange(e)}></label><label>${msg['update.cost']}<input class="block w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateMaterialUsageUnitCostBasis} @input=${(e: Event) => this.handleCmdUpdateMaterialUsageUnitCostBasisChange(e)}></label></div><button class="rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" @click=${(e: Event) => this.handleCmdUpdateMaterialUsageClick(e)}>${msg['update.action']}</button>${this.cmdUpdateMaterialUsageState === 'success' ? html`<p>${msg['update.success']}</p>` : this.cmdUpdateMaterialUsageState === 'error' ? html`<p>${this.cmdUpdateMaterialUsageError || msg['update.error']}</p>` : nothing}</section>`;
}
renderDelete() {
const msg = this.msg; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"><h2>${msg['delete.title']}</h2><button class="rounded px-3 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${!this.cmdDeleteMaterialUsageMaterialUsageId || this.cmdDeleteMaterialUsageState === 'loading'} @click=${(e: Event) => this.handleCmdDeleteMaterialUsageClick(e)}>${msg['delete.action']}</button>${this.cmdDeleteMaterialUsageState === 'success' ? html`<p>${msg['delete.success']}</p>` : this.cmdDeleteMaterialUsageState === 'error' ? html`<p>${this.cmdDeleteMaterialUsageError || msg['delete.error']}</p>` : nothing}</section>`;
}
}