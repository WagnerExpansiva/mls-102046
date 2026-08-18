/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.js';
import type { QryListClientOutput } from '/_102046_/l2/buildFlowFsm/web/shared/clientCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'list.title': m['organism.clientCatalogue.qryListClient.title'],
'list.empty': m['intent.clientCatalogue.qryListClient.list.empty'],
'clientId': m['intent.clientCatalogue.qryListClient.list.column.clientId.label'],
'clientName': m['intent.clientCatalogue.qryListClient.list.column.clientName.label'],
'contactEmail': m['intent.clientCatalogue.qryListClient.list.column.contactEmail.label'],
'contactPhone': m['intent.clientCatalogue.qryListClient.list.column.contactPhone.label'],
'delete.title': m['organism.clientCatalogue.cmdDeleteClient.title'],
'delete.action': m['intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient'],
'form.title': m['section.clientCatalogue.recordForm.title'],
'create.title': m['organism.clientCatalogue.cmdCreateClient.title'],
'create.form': m['intent.clientCatalogue.cmdCreateClient.form.title'],
'create.action': m['intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient'],
'create.name': m['intent.clientCatalogue.cmdCreateClient.form.field.clientName.label'],
'create.email': m['intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label'],
'create.phone': m['intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label'],
'update.title': m['organism.clientCatalogue.cmdUpdateClient.title'],
'update.form': m['intent.clientCatalogue.cmdUpdateClient.form.title'],
'update.action': m['intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient'],
'update.name': m['intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label'],
'update.email': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label'],
'update.phone': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label'],
'create.success': m['action.cmdCreateClient.success'],
'create.error': m['action.cmdCreateClient.error'],
'update.success': m['action.cmdUpdateClient.success'],
'update.error': m['action.cmdUpdateClient.error'],
'delete.success': m['action.cmdDeleteClient.success'],
'delete.error': m['action.cmdDeleteClient.error'],
'workspace.title': m['section.clientCatalogue.clientWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'newRecord': 'Novo cliente',
'required': 'Obrigatório',
'optional': 'Opcional',
'loading': 'Carregando…',
'saving': 'Salvando…',
'deleting': 'Excluindo…',
'chooseRecord': 'Selecione um cliente para ver e editar seus dados.',
'confirmDelete': 'Confirma a exclusão do cliente selecionado?',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'newRecord': 'Novo cliente',
'required': 'Obrigatório',
'optional': 'Opcional',
'loading': 'Carregando…',
'saving': 'Salvando…',
'deleting': 'Excluindo…',
'chooseRecord': 'Selecione um cliente para ver e editar seus dados.',
'confirmDelete': 'Confirma a exclusão do cliente selecionado?',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'newRecord': 'New client',
'required': 'Required',
'optional': 'Optional',
'loading': 'Loading…',
'saving': 'Saving…',
'deleting': 'Deleting…',
'chooseRecord': 'Select a client to view and edit its details.',
'confirmDelete': 'Confirm deletion of the selected client?',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'newRecord': 'Nuevo cliente',
'required': 'Obligatorio',
'optional': 'Opcional',
'loading': 'Cargando…',
'saving': 'Guardando…',
'deleting': 'Eliminando…',
'chooseRecord': 'Seleccione un cliente para ver y editar sus datos.',
'confirmDelete': '¿Confirma la eliminación del cliente seleccionado?',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--client-catalogue-102046')
export class BuildFlowFsmDesktopPage21ClientCataloguePage extends BuildFlowFsmClientCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
<section class="mx-auto max-w-7xl space-y-6" aria-label=${msg['workspace.title']}>
${this.renderList()}
<div class="grid gap-6 lg:grid-cols-2">
${this.renderUpdate()}
${this.renderCreate()}
</div>
</section>
</main>`;
}
renderList() {
const msg = this.msg;
if (this.qryListClientState === 'loading' && this.qryListClientData.length === 0) {
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6" aria-busy="true"><p class="text-[var(--text-muted,#64748b)]">${msg['loading']}</p></section>`;
}
const rows: QryListClientOutput[] = this.qryListClientData;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-[var(--shadow-small,none)]">
<div class="mb-4 flex items-center justify-between gap-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2><button type="button" class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryListClientClick(event)}>${msg['list.title']}</button></div>
${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="px-3 py-2">${msg['clientId']}</th><th class="px-3 py-2">${msg['clientName']}</th><th class="px-3 py-2">${msg['contactEmail']}</th><th class="px-3 py-2">${msg['contactPhone']}</th></tr></thead><tbody>${rows.map((item: QryListClientOutput) => html`<tr class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${item.clientId === this.cmdUpdateClientClientId ? 'bg-[var(--selected-bg,#f1f5f9)]' : ''}" @click=${() => { this.setCmdUpdateClientClientId(item.clientId); this.setCmdDeleteClientClientId(item.clientId); this.setCmdUpdateClientClientName(item.clientName); this.setCmdUpdateClientContactEmail(item.contactEmail ?? ''); this.setCmdUpdateClientContactPhone(item.contactPhone ?? ''); }}><td class="px-3 py-3">${item.clientId}</td><td class="px-3 py-3 font-medium">${item.clientName}</td><td class="px-3 py-3">${item.contactEmail ?? nothing}</td><td class="px-3 py-3">${item.contactPhone ?? nothing}</td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderUpdate() {
const msg = this.msg;
const selected = this.cmdUpdateClientClientId.length > 0;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['update.title']}</h2>${selected ? html`<form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdUpdateClientClick(event); }}><h3 class="text-base font-medium">${msg['update.form']}</h3>${this.renderUpdateField(msg['update.name'], this.cmdUpdateClientClientName, (event: Event) => this.handleCmdUpdateClientClientNameChange(event), true)}${this.renderUpdateField(msg['update.email'], this.cmdUpdateClientContactEmail, (event: Event) => this.handleCmdUpdateClientContactEmailChange(event), false)}${this.renderUpdateField(msg['update.phone'], this.cmdUpdateClientContactPhone, (event: Event) => this.handleCmdUpdateClientContactPhoneChange(event), false)}${this.renderFeedback(this.cmdUpdateClientState, this.cmdUpdateClientError, msg['update.success'], msg['update.error'], msg['update.action'])}<div class="flex flex-wrap gap-3"><button type="submit" ?disabled=${this.cmdUpdateClientState === 'loading' || this.cmdUpdateClientClientName.trim() === ''} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${this.cmdUpdateClientState === 'loading' ? msg['saving'] : msg['update.action']}</button><button type="button" ?disabled=${this.cmdDeleteClientState === 'loading'} class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" @click=${() => { if (window.confirm(msg['confirmDelete'])) this.handleCmdDeleteClientClick(); }}>${this.cmdDeleteClientState === 'loading' ? msg['deleting'] : msg['delete.action']}</button></div></form>` : html`<p class="text-[var(--text-muted,#64748b)]">${msg['chooseRecord']}</p>`}</section>`;
}
renderUpdateField(label: string, value: string, handler: (event: Event) => void, required: boolean) {
const msg = this.msg;
return html`<label class="block space-y-1"><span class="block text-sm font-medium">${label} <span class="text-[var(--text-muted,#64748b)]">${required ? msg['required'] : msg['optional']}</span></span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} ?required=${required} @input=${handler}></label>`;
}
renderCreate() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"><h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['create.title']}</h2><form class="space-y-4" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateClientClick(event); }}><h3 class="text-base font-medium">${msg['create.form']}</h3>${this.renderCreateField(msg['create.name'], this.cmdCreateClientClientName, (event: Event) => this.handleCmdCreateClientClientNameChange(event), true)}${this.renderCreateField(msg['create.email'], this.cmdCreateClientContactEmail, (event: Event) => this.handleCmdCreateClientContactEmailChange(event), false)}${this.renderCreateField(msg['create.phone'], this.cmdCreateClientContactPhone, (event: Event) => this.handleCmdCreateClientContactPhoneChange(event), false)}${this.renderFeedback(this.cmdCreateClientState, this.cmdCreateClientError, msg['create.success'], msg['create.error'], msg['create.action'])}<button type="submit" ?disabled=${this.cmdCreateClientState === 'loading' || this.cmdCreateClientClientName.trim() === ''} class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${this.cmdCreateClientState === 'loading' ? msg['saving'] : msg['create.action']}</button></form></section>`;
}
renderCreateField(label: string, value: string, handler: (event: Event) => void, required: boolean) {
const msg = this.msg;
return html`<label class="block space-y-1"><span class="block text-sm font-medium">${label} <span class="text-[var(--text-muted,#64748b)]">${required ? msg['required'] : msg['optional']}</span></span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} ?required=${required} @input=${handler}></label>`;
}
renderFeedback(state: 'idle' | 'loading' | 'success' | 'error', error: string, success: string, fallbackError: string, action: string) {
return state === 'success' ? html`<p role="status" class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${success}</p>` : state === 'error' ? html`<div role="alert" class="space-y-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]"><p>${error || fallbackError}</p><button type="button" class="underline" @click=${(event: Event) => action === this.msg['create.action'] ? this.handleCmdCreateClientClick(event) : this.handleCmdUpdateClientClick(event)}>${action}</button></div>` : nothing;
}
}
