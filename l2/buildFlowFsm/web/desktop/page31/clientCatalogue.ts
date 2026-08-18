/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'clients.listSection': m['section.clientCatalogue.recordList.title'],
  'clients.listTitle': m['intent.clientCatalogue.qryListClient.list.title'],
  'clients.empty': m['intent.clientCatalogue.qryListClient.list.empty'],
  'clients.id': m['intent.clientCatalogue.qryListClient.list.column.clientId.label'],
  'clients.name': m['intent.clientCatalogue.qryListClient.list.column.clientName.label'],
  'clients.email': m['intent.clientCatalogue.qryListClient.list.column.contactEmail.label'],
  'clients.phone': m['intent.clientCatalogue.qryListClient.list.column.contactPhone.label'],
  'clients.deleteTitle': m['organism.clientCatalogue.cmdDeleteClient.title'],
  'clients.deleteAction': m['intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient'],
  'clients.formSection': m['section.clientCatalogue.recordForm.title'],
  'clients.createTitle': m['organism.clientCatalogue.cmdCreateClient.title'],
  'clients.createForm': m['intent.clientCatalogue.cmdCreateClient.form.title'],
  'clients.createAction': m['intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient'],
  'clients.createName': m['intent.clientCatalogue.cmdCreateClient.form.field.clientName.label'],
  'clients.createEmail': m['intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label'],
  'clients.createPhone': m['intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label'],
  'clients.updateTitle': m['organism.clientCatalogue.cmdUpdateClient.title'],
  'clients.updateForm': m['intent.clientCatalogue.cmdUpdateClient.form.title'],
  'clients.updateAction': m['intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient'],
  'clients.updateName': m['intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label'],
  'clients.updateEmail': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label'],
  'clients.updatePhone': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label'],
  'clients.createSuccess': m['action.cmdCreateClient.success'],
  'clients.createError': m['action.cmdCreateClient.error'],
  'clients.updateSuccess': m['action.cmdUpdateClient.success'],
  'clients.updateError': m['action.cmdUpdateClient.error'],
  'clients.deleteSuccess': m['action.cmdDeleteClient.success'],
  'clients.deleteError': m['action.cmdDeleteClient.error'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'clients.newRecord': 'Novo cliente',
  'clients.selectedRecord': 'Cliente selecionado',
  'clients.chooseRecord': 'Selecione um cliente para editar ou excluir.',
  'clients.loading': 'Carregando clientes…',
  'clients.required': 'Obrigatório',
  'clients.confirmDelete': 'Deseja excluir este cliente?',
  'clients.saving': 'Salvando…',
  'clients.deleting': 'Excluindo…',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'clients.newRecord': 'Novo cliente',
  'clients.selectedRecord': 'Cliente selecionado',
  'clients.chooseRecord': 'Selecione um cliente para editar ou excluir.',
  'clients.loading': 'Carregando clientes…',
  'clients.required': 'Obrigatório',
  'clients.confirmDelete': 'Deseja excluir este cliente?',
  'clients.saving': 'Salvando…',
  'clients.deleting': 'Excluindo…',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'clients.newRecord': 'New client',
  'clients.selectedRecord': 'Selected client',
  'clients.chooseRecord': 'Select a client to edit or delete.',
  'clients.loading': 'Loading clients…',
  'clients.required': 'Required',
  'clients.confirmDelete': 'Delete this client?',
  'clients.saving': 'Saving…',
  'clients.deleting': 'Deleting…',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'clients.newRecord': 'Nuevo cliente',
  'clients.selectedRecord': 'Cliente seleccionado',
  'clients.chooseRecord': 'Seleccione un cliente para editar o eliminar.',
  'clients.loading': 'Cargando clientes…',
  'clients.required': 'Obligatorio',
  'clients.confirmDelete': '¿Eliminar este cliente?',
  'clients.saving': 'Guardando…',
  'clients.deleting': 'Eliminando…',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--client-catalogue-102046')
export class BuildFlowFsmDesktopPage31ClientCataloguePage extends BuildFlowFsmClientCatalogueBase {
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
return html`<main class="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,1fr)] p-6 bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
  ${this.renderList(msg)}
  ${this.renderWorkspace(msg)}
</main>`;
}
renderList(msg: PageMessageType) {
const rows: QryListClientOutput[] = this.qryListClientData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden" aria-labelledby="client-list-title">
  <div class="p-4 border-b border-[var(--border-subtle,#e2e8f0)]"><h2 id="client-list-title" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['clients.listSection']}</h2></div>
  ${this.qryListClientState === 'loading' ? html`<div class="p-6 text-[var(--text-muted,#64748b)]" role="status">${msg['clients.loading']}</div>` : rows.length === 0 ? html`<div class="p-6 text-[var(--text-muted,#64748b)]">${msg['clients.empty']}</div>` : html`<div class="overflow-x-auto"><table class="w-full text-left"><caption class="sr-only">${msg['clients.listTitle']}</caption><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-sm text-[var(--text-muted,#64748b)]"><th class="p-3">${msg['clients.id']}</th><th class="p-3">${msg['clients.name']}</th><th class="p-3">${msg['clients.email']}</th><th class="p-3">${msg['clients.phone']}</th><th class="p-3"><span class="sr-only">${msg['clients.deleteTitle']}</span></th></tr></thead><tbody>
  ${rows.map((item: QryListClientOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)] ${this.cmdUpdateClientClientId === item.clientId ? 'bg-[var(--selected-bg,#eff6ff)]' : ''}">
    <td class="p-3"><button class="text-left underline-offset-2 hover:underline" @click=${() => { this.setCmdUpdateClientClientId(item.clientId); this.setCmdUpdateClientClientName(item.clientName); this.setCmdUpdateClientContactEmail(item.contactEmail ?? ''); this.setCmdUpdateClientContactPhone(item.contactPhone ?? ''); }}>${item.clientId}</button></td>
    <td class="p-3">${item.clientName}</td><td class="p-3">${item.contactEmail ?? nothing}</td><td class="p-3">${item.contactPhone ?? nothing}</td>
    <td class="p-3"><button class="rounded-md px-3 py-2 bg-[var(--button-danger-bg,#b91c1c)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteClientState === 'loading'} @click=${() => { if (window.confirm(msg['clients.confirmDelete'])) { this.setCmdDeleteClientClientId(item.clientId); this.cmdDeleteClient(); } }}>${this.cmdDeleteClientState === 'loading' && this.cmdDeleteClientClientId === item.clientId ? msg['clients.deleting'] : msg['clients.deleteAction']}</button></td>
  </tr>`)}
