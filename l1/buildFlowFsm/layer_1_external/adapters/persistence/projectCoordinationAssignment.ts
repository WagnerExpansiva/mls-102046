/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectCoordinationAssignment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const projectCoordinationAssignmentTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmProjectCoordinationAssignment',
  tableName: 'project_coordination_assignment',
  purpose: 'cadastro',
  description: 'Stores project coordination assignments.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'project_coordination_assignment_id',
      postgresType: 'UUID',
      description: 'Primary identifier for the coordination assignment.',
    },
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Referenced project identifier.',
    },
    {
      name: 'field_coordinator_id',
      postgresType: 'UUID',
      description: 'Referenced field coordinator identifier.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      description: 'Current coordination assignment status.',
    },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['project_coordination_assignment_id'],
  indexes: [
    {
      name: 'idx_project_coordination_assignment_project_id',
      columns: ['project_id'],
    },
    {
      name: 'idx_project_coordination_assignment_field_coordinator_id',
      columns: ['field_coordinator_id'],
    },
    {
      name: 'idx_project_coordination_assignment_status',
      columns: ['status'],
    },
  ],
  version: 1,
};
