/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/submitChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'client.empty': m['intent.submitChangeOrder.qryLocateClient.list.empty'],
'client.id': m['intent.submitChangeOrder.qryLocateClient.list.column.clientId.label'],
'client.name': m['intent.submitChangeOrder.qryLocateClient.list.column.clientName.label'],
'client.email': m['intent.submitChangeOrder.qryLocateClient.list.column.contactEmail.label'],
'client.phone': m['intent.submitChangeOrder.qryLocateClient.list.column.contactPhone.label'],
'project.section': m['section.submitChangeOrder.locateProject.title'],
'project.title': m['organism.submitChangeOrder.qryLocateProject.title'],
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
'workspace.title': m['section.submitChangeOrder.changeOrderWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'intro': 'Registre a alteração e encaminhe-a para tratamento.',
'chooseClient': 'Escolha o cliente',
'chooseProject': 'Escolha a obra',
'selected': 'Selecionado',
'required': 'Obrigatório',
'createdRecap': 'Alteração registrada',
'changeOrderId': 'Identificador da ordem',
'currentStatus': 'Estado atual',
'createdStatus': 'Registrada',
'loading': 'Carregando…',
'working': 'Enviando…',
'noSelection': 'Selecione o contexto acima para continuar.',
'finish': 'Encaminhar para o gerente de projeto',
'finishSuccess': 'A alteração foi encaminhada para tratamento.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'intro': 'Registre a alteração e encaminhe-a para tratamento.', 'chooseClient': 'Escolha o cliente', 'chooseProject': 'Escolha a obra', 'selected': 'Selecionado', 'required': 'Obrigatório', 'createdRecap': 'Alteração registrada', 'changeOrderId': 'Identificador da ordem', 'currentStatus': 'Estado atual', 'createdStatus': 'Registrada', 'loading': 'Carregando…', 'working': 'Enviando…', 'noSelection': 'Selecione o contexto acima para continuar.', 'finish': 'Encaminhar para o gerente de projeto', 'finishSuccess': 'A alteração foi encaminhada para tratamento.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'intro': 'Record the change and send it for handling.', 'chooseClient': 'Choose the client', 'chooseProject': 'Choose the project', 'selected': 'Selected', 'required': 'Required', 'createdRecap': 'Change recorded', 'changeOrderId': 'Change order identifier', 'currentStatus': 'Current status', 'createdStatus': 'Recorded', 'loading': 'Loading…', 'working': 'Sending…', 'noSelection': 'Select the context above to continue.', 'finish': 'Send to the project manager', 'finishSuccess': 'The change was sent for handling.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'intro': 'Registre el cambio y envíelo para su gestión.', 'chooseClient': 'Elija el cliente', 'chooseProject': 'Elija el proyecto', 'selected': 'Seleccionado', 'required': 'Obligatorio', 'createdRecap': 'Cambio registrado', 'changeOrderId': 'Identificador de la orden', 'currentStatus': 'Estado actual', 'createdStatus': 'Registrado', 'loading': 'Cargando…', 'working': 'Enviando…', 'noSelection': 'Seleccione el contexto anterior para continuar.', 'finish': 'Enviar al gerente de proyecto', 'finishSuccess': 'El cambio fue enviado para su gestión.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--submit-change-order-102046')
export class BuildFlowFsmDesktopPage31SubmitChangeOrderPage extends BuildFlowFsmSubmitChangeOrderBase {
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
<h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
<p class="text-[var(--text-muted,#64748b)]">${msg['intro']}</p>
${this.renderClient()}${this.renderProject()}
${this.cmdCreateChangeOrderOutput ? this.renderCreated() : this.renderCreate()}
</main>`;
}
renderClient() {
const msg = this.msg;
return html`<section class="space-y-3" aria-labelledby="client-section"><h2 id="client-section" class="text-lg font-semibold">${msg['client.section']}</h2>
${this.qryLocateClientState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
${this.qryLocateClientState === 'error' ? html`<button class="text-[var(--link-text,#2563eb)]" @click=${(event: Event) => this.handleQryLocateClientClick(event)}>${msg['client.title']}</button>` : nothing}
<div class="grid gap-3 md:grid-cols-2">${this.qryLocateClientData.length ? this.qryLocateClientData.map((client: QryLocateClientOutput) => html`<button type="button" class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 text-left ${this.cmdCreateChangeOrderClientClientId === client.clientId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : ''}" @click=${() => this.setCmdCreateChangeOrderClientClientId(client.clientId)}><strong>${client.clientName}</strong><span class="block text-sm text-[var(--text-muted,#64748b)]">${client.contactEmail} · ${client.contactPhone}</span></button>`) : html`<p class="text-[var(--text-muted,#64748b)]">${msg['client.empty']}</p>`}</div></section>`;
}
renderProject() {
const msg = this.msg;
return html`<section class="space-y-3" aria-labelledby="project-section"><h2 id="project-section" class="text-lg font-semibold">${msg['project.section']}</h2>
${this.qryLocateProjectState === 'loading' ? html`<p>${msg['loading']}</p>` : nothing}
<div class="overflow-x-auto rounded-lg border border-[var(--border-default,#e2e8f0)]"><table class="w-full text-left"><thead><tr class="bg-[var(--surface-alt-bg,#f8fafc)]"><th class="p-3">${msg['project.name']}</th><th class="p-3">${msg['project.address']}</th><th class="p-3">${msg['project.status']}</th></tr></thead><tbody>${this.qryLocateProjectData.length ? this.qryLocateProjectData.map((project: QryLocateProjectOutput) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td class="p-3"><button type="button" class="text-[var(--link-text,#2563eb)]" @click=${() => this.setCmdCreateChangeOrderProjectProjectId(project.projectId)}>${project.name}</button><span class="block text-sm text-[var(--text-muted,#64748b)]">${project.projectId}</span></td><td class="p-3">${project.address}</td><td class="p-3">${project.status}</td></tr>`) : html`<tr><td class="p-3" colspan="3">${msg['project.empty']}</td></tr>`}</tbody></table></div></section>`;
}
renderCreate() {
const msg = this.msg;
const ready = Boolean(this.cmdCreateChangeOrderClientClientId && this.cmdCreateChangeOrderProjectProjectId && this.cmdCreateChangeOrderDescription && this.cmdCreateChangeOrderScopeImpact && this.cmdCreateChangeOrderScheduleImpact && this.cmdCreateChangeOrderChangeAmount);
return html`<section class="rounded-lg border border-[var(--selected-border,#2563eb)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><p>${msg['create.form']}</p>
${this.cmdCreateChangeOrderState === 'error' ? html`<p class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateChangeOrderError || msg['create.error']}</p>` : nothing}
${this.renderField('create-description', msg['create.description'], this.cmdCreateChangeOrderDescription, (event: Event) => this.handleCmdCreateChangeOrderDescriptionChange(event), 'textarea')}
${this.renderField('create-scope', msg['create.scope'], this.cmdCreateChangeOrderScopeImpact, (event: Event) => this.handleCmdCreateChangeOrderScopeImpactChange(event), 'textarea')}
${this.renderField('create-schedule', msg['create.schedule'], this.cmdCreateChangeOrderScheduleImpact, (event: Event) => this.handleCmdCreateChangeOrderScheduleImpactChange(event), 'textarea')}
${this.renderField('create-amount', msg['create.amount'], this.cmdCreateChangeOrderChangeAmount, (event: Event) => this.handleCmdCreateChangeOrderChangeAmountChange(event), 'input')}
<button type="button" ?disabled=${!ready || this.cmdCreateChangeOrderState === 'loading'} class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event) => this.handleCmdCreateChangeOrderClick(event)}>${this.cmdCreateChangeOrderState === 'loading' ? msg['working'] : msg['create.action']}</button></section>`;
}
renderField(id: string, label: string, value: string, handler: (event: Event) => void, kind: 'input' | 'textarea') {
return html`<label class="block space-y-1" for=${id}><span>${label} <small class="text-[var(--text-muted,#64748b)]">(${this.msg['required']})</small></span>${kind === 'textarea' ? html`<textarea id=${id} required .value=${value} @change=${handler} class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2"></textarea>` : html`<input id=${id} required .value=${value} @change=${handler} class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" />`}</label>`;
}
renderCreated() {
const msg = this.msg;
const output = this.cmdCreateChangeOrderOutput as unknown as { changeOrderId?: string; status?: string };
const id = output.changeOrderId ?? '';
return html`<section class="space-y-4"><div class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4"><h2 class="font-semibold">${msg['createdRecap']}</h2><p>${msg['changeOrderId']}: ${id}</p><p>${msg['currentStatus']}: ${output.status ?? msg['createdStatus']}</p></div>${this.renderHandoff(id)}</section>`;
}
renderHandoff(createdId: string) {
const msg = this.msg;
const ready = Boolean(createdId && this.cmdHandoffChangeOrderToProjectManagerDescription && this.cmdHandoffChangeOrderToProjectManagerScopeImpact && this.cmdHandoffChangeOrderToProjectManagerScheduleImpact && this.cmdHandoffChangeOrderToProjectManagerChangeAmount);
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] p-5 space-y-4"><h2 class="text-lg font-semibold">${msg['handoff.title']}</h2><p>${msg['handoff.form']}</p><select required .value=${this.cmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderId} @change=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerChangeOrderChangeOrderIdChange(event)} class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2"><option value="">${msg['chooseProject']}</option><option value=${createdId}>${createdId}</option></select>
${this.renderField('handoff-description', msg['handoff.description'], this.cmdHandoffChangeOrderToProjectManagerDescription, (event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerDescriptionChange(event), 'textarea')}${this.renderField('handoff-scope', msg['handoff.scope'], this.cmdHandoffChangeOrderToProjectManagerScopeImpact, (event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerScopeImpactChange(event), 'textarea')}${this.renderField('handoff-schedule', msg['handoff.schedule'], this.cmdHandoffChangeOrderToProjectManagerScheduleImpact, (event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerScheduleImpactChange(event), 'textarea')}${this.renderField('handoff-amount', msg['handoff.amount'], this.cmdHandoffChangeOrderToProjectManagerChangeAmount, (event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerChangeAmountChange(event), 'input')}
${this.cmdHandoffChangeOrderToProjectManagerState === 'error' ? html`<p>${this.cmdHandoffChangeOrderToProjectManagerError || msg['handoff.error']}</p>` : nothing}${this.cmdHandoffChangeOrderToProjectManagerState === 'success' ? html`<p>${msg['finishSuccess']}</p>` : nothing}<button type="button" ?disabled=${!ready || this.cmdHandoffChangeOrderToProjectManagerState === 'loading'} class="rounded-lg bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" @click=${(event: Event) => this.handleCmdHandoffChangeOrderToProjectManagerClick(event)}>${this.cmdHandoffChangeOrderToProjectManagerState === 'loading' ? msg['working'] : msg['finish']}</button></section>`;
}
}
