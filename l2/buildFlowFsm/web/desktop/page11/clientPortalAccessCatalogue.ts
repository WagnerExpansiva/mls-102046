/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/clientPortalAccessCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientPortalAccessCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.js';
import type { QryListClientPortalAccessOutput, QryClientPickerOutput } from '/_102046_/l2/buildFlowFsm/web/shared/clientPortalAccessCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'records.title': m['section.clientPortalAccessCatalogue.recordList.title'],
'accessList.title': m['organism.clientPortalAccessCatalogue.qryListClientPortalAccess.title'],
'accessList.heading': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title'],
'accessList.empty': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty'],
'accessList.id': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label'],
'accessList.client': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label'],
'accessList.user': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label'],
'accessList.status': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label'],
'clientPicker.title': m['organism.clientPortalAccessCatalogue.qryClientPicker.title'],
'clientPicker.heading': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.title'],
'clientPicker.empty': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.empty'],
'clientPicker.id': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label'],
'clientPicker.name': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label'],
'clientPicker.email': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label'],
'clientPicker.phone': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label'],
'update.title': m['organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title'],
'update.heading': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title'],
'update.action': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess'],
'update.user': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label'],
'update.status': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label'],
'delete.title': m['organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title'],
'delete.heading': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title'],
'delete.action': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess'],
'forms.title': m['section.clientPortalAccessCatalogue.recordForm.title'],
'create.title': m['organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title'],
'create.heading': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title'],
'create.action': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess'],
'create.user': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label'],
'create.status': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.status.label'],
'create.success': m['action.cmdCreateClientPortalAccess.success'],
'create.error': m['action.cmdCreateClientPortalAccess.error'],
'update.success': m['action.cmdUpdateClientPortalAccess.success'],
'update.error': m['action.cmdUpdateClientPortalAccess.error'],
'delete.success': m['action.cmdDeleteClientPortalAccess.success'],
'delete.error': m['action.cmdDeleteClientPortalAccess.error'],
'workspace.title': m['section.clientPortalAccessCatalogue.accessRecordsWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'page.loading': 'Carregando registros…', 'page.selectClient': 'Selecione um cliente', 'page.selectRecord': 'Selecione um vínculo', 'page.actorSession': 'Usuário da sessão atual', 'page.systemDefault': 'Valor padrão do sistema', 'page.confirmDelete': 'Confirme a exclusão do vínculo selecionado', 'page.confirm': 'Confirmar', 'page.cancelHint': 'Feche esta confirmação para cancelar',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'page.loading': 'Carregando registros…', 'page.selectClient': 'Selecione um cliente', 'page.selectRecord': 'Selecione um vínculo', 'page.actorSession': 'Usuário da sessão atual', 'page.systemDefault': 'Valor padrão do sistema', 'page.confirmDelete': 'Confirme a exclusão do vínculo selecionado', 'page.confirm': 'Confirmar', 'page.cancelHint': 'Feche esta confirmação para cancelar',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'page.loading': 'Loading records…', 'page.selectClient': 'Select a client', 'page.selectRecord': 'Select an access link', 'page.actorSession': 'Current session user', 'page.systemDefault': 'System default', 'page.confirmDelete': 'Confirm deletion of the selected access link', 'page.confirm': 'Confirm', 'page.cancelHint': 'Close this confirmation to cancel',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'page.loading': 'Cargando registros…', 'page.selectClient': 'Seleccione un cliente', 'page.selectRecord': 'Seleccione un vínculo', 'page.actorSession': 'Usuario de la sesión actual', 'page.systemDefault': 'Valor predeterminado del sistema', 'page.confirmDelete': 'Confirme la eliminación del vínculo seleccionado', 'page.confirm': 'Confirmar', 'page.cancelHint': 'Cierre esta confirmación para cancelar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--client-portal-access-catalogue-102046')
export class BuildFlowFsmDesktopPage11ClientPortalAccessCataloguePage extends BuildFlowFsmClientPortalAccessCatalogueBase {
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
return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6">${this.renderAccessList()}${this.renderClientPicker()}${this.renderCreateForm()}${this.renderUpdateForm()}${this.renderDeleteForm()}</div></main>`;
}
renderAccessList() {
const msg = this.msg;
const rows: QryListClientPortalAccessOutput[] = this.qryListClientPortalAccessData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"><div class="flex items-center justify-between gap-4"><div><h1 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['accessList.title']}</h1><h2 class="text-base font-medium">${msg['accessList.heading']}</h2></div><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-3 py-2" @click=${this.handleQryListClientPortalAccessClick}>${this.qryListClientPortalAccessState === 'loading' ? msg['page.loading'] : msg['workspace.title']}</button></div>${this.qryListClientPortalAccessState === 'loading' ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['page.loading']}</p>` : rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['accessList.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left"><th class="p-2">${msg['accessList.id']}</th><th class="p-2">${msg['accessList.client']}</th><th class="p-2">${msg['accessList.user']}</th><th class="p-2">${msg['accessList.status']}</th></tr></thead><tbody>${rows.map((item: QryListClientPortalAccessOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${item.clientPortalAccessId}</td><td class="p-2">${item.clientId}</td><td class="p-2">${item.platformUserId}</td><td class="p-2">${item.status}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderClientPicker() {
const msg = this.msg;
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['clientPicker.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] px-3 py-2" @click=${this.handleQryClientPickerClick}>${msg['clientPicker.heading']}</button></div>${this.qryClientPickerState === 'loading' ? html`<p>${msg['page.loading']}</p>` : clients.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['clientPicker.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left"><th class="p-2">${msg['clientPicker.id']}</th><th class="p-2">${msg['clientPicker.name']}</th><th class="p-2">${msg['clientPicker.email']}</th><th class="p-2">${msg['clientPicker.phone']}</th></tr></thead><tbody>${clients.map((client: QryClientPickerOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><td class="p-2">${client.clientId}</td><td class="p-2">${client.clientName}</td><td class="p-2">${client.contactEmail}</td><td class="p-2">${client.contactPhone}</td></tr>`)}</tbody></table></div>`}</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><h3 class="text-base font-medium">${msg['create.heading']}</h3><label class="block text-sm">${msg['accessList.client']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateClientPortalAccessClientId} @change=${this.handleCmdCreateClientPortalAccessClientIdChange}><option value="">${msg['page.selectClient']}</option>${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.user']}: ${msg['page.actorSession']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.status']}: ${msg['page.systemDefault']}</p><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdCreateClientPortalAccessState === 'loading'} @click=${this.handleCmdCreateClientPortalAccessClick}>${this.cmdCreateClientPortalAccessState === 'loading' ? msg['page.loading'] : msg['create.action']}</button>${this.cmdCreateClientPortalAccessState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['create.success']}</p>` : this.cmdCreateClientPortalAccessState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdCreateClientPortalAccessError || msg['create.error']}</p>` : nothing}</section>`;
}
renderUpdateForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['update.title']}</h2><h3 class="text-base font-medium">${msg['update.heading']}</h3><label class="block text-sm">${msg['accessList.id']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateClientPortalAccessClientPortalAccessId} @change=${this.handleCmdUpdateClientPortalAccessClientPortalAccessIdChange}><option value="">${msg['page.selectRecord']}</option>${(this.qryListClientPortalAccessData ?? []).map((item: QryListClientPortalAccessOutput) => html`<option value=${item.clientPortalAccessId}>${item.clientPortalAccessId}</option>`)}</select></label><label class="block text-sm">${msg['accessList.client']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateClientPortalAccessClientId} @change=${this.handleCmdUpdateClientPortalAccessClientIdChange}><option value="">${msg['page.selectClient']}</option>${(this.qryClientPickerData ?? []).map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName}</option>`)}</select></label><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.user']}: ${msg['page.actorSession']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.status']}: ${msg['page.systemDefault']}</p><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdUpdateClientPortalAccessState === 'loading'} @click=${this.handleCmdUpdateClientPortalAccessClick}>${this.cmdUpdateClientPortalAccessState === 'loading' ? msg['page.loading'] : msg['update.action']}</button>${this.cmdUpdateClientPortalAccessState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['update.success']}</p>` : this.cmdUpdateClientPortalAccessState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdUpdateClientPortalAccessError || msg['update.error']}</p>` : nothing}</section>`;
}
renderDeleteForm() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"><h2 class="text-lg font-semibold">${msg['delete.title']}</h2><h3 class="text-base font-medium">${msg['delete.heading']}</h3><label class="block text-sm">${msg['accessList.id']}<select class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdDeleteClientPortalAccessClientPortalAccessId} @change=${this.handleCmdDeleteClientPortalAccessClientPortalAccessIdChange}><option value="">${msg['page.selectRecord']}</option>${(this.qryListClientPortalAccessData ?? []).map((item: QryListClientPortalAccessOutput) => html`<option value=${item.clientPortalAccessId}>${item.clientPortalAccessId}</option>`)}</select></label><details><summary class="cursor-pointer text-sm text-[var(--text-muted,#64748b)]">${msg['page.confirmDelete']}</summary><div class="mt-3 flex items-center gap-3"><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] px-4 py-2 disabled:opacity-50" ?disabled=${this.cmdDeleteClientPortalAccessState === 'loading'} @click=${this.handleCmdDeleteClientPortalAccessClick}>${this.cmdDeleteClientPortalAccessState === 'loading' ? msg['page.loading'] : msg['delete.action']}</button><span class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.cancelHint']}</span></div></details>${this.cmdDeleteClientPortalAccessState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-2">${msg['delete.success']}</p>` : this.cmdDeleteClientPortalAccessState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-2">${this.cmdDeleteClientPortalAccessError || msg['delete.error']}</p>` : nothing}</section>`;
}
}
