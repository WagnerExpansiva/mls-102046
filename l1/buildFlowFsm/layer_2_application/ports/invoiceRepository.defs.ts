/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.defs.ts" enhancement="_blank"/>

export const invoiceRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InvoiceRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "interfaceName": "IInvoiceRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: InvoiceId"
        ],
        "returns": "Invoice | null",
        "description": "Retrieve an invoice by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: InvoiceFilter"
        ],
        "returns": "Invoice[]",
        "description": "List invoices matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: Invoice"
        ],
        "returns": "void",
        "description": "Persist an invoice aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "Invoice[]",
        "description": "List invoices belonging to a project."
      }
    ]
  }
} as const;

export default invoiceRepositoryPort;

export const pipeline = [
  {
    "id": "invoiceRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
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
