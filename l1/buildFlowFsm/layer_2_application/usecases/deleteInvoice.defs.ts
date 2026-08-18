/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.defs.ts" enhancement="_blank"/>

export const deleteInvoiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteInvoice",
    "ports": [
      "Invoice"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteInvoice",
        "inputTypeName": "DeleteInvoiceInput",
        "outputTypeName": "DeleteInvoiceOutput",
        "input": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.invoiceId",
            "item": {
              "fields": []
            }
          }
        ],
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
        "transactional": true,
        "steps": [
          "Load the Invoice aggregate by invoiceId through the Invoice port.",
          "Capture the canonical output projection from the loaded invoice before deletion.",
          "Delete the Invoice aggregate through the Invoice port inside the transaction.",
          "Return invoiceId, clientId, projectId, commercialReference, amount, and status from the deleted invoice."
        ],
        "outputShape": {
          "kind": "object",
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

export default deleteInvoiceUsecase;

export const pipeline = [
  {
    "id": "deleteInvoice__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.defs.ts",
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
