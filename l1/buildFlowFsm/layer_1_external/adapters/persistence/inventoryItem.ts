/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/inventoryItem.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const inventoryItemTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmInventoryItem',
  tableName: 'inventory_item',
  purpose: 'cadastro',
  description: 'Stores inventory items. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'inventory_item_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the inventory item.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current inventory item status.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
    },
  ],
  primaryKey: ['inventory_item_id'],
  indexes: [
    {
      name: 'pk_inventory_item',
      columns: ['inventory_item_id'],
      unique: true,
    },
    {
      name: 'idx_inventory_item_status',
      columns: ['status'],
    },
  ],
  version: 1,
};