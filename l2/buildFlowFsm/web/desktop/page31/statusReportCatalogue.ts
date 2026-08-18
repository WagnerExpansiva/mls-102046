/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/statusReportCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.js';
import type { QryListStatusReportOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'recordList.title': m['section.statusReportCatalogue.recordList.title'],
'reportList.title': m['organism.statusReportCatalogue.qryListStatusReport.title'],
'reportList.listTitle': m['intent.statusReportCatalogue.qryListStatusReport.list.title'],
'reportList.empty': m['intent.statusReportCatalogue.qryListStatusReport.list.empty'],
'reportList.id': m['intent.statusReportCatalogue.qryListStatusReport.list.column.statusReportId.label'],
'reportList.project': m['intent.statusReportCatalogue.qryListStatusReport.list.column.projectId.label'],
'reportList.status': m['intent.statusReportCatalogue.qryListStatusReport.list.column.status.label'],
'reportList.titleField': m['intent.statusReportCatalogue.qryListStatusReport.list.column.title.label'],
'reportList.content': m['intent.statusReportCatalogue.qryListStatusReport.list.column.content.label'],
'reportList.risks': m['intent.statusReportCatalogue.qryListStatusReport.list.column.communicatedRisks.label'],
'reportList.generatedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedAt.label'],
'reportList.generatedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedByUserId.label'],
'reportList.publishedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedAt.label'],
'reportList.publishedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedByUserId.label'],
'reportList.withdrawnAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.withdrawnAt.label'],
'delete.title': m['organism.statusReportCatalogue.cmdDeleteStatusReport.title'],
'delete.formTitle': m['intent.statusReportCatalogue.cmdDeleteStatusReport.form.title'],
'delete.action': m['intent.statusReportCatalogue.cmdDeleteStatusReport.form.action.cmdDeleteStatusReport'],
'recordForm.title': m['section.statusReportCatalogue.recordForm.title'],
'projectPicker.title': m['organism.statusReportCatalogue.qryProjectPicker.title'],
'projectPicker.listTitle': m['intent.statusReportCatalogue.qryProjectPicker.list.title'],
'projectPicker.empty': m['intent.statusReportCatalogue.qryProjectPicker.list.empty'],
'projectPicker.id': m['intent.statusReportCatalogue.qryProjectPicker.list.column.projectId.label'],
'projectPicker.client': m['intent.statusReportCatalogue.qryProjectPicker.list.column.clientId.label'],
'projectPicker.name': m['intent.statusReportCatalogue.qryProjectPicker.list.column.name.label'],
'projectPicker.address': m['intent.statusReportCatalogue.qryProjectPicker.list.column.address.label'],
'projectPicker.status': m['intent.statusReportCatalogue.qryProjectPicker.list.column.status.label'],
'projectPicker.budget': m['intent.statusReportCatalogue.qryProjectPicker.list.column.authorizedBudget.label'],
'projectPicker.start': m['intent.statusReportCatalogue.qryProjectPicker.list.column.plannedStartDate.label'],
'projectPicker.end': m['intent.statusReportCatalogue.qryProjectPicker.list.column.plannedEndDate.label'],
'create.title': m['organism.statusReportCatalogue.cmdCreateStatusReport.title'],
'create.formTitle': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.title'],
'create.action': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.action.cmdCreateStatusReport'],
'create.titleField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.title.label'],
'create.content': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.content.label'],
'create.risks': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.communicatedRisks.label'],
'create.generatedBy': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.generatedByUserId.label'],
'create.publishedBy': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.publishedByUserId.label'],
'update.title': m['organism.statusReportCatalogue.cmdUpdateStatusReport.title'],
'update.formTitle': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.title'],
'update.action': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.action.cmdUpdateStatusReport'],
'update.status': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.status.label'],
'update.titleField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.title.label'],
'update.content': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.content.label'],
'update.risks': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.communicatedRisks.label'],
'update.generatedAt': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedAt.label'],
'update.generatedBy': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedByUserId.label'],
'update.publishedAt': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedAt.label'],
'update.publishedBy': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedByUserId.label'],
'update.withdrawnAt': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.withdrawnAt.label'],
'create.success': m['action.cmdCreateStatusReport.success'],
'create.error': m['action.cmdCreateStatusReport.error'],
'update.success': m['action.cmdUpdateStatusReport.success'],
'update.error': m['action.cmdUpdateStatusReport.error'],
'delete.success': m['action.cmdDeleteStatusReport.success'],
'delete.error': m['action.cmdDeleteStatusReport.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'chooseProject': 'Selecione a obra', 'noSelection': 'Selecione um relatório para ver os detalhes.', 'context': 'Contexto da obra', 'createTab': 'Novo relatório', 'updateTab': 'Dados do relatório', 'required': 'Obrigatório', 'systemManaged': 'Gerenciado pelo sistema', 'deleteConfirm': 'Confirma a exclusão do relatório “{title}”?',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'chooseProject': 'Selecione a obra', 'noSelection': 'Selecione um relatório para ver os detalhes.', 'context': 'Contexto da obra', 'createTab': 'Novo relatório', 'updateTab': 'Dados do relatório', 'required': 'Obrigatório', 'systemManaged': 'Gerenciado pelo sistema', 'deleteConfirm': 'Confirma a exclusão do relatório “{title}”?',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'chooseProject': 'Select the project', 'noSelection': 'Select a report to view its details.', 'context': 'Project context', 'createTab': 'New report', 'updateTab': 'Report details', 'required': 'Required', 'systemManaged': 'System managed', 'deleteConfirm': 'Delete the report “{title}”?',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'chooseProject': 'Seleccione la obra', 'noSelection': 'Seleccione un informe para ver los detalles.', 'context': 'Contexto de la obra', 'createTab': 'Nuevo informe', 'updateTab': 'Datos del informe', 'required': 'Obligatorio', 'systemManaged': 'Gestionado por el sistema', 'deleteConfirm': '¿Confirma la eliminación del informe “{title}”?',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--status-report-catalogue-102046')
export class BuildFlowFsmDesktopPage31StatusReportCataloguePage extends BuildFlowFsmStatusReportCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#f8fafc)] p-6 text-[var(--text-default,#0f172a)]">
${this.renderReportList()} ${this.renderWorkspace()}
</main>`;
}
renderReportList() {
const msg = this.msg;
const rows: QryListStatusReportOutput[] = this.qryListStatusReportData ?? [];
return html`<section class="mb-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_3px_rgba(0,0,0,.08))]" aria-labelledby="report-list-title">
<h2 id="report-list-title" class="mb-4 text-[var(--text-strong,#0f172a)] font-semibold">${msg['reportList.title']}</h2>
${this.qryListStatusReportState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['reportList.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${[msg['reportList.id'],msg['reportList.project'],msg['reportList.status'],msg['reportList.titleField'],msg['reportList.generatedAt']].map((label: string) => html`<th class="px-3 py-2 font-semibold">${label}</th>`)}</tr></thead><tbody>${rows.map((row: QryListStatusReportOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f1f5f9)]" @click=${() => this.selectReport(row)}><td class="px-3 py-3">${row.statusReportId}</td><td class="px-3 py-3">${row.projectId}</td><td class="px-3 py-3"><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-[var(--status-info-text,#1e40af)]">${row.status}</span></td><td class="px-3 py-3">${row.title}</td><td class="px-3 py-3">${row.generatedAt}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
selectReport(row: QryListStatusReportOutput) {
this.setCmdUpdateStatusReportStatusReportId(row.statusReportId); this.setCmdUpdateStatusReportProjectId(row.projectId); this.setCmdUpdateStatusReportStatus(row.status); this.setCmdUpdateStatusReportTitle(row.title); this.setCmdUpdateStatusReportContent(row.content); this.setCmdUpdateStatusReportCommunicatedRisks(row.communicatedRisks); this.setCmdUpdateStatusReportGeneratedAt(row.generatedAt); this.setCmdUpdateStatusReportGeneratedByUserId(row.generatedByUserId); this.setCmdUpdateStatusReportPublishedAt(row.publishedAt); this.setCmdUpdateStatusReportPublishedByUserId(row.publishedByUserId); this.setCmdUpdateStatusReportWithdrawnAt(row.withdrawnAt); this.setCmdDeleteStatusReportStatusReportId(row.statusReportId);
}
renderWorkspace() {
const msg = this.msg;
const selected = this.qryListStatusReportData.find((row: QryListStatusReportOutput) => row.statusReportId === this.cmdUpdateStatusReportStatusReportId);
return html`<section class="grid gap-6 lg:grid-cols-2" aria-label="${msg['recordForm.title']}">
${this.renderCreatePanel()} ${selected ? this.renderUpdatePanel(selected) : html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><p class="text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p></article>`}
</section>`;
}
renderCreatePanel() {
const msg = this.msg; const projects: QryProjectPickerOutput[] = this.qryProjectPickerData ?? [];
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><div class="mb-5 flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['createTab']}</h2><span class="text-xs text-[var(--text-muted,#64748b)]">${msg['context']}</span></div><label class="mb-4 block text-sm font-medium">${msg['projectPicker.name']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportProjectExecutionOverviewProjectId} @change=${this.handleCmdCreateStatusReportProjectExecutionOverviewProjectIdChange}><option value="">${msg['chooseProject']}</option>${projects.map((project: QryProjectPickerOutput) => html`<option value=${project.projectId}>${project.name}</option>`)}</select></label><p class="mb-4 text-xs text-[var(--text-muted,#64748b)]">${msg['projectPicker.title']}: ${this.cmdCreateStatusReportProjectProjectId || '—'}</p>${this.renderCreateFields()}${this.renderCreateFeedback()}<button class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateStatusReportState === 'loading'} @click=${this.handleCmdCreateStatusReportClick}>${this.cmdCreateStatusReportState === 'loading' ? msg['loading'] : msg['create.action']}</button></article>`;
}
renderCreateFields() {
const msg = this.msg;
return html`<div class="space-y-4"><label class="block text-sm font-medium">${msg['create.titleField']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportTitle} @input=${this.handleCmdCreateStatusReportTitleChange}></label><label class="block text-sm font-medium">${msg['create.content']}<textarea required rows="5" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportContent} @input=${this.handleCmdCreateStatusReportContentChange}></textarea></label><label class="block text-sm font-medium">${msg['create.risks']}<textarea rows="3" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportCommunicatedRisks} @input=${this.handleCmdCreateStatusReportCommunicatedRisksChange}></textarea></label><label class="block text-sm font-medium">${msg['create.generatedBy']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportGeneratedByUserId} @input=${this.handleCmdCreateStatusReportGeneratedByUserIdChange}></label><label class="block text-sm font-medium">${msg['create.publishedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportPublishedByUserId} @input=${this.handleCmdCreateStatusReportPublishedByUserIdChange}></label></div>`;
}
renderCreateFeedback() { const msg = this.msg; return this.cmdCreateStatusReportState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateStatusReportState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateStatusReportError || msg['create.error']}</p>` : nothing; }
renderUpdatePanel(selected: QryListStatusReportOutput) {
const msg = this.msg;
return html`<article class="rounded-lg border border-[var(--selected-border,#2563eb)] bg-[var(--surface-bg,#ffffff)] p-6"><div class="mb-5 flex items-start justify-between"><div><h2 class="text-lg font-semibold">${msg['update.formTitle']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${selected.title} · ${selected.projectId}</p></div><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-sm text-[var(--status-info-text,#1e40af)]">${this.cmdUpdateStatusReportStatus}</span></div><div class="space-y-4"><p class="text-xs text-[var(--text-muted,#64748b)]">${msg['update.status']}: ${this.cmdUpdateStatusReportStatus} · ${msg['systemManaged']}</p><label class="block text-sm font-medium">${msg['update.titleField']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportTitle} @input=${this.handleCmdUpdateStatusReportTitleChange}></label><label class="block text-sm font-medium">${msg['update.content']}<textarea required rows="6" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportContent} @input=${this.handleCmdUpdateStatusReportContentChange}></textarea></label><label class="block text-sm font-medium">${msg['update.risks']}<textarea rows="3" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportCommunicatedRisks} @input=${this.handleCmdUpdateStatusReportCommunicatedRisksChange}></textarea></label><label class="block text-sm font-medium">${msg['update.generatedBy']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportGeneratedByUserId} @input=${this.handleCmdUpdateStatusReportGeneratedByUserIdChange}></label><label class="block text-sm font-medium">${msg['update.publishedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportPublishedByUserId} @input=${this.handleCmdUpdateStatusReportPublishedByUserIdChange}></label></div>${this.renderUpdateFeedback()}<div class="mt-5 flex flex-wrap gap-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateStatusReportState === 'loading'} @click=${this.handleCmdUpdateStatusReportClick}>${this.cmdUpdateStatusReportState === 'loading' ? msg['loading'] : msg['update.action']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteStatusReportState === 'loading'} @click=${(event: Event) => this.confirmDelete(event, selected)}>${this.cmdDeleteStatusReportState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div></article>`;
}
renderUpdateFeedback() { const msg = this.msg; return this.cmdUpdateStatusReportState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateStatusReportState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateStatusReportError || msg['update.error']}</p>` : this.cmdDeleteStatusReportState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteStatusReportState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteStatusReportError || msg['delete.error']}</p>` : nothing; }
confirmDelete(event: Event, row: QryListStatusReportOutput) { event.stopPropagation(); const msg = this.msg; const template = msg['deleteConfirm'].replace('{title}', row.title); if (window.confirm(template)) this.handleCmdDeleteStatusReportClick(event); }
}