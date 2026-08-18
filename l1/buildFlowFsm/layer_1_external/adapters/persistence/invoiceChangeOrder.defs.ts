/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrder.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "InvoiceChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "InvoiceChangeOrder",
    "tableName": "invoice_change_order",
    "columns": [
      {
        "name": "invoice_change_order_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the invoice change order association."
      },
      {
        "name": "invoice_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced invoice identifier."
      },
      {
        "name": "change_order_id",
        "type": "uuid",
        "nullable": false,
        "description": "Referenced change order identifier."
      }
    ],
    "primaryKey": [
      "invoice_change_order_id"
    ],
    "indexes": [
      {
        "indexName": "pk_invoice_change_order",
        "columns": [
          "invoice_change_order_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_invoice_change_order_invoice_id",
        "columns": [
          "invoice_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_change_order_change_order_id",
        "columns": [
          "change_order_id"
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
    "purpose": "Associates invoices with change orders.",
    "retentionDays": 0
  }
} as const;

export default invoiceChangeOrderTableDefinition;

export const pipeline = [
  {
    "id": "invoiceChangeOrder__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts"
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
