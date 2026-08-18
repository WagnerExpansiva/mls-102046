/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordProjectMaterialUsageBase } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';

const readField = (value: unknown, key: string): string => {
  if (typeof value !== 'object' || value === null) return '';
  const record: Record<string, unknown> = value as Record<string, unknown>;
  const field = record[key];
  return field === null || field === undefined ? '' : String(field);
};

const formatValue = (value: string): string => value || '—';

@customElement('build-flow-fsm--web--desktop--page11--record-project-material-usage-102046')
export class BuildFlowFsmDesktopPage11RecordProjectMaterialUsagePage extends BuildFlowFsmRecordProjectMaterialUsageBase {
  render(): TemplateResult {
    return html`
      <main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderProjectPanel()}
          ${this.renderInventoryPanel()}
          ${this.renderCreatePanel()}
          ${this.renderHandoffPanel()}
        </div>
      </main>
    `;
  }

  renderHeader(): TemplateResult {
    const msg = this.msg;
    return html`
      <header>
        <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
          ${msg['section.recordProjectMaterialUsage.usageWorkspace.title']}
        </h1>
      </header>
    `;
  }

  renderProjectPanel(): TemplateResult {
    const msg = this.msg;
    const rows = this.qryLocateProjectData ?? [];
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.recordProjectMaterialUsage.locateProject.title']}
        </h2>
        <div class="flex items-center justify-between gap-4">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.title']}</p>
          <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2 text-sm" @click=${this.handleQryLocateProjectClick}>
            ${this.qryLocateProjectState === 'loading' ? msg['intent.recordProjectMaterialUsage.qryLocateProject.list.title'] : msg['organism.recordProjectMaterialUsage.qryLocateProject.title']}
          </button>
        </div>
        ${this.qryLocateProjectState === 'loading' ? html`<div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-4 text-sm">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.title']}</div>` : rows.length === 0 ? html`<p class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-4 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.empty']}</p>` : html`
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead class="border-b border-[var(--border-subtle,#e2e8f0)] text-[var(--text-muted,#64748b)]">
                <tr>
                  <th class="px-3 py-2">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label']}</th>
                  <th class="px-3 py-2">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label']}</th>
                  <th class="px-3 py-2">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label']}</th>
                  <th class="px-3 py-2">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label']}</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map((row: typeof rows[number]) => html`
                  <tr class="border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)] cursor-pointer" @click=${() => this.setCmdCreateMaterialUsageProjectProjectId(readField(row, 'projectId'))}>
                    <td class="px-3 py-2">${formatValue(readField(row, 'projectId'))}</td>
                    <td class="px-3 py-2">${formatValue(readField(row, 'name'))}</td>
                    <td class="px-3 py-2">${formatValue(readField(row, 'address'))}</td>
                    <td class="px-3 py-2">${formatValue(readField(row, 'status'))}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        `}
      </section>
    `;
  }

  renderInventoryPanel(): TemplateResult {
    const msg = this.msg;
    const items = this.qryLocateInventoryItemData ?? [];
    const balances = this.qryInventoryBalancePickerData ?? [];
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-5">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.recordProjectMaterialUsage.locateInventoryItem.title']}</h2>
        <div class="flex items-center justify-between gap-4">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title']}</p>
          <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2 text-sm" @click=${this.handleQryLocateInventoryItemClick}>${msg['organism.recordProjectMaterialUsage.qryLocateInventoryItem.title']}</button>
        </div>
        ${this.qryLocateInventoryItemState === 'loading' ? html`<p class="p-4 text-sm bg-[var(--surface-alt-bg,#f1f5f9)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title']}</p>` : items.length === 0 ? html`<p class="p-4 text-sm bg-[var(--surface-alt-bg,#f1f5f9)] text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty']}</p>` : html`
          <div class="grid gap-3 md:grid-cols-2">
            ${items.map((row: typeof items[number]) => html`
              <button type="button" class="text-left rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4 hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(readField(row, 'inventoryItemId'))}>
                <div class="font-medium">${formatValue(readField(row, 'name'))}</div>
                <div class="text-sm text-[var(--text-muted,#64748b)]">${formatValue(readField(row, 'description'))}</div>
                <div class="mt-2 text-sm">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label']}: ${formatValue(readField(row, 'unitOfMeasure'))}</div>
              </button>
            `)}
          </div>
        `}
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-4">
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title']}</p>
            <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2 text-sm" @click=${this.handleQryInventoryBalancePickerClick}>${msg['organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title']}</button>
          </div>
          ${balances.length === 0 ? html`<p class="p-3 text-sm bg-[var(--surface-alt-bg,#f1f5f9)] text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty']}</p>` : html`<div class="space-y-2">${balances.map((row: typeof balances[number]) => html`
            <button type="button" class="w-full text-left rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(readField(row, 'inventoryBalanceId'))}>
              ${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label']}: ${formatValue(readField(row, 'inventoryBalanceId'))} · ${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label']}: ${formatValue(readField(row, 'physicalQuantity'))}
            </button>
          `)}</div>`}
        </div>
      </section>
    `;
  }

  renderCreatePanel(): TemplateResult {
    const msg = this.msg;
    const busy = this.cmdCreateMaterialUsageState === 'loading';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.recordProjectMaterialUsage.createMaterialUsage.title']}</h2>
        <form class="grid gap-4 md:grid-cols-2" @submit=${this.handleCmdCreateMaterialUsageClick}>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" .value=${this.cmdCreateMaterialUsageQuantity} @input=${this.handleCmdCreateMaterialUsageQuantityChange} required></label>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="date" .value=${this.cmdCreateMaterialUsageConsumedOn} @input=${this.handleCmdCreateMaterialUsageConsumedOnChange} required></label>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" step="any" .value=${this.cmdCreateMaterialUsageUnitCostBasis} @input=${this.handleCmdCreateMaterialUsageUnitCostBasisChange} required></label>
          <label class="space-y-1 md:col-span-2"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdCreateMaterialUsageUsageDescription} @input=${this.handleCmdCreateMaterialUsageUsageDescriptionChange} required></textarea></label>
          <div class="md:col-span-2"><button type="submit" ?disabled=${busy} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-60">${busy ? msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title'] : msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage']}</button></div>
        </form>
        ${this.cmdCreateMaterialUsageState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3 text-sm">${msg['action.cmdCreateMaterialUsage.success']}</p>` : nothing}
        ${this.cmdCreateMaterialUsageState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3 text-sm">${this.cmdCreateMaterialUsageError || msg['action.cmdCreateMaterialUsage.error']}</p>` : nothing}
      </section>
    `;
  }

  renderHandoffPanel(): TemplateResult {
    const msg = this.msg;
    const busy = this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'loading';
    const canSubmit = this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageId.length > 0;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title']}</h2>
        <form class="grid gap-4 md:grid-cols-2" @submit=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorClick}>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity} @input=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange} required></label>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="date" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn} @input=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange} required></label>
          <label class="space-y-1"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" type="number" step="any" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis} @input=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange} required></label>
          <label class="space-y-1 md:col-span-2"><span class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label']}</span><textarea class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription} @input=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange} required></textarea></label>
          <div class="md:col-span-2"><button type="submit" ?disabled=${busy || !canSubmit} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-60">${busy ? msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title'] : msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator']}</button></div>
        </form>
        ${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3 text-sm">${msg['action.cmdHandoffMaterialUsageToFieldCoordinator.success']}</p>` : nothing}
        ${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'error' ? html`<p role="alert" class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3 text-sm">${this.cmdHandoffMaterialUsageToFieldCoordinatorError || msg['action.cmdHandoffMaterialUsageToFieldCoordinator.error']}</p>` : nothing}
      </section>
    `;
  }
}
