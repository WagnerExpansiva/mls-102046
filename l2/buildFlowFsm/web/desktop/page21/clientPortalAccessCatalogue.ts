/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientPortalAccessCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

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
'accessList.empty': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.empty'],
'accessId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientPortalAccessId.label'],
'clientId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.clientId.label'],
'platformUserId.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.platformUserId.label'],
'status.label': m['intent.clientPortalAccessCatalogue.qryListClientPortalAccess.list.column.status.label'],
'clients.title': m['organism.clientPortalAccessCatalogue.qryClientPicker.title'],
'clients.empty': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.empty'],
'clientIdPicker.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientId.label'],
'clientName.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.clientName.label'],
'contactEmail.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactEmail.label'],
'contactPhone.label': m['intent.clientPortalAccessCatalogue.qryClientPicker.list.column.contactPhone.label'],
'update.title': m['organism.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.title'],
'update.formTitle': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.title'],
'update.action': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.action.cmdUpdateClientPortalAccess'],
'update.platformUserId': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.platformUserId.label'],
'update.status': m['intent.clientPortalAccessCatalogue.cmdUpdateClientPortalAccess.form.field.status.label'],
'delete.title': m['organism.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.title'],
'delete.formTitle': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.title'],
'delete.action': m['intent.clientPortalAccessCatalogue.cmdDeleteClientPortalAccess.form.action.cmdDeleteClientPortalAccess'],
'create.sectionTitle': m['section.clientPortalAccessCatalogue.recordForm.title'],
'create.title': m['organism.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.title'],
'create.formTitle': m['intent.clientPortalAccessCatalogue.cmdCreateClientPortalAccess.form.title'],
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
'chooseClient': 'Selecione um cliente',
'newRecord': 'Novo vínculo',
'noSelection': 'Selecione um vínculo para editar ou remover.',
'refresh': 'Recarregar dados',
'loading': 'Carregando…',
'saveRequired': 'Selecione um cliente para continuar.',
'confirmDelete': 'Confirma a remoção do vínculo deste cliente?',
'currentClient': 'Cliente selecionado',
'sessionValue': 'Definido pela sessão atual',
'noClients': 'Nenhum cliente disponível.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'chooseClient': 'Selecione um cliente', 'newRecord': 'Novo vínculo', 'noSelection': 'Selecione um vínculo para editar ou remover.', 'refresh': 'Recarregar dados', 'loading': 'Carregando…', 'saveRequired': 'Selecione um cliente para continuar.', 'confirmDelete': 'Confirma a remoção do vínculo deste cliente?', 'currentClient': 'Cliente selecionado', 'sessionValue': 'Definido pela sessão atual', 'noClients': 'Nenhum cliente disponível.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'chooseClient': 'Select a client', 'newRecord': 'New access link', 'noSelection': 'Select an access link to edit or remove it.', 'refresh': 'Refresh data', 'loading': 'Loading…', 'saveRequired': 'Select a client to continue.', 'confirmDelete': 'Do you want to remove this client access link?', 'currentClient': 'Selected client', 'sessionValue': 'Set by the current session', 'noClients': 'No clients available.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'chooseClient': 'Seleccione un cliente', 'newRecord': 'Nuevo vínculo', 'noSelection': 'Seleccione un vínculo para editarlo o eliminarlo.', 'refresh': 'Recargar datos', 'loading': 'Cargando…', 'saveRequired': 'Seleccione un cliente para continuar.', 'confirmDelete': '¿Desea eliminar este vínculo de acceso del cliente?', 'currentClient': 'Cliente seleccionado', 'sessionValue': 'Definido por la sesión actual', 'noClients': 'No hay clientes disponibles.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--client-portal-access-catalogue-102046')
export class BuildFlowFsmDesktopPage21ClientPortalAccessCataloguePage extends BuildFlowFsmClientPortalAccessCatalogueBase {
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
<section class="mx-auto max-w-6xl space-y-6" aria-label=${msg['workspace.title']}>
${this.renderClientPicker()}
${this.renderAccessRecords()}
${this.renderRecordForm()}
</section>
</main>`;
}
renderClientPicker() {
const msg = this.msg;
const clients: QryClientPickerOutput[] = this.qryClientPickerData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="mb-4 flex items-center justify-between gap-4">
<h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['clients.title']}</h2>
<button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryClientPickerClick(event)} ?disabled=${this.qryClientPickerState === 'loading'}>${this.qryClientPickerState === 'loading' ? msg['loading'] : msg['refresh']}</button>
</div>
${this.qryClientPickerState === 'loading' ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>` : clients.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['clients.empty']} ${msg['noClients']}</p>` : html`<label class="block text-sm font-medium">${msg['currentClient']}
<select class="mt-2 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-3" .value=${this.cmdCreateClientPortalAccessClientId} @change=${(event: Event) => { const value = (event.currentTarget as HTMLSelectElement).value; this.setCmdCreateClientPortalAccessClientId(value); this.setCmdUpdateClientPortalAccessClientId(value); }}>
<option value="">${msg['chooseClient']}</option>
${clients.map((client: QryClientPickerOutput) => html`<option value=${client.clientId}>${client.clientName} — ${client.contactEmail}</option>`)}
</select></label>`}
</section>`;
}
renderAccessRecords() {
const msg = this.msg;
const records: QryListClientPortalAccessOutput[] = this.qryListClientPortalAccessData ?? [];
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
<div class="mb-4 flex items-center justify-between gap-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['accessList.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryListClientPortalAccessClick(event)} ?disabled=${this.qryListClientPortalAccessState === 'loading'}>${this.qryListClientPortalAccessState === 'loading' ? msg['loading'] : msg['refresh']}</button></div>
${this.qryListClientPortalAccessState === 'loading' ? html`<div class="animate-pulse rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-8 text-sm">${msg['loading']}</div>` : records.length === 0 ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['accessList.empty']}</p>` : html`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]"><th class="p-3">${msg['accessId.label']}</th><th class="p-3">${msg['clientId.label']}</th><th class="p-3">${msg['platformUserId.label']}</th><th class="p-3">${msg['status.label']}</th><th class="p-3">${msg['newRecord']}</th></tr></thead><tbody>${records.map((record: QryListClientPortalAccessOutput) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${record.clientPortalAccessId === this.cmdUpdateClientPortalAccessClientPortalAccessId ? 'bg-[var(--selected-bg,#f1f5f9)]' : ''}"><td class="p-3"><button class="font-medium underline" @click=${() => { this.setCmdUpdateClientPortalAccessClientPortalAccessId(record.clientPortalAccessId); this.setCmdUpdateClientPortalAccessClientId(record.clientId); this.setCmdCreateClientPortalAccessClientId(record.clientId); }}>${record.clientPortalAccessId}</button></td><td class="p-3">${record.clientId}</td><td class="p-3">${record.platformUserId}</td><td class="p-3"><span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-1 text-[var(--status-info-text,#1e3a8a)]">${record.status}</span></td><td class="p-3"><button class="rounded-md bg-[var(--button-danger-bg,#fee2e2)] px-3 py-2 text-[var(--button-danger-text,#991b1b)]" @click=${(event: Event) => { if (window.confirm(`${msg['confirmDelete']} ${record.clientId}`)) { this.setCmdDeleteClientPortalAccessClientPortalAccessId(record.clientPortalAccessId); this.handleCmdDeleteClientPortalAccessClick(event); } }} ?disabled=${this.cmdDeleteClientPortalAccessState === 'loading'}>${this.cmdDeleteClientPortalAccessState === 'loading' ? msg['loading'] : msg['delete.action']}</button></td></tr>`)}</tbody></table></div>`}
</section>`;
}
renderRecordForm() {
const msg = this.msg;
const selected = this.qryListClientPortalAccessData.find((record: QryListClientPortalAccessOutput) => record.clientPortalAccessId === this.cmdUpdateClientPortalAccessClientPortalAccessId);
const hasClient = this.cmdCreateClientPortalAccessClientId.length > 0;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"><h2 class="mb-5 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['create.sectionTitle']}</h2><div class="mb-5 flex items-center justify-between"><div><p class="font-medium">${selected ? selected.clientId : msg['newRecord']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${selected ? `${msg['status.label']}: ${selected.status}` : msg['saveRequired']}</p></div>${selected ? html`<span class="rounded-full bg-[var(--status-info-bg,#dbeafe)] px-3 py-1 text-sm text-[var(--status-info-text,#1e3a8a)]">${selected.status}</span>` : nothing}</div><div class="space-y-4"><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.platformUserId']}: ${msg['sessionValue']}</p><p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.status']}: ${this.cmdCreateClientPortalAccessStatus || msg['status.label']}</p><div class="flex flex-wrap gap-3"><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" @click=${(event: Event) => this.handleCmdCreateClientPortalAccessClick(event)} ?disabled=${!hasClient || this.cmdCreateClientPortalAccessState === 'loading'}>${this.cmdCreateClientPortalAccessState === 'loading' ? msg['loading'] : msg['create.action']}</button><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-4 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleCmdUpdateClientPortalAccessClick(event)} ?disabled=${!selected || this.cmdUpdateClientPortalAccessState === 'loading'}>${this.cmdUpdateClientPortalAccessState === 'loading' ? msg['loading'] : msg['update.action']}</button></div><div class="space-y-1 text-sm" aria-live="polite">${this.cmdCreateClientPortalAccessState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateClientPortalAccessState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdCreateClientPortalAccessError || msg['create.error']}</p>` : nothing}${this.cmdUpdateClientPortalAccessState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateClientPortalAccessState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateClientPortalAccessError || msg['update.error']}</p>` : nothing}${this.cmdDeleteClientPortalAccessState === 'success' ? html`<p class="text-[var(--status-success-text,#166534)]">${msg['delete.success']}</p>` : this.cmdDeleteClientPortalAccessState === 'error' ? html`<p class="text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteClientPortalAccessError || msg['delete.error']}</p>` : nothing}</div></div></section>`;
}
}