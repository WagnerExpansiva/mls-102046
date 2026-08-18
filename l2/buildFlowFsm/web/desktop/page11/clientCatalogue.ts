/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'list.sectionTitle': m['section.clientCatalogue.recordList.title'],
  'list.title': m['intent.clientCatalogue.qryListClient.list.title'],
  'list.empty': m['intent.clientCatalogue.qryListClient.list.empty'],
  'list.clientId': m['intent.clientCatalogue.qryListClient.list.column.clientId.label'],
  'list.clientName': m['intent.clientCatalogue.qryListClient.list.column.clientName.label'],
  'list.contactEmail': m['intent.clientCatalogue.qryListClient.list.column.contactEmail.label'],
  'list.contactPhone': m['intent.clientCatalogue.qryListClient.list.column.contactPhone.label'],
  'delete.organismTitle': m['organism.clientCatalogue.cmdDeleteClient.title'],
  'delete.title': m['intent.clientCatalogue.cmdDeleteClient.form.title'],
  'delete.action': m['intent.clientCatalogue.cmdDeleteClient.form.action.cmdDeleteClient'],
  'recordForm.sectionTitle': m['section.clientCatalogue.recordForm.title'],
  'create.organismTitle': m['organism.clientCatalogue.cmdCreateClient.title'],
  'create.title': m['intent.clientCatalogue.cmdCreateClient.form.title'],
  'create.action': m['intent.clientCatalogue.cmdCreateClient.form.action.cmdCreateClient'],
  'create.clientName': m['intent.clientCatalogue.cmdCreateClient.form.field.clientName.label'],
  'create.contactEmail': m['intent.clientCatalogue.cmdCreateClient.form.field.contactEmail.label'],
  'create.contactPhone': m['intent.clientCatalogue.cmdCreateClient.form.field.contactPhone.label'],
  'update.organismTitle': m['organism.clientCatalogue.cmdUpdateClient.title'],
  'update.title': m['intent.clientCatalogue.cmdUpdateClient.form.title'],
  'update.action': m['intent.clientCatalogue.cmdUpdateClient.form.action.cmdUpdateClient'],
  'update.clientName': m['intent.clientCatalogue.cmdUpdateClient.form.field.clientName.label'],
  'update.contactEmail': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactEmail.label'],
  'update.contactPhone': m['intent.clientCatalogue.cmdUpdateClient.form.field.contactPhone.label'],
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
@customElement('build-flow-fsm--web--desktop--page11--client-catalogue-102046')
export class BuildFlowFsmDesktopPage11ClientCataloguePage extends BuildFlowFsmClientCatalogueBase {
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
return html`
  <div class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
    <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['workspace.title']}</h1>
      ${this.renderClientList()}
      ${this.renderRecordForms()}
    </div>
  </div>
`;
}
renderClientList() {
const msg = this.msg;
const rows: QryListClientOutput[] = this.qryListClientData ?? [];
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-4">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['list.sectionTitle']}</h2>
      <button type="button" class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2" @click=${this.handleQryListClientClick} ?disabled=${this.qryListClientState === 'loading'}>
        ${this.qryListClientState === 'loading' ? '…' : msg['list.title']}
      </button>
    </div>
    <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">${msg['list.title']}</h3>
    ${this.qryListClientState === 'loading' ? html`<div class="animate-pulse rounded-md bg-[var(--surface-alt-bg,#f8fafc)] h-24" aria-label=${msg['list.title']}></div>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
            <th class="px-3 py-2">${msg['list.clientId']}</th><th class="px-3 py-2">${msg['list.clientName']}</th><th class="px-3 py-2">${msg['list.contactEmail']}</th><th class="px-3 py-2">${msg['list.contactPhone']}</th>
          </tr></thead>
          <tbody>${rows.map((item: QryListClientOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
            <td class="px-3 py-2">${item.clientId}</td><td class="px-3 py-2">${item.clientName}</td><td class="px-3 py-2">${item.contactEmail ?? nothing}</td><td class="px-3 py-2">${item.contactPhone ?? nothing}</td>
          </tr>`)}</tbody>
        </table>
      </div>`}
  </section>
`;
}
renderRecordForms() {
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-5 space-y-6">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${this.msg['recordForm.sectionTitle']}</h2>
    ${this.renderCreateForm()}
    ${this.renderUpdateForm()}
    ${this.renderDeleteForm()}
  </section>
`;
}
renderCreateForm() {
const msg = this.msg;
return html`<form class="border-t border-[var(--border-subtle,#e2e8f0)] pt-5 space-y-3" @submit=${this.handleCmdCreateClientClick}>
  <h3 class="text-base font-medium">${msg['create.title']}</h3>
  <label class="block">${msg['create.clientName']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdCreateClientClientName} @input=${this.handleCmdCreateClientClientNameChange}></label>
  <label class="block">${msg['create.contactEmail']}<input type="email" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdCreateClientContactEmail} @input=${this.handleCmdCreateClientContactEmailChange}></label>
  <label class="block">${msg['create.contactPhone']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdCreateClientContactPhone} @input=${this.handleCmdCreateClientContactPhoneChange}></label>
  <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" ?disabled=${this.cmdCreateClientState === 'loading'}>${this.cmdCreateClientState === 'loading' ? '…' : msg['create.action']}</button>
  ${this.cmdCreateClientState === 'success' ? html`<p role="status" class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateClientState === 'error' ? html`<p role="alert" class="text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateClientError || msg['create.error']}</p>` : nothing}
</form>`;
}
renderUpdateForm() {
const msg = this.msg;
const rows: QryListClientOutput[] = this.qryListClientData ?? [];
return html`<form class="border-t border-[var(--border-subtle,#e2e8f0)] pt-5 space-y-3" @submit=${this.handleCmdUpdateClientClick}>
  <h3 class="text-base font-medium">${msg['update.title']}</h3>
  <label class="block">${msg['list.clientId']}<select required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdUpdateClientClientId} @change=${this.handleCmdUpdateClientClientIdChange}><option value=""></option>${rows.map((item: QryListClientOutput) => html`<option value=${item.clientId}>${item.clientName}</option>`)}</select></label>
  <label class="block">${msg['update.clientName']}<input required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] px-3 py-2" .value=${this.cmdUpdateClientClientName} @input=${this.handleCmdUpdateClientClientNameChange}></label>
  <label class="block">${msg['update.contactEmail']}<input type="email" class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] px-3 py-2" .value=${this.cmdUpdateClientContactEmail} @input=${this.handleCmdUpdateClientContactEmailChange}></label>
  <label class="block">${msg['update.contactPhone']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] px-3 py-2" .value=${this.cmdUpdateClientContactPhone} @input=${this.handleCmdUpdateClientContactPhoneChange}></label>
  <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" ?disabled=${this.cmdUpdateClientState === 'loading'}>${this.cmdUpdateClientState === 'loading' ? '…' : msg['update.action']}</button>
  ${this.cmdUpdateClientState === 'success' ? html`<p role="status" class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateClientState === 'error' ? html`<p role="alert" class="text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateClientError || msg['update.error']}</p>` : nothing}
</form>`;
}
renderDeleteForm() {
const msg = this.msg;
const rows: QryListClientOutput[] = this.qryListClientData ?? [];
return html`<form class="border-t border-[var(--border-subtle,#e2e8f0)] pt-5 space-y-3" @submit=${this.handleCmdDeleteClientClick}>
  <h3 class="text-base font-medium">${msg['delete.title']}</h3>
  <label class="block">${msg['list.clientId']}<select required class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${this.cmdDeleteClientClientId} @change=${this.handleCmdDeleteClientClientIdChange}><option value=""></option>${rows.map((item: QryListClientOutput) => html`<option value=${item.clientId}>${item.clientName}</option>`)}</select></label>
  <button type="submit" class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2" ?disabled=${this.cmdDeleteClientState === 'loading'}>${this.cmdDeleteClientState === 'loading' ? '…' : msg['delete.action']}</button>
  ${this.cmdDeleteClientState === 'success' ? html`<p role="status" class="text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteClientState === 'error' ? html`<p role="alert" class="text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteClientError || msg['delete.error']}</p>` : nothing}
</form>`;
}
}