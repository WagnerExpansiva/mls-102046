/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectExecutionOverview.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const projectExecutionOverviewTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmProjectExecutionOverview',
  tableName: 'project_execution_overview',
  purpose: 'controle',
  description: 'Stores project execution overviews.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Primary and referenced project identifier.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
    },
  ],
  primaryKey: ['project_id'],
  indexes: [
    {
      name: 'pk_project_execution_overview',
      columns: ['project_id'],
      unique: true,
    },
  ],
  version: 1,
};