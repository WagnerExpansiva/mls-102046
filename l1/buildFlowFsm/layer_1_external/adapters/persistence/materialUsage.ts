/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const materialUsageTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmMaterialUsage',
  tableName: 'material_usage',
  purpose: 'transacao',
  description: 'Stores material consumption records. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'material_usage_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'project_id', postgresType: 'UUID' },
    { name: 'inventory_item_id', postgresType: 'UUID' },
    { name: 'inventory_balance_id', postgresType: 'UUID' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['material_usage_id'],
  indexes: [
    { name: 'idx_material_usage_status', columns: ['status'] },
    { name: 'idx_material_usage_project_id', columns: ['project_id'] },
    { name: 'idx_material_usage_inventory_item_id', columns: ['inventory_item_id'] },
    { name: 'idx_material_usage_inventory_balance_id', columns: ['inventory_balance_id'] },
  ],
  version: 1,
};
