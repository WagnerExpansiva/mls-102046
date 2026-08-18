/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryBalance.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const inventoryBalanceTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmInventoryBalance',
  tableName: 'inventory_balance',
  purpose: 'cadastro',
  description: 'Stores inventory balances. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'inventory_balance_id', postgresType: 'UUID' },
    { name: 'inventory_item_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['inventory_balance_id'],
  indexes: [
    { name: 'pk_inventory_balance', columns: ['inventory_balance_id'], unique: true },
    { name: 'idx_inventory_balance_inventory_item_id', columns: ['inventory_item_id'] },
    { name: 'idx_inventory_balance_status', columns: ['status'] },
  ],
  version: 1,
};