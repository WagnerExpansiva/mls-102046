/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/materialUsageCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMaterialUsageCatalogueBase, messages as sharedMessages, type MessageType, type QryListMaterialUsageOutput, type QryInventoryBalancePickerOutput, type QryInventoryItemPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/materialUsageCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'list.title': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.title'],
  'list.empty': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.empty'],
  'col.id': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.materialUsageId.label'],
  'col.status': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.status.label'],
  'col.project': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.projectId.label'],
  'col.item': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryItemId.label'],
  'col.balance': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.inventoryBalanceId.label'],
  'col.quantity': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.quantity.label'],
  'col.description': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.usageDescription.label'],
  'col.date': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.consumedOn.label'],
  'col.cost': m['intent.materialUsageCatalogue.qryListMaterialUsage.list.column.unitCostBasis.label'],
  'create.title': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.title'],
  'create.action': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage'],
  'create.quantity': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label'],
  'create.description': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.usageDescription.label'],
  'create.date': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.consumedOn.label'],
  'create.cost': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.unitCostBasis.label'],
  'update.title': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.title'],
  'update.action': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.action.cmdUpdateMaterialUsage'],
  'update.quantity': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.quantity.label'],
  'update.description': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.usageDescription.label'],
  'update.date': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.consumedOn.label'],
  'update.cost': m['intent.materialUsageCatalogue.cmdUpdateMaterialUsage.form.field.unitCostBasis.label'],
  'delete.action': m['intent.materialUsageCatalogue.cmdDeleteMaterialUsage.form.action.cmdDeleteMaterialUsage'],
  'create.success': m['action.cmdCreateMaterialUsage.success'],
  'create.error': m['action.cmdCreateMaterialUsage.error'],
  'update.success': m['action.cmdUpdateMaterialUsage.success'],
  'update.error': m['action.cmdUpdateMaterialUsage.error'],
  'delete.success': m['action.cmdDeleteMaterialUsage.success'],
  'delete.error': m['action.cmdDeleteMaterialUsage.error'],
  'new.record': m['organism.materialUsageCatalogue.cmdCreateMaterialUsage.title'],
  'selected.context': m['section.materialUsageCatalogue.usageWorkbench.title'],
  'choose.item': m['organism.materialUsageCatalogue.qryInventoryItemPicker.title'],
  'choose.balance': m['organism.materialUsageCatalogue.qryInventoryBalancePicker.title'],
  'required': m['intent.materialUsageCatalogue.cmdCreateMaterialUsage.form.field.quantity.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'newButton': 'Novo consumo', 'select': 'Selecionar', 'save': 'Salvar alterações', 'cancel': 'Limpar seleção', 'loading': 'Carregando…', 'requiredMark': 'obrigatório', 'confirmDelete': 'Confirma a exclusão deste consumo?', 'context': 'Contexto do consumo',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'newButton': 'Novo consumo', 'select': 'Selecionar', 'save': 'Salvar alterações', 'cancel': 'Limpar seleção', 'loading': 'Carregando…', 'requiredMark': 'obrigatório', 'confirmDelete': 'Confirma a exclusão deste consumo?', 'context': 'Contexto do consumo',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
  'newButton': 'New material usage', 'select': 'Select', 'save': 'Save changes', 'cancel': 'Clear selection', 'loading': 'Loading…', 'requiredMark': 'required', 'confirmDelete': 'Delete this material usage?', 'context': 'Usage context',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
  'newButton': 'Nuevo consumo', 'select': 'Seleccionar', 'save': 'Guardar cambios', 'cancel': 'Limpiar selección', 'loading': 'Cargando…', 'requiredMark': 'obligatorio', 'confirmDelete': '¿Eliminar este consumo?', 'context': 'Contexto del consumo',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--material-usage-catalogue-102046')
export class BuildFlowFsmDesktopPage21MaterialUsageCataloguePage extends BuildFlowFsmMaterialUsageCatalogueBase {
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
return html`<div class="grid gap-6 lg:grid-cols-3">
  <section class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
    ${this.renderList()}
  </section>
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
    ${this.renderForm()}
  </section>
</div>`;
}
renderList() {
const msg = this.msg;
const rows: QryListMaterialUsageOutput[] = this.qryListMaterialUsageData ?? [];
if (this.qryListMaterialUsageState === 'loading') return html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>`;
return html`<div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${(event: Event) => this.handleQryListMaterialUsageClick(event)}>${msg['newButton']}</button></div>
${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['col.id'],msg['col.status'],msg['col.project'],msg['col.item'],msg['col.quantity'],msg['col.date'],msg['col.cost']].map((label: string) => html`<th class="px-2 py-3 font-semibold text-[var(--text-default,#0f172a)]">${label}</th>`)}</tr></thead><tbody>${rows.map((row: QryListMaterialUsageOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-2 py-3">${row.materialUsageId}</td><td class="px-2 py-3">${row.status}</td><td class="px-2 py-3">${row.projectId}</td><td class="px-2 py-3">${row.inventoryItemId}</td><td class="px-2 py-3">${row.quantity}</td><td class="px-2 py-3">${row.consumedOn}</td><td class="px-2 py-3">${row.unitCostBasis}</td><td class="px-2 py-3"><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-1 text-[var(--button-secondary-text,#334155)]" @click=${() => this.selectRow(row)}>${msg['select']}</button></td></tr>`)}</tbody></table></div>`}`;
}
selectRow(row: QryListMaterialUsageOutput) {
this.setCmdUpdateMaterialUsageMaterialUsageId(String(row.materialUsageId));
this.setCmdUpdateMaterialUsageStatus(String(row.status));
this.setCmdUpdateMaterialUsageProjectId(String(row.projectId));
this.setCmdUpdateMaterialUsageInventoryItemId(String(row.inventoryItemId));
this.setCmdUpdateMaterialUsageInventoryBalanceId(String(row.inventoryBalanceId));
this.setCmdUpdateMaterialUsageQuantity(String(row.quantity));
this.setCmdUpdateMaterialUsageUsageDescription(String(row.usageDescription));
this.setCmdUpdateMaterialUsageConsumedOn(String(row.consumedOn));
this.setCmdUpdateMaterialUsageUnitCostBasis(String(row.unitCostBasis));
this.setCmdDeleteMaterialUsageMaterialUsageId(String(row.materialUsageId));
}
renderForm() {
const msg = this.msg;
const editing = this.cmdUpdateMaterialUsageMaterialUsageId.length > 0;
const state = editing ? this.cmdUpdateMaterialUsageState : this.cmdCreateMaterialUsageState;
const error = editing ? this.cmdUpdateMaterialUsageError : this.cmdCreateMaterialUsageError;
return html`<h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${editing ? msg['update.title'] : msg['create.title']}</h2>
<div class="mb-4 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm"><strong>${msg['context']}</strong><div>${msg['col.project']}: ${editing ? this.cmdUpdateMaterialUsageProjectId : this.cmdCreateMaterialUsageProjectProjectId}</div><div>${msg['choose.item']}: ${editing ? this.cmdUpdateMaterialUsageInventoryItemId : this.cmdCreateMaterialUsageInventoryItemInventoryItemId}</div><div>${msg['choose.balance']}: ${editing ? this.cmdUpdateMaterialUsageInventoryBalanceId : this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId}</div></div>
${this.renderFields(editing)}
${error ? html`<p class="my-3 text-[var(--status-error-text,#b91c1c)]">${error}</p>` : nothing}
${state === 'success' ? html`<p class="my-3 text-[var(--status-success-text,#15803d)]">${editing ? msg['update.success'] : msg['create.success']}</p>` : nothing}
<button class="mt-4 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${state === 'loading'} @click=${(event: Event) => editing ? this.handleCmdUpdateMaterialUsageClick(event) : this.handleCmdCreateMaterialUsageClick(event)}>${state === 'loading' ? msg['loading'] : editing ? msg['update.action'] : msg['create.action']}</button>
${editing ? html`<button class="mt-2 w-full rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)]" @click=${(event: Event) => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteMaterialUsageClick(event); }}>${msg['delete.action']}</button>` : nothing}`;
}
renderFields(editing: boolean) {
const msg = this.msg;
const quantity = editing ? this.cmdUpdateMaterialUsageQuantity : this.cmdCreateMaterialUsageQuantity;
const description = editing ? this.cmdUpdateMaterialUsageUsageDescription : this.cmdCreateMaterialUsageUsageDescription;
const date = editing ? this.cmdUpdateMaterialUsageConsumedOn : this.cmdCreateMaterialUsageConsumedOn;
const cost = editing ? this.cmdUpdateMaterialUsageUnitCostBasis : this.cmdCreateMaterialUsageUnitCostBasis;
return html`<div class="space-y-4"><label class="block text-sm">${editing ? msg['update.quantity'] : msg['create.quantity']} <span aria-label=${msg['requiredMark']}>*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${quantity} @change=${(event: Event) => editing ? this.handleCmdUpdateMaterialUsageQuantityChange(event) : this.handleCmdCreateMaterialUsageQuantityChange(event)}></label><label class="block text-sm">${editing ? msg['update.date'] : msg['create.date']} <span>*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${date} @change=${(event: Event) => editing ? this.handleCmdUpdateMaterialUsageConsumedOnChange(event) : this.handleCmdCreateMaterialUsageConsumedOnChange(event)}></label><label class="block text-sm">${editing ? msg['update.cost'] : msg['create.cost']} <span>*</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${cost} @change=${(event: Event) => editing ? this.handleCmdUpdateMaterialUsageUnitCostBasisChange(event) : this.handleCmdCreateMaterialUsageUnitCostBasisChange(event)}></label><label class="block text-sm">${editing ? msg['update.description'] : msg['create.description']} <span>*</span><textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @change=${(event: Event) => editing ? this.handleCmdUpdateMaterialUsageUsageDescriptionChange(event) : this.handleCmdCreateMaterialUsageUsageDescriptionChange(event)}>${description}</textarea></label></div>`;
}
}
