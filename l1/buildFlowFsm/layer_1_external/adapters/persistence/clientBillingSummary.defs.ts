/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummary.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ClientBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ClientBillingSummary",
    "tableName": "client_billing_summary",
    "columns": [
      {
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced client identifier and summary key."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier and summary key."
      }
    ],
    "primaryKey": [
      "client_id",
      "project_id"
    ],
    "indexes": [
      {
        "indexName": "pk_client_billing_summary",
        "columns": [
          "client_id",
          "project_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_client_billing_summary_client_id",
        "columns": [
          "client_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_client_billing_summary_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": false,
    "purpose": "Stores client billing summaries.",
    "retentionDays": 0
  }
} as const;

export default clientBillingSummaryTableDefinition;

export const pipeline = [
  {
    "id": "clientBillingSummary__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummary.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummary.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
