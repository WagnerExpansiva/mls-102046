/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/recordProjectMaterialUsage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordProjectMaterialUsageBase, messages } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';
import type {
  QryLocateProjectOutput,
  QryLocateInventoryItemOutput,
  QryInventoryBalancePickerOutput,
} from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';

@customElement('build-flow-fsm--web--desktop--page31--record-project-material-usage-page-102046')
export class BuildFlowFsmDesktopPage31RecordProjectMaterialUsagePage extends BuildFlowFsmRecordProjectMaterialUsageBase {
  render() {
    const msg = messages['pt'];
    const projects: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
    const inventoryItems: QryLocateInventoryItemOutput[] = this.qryLocateInventoryItemData ?? [];
    const balances: QryInventoryBalancePickerOutput[] = this.qryInventoryBalancePickerData ?? [];
    const projectSelected = this.cmdCreateMaterialUsageProjectProjectId.length > 0;
    const materialSelected = this.cmdCreateMaterialUsageInventoryItemInventoryItemId.length > 0;
    const balanceSelected = this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId.length > 0;
    const formComplete = balanceSelected && materialSelected && projectSelected &&
      this.cmdCreateMaterialUsageQuantity.trim().length > 0 &&
      this.cmdCreateMaterialUsageUsageDescription.trim().length > 0 &&
      this.cmdCreateMaterialUsageConsumedOn.trim().length > 0 &&
      this.cmdCreateMaterialUsageUnitCostBasis.trim().length > 0;
    const createdId = this.cmdCreateMaterialUsageOutput?.materialUsageId ?? '';
    const handoffReady = createdId.length > 0;

    return html`
      <main class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6">
        <div class="mx-auto max-w-5xl space-y-6">
          <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-sm">
            <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.recordProjectMaterialUsage.usageWorkspace.title']}</h1>
            <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['section.recordProjectMaterialUsage.locateProject.title']}</p>

            ${!projectSelected ? html`
              <div class="mt-6 space-y-3">
                <h2 class="text-lg font-semibold">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.title']}</h2>
                ${this.qryLocateProjectState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['organism.recordProjectMaterialUsage.qryLocateProject.title']}</p>` : nothing}
                <button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryLocateProjectClick} ?disabled=${this.qryLocateProjectState === 'loading'}>
                  ${this.qryLocateProjectState === 'loading' ? msg['intent.recordProjectMaterialUsage.qryLocateProject.list.title'] : msg['organism.recordProjectMaterialUsage.qryLocateProject.title']}
                </button>
                <div class="grid gap-2">
                  ${projects.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.empty']}</p>` : projects.map((project: QryLocateProjectOutput) => html`
                    <button class="grid grid-cols-1 gap-1 rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#eef2ff)]" @click=${() => this.setCmdCreateMaterialUsageProjectProjectId(project.projectId)}>
                      <span class="font-medium">${project.name}</span>
                      <span class="text-sm text-[var(--text-muted,#64748b)]">${project.status}</span>
                      <span class="text-xs text-[var(--text-muted,#64748b)]">${project.address}</span>
                    </button>`)}
                </div>
              </div>
            ` : html`
              <p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label']}: ${this.cmdCreateMaterialUsageProjectProjectId}</p>
            `}
          </section>

          ${projectSelected ? html`
            <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-sm">
              ${!materialSelected ? html`
                <h2 class="text-lg font-semibold">${msg['section.recordProjectMaterialUsage.locateInventoryItem.title']}</h2>
                <button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryLocateInventoryItemClick} ?disabled=${this.qryLocateInventoryItemState === 'loading'}>${msg['organism.recordProjectMaterialUsage.qryLocateInventoryItem.title']}</button>
                ${this.qryLocateInventoryItemState === 'loading' ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title']}</p>` : nothing}
                <div class="mt-4 grid gap-2">
                  ${inventoryItems.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty']}</p>` : inventoryItems.map((item: QryLocateInventoryItemOutput) => html`
                    <button class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#eef2ff)]" @click=${() => this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(item.inventoryItemId)}>
                      <span class="font-medium">${item.name}</span>
                      <span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">${item.unitOfMeasure} · ${item.referenceUnitCost}</span>
                    </button>`)}
                </div>
              ` : html`
                <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label']}: ${this.cmdCreateMaterialUsageInventoryItemInventoryItemId}</p>
                ${!balanceSelected ? html`
                  <h2 class="mt-5 text-lg font-semibold">${msg['organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title']}</h2>
                  <button class="mt-3 rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryInventoryBalancePickerClick} ?disabled=${this.qryInventoryBalancePickerState === 'loading'}>${msg['organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title']}</button>
                  <div class="mt-4 grid gap-2">
                    ${balances.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty']}</p>` : balances.map((balance: QryInventoryBalancePickerOutput) => html`
                      <button class="grid gap-1 rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--selected-bg,#eef2ff)]" @click=${() => this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(balance.inventoryBalanceId)}>
                        <span class="font-medium">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label']}: ${balance.physicalQuantity}</span>
                        <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label']}: ${balance.applicableUnitCost}</span>
                      </button>`)}
                  </div>
                ` : html`
                  <p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label']}: ${this.cmdCreateMaterialUsageInventoryBalanceInventoryBalanceId}</p>
                  <form class="mt-6 space-y-4" @submit=${(event: SubmitEvent) => { event.preventDefault(); this.handleCmdCreateMaterialUsageClick(event); }}>
                    <h2 class="text-lg font-semibold">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title']}</h2>
                    <label class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label']} *<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageQuantity} @change=${this.handleCmdCreateMaterialUsageQuantityChange} /></label>
                    <label class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label']} *<textarea required class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" @change=${this.handleCmdCreateMaterialUsageUsageDescriptionChange}>${this.cmdCreateMaterialUsageUsageDescription}</textarea></label>
                    <label class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label']} *<input required type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageConsumedOn} @change=${this.handleCmdCreateMaterialUsageConsumedOnChange} /></label>
                    <label class="block text-sm">${msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label']} *<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateMaterialUsageUnitCostBasis} @change=${this.handleCmdCreateMaterialUsageUnitCostBasisChange} /></label>
                    <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${!formComplete || this.cmdCreateMaterialUsageState === 'loading'}>${this.cmdCreateMaterialUsageState === 'loading' ? msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title'] : msg['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage']}</button>
                    ${this.cmdCreateMaterialUsageState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateMaterialUsage.success']}</p>` : nothing}
                    ${this.cmdCreateMaterialUsageState === 'error' ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdCreateMaterialUsageError || msg['action.cmdCreateMaterialUsage.error']}</p>` : nothing}
                  </form>
                `}
              `}
            </section>
          ` : nothing}

          ${handoffReady ? html`
            <section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-sm">
              <h2 class="text-lg font-semibold">${msg['section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title']}</h2>
              <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title']}</p>
              <button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${this.handleCmdHandoffMaterialUsageToFieldCoordinatorClick} ?disabled=${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'loading'}>${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'loading' ? msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title'] : msg['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator']}</button>
              ${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'success' ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdHandoffMaterialUsageToFieldCoordinator.success']}</p>` : nothing}
              ${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'error' ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffMaterialUsageToFieldCoordinatorError || msg['action.cmdHandoffMaterialUsageToFieldCoordinator.error']}</p>` : nothing}
            </section>
          ` : nothing}
        </div>
      </main>
    `;
  }
}
