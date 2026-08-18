/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/platformUser.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const platformUserTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmPlatformUser',
  tableName: 'platform_user',
  purpose: 'cadastro',
  description: 'Stores platform user records.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'platform_user_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the platform user.',
    },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['platform_user_id'],
  indexes: [
    {
      name: 'pk_platform_user',
      columns: ['platform_user_id'],
      unique: true,
    },
  ],
  version: 1,
};
