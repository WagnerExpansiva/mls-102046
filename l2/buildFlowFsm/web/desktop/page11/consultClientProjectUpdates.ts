/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/consultClientProjectUpdates.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultClientProjectUpdatesBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'projectContext.title': m['section.consultClientProjectUpdates.projectContextSection.title'],
'projectUpdates.title': m['section.consultClientProjectUpdates.projectUpdatesSection.title'],
'projectOverview.title': m['section.consultClientProjectUpdates.projectOverview.title'],
'projectInsights.title': m['section.consultClientProjectUpdates.projectInsights.title'],
'locate.title': m['organism.consultClientProjectUpdates.qryLocateProject.title'],
'locate.empty': m['intent.consultClientProjectUpdates.qryLocateProject.list.empty'],
'locate.projectId': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.projectId.label'],
'locate.clientId': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.clientId.label'],
'locate.name': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label'],
'locate.address': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.address.label'],
'locate.status': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.status.label'],
'locate.budget': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.authorizedBudget.label'],
'locate.start': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedStartDate.label'],
'locate.end': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedEndDate.label'],
'report.title': m['organism.consultClientProjectUpdates.qryInspectStatusReport.title'],
'report.empty': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.empty'],
'report.id': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.statusReportId.label'],
'report.project': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.projectId.label'],
'report.status': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.status.label'],
'report.name': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.title.label'],
'report.content': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.content.label'],
'report.risks': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.communicatedRisks.label'],
'report.generatedAt': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedAt.label'],
'report.generatedBy': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedByUserId.label'],
'report.publishedAt': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedAt.label'],
'report.publishedBy': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedByUserId.label'],
'report.withdrawnAt': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.withdrawnAt.label'],
'billing.title': m['organism.consultClientProjectUpdates.qryInspectClientBillingSummary.title'],
'billing.empty': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.empty'],
'billing.client': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientId.label'],
'billing.project': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.projectId.label'],
'billing.changes': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'billing.invoices': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'billing.changeAmount': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'billing.billable': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'billing.invoiced': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'billing.available': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando informações…',
'refresh': 'Atualizar',
'chooseProject': 'Selecione uma obra',
'chooseReport': 'Selecione um relatório publicado',
'notAvailable': 'Não disponível',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando informações…', 'refresh': 'Atualizar', 'chooseProject': 'Selecione uma obra', 'chooseReport': 'Selecione um relatório publicado', 'notAvailable': 'Não disponível',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading information…', 'refresh': 'Refresh', 'chooseProject': 'Select a project', 'chooseReport': 'Select a published report', 'notAvailable': 'Not available',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando información…', 'refresh': 'Actualizar', 'chooseProject': 'Seleccione una obra', 'chooseReport': 'Seleccione un informe publicado', 'notAvailable': 'No disponible',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--consult-client-project-updates-102046')
export class BuildFlowFsmDesktopPage11ConsultClientProjectUpdatesPage extends BuildFlowFsmConsultClientProjectUpdatesBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
<header class="flex items-center justify-between"><h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['projectContext.title']}</h1></header>
${this.renderProjectContext()}
${this.renderProjectUpdates()}
</div></main>`;
}
renderProjectContext() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
<h2 class="mb-4 text-lg font-semibold">${msg['locate.title']}</h2>
${this.qryLocateProjectState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : nothing}
${this.qryLocateProjectState !== 'loading' && this.qryLocateProjectData.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['locate.empty']}</p>` : nothing}
${this.qryLocateProjectData.length > 0 ? html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
${[msg['locate.name'], msg['locate.address'], msg['locate.status'], msg['locate.budget'], msg['locate.start'], msg['locate.end']].map((label: string) => html`<th class="px-3 py-2 font-semibold">${label}</th>`)}
</tr></thead><tbody>${this.qryLocateProjectData.map((project) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${project.name}</td><td class="px-3 py-2">${project.address}</td><td class="px-3 py-2">${project.status}</td><td class="px-3 py-2">${project.authorizedBudget}</td><td class="px-3 py-2">${project.plannedStartDate}</td><td class="px-3 py-2">${project.plannedEndDate}</td></tr>`)}</tbody></table></div>` : nothing}
<button class="mt-4 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['refresh']}</button>
</section>`;
}
renderProjectUpdates() {
const msg = this.msg;
const report = this.qryInspectStatusReportData;
const billing = this.qryInspectClientBillingSummaryData;
return html`<section class="space-y-4"><h2 class="text-lg font-semibold">${msg['projectUpdates.title']}</h2>
<div class="grid gap-4 lg:grid-cols-2">
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h3 class="mb-3 font-semibold">${msg['report.title']}</h3>
<label class="mb-3 block text-sm">${msg['chooseProject']}<select class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectStatusReportStatusReportStatusReportId} @change=${(event: Event) => this.handleQryInspectStatusReportStatusReportStatusReportIdChange(event)}><option value="">${msg['chooseReport']}</option></select></label>
${this.qryInspectStatusReportState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
${report ? html`<dl class="grid gap-3 text-sm sm:grid-cols-2"><div><dt class="font-semibold">${msg['report.id']}</dt><dd>${report.statusReportId}</dd></div><div><dt class="font-semibold">${msg['report.project']}</dt><dd>${report.projectId}</dd></div><div><dt class="font-semibold">${msg['report.status']}</dt><dd>${report.status}</dd></div><div><dt class="font-semibold">${msg['report.name']}</dt><dd>${report.title}</dd></div><div class="sm:col-span-2"><dt class="font-semibold">${msg['report.content']}</dt><dd>${report.content}</dd></div><div class="sm:col-span-2"><dt class="font-semibold">${msg['report.risks']}</dt><dd>${report.communicatedRisks}</dd></div><div><dt class="font-semibold">${msg['report.generatedAt']}</dt><dd>${report.generatedAt}</dd></div><div><dt class="font-semibold">${msg['report.publishedAt']}</dt><dd>${report.publishedAt}</dd></div></dl>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['report.empty']}</p>`}
<button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${(event: Event) => this.handleQryInspectStatusReportClick(event)}>${msg['refresh']}</button></div>
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h3 class="mb-3 font-semibold">${msg['billing.title']}</h3>
<label class="mb-3 block text-sm">${msg['chooseProject']}<select class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.qryInspectClientBillingSummaryClientBillingSummaryClientId} @change=${(event: Event) => this.handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange(event)}><option value="">${msg['chooseProject']}</option>${this.qryLocateProjectData.map((project) => html`<option value=${project.clientId}>${project.name}</option>`)}</select></label>
${this.qryInspectClientBillingSummaryState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
${billing ? html`<dl class="grid gap-3 text-sm sm:grid-cols-2"><div><dt class="font-semibold">${msg['billing.client']}</dt><dd>${billing.clientId}</dd></div><div><dt class="font-semibold">${msg['billing.project']}</dt><dd>${billing.projectId}</dd></div><div><dt class="font-semibold">${msg['billing.changes']}</dt><dd>${billing.approvedChangeOrderReferences}</dd></div><div><dt class="font-semibold">${msg['billing.invoices']}</dt><dd>${billing.invoiceReferences}</dd></div><div><dt class="font-semibold">${msg['billing.changeAmount']}</dt><dd>${billing.approvedChangeOrderAmount}</dd></div><div><dt class="font-semibold">${msg['billing.billable']}</dt><dd>${billing.billableAmount}</dd></div><div><dt class="font-semibold">${msg['billing.invoiced']}</dt><dd>${billing.invoicedAmount}</dd></div><div><dt class="font-semibold">${msg['billing.available']}</dt><dd>${billing.clientAvailableAmount}</dd></div></dl>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['billing.empty']}</p>`}
<button class="mt-4 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${(event: Event) => this.handleQryInspectClientBillingSummaryClick(event)}>${msg['refresh']}</button></div></div></section>`;
}
}