</tbody></table></div>`}
</section>`;
}
renderWorkspace(msg: PageMessageType) {
const hasSelection = this.cmdUpdateClientClientId.length > 0;
return html`<section class="space-y-6" aria-labelledby="client-workspace-title">
  <div class="sr-only" id="client-workspace-title">${msg['clients.formSection']}</div>
  ${hasSelection ? this.renderUpdate(msg) : html`<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><p class="text-[var(--text-muted,#64748b)]">${msg['clients.chooseRecord']}</p></div>`}
  ${this.renderCreate(msg)}
</section>`;
}
renderUpdate(msg: PageMessageType) {
const busy = this.cmdUpdateClientState === 'loading';
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><div class="mb-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['clients.selectedRecord']}</h2><p class="text-sm text-[var(--text-muted,#64748b)]">${this.cmdUpdateClientClientId}</p></div>
  <form class="grid gap-4" @submit=${(event: Event) => { event.preventDefault(); if (this.cmdUpdateClientClientName.trim()) this.cmdUpdateClient(); }}>
    <label class="grid gap-1">${msg['clients.updateName']} <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['clients.required']}</span><input required .value=${this.cmdUpdateClientClientName} @input=${this.handleCmdUpdateClientClientNameChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
    <label class="grid gap-1">${msg['clients.updateEmail']}<input type="email" .value=${this.cmdUpdateClientContactEmail} @input=${this.handleCmdUpdateClientContactEmailChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
    <label class="grid gap-1">${msg['clients.updatePhone']}<input .value=${this.cmdUpdateClientContactPhone} @input=${this.handleCmdUpdateClientContactPhoneChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
    ${this.cmdUpdateClientState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]" role="status">${msg['clients.updateSuccess']}</p>` : this.cmdUpdateClientState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]" role="alert">${this.cmdUpdateClientError || msg['clients.updateError']}</p>` : nothing}
    <button type="submit" ?disabled=${busy || !this.cmdUpdateClientClientName.trim()} class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${busy ? msg['clients.saving'] : msg['clients.updateAction']}</button>
  </form></article>`;
}
renderCreate(msg: PageMessageType) {
const busy = this.cmdCreateClientState === 'loading';
return html`<article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['clients.newRecord']}</h2><form class="grid gap-4" @submit=${(event: Event) => { event.preventDefault(); if (this.cmdCreateClientClientName.trim()) this.cmdCreateClient(); }}>
<label class="grid gap-1">${msg['clients.createName']} <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['clients.required']}</span><input required .value=${this.cmdCreateClientClientName} @input=${this.handleCmdCreateClientClientNameChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
<label class="grid gap-1">${msg['clients.createEmail']}<input type="email" .value=${this.cmdCreateClientContactEmail} @input=${this.handleCmdCreateClientContactEmailChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
<label class="grid gap-1">${msg['clients.createPhone']}<input .value=${this.cmdCreateClientContactPhone} @input=${this.handleCmdCreateClientContactPhoneChange} class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" /></label>
${this.cmdCreateClientState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]" role="status">${msg['clients.createSuccess']}</p>` : this.cmdCreateClientState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]" role="alert">${this.cmdCreateClientError || msg['clients.createError']}</p>` : nothing}
<button type="submit" ?disabled=${busy || !this.cmdCreateClientClientName.trim()} class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50">${busy ? msg['clients.saving'] : msg['clients.createAction']}</button>
</form></article>`;
}
}
