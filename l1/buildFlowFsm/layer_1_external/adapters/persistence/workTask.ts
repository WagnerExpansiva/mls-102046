/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const workTaskTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmWorkTask',
  tableName: 'work_task',
  purpose: 'transacao',
  description: 'Stores project work tasks. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'work_task_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the work task.',
    },
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Referenced project identifier.',
    },
    {
      name: 'assigned_field_worker_id',
      postgresType: 'UUID',
      nullable: true,
      description: 'Referenced assigned field worker identifier.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current work task status.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Non-indexed work task fields.',
    },
  ],
  primaryKey: ['work_task_id'],
  indexes: [
    {
      name: 'pk_work_task',
      columns: ['work_task_id'],
      unique: true,
    },
    {
      name: 'idx_work_task_project_id',
      columns: ['project_id'],
    },
    {
      name: 'idx_work_task_assigned_field_worker_id',
      columns: ['assigned_field_worker_id'],
    },
    {
      name: 'idx_work_task_status',
      columns: ['status'],
    },
  ],
  version: 1,
};
