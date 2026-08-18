/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummaryRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  ClientBillingSummaryFilter,
  IClientBillingSummaryRepository,
} from '/_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.js';
import type {
  ClientBillingSummary,
  ClientBillingSummaryReference,
} from '/_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.js';

interface ClientBillingSummaryRow {
  client_id: string;
  project_id: string;
  details: string | null;
}

interface ClientBillingSummaryDetails {
  approvedChangeOrderReferences: ClientBillingSummaryReference[] | null;
  invoiceReferences: ClientBillingSummaryReference[] | null;
  approvedChangeOrderAmount: number;
  billableAmount: number;
  invoicedAmount: number;
  clientAvailableAmount: number;
}

function toRow(summary: ClientBillingSummary): ClientBillingSummaryRow {
  const details: ClientBillingSummaryDetails = {
    approvedChangeOrderReferences: summary.approvedChangeOrderReferences,
    invoiceReferences: summary.invoiceReferences,
    approvedChangeOrderAmount: summary.approvedChangeOrderAmount,
    billableAmount: summary.billableAmount,
    invoicedAmount: summary.invoicedAmount,
    clientAvailableAmount: summary.clientAvailableAmount,
  };
  return {
    client_id: summary.clientId,
    project_id: summary.projectId,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(): ClientBillingSummaryDetails {
  return {
    approvedChangeOrderReferences: null,
    invoiceReferences: null,
    approvedChangeOrderAmount: 0,
    billableAmount: 0,
    invoicedAmount: 0,
    clientAvailableAmount: 0,
  };
}

function parseDetails(row: ClientBillingSummaryRow): ClientBillingSummaryDetails {
  let parsed: Partial<ClientBillingSummaryDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ClientBillingSummaryDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(), ...parsed };
}

function toDomain(row: ClientBillingSummaryRow): ClientBillingSummary {
  const details = parseDetails(row);
  return {
    clientId: row.client_id,
    projectId: row.project_id,
    approvedChangeOrderReferences: details.approvedChangeOrderReferences,
    invoiceReferences: details.invoiceReferences,
    approvedChangeOrderAmount: details.approvedChangeOrderAmount,
    billableAmount: details.billableAmount,
    invoicedAmount: details.invoicedAmount,
    clientAvailableAmount: details.clientAvailableAmount,
  };
}

function isLookupInputFormatError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const candidate = error as { code?: unknown; message?: unknown };
  const code = String(candidate.code ?? '');
  const message = String(candidate.message ?? '').toLowerCase();
  return (
    code === '22P02' ||
    code === 'INVALID_INPUT' ||
    message.includes('invalid input syntax') ||
    message.includes('invalid uuid') ||
    message.includes('malformed uuid') ||
    message.includes('invalid key')
  );
}

export function createClientBillingSummaryRepositoryAdapter(
  ctx: RequestContext,
): IClientBillingSummaryRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ClientBillingSummaryRow>('client_billing_summary');

  return {
    async getById(id) {
      let row: ClientBillingSummaryRow | null;
      try {
        row = await (await getTable()).findOne({ where: { client_id: id } });
      } catch (error) {
        if (isLookupInputFormatError(error)) {
          throw new AppError('NOT_FOUND', `Client billing summary ${id} not found`, 404, { id });
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },

    async list(filter: ClientBillingSummaryFilter) {
      const where: Partial<ClientBillingSummaryRow> = {};
      if (filter.clientId) where.client_id = filter.clientId;
      if (filter.projectId) where.project_id = filter.projectId;
      const rows = await (
        await getTable()
      ).findMany({
        where,
        orderBy: { field: 'client_id', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const table = await getTable();
      const row = toRow(aggregate);
      const existing = await table.findOne({
        where: { client_id: row.client_id, project_id: row.project_id },
      });
      if (existing) {
        await table.update({
          where: { client_id: row.client_id, project_id: row.project_id },
          patch: row,
        });
      } else {
        await table.insert({ record: row });
      }
    },

    async getByClientId(clientId) {
      let row: ClientBillingSummaryRow | null;
      try {
        row = await (await getTable()).findOne({ where: { client_id: clientId } });
      } catch (error) {
        if (isLookupInputFormatError(error)) {
          throw new AppError(
            'NOT_FOUND',
            `Client billing summary for client ${clientId} not found`,
            404,
            { clientId },
          );
        }
        throw error;
      }
      return row ? toDomain(row) : null;
    },
  };
}
