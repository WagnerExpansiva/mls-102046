/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const projectTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmProject',
  tableName: 'project',
  purpose: 'cadastro',
  description: 'Stores projects. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the project.',
    },
    {
      name: 'client_id',
      postgresType: 'UUID',
      description: 'Referenced client identifier.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current project status.',
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
      name: 'pk_project',
      columns: ['project_id'],
      unique: true,
    },
    {
      name: 'idx_project_client_id',
      columns: ['client_id'],
    },
    {
      name: 'idx_project_status',
      columns: ['status'],
    },
  ],
  version: 1,
};