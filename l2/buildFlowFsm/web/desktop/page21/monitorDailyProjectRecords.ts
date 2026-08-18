/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/monitorDailyProjectRecords.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMonitorDailyProjectRecordsBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'projectSelection': m['section.monitorDailyProjectRecords.project-selection.title'],
'projectListTitle': m['intent.monitorDailyProjectRecords.qryLocateProject.list.title'],
'projectListEmpty': m['intent.monitorDailyProjectRecords.qryLocateProject.list.empty'],
'projectId': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.projectId.label'],
'projectName': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label'],
'address': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.address.label'],
'status': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label'],
'plannedStart': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label'],
'plannedEnd': m['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label'],
'execution': m['section.monitorDailyProjectRecords.execution-monitoring.title'],
'overviewTitle': m['organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title'],
'taskSummary': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label'],
'totalHours': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label'],
'materialSummary': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label'],
'laborCost': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label'],
'materialCost': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label'],
'actualCost': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label'],
'budget': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label'],
'variance': m['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label'],
'timeLogsTitle': m['organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title'],
'timeLogsEmpty': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty'],
'timeLogId': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.timeLogId.label'],
'timeStatus': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label'],
'workDate': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label'],
'hoursWorked': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label'],
'hourlyCost': m['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hourlyLaborCost.label'],
'materialsTitle': m['organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title'],
'materialsEmpty': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty'],
'materialId': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.materialUsageId.label'],
'materialStatus': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.status.label'],
'quantity': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label'],
'usageDescription': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label'],
'consumedOn': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label'],
'unitCost': m['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label']
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loadProjects': 'Carregar obras', 'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para acompanhar', 'chooseProject': 'Ver andamento', 'noSelection': 'Escolha uma obra para consultar o andamento.', 'noOverview': 'Ainda não há resumo para esta obra.', 'detailsHint': 'Selecione um registro para consultar seus detalhes.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loadProjects': 'Carregar obras', 'loading': 'Carregando…', 'selectProject': 'Selecione uma obra para acompanhar', 'chooseProject': 'Ver andamento', 'noSelection': 'Escolha uma obra para consultar o andamento.', 'noOverview': 'Ainda não há resumo para esta obra.', 'detailsHint': 'Selecione um registro para consultar seus detalhes.'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loadProjects': 'Load projects', 'loading': 'Loading…', 'selectProject': 'Select a project to monitor', 'chooseProject': 'View progress', 'noSelection': 'Choose a project to inspect its progress.', 'noOverview': 'There is no overview for this project yet.', 'detailsHint': 'Select a record to inspect its details.'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loadProjects': 'Cargar obras', 'loading': 'Cargando…', 'selectProject': 'Seleccione una obra para acompañar', 'chooseProject': 'Ver avance', 'noSelection': 'Elija una obra para consultar el avance.', 'noOverview': 'Aún no hay resumen para esta obra.', 'detailsHint': 'Seleccione un registro para consultar sus detalles.'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--monitor-daily-project-records-102046')
export class BuildFlowFsmDesktopPage21MonitorDailyProjectRecordsPage extends BuildFlowFsmMonitorDailyProjectRecordsBase {
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
${this.renderProjectSelection()}
${this.renderMonitoring()}
</main>`;
}
renderProjectSelection() {
const msg = this.msg;
const projects = this.qryLocateProjectData;
return html`<section class="space-y-4" aria-labelledby="project-selection">
<h2 id="project-selection" class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['projectSelection']}</h2>
${this.qryLocateProjectState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : nothing}
${this.qryLocateProjectState === 'idle' ? html`<button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-4 py-2" @click=${this.handleQryLocateProjectClick}>${msg['loadProjects']}</button>` : nothing}
${projects.length === 0 && this.qryLocateProjectState === 'success' ? html`<p>${msg['projectListEmpty']}</p>` : nothing}
<div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
${projects.map((project) => { const item = project as unknown as Record<string, unknown>; const id = String(item['projectId'] ?? ''); return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-2">
<h3 class="font-semibold">${String(item['name'] ?? '')}</h3><p class="text-sm text-[var(--text-muted,#64748b)]">${String(item['address'] ?? '')}</p>
<div class="flex flex-wrap gap-2 text-sm"><span>${msg['status']}: ${String(item['status'] ?? '')}</span><span>${msg['plannedStart']}: ${String(item['plannedStartDate'] ?? '')}</span><span>${msg['plannedEnd']}: ${String(item['plannedEndDate'] ?? '')}</span></div>
<button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-3 py-2" @click=${() => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(id); this.handleQryInspectProjectExecutionOverviewClick(); }}>${msg['chooseProject']}</button></article>`; })}
</div></section>`;
}
renderMonitoring() {
const msg = this.msg;
const overview = this.qryInspectProjectExecutionOverviewData as unknown as Record<string, unknown> | null;
return html`<section class="space-y-4" aria-labelledby="execution-monitoring"><h2 id="execution-monitoring" class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['execution']}</h2>
${this.qryInspectProjectExecutionOverviewState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
${this.qryInspectProjectExecutionOverviewState !== 'loading' && !overview ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p>` : nothing}
${overview ? this.renderOverview(overview) : nothing}</section>`;
}
renderOverview(overview: Record<string, unknown>) {
const msg = this.msg;
const timeLogs = Array.isArray(overview['timeLogs']) ? overview['timeLogs'] : [];
const materials = Array.isArray(overview['materialUsages']) ? overview['materialUsages'] : [];
return html`<div class="space-y-6"><div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
${[['totalHours','totalHours'],['actualLaborCost','laborCost'],['actualMaterialCost','materialCost'],['costVariance','variance']].map(([field, label]) => html`<div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><div class="text-sm text-[var(--text-muted,#64748b)]">${msg[label as keyof PageMessageType]}</div><strong>${String(overview[field] ?? '—')}</strong></div>`)}
</div><div class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-4 space-y-2"><h3 class="font-semibold">${msg['overviewTitle']}</h3><p>${msg['projectName']}: ${String(overview['projectName'] ?? '')}</p><p>${msg['status']}: ${String(overview['projectStatus'] ?? '')}</p><p>${msg['taskSummary']}: ${String(overview['taskSummary'] ?? '')}</p><p>${msg['materialSummary']}: ${String(overview['materialUsageSummary'] ?? '')}</p><p>${msg['budget']}: ${String(overview['budgetAmount'] ?? '—')} · ${msg['actualCost']}: ${String(overview['actualCost'] ?? '—')}</p></div>
<div class="grid gap-6 lg:grid-cols-2">${this.renderTimeLogs(timeLogs)}${this.renderMaterials(materials)}</div></div>`;
}
renderTimeLogs(records: unknown[]) {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-4 space-y-3"><h3 class="font-semibold">${msg['timeLogsTitle']}</h3>${records.length === 0 ? html`<p>${msg['timeLogsEmpty']}</p>` : records.map((record: unknown) => { const item = record as Record<string, unknown>; const id = String(item['timeLogId'] ?? ''); return html`<button class="block w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left" @click=${() => { this.setQryInspectProjectTimeLogsTimeLogTimeLogId(id); this.handleQryInspectProjectTimeLogsClick(); }}><span class="font-medium">${msg['timeLogId']}: ${id}</span><span class="block text-sm">${msg['workDate']}: ${String(item['workDate'] ?? '')} · ${msg['hoursWorked']}: ${String(item['hoursWorked'] ?? '')} · ${msg['hourlyCost']}: ${String(item['hourlyLaborCost'] ?? '')}</span></button>`; })}</section>`;
}
renderMaterials(records: unknown[]) {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-4 space-y-3"><h3 class="font-semibold">${msg['materialsTitle']}</h3>${records.length === 0 ? html`<p>${msg['materialsEmpty']}</p>` : records.map((record: unknown) => { const item = record as Record<string, unknown>; const id = String(item['materialUsageId'] ?? ''); return html`<button class="block w-full rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left" @click=${() => { this.setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId(id); this.handleQryInspectProjectMaterialUsagesClick(); }}><span class="font-medium">${msg['materialId']}: ${id}</span><span class="block text-sm">${msg['usageDescription']}: ${String(item['usageDescription'] ?? '')} · ${msg['quantity']}: ${String(item['quantity'] ?? '')} · ${msg['unitCost']}: ${String(item['unitCostBasis'] ?? '')}</span></button>`; })}</section>`;
}
}