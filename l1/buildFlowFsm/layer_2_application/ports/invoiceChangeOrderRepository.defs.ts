/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InvoiceChangeOrderRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InvoiceChangeOrder",
    "interfaceName": "IInvoiceChangeOrderRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: InvoiceChangeOrderId"
        ],
        "returns": "InvoiceChangeOrder | null",
        "description": "Retrieve an invoice change order by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: InvoiceChangeOrderFilter"
        ],
        "returns": "InvoiceChangeOrder[]",
        "description": "List invoice change orders matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: InvoiceChangeOrder"
        ],
        "returns": "void",
        "description": "Persist an invoice change order aggregate."
      },
      {
        "name": "listByInvoiceId",
        "params": [
          "invoiceId: InvoiceId"
        ],
        "returns": "InvoiceChangeOrder[]",
        "description": "List change orders associated with an invoice."
      }
    ]
  }
} as const;

export default invoiceChangeOrderRepositoryPort;

export const pipeline = [
  {
    "id": "invoiceChangeOrderRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
