/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/consultApprovedProjectChangeOrders.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultApprovedProjectChangeOrdersBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'project.context.title': m['section.consultApprovedProjectChangeOrders.project-context.title'],
'project.title': m['organism.consultApprovedProjectChangeOrders.qryLocateProject.title'],
'project.list.title': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title'],
'project.empty': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty'],
'project.projectId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label'],
'project.clientId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label'],
'project.address': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label'],
'project.status': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label'],
'changes.context.title': m['section.consultApprovedProjectChangeOrders.approved-change-orders.title'],
'changes.title': m['organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title'],
'changes.list.title': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title'],
'changes.empty': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty'],
'changes.changeOrderId': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label'],
'changes.clientRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label'],
'changes.projectRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label'],
'changes.description': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label'],
'changes.scopeImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label'],
'changes.scheduleImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label'],
'changes.amount': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label'],
'changes.submittedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label'],
'changes.forwardedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label'],
'changes.status': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label'],
'billing.context.title': m['section.consultApprovedProjectChangeOrders.billing-summary.title'],
'billing.title': m['organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title'],
'billing.list.title': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title'],
'billing.empty': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty'],
'billing.clientId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label'],
'billing.projectId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label'],
'billing.approvedRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'billing.invoiceRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'billing.approvedAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'billing.billableAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'billing.invoicedAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'billing.availableAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
'workspace.title': m['section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title'],
'impact.title': m['section.consultApprovedProjectChangeOrders.billingImpact.title'],
'load': 'Carregar',
'loading': 'Carregando…',
'select': 'Selecionar',
'notAvailable': 'Nenhum resultado disponível.'
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'load': 'Carregar', 'loading': 'Carregando…', 'select': 'Selecionar', 'notAvailable': 'Nenhum resultado disponível.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'load': 'Load', 'loading': 'Loading…', 'select': 'Select', 'notAvailable': 'No result available.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'load': 'Cargar', 'loading': 'Cargando…', 'select': 'Seleccionar', 'notAvailable': 'No hay resultados disponibles.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--consult-approved-project-change-orders-102046')
export class BuildFlowFsmDesktopPage11ConsultApprovedProjectChangeOrdersPage extends BuildFlowFsmConsultApprovedProjectChangeOrdersBase {
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
${this.renderProjectContext()}
${this.renderApprovedChanges()}
${this.renderBillingSummary()}
</div></main>`;
}
renderProjectContext() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<h1 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['project.context.title']}</h1>
<div class="mt-4 flex items-center justify-between gap-4"><h2 class="text-lg font-semibold">${msg['project.title']}</h2>
<button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.qryLocateProjectState === 'loading'} @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${this.qryLocateProjectState === 'loading' ? msg['loading'] : msg['load']}</button></div>
${this.qryLocateProjectState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : this.qryLocateProjectData.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="w-full text-left text-sm"><caption class="mb-2 text-left text-base font-medium">${msg['project.list.title']}</caption><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['project.projectId'],msg['project.clientId'],msg['project.name'],msg['project.address'],msg['project.status'],msg['project.budget'],msg['project.start'],msg['project.end']].map((label: string) => html`<th class="px-3 py-2 font-semibold">${label}</th>`)}</tr></thead><tbody>${this.qryLocateProjectData.map((item) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${item.projectId}</td><td class="px-3 py-2">${item.clientId}</td><td class="px-3 py-2">${item.name}</td><td class="px-3 py-2">${item.address}</td><td class="px-3 py-2">${item.status}</td><td class="px-3 py-2">${item.authorizedBudget}</td><td class="px-3 py-2">${item.plannedStartDate}</td><td class="px-3 py-2">${item.plannedEndDate}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderApprovedChanges() {
const msg = this.msg;
const data = this.qryInspectApprovedChangeOrdersData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-lg font-semibold">${msg['changes.context.title']}</h2><div class="mt-4 flex items-center justify-between gap-4"><h3 class="font-medium">${msg['changes.title']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50" ?disabled=${this.qryInspectApprovedChangeOrdersState === 'loading'} @click=${(event: Event) => this.handleQryInspectApprovedChangeOrdersClick(event)}>${this.qryInspectApprovedChangeOrdersState === 'loading' ? msg['loading'] : msg['load']}</button></div>${this.qryInspectApprovedChangeOrdersState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : data === null ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['changes.empty']}</p>` : html`<div class="mt-4"><h4 class="font-medium">${msg['changes.list.title']}</h4><pre class="mt-2 overflow-x-auto rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-sm">${JSON.stringify(data, null, 2)}</pre></div>`}</section>`;
}
renderBillingSummary() {
const msg = this.msg;
const data = this.qryInspectClientBillingSummaryData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="text-lg font-semibold">${msg['billing.context.title']}</h2><div class="mt-4 flex items-center justify-between gap-4"><h3 class="font-medium">${msg['billing.title']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50" ?disabled=${this.qryInspectClientBillingSummaryState === 'loading'} @click=${(event: Event) => this.handleQryInspectClientBillingSummaryClick(event)}>${this.qryInspectClientBillingSummaryState === 'loading' ? msg['loading'] : msg['load']}</button></div>${this.qryInspectClientBillingSummaryState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : data === null ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['billing.empty']}</p>` : html`<div class="mt-4"><h4 class="font-medium">${msg['billing.list.title']}</h4><pre class="mt-2 overflow-x-auto rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-sm">${JSON.stringify(data, null, 2)}</pre></div>`}</section>`;
}
}
