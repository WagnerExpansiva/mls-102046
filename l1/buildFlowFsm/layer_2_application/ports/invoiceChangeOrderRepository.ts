/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.ts" enhancement="_blank"/>
import type { InvoiceChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';

export type InvoiceChangeOrderId = string;
export type InvoiceId = string;

export interface InvoiceChangeOrderFilter {
  invoiceChangeOrderId?: InvoiceChangeOrderId;
  invoiceId?: InvoiceId;
  changeOrderId?: string;
}

export interface IInvoiceChangeOrderRepository {
  getById(id: InvoiceChangeOrderId): Promise<InvoiceChangeOrder | null>;
  list(filter: InvoiceChangeOrderFilter): Promise<InvoiceChangeOrder[]>;
  save(aggregate: InvoiceChangeOrder): Promise<void>;
  listByInvoiceId(invoiceId: InvoiceId): Promise<InvoiceChangeOrder[]>;
}
