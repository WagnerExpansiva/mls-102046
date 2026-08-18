/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/changeOrderDecisionCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderDecisionCatalogueBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/changeOrderDecisionCatalogue.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
  'page.title': m['section.changeOrderDecisionCatalogue.recordList.title'],
  'list.title': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.title'],
  'list.empty': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.empty'],
  'list.id': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrderDecisionId.label'],
  'list.changeOrder': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.changeOrder.label'],
  'list.madeBy': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.madeByPlatformUser.label'],
  'list.decision': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decision.label'],
  'list.decidedAt': m['intent.changeOrderDecisionCatalogue.qryListChangeOrderDecision.list.column.decidedAt.label'],
  'update.title': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.title'],
  'update.action': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.action.cmdUpdateChangeOrderDecision'],
  'update.madeBy': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.madeByPlatformUser.label'],
  'update.decision': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decision.label'],
  'update.decidedAt': m['intent.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.form.field.decidedAt.label'],
  'delete.title': m['intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.title'],
  'delete.action': m['intent.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.form.action.cmdDeleteChangeOrderDecision'],
  'create.title': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.title'],
  'create.action': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.action.cmdCreateChangeOrderDecision'],
  'create.madeBy': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.madeByPlatformUser.label'],
  'create.decision': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decision.label'],
  'create.decidedAt': m['intent.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.form.field.decidedAt.label'],
  'picker.title': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.title'],
  'picker.empty': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.empty'],
  'picker.id': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.changeOrderId.label'],
  'picker.client': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.clientRef.label'],
  'picker.project': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.projectRef.label'],
  'picker.description': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.description.label'],
  'picker.status': m['intent.changeOrderDecisionCatalogue.qryChangeOrderPicker.list.column.status.label'],
  'create.success': m['action.cmdCreateChangeOrderDecision.success'],
  'create.error': m['action.cmdCreateChangeOrderDecision.error'],
  'update.success': m['action.cmdUpdateChangeOrderDecision.success'],
  'update.error': m['action.cmdUpdateChangeOrderDecision.error'],
  'delete.success': m['action.cmdDeleteChangeOrderDecision.success'],
  'delete.error': m['action.cmdDeleteChangeOrderDecision.error'],
  'workbench.title': m['section.changeOrderDecisionCatalogue.decisionWorkbench.title'],
  'creation.title': m['section.changeOrderDecisionCatalogue.decisionCreation.title'],
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

function readField(row: unknown, field: string): string {
  if (typeof row !== 'object' || row === null) return '';
  const value = (row as Record<string, unknown>)[field];
  return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
}

