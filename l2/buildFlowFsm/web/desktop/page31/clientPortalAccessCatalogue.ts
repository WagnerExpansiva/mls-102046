/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/clientPortalAccessCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'recordList.title': m['section.clientPortalAccessCatalogue.recordList.title'],
  'accessList.title': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.title'],
  'accessList.empty': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty'],
  'accessId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label'],
  'clientId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label'],
  'platformUserId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label'],
  'status.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label'],
  'picker.title': m['organism.clientPortalAccessCatalogue.qryClientPicker.title'],
  'picker.list.title': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.title'],
  'picker.empty': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.empty'],
  'picker.clientId.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label'],
  'picker.clientName.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label'],
  'picker.contactEmail.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label'],
  'picker.contactPhone.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label'],
  'update.title': m['organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title'],
  'update.form.title': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title'],
  'update.action': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess'],
  'update.platformUserId': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label'],
  'update.status': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label'],
  'delete.title': m['organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title'],
  'delete.form.title': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title'],
  'delete.action': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess'],
  'form.title': m['section.clientPortalAccessCatalogue.recordForm.title'],
  'create.title': m['organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title'],
  'create.form.title': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title'],
  'create.action': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.action.cmdCreateClientPortalAccess'],
  'create.platformUserId': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.field.platformUserId.label'],
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
  'select.client': 'Selecione o cliente',
  'selected.record': 'Vínculo selecionado',
  'choose.record': 'Escolha um vínculo para ver os detalhes',
  'context.note': 'Os dados do usuário e o estado são definidos pelo contexto do sistema.',
  'loading': 'Carregando…',
  'create.feedback': 'Vínculo criado com sucesso.',
  'update.feedback': 'Vínculo atualizado com sucesso.',
  'delete.feedback': 'Vínculo excluído com sucesso.',
  'confirm.delete': 'Excluir este vínculo de acesso?',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'select.client': 'Selecione o cliente', 'selected.record': 'Vínculo selecionado', 'choose.record': 'Escolha um vínculo para ver os detalhes',
  'context.note': 'Os dados do usuário e o estado são definidos pelo contexto do sistema.', 'loading': 'Carregando…',
  'create.feedback': 'Vínculo criado com sucesso.', 'update.feedback': 'Vínculo atualizado com sucesso.', 'delete.feedback': 'Vínculo excluído com sucesso.',
  'confirm.delete': 'Excluir este vínculo de acesso?',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
  'select.client': 'Select the client', 'selected.record': 'Selected access link', 'choose.record': 'Choose an access link to view its details',
  'context.note': 'The user data and status are set by the system context.', 'loading': 'Loading…',
  'create.feedback': 'Access link created successfully.', 'update.feedback': 'Access link updated successfully.', 'delete.feedback': 'Access link deleted successfully.',
  'confirm.delete': 'Delete this client access link?',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
  'select.client': 'Seleccione el cliente', 'selected.record': 'Vínculo seleccionado', 'choose.record': 'Elija un vínculo para ver los detalles',
  'context.note': 'Los datos del usuario y el estado los define el contexto del sistema.', 'loading': 'Cargando…',
  'create.feedback': 'Vínculo creado correctamente.', 'update.feedback': 'Vínculo actualizado correctamente.', 'delete.feedback': 'Vínculo eliminado correctamente.',
  'confirm.delete': '¿Eliminar este vínculo de acceso?',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--client-portal-access-catalogue-102046')
export class BuildFlowFsmDesktopPage31ClientPortalAccessCataloguePage extends BuildFlowFsmClientPortalAccessCatalogueBase {
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
  ${this.renderIdentityHeader()}
  <div class="mt-6 grid gap-6 lg:grid-cols-2">
    ${this.renderAccessList()}
    ${this.renderDetailPanel()}
  </div>
  <section class="mt-6 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['form.title']}</h2>
    ${this.renderCreatePanel()}
  </section>
</main>`;
}
renderIdentityHeader() {
const msg = this.msg;
const selected = this.qryListClientPortalAccessData.find((item: QryListClientPortalAccessOutput) => item.clientPortalAccessId === this.cmdUpdateClientPortalAccessClientPortalAccessId);
const client = selected ? this.qryClientPickerData.find((item: QryClientPickerOutput) => item.clientId === selected.clientId) : undefined;
return html`<header class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 3px rgba(0,0,0,.1))]">
  <div class="flex flex-wrap items-center justify-between gap-4">
    <div><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['workspace.title']}</p>
    <p class="mt-1 text-xl font-bold text-[var(--text-strong,#0f172a)]">${client?.clientName ?? selected?.clientId ?? msg['choose.record']}</p></div>
    ${selected ? html`<span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-sm text-[var(--status-info-text,#1e3a8a)]">${selected.status}</span>` : nothing}
  </div>
