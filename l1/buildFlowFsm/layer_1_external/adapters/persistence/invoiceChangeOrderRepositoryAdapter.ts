/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IInvoiceChangeOrderRepository,
  InvoiceChangeOrderFilter,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.js';
import type { InvoiceChangeOrder } from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.js';

interface InvoiceChangeOrderRow {
  invoice_change_order_id: string;
  invoice_id: string;
  change_order_id: string;
  details: string | null;
}

interface InvoiceChangeOrderDetails {
  billedAmount: number;
}

function toRow(aggregate: InvoiceChangeOrder): InvoiceChangeOrderRow {
  const details: InvoiceChangeOrderDetails = {
    billedAmount: aggregate.billedAmount,
  };
  return {
    invoice_change_order_id: aggregate.invoiceChangeOrderId,
    invoice_id: aggregate.invoiceId,
    change_order_id: aggregate.changeOrderId,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): InvoiceChangeOrderDetails {
  return {
    billedAmount: 0,
  };
}

function parseDetails(row: InvoiceChangeOrderRow): InvoiceChangeOrderDetails {
  let parsed: Partial<InvoiceChangeOrderDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<InvoiceChangeOrderDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: InvoiceChangeOrderRow): InvoiceChangeOrder {
  const details = parseDetails(row);
  return {
    invoiceChangeOrderId: row.invoice_change_order_id,
    invoiceId: row.invoice_id,
    changeOrderId: row.change_order_id,
    billedAmount: details.billedAmount,
  };
}

function isDriverInputFormatError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) return false;
  const candidate = error as unknown as { code?: unknown; message?: unknown; name?: unknown };
  const code = String(candidate.code ?? '').toLowerCase();
  const message = String(candidate.message ?? '').toLowerCase();
  const name = String(candidate.name ?? '').toLowerCase();
  return (
    code.includes('invalid') ||
    code.includes('format') ||
    code.includes('input') ||
    name.includes('validation') ||
    message.includes('invalid input') ||
    message.includes('invalid uuid') ||
    message.includes('invalid syntax') ||
    message.includes('malformed') ||
    message.includes('invalid format')
  );
}

export function createInvoiceChangeOrderRepositoryAdapter(
  ctx: RequestContext,
): IInvoiceChangeOrderRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<InvoiceChangeOrderRow>('invoice_change_order');

  return {
    async getById(id) {
      let row: InvoiceChangeOrderRow | null;
      try {
        row = await (await getTable()).findOne({
          where: { invoice_change_order_id: id },
        });
      } catch (error) {
        if (isDriverInputFormatError(error)) {
          throw new AppError(
            'NOT_FOUND',
            `Invoice change order ${id} not found`,
            404,
            { invoiceChangeOrderId: id },
          );
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: InvoiceChangeOrderFilter) {
      const where: Partial<InvoiceChangeOrderRow> = {};
      if (filter.invoiceChangeOrderId) {
        where.invoice_change_order_id = filter.invoiceChangeOrderId;
      }
      if (filter.invoiceId) where.invoice_id = filter.invoiceId;
      if (filter.changeOrderId) where.change_order_id = filter.changeOrderId;
      const rows = await (await getTable()).findMany({ where });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repository = await getTable();
      const existing = await repository.findOne({
        where: { invoice_change_order_id: aggregate.invoiceChangeOrderId },
      });
      const record = toRow(aggregate);
      if (existing) {
        await repository.update({
          where: { invoice_change_order_id: aggregate.invoiceChangeOrderId },
          patch: record,
        });
      } else {
        await repository.insert({ record });
      }
    },

    async listByInvoiceId(invoiceId) {
      const rows = await (
        await getTable()
      ).findMany({
        where: { invoice_id: invoiceId },
        orderBy: { field: 'invoice_change_order_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
