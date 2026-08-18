/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.defs.ts" enhancement="_blank"/>

export const invoiceTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Invoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Invoice",
    "tableName": "invoice",
    "columns": [
      {
        "name": "invoice_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the invoice."
      },
      {
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced client identifier."
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced project identifier."
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "Current invoice status."
      }
    ],
    "primaryKey": [
      "invoice_id"
    ],
    "indexes": [
      {
        "indexName": "pk_invoice",
        "columns": [
          "invoice_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_invoice_client_id",
        "columns": [
          "client_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_status",
        "columns": [
          "status"
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
    "purpose": "Stores invoices.",
    "retentionDays": 0
  }
} as const;

export default invoiceTableDefinition;

export const pipeline = [
  {
    "id": "invoice__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
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
