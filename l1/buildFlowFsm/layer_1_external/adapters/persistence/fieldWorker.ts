/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldWorker.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const fieldWorkerTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmFieldWorker',
  tableName: 'field_worker',
  purpose: 'cadastro',
  description: 'Stores field worker records.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'platform_user_id', postgresType: 'UUID' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['platform_user_id'],
  indexes: [
    { name: 'pk_field_worker', columns: ['platform_user_id'], unique: true },
  ],
  version: 1,
};
