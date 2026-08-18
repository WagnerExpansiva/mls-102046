/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IInvoiceRepository,
  InvoiceFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type {
  Invoice,
  InvoiceStatus,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

interface InvoiceRow {
  invoice_id: string;
  client_id: string;
  project_id: string;
  status: string;
  details: string | null;
}

interface InvoiceDetails {
  commercialReference: string;
  amount: number;
}

function toRow(invoice: Invoice): InvoiceRow {
  const details: InvoiceDetails = {
    commercialReference: invoice.commercialReference,
    amount: invoice.amount,
  };
  return {
    invoice_id: invoice.invoiceId,
    client_id: invoice.clientId,
    project_id: invoice.projectId,
    status: invoice.status,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): InvoiceDetails {
  return {
    commercialReference: '',
    amount: 0,
  };
}

function parseDetails(row: InvoiceRow): InvoiceDetails {
  let parsed: Partial<InvoiceDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<InvoiceDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: InvoiceRow): Invoice {
  const details = parseDetails(row);
  return {
    invoiceId: row.invoice_id,
    clientId: row.client_id,
    projectId: row.project_id,
    commercialReference: details.commercialReference,
    amount: details.amount,
    status: row.status as InvoiceStatus,
  };
}

function isInputFormatError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return (
    message.includes('invalid') ||
    message.includes('malformed') ||
    message.includes('format') ||
    message.includes('uuid') ||
    message.includes('syntax')
  );
}

export function createInvoiceRepositoryAdapter(ctx: RequestContext): IInvoiceRepository {
  const getTable = () => ctx.data.moduleData.getTable<InvoiceRow>('invoice');

  return {
    async getById(id) {
      try {
        const row = await (await getTable()).findOne({ where: { invoice_id: id } });
        return row ? toDomain(row) : null;
      } catch (error) {
        if (isInputFormatError(error)) {
          throw new AppError('NOT_FOUND', `Invoice ${id} not found`, 404, { id });
        }
        throw error;
      }
    },

    async list(filter: InvoiceFilter) {
      const where: Partial<InvoiceRow> = {};
      if (filter.clientId) where.client_id = filter.clientId;
      if (filter.projectId) where.project_id = filter.projectId;
      if (filter.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'invoice_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const record = toRow(aggregate);
      const existing = await repo.findOne({ where: { invoice_id: aggregate.invoiceId } });
      if (existing) {
        await repo.update({
          where: { invoice_id: aggregate.invoiceId },
          patch: record,
        });
      } else {
        await repo.insert({ record });
      }
    },

    async listByProjectId(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
        orderBy: { field: 'invoice_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
