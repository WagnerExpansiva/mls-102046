/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const statusReportTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmStatusReport',
  tableName: 'status_report',
  purpose: 'transacao',
  description: 'Stores project status reports.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'status_report_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the status report.',
    },
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Referenced project identifier.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current status report status.',
    },
    {
      name: 'generated_by_user_id',
      postgresType: 'UUID',
      description: 'Referenced generating user identifier.',
    },
    {
      name: 'published_by_user_id',
      postgresType: 'UUID',
      nullable: true,
      description: 'Referenced publishing user identifier.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
    },
  ],
  primaryKey: ['status_report_id'],
  indexes: [
    {
      name: 'pk_status_report',
      columns: ['status_report_id'],
      unique: true,
    },
    {
      name: 'idx_status_report_project_id',
      columns: ['project_id'],
    },
    {
      name: 'idx_status_report_status',
      columns: ['status'],
    },
    {
      name: 'idx_status_report_generated_by_user_id',
      columns: ['generated_by_user_id'],
    },
    {
      name: 'idx_status_report_published_by_user_id',
      columns: ['published_by_user_id'],
    },
  ],
  version: 1,
};
