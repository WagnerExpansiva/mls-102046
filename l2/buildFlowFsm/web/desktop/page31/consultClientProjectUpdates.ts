/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/consultClientProjectUpdates.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultClientProjectUpdatesBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.js';
import type { QryLocateProjectOutput, QryInspectStatusReportOutput, QryInspectClientBillingSummaryOutput } from '/_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'project.context': m['section.consultClientProjectUpdates.projectContextSection.title'],
'project.listTitle': m['intent.consultClientProjectUpdates.qryLocateProject.list.title'],
'project.empty': m['intent.consultClientProjectUpdates.qryLocateProject.list.empty'],
'project.id': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.projectId.label'],
'project.client': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label'],
'project.address': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.address.label'],
'project.status': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedEndDate.label'],
'updates.context': m['section.consultClientProjectUpdates.projectUpdatesSection.title'],
'report.title': m['organism.consultClientProjectUpdates.qryInspectStatusReport.title'],
'report.empty': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.empty'],
'report.status': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.status.label'],
'report.heading': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.title.label'],
'report.content': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.content.label'],
'report.risks': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.communicatedRisks.label'],
'report.published': m['intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedAt.label'],
'billing.title': m['organism.consultClientProjectUpdates.qryInspectClientBillingSummary.title'],
'billing.approvedRefs': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'billing.invoiceRefs': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'billing.approved': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'billing.billable': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'billing.invoiced': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'billing.available': m['intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando informações…',
'chooseProject': 'Escolha a obra para acompanhar',
'projectSelected': 'Obra selecionada',
'notAvailable': 'Ainda não há informações publicadas.',
'loadReport': 'Ver atualização publicada',
'loadBilling': 'Ver posição financeira',
'queryError': 'Não foi possível carregar estas informações.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando informações…',
'chooseProject': 'Escolha a obra para acompanhar',
'projectSelected': 'Obra selecionada',
'notAvailable': 'Ainda não há informações publicadas.',
'loadReport': 'Ver atualização publicada',
'loadBilling': 'Ver posição financeira',
'queryError': 'Não foi possível carregar estas informações.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading information…',
'chooseProject': 'Choose the project to follow',
'projectSelected': 'Selected project',
'notAvailable': 'There is no published information yet.',
'loadReport': 'View published update',
'loadBilling': 'View financial position',
'queryError': 'These details could not be loaded.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando información…',
'chooseProject': 'Elija la obra que desea seguir',
'projectSelected': 'Obra seleccionada',
'notAvailable': 'Aún no hay información publicada.',
'loadReport': 'Ver actualización publicada',
'loadBilling': 'Ver posición financiera',
'queryError': 'No se pudo cargar esta información.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--consult-client-project-updates-102046')
export class BuildFlowFsmDesktopPage31ConsultClientProjectUpdatesPage extends BuildFlowFsmConsultClientProjectUpdatesBase {
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
<section aria-labelledby="project-context" class="space-y-4">
<h1 id="project-context" class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['project.context']}</h1>
${this.renderProjectSurface()}
</section>
${this.qryLocateProjectData.length > 0 ? html`<section class="space-y-4" aria-labelledby="project-selected"><h2 id="project-selected" class="text-xl font-semibold">${msg['projectSelected']}</h2>${this.renderSelectedDetails()}</section>` : nothing}
</main>`;
}
renderProjectSurface() {
const msg = this.msg;
if (this.qryLocateProjectState === 'loading') return html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4" role="status">${msg['loading']}</div>`;
if (this.qryLocateProjectState === 'error') return html`<p class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-4 text-[var(--status-error-text,#991b1b)]">${msg['queryError']}</p>`;
if (this.qryLocateProjectData.length === 0) return html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">${msg['project.empty']}</div>`;
return html`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">${this.qryLocateProjectData.map((project: QryLocateProjectOutput) => html`<button type="button" class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 text-left shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))] hover:border-[var(--selected-border,#2563eb)]" @click=${() => { this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(project.clientId); this.handleQryInspectClientBillingSummaryClick(); }}>
<strong class="block text-lg text-[var(--text-strong,#0f172a)]">${project.name}</strong><span class="mt-1 block text-[var(--text-muted,#64748b)]">${project.address}</span><dl class="mt-4 grid grid-cols-2 gap-2 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['project.status']}</dt><dd>${project.status}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['project.budget']}</dt><dd>${project.authorizedBudget}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['project.start']}</dt><dd>${project.plannedStartDate}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['project.end']}</dt><dd>${project.plannedEndDate}</dd></div></dl></button>`)}</div>`;
}
renderSelectedDetails() {
return html`<div class="grid gap-6 lg:grid-cols-2">${this.renderBilling()}${this.renderReport()}</div>`;
}
renderBilling() {
const msg = this.msg;
const data: QryInspectClientBillingSummaryOutput | null = this.qryInspectClientBillingSummaryData;
if (this.qryInspectClientBillingSummaryState === 'loading') return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5" role="status">${msg['loading']}</article>`;
if (this.qryInspectClientBillingSummaryState === 'error') return html`<article class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-5 text-[var(--status-error-text,#991b1b)]">${msg['queryError']}</article>`;
if (data === null) return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5"><h3 class="text-lg font-semibold">${msg['billing.title']}</h3><p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['notAvailable']}</p></article>`;
return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="text-lg font-semibold">${msg['billing.title']}</h3><dl class="mt-4 grid grid-cols-2 gap-4">${this.renderAmount(msg['billing.approved'], data.approvedChangeOrderAmount)}${this.renderAmount(msg['billing.billable'], data.billableAmount)}${this.renderAmount(msg['billing.invoiced'], data.invoicedAmount)}${this.renderAmount(msg['billing.available'], data.clientAvailableAmount)}</dl><div class="mt-5 space-y-2 text-sm"><p><strong>${msg['billing.approvedRefs']}</strong> ${this.renderReferenceValues(data.approvedChangeOrderReferences)}</p><p><strong>${msg['billing.invoiceRefs']}</strong> ${this.renderReferenceValues(data.invoiceReferences)}</p></div></article>`;
}
renderAmount(label: string, value: unknown) { return html`<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${label}</dt><dd class="text-lg font-semibold">${value == null ? '—' : String(value)}</dd></div>`; }
renderReferenceValues(value: unknown) { return value == null ? nothing : Array.isArray(value) ? value.join(', ') : String(value); }
renderReport() {
const msg = this.msg;
const data: QryInspectStatusReportOutput | null = this.qryInspectStatusReportData;
if (this.qryInspectStatusReportState === 'loading') return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5" role="status">${msg['loading']}</article>`;
if (this.qryInspectStatusReportState === 'error') return html`<article class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] p-5 text-[var(--status-error-text,#991b1b)]">${msg['queryError']}</article>`;
if (data === null || data.publishedAt == null) return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-5"><h3 class="text-lg font-semibold">${msg['report.title']}</h3><p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['notAvailable']}</p></article>`;
return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="text-lg font-semibold">${data.title}</h3><dl class="mt-4 space-y-3"><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['report.status']}</dt><dd>${data.status}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['report.content']}</dt><dd class="whitespace-pre-wrap">${data.content}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['report.risks']}</dt><dd>${data.communicatedRisks}</dd></div><div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg['report.published']}</dt><dd>${data.publishedAt}</dd></div></dl></article>`;
}
}
