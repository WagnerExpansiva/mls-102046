/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/reviewProjectPortfolio.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'dashboard.section': m['section.reviewProjectPortfolio.projectDashboardSection.title'],
'dashboard.title': m['organism.reviewProjectPortfolio.qryInspectProjectDashboard.title'],
'dashboard.list': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title'],
'dashboard.empty': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty'],
'dashboard.activeProjects': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label'],
'dashboard.activeProjectCount': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label'],
'dashboard.totalBudget': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label'],
'dashboard.totalActualCost': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label'],
'dashboard.budgetVariance': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label'],
'dashboard.costAttentionProjects': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label'],
'dashboard.upcomingTasks': m['intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label'],
'projects.section': m['section.reviewProjectPortfolio.projectSelectionSection.title'],
'projects.title': m['organism.reviewProjectPortfolio.qryLocateProject.title'],
'projects.list': m['intent.reviewProjectPortfolio.qryLocateProject.list.title'],
'projects.empty': m['intent.reviewProjectPortfolio.qryLocateProject.list.empty'],
'projectId': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label'],
'clientId': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label'],
'name': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label'],
'address': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label'],
'status': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label'],
'authorizedBudget': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label'],
'plannedStartDate': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label'],
'plannedEndDate': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label'],
'execution.title': m['organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title'],
'execution.empty': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty'],
'taskSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label'],
'upcomingCommitments': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label'],
'actualCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label'],
'budgetAmount': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'],
'costVariance': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label'],
'changeOrderImpactSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label'],
'handoff.title': m['organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title'],
'handoff.form': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title'],
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
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para ver a execução', 'chooseProject': 'Escolha uma obra', 'required': 'Obrigatório', 'saving': 'Encaminhando…'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para ver a execução', 'chooseProject': 'Escolha uma obra', 'required': 'Obrigatório', 'saving': 'Encaminhando…'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'selectProject': 'Select a project to view execution', 'chooseProject': 'Choose a project', 'required': 'Required', 'saving': 'Sending…'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'selectProject': 'Seleccione una obra para ver la ejecución', 'chooseProject': 'Elija una obra', 'required': 'Obligatorio', 'saving': 'Enviando…'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--review-project-portfolio-102046')
export class BuildFlowFsmDesktopPage31ReviewProjectPortfolioPage extends BuildFlowFsmReviewProjectPortfolioBase {
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
return html`<main class="min-h-screen bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderDashboard(msg)}
${this.renderProjects(msg)}
${this.renderDetail(msg)}
</main>`;
}
renderDashboard(msg: PageMessageType) {
const data: QryInspectProjectDashboardOutput | null = this.qryInspectProjectDashboardData;
if (this.qryInspectProjectDashboardState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><p>${msg['loading']}</p></section>`;
if (data === null) return nothing;
const values = data as unknown as Record<string, unknown>;
const cards: Array<[string, string]> = [['dashboard.activeProjects','activeProjects'],['dashboard.activeProjectCount','activeProjectCount'],['dashboard.totalBudget','totalBudget'],['dashboard.totalActualCost','totalActualCost'],['dashboard.budgetVariance','budgetVariance'],['dashboard.costAttentionProjects','costAttentionProjects'],['dashboard.upcomingTasks','upcomingTasks']];
return html`<section class="space-y-3" aria-labelledby="portfolio-dashboard"><h2 id="portfolio-dashboard" class="text-xl font-semibold">${msg['dashboard.section']}</h2><div class="grid grid-cols-2 gap-3 md:grid-cols-4">${cards.map(([label,key]) => html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><p class="text-sm text-[var(--text-muted,#64748b)]">${msg[label as keyof PageMessageType]}</p><p class="mt-1 text-2xl font-semibold">${String(values[key] ?? '—')}</p></article>`)}</div></section>`;
}
renderProjects(msg: PageMessageType) {
if (this.qryLocateProjectState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><p>${msg['loading']}</p></section>`;
const projects: QryLocateProjectOutput[] = this.qryLocateProjectData;
return html`<section class="space-y-3"><h2 class="text-xl font-semibold">${msg['projects.section']}</h2><div class="grid gap-3">${projects.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : projects.map((project: QryLocateProjectOutput) => { const row = project as unknown as Record<string, unknown>; const id = String(row['projectId'] ?? ''); const selected = id === this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId; return html`<button type="button" class="w-full rounded-lg border p-4 text-left ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${(event: Event) => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(id); this.setCmdHandoffProjectToFieldCoordinatorProjectProjectId(id); this.handleQryInspectProjectExecutionOverviewClick(event); }}><div class="flex flex-wrap gap-x-6 gap-y-2"><strong>${String(row['name'] ?? '—')}</strong><span>${msg['status']}: ${String(row['status'] ?? '—')}</span><span>${msg['authorizedBudget']}: ${String(row['authorizedBudget'] ?? '—')}</span><span>${msg['plannedEndDate']}: ${String(row['plannedEndDate'] ?? '—')}</span></div></button>`; })}</div></section>`;
}
renderDetail(msg: PageMessageType) {
const data: QryInspectProjectExecutionOverviewOutput | null = this.qryInspectProjectExecutionOverviewData;
if (data === null) return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5"><p class="text-[var(--text-muted,#64748b)]">${msg['selectProject']}</p></section>`;
const values = data as unknown as Record<string, unknown>;
const fields: Array<[keyof PageMessageType, string]> = [['taskSummary','taskSummary'],['upcomingCommitments','upcomingCommitments'],['actualCost','actualCost'],['budgetAmount','budgetAmount'],['costVariance','costVariance'],['changeOrderImpactSummary','changeOrderImpactSummary']];
return html`<section class="grid gap-6 lg:grid-cols-3"><article class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5 lg:col-span-2"><h2 class="text-xl font-semibold">${msg['execution.title']}</h2><div class="mt-4 grid gap-4 sm:grid-cols-2">${fields.map(([label,key]) => html`<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg[label]}</dt><dd class="mt-1">${String(values[key] ?? '—')}</dd></div>`)}</div></article>${this.renderHandoff(msg)}</section>`;
}
renderHandoff(msg: PageMessageType) {
const busy = this.cmdHandoffProjectToFieldCoordinatorState === 'loading';
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><h2 class="text-xl font-semibold">${msg['handoff.title']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['handoff.form']}</p><div class="mt-4 space-y-3">${this.renderInput(msg['handoff.clientId'], this.cmdHandoffProjectToFieldCoordinatorClientId, this.handleCmdHandoffProjectToFieldCoordinatorClientIdChange, 'text')}${this.renderInput(msg['handoff.name'], this.cmdHandoffProjectToFieldCoordinatorName, this.handleCmdHandoffProjectToFieldCoordinatorNameChange, 'text')}${this.renderInput(msg['handoff.address'], this.cmdHandoffProjectToFieldCoordinatorAddress, this.handleCmdHandoffProjectToFieldCoordinatorAddressChange, 'text')}${this.renderInput(msg['handoff.authorizedBudget'], this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget, this.handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange, 'text')}${this.renderInput(msg['handoff.plannedStartDate'], this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate, this.handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange, 'date')}${this.renderInput(msg['handoff.plannedEndDate'], this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate, this.handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange, 'date')}<button type="button" class="w-full rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-3 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy || !this.cmdHandoffProjectToFieldCoordinatorProjectProjectId} @click=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorClick(event)}>${busy ? msg['saving'] : msg['handoff.action']}</button>${this.cmdHandoffProjectToFieldCoordinatorState === 'success' ? html`<p role="status" class="text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffProjectToFieldCoordinatorState === 'error' ? html`<p role="alert" class="text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffProjectToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</div></article>`;
}
renderInput(label: string, value: string, handler: (event: Event) => void, type: string) {
return html`<label class="block"><span class="mb-1 block text-sm font-medium">${label}<span class="ml-1 text-[var(--status-error-text,#991b1b)]">*</span></span><input class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" required .value=${value} type=${type} @input=${handler} /></label>`;
}
}
