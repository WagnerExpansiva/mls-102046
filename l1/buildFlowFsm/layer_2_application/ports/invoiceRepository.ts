/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.ts" enhancement="_blank"/>
import type { Invoice, InvoiceStatus } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export type InvoiceId = string;
export type ProjectId = string;

export interface InvoiceFilter {
  clientId?: string;
  projectId?: ProjectId;
  status?: InvoiceStatus;
}

export interface IInvoiceRepository {
  getById(id: InvoiceId): Promise<Invoice | null>;
  list(filter: InvoiceFilter): Promise<Invoice[]>;
  save(aggregate: Invoice): Promise<void>;
  listByProjectId(projectId: ProjectId): Promise<Invoice[]>;
}
