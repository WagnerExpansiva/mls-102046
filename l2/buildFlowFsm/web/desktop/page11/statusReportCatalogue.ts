/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/statusReportCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'catalogue.title': m['section.statusReportCatalogue.recordList.title'],
'list.title': m['intent.statusReportCatalogue.qryListStatusReport.list.title'],
'list.empty': m['intent.statusReportCatalogue.qryListStatusReport.list.empty'],
'list.id': m['intent.statusReportCatalogue.qryListStatusReport.list.column.statusReportId.label'],
'list.project': m['intent.statusReportCatalogue.qryListStatusReport.list.column.projectId.label'],
'list.status': m['intent.statusReportCatalogue.qryListStatusReport.list.column.status.label'],
'list.reportTitle': m['intent.statusReportCatalogue.qryListStatusReport.list.column.title.label'],
'list.content': m['intent.statusReportCatalogue.qryListStatusReport.list.column.content.label'],
'list.risks': m['intent.statusReportCatalogue.qryListStatusReport.list.column.communicatedRisks.label'],
'list.generatedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedAt.label'],
'list.generatedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedByUserId.label'],
'list.publishedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedAt.label'],
'list.publishedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedByUserId.label'],
'list.withdrawnAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.withdrawnAt.label'],
'projects.title': m['intent.statusReportCatalogue.qryProjectPicker.list.title'],
'projects.empty': m['intent.statusReportCatalogue.qryProjectPicker.list.empty'],
'projects.id': m['intent.statusReportCatalogue.qryProjectPicker.list.column.projectId.label'],
'projects.name': m['intent.statusReportCatalogue.qryProjectPicker.list.column.name.label'],
'create.title': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.title'],
'create.action': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.action.cmdCreateStatusReport'],
'create.titleField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.title.label'],
'create.content': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.content.label'],
'create.risks': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.communicatedRisks.label'],
'create.generatedBy': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.generatedByUserId.label'],
'create.publishedBy': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.publishedByUserId.label'],
'update.title': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.title'],
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
'delete.title': m['intent.statusReportCatalogue.cmdDeleteStatusReport.form.title'],
'delete.action': m['intent.statusReportCatalogue.cmdDeleteStatusReport.form.action.cmdDeleteStatusReport'],
'create.success': m['action.cmdCreateStatusReport.success'],
'create.error': m['action.cmdCreateStatusReport.error'],
'update.success': m['action.cmdUpdateStatusReport.success'],
'update.error': m['action.cmdUpdateStatusReport.error'],
'delete.success': m['action.cmdDeleteStatusReport.success'],
'delete.error': m['action.cmdDeleteStatusReport.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…', 'refresh': 'Atualizar', 'selectRecord': 'Selecione um registro', 'selectProject': 'Selecione uma obra',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…', 'refresh': 'Atualizar', 'selectRecord': 'Selecione um registro', 'selectProject': 'Selecione uma obra',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…', 'refresh': 'Refresh', 'selectRecord': 'Select a record', 'selectProject': 'Select a project',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…', 'refresh': 'Actualizar', 'selectRecord': 'Seleccione un registro', 'selectProject': 'Seleccione una obra',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
const field = (value: unknown, key: string): string => {
if (typeof value !== 'object' || value === null || !(key in value)) return '';
const result = (value as Record<string, unknown>)[key];
if (result === null || result === undefined) return '';
return typeof result === 'string' ? result : String(result);
};
@customElement('build-flow-fsm--web--desktop--page11--status-report-catalogue-102046')
export class BuildFlowFsmDesktopPage11StatusReportCataloguePage extends BuildFlowFsmStatusReportCatalogueBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; }
return this.#msgCache;
}
render() {
const msg = this.msg;
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6">${this.renderList()}${this.renderCreate()}${this.renderUpdate()}${this.renderDelete()}${this.renderProjects()}${this.renderFeedback()}</div></main>`;
}
renderList() {
const msg = this.msg;
const rows = this.qryListStatusReportData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><div class="flex items-center justify-between"><h1 class="text-xl font-semibold">${msg['catalogue.title']}</h1><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryListStatusReportClick}>${this.qryListStatusReportState === 'loading' ? msg['loading'] : msg['refresh']}</button></div>${this.qryListStatusReportState === 'loading' ? html`<p class="py-6">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="py-6 text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="min-w-full text-sm"><thead><tr>${[['list.id','statusReportId'],['list.project','projectId'],['list.status','status'],['list.reportTitle','title'],['list.content','content'],['list.risks','communicatedRisks'],['list.generatedAt','generatedAt'],['list.generatedBy','generatedByUserId'],['list.publishedAt','publishedAt'],['list.publishedBy','publishedByUserId'],['list.withdrawnAt','withdrawnAt']].map(([label]) => html`<th class="border-b border-[var(--border-subtle,#e2e8f0)] px-3 py-2 text-left">${msg[label as keyof PageMessageType]}</th>`)}</tr></thead><tbody>${rows.map((row: unknown) => html`<tr>${['statusReportId','projectId','status','title','content','communicatedRisks','generatedAt','generatedByUserId','publishedAt','publishedByUserId','withdrawnAt'].map((key: string) => html`<td class="border-b border-[var(--border-subtle,#e2e8f0)] px-3 py-2">${field(row, key)}</td>`)}</tr>`)}</tbody></table></div>`}</section>`;
}
renderCreate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><form class="mt-4 grid gap-4" @submit=${this.handleCmdCreateStatusReportClick}><label>${msg['create.titleField']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateStatusReportTitle} @input=${this.handleCmdCreateStatusReportTitleChange}></label><label>${msg['create.content']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required @input=${this.handleCmdCreateStatusReportContentChange}>${this.cmdCreateStatusReportContent}</textarea></label><label>${msg['create.risks']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdCreateStatusReportCommunicatedRisksChange}>${this.cmdCreateStatusReportCommunicatedRisks}</textarea></label><label>${msg['create.generatedBy']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdCreateStatusReportGeneratedByUserId} @input=${this.handleCmdCreateStatusReportGeneratedByUserIdChange}></label><label>${msg['create.publishedBy']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportPublishedByUserId} @input=${this.handleCmdCreateStatusReportPublishedByUserIdChange}></label><button class="rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdCreateStatusReportState === 'loading'}>${this.cmdCreateStatusReportState === 'loading' ? msg['loading'] : msg['create.action']}</button></form></section>`;
}
renderUpdate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['update.title']}</h2><form class="mt-4 grid gap-4" @submit=${this.handleCmdUpdateStatusReportClick}><label>${msg['selectRecord']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportStatusReportId} @change=${this.handleCmdUpdateStatusReportStatusReportIdChange}><option value="">${msg['selectRecord']}</option>${(this.qryListStatusReportData ?? []).map((row: unknown) => html`<option value=${field(row,'statusReportId')}>${field(row,'title')}</option>`)}</select></label><label>${msg['update.status']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateStatusReportStatus} @input=${this.handleCmdUpdateStatusReportStatusChange}></label><label>${msg['update.titleField']}<input class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required .value=${this.cmdUpdateStatusReportTitle} @input=${this.handleCmdUpdateStatusReportTitleChange}></label><label>${msg['update.content']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" required @input=${this.handleCmdUpdateStatusReportContentChange}>${this.cmdUpdateStatusReportContent}</textarea></label><label>${msg['update.risks']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${this.handleCmdUpdateStatusReportCommunicatedRisksChange}>${this.cmdUpdateStatusReportCommunicatedRisks}</textarea></label><button class="rounded px-3 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdUpdateStatusReportState === 'loading'}>${this.cmdUpdateStatusReportState === 'loading' ? msg['loading'] : msg['update.action']}</button></form></section>`;
}
renderDelete() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><h2 class="text-lg font-semibold">${msg['delete.title']}</h2><select class="mt-4 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdDeleteStatusReportStatusReportId} @change=${this.handleCmdDeleteStatusReportStatusReportIdChange}><option value="">${msg['selectRecord']}</option>${(this.qryListStatusReportData ?? []).map((row: unknown) => html`<option value=${field(row,'statusReportId')}>${field(row,'title')}</option>`)}</select><button class="mt-3 rounded px-3 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]" ?disabled=${this.cmdDeleteStatusReportState === 'loading' || !this.cmdDeleteStatusReportStatusReportId} @click=${this.handleCmdDeleteStatusReportClick}>${this.cmdDeleteStatusReportState === 'loading' ? msg['loading'] : msg['delete.action']}</button></section>`;
}
renderProjects() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['projects.title']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" @click=${this.handleQryProjectPickerClick}>${msg['refresh']}</button></div>${(this.qryProjectPickerData ?? []).length === 0 ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : html`<ul class="mt-3 grid gap-2">${(this.qryProjectPickerData ?? []).map((project: unknown) => html`<li><button class="w-full rounded border border-[var(--border-subtle,#e2e8f0)] p-2 text-left" @click=${() => this.setCmdCreateStatusReportProjectExecutionOverviewProjectId(field(project,'projectId'))}>${field(project,'name')}</button></li>`)}</ul>`}</section>`;
}
renderFeedback() {
const msg = this.msg;
return html`${this.cmdCreateStatusReportState === 'success' ? html`<p class="rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateStatusReportState === 'error' ? html`<p class="rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateStatusReportError || msg['create.error']}</p>` : nothing}${this.cmdUpdateStatusReportState === 'success' ? html`<p class="rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateStatusReportState === 'error' ? html`<p class="rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateStatusReportError || msg['update.error']}</p>` : nothing}${this.cmdDeleteStatusReportState === 'success' ? html`<p class="rounded bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteStatusReportState === 'error' ? html`<p class="rounded bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteStatusReportError || msg['delete.error']}</p>` : nothing}`;
}
}
