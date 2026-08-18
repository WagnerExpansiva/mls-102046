/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/consultApprovedProjectChangeOrders.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmConsultApprovedProjectChangeOrdersBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'projectContext': m['section.consultApprovedProjectChangeOrders.project-context.title'],
'projectsTitle': m['organism.consultApprovedProjectChangeOrders.qryLocateProject.title'],
'projectsListTitle': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title'],
'projectsEmpty': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty'],
'projectId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label'],
'clientId': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label'],
'name': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label'],
'address': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label'],
'status': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label'],
'authorizedBudget': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label'],
'plannedStartDate': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label'],
'plannedEndDate': m['intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label'],
'changesTitle': m['section.consultApprovedProjectChangeOrders.approved-change-orders.title'],
'changesOrganismTitle': m['organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title'],
'changesListTitle': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title'],
'changesEmpty': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty'],
'changeOrderId': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label'],
'clientRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label'],
'projectRef': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label'],
'description': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label'],
'scopeImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label'],
'scheduleImpact': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label'],
'changeAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label'],
'submittedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label'],
'forwardedAt': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label'],
'changeStatus': m['intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label'],
'billingTitle': m['section.consultApprovedProjectChangeOrders.billing-summary.title'],
'billingOrganismTitle': m['organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title'],
'billingListTitle': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title'],
'billingEmpty': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty'],
'billingClientId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label'],
'billingProjectId': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label'],
'approvedRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label'],
'invoiceRefs': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label'],
'approvedAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label'],
'billableAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label'],
'invoicedAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label'],
'availableAmount': m['intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label'],
'workspaceTitle': m['section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title'],
'impactTitle': m['section.consultApprovedProjectChangeOrders.billingImpact.title'],
'summaryTitle': m['section.consultApprovedProjectChangeOrders.billingImpactSummary.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--consult-approved-project-change-orders-102046')
export class BuildFlowFsmDesktopPage21ConsultApprovedProjectChangeOrdersPage extends BuildFlowFsmConsultApprovedProjectChangeOrdersBase {
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
return html`
<section class="space-y-6 bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0 1px 2px rgba(0,0,0,.08))]">
    <h2 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['projectContext']}</h2>
    ${this.renderProjects()}
  </div>
  <div class="grid gap-6 md:grid-cols-2">
    ${this.renderChanges()}
    ${this.renderBilling()}
  </div>
</section>`;
}
renderProjects() {
const msg = this.msg;
if (this.qryLocateProjectState === 'loading') {
return html`<div class="mt-4 rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-[var(--text-muted,#64748b)]">${msg['projectsTitle']}</div>`;
}
const rows = this.qryLocateProjectData;
return html`<div class="mt-4">
  <h3 class="mb-3 text-base font-semibold">${msg['projectsListTitle']}</h3>
  ${rows.length === 0 ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['projectsEmpty']}</p>` : html`<div class="grid gap-3 md:grid-cols-2">
    ${rows.map((item) => {
      const row = item as unknown as Record<string, unknown>;
      const projectId = String(row['projectId'] ?? '');
      const clientId = String(row['clientId'] ?? '');
      return html`<button type="button" class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 text-left hover:border-[var(--selected-border,#2563eb)]" @click=${() => { if (projectId) this.setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId(projectId); if (clientId) { this.setQryInspectClientBillingSummaryClientBillingSummaryClientId(clientId); void this.loadQryInspectClientBillingSummary(); } }}>
        <div class="font-semibold">${String(row['name'] ?? '')}</div>
        <div class="mt-2 grid grid-cols-2 gap-2 text-sm text-[var(--text-muted,#64748b)]">
          <span>${msg['status']}: ${String(row['status'] ?? '')}</span><span>${msg['authorizedBudget']}: ${this.formatValue(row['authorizedBudget'])}</span>
          <span>${msg['address']}: ${String(row['address'] ?? '')}</span><span>${msg['clientId']}: ${clientId}</span>
        </div>
      </button>`;
    })}
  </div>`}
</div>`;
}
renderChanges() {
const msg = this.msg;
const data = this.qryInspectApprovedChangeOrdersData as unknown as Record<string, unknown> | null;
const rows = this.recordsFrom(data);
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0 1px 2px rgba(0,0,0,.08))]">
  <h2 class="text-lg font-bold">${msg['changesTitle']}</h2>
  ${this.qryInspectApprovedChangeOrdersState === 'loading' ? html`<p class="mt-4 rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['changesOrganismTitle']}</p>` : rows.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['changesEmpty']}</p>` : html`<div class="mt-4 space-y-3">${rows.map((row) => html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4">
    <div class="flex flex-wrap justify-between gap-2"><strong>${String(row['description'] ?? '')}</strong><span class="rounded-full bg-[var(--status-success-bg,#dcfce7)] px-2 py-1 text-sm text-[var(--status-success-text,#166534)]">${String(row['status'] ?? '')}</span></div>
    <dl class="mt-3 grid gap-2 text-sm sm:grid-cols-2"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['changeOrderId']}</dt><dd>${String(row['changeOrderId'] ?? '')}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['changeAmount']}</dt><dd>${this.formatValue(row['changeAmount'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['scopeImpact']}</dt><dd>${String(row['scopeImpact'] ?? '')}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['scheduleImpact']}</dt><dd>${String(row['scheduleImpact'] ?? '')}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['forwardedAt']}</dt><dd>${this.formatValue(row['forwardedForClientApprovalAt'])}</dd></div></dl>
  </article>`)}</div>`}
