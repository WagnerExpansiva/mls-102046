/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectTimeline.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const projectTimelineTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmProjectTimeline',
  tableName: 'project_timeline',
  purpose: 'transacao',
  description: 'Stores project timelines.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Primary and referenced project identifier.',
    },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['project_id'],
  indexes: [
    {
      name: 'pk_project_timeline',
      columns: ['project_id'],
      unique: true,
    },
  ],
  version: 1,
};
