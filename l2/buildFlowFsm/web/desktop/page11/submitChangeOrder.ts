/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/submitChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmSubmitChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.js';
import type { QryLocateClientOutput, QryLocateProjectOutput, CmdCreateChangeOrderOutput } from '/_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'client.section': m['section.submitChangeOrder.locateClient.title'],
'client.organism': m['organism.submitChangeOrder.qryLocateClient.title'],
'client.list': m['intent.submitChangeOrder.qryLocateClient.list.title'],
'client.empty': m['intent.submitChangeOrder.qryLocateClient.list.empty'],
'client.id': m['intent.submitChangeOrder.qryLocateClient.list.column.clientId.label'],
'client.name': m['intent.submitChangeOrder.qryLocateClient.list.column.clientName.label'],
'client.email': m['intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label'],
'client.phone': m['intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label'],
'project.section': m['section.submitChangeOrder.locateProject.title'],
'project.organism': m['organism.submitChangeOrder.qryLocateProject.title'],
'project.list': m['intent.submitChangeOrder.qryLocateProject.list.title'],
'project.empty': m['intent.submitChangeOrder.qryLocateProject.list.empty'],
'project.id': m['intent.submitChangeOrder.qryLocateProject.list.column.projectId.label'],
'project.client': m['intent.submitChangeOrder.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.submitChangeOrder.qryLocateProject.list.column.name.label'],
'project.address': m['intent.submitChangeOrder.qryLocateProject.list.column.address.label'],
'project.status': m['intent.submitChangeOrder.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.submitChangeOrder.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.submitChangeOrder.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.submitChangeOrder.qryLocateProject.list.column.plannedEndDate.label'],
'create.section': m['section.submitChangeOrder.createChangeOrder.title'],
'create.organism': m['organism.submitChangeOrder.cmdCreateChangeOrder.title'],
'create.form': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.title'],
'create.action': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
'create.description': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label'],
'create.scope': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label'],
'create.schedule': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label'],
'create.amount': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label'],
'handoff.section': m['section.submitChangeOrder.handoffChangeOrderToProjectManager.title'],
'handoff.organism': m['organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title'],
'handoff.form': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.title'],
'handoff.action': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.action.cmdHandoffChangeOrderToProjectManager'],
'handoff.description': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.description.label'],
'handoff.scope': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scopeImpact.label'],
'handoff.schedule': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.scheduleImpact.label'],
'handoff.amount': m['intent.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.form.field.changeAmount.label'],
'create.success': m['action.cmdCreateChangeOrder.success'],
'create.error': m['action.cmdCreateChangeOrder.error'],
'handoff.success': m['action.cmdHandoffChangeOrderToProjectManager.success'],
'handoff.error': m['action.cmdHandoffChangeOrderToProjectManager.error'],
'workspace': m['section.submitChangeOrder.changeOrderWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'loading': 'Carregando…',
'chooseClient': 'Selecione um cliente',
'chooseChangeOrder': 'Selecione a ordem registrada',
'projectContext': 'Obra definida pelo contexto atual',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'loading': 'Carregando…',
'chooseClient': 'Selecione um cliente',
'chooseChangeOrder': 'Selecione a ordem registrada',
'projectContext': 'Obra definida pelo contexto atual',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'loading': 'Loading…',
'chooseClient': 'Choose a client',
'chooseChangeOrder': 'Choose the registered change order',
'projectContext': 'Project supplied by the current context',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'loading': 'Cargando…',
'chooseClient': 'Seleccione un cliente',
'chooseChangeOrder': 'Seleccione la orden registrada',
'projectContext': 'Obra proporcionada por el contexto actual',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--submit-change-order-102046')
export class BuildFlowFsmDesktopPage11SubmitChangeOrderPage extends BuildFlowFsmSubmitChangeOrderBase {
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
<header><h1 class="text-2xl font-bold">${msg['client.section']}</h1></header>
${this.renderClients()}
${this.renderProjects()}
${this.renderCreateForm()}
${this.renderHandoffForm()}
</div>
</main>`;
}
renderClients() {
const msg = this.msg;
const rows: QryLocateClientOutput[] = this.qryLocateClientData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
<div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['client.organism']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateClientClick(event)}>${msg['client.list']}</button></div>
${this.qryLocateClientState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['client.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left">${msg['client.id']}</th><th class="text-left">${msg['client.name']}</th><th class="text-left">${msg['client.email']}</th><th class="text-left">${msg['client.phone']}</th></tr></thead><tbody>${rows.map((row: QryLocateClientOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td>${row.clientId}</td><td>${row.clientName}</td><td>${row.contactEmail}</td><td>${row.contactPhone}</td><td><button class="rounded px-2 py-1 bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)]" @click=${() => this.setCmdCreateChangeOrderClientClientId(row.clientId)}>${msg['chooseClient']}</button></td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderProjects() {
const msg = this.msg;
const rows: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['project.section']}</h2><button class="rounded px-3 py-2 bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)}>${msg['project.list']}</button></div>
${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left">${msg['project.id']}</th><th class="text-left">${msg['project.client']}</th><th class="text-left">${msg['project.name']}</th><th class="text-left">${msg['project.address']}</th><th class="text-left">${msg['project.status']}</th><th class="text-left">${msg['project.budget']}</th><th class="text-left">${msg['project.start']}</th><th class="text-left">${msg['project.end']}</th></tr></thead><tbody>${rows.map((row: QryLocateProjectOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td>${row.projectId}</td><td>${row.clientId}</td><td>${row.name}</td><td>${row.address}</td><td>${row.status}</td><td>${row.authorizedBudget}</td><td>${row.plannedStartDate}</td><td>${row.plannedEndDate}</td></tr>`)}</tbody></table></div>`}
<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['projectContext']}: ${this.cmdCreateChangeOrderProjectProjectId}</p></section>`;
}
renderCreateForm() {
const msg = this.msg;
const loading = this.cmdCreateChangeOrderState === 'loading';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 shadow-sm space-y-4"><h2 class="text-lg font-semibold">${msg['create.section']}</h2><h3 class="font-medium">${msg['create.form']}</h3><div class="grid gap-4 md:grid-cols-2"><label>${msg['create.description']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDescription} @change=${(event: Event) => this.handleCmdCreateChangeOrderDescriptionChange(event)}></textarea></label><label>${msg['create.scope']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderScopeImpact} @change=${(event: Event) => this.handleCmdCreateChangeOrderScopeImpactChange(event)}></textarea></label><label>${msg['create.schedule']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderScheduleImpact} @change=${(event: Event) => this.handleCmdCreateChangeOrderScheduleImpactChange(event)}></textarea></label><label>${msg['create.amount']}<input type="number" class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderChangeAmount} @change=${(event: Event) => this.handleCmdCreateChangeOrderChangeAmountChange(event)} /></label></div><button class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading} @click=${(event: Event) => this.handleCmdCreateChangeOrderClick(event)}>${loading ? msg['loading'] : msg['create.action']}</button>${this.cmdCreateChangeOrderState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['create.success']}</p>` : nothing}${this.cmdCreateChangeOrderState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdCreateChangeOrderError || msg['create.error']}</p>` : nothing}</section>`;
}
renderHandoffForm() {
const msg = this.msg;
const loading = this.cmdHandoffChangeOrderToProjectManagerState === 'loading';
const created: CmdCreateChangeOrderOutput | null = this.cmdCreateChangeOrderOutput;
const createdId = created?.changeOrderId ?? '';
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4"><h2 class="text-lg font-semibold">${msg['handoff.section']}</h2><h3 class="font-medium">${msg['handoff.form']}</h3><label>${msg['chooseChangeOrder']}<select class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange(event)}><option value="">${msg['chooseChangeOrder']}</option>${createdId ? html`<option value=${createdId}>${createdId}</option>` : nothing}</select></label><div class="grid gap-4 md:grid-cols-2"><label>${msg['handoff.description']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerDescription} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerDescriptionChange(event)}></textarea></label><label>${msg['handoff.scope']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerScopeImpact} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange(event)}></textarea></label><label>${msg['handoff.schedule']}<textarea class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerScheduleImpact} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange(event)}></textarea></label><label>${msg['handoff.amount']}<input type="number" class="mt-1 w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerChangeAmount} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange(event)} /></label></div><button class="rounded px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${loading || this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId.length === 0} @click=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerClick(event)}>${loading ? msg['loading'] : msg['handoff.action']}</button>${this.cmdHandoffChangeOrderToProjectManagerState === 'success' ? html`<p class="bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffChangeOrderToProjectManagerState === 'error' ? html`<p class="bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdHandoffChangeOrderToProjectManagerError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}
