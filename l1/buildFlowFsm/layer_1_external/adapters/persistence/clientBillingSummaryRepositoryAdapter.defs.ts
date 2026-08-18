/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummaryRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ClientBillingSummaryRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientBillingSummary",
    "className": "ClientBillingSummaryRepositoryAdapter",
    "portRef": "IClientBillingSummaryRepository",
    "tableRef": "client_billing_summaries",
    "mdmReads": [],
    "notes": [
      "Maps client_id and project_id as snake_case columns; stores approved_change_order_references, invoice_references, approved_change_order_amount, billable_amount, invoiced_amount, and client_available_amount in details JSONB."
    ]
  }
} as const;

export default clientBillingSummaryRepositoryAdapter;

export const pipeline = [
  {
    "id": "clientBillingSummaryRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummaryRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummaryRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/clientBillingSummary.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