@customElement('build-flow-fsm--web--desktop--page11--change-order-decision-catalogue-102046')
export class BuildFlowFsmDesktopPage11ChangeOrderDecisionCataloguePage extends BuildFlowFsmChangeOrderDecisionCatalogueBase {
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
      <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      ${this.renderWorkbench()}
      ${this.renderCreation()}
    </div>
  </div>`;
}
renderWorkbench() {
const msg = this.msg;
return html`
  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-5">
    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['workbench.title']}</h2>
    ${this.renderDecisionList()}
    ${this.renderPicker()}
    ${this.renderUpdateForm()}
    ${this.renderDeleteAction()}
  </section>`;
}
renderDecisionList() {
const msg = this.msg;
const rows = this.qryListChangeOrderDecisionData;
return html`
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-3">
      <h3 class="font-medium">${msg['list.title']}</h3>
      <button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50" ?disabled=${this.qryListChangeOrderDecisionState === 'loading'} @click=${(event: Event) => this.handleQryListChangeOrderDecisionClick(event)}>${this.qryListChangeOrderDecisionState === 'loading' ? '…' : msg['list.title']}</button>
    </div>
    ${this.qryListChangeOrderDecisionState === 'loading' ? html`<div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['list.title']}</div>` : rows.length === 0 ? html`<p class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>` : html`
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-[var(--border-subtle,#e2e8f0)] text-sm">
          <thead><tr>${['list.id','list.changeOrder','list.madeBy','list.decision','list.decidedAt'].map((key: string) => html`<th class="px-3 py-2 text-left font-medium text-[var(--text-muted,#64748b)]">${msg[key as keyof typeof msg]}</th>`)}</tr></thead>
          <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)]">${rows.map((row: unknown) => html`<tr>
            <td class="px-3 py-2">${readField(row, 'changeOrderDecisionId')}</td><td class="px-3 py-2">${readField(row, 'changeOrder')}</td><td class="px-3 py-2">${readField(row, 'madeByPlatformUser')}</td><td class="px-3 py-2">${readField(row, 'decision')}</td><td class="px-3 py-2">${readField(row, 'decidedAt')}</td>
          </tr>`)}</tbody>
        </table>
      </div>`}
  </div>`;
}
renderPicker() {
const msg = this.msg;
const rows = this.qryChangeOrderPickerData;
return html`
  <div class="space-y-3">
    <div class="flex items-center justify-between"><h3 class="font-medium">${msg['picker.title']}</h3><button class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]" ?disabled=${this.qryChangeOrderPickerState === 'loading'} @click=${(event: Event) => this.handleQryChangeOrderPickerClick(event)}>${msg['picker.title']}</button></div>
    ${rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['picker.empty']}</p>` : html`<div class="grid gap-2 md:grid-cols-2">${rows.map((row: unknown) => html`<div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3"><div class="font-medium">${readField(row, 'description')}</div><div class="text-sm text-[var(--text-muted,#64748b)]">${msg['picker.id']}: ${readField(row, 'changeOrderId')} · ${msg['picker.client']}: ${readField(row, 'clientRef')} · ${msg['picker.project']}: ${readField(row, 'projectRef')} · ${msg['picker.status']}: ${readField(row, 'status')}</div></div>`)}</div>`}
  </div>`;
}
renderCreation() {
const msg = this.msg;
return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['creation.title']}</h2>${this.renderCreateForm()}</section>`;
}
renderCreateForm() {
const msg = this.msg;
return html`<form class="grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateChangeOrderDecisionClick(event); }}>
  <label class="space-y-1"><span class="block text-sm font-medium">${msg['list.changeOrder']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionChangeOrder} @change=${(event: Event) => this.handleCmdCreateChangeOrderDecisionChangeOrderChange(event)}><option value=""></option>${this.qryChangeOrderPickerData.map((row: unknown) => html`<option value=${readField(row, 'changeOrderId')}>${readField(row, 'description')}</option>`)}</select></label>
  <label class="space-y-1"><span class="block text-sm font-medium">${msg['create.decision']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdCreateChangeOrderDecisionDecision} @input=${(event: Event) => this.handleCmdCreateChangeOrderDecisionDecisionChange(event)} /></label>
  <div class="md:col-span-2"><button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdCreateChangeOrderDecisionState === 'loading'}>${this.cmdCreateChangeOrderDecisionState === 'loading' ? msg['create.title'] : msg['create.action']}</button>${this.cmdCreateChangeOrderDecisionState === 'success' ? html`<p class="mt-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : this.cmdCreateChangeOrderDecisionState === 'error' ? html`<p class="mt-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateChangeOrderDecisionError || msg['create.error']}</p>` : nothing}</div>
</form>`;
}
renderUpdateForm() {
const msg = this.msg;
return html`<div class="space-y-3"><h3 class="font-medium">${msg['update.title']}</h3><div class="grid gap-4 md:grid-cols-2"><label class="space-y-1"><span class="block text-sm font-medium">${msg['list.id']}</span><select class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId} @change=${(event: Event) => this.handleCmdUpdateChangeOrderDecisionChangeOrderDecisionIdChange(event)}><option value=""></option>${this.qryListChangeOrderDecisionData.map((row: unknown) => html`<option value=${readField(row, 'changeOrderDecisionId')}>${readField(row, 'changeOrderDecisionId')}</option>`)}</select></label><label class="space-y-1"><span class="block text-sm font-medium">${msg['update.decision']}</span><input class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" .value=${this.cmdUpdateChangeOrderDecisionDecision} @input=${(event: Event) => this.handleCmdUpdateChangeOrderDecisionDecisionChange(event)} /></label><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]" ?disabled=${this.cmdUpdateChangeOrderDecisionState === 'loading'} @click=${(event: Event) => this.handleCmdUpdateChangeOrderDecisionClick(event)}>${msg['update.action']}</button></div>${this.cmdUpdateChangeOrderDecisionState === 'success' ? html`<p class="rounded-md bg-[var(--status-success-bg,#dcfce7)] p-2 text-[var(--status-success-text,#166534)]">${msg['update.success']}</p>` : this.cmdUpdateChangeOrderDecisionState === 'error' ? html`<p class="rounded-md bg-[var(--status-error-bg,#fee2e2)] p-2 text-[var(--status-error-text,#991b1b)]">${this.cmdUpdateChangeOrderDecisionError || msg['update.error']}</p>` : nothing}</div>`;
}
renderDeleteAction() {
const msg = this.msg;
return html`<div class="flex items-center gap-3"><span class="font-medium">${msg['delete.title']}</span><button class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50" ?disabled=${this.cmdDeleteChangeOrderDecisionState === 'loading' || !this.cmdUpdateChangeOrderDecisionChangeOrderDecisionId} @click=${(event: Event) => this.handleCmdDeleteChangeOrderDecisionClick(event)}>${msg['delete.action']}</button>${this.cmdDeleteChangeOrderDecisionState === 'success' ? html`<span class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-2 py-1 text-[var(--status-success-text,#166534)]">${msg['delete.success']}</span>` : this.cmdDeleteChangeOrderDecisionState === 'error' ? html`<span class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-2 py-1 text-[var(--status-error-text,#991b1b)]">${this.cmdDeleteChangeOrderDecisionError || msg['delete.error']}</span>` : nothing}</div>`;
}
}
