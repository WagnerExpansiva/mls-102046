/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectClientBillingSummary.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IClientBillingSummaryRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.js';
import type { IChangeOrderRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IClientRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.js';
import type { IInvoiceRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { IProjectRepository } from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';

export interface InspectClientBillingSummaryInput {
clientId: string;
}

export interface InspectClientBillingSummaryOutput {
clientId: string;
projectId: string;
approvedChangeOrderReferences?: string;
invoiceReferences?: string;
approvedChangeOrderAmount: number;
billableAmount: number;
invoicedAmount: number;
clientAvailableAmount: number;
}

export async function inspectClientBillingSummary(
ctx: RequestContext,
input: InspectClientBillingSummaryInput,
): Promise<InspectClientBillingSummaryOutput> {
const summaries = resolveRepository<IClientBillingSummaryRepository>(ctx, 'ClientBillingSummary');
const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
const clients = resolveRepository<IClientRepository>(ctx, 'Client');
const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

if (!input.clientId || input.clientId.trim().length === 0) {
throw new AppError('VALIDATION_ERROR', 'clientId is required.', 400, { field: 'clientId' });
}

const summary = await summaries.getByClientId(input.clientId);
if (!summary) {
throw new AppError('NOT_FOUND', `Client billing summary not found for client: ${input.clientId}`, 404, { clientId: input.clientId });
}
if (summary.clientId !== input.clientId) {
throw new AppError('CONFLICT', 'Client billing summary does not belong to the requested client.', 409, { clientId: input.clientId });
}

const client = await clients.getById(input.clientId);
if (!client) {
throw new AppError('NOT_FOUND', `Client not found: ${input.clientId}`, 404, { clientId: input.clientId });
}

const project = await projects.getById(summary.projectId);
if (!project) {
throw new AppError('NOT_FOUND', `Project not found: ${summary.projectId}`, 404, { projectId: summary.projectId });
}
if (project.clientId !== client.clientId) {
throw new AppError('CONFLICT', 'The billing summary project does not belong to the requested client.', 409, {
clientId: input.clientId,
projectId: summary.projectId,
});
}

const projectChangeOrders = await changeOrders.list({
clientRef: client.clientId,
projectRef: project.projectId,
status: 'approved',
});
const approvedChangeOrders = projectChangeOrders.filter(
(changeOrder) => changeOrder.clientRef === client.clientId &&
changeOrder.projectRef === project.projectId &&
changeOrder.status === 'approved',
);
const approvedChangeOrderAmount = approvedChangeOrders.reduce(
(total, changeOrder) => total + changeOrder.changeAmount,
0,
);

const projectInvoices = await invoices.list({
clientId: client.clientId,
projectId: project.projectId,
});
const applicableInvoices = projectInvoices.filter(
(invoice) => invoice.clientId === client.clientId &&
invoice.projectId === project.projectId &&
invoice.status !== 'cancelled',
);
const invoicedAmount = applicableInvoices.reduce((total, invoice) => total + invoice.amount, 0);

// rule: invoiceIncludesApprovedChangeOrdersOnly
const billableAmount = approvedChangeOrderAmount;
const clientAvailableAmount = billableAmount - invoicedAmount;
const approvedChangeOrderReferences = approvedChangeOrders.map((changeOrder) => changeOrder.changeOrderId).join(',');
const invoiceReferences = applicableInvoices.map((invoice) => invoice.invoiceId).join(',');

return {
clientId: summary.clientId,
projectId: summary.projectId,
approvedChangeOrderReferences: approvedChangeOrderReferences || undefined,
invoiceReferences: invoiceReferences || undefined,
approvedChangeOrderAmount,
billableAmount,
invoicedAmount,
clientAvailableAmount,
};
}
