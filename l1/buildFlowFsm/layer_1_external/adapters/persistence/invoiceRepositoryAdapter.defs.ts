/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const invoiceRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InvoiceRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "className": "InvoiceRepositoryAdapter",
    "portRef": "IInvoiceRepository",
    "tableRef": "invoices",
    "mdmReads": [],
    "notes": [
      "Maps invoice_id, client_id, project_id, and status as snake_case columns; stores commercial_reference and amount in details JSONB."
    ]
  }
} as const;

export default invoiceRepositoryAdapter;

export const pipeline = [
  {
    "id": "invoiceRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
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
