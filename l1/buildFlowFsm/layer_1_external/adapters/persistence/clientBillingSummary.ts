/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummary.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const clientBillingSummaryTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmClientBillingSummary',
  tableName: 'client_billing_summary',
  purpose: 'controle',
  description: 'Stores client billing summaries. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'client_id', postgresType: 'UUID' },
    { name: 'project_id', postgresType: 'UUID' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['client_id', 'project_id'],
  indexes: [
    {
      name: 'pk_client_billing_summary',
      columns: ['client_id', 'project_id'],
      unique: true,
    },
    {
      name: 'idx_client_billing_summary_client_id',
      columns: ['client_id'],
    },
    {
      name: 'idx_client_billing_summary_project_id',
      columns: ['project_id'],
    },
  ],
  version: 1,
};
