/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/recordProjectMaterialUsage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordProjectMaterialUsageBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';
import type { QryLocateProjectOutput, QryLocateInventoryItemOutput, QryInventoryBalancePickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'project.section': m['section.recordProjectMaterialUsage.locateProject.title'],
  'project.title': m['intent.recordProjectMaterialUsage.qryLocateProject.list.title'],
  'project.empty': m['intent.recordProjectMaterialUsage.qryLocateProject.list.empty'],
  'project.id': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label'],
  'project.name': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label'],
  'project.status': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label'],
  'material.section': m['section.recordProjectMaterialUsage.locateInventoryItem.title'],
  'material.title': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title'],
  'material.empty': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty'],
  'material.id': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label'],
  'material.name': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label'],
  'material.unit': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label'],
  'material.cost': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label'],
  'balance.title': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title'],
  'balance.empty': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty'],
  'balance.id': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label'],
  'balance.quantity': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label'],
  'balance.cost': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label'],
  'balance.status': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label'],
  'usage.section': m['section.recordProjectMaterialUsage.createMaterialUsage.title'],
  'usage.title': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title'],
  'usage.submit': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage'],
  'quantity': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label'],
  'description': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label'],
  'date': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label'],
  'costBasis': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label'],
  'handoff.section': m['section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title'],
  'handoff.title': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title'],
  'handoff.submit': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator'],
  'handoff.quantity': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label'],
  'handoff.description': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label'],
  'handoff.date': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label'],
  'handoff.costBasis': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label'],
  'create.success': m['action.cmdCreateMaterialUsage.success'],
  'create.error': m['action.cmdCreateMaterialUsage.error'],
  'handoff.success': m['action.cmdHandoffMaterialUsageToFieldCoordinator.success'],
  'handoff.error': m['action.cmdHandoffMaterialUsageToFieldCoordinator.error'],
  'workspace': m['section.recordProjectMaterialUsage.usageWorkspace.title'],
  'materialWorkspace': m['section.recordProjectMaterialUsage.materialUsageWorkspace.title'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'step.context': 'Contexto da obra', 'step.material': 'Material e saldo', 'step.confirm': 'Confirmar lançamento',
  'choose.project': 'Selecione a obra', 'choose.material': 'Selecione o material', 'choose.balance': 'Selecione o saldo',
  'loading': 'Carregando…', 'required': 'Obrigatório', 'notAvailable': 'Indisponível', 'handoff.locked': 'Disponível após o registro ser confirmado',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'step.context': 'Contexto da obra', 'step.material': 'Material e saldo', 'step.confirm': 'Confirmar lançamento',
  'choose.project': 'Selecione a obra', 'choose.material': 'Selecione o material', 'choose.balance': 'Selecione o saldo',
  'loading': 'Carregando…', 'required': 'Obrigatório', 'notAvailable': 'Indisponível', 'handoff.locked': 'Disponível após o registro ser confirmado',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'step.context': 'Project context', 'step.material': 'Material and balance', 'step.confirm': 'Confirm entry',
  'choose.project': 'Select the project', 'choose.material': 'Select the material', 'choose.balance': 'Select the balance',
  'loading': 'Loading…', 'required': 'Required', 'notAvailable': 'Unavailable', 'handoff.locked': 'Available after the entry is confirmed',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'step.context': 'Contexto de la obra', 'step.material': 'Material y saldo', 'step.confirm': 'Confirmar registro',
  'choose.project': 'Seleccione la obra', 'choose.material': 'Seleccione el material', 'choose.balance': 'Seleccione el saldo',
  'loading': 'Cargando…', 'required': 'Obligatorio', 'notAvailable': 'No disponible', 'handoff.locked': 'Disponible después de confirmar el registro',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--record-project-material-usage-102046')
export class BuildFlowFsmDesktopPage21RecordProjectMaterialUsagePage extends BuildFlowFsmRecordProjectMaterialUsageBase {
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
return html`<main class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-8">
  <div class="mx-auto max-w-7xl">
    <div class="mb-6 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
      <ol class="grid gap-3 md:grid-cols-3" aria-label=${msg['workspace']}>
        ${this.renderRailItem('1', msg['step.context'], true, Boolean(this.cmdCreateMaterialUsageProjectProjectId))}
        ${this.renderRailItem('2', msg['step.material'], Boolean(this.cmdCreateMaterialUsageProjectProjectId), Boolean(this.cmdCreateMaterialUsageInventoryItemInventoryItemId && this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId))}
        ${this.renderRailItem('3', msg['step.confirm'], Boolean(this.cmdCreateMaterialUsageInventoryItemInventoryItemId && this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId), this.cmdCreateMaterialUsageState === 'success')}
      </ol>
    </div>
    <div class="grid gap-6 lg:grid-cols-3">
      <div class="space-y-6 lg:col-span-2">${this.renderProjectPicker()}${this.renderMaterialPicker()}${this.renderBalancePicker()}</div>
      <div class="space-y-6">${this.renderUsageForm()}${this.renderHandoff()}</div>
    </div>
  </div>
</main>`;
}
renderRailItem(number: string, title: string, active: boolean, complete: boolean) {
return html`<li class="flex items-center gap-3 rounded-md p-2 ${active ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1d4ed8)]' : 'text-[var(--text-muted,#64748b)]'}"><span class="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--selected-border,#93c5fd)] font-semibold">${complete ? '✓' : number}</span><span>${title}</span></li>`;
}
renderProjectPicker() {
const msg = this.msg; const rows: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['project.section']}</h2><button class="mb-4 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryLocateProjectClick}>${msg['project.title']}</button>${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="grid gap-2">${rows.map((row: QryLocateProjectOutput) => html`<button class="rounded-md border p-3 text-left ${this.cmdCreateMaterialUsageProjectProjectId === row.projectId ? 'border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => this.setCmdCreateMaterialUsageProjectProjectId(row.projectId)}><strong>${row.name}</strong><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${row.status}</span></button>`)}</div>`}</section>`;
}
renderMaterialPicker() {
const msg = this.msg; const rows: QryLocateInventoryItemOutput[] = this.qryLocateInventoryItemData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['material.section']}</h2><button class="mb-4 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryLocateInventoryItemClick}>${msg['material.title']}</button>${this.qryLocateInventoryItemState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['material.empty']}</p>` : html`<div class="grid gap-2">${rows.map((row: QryLocateInventoryItemOutput) => html`<button class="rounded-md border p-3 text-left ${this.cmdCreateMaterialUsageInventoryItemInventoryItemId === row.inventoryItemId ? 'border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(row.inventoryItemId)}><strong>${row.name}</strong><span class="ml-2">${row.unitOfMeasure}</span><span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${row.referenceUnitCost}</span></button>`)}</div>`}</section>`;
}
renderBalancePicker() {
const msg = this.msg; const rows: QryInventoryBalancePickerOutput[] = this.qryInventoryBalancePickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['balance.title']}</h2><button class="mb-4 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryInventoryBalancePickerClick}>${msg['choose.balance']}</button>${this.qryInventoryBalancePickerState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p>${msg['balance.empty']}</p>` : html`<div class="grid gap-2">${rows.map((row: QryInventoryBalancePickerOutput) => html`<button class="rounded-md border p-3 text-left ${this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId === row.inventoryBalanceId ? 'border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(row.inventoryBalanceId)}>${msg['balance.id']}: ${row.inventoryBalanceId} · ${msg['balance.quantity']}: ${row.physicalQuantity} · ${msg['balance.cost']}: ${row.applicableUnitCost} · ${row.status}</button>`)}</div>`}</section>`;
}
renderUsageForm() {
const msg = this.msg; const ready = Boolean(this.cmdCreateMaterialUsageProjectProjectId && this.cmdCreateMaterialUsageInventoryItemInventoryItemId && this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId && this.cmdCreateMaterialUsageQuantity && this.cmdCreateMaterialUsageUsageDescription && this.cmdCreateMaterialUsageConsumedOn && this.cmdCreateMaterialUsageUnitCostBasis);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['usage.title']}</h2><div class="space-y-4"><label class="block">${msg['quantity']} <span aria-hidden="true">*</span><input class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdCreateMaterialUsageQuantity} @change=${this.handleCmdCreateMaterialUsageQuantityChange} required></label><label class="block">${msg['description']} <span aria-hidden="true">*</span><textarea class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageUsageDescription} @change=${this.handleCmdCreateMaterialUsageUsageDescriptionChange} required></textarea></label><label class="block">${msg['date']} <span aria-hidden="true">*</span><input class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdCreateMaterialUsageConsumedOn} @change=${this.handleCmdCreateMaterialUsageConsumedOnChange} required></label><label class="block">${msg['costBasis']} <span aria-hidden="true">*</span><input class="mt-1 w-full rounded-md border bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdCreateMaterialUsageUnitCostBasis} @change=${this.handleCmdCreateMaterialUsageUnitCostBasisChange} required></label><button class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${!ready || this.cmdCreateMaterialUsageState === 'loading'} @click=${this.handleCmdCreateMaterialUsageClick}>${this.cmdCreateMaterialUsageState === 'loading' ? msg['loading'] : msg['usage.submit']}</button>${this.cmdCreateMaterialUsageState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateMaterialUsageState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateMaterialUsageError || msg['create.error']}</p>` : nothing}</div></section>`;
}
renderHandoff() {
const msg = this.msg; const available = Boolean(this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId); const busy = this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-alt-bg,#f8fafc)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['handoff.title']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${available ? '' : msg['handoff.locked']}</p><button class="w-full rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-3 text-[var(--button-secondary-text,#334155)]" ?disabled=${!available || busy} @click=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorClick}>${busy ? msg['loading'] : msg['handoff.submit']}</button>${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'success' ? html`<p class="mt-3 bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'error' ? html`<p class="mt-3 bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffMaterialUsageToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}