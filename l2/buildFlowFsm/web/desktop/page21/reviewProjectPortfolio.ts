/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/reviewProjectPortfolio.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmReviewProjectPortfolioBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.js';
import type { QryInspectProjectDashboardOutput, QryLocateProjectOutput, QryInspectProjectExecutionOverviewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'dashboard.title': m['section.reviewProjectPortfolio.projectDashboardSection.title'],
'dashboard.list.title': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title'],
'dashboard.empty': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty'],
'dashboard.activeProjects': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label'],
'dashboard.activeProjectCount': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label'],
'dashboard.totalBudget': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label'],
'dashboard.totalActualCost': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label'],
'dashboard.budgetVariance': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label'],
'dashboard.costAttentionProjects': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label'],
'dashboard.upcomingTasks': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label'],
'projects.title': m['intent.reviewProjectPortfolio.qryLocateProject.list.title'],
'projects.empty': m['intent.reviewProjectPortfolio.qryLocateProject.list.empty'],
'projects.projectId': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label'],
'projects.clientId': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label'],
'projects.name': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label'],
'projects.address': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label'],
'projects.status': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label'],
'projects.authorizedBudget': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label'],
'projects.plannedStartDate': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label'],
'projects.plannedEndDate': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label'],
'execution.title': m['organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title'],
'execution.empty': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty'],
'execution.taskSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label'],
'execution.upcomingCommitments': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label'],
'execution.totalLoggedHours': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label'],
'execution.materialUsageSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label'],
'execution.actualLaborCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label'],
'execution.actualMaterialCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label'],
'execution.actualCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label'],
'execution.budgetAmount': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'],
'execution.costVariance': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label'],
'execution.changeOrderImpactSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label'],
'handoff.title': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title'],
'handoff.action': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator'],
'handoff.clientId': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label'],
'handoff.name': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label'],
'handoff.address': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label'],
'handoff.authorizedBudget': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label'],
'handoff.plannedStartDate': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label'],
'handoff.plannedEndDate': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label'],
'handoff.success': m['action.cmdHandoffProjectToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffProjectToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para investigar.', 'required': 'Obrigatório', 'confirm': 'Confirme o encaminhamento desta obra para acompanhamento de campo.', 'retry': 'Tente novamente.', 'noSelection': 'Selecione uma obra para continuar.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para investigar.', 'required': 'Obrigatório', 'confirm': 'Confirme o encaminhamento desta obra para acompanhamento de campo.', 'retry': 'Tente novamente.', 'noSelection': 'Selecione uma obra para continuar.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'selectProject': 'Select a project to investigate.', 'required': 'Required', 'confirm': 'Confirm sending this project for field follow-up.', 'retry': 'Try again.', 'noSelection': 'Select a project to continue.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'selectProject': 'Seleccione una obra para investigar.', 'required': 'Obligatorio', 'confirm': 'Confirme el envío de esta obra para seguimiento de campo.', 'retry': 'Inténtelo de nuevo.', 'noSelection': 'Seleccione una obra para continuar.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--review-project-portfolio-102046')
export class BuildFlowFsmDesktopPage21ReviewProjectPortfolioPage extends BuildFlowFsmReviewProjectPortfolioBase {
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
${this.renderDashboard()}
${this.renderWorkspace()}
</main>`;
}
renderDashboard() {
const msg = this.msg;
const data: QryInspectProjectDashboardOutput | null = this.qryInspectProjectDashboardData;
if (this.qryInspectProjectDashboardState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><p>${msg['loading']}</p></section>`;
if (data === null) return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-bold">${msg['dashboard.title']}</h2><p>${msg['dashboard.empty']}</p></section>`;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-bold">${msg['dashboard.title']}</h2><div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${this.renderDashboardFields(data)}</div></section>`;
}
renderDashboardFields(data: QryInspectProjectDashboardOutput) {
const msg = this.msg;
const record = data as unknown as Record<string, unknown>;
const fields: Array<[string, unknown]> = [['dashboard.activeProjects', record['activeProjects']], ['dashboard.activeProjectCount', record['activeProjectCount']], ['dashboard.totalBudget', record['totalBudget']], ['dashboard.totalActualCost', record['totalActualCost']], ['dashboard.budgetVariance', record['budgetVariance']], ['dashboard.costAttentionProjects', record['costAttentionProjects']], ['dashboard.upcomingTasks', record['upcomingTasks']]];
return fields.map(([label, value]) => html`<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-3"><div class="text-sm text-[var(--text-muted,#64748b)]">${msg[label as keyof PageMessageType]}</div><div class="text-xl font-bold">${value == null ? '—' : String(value)}</div></div>`);
}
renderWorkspace() {
const msg = this.msg;
const projects: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
const selectedId: string = this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId;
const selected: QryLocateProjectOutput | undefined = projects.find((project: QryLocateProjectOutput) => String((project as unknown as Record<string, unknown>)['projectId'] ?? '') === selectedId);
return html`<section class="grid gap-6 lg:grid-cols-2"><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-bold">${msg['projects.title']}</h2>${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : projects.length === 0 ? html`<p>${msg['projects.empty']}</p>` : html`<div class="space-y-2">${projects.map((project: QryLocateProjectOutput) => this.renderProjectRow(project, selectedId))}</div>`}</div><div class="space-y-4">${selected === undefined ? html`<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-4"><p>${msg['selectProject']}</p></div>` : this.renderDetail(selected)}</div></section>`;
}
renderProjectRow(project: QryLocateProjectOutput, selectedId: string) {
const msg = this.msg;
const row = project as unknown as Record<string, unknown>;
const projectId = String(row['projectId'] ?? '');
return html`<button type="button" class="w-full rounded-lg border p-3 text-left ${projectId === selectedId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(projectId); this.handleQryInspectProjectExecutionOverviewClick(); }}><div class="font-bold">${row['name'] == null ? '' : String(row['name'])}</div><div class="text-sm text-[var(--text-muted,#64748b)]">${msg['projects.status']}: ${row['status'] == null ? '' : String(row['status'])}</div><div class="text-sm">${msg['projects.authorizedBudget']}: ${row['authorizedBudget'] == null ? '' : String(row['authorizedBudget'])}</div></button>`;
}
renderDetail(project: QryLocateProjectOutput) {
const msg = this.msg;
const row = project as unknown as Record<string, unknown>;
const execution: QryInspectProjectExecutionOverviewOutput | null = this.qryInspectProjectExecutionOverviewData;
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-bold">${row['name'] == null ? '' : String(row['name'])}</h2><div class="grid gap-3 sm:grid-cols-2"><div><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['projects.address']}</span><p>${row['address'] == null ? '' : String(row['address'])}</p></div><div><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['projects.status']}</span><p>${row['status'] == null ? '' : String(row['status'])}</p></div><div><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['projects.plannedStartDate']}</span><p>${row['plannedStartDate'] == null ? '' : String(row['plannedStartDate'])}</p></div><div><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['projects.plannedEndDate']}</span><p>${row['plannedEndDate'] == null ? '' : String(row['plannedEndDate'])}</p></div></div>${this.qryInspectProjectExecutionOverviewState === 'loading' ? html`<p>${msg['loading']}</p>` : execution === null ? html`<p>${msg['execution.empty']}</p>` : this.renderExecution(execution)}${this.renderHandoffForm(row)}</article>`;
}
renderExecution(execution: QryInspectProjectExecutionOverviewOutput) {
const msg = this.msg;
const record = execution as unknown as Record<string, unknown>;
const fields: Array<[string, unknown]> = [['execution.taskSummary', record['taskSummary']], ['execution.upcomingCommitments', record['upcomingCommitments']], ['execution.totalLoggedHours', record['totalLoggedHours']], ['execution.materialUsageSummary', record['materialUsageSummary']], ['execution.actualLaborCost', record['actualLaborCost']], ['execution.actualMaterialCost', record['actualMaterialCost']], ['execution.actualCost', record['actualCost']], ['execution.budgetAmount', record['budgetAmount']], ['execution.costVariance', record['costVariance']], ['execution.changeOrderImpactSummary', record['changeOrderImpactSummary']]];
return html`<section class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4 space-y-3"><h3 class="font-bold">${msg['execution.title']}</h3><div class="grid gap-3 sm:grid-cols-2">${fields.map(([label, value]) => html`<div><div class="text-sm text-[var(--text-muted,#64748b)]">${msg[label as keyof PageMessageType]}</div><div>${value == null ? '—' : String(value)}</div></div>`)}</div></section>`;
}
renderHandoffForm(row: Record<string, unknown>) {
const msg = this.msg;
const busy = this.cmdHandoffProjectToFieldCoordinatorState === 'loading';
const hasProject = String(row['projectId'] ?? '') !== '';
return html`<section class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4 space-y-4"><h3 class="font-bold">${msg['handoff.title']}</h3><div class="grid gap-3 sm:grid-cols-2"><label>${msg['handoff.clientId']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorClientId} @input=${this.handleCmdHandoffProjectToFieldCoordinatorClientIdChange} required></label><label>${msg['handoff.name']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorName} @input=${this.handleCmdHandoffProjectToFieldCoordinatorNameChange} required></label><label>${msg['handoff.address']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorAddress} @input=${this.handleCmdHandoffProjectToFieldCoordinatorAddressChange} required></label><label>${msg['handoff.authorizedBudget']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget} @input=${this.handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange} required></label><label>${msg['handoff.plannedStartDate']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate} @input=${this.handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange} required></label><label>${msg['handoff.plannedEndDate']}<input class="w-full rounded border bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate} @input=${this.handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange} required></label></div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['confirm']}</p><button type="button" class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !hasProject} @click=${this.handleCmdHandoffProjectToFieldCoordinatorClick}>${busy ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffProjectToFieldCoordinatorState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffProjectToFieldCoordinatorState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffProjectToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}