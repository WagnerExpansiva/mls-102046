/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/consultApprovedProjectChangeOrders.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultApprovedProjectChangeOrdersBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.js';
import type { QryLocateProjectOutput, QryInspectApprovedChangeOrdersOutput, QryInspectClientBillingSummaryOutput } from '/_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'context.title': m['section.consultApprovedProjectChangeOrders.project-context.title'],
'projects.title': m['organism.consultApprovedProjectChangeOrders.qryLocateProject.title'],
'projects.listTitle': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title'],
'projects.empty': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty'],
'project.projectId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label'],
'project.clientId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label'],
'project.address': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label'],
'project.status': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label'],
'project.authorizedBudget': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label'],
'project.plannedStartDate': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label'],
'project.plannedEndDate': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label'],
'orders.section': m['section.consultApprovedProjectChangeOrders.approved-change-orders.title'],
'orders.title': m['organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title'],
'orders.listTitle': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title'],
'orders.empty': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty'],
'order.changeOrderId': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label'],
'order.clientRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label'],
'order.projectRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label'],
'order.description': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label'],
'order.scopeImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label'],
'order.scheduleImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label'],
'order.changeAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label'],
'order.submittedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label'],
'order.forwardedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label'],
'order.status': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label'],
'billing.section': m['section.consultApprovedProjectChangeOrders.billing-summary.title'],
'billing.title': m['organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title'],
'billing.listTitle': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title'],
'billing.empty': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty'],
'billing.clientId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label'],
'billing.projectId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label'],
'billing.approvedRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'billing.invoiceRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'billing.approved': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'billing.billable': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'billing.invoiced': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'billing.available': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
'workspace.title': m['section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title'],
'impact.title': m['section.consultApprovedProjectChangeOrders.billingImpact.title'],
'financial.title': m['section.consultApprovedProjectChangeOrders.billingImpactSummary.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'chooseProject': 'Selecionar obra', 'chooseOrder': 'Consultar alteração', 'chooseClient': 'Consultar faturamento', 'loading': 'Carregando…', 'refresh': 'Atualizar'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'chooseProject': 'Selecionar obra', 'chooseOrder': 'Consultar alteração', 'chooseClient': 'Consultar faturamento', 'loading': 'Carregando…', 'refresh': 'Atualizar'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'chooseProject': 'Select project', 'chooseOrder': 'Inspect change', 'chooseClient': 'View billing', 'loading': 'Loading…', 'refresh': 'Refresh'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'chooseProject': 'Seleccionar obra', 'chooseOrder': 'Consultar cambio', 'chooseClient': 'Consultar facturación', 'loading': 'Cargando…', 'refresh': 'Actualizar'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--consult-approved-project-change-orders-102046')
export class BuildFlowFsmDesktopPage31ConsultApprovedProjectChangeOrdersPage extends BuildFlowFsmConsultApprovedProjectChangeOrdersBase {
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
${this.renderProjects(msg)}
${this.renderOrders(msg)}
${this.renderBilling(msg)}
</main>`;
}
renderProjects(msg: PageMessageType) {
const projects: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
if (this.qryLocateProjectState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><p>${msg['loading']}</p></section>`;
return html`<section class="space-y-4"><h2 class="text-xl font-semibold">${msg['context.title']}</h2><div class="rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-default,#e2e8f0)] p-5 space-y-4"><h3 class="font-semibold">${msg['projects.title']}</h3>${projects.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : html`<div class="grid gap-3 md:grid-cols-2">${projects.map((project: QryLocateProjectOutput) => { const row = project as unknown as Record<string, unknown>; const id = String(row['projectId'] ?? ''); const clientId = String(row['clientId'] ?? ''); return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 space-y-2"><div><strong>${String(row['name'] ?? '')}</strong><p class="text-sm text-[var(--text-muted,#64748b)]">${String(row['address'] ?? '')}</p></div><dl class="grid grid-cols-2 gap-2 text-sm"><dt>${msg['project.status']}</dt><dd>${String(row['status'] ?? '')}</dd><dt>${msg['project.authorizedBudget']}</dt><dd>${String(row['authorizedBudget'] ?? '')}</dd><dt>${msg['project.plannedStartDate']}</dt><dd>${String(row['plannedStartDate'] ?? '')}</dd><dt>${msg['project.plannedEndDate']}</dt><dd>${String(row['plannedEndDate'] ?? '')}</dd></dl><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" @click=${() => { this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(clientId); this.handleQryInspectClientBillingSummaryClick(); }}>${msg['chooseProject']}: ${id}</button></article>`; })}</div>`}</div></section>`;
}
renderOrders(msg: PageMessageType) {
const data = this.qryInspectApprovedChangeOrdersData;
if (this.qryInspectApprovedChangeOrdersState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><p>${msg['loading']}</p></section>`;
if (data === null) return nothing;
const row = data as unknown as Record<string, unknown>;
const orders = Array.isArray(row['approvedChangeOrders']) ? row['approvedChangeOrders'] : [];
return html`<section class="space-y-4"><h2 class="text-xl font-semibold">${msg['orders.section']}</h2><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><h3 class="font-semibold mb-4">${msg['orders.title']}</h3>${orders.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>` : html`<div class="space-y-3">${orders.map((value: unknown) => { const order = value as Record<string, unknown>; const id = String(order['changeOrderId'] ?? ''); return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4"><dl class="grid gap-2 md:grid-cols-2"><dt>${msg['order.changeOrderId']}</dt><dd>${id}</dd><dt>${msg['order.description']}</dt><dd>${String(order['description'] ?? '')}</dd><dt>${msg['order.scopeImpact']}</dt><dd>${String(order['scopeImpact'] ?? '')}</dd><dt>${msg['order.scheduleImpact']}</dt><dd>${String(order['scheduleImpact'] ?? '')}</dd><dt>${msg['order.changeAmount']}</dt><dd>${String(order['changeAmount'] ?? '')}</dd><dt>${msg['order.status']}</dt><dd>${String(order['status'] ?? '')}</dd></dl><button class="mt-3 rounded-md bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-4 py-2" @click=${() => { this.setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId(id); this.handleQryInspectApprovedChangeOrdersClick(); }}>${msg['chooseOrder']}</button></article>`; })}</div>`}</div></section>`;
}
renderBilling(msg: PageMessageType) {
const data = this.qryInspectClientBillingSummaryData;
if (this.qryInspectClientBillingSummaryState === 'loading') return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><p>${msg['loading']}</p></section>`;
if (data === null) return nothing;
const row = data as unknown as Record<string, unknown>;
const entries: Array<[string, unknown]> = Object.entries(row);
return html`<section class="space-y-4"><h2 class="text-xl font-semibold">${msg['billing.section']}</h2><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5"><h3 class="font-semibold mb-4">${msg['billing.title']}</h3>${entries.length === 0 ? html`<p>${msg['billing.empty']}</p>` : html`<dl class="grid gap-3 md:grid-cols-2">${entries.map(([key, value]: [string, unknown]) => html`<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${key === 'approvedChangeOrderAmount' ? msg['billing.approved'] : key === 'billableAmount' ? msg['billing.billable'] : key === 'invoicedAmount' ? msg['billing.invoiced'] : key === 'clientAvailableAmount' ? msg['billing.available'] : key === 'clientId' ? msg['billing.clientId'] : key === 'projectId' ? msg['billing.projectId'] : key === 'approvedChangeOrderReferences' ? msg['billing.approvedRefs'] : key === 'invoiceReferences' ? msg['billing.invoiceRefs'] : ''}</dt><dd>${Array.isArray(value) ? value.join(', ') : String(value ?? '')}</dd></div>`)}</dl>`}</div></section>`;
}
}