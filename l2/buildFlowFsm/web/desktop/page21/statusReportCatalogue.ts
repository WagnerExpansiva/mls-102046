/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/statusReportCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.js';
import type { QryListStatusReportOutput, QryProjectPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'records.title': m['section.statusReportCatalogue.recordList.title'],
'records.empty': m['intent.statusReportCatalogue.qryListStatusReport.list.empty'],
'record.id': m['intent.statusReportCatalogue.qryListStatusReport.list.column.statusReportId.label'],
'record.project': m['intent.statusReportCatalogue.qryListStatusReport.list.column.projectId.label'],
'record.status': m['intent.statusReportCatalogue.qryListStatusReport.list.column.status.label'],
'record.title': m['intent.statusReportCatalogue.qryListStatusReport.list.column.title.label'],
'record.content': m['intent.statusReportCatalogue.qryListStatusReport.list.column.content.label'],
'record.risks': m['intent.statusReportCatalogue.qryListStatusReport.list.column.communicatedRisks.label'],
'record.generatedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedAt.label'],
'record.generatedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.generatedByUserId.label'],
'record.publishedAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedAt.label'],
'record.publishedBy': m['intent.statusReportCatalogue.qryListStatusReport.list.column.publishedByUserId.label'],
'record.withdrawnAt': m['intent.statusReportCatalogue.qryListStatusReport.list.column.withdrawnAt.label'],
'projects.title': m['organism.statusReportCatalogue.qryProjectPicker.title'],
'projects.empty': m['intent.statusReportCatalogue.qryProjectPicker.list.empty'],
'project.id': m['intent.statusReportCatalogue.qryProjectPicker.list.column.projectId.label'],
'project.name': m['intent.statusReportCatalogue.qryProjectPicker.list.column.name.label'],
'create.title': m['organism.statusReportCatalogue.cmdCreateStatusReport.title'],
'create.form': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.title'],
'create.action': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.action.cmdCreateStatusReport'],
'create.titleField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.title.label'],
'create.contentField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.content.label'],
'create.risksField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.communicatedRisks.label'],
'create.generatedByField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.generatedByUserId.label'],
'create.publishedByField': m['intent.statusReportCatalogue.cmdCreateStatusReport.form.field.publishedByUserId.label'],
'update.title': m['organism.statusReportCatalogue.cmdUpdateStatusReport.title'],
'update.form': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.title'],
'update.action': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.action.cmdUpdateStatusReport'],
'update.statusField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.status.label'],
'update.titleField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.title.label'],
'update.contentField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.content.label'],
'update.risksField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.communicatedRisks.label'],
'update.generatedAtField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedAt.label'],
'update.generatedByField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedByUserId.label'],
'update.publishedAtField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedAt.label'],
'update.publishedByField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedByUserId.label'],
'update.withdrawnAtField': m['intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.withdrawnAt.label'],
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
@customElement('build-flow-fsm--web--desktop--page21--status-report-catalogue-102046')
export class BuildFlowFsmDesktopPage21StatusReportCataloguePage extends BuildFlowFsmStatusReportCatalogueBase {
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
return html`<div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
${this.renderProjects(msg)}
${this.renderRecords(msg)}
${this.cmdUpdateStatusReportStatusReportId ? this.renderUpdateForm(msg) : this.renderCreateForm(msg)}
</div>`;
}
renderProjects(msg: PageMessageType) {
const projects = this.qryProjectPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 2px rgba(15,23,42,.08))]">
<h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['projects.title']}</h2>
${this.qryProjectPickerState === 'loading' ? html`<div class="mt-4 h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>` : projects.length === 0 ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['projects.empty']}</p>` : html`<div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${projects.map((project: QryProjectPickerOutput) => html`<button type="button" class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-left hover:border-[var(--selected-border,#2563eb)]" @click=${() => this.setCmdCreateStatusReportProjectExecutionOverviewProjectId(project.projectId)}><span class="block text-xs text-[var(--text-muted,#64748b)]">${msg['project.id']}</span><span class="block font-medium">${project.name}</span><span class="text-sm text-[var(--text-muted,#64748b)]">${project.projectId}</span></button>`)}</div>`}
</section>`;
}
renderRecords(msg: PageMessageType) {
const records = this.qryListStatusReportData ?? [];
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 2px rgba(15,23,42,.08))]">
<h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['records.title']}</h2>
${this.qryListStatusReportState === 'loading' ? html`<div class="mt-4 space-y-3"><div class="h-12 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div><div class="h-12 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div></div>` : records.length === 0 ? html`<p class="mt-3 text-[var(--text-muted,#64748b)]">${msg['records.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-default,#e2e8f0)]">${[msg['record.id'], msg['record.project'], msg['record.status'], msg['record.title'], msg['record.generatedAt']].map((label: string) => html`<th class="px-3 py-2 font-semibold">${label}</th>`)}<th class="px-3 py-2"></th></tr></thead><tbody>${records.map((item: QryListStatusReportOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)]"><td class="px-3 py-3">${item.statusReportId}</td><td class="px-3 py-3">${item.projectId}</td><td class="px-3 py-3"><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-xs text-[var(--status-info-text,#1e3a8a)]">${item.status}</span></td><td class="px-3 py-3 font-medium">${item.title}</td><td class="px-3 py-3">${item.generatedAt}</td><td class="px-3 py-3"><div class="flex gap-2"><button type="button" class="rounded bg-[var(--button-secondary-bg,#ffffff)] px-3 py-2 text-[var(--button-secondary-text,#334155)] ring-1 ring-[var(--button-secondary-border,#cbd5e1)]" @click=${() => this.selectRecord(item)}>${msg['update.title']}</button><button type="button" class="rounded bg-[var(--button-danger-bg,#b91c1c)] px-3 py-2 text-[var(--button-danger-text,#ffffff)]" @click=${() => this.deleteRecord(item, msg)}>${msg['delete.action']}</button></div></td></tr>`)}</tbody></table></div>`}
${this.cmdDeleteStatusReportState === 'success' ? html`<p class="mt-3 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : nothing}
${this.cmdDeleteStatusReportState === 'error' ? html`<p class="mt-3 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteStatusReportError || msg['delete.error']}</p>` : nothing}
</section>`;
}
selectRecord(item: QryListStatusReportOutput) {
this.setCmdUpdateStatusReportStatusReportId(item.statusReportId);
this.setCmdUpdateStatusReportProjectId(item.projectId);
this.setCmdUpdateStatusReportStatus(item.status);
this.setCmdUpdateStatusReportTitle(item.title);
this.setCmdUpdateStatusReportContent(item.content);
this.setCmdUpdateStatusReportCommunicatedRisks(item.communicatedRisks);
this.setCmdUpdateStatusReportGeneratedAt(item.generatedAt);
this.setCmdUpdateStatusReportGeneratedByUserId(item.generatedByUserId);
this.setCmdUpdateStatusReportPublishedAt(item.publishedAt);
this.setCmdUpdateStatusReportPublishedByUserId(item.publishedByUserId);
this.setCmdUpdateStatusReportWithdrawnAt(item.withdrawnAt);
}
deleteRecord(item: QryListStatusReportOutput, msg: PageMessageType) {
if (window.confirm(`${msg['delete.action']}: ${item.title}`)) {
this.setCmdDeleteStatusReportStatusReportId(item.statusReportId);
this.handleCmdDeleteStatusReportClick();
}
}
renderCreateForm(msg: PageMessageType) {
return html`<section class="max-w-3xl rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-[var(--shadow-small,0 1px 2px rgba(15,23,42,.08))]"><h2 class="text-lg font-semibold">${msg['create.form']}</h2><div class="mt-5 space-y-4"><label class="block"><span class="block text-sm font-medium">${msg['create.titleField']} *</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportTitle} @input=${(event: Event) => this.setCmdCreateStatusReportTitle((event.target as HTMLInputElement).value)}></label><label class="block"><span class="block text-sm font-medium">${msg['create.contentField']} *</span><textarea class="mt-1 min-h-32 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportContent} @input=${(event: Event) => this.setCmdCreateStatusReportContent((event.target as HTMLTextAreaElement).value)}></textarea></label><label class="block"><span class="block text-sm font-medium">${msg['create.risksField']}</span><textarea class="mt-1 min-h-20 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportCommunicatedRisks} @input=${(event: Event) => this.setCmdCreateStatusReportCommunicatedRisks((event.target as HTMLTextAreaElement).value)}></textarea></label><label class="block"><span class="block text-sm font-medium">${msg['create.generatedByField']} *</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateStatusReportGeneratedByUserId} @input=${(event: Event) => this.setCmdCreateStatusReportGeneratedByUserId((event.target as HTMLInputElement).value)}></label><label class="block"><span class="block text-sm font-medium">${msg['create.publishedByField']}</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdCreateStatusReportPublishedByUserId} @input=${(event: Event) => this.setCmdCreateStatusReportPublishedByUserId((event.target as HTMLInputElement).value)}></label><button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateStatusReportState === 'loading' || !this.cmdCreateStatusReportProjectExecutionOverviewProjectId || !this.cmdCreateStatusReportTitle || !this.cmdCreateStatusReportContent} @click=${(event: Event) => this.handleCmdCreateStatusReportClick(event)}>${this.cmdCreateStatusReportState === 'loading' ? msg['create.form'] : msg['create.action']}</button>${this.cmdCreateStatusReportState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateStatusReportState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateStatusReportError || msg['create.error']}</p>` : nothing}</div></section>`;
}
renderUpdateForm(msg: PageMessageType) {
return html`<section class="max-w-3xl rounded-lg border border-[var(--selected-border,#2563eb)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-[var(--shadow-small,0 1px 2px rgba(15,23,42,.08))]"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['update.form']}</h2><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-sm text-[var(--status-info-text,#1e3a8a)]">${this.cmdUpdateStatusReportStatus}</span></div><div class="mt-5 space-y-4"><label class="block"><span class="block text-sm font-medium">${msg['update.titleField']} *</span><input class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateStatusReportTitle} @input=${(event: Event) => this.setCmdUpdateStatusReportTitle((event.target as HTMLInputElement).value)}></label><label class="block"><span class="block text-sm font-medium">${msg['update.contentField']} *</span><textarea class="mt-1 min-h-32 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateStatusReportContent} @input=${(event: Event) => this.setCmdUpdateStatusReportContent((event.target as HTMLTextAreaElement).value)}></textarea></label><label class="block"><span class="block text-sm font-medium">${msg['update.risksField']}</span><textarea class="mt-1 min-h-20 w-full rounded border border-[var(--border-default,#cbd5e1)] p-2" .value=${this.cmdUpdateStatusReportCommunicatedRisks} @input=${(event: Event) => this.setCmdUpdateStatusReportCommunicatedRisks((event.target as HTMLTextAreaElement).value)}></textarea></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.generatedAtField']}: ${this.cmdUpdateStatusReportGeneratedAt}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.generatedByField']}: ${this.cmdUpdateStatusReportGeneratedByUserId}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.publishedAtField']}: ${this.cmdUpdateStatusReportPublishedAt}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.withdrawnAtField']}: ${this.cmdUpdateStatusReportWithdrawnAt}</p><button type="button" class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateStatusReportState === 'loading' || !this.cmdUpdateStatusReportTitle || !this.cmdUpdateStatusReportContent} @click=${(event: Event) => this.handleCmdUpdateStatusReportClick(event)}>${this.cmdUpdateStatusReportState === 'loading' ? msg['update.form'] : msg['update.action']}</button>${this.cmdUpdateStatusReportState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}${this.cmdUpdateStatusReportState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateStatusReportError || msg['update.error']}</p>` : nothing}</div></section>`;
}
}