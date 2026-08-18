/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const changeOrderTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmChangeOrder',
  tableName: 'change_order',
  purpose: 'transacao',
  description: 'Stores project change orders.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'change_order_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['change_order_id'],
  indexes: [
    { name: 'idx_change_order_status', columns: ['status'] },
  ],
  version: 1,
};