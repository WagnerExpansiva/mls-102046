/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.defs.ts" enhancement="_blank"/>

export const handoffInvoiceToClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffInvoiceToClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffInvoiceToClient",
    "ports": [
      "Invoice"
    ],
    "rulesApplied": [
      "clientVisibleInvoice"
    ],
    "functions": [
      {
        "functionName": "handoffInvoiceToClient",
        "inputTypeName": "HandoffInvoiceToClientInput",
        "outputTypeName": "HandoffInvoiceToClientOutput",
        "input": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "description": "Fatura selecionada para disponibilização ao cliente.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.invoiceId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "commercialReference",
            "type": "string",
            "required": true,
            "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.commercialReference",
            "item": {
              "fields": []
            }
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "description": "Valor comercial total faturado para a obra.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.amount",
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
        "rulesApplied": [
          "clientVisibleInvoice"
        ],
        "transactional": true,
        "steps": [
          "Load the Invoice aggregate through the Invoice port using the selected invoiceId.",
          "Validate that the invoice exists, that commercialReference is non-empty, and that amount is a valid non-negative monetary value; include clientVisibleInvoice in any blocking validation error details.",
          "Apply the clientVisibleInvoice rule inline: a cancelled invoice cannot be handed off; an issued invoice transitions to availableToClient; an already availableToClient invoice remains idempotently available.",
          "Update the invoice commercialReference and amount from the validated request, persist the Invoice aggregate through the Invoice port in the transaction, and return the canonical invoiceId, clientId, projectId, commercialReference, amount, and status projection."
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

export default handoffInvoiceToClientUsecase;

export const pipeline = [
  {
    "id": "handoffInvoiceToClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffInvoiceToClient.defs.ts",
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
    "rulesApplied": [
      "clientVisibleInvoice"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
