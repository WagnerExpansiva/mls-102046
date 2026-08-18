/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/scheduleRiskAssessment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const scheduleRiskAssessmentTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmScheduleRiskAssessment',
  tableName: 'schedule_risk_assessment',
  purpose: 'cadastro',
  description: 'Stores schedule risk assessments.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'project_id',
      postgresType: 'UUID',
      description: 'Referenced project identifier.',
    },
    {
      name: 'work_task_id',
      postgresType: 'UUID',
      description: 'Referenced work task identifier.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
    },
  ],
  primaryKey: ['project_id', 'work_task_id'],
  indexes: [
    {
      name: 'pk_schedule_risk_assessment',
      columns: ['project_id', 'work_task_id'],
      unique: true,
    },
    {
      name: 'idx_schedule_risk_assessment_project_id',
      columns: ['project_id'],
    },
    {
      name: 'idx_schedule_risk_assessment_work_task_id',
      columns: ['work_task_id'],
    },
  ],
  version: 1,
};