</section>`;
}
renderBilling() {
const msg = this.msg;
const data = this.qryInspectClientBillingSummaryData as unknown as Record<string, unknown> | null;
const rows = this.recordsFrom(data);
const row = rows[0];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0 1px 2px rgba(0,0,0,.08))]">
  <h2 class="text-lg font-bold">${msg['billingTitle']}</h2>
  ${this.qryInspectClientBillingSummaryState === 'loading' ? html`<p class="mt-4 rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['billingOrganismTitle']}</p>` : row === undefined ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['billingEmpty']}</p>` : html`<div class="mt-4"><h3 class="mb-3 text-base font-semibold">${msg['summaryTitle']}</h3><div class="grid gap-3 sm:grid-cols-3">${[[msg['approvedAmount'], row['approvedChangeOrderAmount']], [msg['billableAmount'], row['billableAmount']], [msg['invoicedAmount'], row['invoicedAmount']], [msg['availableAmount'], row['clientAvailableAmount']]].map(([label, value]) => html`<div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-3"><div class="text-sm text-[var(--text-muted,#64748b)]">${label}</div><div class="mt-1 text-xl font-bold text-[var(--text-strong,#0f172a)]">${this.formatValue(value)}</div></div>`)}</div><dl class="mt-4 space-y-2 text-sm"><div><dt class="text-[var(--text-muted,#64748b)]">${msg['approvedRefs']}</dt><dd>${this.formatValue(row['approvedChangeOrderReferences'])}</dd></div><div><dt class="text-[var(--text-muted,#64748b)]">${msg['invoiceRefs']}</dt><dd>${this.formatValue(row['invoiceReferences'])}</dd></div></dl></div>`}
</section>`;
}
formatValue(value: unknown): string {
if (value === null || value === undefined) return '';
if (Array.isArray(value)) return value.map((entry: unknown) => this.formatValue(entry)).join(', ');
if (typeof value === 'object') return JSON.stringify(value);
return String(value);
}
recordsFrom(data: Record<string, unknown> | null): Record<string, unknown>[] {
if (data === null) return [];
const arrays = Object.values(data).filter((value: unknown): value is unknown[] => Array.isArray(value));
if (arrays.length > 0) return arrays[0].filter((value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null);
return [data];
}
}
