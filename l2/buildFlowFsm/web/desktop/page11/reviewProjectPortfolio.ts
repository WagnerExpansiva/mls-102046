/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/reviewProjectPortfolio.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'project.id': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label'],
'project.client': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label'],
'project.address': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label'],
'project.status': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label'],
'execution.title': m['organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title'],
'execution.list': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title'],
'execution.empty': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty'],
'execution.projectId': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label'],
'execution.projectName': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label'],
'execution.projectStatus': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label'],
'execution.taskSummary': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label'],
'execution.commitments': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label'],
'execution.hours': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label'],
'execution.materials': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label'],
'execution.laborCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label'],
'execution.materialCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label'],
'execution.actualCost': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label'],
'execution.budget': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'],
'execution.variance': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label'],
'execution.calculatedAt': m['intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label'],
'handoff.title': m['organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title'],
'handoff.form': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title'],
'handoff.action': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator'],
'handoff.client': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label'],
'handoff.name': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label'],
'handoff.address': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label'],
'handoff.budget': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label'],
'handoff.start': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label'],
'handoff.end': m['intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label'],
'action.success': m['action.cmdHandoffProjectToFieldCoordinator.success'],
'action.error': m['action.cmdHandoffProjectToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para analisar', 'refresh': 'Atualizar', 'routeValue': 'Obra selecionada',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para analisar', 'refresh': 'Atualizar', 'routeValue': 'Obra selecionada',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'selectProject': 'Select a project to analyze', 'refresh': 'Refresh', 'routeValue': 'Selected project',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'selectProject': 'Seleccione una obra para analizar', 'refresh': 'Actualizar', 'routeValue': 'Obra seleccionada',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--review-project-portfolio-102046')
export class BuildFlowFsmDesktopPage11ReviewProjectPortfolioPage extends BuildFlowFsmReviewProjectPortfolioBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6">${this.renderDashboard()}${this.renderProjects()}${this.renderExecution()}${this.renderHandoff()}</div></main>`;
}
renderDashboard() {
const msg = this.msg;
const data: QryInspectProjectDashboardOutput | null = this.qryInspectProjectDashboardData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-xl font-semibold">${msg['dashboard.section']}</h2><h3 class="mt-1 text-lg">${msg['dashboard.title']}</h3>${this.qryInspectProjectDashboardState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : data ? html`<dl class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${this.renderMetric(msg['dashboard.activeProjects'], data.activeProjects)}${this.renderMetric(msg['dashboard.activeProjectCount'], data.activeProjectCount)}${this.renderMetric(msg['dashboard.totalBudget'], data.totalBudget)}${this.renderMetric(msg['dashboard.totalActualCost'], data.totalActualCost)}${this.renderMetric(msg['dashboard.budgetVariance'], data.budgetVariance)}${this.renderMetric(msg['dashboard.costAttentionProjects'], data.costAttentionProjects)}${this.renderMetric(msg['dashboard.upcomingTasks'], data.upcomingTasks)}</dl>` : html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['dashboard.empty']}</p>`}<button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryInspectProjectDashboardClick(event)}>${msg['refresh']}</button></section>`;
}
renderMetric(label: string, value: unknown) {
return html`<div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3"><dt class="text-sm text-[var(--text-muted,#64748b)]">${label}</dt><dd class="mt-1 text-lg font-semibold">${value == null ? '—' : String(value)}</dd></div>`;
}
renderProjects() {
const msg = this.msg;
const rows: QryLocateProjectOutput[] = this.qryLocateProjectData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-xl font-semibold">${msg['projects.section']}</h2><h3 class="mt-1 text-lg">${msg['projects.title']}</h3>${this.qryLocateProjectState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="min-w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['project.id'],msg['project.client'],msg['project.name'],msg['project.address'],msg['project.status'],msg['project.budget'],msg['project.start'],msg['project.end']].map((heading: string) => html`<th class="px-3 py-2 font-semibold">${heading}</th>`)}</tr></thead><tbody>${rows.map((row: QryLocateProjectOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${row.projectId}</td><td class="px-3 py-2">${row.clientId}</td><td class="px-3 py-2">${row.name}</td><td class="px-3 py-2">${row.address}</td><td class="px-3 py-2">${row.status}</td><td class="px-3 py-2">${row.authorizedBudget}</td><td class="px-3 py-2">${row.plannedStartDate}</td><td class="px-3 py-2"><button class="underline text-[var(--link-text,#2563eb)]" @click=${() => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(row.projectId); void this.loadQryInspectProjectExecutionOverview(); }}>${row.plannedEndDate}</button></td></tr>`)}</tbody></table></div>`}<button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['refresh']}</button></section>`;
}
renderExecution() {
const msg = this.msg;
const data: QryInspectProjectExecutionOverviewOutput | null = this.qryInspectProjectExecutionOverviewData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-xl font-semibold">${msg['execution.title']}</h2>${this.qryInspectProjectExecutionOverviewState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : data ? html`<dl class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${this.renderMetric(msg['execution.projectId'], data.projectId)}${this.renderMetric(msg['execution.projectName'], data.projectName)}${this.renderMetric(msg['execution.projectStatus'], data.projectStatus)}${this.renderMetric(msg['execution.taskSummary'], data.taskSummary)}${this.renderMetric(msg['execution.commitments'], data.upcomingCommitments)}${this.renderMetric(msg['execution.hours'], data.totalLoggedHours)}${this.renderMetric(msg['execution.materials'], data.materialUsageSummary)}${this.renderMetric(msg['execution.laborCost'], data.actualLaborCost)}${this.renderMetric(msg['execution.materialCost'], data.actualMaterialCost)}${this.renderMetric(msg['execution.actualCost'], data.actualCost)}${this.renderMetric(msg['execution.budget'], data.budgetAmount)}${this.renderMetric(msg['execution.variance'], data.costVariance)}${this.renderMetric(msg['execution.calculatedAt'], data.calculatedAt)}</dl>` : html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['execution.empty']}</p>`}</section>`;
}
renderHandoff() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-xl font-semibold">${msg['handoff.title']}</h2><form class="mt-4 space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdHandoffProjectToFieldCoordinatorClick(event); }}><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['routeValue']}: ${this.cmdHandoffProjectToFieldCoordinatorProjectProjectId || msg['selectProject']}</p><label class="block"><span>${msg['handoff.client']}</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorClientId} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorClientIdChange(event)} required /></label><label class="block"><span>${msg['handoff.name']}</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorName} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorNameChange(event)} required /></label><label class="block"><span>${msg['handoff.address']}</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorAddress} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorAddressChange(event)} required /></label><label class="block"><span>${msg['handoff.budget']}</span><input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange(event)} required /></label><label class="block"><span>${msg['handoff.start']}</span><input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorPlannedStartDate} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange(event)} required /></label><label class="block"><span>${msg['handoff.end']}</span><input type="date" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffProjectToFieldCoordinatorPlannedEndDate} @input=${(event: Event) => this.handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange(event)} required /></label><button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdHandoffProjectToFieldCoordinatorState === 'loading'}>${this.cmdHandoffProjectToFieldCoordinatorState === 'loading' ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffProjectToFieldCoordinatorState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['action.success']}</p>` : nothing}${this.cmdHandoffProjectToFieldCoordinatorState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffProjectToFieldCoordinatorError || msg['action.error']}</p>` : nothing}</form></section>`;
}
}
