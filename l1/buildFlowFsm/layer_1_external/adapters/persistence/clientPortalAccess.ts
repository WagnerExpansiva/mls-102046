/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientPortalAccess.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const clientPortalAccessTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmClientPortalAccess',
  tableName: 'client_portal_access',
  purpose: 'cadastro',
  description: 'Stores client portal access assignments.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'client_portal_access_id', postgresType: 'UUID' },
    { name: 'client_id', postgresType: 'UUID' },
    { name: 'platform_user_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['client_portal_access_id'],
  indexes: [
    {
      name: 'pk_client_portal_access',
      columns: ['client_portal_access_id'],
      unique: true,
    },
    {
      name: 'idx_client_portal_access_client_id',
      columns: ['client_id'],
    },
    {
      name: 'idx_client_portal_access_platform_user_id',
      columns: ['platform_user_id'],
    },
    {
      name: 'idx_client_portal_access_status',
      columns: ['status'],
    },
  ],
  version: 1,
};
