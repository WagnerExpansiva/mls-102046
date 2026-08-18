/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/generateAndPublishProjectStatusReport.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmGenerateAndPublishProjectStatusReportBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.js';
import type { QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'project.title': m['section.generateAndPublishProjectStatusReport.locateProject.title'],
'project.organism': m['organism.generateAndPublishProjectStatusReport.qryLocateProject.title'],
'project.list': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title'],
'project.empty': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty'],
'project.id': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label'],
'project.name': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label'],
'project.status': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label'],
'project.client': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label'],
'assessment.title': m['section.generateAndPublishProjectStatusReport.projectAssessment.title'],
'assessment.organism': m['organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title'],
'assessment.list': m['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title'],
'assessment.empty': m['intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty'],
'risk.organism': m['organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title'],
'risk.list': m['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title'],
'risk.empty': m['intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty'],
'workflow.title': m['section.generateAndPublishProjectStatusReport.reportWorkflow.title'],
'create.organism': m['organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title'],
'create.form': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title'],
'create.action': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport'],
'create.title': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label'],
'create.content': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label'],
'create.risks': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label'],
'create.generatedBy': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label'],
'create.publishedBy': m['intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label'],
'publish.organism': m['organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title'],
'publish.form': m['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title'],
'publish.action': m['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport'],
'publish.status': m['intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label'],
'handoff.organism': m['organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title'],
'handoff.form': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title'],
'handoff.action': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient'],
'handoff.title': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label'],
'handoff.content': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label'],
'handoff.risks': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label'],
'handoff.generatedBy': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label'],
'handoff.publishedBy': m['intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label'],
'create.success': m['action.cmdCreateStatusReport.success'],
'create.error': m['action.cmdCreateStatusReport.error'],
'publish.success': m['action.cmdPublishStatusReport.success'],
'publish.error': m['action.cmdPublishStatusReport.error'],
'handoff.success': m['action.cmdHandoffStatusReportToClient.success'],
'handoff.error': m['action.cmdHandoffStatusReportToClient.error'],
'loading': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title'],
'choose': m['intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty'],
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
@customElement('build-flow-fsm--web--desktop--page11--generate-and-publish-project-status-report-102046')
export class BuildFlowFsmDesktopPage11GenerateAndPublishProjectStatusReportPage extends BuildFlowFsmGenerateAndPublishProjectStatusReportBase {
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
${this.renderProjectLocator()}
${this.renderAssessment()}
${this.renderWorkflow()}
</div>
</main>`;
}
renderProjectLocator() {
const msg = this.msg;
const rows: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
<h2 class="text-xl font-semibold">${msg['project.title']}</h2>
<div class="mt-4 flex items-center justify-between"><h3 class="font-medium">${msg['project.list']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['project.organism']}</button></div>
${this.qryLocateProjectState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="mt-4 overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-2">${msg['project.id']}</th><th class="p-2">${msg['project.name']}</th><th class="p-2">${msg['project.client']}</th><th class="p-2">${msg['project.status']}</th></tr></thead><tbody>${rows.map((row: QryLocateProjectOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(row.projectId); this.setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId(row.projectId); this.handleQryInspectProjectExecutionOverviewClick(); this.handleQryInspectScheduleRiskAssessmentClick(); }}><td class="p-2">${row.projectId}</td><td class="p-2">${row.name}</td><td class="p-2">${row.clientId}</td><td class="p-2">${row.status}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderAssessment() {
const msg = this.msg;
const assessment = this.qryInspectProjectExecutionOverviewData;
const risks = this.qryInspectScheduleRiskAssessmentData;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
<h2 class="text-xl font-semibold">${msg['assessment.title']}</h2>
<div><h3 class="font-medium">${msg['assessment.list']}</h3>${this.qryInspectProjectExecutionOverviewState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : assessment === null ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['assessment.empty']}</p>` : html`<pre class="mt-2 overflow-auto rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm">${JSON.stringify(assessment, null, 2)}</pre>`}</div>
<div><h3 class="font-medium">${msg['risk.list']}</h3>${this.qryInspectScheduleRiskAssessmentState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : risks === null ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['risk.empty']}</p>` : html`<pre class="mt-2 overflow-auto rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm">${JSON.stringify(risks, null, 2)}</pre>`}</div>
</section>`;
}
renderWorkflow() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-6"><h2 class="text-xl font-semibold">${msg['workflow.title']}</h2>${this.renderCreate()}${this.renderPublish()}${this.renderHandoff()}</section>`;
}
renderCreate() {
const msg = this.msg;
const busy = this.cmdCreateStatusReportState === 'loading';
return html`<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><h3 class="font-medium">${msg['create.form']}</h3><div class="mt-3 grid gap-3 md:grid-cols-2"><label>${msg['create.title']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportTitle} @input=${(event: Event) => this.handleCmdCreateStatusReportTitleChange(event)} /></label><label>${msg['create.generatedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportGeneratedByUserId} @input=${(event: Event) => this.handleCmdCreateStatusReportGeneratedByUserIdChange(event)} /></label><label class="md:col-span-2">${msg['create.content']}<textarea class="mt-1 min-h-28 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportContent} @input=${(event: Event) => this.handleCmdCreateStatusReportContentChange(event)}></textarea></label><label>${msg['create.risks']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportCommunicatedRisks} @input=${(event: Event) => this.handleCmdCreateStatusReportCommunicatedRisksChange(event)}></textarea></label><label>${msg['create.publishedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateStatusReportPublishedByUserId} @input=${(event: Event) => this.handleCmdCreateStatusReportPublishedByUserIdChange(event)} /></label></div><button class="mt-3 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy} @click=${(event: Event) => this.handleCmdCreateStatusReportClick(event)}>${busy ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateStatusReportState === 'success' ? html`<p class="mt-2 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateStatusReportState === 'error' ? html`<p class="mt-2 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateStatusReportError || msg['create.error']}</p>` : nothing}</div>`;
}
renderPublish() {
const msg = this.msg;
const busy = this.cmdPublishStatusReportState === 'loading';
return html`<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><h3 class="font-medium">${msg['publish.form']}</h3><label class="mt-3 block">${msg['publish.status']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdPublishStatusReportStatus} @input=${(event: Event) => this.handleCmdPublishStatusReportStatusChange(event)} /></label><button class="mt-3 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy} @click=${(event: Event) => this.handleCmdPublishStatusReportClick(event)}>${busy ? msg['loading'] : msg['publish.action']}</button>${this.cmdPublishStatusReportState === 'success' ? html`<p class="mt-2 text-[var(--status-success-text,#166534)]">${msg['publish.success']}</p>` : this.cmdPublishStatusReportState === 'error' ? html`<p class="mt-2 text-[var(--status-error-text,#b91c1c)]">${this.cmdPublishStatusReportError || msg['publish.error']}</p>` : nothing}</div>`;
}
renderHandoff() {
const msg = this.msg;
const busy = this.cmdHandoffStatusReportToClientState === 'loading';
return html`<div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4"><h3 class="font-medium">${msg['handoff.form']}</h3><div class="mt-3 grid gap-3 md:grid-cols-2"><label>${msg['handoff.title']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffStatusReportToClientTitle} @input=${(event: Event) => this.handleCmdHandoffStatusReportToClientTitleChange(event)} /></label><label>${msg['handoff.generatedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffStatusReportToClientGeneratedByUserId} @input=${(event: Event) => this.handleCmdHandoffStatusReportToClientGeneratedByUserIdChange(event)} /></label><label class="md:col-span-2">${msg['handoff.content']}<textarea class="mt-1 min-h-28 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffStatusReportToClientContent} @input=${(event: Event) => this.handleCmdHandoffStatusReportToClientContentChange(event)}></textarea></label><label>${msg['handoff.risks']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffStatusReportToClientCommunicatedRisks} @input=${(event: Event) => this.handleCmdHandoffStatusReportToClientCommunicatedRisksChange(event)}></textarea></label><label>${msg['handoff.publishedBy']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffStatusReportToClientPublishedByUserId} @input=${(event: Event) => this.handleCmdHandoffStatusReportToClientPublishedByUserIdChange(event)} /></label></div><button class="mt-3 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${busy} @click=${(event: Event) => this.handleCmdHandoffStatusReportToClientClick(event)}>${busy ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffStatusReportToClientState === 'success' ? html`<p class="mt-2 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffStatusReportToClientState === 'error' ? html`<p class="mt-2 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffStatusReportToClientError || msg['handoff.error']}</p>` : nothing}</div>`;
}
}