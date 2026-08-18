/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecision.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ChangeOrderDecision",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ChangeOrderDecision",
    "tableName": "change_order_decision",
    "columns": [
      {
        "name": "change_order_decision_id",
        "type": "uuid",
        "nullable": false,
        "description": "Primary identifier for the change order decision."
      },
      {
        "name": "decision",
        "type": "text",
        "nullable": false,
        "description": "Decision status or outcome."
      }
    ],
    "primaryKey": [
      "change_order_decision_id"
    ],
    "indexes": [
      {
        "indexName": "pk_change_order_decision",
        "columns": [
          "change_order_decision_id"
        ],
        "unique": true
      },
      {
        "indexName": "idx_change_order_decision_decision",
        "columns": [
          "decision"
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
    "purpose": "Stores a decision made for a change order.",
    "retentionDays": 0
  }
} as const;

export default changeOrderDecisionTableDefinition;

export const pipeline = [
  {
    "id": "changeOrderDecision__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecision.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderDecision.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts"
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