</header>`;
}
renderAccessList() {
const msg = this.msg;
const rows = this.qryListClientPortalAccessData;
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
  <div class="flex items-center justify-between gap-3"><h2 class="text-lg font-semibold">${msg['accessList.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" @click=${this.handleQryListClientPortalAccessClick}>${msg['accessList.title']}</button></div>
  ${this.qryListClientPortalAccessState === 'loading' ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : rows.length === 0 ? html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['accessList.empty']}</p>` : html`<div class="mt-4 space-y-2">${rows.map((item: QryListClientPortalAccessOutput) => html`<button class="block w-full rounded-md border p-4 text-left ${item.clientPortalAccessId === this.cmdUpdateClientPortalAccessClientPortalAccessId ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-subtle,#e2e8f0)]'}" @click=${() => { this.setCmdUpdateClientPortalAccessClientPortalAccessId(item.clientPortalAccessId); this.setCmdUpdateClientPortalAccessClientId(item.clientId); this.setCmdUpdateClientPortalAccessPlatformUserId(item.platformUserId); this.setCmdUpdateClientPortalAccessStatus(item.status); }}><div class="font-medium">${item.clientId}</div><div class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['status.label']}: ${item.status}</div></button>`)}</div>`}
</section>`;
}
renderClientPicker(isCreate: boolean) {
const msg = this.msg;
const selected = isCreate ? this.cmdCreateClientPortalAccessClientId : this.cmdUpdateClientPortalAccessClientId;
const handler = isCreate ? this.handleCmdCreateClientPortalAccessClientIdChange : this.handleCmdUpdateClientPortalAccessClientIdChange;
return html`<label class="block"><span class="text-sm font-medium">${msg['picker.clientName.label']}</span><select class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] p-2" .value=${selected} @change=${handler}><option value="">${msg['select.client']}</option>${this.qryClientPickerData.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName} — ${client.contactEmail}</option>`)}</select></label>`;
}
renderDetailPanel() {
const msg = this.msg;
const selected = this.cmdUpdateClientPortalAccessClientPortalAccessId !== '';
return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h2 class="text-lg font-semibold">${msg['selected.record']}</h2>${selected ? html`<div class="mt-4 space-y-4"><div>${this.renderClientPicker(false)}<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['context.note']}</p></div>${this.cmdUpdateClientPortalAccessState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateClientPortalAccessError || msg['update.error']}</p>` : nothing}${this.cmdUpdateClientPortalAccessState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : nothing}<div class="flex flex-wrap gap-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdUpdateClientPortalAccessState === 'loading'} @click=${this.handleCmdUpdateClientPortalAccessClick}>${this.cmdUpdateClientPortalAccessState === 'loading' ? msg['loading'] : msg['update.action']}</button><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteClientPortalAccessState === 'loading'} @click=${() => { if (window.confirm(msg['confirm.delete'])) { this.handleCmdDeleteClientPortalAccessClick(); } }}>${this.cmdDeleteClientPortalAccessState === 'loading' ? msg['loading'] : msg['delete.action']}</button></div></div>` : html`<p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['choose.record']}</p>`}</section>`;
}
renderCreatePanel() {
const msg = this.msg;
return html`<div class="mt-4 max-w-xl space-y-4">${this.renderClientPicker(true)}<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['context.note']}</p>${this.cmdCreateClientPortalAccessState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateClientPortalAccessError || msg['create.error']}</p>` : nothing}${this.cmdCreateClientPortalAccessState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}<button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateClientPortalAccessState === 'loading'} @click=${this.handleCmdCreateClientPortalAccessClick}>${this.cmdCreateClientPortalAccessState === 'loading' ? msg['loading'] : msg['create.action']}</button></div>`;
}
}