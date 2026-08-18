/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrder.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const invoiceChangeOrderTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmInvoiceChangeOrder',
  tableName: 'invoice_change_order',
  purpose: 'transacao',
  description: 'Associates invoices with change orders. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'invoice_change_order_id', postgresType: 'UUID' },
    { name: 'invoice_id', postgresType: 'UUID' },
    { name: 'change_order_id', postgresType: 'UUID' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['invoice_change_order_id'],
  indexes: [
    {
      name: 'pk_invoice_change_order',
      columns: ['invoice_change_order_id'],
      unique: true,
    },
    {
      name: 'idx_invoice_change_order_invoice_id',
      columns: ['invoice_id'],
    },
    {
      name: 'idx_invoice_change_order_change_order_id',
      columns: ['change_order_id'],
    },
  ],
  version: 1,
};