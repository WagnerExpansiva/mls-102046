/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/submitChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmSubmitChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.js';
import type { QryLocateClientOutput, QryLocateProjectOutput } from '/_102046_/l2/buildFlowFsm/web/shared/submitChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'client.section': m['section.submitChangeOrder.locateClient.title'],
'client.title': m['organism.submitChangeOrder.qryLocateClient.title'],
'client.list': m['intent.submitChangeOrder.qryLocateClient.list.title'],
'client.empty': m['intent.submitChangeOrder.qryLocateClient.list.empty'],
'client.id': m['intent.submitChangeOrder.qryLocateClient.list.column.clientId.label'],
'client.name': m['intent.submitChangeOrder.qryLocateClient.list.column.clientName.label'],
'client.email': m['intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label'],
'project.section': m['section.submitChangeOrder.locateProject.title'],
'project.title': m['organism.submitChangeOrder.qryLocateProject.title'],
'project.list': m['intent.submitChangeOrder.qryLocateProject.list.title'],
'project.empty': m['intent.submitChangeOrder.qryLocateProject.list.empty'],
'project.id': m['intent.submitChangeOrder.qryLocateProject.list.column.projectId.label'],
'project.name': m['intent.submitChangeOrder.qryLocateProject.list.column.name.label'],
'project.address': m['intent.submitChangeOrder.qryLocateProject.list.column.address.label'],
'project.status': m['intent.submitChangeOrder.qryLocateProject.list.column.status.label'],
'create.section': m['section.submitChangeOrder.createChangeOrder.title'],
'create.title': m['organism.submitChangeOrder.cmdCreateChangeOrder.title'],
'create.form': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.title'],
'create.action': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
'create.description': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.description.label'],
'create.scope': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scopeImpact.label'],
'create.schedule': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.scheduleImpact.label'],
'create.amount': m['intent.submitChangeOrder.cmdCreateChangeOrder.form.field.changeAmount.label'],
'handoff.section': m['section.submitChangeOrder.handoffChangeOrderToProjectManager.title'],
'handoff.title': m['organism.submitChangeOrder.cmdHandoffChangeOrderToProjectManager.title'],
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
'rail.client': 'Cliente', 'rail.project': 'Obra', 'rail.change': 'Alteração', 'rail.review': 'Revisão',
'next': 'Próximo', 'back': 'Voltar', 'required': 'Obrigatório', 'loading': 'Carregando…', 'selectContext': 'Contexto selecionado',
'created': 'Ordem registrada. Revise os dados antes de encaminhar.', 'handoffReady': 'Confirme os impactos e encaminhe esta ordem.', 'status': 'Estado atual', 'notAvailable': 'Indisponível', 'retry': 'Tentar novamente'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'rail.client': 'Cliente', 'rail.project': 'Obra', 'rail.change': 'Alteração', 'rail.review': 'Revisão',
'next': 'Próximo', 'back': 'Voltar', 'required': 'Obrigatório', 'loading': 'Carregando…', 'selectContext': 'Contexto selecionado',
'created': 'Ordem registrada. Revise os dados antes de encaminhar.', 'handoffReady': 'Confirme os impactos e encaminhe esta ordem.', 'status': 'Estado atual', 'notAvailable': 'Indisponível', 'retry': 'Tentar novamente'
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'rail.client': 'Client', 'rail.project': 'Project', 'rail.change': 'Change', 'rail.review': 'Review',
'next': 'Next', 'back': 'Back', 'required': 'Required', 'loading': 'Loading…', 'selectContext': 'Selected context',
'created': 'Order registered. Review the details before sending it on.', 'handoffReady': 'Confirm the impacts and send this order on.', 'status': 'Current status', 'notAvailable': 'Unavailable', 'retry': 'Try again'
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'rail.client': 'Cliente', 'rail.project': 'Obra', 'rail.change': 'Cambio', 'rail.review': 'Revisión',
'next': 'Siguiente', 'back': 'Atrás', 'required': 'Obligatorio', 'loading': 'Cargando…', 'selectContext': 'Contexto seleccionado',
'created': 'Orden registrada. Revise los datos antes de enviarla.', 'handoffReady': 'Confirme los impactos y envíe esta orden.', 'status': 'Estado actual', 'notAvailable': 'No disponible', 'retry': 'Intentar de nuevo'
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--submit-change-order-102046')
export class BuildFlowFsmDesktopPage21SubmitChangeOrderPage extends BuildFlowFsmSubmitChangeOrderBase {
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
return html`<div class="mx-auto grid max-w-7xl gap-6 p-6 text-[var(--text-default,#0f172a)] md:grid-cols-[15rem_1fr]">
<nav aria-label="${msg['workspace']}" class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
<ol class="space-y-4">
${[msg['rail.client'], msg['rail.project'], msg['rail.change'], msg['rail.review']].map((label: string, index: number) => html`<li class="flex items-center gap-3 ${index === 0 ? 'font-bold text-[var(--selected-text,#0f172a)]' : 'text-[var(--text-muted,#64748b)]'}"><span class="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--selected-border,#94a3b8)]">${index + 1}</span><span>${label}</span></li>`)}</ol>
</nav><main class="space-y-6">${this.renderClientStep()}${this.renderProjectStep()}${this.renderChangeStep()}${this.renderReviewStep()}</main></div>`;
}
renderClientStep() {
const msg = this.msg;
const rows: QryLocateClientOutput[] = this.qryLocateClientData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_3px_rgba(0,0,0,.1))]"><h2 class="mb-1 text-xl font-bold">${msg['client.section']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['client.title']}</p>${this.qryLocateClientState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p>${msg['client.empty']}</p>` : html`<div class="overflow-x-auto"><h3 class="mb-2 font-semibold">${msg['client.list']}</h3><table class="w-full text-left text-sm"><thead><tr><th>${msg['client.name']}</th><th>${msg['client.email']}</th></tr></thead><tbody>${rows.map((client: QryLocateClientOutput) => html`<tr class="cursor-pointer border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)]" @click=${() => this.setCmdCreateChangeOrderClientClientId(client.clientId)}><td class="py-3">${client.clientName}</td><td>${client.contactEmail}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderProjectStep() {
const msg = this.msg;
const rows: QryLocateProjectOutput[] = this.qryLocateProjectData ?? [];
const selected = rows.find((project: QryLocateProjectOutput) => project.projectId === this.cmdCreateChangeOrderProjectProjectId);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-1 text-xl font-bold">${msg['project.section']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['project.title']}</p>${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : rows.length === 0 ? html`<p>${msg['project.empty']}</p>` : html`<div class="grid gap-3 md:grid-cols-2">${rows.map((project: QryLocateProjectOutput) => html`<article class="rounded-lg border p-4 ${project.projectId === this.cmdCreateChangeOrderProjectProjectId ? 'border-[var(--selected-border,#64748b)] bg-[var(--selected-bg,#f1f5f9)]' : 'border-[var(--border-subtle,#e2e8f0)]'}"><h3 class="font-semibold">${project.name}</h3><p class="text-sm">${project.address}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['project.status']}: ${project.status}</p></article>`)}</div>`}${selected ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">${msg['selectContext']}: ${selected.name}</p>` : nothing}</section>`;
}
renderChangeStep() {
const msg = this.msg;
const valid = Boolean(this.cmdCreateChangeOrderClientClientId && this.cmdCreateChangeOrderProjectProjectId && this.cmdCreateChangeOrderDescription && this.cmdCreateChangeOrderScopeImpact && this.cmdCreateChangeOrderScheduleImpact && this.cmdCreateChangeOrderChangeAmount);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-1 text-xl font-bold">${msg['create.section']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['create.title']}</p><form class="grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); if (valid) this.handleCmdCreateChangeOrderClick(event); }}><h3 class="md:col-span-2 font-semibold">${msg['create.form']}</h3><label class="md:col-span-2">${msg['create.description']} <span aria-label="${msg['required']}">*</span><textarea required class="mt-1 w-full rounded border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDescription} @input=${this.handleCmdCreateChangeOrderDescriptionChange}></textarea></label><label>${msg['create.scope']} <span>*</span><input required class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateChangeOrderScopeImpact} @input=${this.handleCmdCreateChangeOrderScopeImpactChange}></label><label>${msg['create.schedule']} <span>*</span><input required class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateChangeOrderScheduleImpact} @input=${this.handleCmdCreateChangeOrderScheduleImpactChange}></label><label>${msg['create.amount']} <span>*</span><input required type="number" class="mt-1 w-full rounded border p-2" .value=${this.cmdCreateChangeOrderChangeAmount} @input=${this.handleCmdCreateChangeOrderChangeAmountChange}></label><button type="submit" ?disabled=${!valid || this.cmdCreateChangeOrderState === 'loading'} class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${this.cmdCreateChangeOrderState === 'loading' ? msg['loading'] : msg['create.action']}</button></form>${this.cmdCreateChangeOrderState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateChangeOrderState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateChangeOrderError || msg['create.error']}</p>` : nothing}</section>`;
}
renderReviewStep() {
const msg = this.msg;
const valid = Boolean(this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId && this.cmdHandoffChangeOrderToProjectManagerDescription && this.cmdHandoffChangeOrderToProjectManagerScopeImpact && this.cmdHandoffChangeOrderToProjectManagerScheduleImpact && this.cmdHandoffChangeOrderToProjectManagerChangeAmount);
return html`<section class="rounded-lg border border-[var(--border-default,#cbd5e1)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="mb-1 text-xl font-bold">${msg['handoff.section']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['handoff.title']}</p><div class="mb-4 rounded bg-[var(--surface-alt-bg,#f8fafc)] p-3 text-sm"><strong>${msg['status']}:</strong> ${this.status || msg['notAvailable']}</div><form class="grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); if (valid) this.handleCmdHandoffChangeOrderToProjectManagerClick(event); }}><h3 class="md:col-span-2 font-semibold">${msg['handoff.form']}</h3><label class="md:col-span-2">${msg['handoff.description']}<textarea required class="mt-1 w-full rounded border p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerDescription} @input=${this.handleCmdHandoffChangeOrderToProjectManagerDescriptionChange}></textarea></label><label>${msg['handoff.scope']}<input required class="mt-1 w-full rounded border p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerScopeImpact} @input=${this.handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange}></label><label>${msg['handoff.schedule']}<input required class="mt-1 w-full rounded border p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerScheduleImpact} @input=${this.handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange}></label><label>${msg['handoff.amount']}<input required type="number" class="mt-1 w-full rounded border p-2" .value=${this.cmdHandoffChangeOrderToProjectManagerChangeAmount} @input=${this.handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange}></label><button type="submit" ?disabled=${!valid || this.cmdHandoffChangeOrderToProjectManagerState === 'loading'} class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${this.cmdHandoffChangeOrderToProjectManagerState === 'loading' ? msg['loading'] : msg['handoff.action']}</button></form>${this.cmdHandoffChangeOrderToProjectManagerState === 'success' ? html`<p class="mt-4 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : this.cmdHandoffChangeOrderToProjectManagerState === 'error' ? html`<p class="mt-4 text-[var(--status-error-text,#b91c1c)]">${this.cmdHandoffChangeOrderToProjectManagerError || msg['handoff.error']}</p>` : nothing}</section>`;
}
}
