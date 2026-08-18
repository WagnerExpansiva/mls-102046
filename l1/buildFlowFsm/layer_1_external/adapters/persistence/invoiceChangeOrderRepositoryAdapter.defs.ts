/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrderRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InvoiceChangeOrderRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InvoiceChangeOrder",
    "className": "InvoiceChangeOrderRepositoryAdapter",
    "portRef": "IInvoiceChangeOrderRepository",
    "tableRef": "invoice_change_orders",
    "mdmReads": [],
    "notes": [
      "Maps invoice_change_order_id, invoice_id, and change_order_id as snake_case columns; stores billed_amount in details JSONB."
    ]
  }
} as const;

export default invoiceChangeOrderRepositoryAdapter;

export const pipeline = [
  {
    "id": "invoiceChangeOrderRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrderRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrderRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceChangeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts"
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
