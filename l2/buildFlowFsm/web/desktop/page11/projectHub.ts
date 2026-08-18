/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectHub.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectHubBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectHub.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'project.title': m['section.projectHub.collection.title'],
'project.list.title': m['intent.projectHub.qryListProject.list.title'],
'project.empty': m['intent.projectHub.qryListProject.list.empty'],
'project.id': m['intent.projectHub.qryListProject.list.column.projectId.label'],
'project.client': m['intent.projectHub.qryListProject.list.column.clientId.label'],
'project.name': m['intent.projectHub.qryListProject.list.column.name.label'],
'project.address': m['intent.projectHub.qryListProject.list.column.address.label'],
'project.status': m['intent.projectHub.qryListProject.list.column.status.label'],
'project.budget': m['intent.projectHub.qryListProject.list.column.authorizedBudget.label'],
'record.title': m['section.projectHub.record.title'],
'billing.title': m['organism.projectHub.qryClientBillingSummaryView.title'],
'dashboard.title': m['organism.projectHub.qryProjectDashboardView.title'],
'execution.title': m['organism.projectHub.qryProjectExecutionOverviewView.title'],
'timeline.title': m['organism.projectHub.qryProjectTimelineView.title'],
'risk.title': m['organism.projectHub.qryScheduleRiskAssessmentView.title'],
'change.title': m['organism.projectHub.qryListChangeOrder.title'],
'invoice.title': m['organism.projectHub.qryListInvoice.title'],
'material.title': m['organism.projectHub.qryListMaterialUsage.title'],
'coordination.title': m['organism.projectHub.qryListProjectCoordinationAssignment.title'],
'report.title': m['organism.projectHub.qryListStatusReport.title'],
'task.title': m['organism.projectHub.qryListWorkTask.title'],
'portfolio.title': m['section.projectHub.portfolio.title'],
'selected.title': m['section.projectHub.selected-project.title'],
'operational.title': m['section.projectHub.operational-records.title']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'refresh': 'Atualizar', 'noData': 'Nenhum dado disponível', 'selectProject': 'Selecione uma obra', 'details': 'Detalhes disponíveis'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'refresh': 'Atualizar', 'noData': 'Nenhum dado disponível', 'selectProject': 'Selecione uma obra', 'details': 'Detalhes disponíveis'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'refresh': 'Refresh', 'noData': 'No data available', 'selectProject': 'Select a project', 'details': 'Available details'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'refresh': 'Actualizar', 'noData': 'No hay datos disponibles', 'selectProject': 'Seleccione una obra', 'details': 'Detalles disponibles'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
const valueOf = (value: unknown, field: string): unknown => {
if (typeof value !== 'object' || value === null) return undefined;
for (const [key, item] of Object.entries(value)) if (key === field) return item;
return undefined;
};
const displayValue = (value: unknown): string => {
if (value === null || value === undefined) return '';
if (Array.isArray(value)) return value.map((entry: unknown) => displayValue(entry)).join(', ');
if (typeof value === 'object') return Object.values(value).map((entry: unknown) => displayValue(entry)).join(' · ');
return String(value);
};
type Column = { label: string; field: string };
const renderRows = (rows: ReadonlyArray<unknown>, columns: ReadonlyArray<Column>, empty: string, loading: boolean) => html`
${loading ? html`<p class="text-[var(--text-muted,#64748b)]">${empty}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${empty}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-default,#cbd5e1)]">${columns.map((column: Column) => html`<th class="px-3 py-2 text-left font-semibold text-[var(--text-strong,#1e293b)]">${column.label}</th>`)}</tr></thead><tbody>${rows.map((row: unknown) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${columns.map((column: Column) => html`<td class="px-3 py-2 text-[var(--text-default,#0f172a)]">${displayValue(valueOf(row, column.field))}</td>`)}</tr>`)}</tbody></table></div>`}
`;
@customElement('build-flow-fsm--web--desktop--page11--project-hub-102046')
export class BuildFlowFsmDesktopPage11ProjectHubPage extends BuildFlowFsmProjectHubBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6"><h1 class="text-2xl font-bold text-[var(--text-strong,#1e293b)]">${msg['project.title']}</h1>${this.renderProjects()}${this.renderDashboard()}${this.renderSelectedProject()}${this.renderOperationalRecords()}</div></main>`;
}
renderProjects() {
const msg = this.msg;
const columns: Column[] = [{ label: msg['project.id'], field: 'projectId' }, { label: msg['project.client'], field: 'clientId' }, { label: msg['project.name'], field: 'name' }, { label: msg['project.address'], field: 'address' }, { label: msg['project.status'], field: 'status' }, { label: msg['project.budget'], field: 'authorizedBudget' }];
const rows = this.qryListProjectData ?? [];
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['project.list.title']}</h2><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.qryListProjectState === 'loading'} @click=${(event: Event) => this.handleQryListProjectClick(event)}>${this.qryListProjectState === 'loading' ? msg['loading'] : msg['refresh']}</button></div>${renderRows(rows, columns, msg['project.empty'], this.qryListProjectState === 'loading')}</section>`;
}
renderDashboard() {
const msg = this.msg;
const data = this.qryProjectDashboardViewData;
const entries = data === null ? [] : Object.entries(data);
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-3"><h2 class="text-lg font-semibold">${msg['dashboard.title']}</h2>${this.qryProjectDashboardViewState === 'loading' ? html`<p>${msg['loading']}</p>` : entries.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['noData']}</p>` : html`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${entries.map((entry: [string, unknown]) => html`<div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3"><p class="text-xl font-bold">${displayValue(entry[1])}</p></div>`)}</div>`}</section>`;
}
renderSelectedProject() {
const msg = this.msg;
const projects = this.qryListProjectData ?? [];
const selected = this.qryClientBillingSummaryViewClientBillingSummaryClientId;
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['selected.title']}</h2><div class="flex flex-wrap gap-3 items-end"><label class="space-y-1"><span class="block text-sm text-[var(--text-muted,#64748b)]">${msg['selectProject']}</span><select class="rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${selected ?? ''} @change=${(event: Event) => this.handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange(event)}><option value="">${msg['selectProject']}</option>${projects.map((project: unknown) => { const id = displayValue(valueOf(project, 'projectId')); const name = displayValue(valueOf(project, 'name')); return html`<option value=${id}>${name || id}</option>`; })}</select></label><button class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" ?disabled=${!selected || this.qryClientBillingSummaryViewState === 'loading'} @click=${(event: Event) => this.handleQryClientBillingSummaryViewClick(event)}>${this.qryClientBillingSummaryViewState === 'loading' ? msg['loading'] : msg['billing.title']}</button></div>${this.renderObject(this.qryClientBillingSummaryViewData, msg['billing.title'])}</section>`;
}
renderObject(data: object | null, label: string) {
const msg = this.msg;
if (data === null) return nothing;
const entries = Object.entries(data);
return html`<div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3"><p class="text-sm font-semibold">${label}</p>${entries.length === 0 ? html`<p>${msg['noData']}</p>` : html`<div class="mt-2 grid gap-2 sm:grid-cols-2">${entries.map((entry: [string, unknown]) => html`<div class="rounded bg-[var(--surface-bg,#ffffff)] p-2"><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['details']}</span><div class="font-medium">${displayValue(entry[1])}</div></div>`)}</div>`}</div>`;
}
renderOperationalRecords() {
const msg = this.msg;
return html`<section class="rounded-lg bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-6"><h2 class="text-lg font-semibold">${msg['operational.title']}</h2>${this.renderCollection('change', msg['change.title'], this.qryListChangeOrderData, this.qryListChangeOrderState)}${this.renderCollection('invoice', msg['invoice.title'], this.qryListInvoiceData, this.qryListInvoiceState)}${this.renderCollection('material', msg['material.title'], this.qryListMaterialUsageData, this.qryListMaterialUsageState)}${this.renderCollection('coordination', msg['coordination.title'], this.qryListProjectCoordinationAssignmentData, this.qryListProjectCoordinationAssignmentState)}${this.renderCollection('report', msg['report.title'], this.qryListStatusReportData, this.qryListStatusReportState)}${this.renderCollection('task', msg['task.title'], this.qryListWorkTaskData, this.qryListWorkTaskState)}</section>`;
}
renderCollection(kind: string, title: string, rows: ReadonlyArray<unknown>, state: 'idle' | 'loading' | 'success' | 'error') {
const msg = this.msg;
const fieldSets: { [key: string]: ReadonlyArray<string> } = { change: ['changeOrderId', 'projectRef', 'description', 'changeAmount', 'status'], invoice: ['invoiceId', 'projectId', 'amount', 'status'], material: ['materialUsageId', 'projectId', 'quantity', 'usageDescription'], coordination: ['projectCoordinationAssignmentId', 'projectId', 'fieldCoordinatorId', 'status'], report: ['statusReportId', 'projectId', 'title', 'status'], task: ['workTaskId', 'projectId', 'description', 'dueDate', 'status'] };
const labels: { [key: string]: string } = { changeOrderId: 'project.id', projectRef: 'project.name', description: 'project.address', changeAmount: 'project.budget', invoiceId: 'project.id', projectId: 'project.id', amount: 'project.budget', materialUsageId: 'project.id', quantity: 'project.budget', usageDescription: 'project.address', projectCoordinationAssignmentId: 'project.id', fieldCoordinatorId: 'project.client', statusReportId: 'project.id', title: 'project.name', workTaskId: 'project.id', dueDate: 'project.address' };
const columns = (fieldSets[kind] ?? []).map((field: string) => ({ field, label: msg[labels[field] as keyof PageMessageType] }));
return html`<div class="space-y-2"><h3 class="font-semibold">${title}</h3>${renderRows(rows, columns, msg['noData'], state === 'loading')}</div>`;
}
}
