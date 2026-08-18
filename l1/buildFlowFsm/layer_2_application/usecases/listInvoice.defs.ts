/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.defs.ts" enhancement="_blank"/>

export const listInvoiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listInvoice",
    "ports": [
      "Invoice"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "listInvoice",
        "inputTypeName": "ListInvoiceInput",
        "outputTypeName": "ListInvoiceOutput",
        "input": [],
        "output": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "commercialReference",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          }
        ],
        "ports": [
          "Invoice"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "List invoices through the Invoice port.",
          "Project each invoice to invoiceId, clientId, projectId, commercialReference, amount, and status.",
          "Return the collection without pagination."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "invoiceId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.invoiceId"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.clientId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.projectId"
            },
            {
              "name": "commercialReference",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.commercialReference"
            },
            {
              "name": "amount",
              "type": "number",
              "required": true,
              "fieldRef": "Invoice.amount"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default listInvoiceUsecase;

export const pipeline = [
  {
    "id": "listInvoice__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
