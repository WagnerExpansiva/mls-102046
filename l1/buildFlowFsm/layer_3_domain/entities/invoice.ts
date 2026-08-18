/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.ts" enhancement="_blank"/>
export type InvoiceStatus = 'issued' | 'availableToClient' | 'cancelled';

export interface Invoice {
  invoiceId: string;
  clientId: string;
  projectId: string;
  commercialReference: string;
  amount: number;
  status: InvoiceStatus;
}

export const INVOICE_STATUS_TRANSITIONS: Record<InvoiceStatus, InvoiceStatus[]> = {
  issued: ['availableToClient', 'cancelled'],
  availableToClient: ['cancelled'],
  cancelled: [],
};

export function canTransitionInvoice(from: InvoiceStatus, to: InvoiceStatus): boolean {
  return INVOICE_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function invoiceAmountIsValid(invoice: Pick<Invoice, 'amount'>): boolean {
  return invoice.amount > 0;
}

export function invoiceIsInitiallyIssued(invoice: Pick<Invoice, 'status'>): boolean {
  return invoice.status === 'issued';
}

export function canMakeInvoiceAvailableToClient(invoice: Pick<Invoice, 'status' | 'amount'>): boolean {
  return invoice.status === 'issued' && invoice.amount > 0;
}
