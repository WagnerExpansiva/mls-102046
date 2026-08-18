/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/client.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const clientTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmClient',
  tableName: 'client',
  purpose: 'cadastro',
  description: 'Stores client records.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'client_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the client.',
    },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['client_id'],
  indexes: [
    { name: 'pk_client', columns: ['client_id'], unique: true },
  ],
  version: 1,
};