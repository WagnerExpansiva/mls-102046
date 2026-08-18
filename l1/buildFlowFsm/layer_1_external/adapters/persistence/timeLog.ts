/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const timeLogTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmTimeLog',
  tableName: 'time_log',
  purpose: 'transacao',
  description: 'Stores time logs. Non-indexed fields are stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'time_log_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the time log.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current time log status.',
    },
    {
      name: 'work_task_id',
      postgresType: 'UUID',
      description: 'Referenced work task identifier.',
    },
    {
      name: 'field_worker_id',
      postgresType: 'UUID',
      description: 'Referenced field worker identifier.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Non-indexed time log fields.',
    },
  ],
  primaryKey: ['time_log_id'],
  indexes: [
    {
      name: 'pk_time_log',
      columns: ['time_log_id'],
      unique: true,
    },
    {
      name: 'idx_time_log_status',
      columns: ['status'],
    },
    {
      name: 'idx_time_log_work_task_id',
      columns: ['work_task_id'],
    },
    {
      name: 'idx_time_log_field_worker_id',
      columns: ['field_worker_id'],
    },
  ],
  version: 1,
};
