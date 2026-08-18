/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectDashboard.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const projectDashboardTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmProjectDashboard',
  tableName: 'project_dashboard',
  purpose: 'controle',
  description: 'Stores project dashboard projections.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: [],
  version: 1,
};
