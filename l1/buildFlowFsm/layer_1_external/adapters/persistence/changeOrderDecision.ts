/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecision.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const changeOrderDecisionTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmChangeOrderDecision',
  tableName: 'change_order_decision',
  purpose: 'cadastro',
  description: 'Stores a decision made for a change order.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'change_order_decision_id', postgresType: 'UUID' },
    { name: 'decision', postgresType: 'TEXT' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['change_order_decision_id'],
  indexes: [
    {
      name: 'pk_change_order_decision',
      columns: ['change_order_decision_id'],
      unique: true,
    },
    {
      name: 'idx_change_order_decision_decision',
      columns: ['decision'],
    },
  ],
  version: 1,
};